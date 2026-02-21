import json
import ast

def verify_q10():
    with open("lectureexam.js", "r") as f:
        content = f.read()
    
    # Strip JS prefix and suffix to get valid JSON/List
    # window.lectureExamData = [ ... ];
    start = content.find("[")
    end = content.rfind("];") + 1
    json_str = content[start:end]
    
    try:
        data = json.loads(json_str)
    except Exception as e:
        print(f"JSON load failed: {e}")
        # manual extraction for specific id
        return

    q10 = next((q for q in data if q["id"] == 10), None)
    if not q10:
        print("Q10 not found")
        return

    print(f"Question: {q10['question']}")
    print("-" * 20)
    
    options = q10["options"]
    answers = q10["answer"]
    
    print(f"Options ({len(options)}):")
    for i, opt in enumerate(options):
        print(f"[{i}] {repr(opt)}")
        
    print("-" * 20)
    print(f"Answers ({len(answers)}):")
    for ans in answers:
        print(f"ANS: {repr(ans)}")
        
    print("-" * 20)
    print("Verification:")
    
    match_count = 0
    for ans in answers:
        found = False
        for opt in options:
            if ans == opt:
                print(f"MATCH: {repr(ans)}")
                found = True
                match_count += 1
                break
        if not found:
            print(f"FAIL: {repr(ans)} not found in options!")
            
    if match_count == len(answers):
        print("SUCCESS: All answers found in options.")
    else:
        print("FAILURE: Mismatch detected.")

if __name__ == "__main__":
    verify_q10()
