// Clinical Mission Data - Mission 1
window.mission_prototype = {
    id: "M-001",
    numerical_id: 1,
    title: "The Golden Glow: A Digitalis Dilemma",
    category: "Cardiovascular / Electrolytes",
    difficulty: "Advanced",
    patient_profile: {
        demographics: {
            name: "Elias Thorne",
            age: 72,
            gender: "Male",
            mrn: "8842-PT",
            dob: "05/12/1954",
            weight: "84 kg (185 lbs)",
            height: "178 cm (5'10\")",
            allergies: "Sulfa (hives), Shellfish (nausea)"
        },
        chief_complaint: "Intense nausea and 'strange yellow vision' for the last 48 hours.",
        hpi: "Patient reports a 2-day history of worsening nausea, loss of appetite, and significant malaise. He describes his vision as having 'yellow rings or halos' around lights. He was recently seen in the clinic 5 days ago for increased pedal edema and was started on a higher dose of Furosemide.",
        pmh: "Chronic Heart Failure with Reduced Ejection Fraction (HFrEF - EF 35%), Permanent Atrial Fibrillation, Hypertension, and Stage 3 Chronic Kidney Disease.",
        sh: "Retired school teacher. Lives alone in a two-story home. Non-smoker. Occasional alcohol (1 glass of wine/week). Independent with ADLs.",
        ros: {
            neuro: "Reports headache and 'fuzzy' thinking today.",
            cardio: "Denies chest pain. Reports 'pounding' in chest (palpitations).",
            gi: "Nausea x 2 days. No vomiting. Loss of appetite (anorexia).",
            gu: "Reports increased urination since starting new pill (Furosemide)."
        }
    },
    exhibits: [
        {
            title: "Vital Signs (0900)",
            type: "table",
            data: [
                { param: "Heart Rate", val: "48 bpm", note: "Irregular (Atrial Fibrillation)" },
                { param: "Blood Pressure", val: "102/58 mmHg", note: "Manual cuff" },
                { param: "Respiratory Rate", val: "18 bpm", note: "Regular, unlabored" },
                { param: "SpO2", val: "94%", note: "Room Air" },
                { param: "Temperature", val: "98.2° F", note: "Oral" }
            ]
        },
        {
            title: "Physical Exam (0915)",
            type: "text",
            content: `
                <strong>General:</strong> Elderly male, appears pale and lethargic. Oriented to person, place, and time but slow to respond.<br>
                <strong>Cardiovascular:</strong> Bradycardic, irregular rhythm. S1/S2 audible. No murmurs. 1+ pitting edema to bilateral ankles (improved from 3+).<br>
                <strong>Respiratory:</strong> Lungs clear to auscultation bilaterally. No crackles or wheezes.<br>
                <strong>Gastrointestinal:</strong> Abdomen soft, non-tender. Hyperactive bowel sounds. Reports feeling 'sick to stomach'.<br>
                <strong>Integumentary:</strong> Skin cool and dry. No rashes noted.
            `
        },
        {
            title: "Laboratory Results (1000)",
            type: "table",
            data: [
                { lab: "Sodium", val: "136 mEq/L", ref: "135-145" },
                { lab: "Potassium", val: "3.1 mEq/L", status: "CRITICAL LOW", ref: "3.5-5.0" },
                { lab: "Magnesium", val: "1.4 mEq/L", status: "LOW", ref: "1.7-2.2" },
                { lab: "Creatinine", val: "1.6 mg/dL", status: "HIGH", ref: "0.7-1.3" },
                { lab: "BUN", val: "28 mg/dL", status: "HIGH", ref: "7-20" },
                { lab: "Digoxin Level", val: "2.8 ng/mL", status: "CRITICAL HIGH", ref: "0.8-2.0" }
            ]
        },
        {
            title: "Current MAR",
            type: "table",
            data: [
                { drug: "Digoxin", dose: "0.25 mg", route: "PO", freq: "Daily" },
                { drug: "Furosemide", dose: "40 mg", route: "PO", freq: "BID" },
                { drug: "Lisinopril", dose: "20 mg", route: "PO", freq: "Daily" },
                { drug: "Warfarin", dose: "3 mg", route: "PO", freq: "Daily (Evening)" }
            ]
        }
    ],
    steps: [
        {
            id: 1,
            type: "extended_sata",
            prompt: "The nurse analyzes the assessment findings and laboratory data. Which findings require immediate nursing intervention? Select all that apply.",
            options: [
                "Heart rate of 48 bpm",
                "Serum Potassium 3.1 mEq/L",
                "Visual report of 'yellow halos'",
                "Serum Sodium 136 mEq/L",
                "Digoxin level 2.8 ng/mL",
                "1+ Pitting edema to ankles",
                "Anorexia and nausea"
            ],
            answer: ["Heart rate of 48 bpm", "Serum Potassium 3.1 mEq/L", "Visual report of 'yellow halos'", "Digoxin level 2.8 ng/mL", "Anorexia and nausea"],
            rationale: "The patient is presenting with classic signs of Digoxin toxicity (bradycardia, yellow halos, nausea/anorexia) which is being exacerbated by critical hypokalemia (3.1) likely caused by the increased Furosemide dose. The sodium and 1+ edema are non-emergent findings."
        },
        {
            id: 2,
            type: "matrix",
            prompt: "For each assessment finding, indicate whether the finding is consistent with Digoxin toxicity, Furosemide adverse effects, or both.",
            rows: [
                "Hypokalemia (Low Potassium)",
                "Visual halos (Yellow/Green)",
                "Profound Bradycardia",
                "Dehydration/Hypotension",
                "Loss of Appetite (Anorexia)"
            ],
            columns: ["Digoxin Toxicity", "Furosemide Effect", "Both"],
            answer: {
                "Hypokalemia (Low Potassium)": "Furosemide Effect",
                "Visual halos (Yellow/Green)": "Digoxin Toxicity",
                "Profound Bradycardia": "Digoxin Toxicity",
                "Dehydration/Hypotension": "Furosemide Effect",
                "Loss of Appetite (Anorexia)": "Digoxin Toxicity"
            },
            rationale: "The patient is experiencing a complex pharmacological interaction between a cardiac glycoside and a loop diuretic. Hypokalemia is a direct adverse effect of Furosemide, which inhibits sodium-potassium-chloride cotransport in the loop of Henle, leading to excessive potassium excretion. Visual disturbances (yellow/green halos), profound bradycardia, and anorexia (loss of appetite) are classic and specific manifestations of Digoxin toxicity. Dehydration and hypotension are common consequences of aggressive fluid mobilization via loop diuretics. It is critical to understand that hypokalemia significantly potentiates Digoxin toxicity because low extracellular potassium levels allow more digoxin to bind to the Na+/K+ ATPase pump, drastically increasing its effects and risk of arrhythmia."
        },
        {
            id: 3,
            type: "bowtie",
            prompt: "The patient is diagnosed with severe Digitalis Toxicity. Complete the bowtie diagram by choosing the most appropriate potential condition, two nursing actions, and two parameters to monitor.",
            center_condition: {
                label: "Potential Condition",
                options: ["Digoxin Toxicity", "Furosemide Overdose", "Acute MI", "Hypovolemic Shock"],
                answer: "Digoxin Toxicity"
            },
            left_actions: {
                label: "Actions to Take (Choose 2)",
                options: ["Hold current dose of Digoxin", "Administer IV Potassium bolus", "Administer Digoxin Immune Fab (Digibind)", "Encourage fluid intake", "Administer dose of Lisinopril"],
                answer: ["Hold current dose of Digoxin", "Administer Digoxin Immune Fab (Digibind)"]
            },
            right_monitor: {
                label: "Parameters to Monitor (Choose 2)",
                options: ["Continuous EKG monitoring", "Daily weights", "Serum Potassium levels", "Urine specific gravity", "Incentive spirometry"],
                answer: ["Continuous EKG monitoring", "Serum Potassium levels"]
            },
            rationale: "The definitive diagnosis is Digoxin Toxicity, confirmed by the toxic serum level of 2.8 ng/mL and the patient's neurological and cardiac symptoms. Primary nursing interventions must focus on stabilization and reversal: holding the medication prevents further toxic accumulation, while Digoxin Immune Fab (Digibind) acts as the specific antidote by binding to and inactivating the drug molecules. Monitoring must prioritize cardiac and metabolic stability; continuous EKG is mandatory to identify lethal dysrhythmias (like PVCs or AV block) that occur in digitalis toxicity. Tracking serum potassium is equally vital, as hypokalemia exacerbates toxicity, and rapid changes in potassium can occur during the reversal process."
        }
    ]
};
