import json
import re

SCENARIOS_JSON = "scenarios.json"

REQUIRED_PROFILE_KEYS = ["demographics", "chief_complaint", "hpi", "pmh", "sh", "ros"]
REQUIRED_ROS_KEYS = ["cardio", "resp", "neuro", "gi", "gu"]
MIN_HPI_LENGTH = 50  # Characters
MIN_PMH_LENGTH = 10

def load_data():
    with open(SCENARIOS_JSON, 'r') as f:
        return json.load(f)

def audit_missions():
    data = load_data()
    issues = []
    
    for module in data.get('modules', []):
        if module.get('type') == 'mission':
            for mission in module.get('scenarios', []):
                mid = mission.get('id', 'Unknown')
                title = mission.get('title', 'Unknown')
                
                # 1. Profile Check
                profile = mission.get('patient_profile', {})
                for key in REQUIRED_PROFILE_KEYS:
                    if key not in profile:
                        issues.append(f"[{mid}] Missing profile key: {key}")
                    elif not profile[key]:
                        issues.append(f"[{mid}] Empty profile key: {key}")
                
                # Deep Profile Check (HPI Length)
                if len(str(profile.get('hpi', ''))) < MIN_HPI_LENGTH:
                     issues.append(f"[{mid}] HPI too short (<{MIN_HPI_LENGTH} chars)")
                
                # ROS Check
                ros = profile.get('ros', {})
                for key in REQUIRED_ROS_KEYS:
                     if key not in ros:
                         issues.append(f"[{mid}] Missing ROS: {key}")
                
                # 2. Exhibits Check
                exhibits = mission.get('exhibits', [])
                if len(exhibits) < 2:
                    issues.append(f"[{mid}] Too few exhibits ({len(exhibits)}/2)")
                
                for ex in exhibits:
                    if not ex.get('title') or (not ex.get('data') and not ex.get('content')):
                         issues.append(f"[{mid}] Malformed exhibit: {ex.get('title')}")

                # 3. Steps Check
                steps = mission.get('steps', [])
                if len(steps) != 3:
                     issues.append(f"[{mid}] Incorrect step count ({len(steps)}/3)")
                
                types = [s.get('type') for s in steps]
                if 'bowtie' not in types:
                     issues.append(f"[{mid}] Missing Bowtie step")
                if 'extended_sata' not in types and 'sata' not in types:
                     issues.append(f"[{mid}] Missing SATA step")
                if 'matrix' not in types:
                     issues.append(f"[{mid}] Missing Matrix step")

    if not issues:
        print("SUCCESS: All missions meet the Gold Standard.")
    else:
        print(f"FAILED: Found {len(issues)} issues.")
        for i in issues:
            print(i)

if __name__ == "__main__":
    audit_missions()
