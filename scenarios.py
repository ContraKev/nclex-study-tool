# nclex-study-tool/scenarios.py

# --- MODULE 1: INTRO & SNF BASICS ---
INTRO_SCENARIOS = [
    {
        "id": "handover_1",
        "title": "SCENARIO 1: THE HANDOVER",
        "text": """Night shift reports: 'Mr. Henderson in 202 is confused. He's usually AO3.
His O2 sats were 89% on room air at 05:00. I put him on 2L NC.'""",
        "question": "What is your first priority?",
        "options": [
            {"text": "Go directly to Room 202 to assess Mr. Henderson.", "correct": True, "feedback": "CORRECT: Assessing the unstable patient is the priority (ABCs).", "score": 10},
            {"text": "Sit down and read the full charts for all 20 patients first.", "correct": False, "feedback": "DELAY: A change in mental status and O2 sats requires immediate bedside assessment.", "score": 0},
            {"text": "Go to the breakroom for coffee.", "correct": False, "feedback": "CRITICAL FAILURE: Patient safety is compromised.", "score": -20}
        ],
        "next_scenario_id": "assessment_202"
    },
    {
        "id": "assessment_202",
        "title": "ROOM 202: ASSESSMENT",
        "text": "Mr. Henderson is picking at his sheets and looks pale. His O2 monitor is beeping.",
        "question": "What do you check first?",
        "options": [
            {"text": "His blood pressure.", "correct": False, "feedback": "INCORRECT: Circulation is important, but Airway/Breathing is the immediate priority.", "score": -5},
            {"text": "The position of his Nasal Cannula and his lung sounds.", "correct": True, "feedback": "GOOD CATCH: His NC had slipped off. You reposition it and sats rise to 94%. Always check the patient, then the machine.", "score": 15},
            {"text": "His last BM in the chart.", "correct": False, "feedback": "INCORRECT: Irrelevant to current respiratory distress.", "score": -5}
        ],
        "next_scenario_id": "med_pass_1"
    },
    {
        "id": "med_pass_1",
        "title": "SCENARIO 2: THE MED PASS",
        "text": """It is 09:00. You are at the cart. Mrs. Higgins has a slightly low BP (100/60) but is asymptomatic.
She is due for 'Metoprolol 50mg PO'.
You check the order parameters: 'Hold if SBP < 100 or HR < 60'.""",
        "question": "Her Heart Rate is 58. What do you do?",
        "options": [
            {"text": "Give the medication; 58 is close enough to 60.", "correct": False, "feedback": "MED ERROR: You violated the hold parameter. Bradycardia risk.", "score": -25},
            {"text": "Hold the medication and document the reason. Notify provider if required.", "correct": True, "feedback": "CORRECT: Patient safety first. Strict adherence to parameters is required.", "score": 10},
            {"text": "Give half the dose (25mg).", "correct": False, "feedback": "NEVER: Nurses do not prescribe or alter dosages without an order.", "score": -25}
        ],
        "next_scenario_id": "fall_1"
    },
    {
        "id": "fall_1",
        "title": "SCENARIO 3: THE FALL",
        "text": """CRASH! You hear a loud thud from the hallway. You run over and find Mr. Smith on the floor next to his wheelchair.
He is conscious but clutching his hip.""",
        "question": "What is your IMMEDIATE action?",
        "options": [
            {"text": "Immediately pick him up and put him back in the chair.", "correct": False, "feedback": "DANGEROUS: Moving a patient before assessment can worsen spinal/hip injuries.", "score": -20},
            {"text": "Assess for injury (ROM, pain, head strike) and vitals BEFORE moving him.", "correct": True, "feedback": "CORRECT: Assess first. If safe, then move using a mechanical lift or assistance.", "score": 10},
            {"text": "Run to the nurses station to call 911.", "correct": False, "feedback": "INCORRECT: Do not leave the patient alone. Call for help while staying with him.", "score": -10}
        ],
        "next_scenario_id": None
    }
]

