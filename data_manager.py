import json
import os
import re
from typing import List, Dict, Optional
from study_ingestor import Scenario, Drug

class DataManager:
    def __init__(self, scenarios_path="scenarios.json"):
        self.scenarios_path = scenarios_path
        self.scenarios_data = self._load_scenarios()

    def _load_scenarios(self):
        if not os.path.exists(self.scenarios_path):
            return {"modules": []}
        try:
            with open(self.scenarios_path, 'r') as f:
                return json.load(f)
        except json.JSONDecodeError:
            print(f"Error decoding {self.scenarios_path}")
            return {"modules": []}

    def save_scenarios(self):
        with open(self.scenarios_path, 'w') as f:
            json.dump(self.scenarios_data, f, indent=2)

    def add_module(self, module_id: str, module_name: str, module_type: str = "clinical"):
        # Check if exists
        for mod in self.scenarios_data.get("modules", []):
            if mod["id"] == module_id:
                # Update type if exists? Or just return
                print(f"Module {module_id} already exists.")
                return 
        
        new_module = {
            "id": module_id,
            "name": module_name,
            "type": module_type,
            "scenarios": []
        }
        self.scenarios_data.setdefault("modules", []).append(new_module)
        self.save_scenarios()
        print(f"Created new {module_type} module: {module_name}")

    def add_scenario_to_module(self, module_id: str, scenario: Scenario, overwrite: bool = False):
        # Ensure module exists
        module = next((m for m in self.scenarios_data["modules"] if m["id"] == module_id), None)
        if not module:
            print(f"Module {module_id} not found. Creating generic module.")
            self.add_module(module_id, f"Generated Module {module_id}")
            module = next((m for m in self.scenarios_data["modules"] if m["id"] == module_id), None)

        # Check for duplicate ID in this module
        existing_idx = next((i for i, s in enumerate(module["scenarios"]) if s["id"] == scenario.id), -1)
        
        scenario_dict = scenario.model_dump(exclude_none=True)
        
        if existing_idx != -1:
            if overwrite:
                print(f"Overwriting scenario {scenario.id} in {module_id}.")
                module["scenarios"][existing_idx] = scenario_dict
                self.save_scenarios()
            else:
                print(f"Scenario {scenario.id} already exists in {module_id}. Skipping.")
            return

        module["scenarios"].append(scenario_dict)
        self.save_scenarios()
        print(f"Added scenario {scenario.id} to {module_id}")

    def add_drug_to_js(self, file_path: str, drug: Drug):
        if not os.path.exists(file_path):
            print(f"JS file {file_path} not found.")
            return

        with open(file_path, 'r') as f:
            content = f.read()

        # Simple JS parser/appender
        # Look for the closing of the array "];"
        # We need to format the drug object as JS object (unquoted keys preferred but quoted keys are valid JS too)
        # To be safe and simple, we will use JSON string but standard JSON has quoted keys.
        # JS accepts quoted keys. 
        # { "g": "Name", ... } is valid JS.
        
        # We need to strip the last '];' and append ", \n <new_object> \n];"
        match = re.search(r'\]\s*;\s*$', content)
        if not match:
            print(f"Could not find array end in {file_path}")
            return
        
        # Convert drug to dict
        drug_dict = drug.model_dump(exclude_none=True)
        # We need to map our Drug model keys to the short keys used in JS if necessary?
        # The existing JS uses: g, b, c, cat, m, ind, con, aec, aes, inter, dosage, admin, nurse.
        # Our Drug model uses full names. We might need a mapper.
        
        # Let's map it for consistency with existing files
        mapped_drug = {
            "g": drug_dict.get("generic_name"),
            "b": drug_dict.get("brand_name"),
            "c": drug_dict.get("drug_class"),
            "cat": "generated", # Default category
            "m": drug_dict.get("mechanism_of_action"),
            "ind": drug_dict.get("indications"),
            "con": drug_dict.get("contraindications"),
            "aec": drug_dict.get("adverse_effects"), # Assuming 'common'
            "aes": "Refer to standard drug guide", # We might need separate fields for severe AE
            "inter": drug_dict.get("interactions"), # Structure might verify
            "dosage": "Refer to standard drug guide",
            "admin": drug_dict.get("patient_education"), # Mapping education to admin? Or nurse?
            "nurse": drug_dict.get("patient_education")
        }
        
        # For interactions, the JS uses {d: "", m: "", s: ""}
        if "interactions" in drug_dict:
            new_inter = []
            for i in drug_dict["interactions"]:
                new_inter.append({
                    "d": i.get("interacting_drug"),
                    "m": i.get("management") or i.get("type"),
                    "s": i.get("severity")
                })
            mapped_drug["inter"] = new_inter

        # Create JSON string but we want it to look like the file style slightly if possible, 
        # but valid JSON is valid JS.
        drug_json = json.dumps(mapped_drug, indent=4)
        
        # Insert before the closing bracket
        # Check if there is a trailing comma in the list
        insert_pos = match.start()
        # Look back to see if we need a comma
        pre_content = content[:insert_pos].rstrip()
        needs_comma = False
        if not pre_content.strip().endswith('['): # If not empty array
            if not pre_content.endswith(','):
                needs_comma = True

        insertion = ""
        if needs_comma:
            insertion += ","
        insertion += f"\n{drug_json}\n"
        
        new_content = content[:insert_pos] + insertion + content[insert_pos:]
        
        with open(file_path, 'w') as f:
            f.write(new_content)
        print(f"Added drug {drug.generic_name} to {file_path}")

if __name__ == "__main__":
    # Test
    dm = DataManager()
    print(f"Loaded {len(dm.scenarios_data['modules'])} modules.")
