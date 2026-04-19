
/* SOURCE: missions_cardio_3.js */
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




/* SOURCE: missions_cardio_4.js */
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
                right_monitor: { label: "Monitor", options: ["Hgb / Hct levels", "Blood pressure", "INR", "Platelet count"], answer: ["Hgb / Hct levels", "Blood pressure"] },
                rationale: "Major GI hemorrhage on Dabigatran requires immediate drug discontinuation and administration of Idarucizumab (Praxbind) — the specific reversal agent. Hemoglobin and blood pressure monitoring guide resuscitation efforts."
            },
            {
                id: 4,
                type: "cloze_drag_drop",
                prompt: "The nurse is documenting the patient's medication error and its consequences. Complete the documentation by dragging the correct terms into the blanks.",
                cloze_text: "Dabigatran must NEVER be placed in a [[BLANK1]] because the drug is extremely [[BLANK2]]-sensitive. The capsules must remain in the [[BLANK3]] with the desiccant until immediately before use. The patient's error led to drug degradation and unpredictable [[BLANK4]]. The specific reversal agent is [[BLANK5]], NOT Vitamin K. Dabigatran also carries a [[BLANK6]] risk of GI bleeding compared to Warfarin.",
                drag_options: ["pill organizer", "syringe", "moisture", "light", "original manufacturer bottle", "plastic bag", "absorption", "excretion", "Idarucizumab", "Protamine Sulfate", "higher", "lower"],
                answer: {
                    "BLANK1": "pill organizer",
                    "BLANK2": "moisture",
                    "BLANK3": "original manufacturer bottle",
                    "BLANK4": "absorption",
                    "BLANK5": "Idarucizumab",
                    "BLANK6": "higher"
                },
                rationale: "Dabigatran storage is critical: must stay in original bottle with desiccant, never pill organizers or humid environments. Moisture causes degradation and unpredictable absorption. Idarucizumab (Praxbind) is the specific antidote. Dabigatran has higher GI bleeding risk than warfarin."
            },
            {
                id: 5,
                type: "highlight",
                prompt: "Review the patient's history below. Highlight/select ALL findings that indicate active GI hemorrhage or its complications.",
                highlight_text: "Patient has been taking Dabigatran (Pradaxa) 150mg BID for 2 months for AFib. He admits to taking his pills out of the original bottle and placing them in a weekly pill organizer. Chief Complaint: New onset of black, tarry stools and coffee-ground emesis. Reports 'burning' stomach pain. Lab: Hemoglobin 8.2 g/dL (CRITICAL LOW). Hematocrit 25% (CRITICAL LOW).",
                highlight_options: ["Dabigatran 150mg BID for 2 months", "placing them in a weekly pill organizer", "black, tarry stools", "coffee-ground emesis", "burning stomach pain", "Hemoglobin 8.2 g/dL", "Hematocrit 25%"],
                answer: ["black, tarry stools", "coffee-ground emesis", "Hemoglobin 8.2 g/dL", "Hematocrit 25%"],
                rationale: "Signs of active GI hemorrhage: (1) Black, tarry stools (melena) - digested blood from upper GI tract; (2) Coffee-ground emesis - altered blood from stomach; (3) Critical anemia (Hgb 8.2, Hct 25%) - blood loss. The pill organizer error is the CAUSE but not a sign of bleeding. Burning stomach pain suggests ulcer but is not specific for active hemorrhage."
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
                right_monitor: { label: "Monitor", options: ["Stat CT scan", "Level of consciousness", "Urine output", "Lung sounds"], answer: ["Stat CT scan", "Level of consciousness"] },
                rationale: "Sudden severe headache and pupil changes during tPA infusion are hallmark signs of intracranial hemorrhage — the most feared complication. Immediate actions: stop tPA, notify provider/stroke team. Stat CT confirms the diagnosis. LOC monitoring detects deterioration."
            },
            {
                id: 4,
                type: "cloze_drag_drop",
                prompt: "The nurse is documenting the tPA protocol adherence. Complete the documentation by dragging the correct terms into the blanks.",
                cloze_text: "Alteplase (tPA) eligibility requires symptom onset within [[BLANK1]] hours and BP below [[BLANK2]] mmHg. CT scan was [[BLANK3]] for hemorrhage. The vial must be [[BLANK4]], never shaken, to preserve protein integrity. During the [[BLANK5]]-minute infusion, [[BLANK6]] procedures are strictly contraindicated. Neuro checks and BP are monitored every 15 minutes.",
                drag_options: ["3-4.5", "12-24", "185/110", "220/140", "negative", "positive", "swirled gently", "shaken vigorously", "60", "10", "invasive", "oral"],
                answer: {
                    "BLANK1": "3-4.5",
                    "BLANK2": "185/110",
                    "BLANK3": "negative",
                    "BLANK4": "swirled gently",
                    "BLANK5": "60",
                    "BLANK6": "invasive"
                },
                rationale: "Critical tPA protocol: (1) Window is 3-4.5 hours from symptom onset; (2) BP must be <185/110 before administration; (3) CT must be NEGATIVE for hemorrhage; (4) Swirl gently (shaking denatures the protein); (5) Standard infusion is 60 minutes; (6) Invasive procedures are contraindicated for 24 hours due to bleeding risk."
            },
            {
                id: 5,
                type: "highlight",
                prompt: "Review the patient's presentation below. Highlight/select ALL findings that make this patient ELIGIBLE for tPA therapy.",
                highlight_text: "Patient's husband reports symptoms began exactly 90 minutes ago. She has sudden left-sided facial droop and right-arm weakness. Unable to speak clearly (dysarthria). NIH Stroke Scale score of 14. BP 192/104 (to be lowered before tPA). Glucose 110 mg/dL (Normal). CT Head: Negative for intracranial hemorrhage. Ischemic stroke suspected.",
                highlight_options: ["symptoms began exactly 90 minutes ago", "left-sided facial droop", "right-arm weakness", "dysarthria", "NIH Stroke Scale score of 14", "BP 192/104", "Glucose 110 mg/dL", "CT Head: Negative for intracranial hemorrhage"],
                answer: ["symptoms began exactly 90 minutes ago", "Glucose 110 mg/dL", "CT Head: Negative for intracranial hemorrhage"],
                rationale: "tPA eligibility criteria met: (1) Time window - 90 minutes is well within the 3-4.5 hour limit; (2) Normal glucose - rules out hypoglycemia as stroke mimic; (3) Negative CT - rules out hemorrhagic stroke (absolute contraindication). The neurological symptoms (droop, weakness, dysarthria) and NIHSS are indications FOR treatment but not eligibility criteria. The elevated BP must be lowered to <185/110 BEFORE tPA can be given."
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
                right_monitor: { label: "Monitor", options: ["Continuous BP", "Heart rate/rhythm", "Daily weights", "Blood glucose"], answer: ["Continuous BP", "Heart rate/rhythm"] },
                rationale: "Clonidine rebound requires immediate resumption of the medication and provider notification. Continuous BP and heart rate monitoring are essential as the sympathetic surge can cause dangerous arrhythmias and hypertensive emergency."
            },
            {
                id: 4,
                type: "cloze_drag_drop",
                prompt: "The nurse is documenting the clinical presentation and mechanism of Clonidine rebound. Complete the documentation by dragging the correct terms into the blanks.",
                cloze_text: "Patient presents with rebound hypertensive crisis after [[BLANK1]] discontinuation of Clonidine 2 days ago. Clonidine is a central [[BLANK2]] agonist that suppresses sympathetic outflow. Abrupt withdrawal causes a massive [[BLANK3]] surge, leading to severe hypertension (214/118), [[BLANK4]] (HR 122), and anxiety/tremors. Treatment requires [[BLANK5]] the Clonidine and gradual [[BLANK6]] over 2-4 days. Patients must NEVER stop this medication suddenly.",
                drag_options: ["abrupt", "gradual", "alpha-2", "beta-1", "sympathetic", "parasympathetic", "tachycardia", "bradycardia", "resuming", "increasing", "tapering", "doubling"],
                answer: {
                    "BLANK1": "abrupt",
                    "BLANK2": "alpha-2",
                    "BLANK3": "sympathetic",
                    "BLANK4": "tachycardia",
                    "BLANK5": "resuming",
                    "BLANK6": "tapering"
                },
                rationale: "Clonidine is a central alpha-2 agonist that decreases sympathetic outflow. Abrupt discontinuation causes rebound sympathetic surge with severe hypertension, tachycardia, and adrenergic symptoms. Treatment: resume the medication immediately, then taper gradually over 2-4 days."
            },
            {
                id: 5,
                type: "highlight",
                prompt: "Review the patient's presentation below. Highlight/select ALL symptoms that are consistent with Clonidine rebound (sympathetic surge).",
                highlight_text: "Patient reports he ran out of his Clonidine tablets 2 days ago. Chief Complaint: Severe anxiety, tremors, and 'pounding' headache. He feels 'like my heart is jumping out of my chest'. Vitals: BP 214/118 mmHg (CRITICAL HIGH). HR 122 bpm (TACHYCARDIA). PMH: Severe HTN, Alcohol Use Disorder.",
                highlight_options: ["ran out of his Clonidine tablets 2 days ago", "Severe anxiety", "tremors", "pounding headache", "heart is jumping out of my chest", "BP 214/118 mmHg", "HR 122 bpm", "Alcohol Use Disorder"],
                answer: ["Severe anxiety", "tremors", "pounding headache", "heart is jumping out of my chest", "BP 214/118 mmHg", "HR 122 bpm"],
                rationale: "Sympathetic surge symptoms from Clonidine rebound: (1) Severe anxiety - adrenergic activation; (2) Tremors - catecholamine excess; (3) Pounding headache - severe hypertension; (4) Palpitations ('heart jumping') - awareness of tachycardia; (5) Critical BP - rebound hypertensive crisis; (6) Tachycardia - sympathetic activation. The 2-day gap is the CAUSE. Alcohol Use Disorder is relevant PMH but these symptoms are clearly Clonidine rebound given the timeline."
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
                right_monitor: { label: "Monitor", options: ["Urine output and color", "Serum Creatinine", "aPTT", "TSH levels"], answer: ["Urine output and color", "Serum Creatinine"] },
                rationale: "Rhabdomyolysis requires immediate discontinuation of all offending agents and aggressive IV fluids to flush myoglobin and protect the kidneys. Monitoring urine output/color and creatinine assesses renal function."
            },
            {
                id: 4,
                type: "cloze_drag_drop",
                prompt: "The nurse is documenting the pathophysiology of this drug-drug interaction. Complete the documentation by dragging the correct terms into the blanks.",
                cloze_text: "Rhabdomyolysis occurred due to the dangerous combination of [[BLANK1]] and [[BLANK2]]. Gemfibrozil inhibits the [[BLANK3]] of statins, causing toxic accumulation. Muscle breakdown releases [[BLANK4]] into the bloodstream, which is toxic to the [[BLANK5]]. The pathognomonic sign is [[BLANK6]] urine. Treatment requires aggressive IV fluids and discontinuing both medications. Fenofibrate is generally safer than Gemfibrozil when combined with statins.",
                drag_options: ["Atorvastatin", "Lisinopril", "Gemfibrozil", "Metformin", "glucuronidation", "absorption", "myoglobin", "hemoglobin", "kidneys", "liver", "cola-colored", "clear"],
                answer: {
                    "BLANK1": "Atorvastatin",
                    "BLANK2": "Gemfibrozil",
                    "BLANK3": "glucuronidation",
                    "BLANK4": "myoglobin",
                    "BLANK5": "kidneys",
                    "BLANK6": "cola-colored"
                },
                rationale: "The Atorvastatin + Gemfibrozil combination is particularly dangerous. Gemfibrozil inhibits statin glucuronidation (liver metabolism), causing drug accumulation. Muscle destruction releases myoglobin, which is nephrotoxic, causing cola-colored urine and acute kidney injury."
            },
            {
                id: 5,
                type: "highlight",
                prompt: "Review the patient's clinical findings below. Highlight/select ALL findings that are diagnostic of Rhabdomyolysis.",
                highlight_text: "Patient was recently started on Gemfibrozil (Lopid) to add to her Atorvastatin (Lipitor) therapy. Chief Complaint: Severe muscle pain in thighs for 3 days. Dark, reddish-brown (cola-colored) urine. Labs: Creatine Kinase (CK) 15,000 U/L (CRITICAL HIGH, ref: 26-192). Creatinine 2.1 mg/dL (HIGH). Urine Myoglobin: POSITIVE.",
                highlight_options: ["started on Gemfibrozil to add to Atorvastatin", "Severe muscle pain in thighs", "Dark, reddish-brown (cola-colored) urine", "CK 15,000 U/L", "Creatinine 2.1 mg/dL", "Urine Myoglobin: POSITIVE"],
                answer: ["Severe muscle pain in thighs", "Dark, reddish-brown (cola-colored) urine", "CK 15,000 U/L", "Urine Myoglobin: POSITIVE"],
                rationale: "Diagnostic findings of Rhabdomyolysis: (1) Severe muscle pain - myocyte destruction; (2) Cola-colored urine - myoglobin in urine; (3) Massively elevated CK (15,000 vs normal <200) - the definitive marker; (4) Positive urine myoglobin - confirms muscle breakdown. The drug combination is the CAUSE. Elevated creatinine indicates secondary AKI (a complication), not a diagnostic criterion for rhabdomyolysis itself."
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
                right_monitor: { label: "Monitor", options: ["BUN / Creatinine", "Serum Osmolality", "SpO2", "Neuro checks"], answer: ["BUN / Creatinine", "Serum Osmolality"] },
                rationale: "Oliguria (15 mL/hr) during Mannitol therapy indicates renal failure — the drug is accumulating rather than being excreted. The medication must be held immediately and the provider notified. BUN/Creatinine and serum osmolality guide further management."
            },
            {
                id: 4,
                type: "cloze_drag_drop",
                prompt: "The nurse is documenting the Mannitol administration protocol and safety checks. Complete the documentation by dragging the correct terms into the blanks.",
                cloze_text: "Mannitol 25% is an [[BLANK1]] diuretic used to reduce [[BLANK2]]. Before administration, the nurse must inspect for [[BLANK3]] and use an [[BLANK4]] filter. The drug works by creating an osmotic gradient that pulls water from [[BLANK5]] tissue into the bloodstream. A critical contraindication is [[BLANK6]] — if the kidneys cannot excrete the fluid, pulmonary edema results. Expected urine output is 30-50 mL/hr or greater.",
                drag_options: ["osmotic", "loop", "ICP", "blood pressure", "crystals", "air bubbles", "in-line", "charcoal", "brain", "cardiac", "anuria", "hypertension"],
                answer: {
                    "BLANK1": "osmotic",
                    "BLANK2": "ICP",
                    "BLANK3": "crystals",
                    "BLANK4": "in-line",
                    "BLANK5": "brain",
                    "BLANK6": "anuria"
                },
                rationale: "Mannitol is an osmotic diuretic that reduces intracranial pressure (ICP) by pulling water from brain tissue. Crystallization is common and requires visual inspection and in-line filtration. Anuria is a critical contraindication because the drug cannot be excreted, causing dangerous fluid overload."
            },
            {
                id: 5,
                type: "highlight",
                prompt: "Review the patient assessment below. Highlight/select ALL findings that indicate the Mannitol is causing a COMPLICATION rather than the expected therapeutic response.",
                highlight_text: "Patient received Mannitol 25% for elevated ICP (28 mmHg). Current Assessment: ICP now 22 mmHg (improved). BP 160/90 mmHg (stable). Urine output: 15 mL/hr for past 2 hours (LOW). Lung sounds: New crackles at bases bilaterally. Serum Osmolality: 320 mOsm/kg (HIGH, ref: 275-295). BUN: 32 mg/dL (rising).",
                highlight_options: ["ICP now 22 mmHg", "BP 160/90 mmHg", "Urine output: 15 mL/hr", "New crackles at bases bilaterally", "Serum Osmolality: 320 mOsm/kg", "BUN: 32 mg/dL"],
                answer: ["Urine output: 15 mL/hr", "New crackles at bases bilaterally", "Serum Osmolality: 320 mOsm/kg", "BUN: 32 mg/dL"],
                rationale: "Complication indicators: (1) Low urine output (15 mL/hr) - indicates renal failure, drug not being excreted; (2) New crackles - pulmonary edema from fluid overload; (3) Elevated osmolality (320) - drug accumulation, hyperosmolar state; (4) Rising BUN - renal impairment. The ICP improvement (22 mmHg) and stable BP are EXPECTED therapeutic responses, not complications."
            }
        ]
    }
];




