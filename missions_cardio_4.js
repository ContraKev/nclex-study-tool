// Missions 16-20: High-Alert Cardiovascular Emergencies
window.missions_cardio_4 = [
    {
        id: "M-016",
        numerical_id: 16,
        title: "The Moisture Mistake: Dabigatran Hazards",
        category: "Cardiovascular / Coagulation",
        difficulty: "Intermediate",
        patient_profile: {
            demographics: { name: "Thomas Miller", age: 71, gender: "Male", mrn: "8821-TM", weight: "85 kg", height: "178 cm", allergies: "NKDA" },
            chief_complaint: "New onset of black, tarry stools and coffee-ground emesis.",
            hpi: "Patient has been taking Dabigatran (Pradaxa) 150mg BID for 2 months for AFib. He admits to taking his pills out of the original bottle and placing them in a weekly pill organizer to 'save time'.",
            pmh: "Atrial Fibrillation, GERD, Osteoarthritis.",
            sh: "Lives alone. Independent.",
            ros: { cardio: "Stable.", gi: "Reports 'burning' stomach pain. Melena noted." }
        },
        exhibits: [
            {
                title: "Laboratory Values",
                type: "table",
                data: [
                    { lab: "Hemoglobin", val: "8.2 g/dL", status: "CRITICAL LOW", ref: "14-18" },
                    { lab: "Hematocrit", val: "25%", status: "CRITICAL LOW", ref: "42-52%" },
                    { lab: "aPTT", val: "42 seconds", status: "STABLE", ref: "30-40" }
                ]
            }
        ],
        steps: [
            {
                id: 1,
                type: "extended_sata",
                prompt: "The nurse identifies several errors in the patient's Dabigatran management. Which factors contributed to this GI hemorrhage? Select all that apply.",
                options: [
                    "Placing Dabigatran in a weekly pill organizer",
                    "Exposure of the drug to moisture",
                    "Opening or crushing the capsules",
                    "Dabigatran's inherently high risk for GI bleed",
                    "Missing two doses last week",
                    "Taking with a full glass of water"
                ],
                answer: ["Placing Dabigatran in a weekly pill organizer", "Exposure of the drug to moisture", "Dabigatran's inherently high risk for GI bleed"],
                rationale: "Dabigatran is exceptionally sensitive to moisture and MUST be kept in its original manufacturer bottle with the desiccant cap. Exposure to humidity causes the drug to breakdown or absorb unpredictably. It also carries a higher risk of GI hemorrhage than warfarin."
            },
            {
                id: 2,
                type: "matrix",
                prompt: "Classify the appropriate reversal/safety rules for these anticoagulants.",
                rows: ["Warfarin (Coumadin)", "Dabigatran (Pradaxa)", "Heparin IV"],
                columns: ["Vitamin K", "Idarucizumab (Praxbind)", "Protamine Sulfate"],
                answer: {
                    "Warfarin (Coumadin)": "Vitamin K",
                    "Dabigatran (Pradaxa)": "Idarucizumab (Praxbind)",
                    "Heparin IV": "Protamine Sulfate"
                },
                rationale: "Each anticoagulant has a specific antidote. Idarucizumab is the specific monoclonal antibody reversal agent for Dabigatran."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "Address the acute active GI bleed.",
                center_condition: { label: "Condition", options: ["Major GI Hemorrhage", "Normal Side Effect", "GERD Flare", "HIT"], answer: "Major GI Hemorrhage" },
                left_actions: { label: "Actions", options: ["Administer Idarucizumab", "Hold Dabigatran", "Increase IV Heparin", "Give Vitamin K"], answer: ["Administer Idarucizumab", "Hold Dabigatran"] },
                right_monitor: { label: "Monitor", options: ["Hgb / Hct levels", "Blood pressure", "INR", "Platelet count"], answer: ["Hgb / Hct levels", "Blood pressure"] }
            }
        ]
    },
    {
        id: "M-017",
        numerical_id: 17,
        title: "The Stroke Clock: Alteplase Protocol",
        category: "Cardiovascular / Thrombolytic",
        difficulty: "Advanced",
        patient_profile: {
            demographics: { name: "Esther Williams", age: 66, gender: "Female", mrn: "4412-EW", weight: "60 kg", height: "160 cm", allergies: "NKDA" },
            chief_complaint: "Sudden onset of left-sided facial droop and right-arm weakness.",
            hpi: "Patient's husband reports symptoms began exactly 90 minutes ago. She is unable to speak clearly (dysarthria).",
            pmh: "HTN, Hyperlipidemia.",
            sh: "Non-smoker.",
            ros: { neuro: "NIH Stroke Scale score of 14." }
        },
        exhibits: [
            {
                title: "Triage Vitals",
                type: "table",
                data: [
                    { param: "BP", val: "192/104 mmHg", status: "CRITICAL HIGH" },
                    { param: "Glucose", val: "110 mg/dL", status: "NORMAL" }
                ]
            },
            {
                title: "Diagnostic Results",
                type: "text",
                content: "Non-contrast CT Head: Negative for intracranial hemorrhage. Ischemic stroke suspected."
            }
        ],
        steps: [
            {
                id: 1,
                type: "extended_sata",
                prompt: "The nurse prepares for Alteplase (tPA) administration. Which criteria must be met before starting the infusion? Select all that apply.",
                options: [
                    "BP must be lowered below 185/110 mmHg",
                    "CT scan must rule out hemorrhage",
                    "Symptom onset must be within 3-4.5 hours",
                    "Wait for INR results (no history of anticoagulation)",
                    "Verify baseline Platelets > 100,000",
                    "Administer via standard gravity drip"
                ],
                answer: ["BP must be lowered below 185/110 mmHg", "CT scan must rule out hemorrhage", "Symptom onset must be within 3-4.5 hours", "Verify baseline Platelets > 100,000"],
                rationale: "tPA protocol requires strict BP control (<185/110), a negative CT for bleed, and a strict time window. It must be on a pump, and baseline labs (platelets) are required."
            },
            {
                id: 2,
                type: "matrix",
                prompt: "Identify the required nursing action during the 60-minute Alteplase infusion.",
                rows: ["Neuro checks and BP monitoring", "Invasive procedures (Foley/Sticks)", "Manual swirl of the vial (do not shake)", "Bedrest"],
                columns: ["Mandatory", "Strictly Contraindicated"],
                answer: {
                    "Neuro checks and BP monitoring": "Mandatory",
                    "Invasive procedures (Foley/Sticks)": "Strictly Contraindicated",
                    "Manual swirl of the vial (do not shake)": "Mandatory",
                    "Bedrest": "Mandatory"
                },
                rationale: "Neuro/BP checks q15min are required. Invasive procedures are banned for 24h due to bleeding risk. Shaking tPA destroys the protein; swirling is required."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "The patient suddenly develops a severe headache and pupil changes during the infusion.",
                center_condition: { label: "Condition", options: ["Intracranial Hemorrhage", "Expected Effect", "Re-perfusion", "Ischemic progression"], answer: "Intracranial Hemorrhage" },
                left_actions: { label: "Actions", options: ["Stop tPA immediately", "Notify Provider", "Increase BP", "Give more tPA"], answer: ["Stop tPA immediately", "Notify Provider"] },
                right_monitor: { label: "Monitor", options: ["Stat CT scan", "Level of consciousness", "Urine output", "Lung sounds"], answer: ["Stat CT scan", "Level of consciousness"] }
            }
        ]
    },
    {
        id: "M-018",
        numerical_id: 18,
        title: "The Abrupt Stop: Clonidine Rebound",
        category: "Cardiovascular / Adrenergics",
        difficulty: "Intermediate",
        patient_profile: {
            demographics: { name: "Larry Jenkins", age: 55, gender: "Male", mrn: "2291-LJ", weight: "90 kg", height: "175 cm", allergies: "NKDA" },
            chief_complaint: "Severe anxiety, tremors, and 'pounding' headache.",
            hpi: "Patient reports he ran out of his Clonidine (Catapres) tablets 2 days ago and hasn't had time to pick up the refill. He feels 'like my heart is jumping out of my chest'.",
            pmh: "Severe HTN, Alcohol Use Disorder.",
            sh: "Truck driver.",
            ros: { neuro: "Agitated, tremors. Cardio: BP 210/115." }
        },
        exhibits: [
            {
                title: "Vital Signs",
                type: "table",
                data: [
                    { param: "BP", val: "214/118 mmHg", status: "CRITICAL HIGH" },
                    { param: "HR", val: "122 bpm", status: "TACHYCARDIA" }
                ]
            }
        ],
        steps: [
            {
                id: 1,
                type: "matrix",
                prompt: "The nurse analyzes the physiological cause. Is this rebound HTN or alcohol withdrawal?",
                rows: ["Cause: Sudden withdrawal of central alpha-2 agonism", "Cause: Decreased GABA activity", "Symptom: Severe hypertensive crisis", "Correct Action: Resume Clonidine and taper slowly"],
                columns: ["Likely Clonidine Rebound", "Likely Alcohol Withdrawal"],
                answer: {
                    "Cause: Sudden withdrawal of central alpha-2 agonism": "Likely Clonidine Rebound",
                    "Cause: Decreased GABA activity": "Likely Alcohol Withdrawal",
                    "Symptom: Severe hypertensive crisis": "Likely Clonidine Rebound",
                    "Correct Action: Resume Clonidine and taper slowly": "Likely Clonidine Rebound"
                },
                rationale: "Abrupt cessation of Clonidine leads to a massive surge in sympathetic outflow, causing rebound hypertensive crisis. It is a medical emergency."
            },
            {
                id: 2,
                type: "extended_sata",
                prompt: "Which teaching points are essential for a patient starting a Clonidine Transdermal Patch? Select all that apply.",
                options: [
                    "Change the patch every 7 days",
                    "Apply to a hairless area of upper arm or chest",
                    "Rotate the application site each week",
                    "Do not stop abruptly even if BP is normal",
                    "Take a hot sauna immediately after applying",
                    "The patch is waterproof and can stay on during bathing"
                ],
                answer: ["Change the patch every 7 days", "Apply to a hairless area of upper arm or chest", "Rotate the application site each week", "Do not stop abruptly even if BP is normal", "The patch is waterproof and can stay on during bathing"],
                rationale: "Clonidine patches last 7 days. Rotating sites prevents irritation. Heat (sauna) increases absorption dangerously. It is waterproof."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "Manage the acute hypertensive rebound.",
                center_condition: { label: "Condition", options: ["Rebound Hypertensive Crisis", "Stable HTN", "Stroke", "Renal Failure"], answer: "Rebound Hypertensive Crisis" },
                left_actions: { label: "Actions", options: ["Resume Clonidine", "Notify Provider", "Give IV Bolus Fluid", "Increase salt intake"], answer: ["Resume Clonidine", "Notify Provider"] },
                right_monitor: { label: "Monitor", options: ["Continuous BP", "Heart rate/rhythm", "Daily weights", "Blood glucose"], answer: ["Continuous BP", "Heart rate/rhythm"] }
            }
        ]
    },
    {
        id: "M-019",
        numerical_id: 19,
        title: "Lethal Leg Pain: The Fibrate-Statin Trap",
        category: "Cardiovascular / Lipids",
        difficulty: "Advanced",
        patient_profile: {
            demographics: { name: "Alice Thorne", age: 62, gender: "Female", mrn: "3312-AT", weight: "70 kg", height: "165 cm", allergies: "NKDA" },
            chief_complaint: "Severe muscle pain and 'cola-colored' urine.",
            hpi: "Patient was recently started on Gemfibrozil (Lopid) to add to her Atorvastatin (Lipitor) therapy. For 3 days, she has had disabling thigh pain and malaise.",
            pmh: "Hyperlipidemia, Type 2 DM.",
            sh: "Retired librarian.",
            ros: { ms: "Extreme muscle tenderness.", gu: "Dark, reddish-brown urine." }
        },
        exhibits: [
            {
                title: "Lab Results",
                type: "table",
                data: [
                    { lab: "Creatine Kinase (CK)", val: "15,000 U/L", status: "CRITICAL HIGH", ref: "26-192" },
                    { lab: "Creatinine", val: "2.1 mg/dL", status: "HIGH", ref: "0.7-1.3" },
                    { lab: "Urine Myoglobin", val: "POSITIVE", status: "CRITICAL" }
                ]
            }
        ],
        steps: [
            {
                id: 1,
                type: "extended_sata",
                prompt: "Which physiological mechanisms contributed to this crisis? Select all that apply.",
                options: [
                    "Gemfibrozil inhibits the metabolism of Atorvastatin",
                    "Synergistic muscle toxicity between fibrates and statins",
                    "Statin-induced myopathy is dose-dependent",
                    "Excessive exercise in the morning",
                    "Low Vitamin K intake",
                    "Gemfibrozil directly damages skeletal muscle"
                ],
                answer: ["Gemfibrozil inhibits the metabolism of Atorvastatin", "Synergistic muscle toxicity between fibrates and statins", "Statin-induced myopathy is dose-dependent"],
                rationale: "Fibrates (especially Gemfibrozil) interfere with statin glucuronidation, leading to massive increases in statin levels and synergistic muscle destruction (Rhabdomyolysis)."
            },
            {
                id: 2,
                type: "matrix",
                prompt: "Identify the primary adverse effect risk for each lipid drug class.",
                rows: ["HMG-CoA Reductase Inhibitors (Statins)", "Fibric Acid Derivatives (Fibrates)", "Bile Acid Sequestrants"],
                columns: ["Rhabdomyolysis", "Gallstones", "Constipation/Vitamin Deficiency"],
                answer: {
                    "HMG-CoA Reductase Inhibitors (Statins)": "Rhabdomyolysis",
                    "Fibric Acid Derivatives (Fibrates)": "Gallstones",
                    "Bile Acid Sequestrants": "Constipation/Vitamin Deficiency"
                },
                rationale: "Statins target muscles (Rhabdo); Fibrates increase cholesterol in bile (Gallstones); Resins stay in the gut (Constipation)."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "Address the Rhabdomyolysis and AKI risk.",
                center_condition: { label: "Condition", options: ["Rhabdomyolysis", "Flu", "Myasthenia Gravis", "DVT"], answer: "Rhabdomyolysis" },
                left_actions: { label: "Actions", options: ["Initiate aggressive IV hydration", "Stop all lipid meds", "Increase Statin dose", "Give Ibuprofen"], answer: ["Initiate aggressive IV hydration", "Stop all lipid meds"] },
                right_monitor: { label: "Monitor", options: ["Urine output and color", "Serum Creatinine", "aPTT", "TSH levels"], answer: ["Urine output and color", "Serum Creatinine"] }
            }
        ]
    },
    {
        id: "M-020",
        numerical_id: 20,
        title: "Pressure Point: Mannitol Neuro-Safety",
        category: "Cardiovascular / Diuretics",
        difficulty: "Advanced",
        patient_profile: {
            demographics: { name: "Officer John Blake", age: 44, gender: "Male", mrn: "7742-JB", weight: "95 kg", height: "188 cm", allergies: "NKDA" },
            chief_complaint: "Decreased level of consciousness following MVA.",
            hpi: "Patient sustained a closed head injury. ICP is currently 28 mmHg (Normal < 15). The nurse is preparing a Mannitol 25% infusion.",
            pmh: "Healthy, active.",
            sh: "Police officer.",
            ros: { neuro: "GCS score of 9. Pupil response sluggish." }
        },
        exhibits: [
            {
                title: "EHR Notes",
                type: "text",
                content: "1. Mannitol 25% IV 1g/kg over 30 minutes.<br>2. Use in-line filter.<br>3. Monitor hourly urine output."
            }
        ],
        steps: [
            {
                id: 1,
                type: "extended_sata",
                prompt: "The nurse retrieves the Mannitol bag from the medication room. Which safety steps are mandatory? Select all that apply.",
                options: [
                    "Inspect the bag for white crystals",
                    "If crystals are present, warm the bag to dissolve them",
                    "Use a filter needle to draw up and filtered tubing to give",
                    "Check for pulmonary crackles before administration",
                    "Shake the bag vigorously to dissolve crystals",
                    "Administer via small 24g peripheral IV"
                ],
                answer: ["Inspect the bag for white crystals", "If crystals are present, warm the bag to dissolve them", "Use a filter needle to draw up and filtered tubing to give", "Check for pulmonary crackles before administration"],
                rationale: "Mannitol crystallizes easily; heating and filtering are mandatory. It shifts fluid rapidly, so the nurse must check for pulmonary edema (crackles) before giving."
            },
            {
                id: 2,
                type: "matrix",
                prompt: "Link the physiological effect of Mannitol to the assessment finding.",
                rows: ["Osmotic pull from brain tissue", "Rapid intravascular volume expansion", "Potent diuretic effect", "Crystallization in renal tubules"],
                columns: ["Decreased ICP / Improved Neuro", "Crackles in Lungs / HF", "Large volume of urine", "Acute Kidney Injury"],
                answer: {
                    "Osmotic pull from brain tissue": "Decreased ICP / Improved Neuro",
                    "Rapid intravascular volume expansion": "Crackles in Lungs / HF",
                    "Potent diuretic effect": "Large volume of urine",
                    "Crystallization in renal tubules": "Acute Kidney Injury"
                },
                rationale: "Mannitol pulls water into the blood (reducing ICP but risking HF) and then out through the kidneys (causing high UO but risking AKI from crystals)."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "The patient's BP is 160/90 and ICP is 22. Urine output is 15 mL/hr.",
                center_condition: { label: "Condition", options: ["Oliguric Renal Failure", "Expected Response", "Diabetes Insipidus", "SJS"], answer: "Oliguric Renal Failure" },
                left_actions: { label: "Actions", options: ["Hold Mannitol", "Notify Provider", "Increase IV rate", "Give IV Furosemide"], answer: ["Hold Mannitol", "Notify Provider"] },
                right_monitor: { label: "Monitor", options: ["BUN / Creatinine", "Serum Osmolality", "SpO2", "Neuro checks"], answer: ["BUN / Creatinine", "Serum Osmolality"] }
            }
        ]
    }
];
