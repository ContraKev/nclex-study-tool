// Expanded Missions - Maintaining the Golden Glow Standard
window.missions_cardio_2 = [
    {
        id: "M-006",
        numerical_id: 6,
        title: "Drowning from Within: Acute Pulmonary Edema",
        category: "Cardiovascular / Diuretics",
        difficulty: "Intermediate",
        patient_profile: {
            demographics: {
                name: "Arthur Penders",
                age: 81,
                gender: "Male",
                mrn: "2201-AP",
                dob: "08/12/1944",
                weight: "88 kg (194 lbs)",
                height: "172 cm (5'8\")",
                allergies: "Sulfonamides (Anaphylaxis), Penicillin (Rash)"
            },
            chief_complaint: "Extreme shortness of breath and 'pink frothy' cough.",
            hpi: "Mr. Penders arrived at the Emergency Department sitting bolt upright, gasping for air. His spouse reports he has been unable to sleep lying flat for three days (orthopnea) and has gained 8 lbs since Monday. He is visibly distressed and states, 'I feel like I'm drowning.' He admits to eating a high-sodium ham dinner two nights ago and missing his 'water pills' yesterday because he had to travel for a funeral.",
            pmh: "Chronic Heart Failure with Reduced Ejection Fraction (HFrEF - EF 30%), Stage II Hypertension, Chronic Obstructive Pulmonary Disease (COPD), and Stage 3 Chronic Kidney Disease.",
            sh: "Retired gardener. Lives with his wife. Previous heavy smoker (50 pack-year history), quit 10 years ago. Habitually non-compliant with salt-restricted diet.",
            ros: {
                neuro: "Highly anxious and restless. Oriented but unable to speak in full sentences due to dyspnea.",
                cardio: "Palpitations. S3 gallop audible. 3+ pitting edema to bilateral lower extremities and presacral area. JVD noted at 90 degrees.",
                lung: "Coarse crackles (rales) heard throughout all lung fields, including the apices. Productive cough with thin, pink, frothy sputum.",
                gi: "Reports nausea and abdominal bloating (ascites noted)."
            }
        },
        exhibits: [
            {
                title: "Emergency Vital Signs (Admission)",
                type: "table",
                data: [
                    { param: "Resp Rate", val: "34 bpm", note: "Labored, using accessory muscles" },
                    { param: "SpO2", val: "84%", note: "On Room Air (Critical)" },
                    { param: "Blood Pressure", val: "182/96 mmHg", note: "Hypertensive Crisis" },
                    { param: "Heart Rate", val: "118 bpm", note: "Sinus Tachycardia" }
                ]
            },
            {
                title: "Stat Provider Orders",
                type: "text",
                content: `
                    1. Oxygen via Non-rebreather mask at 12-15L/min to maintain SpO2 > 92%.<br>
                    2. Ethacrynic acid (Edecrin) 50 mg IV Push stat over 2 minutes.<br>
                    3. Insert indwelling urinary catheter for precise hourly output monitoring.<br>
                    4. Draw stat BNP, Troponin, and Electrolyte panel.
                `
            },
            {
                title: "Stat Laboratory Panel",
                type: "table",
                data: [
                    { lab: "BNP", val: "1,850 pg/mL", status: "CRITICAL HIGH", ref: "< 100" },
                    { lab: "Potassium", val: "3.8 mEq/L", status: "NORMAL", ref: "3.5-5.0" },
                    { lab: "Creatinine", val: "1.8 mg/dL", status: "HIGH", ref: "0.7-1.3" },
                    { lab: "Sodium", val: "132 mEq/L", status: "LOW", ref: "135-145" }
                ]
            }
        ],
        steps: [
            {
                id: 1,
                type: "extended_sata",
                prompt: "The nurse reviews the medication order for Ethacrynic acid (Edecrin). Why is this specific loop diuretic chosen over the more common Furosemide (Lasix)? Select all that apply.",
                options: [
                    "The patient has a documented anaphylactic allergy to sulfonamides",
                    "Ethacrynic acid is the only loop diuretic that does not contain a sulfa moiety",
                    "Furosemide is chemically derived from sulfonamides and carries a cross-reactivity risk",
                    "Ethacrynic acid has a significantly lower risk of ototoxicity in the elderly",
                    "Ethacrynic acid is more effective than Furosemide at mobilizing pink frothy sputum",
                    "Loop diuretics are contraindicated in patients with a history of COPD",
                    "Furosemide is less effective when the GFR is below 60 mL/min"
                ],
                answer: ["The patient has a documented anaphylactic allergy to sulfonamides", "Ethacrynic acid is the only loop diuretic that does not contain a sulfa moiety", "Furosemide is chemically derived from sulfonamides and carries a cross-reactivity risk"],
                rationale: "Loop diuretics like Furosemide, Bumetanide, and Torsemide are all sulfonamide derivatives. While the risk of cross-reactivity is debated, clinical standards dictate that in patients with a history of true anaphylaxis to sulfa drugs, these agents should be avoided. Ethacrynic acid is the only loop diuretic that is not a sulfonamide, making it the essential choice for this patient. However, the nurse must be aware that Ethacrynic acid actually carries a HIGHER risk of permanent ototoxicity (hearing loss) compared to Furosemide, especially in the elderly or those with renal impairment. It is chosen here solely for its unique chemical structure to bypass the allergy risk."
            },
            {
                id: 2,
                type: "matrix",
                prompt: "After 30 minutes of therapy, the nurse evaluates the patient's progress. Classify each finding as an indicator of therapeutic improvement or as a potential adverse effect of the diuretic therapy.",
                rows: [
                    "A urine output of 1,200 mL within the first 60 minutes",
                    "New-onset tinnitus (ringing in the ears) and hearing fullness",
                    "SpO2 improvement to 94% on 2L Nasal Cannula",
                    "Patient reports severe leg cramps and muscle weakness",
                    "Crackles are now only audible in the lower lung bases"
                ],
                columns: ["Therapeutic Improvement", "Adverse Effect"],
                answer: {
                    "A urine output of 1,200 mL within the first 60 minutes": "Therapeutic Improvement",
                    "New-onset tinnitus (ringing in the ears) and hearing fullness": "Adverse Effect",
                    "SpO2 improvement to 94% on 2L Nasal Cannula": "Therapeutic Improvement",
                    "Patient reports severe leg cramps and muscle weakness": "Adverse Effect",
                    "Crackles are now only audible in the lower lung bases": "Therapeutic Improvement"
                },
                rationale: "Therapeutic success in pulmonary edema is measured by rapid diuresis, improved oxygenation, and 'drying' of the lungs (as crackles recede from the apices to the bases). Adverse effects of high-dose loop diuretics are predictable and dangerous: rapid fluid shifts can lead to hypokalemia, manifested as muscle weakness and leg cramps. Most critically, Ethacrynic acid is highly ototoxic; tinnitus or hearing changes are major 'Red Flags' that must be reported immediately to prevent permanent deafness. These findings represent the delicate balance between clearing the lungs and causing systemic toxicity."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "The patient is now breathing easier but reports feeling 'heart flutters.' The cardiac monitor shows multiple Premature Ventricular Contractions (PVCs). Complete the bowtie for the highest priority complication.",
                center_condition: {
                    label: "Condition",
                    options: ["Severe Hypokalemia", "Digoxin Toxicity", "Fluid Volume Overload", "Respiratory Acidosis"],
                    answer: "Severe Hypokalemia"
                },
                left_actions: {
                    label: "Actions (2)",
                    options: ["Request stat Potassium replacement", "Hold further diuretic doses", "Increase the IV fluid rate", "Administer Albuterol", "Check a stat INR level"],
                    answer: ["Request stat Potassium replacement", "Hold further diuretic doses"]
                },
                right_monitor: {
                    label: "Monitor (2)",
                    options: ["EKG for U-waves and arrhythmias", "Serum Potassium levels", "Daily weights", "Stool for occult blood", "Pupillary response"],
                    answer: ["EKG for U-waves and arrhythmias", "Serum Potassium levels"]
                },
                rationale: "Aggressive loop diuretic therapy rapidly depletes potassium, which is critical for cardiac electrical stability. The onset of PVCs and 'heart flutters' in this patient strongly suggests severe hypokalemia. The nurse must act immediately to stop further potassium loss by holding the diuretic and must advocate for urgent potassium replacement (IV or PO depending on severity). Continuous EKG monitoring is the highest priority to detect lethal progression into Ventricular Tachycardia or the appearance of U-waves, while serial serum potassium checks are required to guide replacement therapy and ensure the patient returns to a safe range (3.5-5.0 mEq/L)."
            }
        ]
    },
    {
        id: "M-007",
        numerical_id: 7,
        title: "The Bridging Game: Heparin to Warfarin",
        category: "Cardiovascular / Coagulation",
        difficulty: "Advanced",
        patient_profile: {
            demographics: {
                name: "Maria Rodriguez",
                age: 45,
                gender: "Female",
                mrn: "5562-MR",
                dob: "11/04/1980",
                weight: "72 kg (158 lbs)",
                height: "165 cm (5'5\")",
                allergies: "NKDA"
            },
            chief_complaint: "Persistent left calf pain, warmth, and significant swelling.",
            hpi: "Ms. Rodriguez presented to the clinic following a 14-hour international flight. She reported her left leg felt 'heavy and tight.' An ultrasound confirmed an extensive Deep Vein Thrombosis (DVT) in the left popliteal vein. She was admitted and started on a continuous Unfractionated Heparin infusion. The provider is now initiating Warfarin (Coumadin) 5 mg PO daily, while continuing the Heparin drip. The patient is anxious and asks, 'Why do I need two different blood thinners? Isn't that dangerous?'",
            pmh: "DVT (current), Migraines with aura, Polycystic Ovary Syndrome (PCOS), and a history of smoking (quit 2 years ago).",
            sh: "Office manager for a tech firm. Sedentary job. Lives with her husband and two children. Non-smoker.",
            ros: {
                neuro: "Alert and oriented x4. Denies headache or dizziness.",
                cardio: "Heart sounds S1/S2 regular. No murmurs. BP 128/74. HR 78.",
                lung: "Lungs clear. Denies shortness of breath or pleuritic chest pain (low suspicion for PE currently).",
                gi: "Reports mild nausea, attributed to 'hospital food.'",
                ext: "Left calf is 4cm larger in circumference than the right. Significant erythema and warmth noted from ankle to knee. Peripheral pulses 2+."
            }
        },
        exhibits: [
            {
                title: "Coagulation Laboratory Trend (0800)",
                type: "table",
                data: [
                    { lab: "aPTT", val: "74 seconds", status: "THERAPEUTIC", ref: "30-40 (Control)" },
                    { lab: "PT", val: "11.2 seconds", status: "NORMAL", ref: "11-13.5" },
                    { lab: "INR", val: "1.02", status: "NON-THERAPEUTIC", ref: "0.8-1.1" },
                    { lab: "Platelets", val: "210,000", status: "NORMAL", ref: "150k-400k" }
                ]
            },
            {
                title: "Provider Orders",
                type: "text",
                content: `
                    1. Continue Unfractionated Heparin IV infusion per protocol (Target aPTT 60-80).<br>
                    2. Start Warfarin (Coumadin) 5 mg PO daily at 1800.<br>
                    3. Maintain strict bedrest with left leg elevated.<br>
                    4. Draw stat PT/INR and aPTT every morning at 0600.
                `
            }
        ],
        steps: [
            {
                id: 1,
                type: "extended_sata",
                prompt: "The nurse educates the patient on the rationale for 'Bridging Therapy.' Which statements accurately explain why both medications are required simultaneously? Select all that apply.",
                options: [
                    "Warfarin has a delayed onset of 3 to 5 days before reaching therapeutic levels",
                    "Heparin provides immediate anticoagulation while the Warfarin is building up",
                    "Warfarin initially depletes Vitamin K-dependent clotting factors, including Protein C",
                    "A transient pro-thrombotic state can occur in the first 48 hours of Warfarin therapy",
                    "Taking two drugs ensures the current popliteal clot will dissolve completely within 24 hours",
                    "Heparin acts as the specific chemical antidote if the first dose of Warfarin is too high",
                    "Combined therapy is only required if the patient's baseline INR is below 1.5"
                ],
                answer: ["Warfarin has a delayed onset of 3 to 5 days before reaching therapeutic levels", "Heparin provides immediate anticoagulation while the Warfarin is building up", "Warfarin initially depletes Vitamin K-dependent clotting factors, including Protein C", "A transient pro-thrombotic state can occur in the first 48 hours of Warfarin therapy"],
                rationale: "Warfarin works by inhibiting the synthesis of Vitamin K-dependent clotting factors (II, VII, IX, X). Because it does not affect factors already circulating in the blood, it takes 3-5 days to become effective. Crucially, Warfarin also inhibits Protein C and S (natural anticoagulants) which have shorter half-lives than the pro-coagulant factors. This can create a transient 'hypercoagulable' window where the risk of new clots actually increases. Continuous Heparin provides immediate protection by inactivating thrombin and factor Xa, 'bridging' the patient safely until the INR reaches the therapeutic target (usually 2.0-3.0)."
            },
            {
                id: 2,
                type: "matrix",
                prompt: "The nurse must monitor specific laboratory values to adjust the dosing of anticoagulants. Correctively link the medication to its primary monitoring parameter.",
                rows: [
                    "Unfractionated Heparin continuous IV infusion",
                    "Warfarin (Coumadin) oral tablets",
                    "Enoxaparin (Lovenox) subcutaneous injection",
                    "Dabigatran (Pradaxa) oral capsules"
                ],
                columns: ["aPTT", "PT / INR", "No Routine Monitoring Required"],
                answer: {
                    "Unfractionated Heparin continuous IV infusion": "aPTT",
                    "Warfarin (Coumadin) oral tablets": "PT / INR",
                    "Enoxaparin (Lovenox) subcutaneous injection": "No Routine Monitoring Required",
                    "Dabigatran (Pradaxa) oral capsules": "No Routine Monitoring Required"
                },
                rationale: "Unfractionated Heparin has an unpredictable half-life and must be adjusted using the activated partial thromboplastin time (aPTT) to maintain a therapeutic range (1.5-2.5 times the control). Warfarin is monitored via the Prothrombin Time (PT) and International Normalized Ratio (INR) to ensure consistent levels across different labs. Low Molecular Weight Heparins (like Enoxaparin) and Direct Oral Anticoagulants (like Dabigatran) have highly predictable pharmacokinetics and do not require routine laboratory monitoring in most patients."
            },
            {
                id: 3,
                type: "bowtie",
                prompt: "On day 4 of therapy, the patient suddenly develops a severe nosebleed (epistaxis) and her urine appears bright red. Her morning INR was 5.8. Complete the bowtie for the primary concern.",
                center_condition: {
                    label: "Potential Condition",
                    options: ["Warfarin Toxicity / Overdose", "Heparin-Induced Thrombocytopenia", "Acute Kidney Injury", "Normal Bridge Response"],
                    answer: "Warfarin Toxicity / Overdose"
                },
                left_actions: {
                    label: "Actions (2)",
                    options: ["Administer Vitamin K (Phytonadione)", "Hold the next dose of Warfarin", "Administer Protamine Sulfate", "Increase the Heparin drip rate", "Encourage intake of leafy green vegetables"],
                    answer: ["Administer Vitamin K (Phytonadione)", "Hold the next dose of Warfarin"]
                },
                right_monitor: {
                    label: "Monitor (2)",
                    options: ["Repeat INR levels", "Hemoglobin and Hematocrit", "aPTT levels", "Serum Potassium", "Urine Specific Gravity"],
                    answer: ["Repeat INR levels", "Hemoglobin and Hematocrit"]
                },
                rationale: "The patient is experiencing an acute bleeding event due to an excessively high INR (5.8), indicating Warfarin toxicity. The primary nursing action is to hold the medication to prevent further anticoagulation and administer Vitamin K, which is the specific antagonist that allows the liver to resume synthesis of clotting factors. While leafy greens contain Vitamin K, they are not used for acute reversal. Monitoring must focus on the INR to track the effectiveness of the reversal and the Hemoglobin/Hematocrit to assess the severity of blood loss from the epistaxis and hematuria."
            }
        ]
    }
];