/* SOURCE: data_loader.js */
// Master Data Aggregator - Globally Exposed
window.drugDB = [];

function mergeData(groupData) {
    if (Array.isArray(groupData)) {
        groupData.forEach(d => {
            if (!window.drugDB.some(existing => existing.g === d.g)) {
                window.drugDB.push(d);
            }
        });
    }
}

// Atomic Loads
if (typeof data_lipids_statins !== 'undefined') mergeData(data_lipids_statins);
if (typeof data_lipids_resins !== 'undefined') mergeData(data_lipids_resins);
if (typeof data_lipids_fibrates_misc !== 'undefined') mergeData(data_lipids_fibrates_misc);

// RAAS Atomic Loads
if (typeof data_raas_ace !== 'undefined') mergeData(data_raas_ace);
if (typeof data_raas_arb_dri !== 'undefined') mergeData(data_raas_arb_dri);

// CCB & Beta Atomic Loads
if (typeof data_ccb !== 'undefined') mergeData(data_ccb);
if (typeof data_beta_blockers !== 'undefined') mergeData(data_beta_blockers);

// Adrenergics & Vasodilators Atomic Loads
if (typeof data_adrenergics !== 'undefined') mergeData(data_adrenergics);
if (typeof data_vasodilators !== 'undefined') mergeData(data_vasodilators);

