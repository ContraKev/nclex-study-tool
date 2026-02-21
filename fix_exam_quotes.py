import json
import re

def fix_quotes():
    file_path = "lectureexam.js"
    with open(file_path, "r") as f:
        content = f.read()
    
    # Extract JSON part
    prefix = "window.lectureExamData = "
    suffix = ";\n"
    
    start = content.find(prefix) + len(prefix)
    end = content.rfind(";")
    
    json_str = content[start:end]
    data = json.loads(json_str)
    
    cleaned_count = 0
    
    for q in data:
        # Fix Options
        new_options = []
        for opt in q["options"]:
            # Check for " at start and end
            if opt.startswith('"') and opt.endswith('"'):
                new_opt = opt[1:-1] # Strip quotes
                new_options.append(new_opt)
                cleaned_count += 1
            elif opt.startswith('“') and opt.endswith('”'): # Smart quotes
                new_opt = opt[1:-1]
                new_options.append(new_opt)
                cleaned_count += 1
            else:
                new_options.append(opt)
        q["options"] = new_options
        
        # Fix Answers
        if isinstance(q["answer"], list):
            new_answers = []
            for ans in q["answer"]:
                if ans.startswith('"') and ans.endswith('"'):
                    new_answers.append(ans[1:-1])
                elif ans.startswith('“') and ans.endswith('”'):
                    new_answers.append(ans[1:-1])
                else:
                    new_answers.append(ans)
            q["answer"] = new_answers
        elif isinstance(q["answer"], str):
            ans = q["answer"]
            if ans.startswith('"') and ans.endswith('"'):
                q["answer"] = ans[1:-1]
            elif ans.startswith('“') and ans.endswith('”'):
                q["answer"] = ans[1:-1]

    print(f"Cleaned {cleaned_count} options.")
    
    # Re-serialize
    new_json = json.dumps(data, indent=4)
    new_content = f"{prefix}{new_json}{suffix}"
    
    with open(file_path, "w") as f:
        f.write(new_content)

if __name__ == "__main__":
    fix_quotes()