# --- MODULE 2: VASCULAR & HYPERTENSION (EXPANDED) ---
VASCULAR_SCENARIOS = [
    # --- BP CATEGORIES ---
    {
        "id": "bp_cat_1",
        "title": "BP CHECK: MRS. ADAMS",
        "text": "Mrs. Adams (Age 65) has a BP reading of 118/76.",
        "question": "How do you categorize this Blood Pressure?",
        "options": [
            {"text": "Normal", "correct": True, "feedback": "CORRECT: Normal is Systolic < 120 AND Diastolic < 80.", "score": 5},
            {"text": "Prehypertension", "correct": False, "feedback": "INCORRECT: Prehypertension starts at 120/80.", "score": 0},
            {"text": "Stage 1 Hypertension", "correct": False, "feedback": "INCORRECT.", "score": 0}
        ],
        "next_scenario_id": "bp_cat_2"
    },
    {
        "id": "bp_cat_2",
        "title": "BP CHECK: MR. BROWN",
        "text": "Mr. Brown has a BP of 130/85.",
        "question": "Category?",
        "options": [
            {"text": "Normal", "correct": False, "feedback": "INCORRECT.", "score": 0},
            {"text": "Prehypertension", "correct": True, "feedback": "CORRECT: PreHTN is Systolic 120-139 OR Diastolic 80-89.", "score": 5},
            {"text": "Stage 1 Hypertension", "correct": False, "feedback": "INCORRECT.", "score": 0}
        ],
        "next_scenario_id": "bp_cat_3"
    },
    {
        "id": "bp_cat_3",
        "title": "BP CHECK: MRS. CLARK",
        "text": "Mrs. Clark has a BP of 145/92.",
        "question": "Category?",
        "options": [
            {"text": "Prehypertension", "correct": False, "feedback": "INCORRECT.", "score": 0},
            {"text": "Stage 1 Hypertension", "correct": True, "feedback": "CORRECT: Stage 1 is 140-159 OR 90-99.", "score": 5},
            {"text": "Stage 2 Hypertension", "correct": False, "feedback": "INCORRECT: Stage 2 requires >160 or >100.", "score": 0}
        ],
        "next_scenario_id": "bp_cat_4"
    },
    {
        "id": "bp_cat_4",
        "title": "BP CHECK: MR. DAVIS",
        "text": "Mr. Davis is complaining of a headache. His BP is 162/102.",
        "question": "Category?",
        "options": [
            {"text": "Stage 1 Hypertension", "correct": False, "feedback": "INCORRECT.", "score": 0},
            {"text": "Stage 2 Hypertension", "correct": True, "feedback": "CORRECT: Stage 2 is >=160 OR >=100.", "score": 5},
            {"text": "Hypertensive Crisis", "correct": False, "feedback": "Close, but based purely on categories provided, it fits Stage 2 definitions, though symptoms suggest emergency.", "score": 2}
        ],
        "next_scenario_id": "bp_cuff_error"
    },

    # --- BP MEASUREMENT & ORTHO ---
    {
        "id": "bp_cuff_error",
        "title": "VITALS TECHNIQUE",
        "text": "You notice a student nurse using a 'Standard Adult' cuff on a patient with a BMI of 40 (Obese arm). The reading is 150/90.",
        "question": "What is the likely error?",
        "options": [
            {"text": "False Low reading.", "correct": False, "feedback": "INCORRECT: Too LARGE a cuff causes false lows.", "score": -5},
            {"text": "False High reading.", "correct": True, "feedback": "CORRECT: A cuff that is too SMALL causes a FALSE HIGH reading.", "score": 10},
            {"text": "Accurate reading.", "correct": False, "feedback": "INCORRECT.", "score": -5}
        ],
        "next_scenario_id": "ortho_risk"
    },
    {
        "id": "ortho_risk",
        "title": "FALL RISK",
        "text": "Mrs. E (85yo) is started on Prazosin (Alpha-1 blocker) for HTN.",
        "question": "What is the priority safety instruction?",
        "options": [
            {"text": "Take with food to prevent nausea.", "correct": False, "feedback": "INCORRECT.", "score": 0},
            {"text": "Change positions slowly (sit before standing).", "correct": True, "feedback": "CORRECT: High risk for Orthostatic Hypotension -> Falls.", "score": 10},
            {"text": "Limit fluid intake.", "correct": False, "feedback": "INCORRECT.", "score": 0}
        ],
        "next_scenario_id": "htn_emergency_sx"
    },

    # --- HYPERTENSIVE EMERGENCY ---
    {
        "id": "htn_emergency_sx",
        "title": "SYMPTOM RECOGNITION",
        "text": "Mr. F's BP is 200/110. He says 'I feel fine'.",
        "question": "Is this a Hypertensive Emergency?",
        "options": [
            {"text": "Yes, absolutely.", "correct": False, "feedback": "INCORRECT: Emergency requires organ damage/symptoms. This is Urgency.", "score": 0},
            {"text": "No, this is Hypertensive Urgency (asymptomatic).", "correct": True, "feedback": "CORRECT: Emergency = BP Elevation + Symptoms (Target Organ Damage).", "score": 10}
        ],
        "next_scenario_id": "htn_emergency_action"
    },
    {
        "id": "htn_emergency_action",
        "title": "HYPERTENSIVE EMERGENCY",
        "text": "Now Mr. F complains of severe headache, blurred vision, and nausea.",
        "question": "What is the priority action?",
        "options": [
            {"text": "Administer PO Tylenol for headache.", "correct": False, "feedback": "NEGLIGENT.", "score": -10},
            {"text": "Notify provider immediately; prepare for IV antihypertensives.", "correct": True, "feedback": "CORRECT: Symptoms + High BP = Emergency. Needs IV meds and close monitoring.", "score": 10},
            {"text": "Recheck BP in 1 hour.", "correct": False, "feedback": "NEGLIGENT: Immediate action needed.", "score": -10}
        ],
        "next_scenario_id": "pad_symptoms_1"
    },

    # --- PERIPHERAL ARTERIAL DISEASE (PAD) ---
    {
        "id": "pad_symptoms_1",
        "title": "ASSESSMENT: LEG PAIN",
        "text": "Patient says: 'My calves hurt when I walk to the mailbox, but stop hurting when I rest.'",
        "question": "What is this symptom called?",
        "options": [
            {"text": "Deep Vein Thrombosis", "correct": False, "feedback": "INCORRECT.", "score": 0},
            {"text": "Intermittent Claudication", "correct": True, "feedback": "CORRECT: Hallmark sign of PAD.", "score": 10},
            {"text": "Neuropathy", "correct": False, "feedback": "INCORRECT.", "score": 0}
        ],
        "next_scenario_id": "pad_appearance"
    },
    {
        "id": "pad_appearance",
        "title": "PAD PHYSICAL EXAM",
        "text": "You are assessing a patient with known PAD. What physical findings do you expect?",
        "question": "Select the correct cluster of symptoms:",
        "options": [
            {"text": "Warm, brown skin, edema.", "correct": False, "feedback": "INCORRECT: That is Venous Insufficiency.", "score": -5},
            {"text": "Cool/pale extremities, thin shiny skin, decreased pulses.", "correct": True, "feedback": "CORRECT: PAD = 'Arts' (Arteries) are pale/cool.", "score": 10},
            {"text": "Red, swollen, hot calf.", "correct": False, "feedback": "INCORRECT: That is DVT.", "score": -5}
        ],
        "next_scenario_id": "venous_symptoms"
    },

    # --- VENOUS INSUFFICIENCY ---
    {
        "id": "venous_symptoms",
        "title": "VENOUS EXAM",
        "text": "Mrs. G has chronic leg swelling. Her skin is brown and leathery.",
        "question": "What helps relieve her pain?",
        "options": [
            {"text": "Dangling her legs over the bed.", "correct": False, "feedback": "INCORRECT: Dangling helps Arterial (gravity pulls blood down).", "score": -5},
            {"text": "Elevating her legs.", "correct": True, "feedback": "CORRECT: Venous = Elevate (help blood return to heart).", "score": 10}
        ],
        "next_scenario_id": "varicose_teaching"
    },
    {
        "id": "varicose_teaching",
        "title": "VARICOSE VEIN TEACHING",
        "text": "Which instruction is appropriate for a patient with Varicose Veins?",
        "question": "Select the best advice.",
        "options": [
            {"text": "Sit with your legs crossed to improve comfort.", "correct": False, "feedback": "INCORRECT: Crossing legs impedes flow.", "score": -5},
            {"text": "Avoid prolonged standing; use compression hose.", "correct": True, "feedback": "CORRECT: Compression helps venous return.", "score": 10},
            {"text": "Limit walking to prevent pain.", "correct": False, "feedback": "INCORRECT: Walking/Weight reduction is encouraged.", "score": -5}
        ],
        "next_scenario_id": "dvt_risk"
    },

    # --- DVT (DEEP VEIN THROMBOSIS) ---
    {
        "id": "dvt_risk",
        "title": "DVT RISK FACTOR ID",
        "text": "Which patient is at HIGHEST risk for DVT?",
        "question": "Select the patient.",
        "options": [
            {"text": "25yo male runner with asthma.", "correct": False, "feedback": "Low risk.", "score": 0},
            {"text": "35yo female smoker on oral contraceptives.", "correct": True, "feedback": "CORRECT: Smoking + Estrogen (BC) = High Clot Risk.", "score": 10},
            {"text": "50yo male with controlled HTN.", "correct": False, "feedback": "Moderate risk.", "score": 0}
        ],
        "next_scenario_id": "dvt_sign"
    },
    {
        "id": "dvt_sign",
        "title": "DVT ASSESSMENT",
        "text": "Post-op patient complains of left calf pain.",
        "question": "What findings suggest DVT?",
        "options": [
            {"text": "Bilateral cool, pale feet.", "correct": False, "feedback": "INCORRECT: Suggests PAD.", "score": -5},
            {"text": "Unilateral swelling, warmth, and erythema (redness).", "correct": True, "feedback": "CORRECT: Classic DVT signs.", "score": 10},
            {"text": "Absent pedal pulses.", "correct": False, "feedback": "INCORRECT: Suggests Arterial Occlusion.", "score": -5}
        ],
        "next_scenario_id": "dvt_homans"
    },
    {
        "id": "dvt_homans",
        "title": "DVT SAFETY: HOMANS SIGN",
        "text": "A nurse asks: 'Should I dorsiflex the foot to check for calf pain (Homan's Sign)?'",
        "question": "Your response?",
        "options": [
            {"text": "Yes, it is the gold standard.", "correct": False, "feedback": "DANGEROUS: It is unreliable and unsafe.", "score": -10},
            {"text": "No. Do not perform it. It can dislodge a clot.", "correct": True, "feedback": "CORRECT: Evidence-Based Practice says NO.", "score": 10}
        ],
        "next_scenario_id": "dvt_massage"
    },
    {
        "id": "dvt_massage",
        "title": "DVT SAFETY: MASSAGE",
        "text": "The patient asks for a calf massage for the pain.",
        "question": "Do you perform it?",
        "options": [
            {"text": "Yes, it promotes comfort.", "correct": False, "feedback": "CRITICAL ERROR: Risk of Pulmonary Embolism.", "score": -20},
            {"text": "NO. Massage is contraindicated.", "correct": True, "feedback": "CORRECT: Never rub a DVT.", "score": 10}
        ],
        "next_scenario_id": "acute_arterial_6ps"
    },

    # --- ACUTE ARTERIAL OCCLUSION ---
    {
        "id": "acute_arterial_6ps",
        "title": "THE 6 P's: RECOGNITION",
        "text": "Patient screams in pain. Leg is pale, cold, pulseless.",
        "question": "Which of the following is NOT one of the 6 P's?",
        "options": [
            {"text": "Paresthesia", "correct": False, "feedback": "INCORRECT: Paresthesia is one.", "score": 0},
            {"text": "Poikilothermia", "correct": False, "feedback": "INCORRECT: Poikilothermia (cold) is one.", "score": 0},
            {"text": "Purulent Drainage", "correct": True, "feedback": "CORRECT: The 6 P's are Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia.", "score": 10}
        ],
        "next_scenario_id": "acute_arterial_action"
    },
    {
        "id": "acute_arterial_action",
        "title": "ACUTE OCCLUSION ACTION",
        "text": "You confirm the 6 P's. The leg is cold and pulseless.",
        "question": "What is the ONE thing you must NOT do?",
        "options": [
            {"text": "Notify the provider.", "correct": False, "feedback": "INCORRECT: You MUST notify them.", "score": -5},
            {"text": "Elevate the leg.", "correct": True, "feedback": "CORRECT: DO NOT ELEVATE. It fights gravity and worsens ischemia.", "score": 15},
            {"text": "Keep the patient NPO (Nothing by mouth).", "correct": False, "feedback": "INCORRECT: NPO is good anticipating surgery.", "score": -5}
        ],
        "next_scenario_id": "aneurysm_def"
    },

    # --- ANEURYSM & RAYNAUDS ---
    {
        "id": "aneurysm_def",
        "title": "PATHOLOGY ID",
        "text": "Description: 'A dilated artery due to a weakened vessel wall.'",
        "question": "What is this?",
        "options": [
            {"text": "Atherosclerosis", "correct": False, "feedback": "INCORRECT.", "score": 0},
            {"text": "Aneurysm", "correct": True, "feedback": "CORRECT.", "score": 5},
            {"text": "DVT", "correct": False, "feedback": "INCORRECT.", "score": 0}
        ],
        "next_scenario_id": "dissection_sxs"
    },
    {
        "id": "dissection_sxs",
        "title": "AORTIC DISSECTION",
        "text": "Patient with history of HTN complains of 'tearing' chest/back pain.",
        "question": "What is occurring?",
        "options": [
            {"text": "Tear in the intimal layer; blood dissects between layers.", "correct": True, "feedback": "CORRECT: Life threatening.", "score": 10},
            {"text": "Muscle spasm.", "correct": False, "feedback": "DANGEROUS assumption.", "score": -10}
        ],
        "next_scenario_id": "raynauds"
    },
    {
        "id": "raynauds",
        "title": "RAYNAUDS DISEASE",
        "text": "Patient's fingers turn white/blue in the cold.",
        "question": "What is the priority teaching?",
        "options": [
            {"text": "Soak hands in ice water to toughen skin.", "correct": False, "feedback": "INCORRECT.", "score": -5},
            {"text": "Avoid cold exposure; wear mittens.", "correct": True, "feedback": "CORRECT: Prevent vasospasm.", "score": 10}
        ],
        "next_scenario_id": "med_teaching_hot"
    },

    # --- MEDS & DIET ---
    {
        "id": "med_teaching_hot",
        "title": "VASODILATION SAFETY",
        "text": "Patient on vasodilators asks about taking hot showers.",
        "question": "Your response?",
        "options": [
            {"text": "Hot water is great for relaxation.", "correct": False, "feedback": "UNSAFE.", "score": -5},
            {"text": "Avoid very hot water; it increases vasodilation and causes hypotension/fainting.", "correct": True, "feedback": "CORRECT: Safety first.", "score": 10}
        ],
        "next_scenario_id": "dash_diet_1"
    },
    {
        "id": "dash_diet_1",
        "title": "DASH DIET: SELECTION",
        "text": "Select the best lunch for the DASH diet.",
        "question": "Choose one:",
        "options": [
            {"text": "Ham sandwich on white bread.", "correct": False, "feedback": "INCORRECT: Cured meats (Ham) are very high sodium.", "score": -5},
            {"text": "Grilled chicken breast with steamed broccoli.", "correct": True, "feedback": "CORRECT: Low fat, low sodium, high veg.", "score": 10},
            {"text": "Canned beef stew.", "correct": False, "feedback": "INCORRECT: Canned = Sodium.", "score": -5}
        ],
        "next_scenario_id": "dash_diet_2"
    },
    {
        "id": "dash_diet_2",
        "title": "DASH DIET: SNACKS",
        "text": "Patient wants a snack.",
        "question": "Choose the best option:",
        "options": [
            {"text": "Frozen juice bar.", "correct": True, "feedback": "CORRECT: Acceptable low-fat/sodium option.", "score": 5},
            {"text": "Pretzels.", "correct": False, "feedback": "INCORRECT: Salt.", "score": -5},
            {"text": "Pickles.", "correct": False, "feedback": "INCORRECT: Salt bomb.", "score": -5}
        ],
        "next_scenario_id": "ther_comm_1"
    },

    # --- THERAPEUTIC COMMUNICATION ---
    {
        "id": "ther_comm_1",
        "title": "COMMUNICATION: FEAR",
        "text": "Patient: 'I'm afraid I'll die young like my father.'",
        "question": "Best response?",
        "options": [
            {"text": "'You have great doctors, don't worry.'", "correct": False, "feedback": "INCORRECT: False reassurance.", "score": -5},
            {"text": "'It must be very frightening to have those thoughts.'", "correct": True, "feedback": "CORRECT: Reflecting feelings.", "score": 10}
        ],
        "next_scenario_id": "ther_comm_2"
    },
    {
        "id": "ther_comm_2",
        "title": "COMMUNICATION: ADVICE",
        "text": "Patient: 'What should I do about my smoking?'",
        "question": "Best response?",
        "options": [
            {"text": "'You need to stop right now.'", "correct": False, "feedback": "INCORRECT: Authoritative/Advice giving.", "score": -5},
            {"text": "'What are your thoughts on how smoking affects your health?'", "correct": True, "feedback": "CORRECT: Open-ended, patient-centered.", "score": 10}
        ],
        "next_scenario_id": None
    }
]

# --- MASTER MODULE LIST ---
MODULES = [
    {"id": "1", "name": "Intro & SNF Basics", "scenarios": INTRO_SCENARIOS},
    {"id": "2", "name": "Vascular & Hypertension (EXTENDED REVIEW)", "scenarios": VASCULAR_SCENARIOS}
]