// Diuretics Atomic Loads
if (typeof data_diuretics_loop_thiazide !== 'undefined') mergeData(data_diuretics_loop_thiazide);
if (typeof data_diuretics_ksparing_misc !== 'undefined') mergeData(data_diuretics_ksparing_misc);

// CV Specific Atomic Loads
if (typeof data_angina_hf !== 'undefined') mergeData(data_angina_hf);
if (typeof data_antiplatelets !== 'undefined') mergeData(data_antiplatelets);
if (typeof data_anticoagulants !== 'undefined') mergeData(data_anticoagulants);
if (typeof data_antiarrhythmics !== 'undefined') mergeData(data_antiarrhythmics);

// Diabetes Atomic Loads
if (typeof data_diabetes_sensitizers !== 'undefined') mergeData(data_diabetes_sensitizers);
if (typeof data_diabetes_secretagogues !== 'undefined') mergeData(data_diabetes_secretagogues);
if (typeof data_diabetes_alpha_sglt2 !== 'undefined') mergeData(data_diabetes_alpha_sglt2);
if (typeof data_diabetes_gliptin_glp1a !== 'undefined') mergeData(data_diabetes_gliptin_glp1a);
if (typeof data_diabetes_insulins_part1 !== 'undefined') mergeData(data_diabetes_insulins_part1);
if (typeof data_diabetes_insulins_part2 !== 'undefined') mergeData(data_diabetes_insulins_part2);

