import os
import json
import shutil
from data_manager import DataManager
from study_ingestor import Scenario, Drug

def test_scenarios():
    test_file = "scenarios_test.json"
    if os.path.exists(test_file):
        os.remove(test_file)
    
    # Initialize with empty file (mocking non-existence or empty)
    dm = DataManager(scenarios_path=test_file)
    
    # Add Module
    dm.add_module("test_mod", "Test Module")
    
    # Add Scenario
    scenario = Scenario(
        id="test_sc_1",
        type="standard",
        text="Test Text",
        question="Test Question",
        options=["Option 1", "Option 2"],
        correct_indices=[0],
        rationales=["Correct", "Incorrect"]
    )
    
    dm.add_scenario_to_module("test_mod", scenario)
    
    # Verify
    with open(test_file, 'r') as f:
        data = json.load(f)
        assert len(data["modules"]) == 1
        assert data["modules"][0]["id"] == "test_mod"
        assert len(data["modules"][0]["scenarios"]) == 1
        assert data["modules"][0]["scenarios"][0]["id"] == "test_sc_1"
    
    print("Scenario Test Passed!")
    # Cleanup
    if os.path.exists(test_file):
        os.remove(test_file)

def test_drugs():
    test_js = "data_test.js"
    # Create dummy JS file
    with open(test_js, "w") as f:
        f.write("const data_test = [\n    {g: 'OldDrug'}\n];")
    
    dm = DataManager() # Path doesn't matter for this test as we pass file path
    
    drug = Drug(
        generic_name="NewDrug",
        brand_name="BrandNew",
        drug_class="TestClass",
        mechanism_of_action="TestMOA",
        indications="TestIndication",
        contraindications="TestContra",
        adverse_effects="TestAE",
        patient_education="TestEdu"
    )
    
    dm.add_drug_to_js(test_js, drug)
    
    # Verify
    with open(test_js, "r") as f:
        content = f.read()
        print(f"JS Content:\n{content}")
        assert "NewDrug" in content
        assert "BrandNew" in content
    
    print("Drug Test Passed!")
    # Cleanup
    if os.path.exists(test_js):
        os.remove(test_js)

if __name__ == "__main__":
    test_scenarios()
    test_drugs()
