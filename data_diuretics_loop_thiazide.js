const data_diuretics_loop_thiazide = [
    {
        g: "Furosemide", b: "Lasix", c: "Loop Diuretic", cat: "cv",
        m: "Potently inhibits the reabsorption of sodium and chloride in the thick ascending limb of the loop of Henle and the distal renal tubule. By blocking the Na+/K+/2Cl- symporter (the triple transporter), it prevents the kidney from concentrating urine, leading to profound excretion of water, sodium, chloride, magnesium, hydrogen, and calcium. It is the most common loop diuretic and is highly effective even in patients with significantly impaired renal function (low GFR). It also increases renal blood flow and venous capacitance, which helps acutely in pulmonary edema.",
        ind: "Edema associated with heart failure, hepatic cirrhosis, and renal disease (including nephrotic syndrome). Acute pulmonary edema (IV). Hypertension (as adjunct).",
        con: "Anuria, history of hypersensitivity to furosemide, and severe electrolyte depletion. Use with caution in patients with sulfonamide allergy (potential cross-reactivity, though clinical evidence suggests it is rare).",
        aec: "Common: Polyuria, dizziness, orthostatic hypotension, dehydration, headache, blurred vision, and muscle cramps.",
        aes: "OTOTOXICITY: Characterized by tinnitus and hearing loss (higher risk with rapid IV push or high doses). Severe: Hypokalemia (K+ < 3.5), hyponatremia, hyperuricemia (may trigger gout), and Stevens-Johnson Syndrome.",
        inter: [
            {d: "Digoxin", m: "Hypokalemia significantly increases risk of fatal digoxin-induced dysrhythmias.", s: "critical"},
            {d: "Lithium", m: "Decreased sodium clearance leads to toxic lithium accumulation and toxicity.", s: "high"},
            {d: "Aminoglycosides", m: "Additive risk of permanent ototoxicity and vestibular damage.", s: "high"}
        ],
        dosage: "Oral: 20 mg to 80 mg per dose. IV: 20 mg to 40 mg initially. Max 600 mg/day in extreme renal or heart failure cases.",
        admin: "Take orally in the MORNING to prevent nocturia and sleep interruption. If twice daily, take the second dose no later than 4:00 PM. IV Push: Administer NO FASTER than 20 mg/minute to minimize the risk of permanent ototoxicity and sudden hearing loss.",
        nurse: "Monitor serum Potassium levels and renal function (BUN/Cr) strictly. Weigh patient daily (report gain > 2lb/day or 5lb/week). Monitor blood pressure and intake/output. Encourage high-potassium foods (bananas, potatoes, orange juice). Assess for signs of dehydration including dry mucous membranes and poor skin turgor. Check for tinnitus baseline and periodically."
    },
    {
        g: "Bumetanide", b: "Bumex", c: "Loop Diuretic", cat: "cv",
        m: "Inhibits sodium and chloride reabsorption in the thick ascending limb of the loop of Henle. It is approximately 40 times more potent than furosemide on a milligram-per-milligram basis (1 mg Bumex = 40 mg Lasix). It has a faster onset and shorter duration of action than furosemide, making it exceptionally useful for rapid fluid mobilization. It is often preferred in patients with severe bowel wall edema (common in HF) where furosemide absorption becomes unpredictable and erratic.",
        ind: "Management of Edema associated with heart failure or renal disease, particularly in patients who have become resistant to high doses of furosemide or have severe GI absorption issues.",
        con: "Anuria, hepatic coma, severe electrolyte depletion, and known hypersensitivity.",
        aec: "Common: Muscle cramps, dizziness, headache, hypotension, and impaired hearing (transient). GI upset and nausea.",
        aes: "Profound diuresis leading to cardiovascular collapse, severe hypokalemia, and ototoxicity (though statistically demonstrated to have a lower incidence than furosemide). May cause hyperuricemia.",
        inter: [
            {d: "NSAIDs", m: "Blunts the diuretic response by inhibiting renal prostaglandins; potential for acute kidney injury.", s: "med"},
            {d: "Antihypertensives", m: "Additive hypotensive effects; risk of syncope.", s: "med"}
        ],
        dosage: "Oral: 0.5 mg to 2 mg daily. IV: 0.5 mg to 1 mg slow push. Doses are typically titrated every 4-5 hours.",
        admin: "Available in Oral and IV forms. Administer in the morning. For IV: can be given over 1-2 minutes. Monitor for rapid shifts in fluid status and electrolytes within the first hour of administration.",
        nurse: "Monitor weight daily. Monitor electrolytes (K+, Mg++, Ca++, Na+) strictly. Evaluate for signs of dehydration including skin turgor and mucous membranes. Maintain accurate intake and output records. Teach patient to report any ringing in the ears or changes in balance immediately."
    },
    {
        g: "Torsemide", b: "Demadex", c: "Loop Diuretic", cat: "cv",
        m: "Inhibits the Na+/K+/2Cl- carrier system in the thick ascending limb of the loop of Henle. It has a longer duration of action (up to 12 hours) and significantly higher oral bioavailability (80%) than furosemide. It also demonstrates weak antialdosteronergic properties, which may mitigate excessive potassium loss compared to other loop diuretics. It reduces volume overload and preload, thereby decreasing the workload on the failing heart and lowering systemic blood pressure.",
        ind: "Management of Edema associated with congestive heart failure, chronic renal failure, or hepatic disease; and first-line management of Hypertension in selected populations.",
        con: "Anuria, history of hypersensitivity to torsemide or sulfonylureas (due to the presence of a sulfonamide structure).",
        aec: "Common: Excessive urination, headache, dizziness, constipation, and rhinitis (nasal congestion).",
        aes: "Severe Hypokalemia, profound dehydration causing orthostatic hypotension, tinnitus, and acute renal failure in volume-depleted patients. Potential for hyperuricemia.",
        inter: [
            {d: "Probenecid", m: "Decreases the diuretic effect by inhibiting tubular secretion of torsemide into the nephron.", s: "med"},
            {d: "NSAIDs", m: "Reduced diuretic and antihypertensive efficacy via prostaglandin inhibition.", s: "med"},
            {d: "Lithium", m: "Increased risk of toxic lithium accumulation due to reduced sodium clearance.", s: "high"}
        ],
        dosage: "Oral: HTN: 5 mg once daily. Edema: 10 mg to 20 mg daily. Max 200 mg/day for patients with chronic renal failure.",
        admin: "Take orally once daily in the morning to avoid sleep-disrupting nocturia. Can be administered with or without food. Maintain consistent daily timing. Do not double doses if one is missed.",
        nurse: "Monitor blood pressure and serum electrolytes baseline and periodically throughout therapy. Assess for signs of excessive volume depletion such as dizziness or tachycardia. Weigh patient daily and report gains > 2lb. Educate the patient on the importance of potassium-rich foods if appropriate."
    },
    {
        g: "Ethacrynic acid", b: "Edecrin", c: "Loop Diuretic", cat: "cv",
        m: "A potent loop diuretic that acts on the thick ascending limb of the loop of Henle to inhibit sodium and chloride reabsorption. Uniquely, it is the ONLY loop diuretic that is NOT a sulfonamide derivative. It is chemically distinct (a phenoxyacetic acid derivative), making it the absolute drug of choice for patients with a documented, life-threatening sulfa allergy who require rapid fluid mobilization. It possesses a high ceiling of diuretic effect and can cause massive water and electrolyte loss.",
        ind: "Short-term management of severe edema when other agents fail; management of edema in patients with documented true sulfonamide hypersensitivity.",
        con: "Anuria, infants, nursing mothers, and severe watery diarrhea caused by the drug. Known hypersensitivity to ethacrynic acid.",
        aec: "Common: GI upset (nausea, vomiting), abdominal pain, and significant watery diarrhea. Dizziness and headache.",
        aes: "SEVERE OTOTOXICITY: Demonstrates the highest risk of permanent hearing loss among all loop diuretics. Profound electrolyte depletion (Hypokalemia, Hyponatremia), and metabolic alkalosis.",
        inter: [
            {d: "Aminoglycosides", m: "Significantly potentiates the risk of permanent deafness; absolute contraindication.", s: "critical"},
            {d: "Warfarin", m: "May displace warfarin from protein-binding sites; monitor INR closely for increases.", s: "med"}
        ],
        dosage: "Oral: 50 mg to 200 mg daily. IV: 50 mg (0.5 to 1 mg/kg) for acute settings.",
        admin: "Administer orally WITH MEALS to reduce the risk of severe GI distress. For IV: do NOT administer IM or SC as it causes severe tissue irritation and potential necrosis. Reconstitute following manufacturer guidelines.",
        nurse: "Monitor hearing and balance strictly (highest Ototoxicity risk). Monitor for severe watery diarrhea; if this occurs, the drug must be discontinued immediately. Check serum electrolytes daily during acute therapy. Assess for signs of metabolic alkalosis (confusion, tremors)."
    },
    {
        g: "Hydrochlorothiazide", b: "Microzide, Oretic", c: "Thiazide Diuretic", cat: "cv",
        m: "Inhibits sodium and chloride reabsorption in the distal convoluted tubule by blocking the Na+/Cl- symporter. This increases the delivery of sodium to the collecting ducts, promoting the excretion of sodium, chloride, potassium, and water. Thiazides uniquely increase renal calcium reabsorption (preventing hypercalciuria). They are less potent than loop diuretics and require a CrCl > 30 mL/min to be clinically effective for diuresis. They also cause peripheral vasodilation with long-term use.",
        ind: "First-line management of Hypertension (monotherapy or combination) and treatment of Edema associated with Heart Failure, cirrhosis, or chronic corticosteroid use.",
        con: "Renal failure (anuria), history of hypersensitivity to thiazides or sulfonamides. Severe hepatic impairment.",
        aec: "Common: Dizziness, headache, increased urination frequency, gastric irritation, and photophobia (sensitivity to light).",
        aes: "Hypokalemia, HYPERCALCEMIA (unique feature), hyponatremia, hyperglycemia (significant caution in diabetics), and potential for gout flares due to hyperuricemia. Blood dyscrasias (rare).",
        inter: [
            {d: "Digoxin", m: "Low potassium triggered by thiazide increases the risk of fatal digitalis-induced dysrhythmias.", s: "high"},
            {d: "Lithium", m: "Decreased renal clearance leads to toxic lithium accumulation; requires monitoring.", s: "high"},
            {d: "Antidiabetics", m: "Thiazides may antagonize the effect of insulin or oral hypoglycemics; check BG.", s: "med"}
        ],
        dosage: "Oral: 12.5 mg to 50 mg once daily. Maximum 100 mg/day (rarely provides additional BP benefit).",
        admin: "Take orally once daily in the morning. Avoid taking at bedtime to prevent sleep interruption from nocturia. Can be taken with food to minimize GI upset.",
        nurse: "Monitor BP and serum electrolytes (K+, Na+, Ca++). Advise patient to use sunscreen and protective clothing due to Photosensitivity. Monitor blood glucose in diabetic patients as HCTZ can raise levels. Teach patient to rise slowly to prevent falls from orthostasis."
    },
    {
        g: "Chlorothiazide", b: "Diuril", c: "Thiazide Diuretic", cat: "cv",
        m: "Inhibits the reabsorption of sodium and chloride in the distal convoluted tubule by blocking the Na+/Cl- symporter. This increases the delivery of sodium to the distal segments of the nephron, promoting the excretion of sodium, chloride, potassium, and water. Uniquely, it also promotes the renal reabsorption of calcium. It is the ONLY thiazide diuretic available in an intravenous formulation, making it critical for acute management of edema in patients who cannot tolerate oral medications.",
        ind: "Management of Hypertension (monotherapy or adjunct) and treatment of Edema associated with congestive heart failure, hepatic cirrhosis, or corticosteroid/estrogen therapy.",
        con: "Anuria, history of hypersensitivity to thiazides or sulfonamides, and severe renal impairment. Severe liver disease.",
        aec: "Common: Dizziness, headache, gastric irritation, photosensitivity, and orthostatic hypotension. Nausea.",
        aes: "Hypokalemia (K+ < 3.5), Hyponatremia, HYPERCALCEMIA, metabolic alkalosis, and potential for Stevens-Johnson Syndrome (SJS). Potential for cholestatic jaundice.",
        inter: [
            {d: "Digoxin", m: "Hypokalemia induced by thiazide increases the risk of digitalis toxicity; monitor HR.", s: "high"},
            {d: "Lithium", m: "Reduces lithium clearance; significant risk of toxic lithium levels and neurotoxicity.", s: "high"}
        ],
        dosage: "Oral: 500 mg to 1000 mg once or twice daily. IV: 500 mg twice daily. Maximum 2000 mg/day.",
        admin: "Available in Oral and IV forms. Take oral doses in the morning. For IV: Reconstitute with at least 18 mL of sterile water; do NOT administer IM or Subcutaneously due to severe tissue irritation. Ensure slow IV push. Solution must be clear.",
        nurse: "Monitor serum electrolytes (K+, Na+, Ca++). Monitor BP and daily weight baseline and periodically. Use caution in diabetic patients as it may cause hyperglycemia. Protect skin from sun exposure. Assess for signs of dehydration."
    },
    {
        g: "Chlorthalidone", b: "Thalitone, Hygroton", c: "Thiazide-like Diuretic", cat: "cv",
        m: "A monosulfonamyl diuretic that functions similarly to thiazides by inhibiting sodium and chloride reabsorption in the distal convoluted tubule. It has a significantly longer half-life (40-60 hours) than HCTZ, providing more consistent 24-hour blood pressure control and better reduction in cardiovascular events. It promotes the excretion of sodium, chloride, and water while decreasing the excretion of calcium. Recent clinical guidelines often prefer chlorthalidone over HCTZ for hypertension management due to its potency and duration.",
        ind: "Management of Hypertension and treatment of Edema associated with heart failure, hepatic cirrhosis, or renal dysfunction.",
        con: "Anuria and known hypersensitivity to chlorthalidone or sulfonamide-derived drugs. Severe renal impairment.",
        aec: "Common: Dizziness, fatigue, nausea, headache, and xerostomia (dry mouth). Gastrointestinal upset.",
        aes: "Severe Hypokalemia, Hyperuricemia (Gout flares), hypercalcemia, and orthostatic hypotension. Potential for necrotizing angiitis.",
        inter: [
            {d: "Antidiabetics", m: "May decrease the hypoglycemic effect; requires blood glucose monitoring.", s: "med"},
            {d: "NSAIDs", m: "Decreases the diuretic and antihypertensive efficacy via prostaglandin inhibition.", s: "med"}
        ],
        dosage: "Oral: 25 mg to 50 mg once daily. Doses above 50 mg increase the risk of hypokalemia without providing significant additional BP benefit.",
        admin: "Take orally once daily in the morning with food to minimize GI upset. Maintain consistent daily intake of fluids unless restricted. Swallow tablets whole.",
        nurse: "Monitor serum potassium and uric acid levels. Assess for signs of gout (swollen, painful big toe). Monitor BP baseline and periodically. Advise patient to report symptoms of hypokalemia (muscle weakness, palpitations, leg cramps)."
    },
    {
        g: "Indapamide", b: "Lozol", c: "Thiazide-like Diuretic", cat: "cv",
        m: "A long-acting sulfonamide diuretic that inhibits sodium reabsorption in the distal convoluted tubule. It also has direct vasodilatory properties on peripheral blood vessels, which may be related to its calcium channel blocking effect at higher doses. It is effective for blood pressure control without significantly affecting cardiac output or heart rate. It has a neutral effect on lipids and is often well-tolerated in diabetics.",
        ind: "Management of Hypertension and treatment of salt and fluid retention associated with congestive heart failure.",
        con: "Anuria and known hypersensitivity to sulfonamides. Severe hepatic impairment.",
        aec: "Common: Headache, dizziness, fatigue, muscle cramps, and nervousness. Nausea and vomiting.",
        aes: "Severe hypokalemia (especially in the elderly), hyponatremia, and potential for hepatotoxicity. Orthostatic hypotension.",
        inter: [{d: "Lithium", m: "Increased risk of lithium toxicity due to reduced renal clearance of the drug.", s: "high"}],
        dosage: "Oral: 1.25 mg to 5 mg once daily. Doses are typically titrated every 4 weeks based on BP response.",
        admin: "Administer orally once daily in the morning to prevent nocturia. Swallow tablets whole. Can be taken without regard to food.",
        nurse: "Monitor blood pressure and serum electrolytes (K+, Na+). Assess for signs of hepatic injury (jaundice, dark urine). Encourage adequate potassium intake through diet. Teach patient to report any unusual fatigue or weakness."
    }
];