// Pain Management Atomic Loads
if (typeof data_pain_adjuvants !== 'undefined') mergeData(data_pain_adjuvants);
if (typeof data_pain_opioid_agonists !== 'undefined') mergeData(data_pain_opioid_agonists);
if (typeof data_pain_partial_antagonists !== 'undefined') mergeData(data_pain_partial_antagonists);

// Antimicrobials Atomic Loads
if (typeof data_antimicrobials_part1 !== 'undefined') mergeData(data_antimicrobials_part1);
if (typeof data_antimicrobials_part2 !== 'undefined') mergeData(data_antimicrobials_part2);
if (typeof data_antimicrobials_part3 !== 'undefined') mergeData(data_antimicrobials_part3);

// Respiratory Atomic Loads
if (typeof data_respiratory_part1 !== 'undefined') mergeData(data_respiratory_part1);
if (typeof data_respiratory_part2 !== 'undefined') mergeData(data_respiratory_part2);

// Corticosteroids & Immunity Atomic Loads
if (typeof data_corticosteroids_immunity !== 'undefined') mergeData(data_corticosteroids_immunity);

// CNS & Psych Atomic Loads
if (typeof data_cns_psych !== 'undefined') mergeData(data_cns_psych);

// GI Atomic Loads
if (typeof data_gi !== 'undefined') mergeData(data_gi);

// Thyroid Atomic Loads
if (typeof data_thyroid !== 'undefined') mergeData(data_thyroid);

// Neurology Atomic Loads
if (typeof data_parkinsons !== 'undefined') mergeData(data_parkinsons);
if (typeof data_alzheimers !== 'undefined') mergeData(data_alzheimers);

// Reproductive & OB Atomic Loads
if (typeof data_reproductive !== 'undefined') mergeData(data_reproductive);

// STI & Sexual Health Atomic Loads
if (typeof data_sti_drugs !== 'undefined') mergeData(data_sti_drugs);
if (typeof data_womens_health !== 'undefined') mergeData(data_womens_health);
if (typeof data_mens_health !== 'undefined') mergeData(data_mens_health);

// Urology Atomic Loads
if (typeof data_urology !== 'undefined') mergeData(data_urology);

// Ophthalmic Atomic Loads
if (typeof data_ophthalmic !== 'undefined') mergeData(data_ophthalmic);

// Osteoporosis/MSK Atomic Loads
if (typeof data_osteoporosis !== 'undefined') mergeData(data_osteoporosis);

// Dermatology Atomic Loads
if (typeof data_dermatology !== 'undefined') mergeData(data_dermatology);

// Hematology Atomic Loads
if (typeof data_hematology !== 'undefined') mergeData(data_hematology);

// Emergency Atomic Loads
if (typeof data_emergency !== 'undefined') mergeData(data_emergency);

// Electrolytes/IV Fluids Atomic Loads
if (typeof data_electrolytes !== 'undefined') mergeData(data_electrolytes);

console.log("Global Pharma Database Initialized:", window.drugDB.length, "drugs.");




/* SOURCE: mission_logic_fixed.js */
// MASTER HUB REFACTORED MISSIONS LOGIC
// currentMission, currentStepIndex, missionFeedbackMode, and allMissions are declared in mastery_logic.js
let missionsUnlocked = false;

