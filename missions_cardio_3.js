// Missions 11-15: Clinical Reasoning in Cardiovascular Pharma
window.missions_cardio_3 = [
    {
        id: "M-011",
        numerical_id: 11,
        title: "Nightmare and Nightfalls: Prazosin Initiation",
        category: "Cardiovascular / Adrenergics",
        difficulty: "Intermediate",
        patient_profile: {
            demographics: { name: "Henry Miller", age: 48, gender: "Male", mrn: "1192-HM", weight: "92 kg", height: "180 cm", allergies: "NKDA" },
            chief_complaint: "Readiness for first dose of Prazosin.",
            hpi: "Patient is prescribed Prazosin (Minipress) for both resistant hypertension and PTSD-related nightmares. He is receiving his first 1mg dose today.",
            pmh: "PTSD, Hypertension, BPH.",
            sh: "Iraq War veteran. Lives alone.",
            ros: { neuro: "Reports vivid nightmares. Cardio: BP 158/94." }
        },
        exhibits: [
            {
                title: "Provider Orders",
                type: "text",
                content: "1. Prazosin (Minipress) 1 mg PO once daily.<br>2. Monitor BP q30min for 2 hours after initial dose."
            }
        ],
        steps: [
            {
                id: 1,
                type: "extended_sata",
                prompt: "The nurse prepares to administer the first dose. Which safety interventions are mandatory? Select all that apply.",
                options: [
                    "Administer the dose at bedtime",
                    "Instruct patient to remain in bed for 3 hours after dose",
                    "Warn patient about the risk of sudden fainting (syncope)",
                    "Check BP only if the patient feels dizzy",
                    "Administer with a high-protein meal",
                    "Advise avoiding hazardous tasks for 24 hours"
                ],
                answer: ["Administer the dose at bedtime", "Instruct patient to remain in bed for 3 hours after dose", "Warn patient about the risk of sudden fainting (syncope)", "Advise avoiding hazardous tasks for 24 hours"],
                rationale: "Prazosin is notorious for 'First-Dose Syncope,' a profound orthostatic drop occurring 30-90 minutes after the initial dose. Bedtime administration and staying supine/in bed are the primary safety rules to prevent injury."
            },
            {
                id: 2,
                type: "matrix",
                prompt: "Identify the therapeutic target for each indication of Prazosin in this patient.",
                rows: ["PTSD Nightmares", "Hypertension", "BPH Symptoms"],
                columns: ["CNS Alpha-1 Blockade", "Peripheral Alpha-1 Blockade", "Urethral Smooth Muscle Relaxation"],
                answer: {
                    "PTSD Nightmares": "CNS Alpha-1 Blockade",
                    "Hypertension": "Peripheral Alpha-1 Blockade",
                    "BPH Symptoms": "Urethral Smooth Muscle Relaxation"
                },
                rationale: "Prazosin acts on alpha-1 receptors in three locations: the brain (PTSD), vascular smooth muscle (HTN), and the bladder neck/prostate (BPH)."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "The patient stands up to use the bathroom 45 minutes after the dose and collapses.",
                center_condition: { label: "Condition", options: ["First-Dose Syncope", "Acute MI", "Stroke", "Seizure"], answer: "First-Dose Syncope" },
                left_actions: { label: "Actions", options: ["Place in Trendelenburg", "Assess BP immediately", "Give Epinephrine", "Call a Code Blue"], answer: ["Place in Trendelenburg", "Assess BP immediately"] },
                right_monitor: { label: "Monitor", options: ["Orthostatic BP levels", "Neuro checks", "Urine output", "Blood glucose"], answer: ["Orthostatic BP levels", "Neuro checks"] },
                rationale: "First-Dose Syncope is a well-known risk of alpha-1 blockers like Prazosin. The sudden drop in blood pressure upon standing causes cerebral hypoperfusion. Trendelenburg position improves venous return, and immediate BP assessment guides further intervention."
            },
            {
                id: 4,
                type: "cloze_drag_drop",
                prompt: "The nurse is documenting patient education about Prazosin first-dose precautions. Complete the documentation by dragging the correct terms into the blanks.",
                cloze_text: "Prazosin can cause [[BLANK1]] syncope, which typically occurs [[BLANK2]] minutes after the initial dose. The patient must take the first dose at [[BLANK3]] and remain [[BLANK4]] for at least 3 hours. Rise slowly from lying to standing to prevent [[BLANK5]] hypotension. Avoid [[BLANK6]] activities such as driving for 24 hours after the first dose.",
                drag_options: ["first-dose", "rebound", "30-90", "5-10", "bedtime", "morning", "supine/in bed", "active", "orthostatic", "essential", "hazardous", "light"],
                answer: {
                    "BLANK1": "first-dose",
                    "BLANK2": "30-90",
                    "BLANK3": "bedtime",
                    "BLANK4": "supine/in bed",
                    "BLANK5": "orthostatic",
                    "BLANK6": "hazardous"
                },
                rationale: "First-dose syncope typically occurs 30-90 minutes after the initial dose of alpha-1 blockers. Bedtime administration and remaining supine minimizes fall risk. Orthostatic hypotension is the mechanism. Hazardous activities must be avoided until the patient's response to the drug is known."
            },
            {
                id: 5,
                type: "highlight",
                prompt: "Review the patient's medical history below. Highlight/select ALL conditions for which Prazosin provides therapeutic benefit.",
                highlight_text: "PMH: PTSD, Hypertension, BPH. SH: Iraq War veteran. Lives alone. ROS: Reports vivid nightmares. Cardio: BP 158/94.",
                highlight_options: ["PTSD", "Hypertension", "BPH", "Iraq War veteran", "Lives alone", "vivid nightmares", "BP 158/94"],
                answer: ["PTSD", "Hypertension", "BPH"],
                rationale: "Prazosin (alpha-1 blocker) has three approved/off-label uses in this patient: (1) PTSD-related nightmares (off-label but well-established), (2) Hypertension (vasodilation), and (3) BPH (relaxes prostatic smooth muscle). 'Vivid nightmares' is a symptom of PTSD that Prazosin treats, but it's not itself a condition. The BP reading and veteran status are relevant history but not indications."
            }
        ]
    },
    {
        id: "M-012",
        numerical_id: 12,
        title: "Breathless on Brilinta: Ticagrelor Dyspnea",
        category: "Cardiovascular / Antiplatelets",
        difficulty: "Advanced",
        patient_profile: {
            demographics: { name: "Sarah Jenkins", age: 62, gender: "Female", mrn: "8821-SJ", weight: "70 kg", height: "162 cm", allergies: "Aspirin (GI upset)" },
            chief_complaint: "Sudden onset of shortness of breath at rest.",
            hpi: "Patient was started on Ticagrelor (Brilinta) 90mg BID 3 days ago following a coronary stent. She reports feeling 'short of breath' even when sitting still. She denies chest pain or leg swelling.",
            pmh: "CAD, Post-PCI, HTN.",
            sh: "Retired. Lives with daughter.",
            ros: { cardio: "No chest pain. HR 72.", lung: "Lungs clear. Reports dyspnea." }
        },
        exhibits: [
            {
                title: "Vitals & Labs",
                type: "table",
                data: [
                    { param: "SpO2", val: "98%", note: "Normal" },
                    { param: "BNP", val: "85 pg/mL", status: "NORMAL", ref: "< 100" },
                    { param: "CXR", val: "Clear lung fields", status: "NORMAL" }
                ]
            }
        ],
        steps: [
            {
                id: 1,
                type: "matrix",
                prompt: "The nurse distinguishes between heart failure and Ticagrelor-induced dyspnea. Link the finding to the likely cause.",
                rows: ["Elevated BNP (>400)", "Clear Lung Sounds / Normal SpO2", "Crackles on Auscultation", "Onset 3 days after starting Brilinta"],
                columns: ["Likely Heart Failure", "Likely Ticagrelor Side Effect"],
                answer: {
                    "Elevated BNP (>400)": "Likely Heart Failure",
                    "Clear Lung Sounds / Normal SpO2": "Likely Ticagrelor Side Effect",
                    "Crackles on Auscultation": "Likely Heart Failure",
                    "Onset 3 days after starting Brilinta": "Likely Ticagrelor Side Effect"
                },
                rationale: "Ticagrelor causes a unique, harmless dyspnea in ~15% of patients. It is distinguished from HF by clear lungs, normal BNP, and normal oxygen saturation."
            },
            {
                id: 2,
                type: "extended_sata",
                prompt: "Which information should the nurse provide to the patient regarding this dyspnea? Select all that apply.",
                options: [
                    "This is a known side effect of Brilinta",
                    "It is usually self-limiting and transient",
                    "You must stop the drug immediately",
                    "It does not mean your heart failure is worsening",
                    "We will need to switch you back to Clopidogrel today",
                    "Report if the breathlessness becomes disabling"
                ],
                answer: ["This is a known side effect of Brilinta", "It is usually self-limiting and transient", "It does not mean your heart failure is worsening", "Report if the breathlessness becomes disabling"],
                rationale: "The dyspnea is common and usually resolves. It is not an emergency and does not typically require drug discontinuation unless severe."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "Manage the ongoing antiplatelet therapy.",
                center_condition: { label: "Condition", options: ["Transient Dyspnea", "Pulmonary Edema", "Pneumonia", "Stent Thrombosis"], answer: "Transient Dyspnea" },
                left_actions: { label: "Actions", options: ["Reassure patient", "Continue Ticagrelor", "Give Furosemide", "Hold all meds"], answer: ["Reassure patient", "Continue Ticagrelor"] },
                right_monitor: { label: "Monitor", options: ["Persistence of symptoms", "SpO2 levels", "BUN", "Platelets"], answer: ["Persistence of symptoms", "SpO2 levels"] },
                rationale: "Ticagrelor-induced dyspnea is benign and transient. The critical nursing action is to reassure the patient and continue the vital antiplatelet therapy to prevent stent thrombosis. Monitoring for symptom persistence and oxygen saturation ensures safety."
            },
            {
                id: 4,
                type: "cloze_drag_drop",
                prompt: "The nurse is explaining Ticagrelor-induced dyspnea to the patient. Complete the education by dragging the correct terms into the blanks.",
                cloze_text: "Brilinta causes shortness of breath in approximately [[BLANK1]]% of patients. This is a [[BLANK2]] side effect caused by the drug's effect on adenosine, not heart failure. Key reassuring findings include [[BLANK3]] lung sounds, normal [[BLANK4]] levels, and normal [[BLANK5]]. This usually resolves within the first [[BLANK6]] of therapy. Do NOT stop the medication without consulting your doctor, as this increases risk of stent clotting.",
                drag_options: ["15", "50", "harmless", "dangerous", "clear", "abnormal", "BNP", "creatinine", "SpO2", "WBC", "few weeks", "few hours"],
                answer: {
                    "BLANK1": "15",
                    "BLANK2": "harmless",
                    "BLANK3": "clear",
                    "BLANK4": "BNP",
                    "BLANK5": "SpO2",
                    "BLANK6": "few weeks"
                },
                rationale: "Ticagrelor-induced dyspnea occurs in ~15% of patients and is thought to be related to adenosine reuptake inhibition. It is distinguished from heart failure by clear lungs, normal BNP, and normal oxygen saturation. Symptoms typically resolve within weeks of therapy. The medication should NOT be stopped as this dramatically increases stent thrombosis risk."
            },
            {
                id: 5,
                type: "highlight",
                prompt: "Review the patient's assessment findings below. Highlight/select ALL findings that support the diagnosis of Ticagrelor side effect rather than heart failure.",
                highlight_text: "Patient was started on Ticagrelor (Brilinta) 90mg BID 3 days ago following a coronary stent. She reports feeling 'short of breath' even when sitting still. She denies chest pain or leg swelling. SpO2: 98% (Normal). BNP: 85 pg/mL (Normal). CXR: Clear lung fields.",
                highlight_options: ["started on Ticagrelor 3 days ago", "reports feeling 'short of breath'", "denies chest pain", "denies leg swelling", "SpO2: 98%", "BNP: 85 pg/mL", "CXR: Clear lung fields"],
                answer: ["started on Ticagrelor 3 days ago", "denies leg swelling", "SpO2: 98%", "BNP: 85 pg/mL", "CXR: Clear lung fields"],
                rationale: "Findings supporting Ticagrelor side effect (not HF): (1) Temporal relationship - started 3 days ago; (2) No leg swelling - absent peripheral edema; (3) Normal SpO2 - adequate oxygenation; (4) Normal BNP - rules out ventricular strain; (5) Clear CXR - no pulmonary congestion. 'Short of breath' is the symptom being evaluated, not supporting evidence. Denial of chest pain is reassuring but not specific to this differentiation."
            }
        ]
    },
    {
        id: "M-013",
        numerical_id: 13,
        title: "The Potent Guard: Abciximab in PCI",
        category: "Cardiovascular / Antiplatelets",
        difficulty: "Advanced",
        patient_profile: {
            demographics: { name: "David Ross", age: 55, gender: "Male", mrn: "7732-DR", weight: "105 kg", height: "185 cm", allergies: "NKDA" },
            chief_complaint: "Acute Chest Pain - Scheduled for PCI.",
            hpi: "Patient is in the Cath Lab for a balloon angioplasty. The provider has ordered an Abciximab (ReoPro) drip to prevent re-occlusion.",
            pmh: "Unstable Angina, Smoking, T2DM.",
            sh: "Active. Owns a trucking company.",
            ros: { cardio: "Chest pain 8/10. ST depression on EKG." }
        },
        exhibits: [
            {
                title: "Procedural Orders",
                type: "text",
                content: "1. Abciximab 0.25 mg/kg IV bolus.<br>2. Abciximab infusion 0.125 mcg/kg/min for 12 hours.<br>3. Maintain bedrest."
            },
            {
                title: "Post-Procedure Vitals (1400)",
                type: "table",
                data: [
                    { param: "BP", val: "90/52 mmHg", status: "LOW" },
                    { param: "Groin Site", val: "6cm hematoma noted", status: "CRITICAL" },
                    { param: "Platelets", val: "42,000", status: "CRITICAL LOW", ref: "150k-400k" }
                ]
            }
        ],
        steps: [
            {
                id: 1,
                type: "matrix",
                prompt: "Which handling rules are required for Abciximab? Indicate True or False.",
                rows: ["Use a low protein-binding in-line filter", "Shake the vial vigorously to mix", "Verify patient has platelets > 100k", "Administer through a dedicated IV line"],
                columns: ["True", "False"],
                answer: {
                    "Use a low protein-binding in-line filter": "True",
                    "Shake the vial vigorously to mix": "False",
                    "Verify patient has platelets > 100k": "True",
                    "Administer through a dedicated IV line": "True"
                },
                rationale: "Abciximab requires a filter and dedicated line. Shaking the vial can denature the monoclonal antibodies. Baseline platelets must be checked as it can cause profound thrombocytopenia."
            },
            {
                id: 2,
                type: "extended_sata",
                prompt: "The nurse notes the groin hematoma and low platelets. Which actions are appropriate? Select all that apply.",
                options: [
                    "Stop the Abciximab infusion",
                    "Apply manual pressure to the groin site",
                    "Notify the interventional cardiologist",
                    "Give 325mg Aspirin immediately",
                    "Increase the IV rate to maintain BP",
                    "Prepare for potential platelet transfusion"
                ],
                answer: ["Stop the Abciximab infusion", "Apply manual pressure to the groin site", "Notify the interventional cardiologist", "Prepare for potential platelet transfusion"],
                rationale: "Bleeding and severe thrombocytopenia are the main risks. Stopping the drug and applying pressure are immediate nursing priorities."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "Complete the bowtie for the platelet findings.",
                center_condition: { label: "Condition", options: ["Severe Thrombocytopenia", "Normal response", "HIT", "DIC"], answer: "Severe Thrombocytopenia" },
                left_actions: { label: "Actions", options: ["Stop Abciximab", "Apply pressure", "Give Heparin", "Administer Vit K"], answer: ["Stop Abciximab", "Apply pressure"] },
                right_monitor: { label: "Monitor", options: ["Serial Platelet counts", "Hgb / Hct", "aPTT", "INR"], answer: ["Serial Platelet counts", "Hgb / Hct"] },
                rationale: "Abciximab-induced thrombocytopenia is a serious complication that can occur rapidly. Immediate discontinuation and pressure to bleeding sites are critical. Serial platelet counts and hemoglobin monitoring guide transfusion decisions."
            },
            {
                id: 4,
                type: "cloze_drag_drop",
                prompt: "The nurse is documenting the emergency response to GP IIb/IIIa inhibitor complications. Complete the documentation by dragging the correct terms into the blanks.",
                cloze_text: "Abciximab is a [[BLANK1]] antibody that blocks platelet aggregation. It requires a [[BLANK2]] in-line filter and must NOT be [[BLANK3]] as this denatures the protein. Baseline [[BLANK4]] must be >100,000 before administration. Patient developed severe [[BLANK5]] (platelets 42,000) and a 6cm groin [[BLANK6]]. Drug discontinued and manual pressure applied.",
                drag_options: ["monoclonal", "polyclonal", "low protein-binding", "high protein-binding", "shaken", "refrigerated", "platelets", "creatinine", "thrombocytopenia", "neutropenia", "hematoma", "abscess"],
                answer: {
                    "BLANK1": "monoclonal",
                    "BLANK2": "low protein-binding",
                    "BLANK3": "shaken",
                    "BLANK4": "platelets",
                    "BLANK5": "thrombocytopenia",
                    "BLANK6": "hematoma"
                },
                rationale: "Abciximab is a monoclonal antibody (chimeric mouse/human). It requires a low protein-binding filter to prevent drug loss. Shaking denatures the antibody and must be avoided. Baseline platelets >100,000 are required. This patient developed thrombocytopenia and a groin hematoma - the two major complications of GP IIb/IIIa inhibitors."
            },
            {
                id: 5,
                type: "highlight",
                prompt: "Review the post-procedure findings below. Highlight/select ALL findings that indicate a complication requiring immediate intervention.",
                highlight_text: "Post-Procedure Vitals (1400): BP: 90/52 mmHg (LOW). HR: 110 bpm. Groin Site: 6cm hematoma noted (CRITICAL). Platelets: 42,000 (CRITICAL LOW, ref: 150k-400k). Patient reports feeling lightheaded and anxious.",
                highlight_options: ["BP: 90/52 mmHg", "HR: 110 bpm", "6cm hematoma noted", "Platelets: 42,000", "feeling lightheaded", "feeling anxious"],
                answer: ["BP: 90/52 mmHg", "HR: 110 bpm", "6cm hematoma noted", "Platelets: 42,000", "feeling lightheaded"],
                rationale: "Critical findings requiring immediate intervention: (1) Hypotension (90/52) - indicates hypovolemia from bleeding; (2) Tachycardia (110 bpm) - compensatory response to blood loss; (3) Expanding hematoma - active bleeding; (4) Critical thrombocytopenia (42,000) - major drug complication; (5) Lightheadedness - symptom of hypoperfusion. Anxiety, while important, is expected and not independently a critical finding."
            }
        ]
    },
    {
        id: "M-014",
        numerical_id: 14,
        title: "The Renal Rhythm: Atenolol in CKD",
        category: "Cardiovascular / Beta Blockers",
        difficulty: "Intermediate",
        patient_profile: {
            demographics: { name: "Frank Gomez", age: 74, gender: "Male", mrn: "3321-FG", weight: "80 kg", height: "175 cm", allergies: "NKDA" },
            chief_complaint: "Extreme lethargy and slow heart rate.",
            hpi: "Patient has been taking Atenolol 50mg daily for 2 years. He has Stage 4 CKD. Over the last week, his daughter noticed he is 'nearly impossible to wake up'.",
            pmh: "HTN, CKD (Stage 4), Heart Failure.",
            sh: "Retired tailor.",
            ros: { neuro: "Somnolent. Slow speech. Cardio: HR 38." }
        },
        exhibits: [
            {
                title: "Laboratory Results",
                type: "table",
                data: [
                    { lab: "Creatinine", val: "3.2 mg/dL", status: "CRITICAL HIGH" },
                    { lab: "GFR", val: "18 mL/min", status: "CRITICAL LOW" },
                    { lab: "Potassium", val: "4.8 mEq/L", status: "NORMAL" }
                ]
            }
        ],
        steps: [
            {
                id: 1,
                type: "extended_sata",
                prompt: "Why is Frank experiencing toxicity from a dose he has taken for 2 years? Select all that apply.",
                options: [
                    "Atenolol is excreted unchanged by the kidneys",
                    "Worsening GFR leads to accumulation of the drug",
                    "Atenolol is primarily metabolized by the liver",
                    "Frank's age increases the half-life of beta blockers",
                    "Atenolol is highly lipid soluble",
                    "The drug has a low therapeutic index"
                ],
                answer: ["Atenolol is excreted unchanged by the kidneys", "Worsening GFR leads to accumulation of the drug", "Frank's age increases the half-life of beta blockers"],
                rationale: "Unlike Metoprolol (liver), Atenolol is renally excreted. In CKD, it accumulates rapidly, leading to profound bradycardia and sedation."
            },
            {
                id: 2,
                type: "matrix",
                prompt: "Compare Atenolol and Propranolol for this patient.",
                rows: ["Safe for Asthmatics", "Renally Excreted", "Crosses Blood-Brain Barrier Easily", "Requires dose reduction in CKD"],
                columns: ["Atenolol", "Propranolol", "Neither"],
                answer: {
                    "Safe for Asthmatics": "Neither",
                    "Renally Excreted": "Atenolol",
                    "Crosses Blood-Brain Barrier Easily": "Propranolol",
                    "Requires dose reduction in CKD": "Atenolol"
                },
                rationale: "Both can cause bronchospasm (neither safe). Atenolol is renal; Propranolol is liver and lipid-soluble (BBB)."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "Manage the profound bradycardia.",
                center_condition: { label: "Condition", options: ["Symptomatic Bradycardia", "Heart Block", "Normal aging", "Metabolic Acidosis"], answer: "Symptomatic Bradycardia" },
                left_actions: { label: "Actions", options: ["Hold Atenolol", "Administer Atropine", "Give IV Fluids", "Increase dose"], answer: ["Hold Atenolol", "Administer Atropine"] },
                right_monitor: { label: "Monitor", options: ["Continuous EKG", "BP / Pulse", "Liver Enzymes", "Urine Color"], answer: ["Continuous EKG", "BP / Pulse"] },
                rationale: "Symptomatic bradycardia from beta-blocker toxicity requires holding the medication and potentially administering Atropine to increase heart rate. Continuous cardiac monitoring and BP assessment are essential."
            },
            {
                id: 4,
                type: "cloze_drag_drop",
                prompt: "The nurse is documenting the clinical reasoning for this patient's drug toxicity. Complete the documentation by dragging the correct terms into the blanks.",
                cloze_text: "Patient presents with Atenolol toxicity despite stable dosing for 2 years. Unlike Metoprolol, Atenolol is excreted [[BLANK1]] by the kidneys. With progression to Stage 4 CKD (GFR [[BLANK2]] mL/min), the drug [[BLANK3]] in the body. Symptoms include profound [[BLANK4]] (HR 38) and extreme [[BLANK5]]. Atenolol requires [[BLANK6]] in patients with renal impairment.",
                drag_options: ["unchanged", "metabolized", "18", "90", "accumulates", "depletes", "bradycardia", "tachycardia", "lethargy", "anxiety", "dose reduction", "dose increase"],
                answer: {
                    "BLANK1": "unchanged",
                    "BLANK2": "18",
                    "BLANK3": "accumulates",
                    "BLANK4": "bradycardia",
                    "BLANK5": "lethargy",
                    "BLANK6": "dose reduction"
                },
                rationale: "Atenolol is unique among beta-blockers because it is excreted UNCHANGED by the kidneys (not metabolized by the liver like Metoprolol). With GFR of 18 mL/min (Stage 4 CKD), the drug accumulates significantly. Classic toxicity symptoms include profound bradycardia and CNS depression (lethargy). Dose reduction is mandatory in renal impairment."
            },
            {
                id: 5,
                type: "highlight",
                prompt: "Review the patient information below. Highlight/select ALL factors that contributed to this patient's drug toxicity.",
                highlight_text: "Patient has been taking Atenolol 50mg daily for 2 years. He has Stage 4 CKD. Over the last week, his daughter noticed he is 'nearly impossible to wake up'. Laboratory Results: Creatinine: 3.2 mg/dL (CRITICAL HIGH). GFR: 18 mL/min (CRITICAL LOW). Potassium: 4.8 mEq/L (NORMAL).",
                highlight_options: ["Atenolol 50mg daily for 2 years", "Stage 4 CKD", "nearly impossible to wake up", "Creatinine: 3.2 mg/dL", "GFR: 18 mL/min", "Potassium: 4.8 mEq/L"],
                answer: ["Stage 4 CKD", "Creatinine: 3.2 mg/dL", "GFR: 18 mL/min"],
                rationale: "Contributing factors to toxicity: (1) Stage 4 CKD - impaired renal function; (2) Elevated creatinine (3.2) - marker of worsening renal function; (3) Critical GFR (18 mL/min) - severely reduced drug clearance. The 2-year history of Atenolol use is relevant context but not a toxicity factor. 'Nearly impossible to wake up' is a symptom of toxicity, not a cause. Normal potassium is reassuring but not contributory."
            }
        ]
    },
    {
        id: "M-015",
        numerical_id: 15,
        title: "The Mononitrate Mistake: Rescue vs. Prophylaxis",
        category: "Cardiovascular / Nitrates",
        difficulty: "Intermediate",
        patient_profile: {
            demographics: { name: "Irene Adler", age: 68, gender: "Female", mrn: "2219-IA", weight: "65 kg", height: "160 cm", allergies: "NKDA" },
            chief_complaint: "Instruction on new 'heart pill'.",
            hpi: "Patient is prescribed Isosorbide Mononitrate (Imdur) 30mg daily for stable angina. She asks the nurse, 'So I take this when my chest starts hurting, right?'",
            pmh: "Stable Angina, Hyperlipidemia.",
            sh: "Very active. Walks 2 miles daily.",
            ros: { cardio: "Chest pain during exercise only." }
        },
        exhibits: [
            {
                title: "Discharge Prescriptions",
                type: "text",
                content: "1. Isosorbide Mononitrate 30 mg PO Daily (Morning).<br>2. Nitroglycerin 0.4 mg SL PRN for Chest Pain."
            }
        ],
        steps: [
            {
                id: 1,
                type: "matrix",
                prompt: "Correct the patient's understanding of her nitrates.",
                rows: ["Isosorbide Mononitrate (Imdur)", "Nitroglycerin SL (Nitrostat)"],
                columns: ["Acute Rescue Only", "Long-term Prophylaxis Only", "Both"],
                answer: {
                    "Isosorbide Mononitrate (Imdur)": "Long-term Prophylaxis Only",
                    "Nitroglycerin SL (Nitrostat)": "Acute Rescue Only"
                },
                rationale: "Mononitrate has a slow onset and is for prevention. SL Nitroglycerin is for immediate rescue. They are never swapped."
            },
            {
                id: 2,
                type: "extended_sata",
                prompt: "Which teaching points are critical for Isosorbide Mononitrate? Select all that apply.",
                options: [
                    "Take in the morning upon awakening",
                    "Do not crush or chew the tablet",
                    "Expect a headache during the first week",
                    "Take only when chest pain occurs",
                    "Maintain an 8-12 hour nitrate-free interval",
                    "Notify provider if you use Viagra (PDE-5)"
                ],
                answer: ["Take in the morning upon awakening", "Do not crush or chew the tablet", "Expect a headache during the first week", "Maintain an 8-12 hour nitrate-free interval", "Notify provider if you use Viagra (PDE-5)"],
                rationale: "Imdur is an extended-release prophylactic. Nitrate-free intervals prevent tolerance. PDE-5 inhibitors are strictly contraindicated."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "The patient reports the medication isn't working after 2 months of TID dosing.",
                center_condition: { label: "Condition", options: ["Nitrate Tolerance", "Drug Allergy", "Acute MI", "Rebound HTN"], answer: "Nitrate Tolerance" },
                left_actions: { label: "Actions", options: ["Implement Nitrate-free period", "Consult MD for dose adjust", "Increase frequency", "Switch to Aspirin"], answer: ["Implement Nitrate-free period", "Consult MD for dose adjust"] },
                right_monitor: { label: "Monitor", options: ["Anginal frequency", "BP", "Liver Enzymes", "Hgb"], answer: ["Anginal frequency", "BP"] },
                rationale: "Nitrate tolerance develops when continuous nitrate exposure depletes sulfhydryl groups needed for drug activation. The solution is implementing an 8-12 hour nitrate-free interval (usually overnight). Monitoring anginal episodes and blood pressure assesses effectiveness."
            },
            {
                id: 4,
                type: "cloze_drag_drop",
                prompt: "The nurse is correcting the patient's understanding of her nitrate medications. Complete the patient education by dragging the correct terms into the blanks.",
                cloze_text: "Isosorbide Mononitrate (Imdur) is for [[BLANK1]] — it prevents angina attacks but has a [[BLANK2]] onset. Nitroglycerin SL is for [[BLANK3]] — it works within [[BLANK4]]. Never use Imdur when chest pain starts. To prevent tolerance, maintain an [[BLANK5]] nitrate-free interval. Both nitrates are strictly [[BLANK6]] with Viagra (PDE-5 inhibitors) due to severe hypotension risk.",
                drag_options: ["prophylaxis", "acute rescue", "slow", "immediate", "seconds to minutes", "hours to days", "8-12 hour", "2-4 hour", "contraindicated", "recommended"],
                answer: {
                    "BLANK1": "prophylaxis",
                    "BLANK2": "slow",
                    "BLANK3": "acute rescue",
                    "BLANK4": "seconds to minutes",
                    "BLANK5": "8-12 hour",
                    "BLANK6": "contraindicated"
                },
                rationale: "Critical nitrate teaching: Imdur is for prevention (prophylaxis) with slow onset. SL Nitroglycerin is for acute rescue with immediate onset (1-3 minutes). An 8-12 hour nitrate-free interval prevents tolerance. ALL nitrates are absolutely contraindicated with PDE-5 inhibitors (Viagra, Cialis, Levitra) due to life-threatening hypotension."
            },
            {
                id: 5,
                type: "highlight",
                prompt: "Review the patient's question and prescriptions below. Highlight/select ALL misconceptions or errors that the nurse must correct.",
                highlight_text: "Patient asks: 'So I take this when my chest starts hurting, right?' Discharge Prescriptions: 1. Isosorbide Mononitrate 30 mg PO Daily (Morning). 2. Nitroglycerin 0.4 mg SL PRN for Chest Pain.",
                highlight_options: ["So I take this when my chest starts hurting, right?", "Isosorbide Mononitrate 30 mg PO Daily", "Morning", "Nitroglycerin 0.4 mg SL PRN", "for Chest Pain"],
                answer: ["So I take this when my chest starts hurting, right?"],
                rationale: "The ONLY misconception is the patient's question — she incorrectly believes Imdur is for acute chest pain (rescue), when it's actually for daily prophylaxis. All other items are correct: Imdur 30mg daily in the MORNING (allows nitrate-free interval at night), and Nitroglycerin SL PRN for chest pain (correct rescue medication). The nurse must clarify that Imdur prevents attacks; Nitroglycerin treats them."
            }
        ]
    }
];
