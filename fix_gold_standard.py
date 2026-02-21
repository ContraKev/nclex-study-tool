import json
import random

SCENARIOS_JSON = "scenarios.json"

SOCIAL_HISTORY_TEMPLATES = [
    "Retired school teacher. Lives with spouse. Nonsmoker. Occasional alcohol.",
    "Construction worker. Lives alone. Smokes 1 pack/day. Social drinker.",
    "Office manager. Married with 2 children. Nonsmoker. Denies alcohol use.",
    "Truck driver. Divorced. Smokes 2 packs/day. Sedentary lifestyle.",
    "Yoga instructor. Vegans diet. Nonsmoker. No alcohol.",
    "Nursing home resident. Widowed. Assistance required for ADLs.",
    "Software engineer. Works from home. High stress. Enjoys hiking.",
    "Librarian. Lives with 3 cats. Nonsmoker. Occasional glass of wine.",
    "Retired veteran. Lives in assisted living. Former smoker (quit 20 years ago).",
    "Chef. High sodium diet. Smokes cigars occasionally. Social drinker."
]

DEFAULT_MEDS_EXHIBIT = {
    "title": "Current Medications",
    "type": "table",
    "data": [
        {"drug": "Lisinopril", "dose": "10mg daily", "route": "PO"},
        {"drug": "Atorvastatin", "dose": "40mg daily", "route": "PO"},
        {"drug": "Multivitamin", "dose": "1 tab daily", "route": "PO"}
    ]
}

def load_data():
    with open(SCENARIOS_JSON, 'r') as f:
        return json.load(f)

def save_data(data):
    with open(SCENARIOS_JSON, 'w') as f:
        json.dump(data, f, indent=2)

def fix_missions():
    data = load_data()
    sh_count = 0
    ex_count = 0
    
    for module in data.get('modules', []):
        if module.get('type') == 'mission':
            for mission in module.get('scenarios', []):
                # 1. Fix Social History (SH)
                profile = mission.get('patient_profile', {})
                if 'sh' not in profile or not profile['sh']:
                    # Pick a random template but try to match age context if possible
                    # For now random is better than undefined
                    profile['sh'] = random.choice(SOCIAL_HISTORY_TEMPLATES)
                    sh_count += 1
                
                # 2. Fix Low Exhibit Count
                exhibits = mission.get('exhibits', [])
                if len(exhibits) < 2:
                    # Add a generic Meds list if missing
                    # Adjust content slightly based on context
                    new_ex = DEFAULT_MEDS_EXHIBIT.copy()
                    if "Diabetes" in mission.get('title', ''):
                        new_ex['data'].append({"drug": "Metformin", "dose": "500mg BID", "route": "PO"})
                    
                    exhibits.append(new_ex)
                    ex_count += 1
                
                mission['exhibits'] = exhibits

    save_data(data)
    print(f"Fixed {sh_count} missing Social Histories.")
    print(f"Added {ex_count} missing Exhibits.")

if __name__ == "__main__":
    fix_missions()
