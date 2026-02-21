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
                right_monitor: { label: "Monitor", options: ["Orthostatic BP levels", "Neuro checks", "Urine output", "Blood glucose"], answer: ["Orthostatic BP levels", "Neuro checks"] }
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
                right_monitor: { label: "Monitor", options: ["Persistence of symptoms", "SpO2 levels", "BUN", "Platelets"], answer: ["Persistence of symptoms", "SpO2 levels"] }
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
                right_monitor: { label: "Monitor", options: ["Serial Platelet counts", "Hgb / Hct", "aPTT", "INR"], answer: ["Serial Platelet counts", "Hgb / Hct"] }
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
                right_monitor: { label: "Monitor", options: ["Continuous EKG", "BP / Pulse", "Liver Enzymes", "Urine Color"], answer: ["Continuous EKG", "BP / Pulse"] }
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
                right_monitor: { label: "Monitor", options: ["Anginal frequency", "BP", "Liver Enzymes", "Hgb"], answer: ["Anginal frequency", "BP"] }
            }
        ]
    }
];
