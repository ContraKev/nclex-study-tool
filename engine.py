import sys
import time
import json
import os

class GameState:
    def __init__(self, scenarios):
        self.player_name = "Nurse"
        self.score = 0
        self.scenarios = scenarios
        self.current_scenario_idx = 0

def print_slow(text, delay=0.01):
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(delay)
    print()

def load_data():
    path = os.path.join(os.path.dirname(__file__), 'scenarios.json')
    with open(path, 'r') as f:
        return json.load(f)

# --- HD GRAPHICS ENGINE (Simulated Ray Tracing) ---

# "Shaders" (ANSI Colors)
C_RESET = "\033[0m"
C_RED = "\033[31m"
C_GREEN = "\033[32m"
C_YELLOW = "\033[33m"
C_BLUE = "\033[34m"
C_MAGENTA = "\033[35m"
C_CYAN = "\033[36m"
C_WHITE = "\033[37m"
C_BOLD = "\033[1m"
C_DIM = "\033[2m"

# "Texture Maps" (Shaded ASCII)
HOSPITAL_ART = f"""
{C_BLUE}       _________________________________________________
      /                                                 \\
     /    {C_BOLD}{C_RED}GEMINI MEDICAL CENTER{C_RESET}{C_BLUE}                        \\
    /___________________________________________________\\
    |  {C_CYAN}________{C_BLUE}     {C_CYAN}________{C_BLUE}     {C_CYAN}________{C_BLUE}     {C_CYAN}________{C_BLUE}  |
    | |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}| |
    | |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}| |
    | |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}| |
    | |________|   |________|   |________|   |________| |
    |      {C_DIM}░░{C_BLUE}           {C_DIM}░░{C_BLUE}           {C_DIM}░░{C_BLUE}           {C_DIM}░░{C_BLUE}      |
    |  {C_CYAN}________{C_BLUE}     {C_RED}____{C_WHITE}✚{C_RED}____{C_BLUE}     {C_CYAN}________{C_BLUE}     {C_CYAN}________{C_BLUE}  |
    | |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_DIM}  ▓▓▓▓  {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}| |
    | |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_DIM}  ▓▓▓▓  {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}|   |{C_YELLOW} ▓▓▓▓▓▓ {C_BLUE}| |
    | |________|   |________|   |________|   |________| |
    |___________________________________________________|{C_RESET}
"""

HEART_ART = f"""
{C_RED}         .:::.   .:::.
       :::::::. :::::::
       ::::::::.:::::::
        ':::::::::::::'
          ':::::::::'
            ':::::'
              ':'{C_RESET}
"""

# --- QUESTION TYPE HANDLERS ---

def handle_sata(scenario):
    print("   (Select All That Apply - Enter numbers separated by space, e.g., '1 3')")
    for i, option in enumerate(scenario["options"]):
        print(f"{i + 1}. {option}")
    
    while True:
        try:
            choice_str = input("\nSelect: ").strip()
            choices = [int(x) - 1 for x in choice_str.split()]
            if all(0 <= c < len(scenario["options"]) for c in choices):
                return set(choices)
            print("Invalid choice. Try again.")
        except ValueError:
            print("Please enter numbers.")

def handle_matrix(scenario):
    print("\n   (For each row, decide if it is Indicated, Non-Essential, or Contraindicated)")
    print(f"   Options: {', '.join(scenario['columns'])}")
    
    user_answers = {}
    for i, row_item in enumerate(scenario["rows"]):
        print(f"\n   ROW {i+1}: {row_item}")
        for j, col in enumerate(scenario["columns"]):
            print(f"     {j+1}. {col}")
        
        while True:
            try:
                choice = int(input(f"   Select for '{row_item}': ")) - 1
                if 0 <= choice < len(scenario["columns"]):
                    user_answers[i] = choice
                    break
            except ValueError:
                pass
            print("Invalid selection.")
    return user_answers

def handle_bowtie(scenario):
    print("\n   --- BOW-TIE ANALYSIS ---")
    answers = {}
    
    # Left: Actions to Take
    print("\n   [STEP 1: ACTIONS TO TAKE]")
    print("   Select 2 Actions:")
    for i, opt in enumerate(scenario["actions"]):
        print(f"   {i+1}. {opt}")
    while True:
        try:
            inp = input("   Select 2 numbers (e.g., '1 3'): ")
            selections = [int(x)-1 for x in inp.split()]
            if len(selections) == 2 and all(0 <= x < len(scenario["actions"]) for x in selections):
                answers['actions'] = set(selections)
                break
        except ValueError: pass
        print("Invalid. Pick exactly 2.")

    # Center: Condition
    print("\n   [STEP 2: POTENTIAL CONDITION]")
    print("   Select the most likely Condition:")
    for i, opt in enumerate(scenario["conditions"]):
        print(f"   {i+1}. {opt}")
    while True:
        try:
            sel = int(input("   Select 1 number: ")) - 1
            if 0 <= sel < len(scenario["conditions"]):
                answers['condition'] = {sel}
                break
        except ValueError: pass
        print("Invalid.")

    # Right: Parameters to Monitor
    print("\n   [STEP 3: PARAMETERS TO MONITOR]")
    print("   Select 2 Parameters:")
    for i, opt in enumerate(scenario["parameters"]):
        print(f"   {i+1}. {opt}")
    while True:
        try:
            inp = input("   Select 2 numbers: ")
            selections = [int(x)-1 for x in inp.split()]
            if len(selections) == 2 and all(0 <= x < len(scenario["parameters"]) for x in selections):
                answers['parameters'] = set(selections)
                break
        except ValueError: pass
        print("Invalid.")
        
    return answers

