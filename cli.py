import argparse
import json
import sys
from study_ingestor import StudyIngestor, Scenario, Drug
from data_manager import DataManager

def main():
    parser = argparse.ArgumentParser(description="SNF Study Content Framework CLI")
    subparsers = parser.add_subparsers(dest="command", help="Command to execute")

    # Extract Command
    extract_parser = subparsers.add_parser("extract", help="Extract text from a file")
    extract_parser.add_argument("file_path", help="Path to the file (PPTX, PDF, TXT, MD)")

    # Create Module Command
    create_mod_parser = subparsers.add_parser("create_module", help="Create a new module")
    create_mod_parser.add_argument("module_id", help="Unique ID for the module")
    create_mod_parser.add_argument("module_name", help="Display name for the module")
    create_mod_parser.add_argument("--type", choices=["clinical", "exam"], default="clinical", help="Type of module")

    # Add Scenario Command
    add_sc_parser = subparsers.add_parser("add_scenario", help="Add a clinical scenario to a module")
    add_sc_parser.add_argument("module_id", help="ID of the module")
    add_sc_parser.add_argument("json_data", help="JSON string of the scenario data")

    # Add Exam Question Command (Alias for add_scenario but user-facing distinction)
    add_exam_parser = subparsers.add_parser("add_exam_question", help="Add a question to an exam module")
    add_exam_parser.add_argument("module_id", help="ID of the exam module")
    add_exam_parser.add_argument("json_data", help="JSON string of the question data")

    # Add Drug Command
    add_drug_parser = subparsers.add_parser("add_drug", help="Add a drug to a JS file")
    add_drug_parser.add_argument("js_file", help="Path to the JS data file")
    add_drug_parser.add_argument("json_data", help="JSON string of the drug data")

    args = parser.parse_args()

    if args.command == "extract":
        ingestor = StudyIngestor()
        result = ingestor.extract_text(args.file_path)
        print(result)

    elif args.command == "create_module":
        dm = DataManager()
        dm.add_module(args.module_id, args.module_name, args.type)

    elif args.command == "add_scenario" or args.command == "add_exam_question":
        dm = DataManager()
        try:
            data = json.loads(args.json_data)
            # Validate with Pydantic
            scenario = Scenario(**data)
            dm.add_scenario_to_module(args.module_id, scenario)
        except json.JSONDecodeError:
            print("Error: Invalid JSON string.")
        except Exception as e:
            print(f"Error: {str(e)}")

    elif args.command == "add_drug":
        dm = DataManager()
        try:
            data = json.loads(args.json_data)
            # Validate
            drug = Drug(**data)
            dm.add_drug_to_js(args.js_file, drug)
        except json.JSONDecodeError:
            print("Error: Invalid JSON string.")
        except Exception as e:
            print(f"Error: {str(e)}")

    else:
        parser.print_help()

if __name__ == "__main__":
    main()
