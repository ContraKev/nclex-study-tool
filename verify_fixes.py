import os
import json

def verify():
    bundle_path = "dist/SNF_Simulator_Bundled.html"
    
    if not os.path.exists(bundle_path):
        print("FAIL: Bundle not found!")
        return

    with open(bundle_path, "r") as f:
        content = f.read()
        
    checks = [
        ("Exam Q10 Fix (Index-based grading)", "parseInt(input.value)"),
        ("Exam Q27 Fix (Answer Key)", "Discard regular insulin if it appears cloudy"),
        ("Mission Exit Fix (Selector Return)", "showMissionSelector()"),
        ("Mission UI Fix (Header Display)", "MISSION ${currentMission.numerical_id}"),
        ("Bowtie Fix (Default Selection)", "disabled selected>Select Condition..."),
    ]
    
    print(f"Verifying {bundle_path} ({len(content)} bytes)...")
    print("-" * 40)
    
    all_passed = True
    for name, string in checks:
        if string in content:
            print(f"[PASS] {name}")
        else:
            print(f"[FAIL] {name}")
            all_passed = False
            
    print("-" * 40)
    
    # Verify scenarios.json validity
    try:
        with open("scenarios.json", "r") as f:
            json.load(f)
        print("[PASS] scenarios.json is valid JSON")
    except Exception as e:
        print(f"[FAIL] scenarios.json is invalid: {e}")
        all_passed = False
        
    # Verify Answer Key existence
    if os.path.exists("Mission_Answer_Key.md"):
        print("[PASS] Mission_Answer_Key.md exists")
    else:
        print("[FAIL] Mission_Answer_Key.md missing")
        all_passed = False

    if all_passed:
        print("\nSUCCESS: All systems go.")
    else:
        print("\nFAILURE: Some checks failed.")

if __name__ == "__main__":
    verify()
