import json
import random

SCENARIOS_JSON = "scenarios.json"

# Categorized Distractors to ensure relevance
DISTRACTORS = {
    "actions": [
        "Administer IV Acetaminophen",
        "Place patient in Reverse Trendelenburg",
        "Consult Social Work",
        "Administer Oral Sucrose",
        "Reassure the patient",
        "Document findings in chart",
        "Elevate legs on 2 pillows",
        "Offer ice chips",
        "Check tympanic temperature",
        "Perform bladder scan",
        "Dim the room lights",
        "Apply warm compress",
        "Change bed linens",
        "Review advance directives",
        "Update family members"
    ],
    "monitor": [
        "Bowel Sounds",
        "Skin Turgor",
        "Capillary Refill",
        "Pupillary Response",
        "Deep Tendon Reflexes",
        "Urine Color",
        "Pedal Pulses",
        "Oral Mucosa moisture",
        "Hand Grip Strength",
        "Respiratory effort",
        "Pain Score",
        "Clotting time",
        "Serum Albumin"
    ]
}

def load_data():
    with open(SCENARIOS_JSON, 'r') as f:
        return json.load(f)

def save_data(data):
    with open(SCENARIOS_JSON, 'w') as f:
        json.dump(data, f, indent=2)

def expand_bowtie_step(step, mission_title):
    # Ensure Left Actions has at least 5 options
    left_opts = step['left_actions']['options']
    while len(left_opts) < 5:
        new_opt = random.choice(DISTRACTORS['actions'])
        if new_opt not in left_opts:
            left_opts.append(new_opt)
    
    # Ensure Right Monitor has at least 5 options
    right_opts = step['right_monitor']['options']
    while len(right_opts) < 5:
        new_opt = random.choice(DISTRACTORS['monitor'])
        if new_opt not in right_opts:
            right_opts.append(new_opt)
            
    # Remove undefined if any (User request "undefined should be defined")
    step['left_actions']['options'] = [o for o in left_opts if o is not None]
    step['right_monitor']['options'] = [o for o in right_opts if o is not None]

    # Verify count again (just in case)
    if len(step['left_actions']['options']) > 6:
        step['left_actions']['options'] = step['left_actions']['options'][:6]
    
    if len(step['right_monitor']['options']) > 6:
        step['right_monitor']['options'] = step['right_monitor']['options'][:6]

def process_missions():
    data = load_data()
    count = 0
    
    for module in data.get('modules', []):
        if module.get('type') == 'mission':
            for mission in module.get('scenarios', []):
                for step in mission.get('steps', []):
                    if step.get('type') == 'bowtie':
                        expand_bowtie_step(step, mission.get('title'))
                        count += 1
    
    save_data(data)
    print(f"Expanded {count} bowtie steps.")

if __name__ == "__main__":
    process_missions()