def handle_highlight(scenario):
    print("\n   (Type the EXACT phrase from the text below that is most concerning)")
    print(f"   TEXT: \"{scenario['text_block']}\"")
    return input("\n   Type phrase: ").strip()

def handle_cloze(scenario):
    print("\n   (Fill in the blanks)")
    answers = []
    for i, blank in enumerate(scenario["blanks"]):
        print(f"\n   BLANK {i+1}: {blank['prompt']}")
        for j, opt in enumerate(blank["options"]):
            print(f"     {j+1}. {opt}")
        while True:
            try:
                sel = int(input("   Select option: ")) - 1
                if 0 <= sel < len(blank["options"]):
                    answers.append(sel)
                    break
            except ValueError: pass
    return answers

# --- MAIN RUNNER ---

def run_scenario(state, scenario):
    print("\n" + "="*60)
    print(HEART_ART)
    print(f"  SCENARIO | SCORE: {state.score}")
    print("="*60 + "\n")
    
    print_slow(scenario["text"])
    print(f"\nQ: {scenario['question']}")
    
    q_type = scenario.get("type", "standard")
    
    if q_type == "standard" or q_type == "SATA":
        user_indices = handle_sata(scenario) if q_type == "SATA" else {int(input("\nSelect: ")) - 1}
        
        # Scoring Standard/SATA
        correct_indices = set(scenario["correct_indices"])
        if user_indices == correct_indices:
            print_slow("\n*** CORRECT ***")
            state.score += 10
        else:
            print_slow("\n*** INCORRECT / PARTIAL ***")
            state.score -= 5
        
        print("\nRATIONALE:")
        all_opts = sorted(list(user_indices | correct_indices))
        if not all_opts: all_opts = correct_indices # Fallback
        for idx in all_opts:
            if idx < len(scenario['rationales']):
                 prefix = "[YES]" if idx in correct_indices else "[NO]"
                 print(f"{prefix} Option {idx+1}: {scenario['rationales'][idx]}")

    elif q_type == "matrix":
        user_map = handle_matrix(scenario)
        correct_map = {i: r["correct_col_idx"] for i, r in enumerate(scenario["rows"])}
        
        score_adj = 0
        print("\nRESULTS:")
        for row_idx, col_idx in user_map.items():
            is_correct = (col_idx == correct_map[row_idx])
            res = "CORRECT" if is_correct else "WRONG"
            score_adj += (1 if is_correct else -1)
            print(f"  Row '{scenario['rows'][row_idx]['text']}': {res} (Correct: {scenario['columns'][correct_map[row_idx]]})")
        
        state.score += score_adj
        print(f"\n  Matrix Score Change: {score_adj}")

    elif q_type == "bowtie":
        answers = handle_bowtie(scenario)
        # Simple scoring: +1 for each correct set item
        score_adj = 0
        print("\nRESULTS:")
        
        # Actions
        corr_act = set(scenario["correct_actions"])
        if answers['actions'] == corr_act: score_adj += 2; print("  Actions: CORRECT (+2)")
        else: print(f"  Actions: INCORRECT (Expected: {[scenario['actions'][i] for i in corr_act]})")
        
        # Condition
        if answers['condition'] == set(scenario["correct_condition"]): score_adj += 1; print("  Condition: CORRECT (+1)")
        else: print(f"  Condition: INCORRECT (Expected: {scenario['conditions'][scenario['correct_condition'][0]]})")

        # Parameters
        corr_param = set(scenario["correct_parameters"])
        if answers['parameters'] == corr_param: score_adj += 2; print("  Parameters: CORRECT (+2)")
        else: print(f"  Parameters: INCORRECT (Expected: {[scenario['parameters'][i] for i in corr_param]})")

        state.score += score_adj
        print(f"\n  Bowtie Score Change: {score_adj}")
    
    input("\n[Press Enter to continue...]")
    return True

def show_main_menu(data):
    print(HOSPITAL_ART)
    print("\n" + "#"*60)
    print("   SNF: CHARGE NURSE SIMULATOR - NGN EDITION")
    print("#"*60 + "\n")
    print("Select a Study Module:")
    for i, mod in enumerate(data["modules"]):
        print(f"{i+1}. {mod['name']}")
    print("Q. Quit")
    
    choice = input("\nSelect: ").upper()
    if choice == 'Q':
        sys.exit()
    
    try:
        idx = int(choice) - 1
        if 0 <= idx < len(data["modules"]):
            return data["modules"][idx]
    except ValueError:
        pass
    return None

def main():
    data = load_data()
    while True:
        module = show_main_menu(data)
        if not module:
            print("Invalid selection.")
            continue
            
        state = GameState(module["scenarios"])
        print(f"\n--- Starting Module: {module['name']} ---")
        
        for scenario in module["scenarios"]:
            try:
                run_scenario(state, scenario)
            except Exception as e:
                print(f"Error running scenario: {e}")
            
        print("\n" + "="*60)
        print(f"MODULE COMPLETE. FINAL SCORE: {state.score}")
        print("="*60)
        input("\n[Press Enter to return to Main Menu]")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nExiting. Keep studying!")
