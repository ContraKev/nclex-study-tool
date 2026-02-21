import json

SCENARIOS_JSON = "scenarios.json"

ROS_FIELDS = ["cardio", "resp", "neuro", "gi", "gu", "skin", "musc"]

DEFAULTS = {
    "cardio": "Regular rate and rhythm. S1/S2 audible. No murmurs.",
    "resp": "Lungs clear to auscultation bilaterally. No distress.",
    "neuro": "Alert and oriented x3. PEERLA.",
    "gi": "Abdomen soft, non-tender. Bowel sounds active.",
    "gu": "No complaints. Urine clear.",
    "skin": "Warm and dry. No rashes.",
    "musc": "Full ROM. No deformity."
}

# Specific contextual defaults for different cases
CONTEXT_DEFAULTS = {
    "Heart Failure": {
        "resp": "Mild bibasilar crackles.",
        "cardio": "S3 gallop may be present. 1+ edema."
    },
    "COPD": {
        "resp": "Diminished breath sounds. Expiratory wheeze.",
        "cardio": "Tachycardic."
    },
    "Diabetes": {
        "neuro": "Sensation intact in extremities (or diminished if neuropathy).",
        "skin": "Check feet for ulcers."
    }
}

def load_data():
    with open(SCENARIOS_JSON, 'r') as f:
        return json.load(f)

def save_data(data):
    with open(SCENARIOS_JSON, 'w') as f:
        json.dump(data, f, indent=2)

def audit_and_fix():
    data = load_data()
    fixed_count = 0
    
    for module in data.get('modules', []):
        if module.get('type') == 'mission':
            for mission in module.get('scenarios', []):
                profile = mission.get('patient_profile', {})
                ros = profile.get('ros', {})
                
                # Check for missing keys or empty values
                for field in ROS_FIELDS:
                    if field not in ros or not ros[field] or ros[field] == "undefined":
                        print(f"Fixing missing '{field}' for {mission['id']} ({mission['title']})")
                        
                        # logic to pick a better default based on title/history
                        val = DEFAULTS[field]
                        
                        # Simple keyword matching for better context
                        title = mission.get('title', '').lower()
                        hpi = profile.get('hpi', '').lower()
                        
                        if "heart failure" in title or "chf" in title:
                            if field in CONTEXT_DEFAULTS["Heart Failure"]:
                                val = CONTEXT_DEFAULTS["Heart Failure"][field]
                        elif "copd" in title or "asthma" in title:
                            if field in CONTEXT_DEFAULTS["COPD"]:
                                val = CONTEXT_DEFAULTS["COPD"][field]
                        elif "diabetes" in title or "hypoglycemia" in title:
                            if field in CONTEXT_DEFAULTS["Diabetes"]:
                                val = CONTEXT_DEFAULTS["Diabetes"][field]
                                
                        ros[field] = val
                        fixed_count += 1
                
                profile['ros'] = ros
    
    save_data(data)
    print(f"Fixed {fixed_count} missing ROS fields.")

if __name__ == "__main__":
    audit_and_fix()
