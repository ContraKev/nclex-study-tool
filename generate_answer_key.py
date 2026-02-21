import json
import os

def generate_key():
    input_file = "scenarios.json"
    output_file = "Mission_Answer_Key.md"
    
    with open(input_file, "r") as f:
        data = json.load(f)
        
    missions = []
    
    # Extract all missions
    for module in data.get("modules", []):
        for scenario in module.get("scenarios", []):
            if scenario.get("type") == "mission":
                missions.append(scenario)
                
    # Sort by numerical ID
    missions.sort(key=lambda x: x.get("numerical_id", 0))
    
    md = "# SNF: Charge Nurse Simulator - Master Answer Key\n\n"
    md += "> **Note to User**: This document contains the solution key for all 40 Clinical Missions. Use it to check your work or study the rationales.\n\n"
    
    for m in missions:
        mid = m.get("id")
        num_id = m.get("numerical_id")
        title = m.get("title")
        
        md += f"---\n\n"
        md += f"## Mission {num_id}: {title} ({mid})\n\n"
        
        for i, step in enumerate(m.get("steps", [])):
            md += f"### Step {i+1}: {step.get('type').replace('_', ' ').upper()}\n"
            md += f"**Prompt**: {step.get('prompt')}\n\n"
            
            # Format Answer based on type
            md += "**Correct Answer**:\n"
            
            if step["type"] == "matrix":
                md += "| Row | Correct Column |\n|---|---|\n"
                ans_dict = step.get("answer", {})
                for row, col in ans_dict.items():
                    md += f"| {row} | **{col}** |\n"
                    
            elif step["type"] == "extended_sata":
                ans_list = step.get("answer", [])
                for a in ans_list:
                    md += f"- [x] {a}\n"
                    
            elif step["type"] == "bowtie":
                center = step.get("center_condition", {}).get("answer")
                left = step.get("left_actions", {}).get("answer", [])
                right = step.get("right_monitor", {}).get("answer", [])
                
                md += f"- **Condition**: {center}\n"
                md += "- **Actions to Take**:\n"
                for l in left:
                    md += f"  - {l}\n"
                md += "- **Parameters to Monitor**:\n"
                for r in right:
                    md += f"  - {r}\n"
            
            md += "\n"
            md += f"**Rationale**:\n> {step.get('rationale')}\n\n"
            
    with open(output_file, "w") as f:
        f.write(md)
    
    print(f"Successfully generated {output_file} with {len(missions)} missions.")

if __name__ == "__main__":
    generate_key()
