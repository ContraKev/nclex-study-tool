import os
import re
import json

# Configuration
HTML_FILE = "NGN_Mastery_Hub_v3.2.html"
SCENARIOS_JSON = "scenarios.json"
OUTPUT_FILE = "dist/SNF_Simulator_Bundled.html"

def load_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def bundle_html():
    if not os.path.exists("dist"):
        os.makedirs("dist")

    # Auto-save version before build
    print("💾 Auto-saving version before build...")
    try:
        import subprocess
        result = subprocess.run([
            'python3', 'version_control.py', 'save', 'Auto-save before build'
        ], capture_output=True, text=True)
        if result.returncode == 0:
            print("✅ Version saved")
        else:
            print(f"⚠️  Version save failed: {result.stderr.strip()}")
    except Exception as e:
        print(f"⚠️  Version save error: {e}")

    print(f"Reading {HTML_FILE}...")
    html_content = load_file(HTML_FILE)

    # 1. Inline Script Tags
    # Regex to find <script src="..."></script>
    # We iterate and replace each occurrence
    script_pattern = re.compile(r'<script src="([^"]+)"></script>')
    
    def replacer(match):
        src = match.group(1)
        print(f"  Inlining {src}...")
        try:
            js_content = load_file(src)
            return f'<script>\n/* SOURCE: {src} */\n{js_content}\n</script>'
        except FileNotFoundError:
            print(f"  WARNING: Could not find {src}. Keeping tag.")
            return match.group(0)

    html_content = script_pattern.sub(replacer, html_content)

    # 2. Inject scenarios.json data
    # We need to convert the JSON structure to the JS structure expected by the game.
    # The game uses:
    # - window.lectureExamData (Array of objects)
    # - window.missions (likely) - checking mission_prototype.js would confirm, 
    #   but missions_cardio_1.js defines window.missions_cardio_1.
    #   Data loader merges them.
    
    print(f"Processing {SCENARIOS_JSON}...")
    try:
        with open(SCENARIOS_JSON, 'r') as f:
            scenarios_data = json.load(f)
        
        # Convert modules to JS injections
        injection_js = "\n<script>\n/* INJECTED SCENARIOS.JSON DATA */\n"
        injection_js += "console.log('Initializing JSON Data Injection...');\n"
        
        for module in scenarios_data.get("modules", []):
            mod_type = module.get("type", "clinical")
            
            if mod_type == "exam":
                # Convert to separate exam data arrays
                # JSON: { id, type, text, question, options, correct_indices, rationales }
                # JS: { id, slide, question, options, answer, rationale }

                exam_questions = []
                for s in module["scenarios"]:
                    question_text = s.get('text', '') or s.get('prompt', '') or s.get('question', '')
                    options = s.get("options", [])
                    answer = None
                    rationale = s.get("rationale", "") or s.get("rationales", "")

                    # Auto-randomize answer positions for SATA questions to prevent pattern recognition
                    if s.get("type") == "extended_sata" and "correct_indices" in s and options:
                        import random
                        # Shuffle option positions
                        indices = list(range(len(options)))
                        random.shuffle(indices)

                        # Reorder options and update correct indices (only for build, don't modify source)
                        shuffled_options = [options[i] for i in indices]
                        old_to_new = {old_idx: new_idx for new_idx, old_idx in enumerate(indices)}
                        new_correct_indices = [old_to_new[idx] for idx in s["correct_indices"]]

                        # Use shuffled options for this build only
                        options = shuffled_options
                        correct_indices = new_correct_indices
                    else:
                        correct_indices = s.get("correct_indices", [])

                    # Handle different question types
                    if s.get("type") == "matrix":
                        # Matrix questions have a different answer format
                        answer = s.get("answer", {})
                        # For matrix questions, create a combined options list from columns
                        if "columns" in s and "rows" in s:
                            options = s["columns"]  # Use columns as the options for matrix
                    elif correct_indices:
                        # SATA/multiple choice questions
                        correct_opts = [options[i] for i in correct_indices]
                        answer = correct_opts[0] if len(correct_opts) == 1 else correct_opts
                    elif "answer" in s:
                        # Standard questions with direct answer field
                        ans = s["answer"]
                        if isinstance(ans, list):
                            if len(ans) == 1:
                                # Single choice: get the option text
                                answer = options[ans[0]] if ans[0] < len(options) else ans[0]
                            else:
                                # Multiple choice: get all option texts
                                answer = [options[i] for i in ans if i < len(options)]
                        else:
                            # Fallback for non-array answers
                            answer = ans
                    else:
                        # Skip scenarios that don't have proper answer format
                        print(f"Warning: Skipping scenario {s.get('id', 'unknown')} - no valid answer format")
                        continue

                    # Rationale: Join array if it exists, or use string
                    if isinstance(rationale, list):
                        rationale = " ".join(rationale)

                    q_obj = {
                        "id": s["id"],
                        "slide": 999, # Placeholder
                        "question": question_text,
                        "options": options,
                        "answer": answer,
                        "rationale": rationale
                    }
                    exam_questions.append(q_obj)

                # Create separate exam arrays for each module
                module_name = module["id"].replace("_", "").replace("quiz", "").replace("mod", "")
                injection_js += f"window.{module_name}ExamData = {json.dumps(exam_questions)};\n"
                injection_js += f"window.availableExams = window.availableExams || [];\n"
                injection_js += f"window.availableExams.push({{id: '{module['id']}', name: '{module['name']}', data: window.{module_name}ExamData}});\n"
                injection_js += f"console.log('Created exam module: {module['name']} with {len(exam_questions)} questions');\n"

            elif mod_type == "mission":
                # NGN Missions (High Fidelity)
                # We assume the scenarios in this module ARE the mission objects
                # matching the JS structure (numerical_id, steps, etc.)
                
                missions = module["scenarios"]
                injection_js += f"window.customMissions = window.customMissions || [];\n"
                injection_js += f"window.customMissions = window.customMissions.concat({json.dumps(missions)});\n"
                injection_js += f"console.log('Injected {len(missions)} NGN missions from {module['id']}');\n"

            else:
                # Clinical / Standard Modules (Legacy Engine Support)
                # These might not play directly in the HTML engine without an adapter,
                # but we inject them for completeness.
                injection_js += f"window.customModules = window.customModules || [];\n"
                injection_js += f"window.customModules.push({json.dumps(module)});\n"

        # Also include the original lectureExamData as an available exam
        injection_js += f"window.availableExams = window.availableExams || [];\n"
        injection_js += f"if(window.lectureExamData && window.lectureExamData.length > 0) {{\n"
        injection_js += f"    window.availableExams.push({{id: 'original_cardiac', name: 'Cardiovascular & Diabetes Pharmacology Exam (Original)', data: window.lectureExamData}});\n"
        injection_js += f"    console.log('Included original cardiac exam with ' + window.lectureExamData.length + ' questions');\n"
        injection_js += f"}}\n"

        injection_js += "</script>\n"
        
        # Insert injection before the closing </body> tag
        html_content = html_content.replace('</body>', f'{injection_js}</body>')

    except Exception as e:
        print(f"Error processing scenarios.json: {e}")

    # Write output
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"Successfully created {OUTPUT_FILE}")

if __name__ == "__main__":
    bundle_html()