function startMission() {
    allMissions = [
        ...(typeof mission_prototype !== 'undefined' ? [mission_prototype] : []),
        ...(typeof missions_cardio_1 !== 'undefined' ? missions_cardio_1 : []),
        ...(typeof missions_cardio_2 !== 'undefined' ? missions_cardio_2 : []),
        ...(typeof missions_dm_1 !== 'undefined' ? missions_dm_1 : []),
        ...(window.customMissions || []) // Include dynamically loaded missions
    ];
    showMissionSelectorNew();
}

function unlockAllMissions() {
    missionsUnlocked = true;
    showMissionSelectorNew();
}

function showMissionSelectorNew() {
    // Hide home screen content when showing mission selector
    const homeContent = document.querySelector('.container-fluid.px-4.mt-4');
    if (homeContent) {
        homeContent.style.display = 'none';
    }
    document.getElementById('missionSelectorModal')?.remove();

    // Group missions by main category (before the " / ")
    const missionGroups = {};
    allMissions.forEach(mission => {
        const fullCategory = mission.category || 'Other';
        const mainCategory = fullCategory.split(' / ')[0] || fullCategory;
        if (!missionGroups[mainCategory]) {
            missionGroups[mainCategory] = [];
        }
        missionGroups[mainCategory].push(mission);
    });

    // Create HTML for each category
    let categoryHtml = '';
    const colors = ['border-info', 'border-success', 'border-warning', 'border-danger', 'border-primary'];
    let colorIndex = 0;

    Object.keys(missionGroups).forEach(category => {
        const missions = missionGroups[category];
        const color = colors[colorIndex % colors.length];
        colorIndex++;

        categoryHtml += `
            <div class="col-md-6 mb-4">
                <h4 class="text-white border-start ${color} border-4 ps-3 mb-4">${category.toUpperCase()} (${missions.length})</h4>
                <div class="row g-3">
                    ${missions.map(mission => renderMissionButton(mission.numerical_id, category.toLowerCase().replace(/\s+/g, ''))).join('')}
                </div>
            </div>
        `;
    });

    const modalHtml = `
        <div id="missionSelectorModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: var(--primary); z-index: 2050; overflow-y: auto; padding: 40px;">
            <div class="container" style="max-width: 1100px;">
                <div class="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3 border-secondary">
                    <h2 class="text-accent fw-bold">
                        <i class="fas fa-map-marked-alt me-3"></i>
                        <span onclick="unlockAllMissions()" style="cursor: default;">C</span>LINICAL MISSION CONTROL
                    </h2>
                    <button class="btn btn-outline-danger" onclick="closeMissionSelector()">Return to Hub</button>
                </div>
                <div class="row">
                    ${categoryHtml}
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function renderMissionButton(id, category) {
    const mission = allMissions.find(m => m.numerical_id === id);
    const isAvailable = !!mission || missionsUnlocked;
    const color = category === 'cv' ? 'btn-outline-info' : 'btn-outline-success';
    const activeColor = category === 'cv' ? 'bg-info text-primary' : 'bg-success text-white';
    
    let title = 'LOCKED';
    if (mission) title = mission.title;
    else if (missionsUnlocked) title = 'DATA PENDING';

    return `
        <div class="col-3">
            <button class="btn ${isAvailable ? activeColor : color} w-100 p-1 fw-bold shadow-sm ${!isAvailable ? 'opacity-25' : ''}" 
                    style="height: 80px; display: flex; flex-direction: column; justify-content: center; align-items: center; border-width: 2px; overflow: hidden;" 
                    ${isAvailable ? `onclick="launchSpecificMission(${id})"` : 'disabled'}>
                <div class="fs-6" style="line-height: 1;">${id}</div>
                <div style="font-size: 0.5rem; line-height: 1; text-transform: uppercase; margin-top: 3px; white-space: normal; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; padding: 0 2px;">
                    ${title}
                </div>
            </button>
        </div>
    `;
}

function closeMissionSelector() {
    document.getElementById('missionSelectorModal')?.remove();
    // Show home screen content again
    const homeContent = document.querySelector('.container-fluid.px-4.mt-4');
    if (homeContent) {
        homeContent.style.display = 'block';
    }
    // Navigate back to home screen
    if (typeof showHomeScreen === 'function') {
        showHomeScreen();
    }
}

function launchSpecificMission(id) {
    const mission = allMissions.find(m => m.numerical_id === id);
    if (!mission) {
        alert("Mission data pending for slot: " + id);
        return;
    }
    currentMission = mission;
    currentStepIndex = 0;
    missionFeedbackMode = false;
    closeMissionSelector();
    showMissionUI();
}

function showMissionUI() {
    document.body.style.overflow = 'hidden';
    const html = `<div id="missionModal" class="mission-container"><div class="chart-pane"><div class="chart-header d-flex justify-content-between align-items-center"><div><h5 class="mb-0 fw-bold" style="color:white !important;">${currentMission.patient_profile.demographics.name}</h5><span class="small opacity-75" style="color:white !important;">MRN: ${currentMission.patient_profile.demographics.mrn} | AGE: ${currentMission.patient_profile.demographics.age}</span></div><button class="btn btn-outline-light btn-sm" onclick="closeMission()">Exit Mission</button></div><div class="chart-tabs" id="mission-tabs"></div><div id="mission-content" class="chart-content"></div></div><div class="work-pane"><div id="step-area"></div><div id="mission-feedback" class="mt-4"></div><div class="mt-5 border-top border-secondary pt-4 d-flex justify-content-between align-items-center"><button id="mission-prev-btn" class="btn btn-outline-secondary btn-lg px-4" onclick="prevMissionStep()">BACK</button><div id="step-counter" class="text-white-50 fw-bold">STEP 1 OF 3</div><button id="mission-action-btn" class="btn btn-warning btn-lg px-5 fw-bold shadow" onclick="handleMissionAction()">SUBMIT ANSWER</button></div></div></div>`;
    document.body.insertAdjacentHTML('beforeend', html);
    setTimeout(() => {
        renderMissionExhibits();
        renderMissionStep();
    }, 100);
}

function closeMission() { document.body.style.overflow = 'auto'; document.getElementById('missionModal')?.remove(); }

function renderMissionExhibits() {
    const tabs = document.getElementById('mission-tabs');
    if (!tabs) return;
    let html = `<div class="chart-tab active" onclick="showMissionExhibit('history', this)">History</div>`;
    currentMission.exhibits.forEach((ex, idx) => {
        html += `<div class="chart-tab" onclick="showMissionExhibit(${idx}, this)">${ex.title}</div>`;
    });
    tabs.innerHTML = html;
    showMissionExhibit('history');
}

function showMissionExhibit(type, el) {
    if (el) { document.querySelectorAll('#missionModal .chart-tab').forEach(t => t.classList.remove('active')); el.classList.add('active'); }
    const content = document.getElementById('mission-content');
    if (!content) return;
    if (type === 'history') {
        const p = currentMission.patient_profile;
        content.innerHTML = `<h5 class="fw-bold text-primary mb-3">Admission H&P</h5><div class="mb-3"><h6 class="fw-bold text-secondary small text-uppercase">Chief Complaint</h6><p>${p.chief_complaint}</p></div><div class="mb-3"><h6 class="fw-bold text-secondary small text-uppercase">HPI</h6><p>${p.hpi}</p></div><div class="mb-3"><h6 class="fw-bold text-secondary small text-uppercase">PMH</h6><p>${p.pmh}</p></div><div class="mb-3"><h6 class="fw-bold text-secondary small text-uppercase">Review of Systems</h6><ul class="small"><li><strong>Cardio:</strong> ${p.ros.cardio}</li><li><strong>Neuro:</strong> ${p.ros.neuro}</li><li><strong>GI:</strong> ${p.ros.gi}</li><li><strong>GU:</strong> ${p.ros.gu}</li></ul></div>`;
    } else {
        const ex = currentMission.exhibits[type];
        if (ex.type === 'table') {
            content.innerHTML = `<h5 class="fw-bold text-primary mb-3">${ex.title}</h5><table class="table table-bordered table-sm small mt-3"><thead class="table-light"><tr>${Object.keys(ex.data[0]).map(k => `<th>${k.toUpperCase()}</th>`).join('')}</tr></thead><tbody>${ex.data.map(row => `<tr>${Object.values(row).map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
        } else { content.innerHTML = `<h5 class="fw-bold text-primary mb-3">${ex.title}</h5><div class="fs-6 mt-3 text-dark">${ex.content}</div>`; }
    }
}

function prevMissionStep() { if (currentStepIndex > 0) { currentStepIndex--; renderMissionStep(); } }

function renderMissionStep() {
    missionFeedbackMode = false;
    const step = currentMission.steps[currentStepIndex];
    const area = document.getElementById('step-area');
    if (!area) return;
    document.getElementById('mission-feedback').innerHTML = '';
    document.getElementById('step-counter').innerText = `STEP ${currentStepIndex + 1} OF ${currentMission.steps.length}`;
    document.getElementById('mission-prev-btn').disabled = currentStepIndex === 0;
    let optsHtml = '';
    if (step.type === 'extended_sata') {
        optsHtml = `<div class="list-group">${step.options.map((o, i) => `<label class="list-group-item list-group-item-action p-3 mb-2"><input class="form-check-input me-3" type="checkbox" name="m-opt" value="${i}"> ${o}</label>`).join('')}</div>`;
    } else if (step.type === 'matrix') {
        optsHtml = `<div class="table-responsive"><table class="matrix-table"><thead><tr><th>Finding</th>${step.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>${step.rows.map((r, rowIndex) => `<tr><td class="text-white">${typeof r === 'string' ? r : (r.text || 'Unknown')}</td>${step.columns.map(c => `<td class="radio-cell text-center"><input type="radio" name="matrix-row-${rowIndex}" value="${c}" class="form-check-input"></td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    } else if (step.type === 'bowtie') {
        optsHtml = `<div class="bowtie-container"><div class="bowtie-wing"><div class="bowtie-label">Actions (2)</div>${step.left_actions.options.map(o => `<div class="form-check small"><input class="form-check-input" type="checkbox" name="bw-l" value="${o}">${o}</div>`).join('')}</div><div class="bowtie-center"><div class="bowtie-label text-warning">Condition</div><select id="bw-c" class="form-select form-select-sm"><option value="">Select condition...</option>${step.center_condition.options.map(o => `<option value="${o}">${o}</option>`).join('')}</select></div><div class="bowtie-wing"><div class="bowtie-label">Monitor (2)</div>${step.right_monitor.options.map(o => `<div class="form-check small"><input class="form-check-input" type="checkbox" name="bw-r" value="${o}">${o}</div>`).join('')}</div></div>`;
    } else if (step.type === 'drag_drop_cloze') {
        // Drag-and-drop cloze question
        const text = step.text || '';
        const blanks = step.blanks || [];
        const options = step.options || [];

        // Replace [BLANK_X] placeholders with drop zones
        let processedText = text;
        blanks.forEach((blank, idx) => {
            processedText = processedText.replace(`[BLANK_${idx + 1}]`, `<span class="drop-zone" data-blank-id="${idx}" data-correct="${blank.correct}">_____</span>`);
        });

        const optionsHtml = options.map(opt => `<span class="draggable-option" draggable="true" data-option="${opt}">${opt}</span>`).join('');

        optsHtml = `
            <div class="drag-drop-cloze">
                <div class="cloze-text mb-4">${processedText}</div>
                <div class="options-pool mb-3">
                    <div class="options-label">Available options:</div>
                    <div class="options-container">${optionsHtml}</div>
                </div>
                <div class="cloze-instructions">Drag options into the blanks</div>
            </div>
        `;
    } else if (step.type === 'highlight_select') {
        // Highlighted text selection question
        const text = step.text || '';
        const highlights = step.highlights || [];
        const selectionMode = step.selection_mode || 'multiple'; // 'single' or 'multiple'

        // Create text with clickable highlights
        let processedText = text;
        highlights.forEach((highlight, idx) => {
            const highlightClass = highlight.correct ? 'highlight-correct' : 'highlight-distractor';
            const clickHandler = selectionMode === 'single' ?
                `onclick="selectHighlight(this, ${idx}, 'single')"` :
                `onclick="toggleHighlight(this, ${idx})"`;
            processedText = processedText.replace(
                highlight.text,
                `<span class="text-highlight ${highlightClass}" ${clickHandler} data-highlight-id="${idx}" data-correct="${highlight.correct}">${highlight.text}</span>`
            );
        });

        const inputType = selectionMode === 'single' ? 'radio' : 'checkbox';
        const instruction = step.instruction || (selectionMode === 'single' ?
            'Click on the most significant finding requiring nursing intervention:' :
            'Click on all sections requiring nursing intervention:');

        optsHtml = `
            <div class="highlight-select">
                <div class="highlight-instruction mb-3">${instruction}</div>
                <div class="highlight-text">${processedText}</div>
                <input type="hidden" id="highlight-selection" value="">
            </div>
        `;
    } else if (step.options && step.options.length > 0) {
        // Default case: regular multiple choice questions (including exam questions)
        const isMultipleChoice = step.answer && step.answer.length > 1;
        const inputType = isMultipleChoice ? 'checkbox' : 'radio';
        const inputName = 'm-opt';

        optsHtml = `<div class="list-group">${step.options.map((o, i) => `<label class="list-group-item list-group-item-action p-3 mb-2"><input class="form-check-input me-3" type="${inputType}" name="${inputName}" value="${i}"> ${o}</label>`).join('')}</div>`;
    }
    area.innerHTML = `<div class="mission-title-display mb-3"><small class="text-accent">MISSION ${currentMission.numerical_id}: ${currentMission.title}</small></div><div class="step-badge">STEP ${currentStepIndex + 1}: ${step.type ? step.type.toUpperCase() : 'MULTIPLE CHOICE'}</div><h3 class="text-white mb-4 fw-bold">${step.prompt}</h3><div>${optsHtml}</div>`;
    const btn = document.getElementById('mission-action-btn');
    btn.innerText = "SUBMIT ANSWER";
    btn.className = "btn btn-warning btn-lg px-5 fw-bold shadow";

    // Add event listeners for drag-and-drop cloze questions
    if (step.type === 'drag_drop_cloze') {
        // Add drag event listeners to draggable options
        document.querySelectorAll('.draggable-option').forEach(option => {
            option.ondragstart = handleDragStart;
            option.ondragend = handleDragEnd;
        });

        // Add drop event listeners to drop zones
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.ondragover = handleDragOver;
            zone.ondrop = handleDrop;
        });
    }
}

function handleMissionAction() { if (!missionFeedbackMode) evaluateMissionStep(); else nextMissionStep(); }

// Drag and drop functionality for cloze questions
let draggedElement = null;

function handleDragStart(e) {
    draggedElement = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedElement = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop(e) {
    e.preventDefault();
    const dropZone = e.target.closest('.drop-zone');
    if (!dropZone || !draggedElement) return;

    // Remove existing content from drop zone
    dropZone.innerHTML = '';

    // Clone the dragged element and place it in the drop zone
    const clone = draggedElement.cloneNode(true);
    clone.draggable = false;
    clone.classList.remove('dragging');
    clone.classList.add('dropped-option');
    clone.onclick = () => removeFromDropZone(clone, dropZone);

    dropZone.appendChild(clone);
    dropZone.classList.add('filled');

    // Remove from options pool
    draggedElement.remove();

    return false;
}

function removeFromDropZone(element, dropZone) {
    // Return option to pool
    const optionText = element.textContent;
    const optionsContainer = document.querySelector('.options-container');
    const newOption = document.createElement('span');
    newOption.className = 'draggable-option';
    newOption.draggable = true;
    newOption.textContent = optionText;
    newOption.ondragstart = handleDragStart;
    newOption.ondragend = handleDragEnd;

    optionsContainer.appendChild(newOption);

    // Clear drop zone
    dropZone.innerHTML = '_____';
    dropZone.classList.remove('filled');
}

// Highlight selection functions
function toggleHighlight(element, highlightId) {
    element.classList.toggle('selected');
    updateHighlightSelection();
}

function selectHighlight(element, highlightId, mode) {
    if (mode === 'single') {
        // Remove selection from all highlights
        document.querySelectorAll('.text-highlight').forEach(el => el.classList.remove('selected'));
    }
    element.classList.add('selected');
    updateHighlightSelection();
}

function updateHighlightSelection() {
    const selected = Array.from(document.querySelectorAll('.text-highlight.selected'))
        .map(el => parseInt(el.dataset.highlightId));
    document.getElementById('highlight-selection').value = JSON.stringify(selected);
}

function evaluateMissionStep() {
    const step = currentMission.steps[currentStepIndex];
    let isCorrect = false;
    if (step.type === 'extended_sata') {
        const sel = Array.from(document.querySelectorAll('input[name="m-opt"]:checked')).map(i => parseInt(i.value));
        isCorrect = sel.length === step.answer.length && sel.every(v => step.answer.includes(v));
    } else if (step.type === 'standard' || (!step.type && step.options)) {
        // Regular multiple choice or exam questions
        const sel = Array.from(document.querySelectorAll('input[name="m-opt"]:checked')).map(i => parseInt(i.value));
        isCorrect = sel.length === step.answer.length && sel.every(v => step.answer.includes(v));
    } else if (step.type === 'matrix') {
        isCorrect = step.rows.every((r, rowIndex) => {
            const rowKey = typeof r === 'string' ? r : (r.text || '');
            return document.querySelector(`input[name="matrix-row-${rowIndex}"]:checked`)?.value === step.answer[rowKey];
        });
    } else if (step.type === 'drag_drop_cloze') {
        // Check if all blanks are filled correctly
        const blanks = step.blanks || [];
        isCorrect = blanks.every((blank, idx) => {
            const dropZone = document.querySelector(`.drop-zone[data-blank-id="${idx}"]`);
            if (!dropZone || !dropZone.classList.contains('filled')) return false;
            const droppedText = dropZone.textContent.trim();
            return droppedText === blank.correct;
        });
    } else if (step.type === 'highlight_select') {
        // Check selected highlights
        const selected = JSON.parse(document.getElementById('highlight-selection').value || '[]');
        const correctHighlights = step.highlights.filter(h => h.correct).map(h => step.highlights.indexOf(h));
        isCorrect = selected.length === correctHighlights.length &&
                   selected.every(id => correctHighlights.includes(id));
    } else if (step.type === 'bowtie') {
        const diag = document.getElementById('bw-c').value;
        const l = Array.from(document.querySelectorAll('input[name="bw-l"]:checked')).map(i => i.value);
        const r = Array.from(document.querySelectorAll('input[name="bw-r"]:checked')).map(i => i.value);
        isCorrect = diag === step.center_condition.answer && l.length === 2 && l.every(v => step.left_actions.answer.includes(v)) && r.length === 2 && r.every(v => step.right_monitor.answer.includes(v));
    }
    document.getElementById('mission-feedback').innerHTML = `<div class="p-4 rounded-4 border-2 ${isCorrect ? 'border-success' : 'border-danger'}" style="background: ${isCorrect ? 'rgba(22, 101, 52, 0.3)' : 'rgba(153, 27, 27, 0.3)'}; backdrop-filter: blur(10px);"><h4 class="fw-bold ${isCorrect ? 'text-success' : 'text-danger'}"><i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'} me-2"></i>${isCorrect ? 'CORRECT' : 'INCORRECT'}</h4><p class="text-white mb-0 mt-2 fs-5">${step.rationale || "Review clues and pharmacology interaction."}</p></div>`;
    missionFeedbackMode = true;
    const btn = document.getElementById('mission-action-btn');
    btn.innerText = currentStepIndex === currentMission.steps.length - 1 ? "FINISH MISSION" : "NEXT STEP";
    btn.className = "btn btn-info btn-lg px-5 fw-bold shadow pulse-button text-primary";
}

function nextMissionStep() { if (currentStepIndex < currentMission.steps.length - 1) { currentStepIndex++; renderMissionStep(); } else { closeMission(); } }




function loadNewExam() {
  // In a real dynamic loader, this would fetch from content/exams/peds-exam-3-adolescent-disorders.json
  // For now, it confirms the source is ready
  alert("PEDS Exam 3 loaded from content/exams/peds-exam-3-adolescent-disorders.json\n\n(This is the first step of dynamic loading. The full exam runner will be implemented next.)");
  // TODO: Fetch JSON and render exam interface
}

// === ASYNC DATA LOADING (v5.0 Refactor Phase 1) ===
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const res = await fetch('content/manifest.json');
        const manifest = await res.json();
        window.dynamicManifest = manifest;
        window.availableExams = window.availableExams || [];
        
        if (manifest.exams) {
            manifest.exams.forEach(exam => {
                if (!window.availableExams.some(e => e.id === exam.id)) {
                    window.availableExams.push({
                        id: exam.id,
                        name: exam.name || exam.id,
                        category: exam.category || 'Other',
                        file: exam.file || `${exam.id}.json`,
                        isDynamic: true,
                        data: null
                    });
                }
            });
        }
        console.log("Dynamically loaded manifest. Total exams: " + window.availableExams.length);
    } catch (e) {
        console.error("Failed to load manifest.json", e);
    }
});

// Override selectExam to handle async fetching
window.selectExam = async function(examId) {
    const exam = window.availableExams.find(e => e.id === examId);
    if (!exam) {
        alert('Exam not found!');
        return;
    }
    
    if (exam.isDynamic && !exam.data) {
        try {
            document.body.style.cursor = 'wait';
            // We assume the file is in content/exams/
            const res = await fetch(`content/exams/${exam.file}`);
            if (!res.ok) throw new Error("HTTP error " + res.status);
            
            // If the JSON is an array, we use it. If it's an object with a questions array, use that.
            const parsed = await res.json();
            exam.data = Array.isArray(parsed) ? parsed : (parsed.questions || parsed);
            document.body.style.cursor = 'default';
        } catch (e) {
            document.body.style.cursor = 'default';
            alert(`Failed to load exam data for ${exam.name}. Ensure the JSON file exists.`);
            console.error(e);
            return;
        }
    }
    
    if (typeof closeExamSelection === 'function') {
        closeExamSelection();
        window.examData = exam.data;
        window.currentQuestionIndex = 0;
        window.userAnswers = [];
        window.feedbackMode = false;
        window.currentExamName = exam.name;
        showExamModal();
        renderQuestion();
    }
};
