// Expanded Missions - Maintaining the Golden Glow Standard
window.missions_cardio_1 = [
    {
        id: "M-002",
        numerical_id: 2,
        title: "The Silent Crisis: Nitroprusside Titration",
        category: "Cardiovascular / Emergency",
        difficulty: "Advanced",
        patient_profile: {
            demographics: {
                name: "Robert Vance",
                age: 58,
                gender: "Male",
                mrn: "9912-RV",
                dob: "11/22/1967",
                weight: "110 kg (242 lbs)",
                height: "183 cm (6'0\")",
                allergies: "NKDA"
            },
            chief_complaint: "Severe 'splitting' headache, blurry vision, and sudden nausea.",
            hpi: "Mr. Vance was brought to the Emergency Department by his spouse. She reports he became suddenly 'dizzy and sick' while working in the garage. Upon further questioning, the patient admits he stopped taking his Lisinopril and Amlodipine 2 weeks ago because he 'felt fine' and ran out of refills. He currently rates his headache as a 10/10 and states, 'I feel like my head is going to explode.'",
            pmh: "Chronic Stage II Hypertension (diagnosed 10 years ago), Type 2 Diabetes Mellitus (non-insulin dependent), Obesity Class II (BMI 32.8).",
            sh: "Construction foreman. High-stress occupation. Smokes 1.5 packs of cigarettes per day. Diet consists mainly of fast food due to work schedule.",
            ros: {
                neuro: "Intense global headache. Photophobia. Vision described as 'looking through a fog'. No focal weakness or slurred speech.",
                cardio: "Denies chest pain. Reports 'thumping' in chest. JVD is absent. No S3/S4 heard.",
                gi: "Nausea and one episode of non-bilious emesis in the triage area.",
                gu: "Reports he hasn't urinated since early this morning (currently 1600)."
            }
        },
        exhibits: [
            {
                title: "Critical Care Vitals (1615)",
                type: "table",
                data: [
                    { param: "Blood Pressure", val: "238/124 mmHg", note: "Verified via Arterial Line" },
                    { param: "Heart Rate", val: "114 bpm", note: "Sinus Tachycardia" },
                    { param: "Resp Rate", val: "24 bpm", note: "Tachypneic" },
                    { param: "MAP", val: "162 mmHg", note: "Target: Reduce by 25% in 1st hour" },
                    { param: "SpO2", val: "96%", note: "2L via Nasal Cannula" }
                ]
            },
            {
                title: "Emergency Orders",
                type: "text",
                content: `
                    1. Nitroprusside (Nitropress) IV: Start at 0.3 mcg/kg/min. Titrate q5min to maintain MAP between 110-115 mmHg.<br>
                    2. Continuous intra-arterial blood pressure monitoring.<br>
                    3. Hourly Neuro checks and urine output monitoring.<br>
                    4. Draw serum thiocyanate levels if infusion continues > 48 hours.
                `
            },
            {
                title: "Stat Lab Results",
                type: "table",
                data: [
                    { lab: "Sodium", val: "142 mEq/L", ref: "135-145" },
                    { lab: "Potassium", val: "4.1 mEq/L", ref: "3.5-5.0" },
                    { lab: "Creatinine", val: "1.4 mg/dL", status: "HIGH", ref: "0.7-1.3" },
                    { lab: "Lactate", val: "2.1 mmol/L", status: "HIGH", ref: "0.5-1.0" }
                ]
            }
        ],
        steps: [
            {
                id: 1,
                type: "matrix",
                prompt: "The nurse is preparing the Nitroprusside (Nitropress) infusion. For each action, indicate if it is required or contraindicated for the safe administration of this medication.",
                rows: [
                    "Protecting the IV bag and tubing from light with opaque covering",
                    "Administering the drug via a gravity drip set for rapid control",
                    "Discarding the solution if it displays a blue, green, or bright red tint",
                    "Using a dedicated large-bore peripheral 22g IV for the primary line"
                ],
                columns: ["Required", "Contraindicated"],
                answer: {
                    "Protecting the IV bag and tubing from light with opaque covering": "Required",
                    "Administering the drug via a gravity drip set for rapid control": "Contraindicated",
                    "Discarding the solution if it displays a blue, green, or bright red tint": "Required",
                    "Using a dedicated large-bore peripheral 22g IV for the primary line": "Contraindicated"
                },
                rationale: "Nitroprusside is extremely light-sensitive; exposure to UV light causes it to decompose into cyanide. The IV bag and tubing MUST be wrapped in aluminum foil or an opaque sleeve. It is a potent vasodilator that requires precise titration via an electronic infusion pump; gravity drips are strictly contraindicated. A change in color (blue/green/red) indicates chemical breakdown and toxicity. While a large-bore IV is good, a central line or arterial line for monitoring is the standard of care due to the risk of extreme hypotension and extravasation."
            },
            {
                id: 2,
                type: "extended_sata",
                prompt: "After 36 hours of high-dose Nitroprusside infusion, the nurse assesses Mr. Vance. Which findings would alert the nurse to potential cyanide toxicity? Select all that apply.",
                options: [
                    "New-onset confusion and disorientation",
                    "Metabolic Acidosis noted on ABGs",
                    "A faint odor of bitter almonds on the breath",
                    "Profound bradycardia and AV block",
                    "Distant, muffled heart sounds",
                    "Hyperactive bowel sounds and diarrhea",
                    "Muscle twitching and agitation"
                ],
                answer: ["New-onset confusion and disorientation", "Metabolic Acidosis noted on ABGs", "A faint odor of bitter almonds on the breath", "Muscle twitching and agitation"],
                rationale: "Cyanide toxicity is a life-threatening complication of nitroprusside metabolism. Signs include CNS changes (confusion, agitation, tremors), metabolic acidosis (due to interference with cellular respiration), and the classic 'bitter almond' breath odor. Muffled heart sounds are signs of tamponade (Minoxidil risk), and bradycardia is not the primary sign of cyanide poisoning."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "The patient's MAP has dropped to 60 mmHg and he is becoming increasingly lethargic. Complete the bowtie diagram by choosing the most likely condition, two nursing actions, and two parameters to monitor.",
                center_condition: {
                    label: "Condition",
                    options: ["Severe Hypotension", "Cyanide Poisoning", "Rebound Hypertension", "Ischemic Stroke"],
                    answer: "Severe Hypotension"
                },
                left_actions: {
                    label: "Actions (2)",
                    options: ["Stop Nitroprusside infusion", "Place patient in Trendelenburg", "Administer Sodium Thiosulfate", "Increase infusion rate", "Administer IV Lisinopril"],
                    answer: ["Stop Nitroprusside infusion", "Place patient in Trendelenburg"]
                },
                right_monitor: {
                    label: "Monitor (2)",
                    options: ["Blood Pressure every 2 minutes", "Level of consciousness", "Serum thiocyanate levels", "Urine specific gravity", "Daily weights"],
                    answer: ["Blood Pressure every 2 minutes", "Level of consciousness"]
                },
                rationale: "The patient is experiencing profound, life-threatening hypotension, which is the most common and immediate adverse effect of Nitroprusside due to its potent vasodilatory action on both venous and arterial smooth muscle. The most urgent nursing priority is to stop the infusion immediately; since Nitroprusside has an extremely short half-life (1–10 minutes), blood pressure typically begins to recover very rapidly once the drug is discontinued. Placing the patient in the Trendelenburg position (head down, feet elevated) is a standard emergency maneuver to facilitate venous return to the heart and improve cerebral perfusion during the acute hypotensive state. Monitoring must transition to emergency frequency: blood pressure must be assessed every 2 minutes via the existing arterial line to guide recovery, and the level of consciousness must be evaluated continuously to ensure that cerebral oxygenation is improving as systemic pressure normalizes."
            }
        ]
    },
    {
        id: "M-003",
        numerical_id: 3,
        title: "Post-MI Stability: Beta-Blocker Bridge",
        category: "Cardiovascular / Beta Blockers",
        difficulty: "Intermediate",
        patient_profile: {
            demographics: {
                name: "Linda Chen",
                age: 64,
                gender: "Female",
                mrn: "4451-LC",
                dob: "09/14/1961",
                weight: "68 kg (150 lbs)",
                height: "162 cm (5'4\")",
                allergies: "NKDA"
            },
            chief_complaint: "Readiness for discharge education following a 'heart attack'.",
            hpi: "Ms. Chen is 3 days post-percutaneous coronary intervention (PCI) for a significant Right Coronary Artery occlusion (STEMI). She has been stabilized on the telemetry floor. She reports feeling 'a bit tired and slow' since starting her new medication regimen but denies any recurrence of chest pain. She is eager to return home to her gardening but is anxious about 'doing something wrong' with her heart.",
            pmh: "Recent STEMI, Hyperlipidemia (diagnosed 5 years ago), Stage II Hypertension, and Type 2 Diabetes Mellitus (controlled with Metformin).",
            sh: "Retired accountant. Lives with her husband in a single-story home. Non-smoker. Enjoys walking and light gardening. Follows a vegetarian diet.",
            ros: {
                neuro: "No dizziness or lightheadedness when standing. Reports 'vivid dreams' last night.",
                cardio: "Denies chest pain or pressure. No palpitations. Peripheral pulses 2+ and equal.",
                lung: "Lungs clear to auscultation bilaterally. Denies shortness of breath at rest; reports slight dyspnea when walking long distances in the hall.",
                gi: "Appetite is good. No nausea or constipation."
            }
        },
        exhibits: [
            {
                title: "Current Clinical Status (0800)",
                type: "table",
                data: [
                    { param: "Heart Rate", val: "56 bpm", note: "Sinus Bradycardia (Target: 55-60)" },
                    { param: "Blood Pressure", val: "112/68 mmHg", note: "Stable" },
                    { param: "Left Ventricular EF", val: "45%", note: "Mildly reduced (Post-MI)" },
                    { param: "Fingerstick Glucose", val: "92 mg/dL", note: "Fasting" }
                ]
            },
            {
                title: "Discharge Prescriptions",
                type: "text",
                content: `
                    1. Metoprolol Succinate (Toprol XL) 25 mg PO daily.<br>
                    2. Aspirin 81 mg PO daily.<br>
                    3. Atorvastatin (Lipitor) 40 mg PO daily.<br>
                    4. Metformin 500 mg PO BID.
                `
            },
            {
                title: "Laboratory Trends",
                type: "table",
                data: [
                    { lab: "LDL Cholesterol", val: "142 mg/dL", status: "HIGH", ref: "< 70 (Post-MI)" },
                    { lab: "HbA1c", val: "6.8%", status: "STABLE", ref: "< 7.0" },
                    { lab: "Creatinine", val: "0.9 mg/dL", status: "NORMAL", ref: "0.6-1.1" }
                ]
            }
        ],
        steps: [
            {
                id: 1,
                type: "extended_sata",
                prompt: "The nurse provides discharge teaching regarding the Metoprolol Succinate (Toprol XL). Which instructions are essential for the patient's safety? Select all that apply.",
                options: [
                    "Do not stop this medication abruptly under any circumstances",
                    "Check your radial pulse for one full minute before each dose",
                    "Expect this medication to increase your heart rate during exercise",
                    "You may notice that your usual signs of low blood sugar (shakiness/heart racing) are missing",
                    "Take this medication only on days when you feel your heart 'pounding'",
                    "Notify the provider if you develop a new cough or shortness of breath at rest",
                    "Monitor your blood glucose more frequently during the first few weeks"
                ],
                answer: ["Do not stop this medication abruptly under any circumstances", "Check your radial pulse for one full minute before each dose", "You may notice that your usual signs of low blood sugar (shakiness/heart racing) are missing", "Notify the provider if you develop a new cough or shortness of breath at rest", "Monitor your blood glucose more frequently during the first few weeks"],
                rationale: "1. Abrupt withdrawal of beta-blockers can cause life-threatening rebound hypertension and myocardial ischemia. 2. A pulse check is mandatory to ensure the rate is not < 50-60 bpm. 3. Beta-blockers mask the tachycardia and tremors associated with hypoglycemia, which is critical for this diabetic patient. 4. SOB and cough can indicate new-onset heart failure (decreased contractility). 5. Dosing must be consistent, not PRN."
            },
            {
                id: 2,
                type: "matrix",
                prompt: "Ms. Chen asks about potential side effects. The nurse should categorize the following symptoms as common/expected or as 'Red Flags' that require immediate medical notification.",
                rows: [
                    "Feeling slightly more tired than usual",
                    "New onset of wheezing or 'tightness' in the chest",
                    "A weight gain of 3 lbs in a 24-hour period",
                    "A resting heart rate of 58 beats per minute",
                    "Cold hands and feet"
                ],
                columns: ["Common / Expected", "Red Flag (Notify Provider)"],
                answer: {
                    "Feeling slightly more tired than usual": "Common / Expected",
                    "New onset of wheezing or 'tightness' in the chest": "Red Flag (Notify Provider)",
                    "A weight gain of 3 lbs in a 24-hour period": "Red Flag (Notify Provider)",
                    "A resting heart rate of 58 beats per minute": "Common / Expected",
                    "Cold hands and feet": "Common / Expected"
                },
                rationale: "Nurses must differentiate between the manageable side effects of beta-blockade and indicators of life-threatening complications. Fatigue, mild bradycardia (HR > 50), and cold extremities are expected pharmacological effects resulting from decreased cardiac output and peripheral vasoconstriction. However, new-onset wheezing is a 'Red Flag' indicating bronchospasm (even with cardioselective agents like metoprolol, Beta-2 receptors in the lungs can be partially blocked at certain doses). Similarly, rapid weight gain (> 2 lbs/day) is a hallmark sign of fluid retention and worsening acute heart failure, caused by the drug's negative inotropic effect reducing the heart's pumping force during the early stabilization phase. Immediate provider notification is mandatory for these findings."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "Four weeks after discharge, Ms. Chen calls the clinic reporting she feels 'extremely weak' and her pulse is 42 bpm. Complete the bowtie for this clinical situation.",
                center_condition: {
                    label: "Condition",
                    options: ["Symptomatic Bradycardia", "Acute Heart Failure", "Normal Aging", "Metformin Toxicity"],
                    answer: "Symptomatic Bradycardia"
                },
                left_actions: {
                    label: "Actions (2)",
                    options: ["Hold the Metoprolol dose", "Instruct patient to come to the ED", "Increase the Atorvastatin dose", "Give a dose of Nitroglycerin", "Administer Albuterol"],
                    answer: ["Hold the Metoprolol dose", "Instruct patient to come to the ED"]
                },
                right_monitor: {
                    label: "Monitor (2)",
                    options: ["Continuous EKG rhythm", "Blood pressure stability", "Serum LDL levels", "Urine specific gravity", "Daily weights"],
                    answer: ["Continuous EKG rhythm", "Blood pressure stability"]
                },
                rationale: "The patient is presenting with symptomatic bradycardia (pulse < 50 bpm accompanied by weakness), likely due to toxic accumulation or an excessive physiological response to the Metoprolol Succinate. The primary nursing action is to immediately hold further doses of the offending agent to prevent cardiac standstill. Instructing the patient to come to the Emergency Department is critical because she requires an acute evaluation for potential AV block and may need temporary pacing or pharmacological support (e.g., Atropine). In the acute setting, continuous EKG rhythm monitoring is the highest priority to detect lethal arrhythmias, while frequent blood pressure assessment is required to ensure that systemic perfusion is maintained despite the low heart rate."
            }
        ]
    }
];
