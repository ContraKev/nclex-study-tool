const data_diuretics_ksparing_misc = [
    {
        g: "Spironolactone", b: "Aldactone", c: "Potassium-Sparing Diuretic / Aldosterone Antagonist", cat: "cv",
        m: "Competitively antagonizes aldosterone receptors in the distal convoluted tubule and cortical collecting duct of the nephron. Aldosterone normally promotes sodium and water reabsorption while facilitating potassium and hydrogen ion excretion. By blocking these receptors, spironolactone inhibits the exchange of sodium for potassium, leading to the excretion of sodium chloride and water while retaining potassium and hydrogen. It is a relatively weak diuretic but provides significant cardiovascular survival benefits in heart failure by preventing myocardial fibrosis, ventricular remodeling, and the deleterious effects of hyperaldosteronism. It belongs to the steroid class of medications.",
        ind: "Management of symptomatic Heart Failure (HFrEF), Hypertension (specifically for resistant hypertension or as an adjunct), Primary Hyperaldosteronism (Conn's Syndrome), and Edema resulting from hepatic cirrhosis. Also used off-label for PCOS and acne.",
        con: "Hyperkalemia (serum K+ > 5.0 mEq/L), severe renal impairment (eGFR < 30 mL/min/1.73m²), and Addison's disease (adrenal insufficiency).",
        aec: "Common: Breast tenderness (men and women), dizziness, headache, gastrointestinal upset (nausea, vomiting), and drowsiness.",
        aes: "HYPERKALEMIA: Can be fatal and occurs more frequently in patients with renal failure or those taking ACEIs/ARBs. GYNECOMASTIA: Enlargement of male breast tissue due to non-selective binding to androgen receptors. Other: Menstrual irregularities and impotence.",
        inter: [
            {d: "ACE Inhibitors / ARBs", m: "Significant risk of severe, life-threatening hyperkalemia; monitor potassium strictly.", s: "high"},
            {d: "Potassium Supplements", m: "Extreme risk of fatal hyperkalemia; absolute contraindication.", s: "critical"},
            {d: "NSAIDs", m: "Increases risk of hyperkalemia and decreases the diuretic efficacy by inhibiting renal blood flow.", s: "med"}
        ],
        dosage: "Oral: 25 mg to 100 mg daily for HF/HTN. Max 400 mg/day for primary hyperaldosteronism titration.",
        admin: "Administer orally once or twice daily. Take WITH FOOD to increase absorption and decrease gastric irritation. Monitor daily weights. Maintain consistent daily timing.",
        nurse: "Monitor serum Potassium and Creatinine levels baseline and frequently during titration (especially in the first 2 weeks). Teach patient to avoid salt substitutes containing potassium and high-potassium foods. Instruct male patients to report breast enlargement. Monitor BP baseline and periodically. Assess for signs of hyperkalemia including muscle weakness and cardiac dysrhythmias."
    },
    {
        g: "Eplerenone", b: "Inspra", c: "Potassium-Sparing Diuretic / Aldosterone Antagonist", cat: "cv",
        m: "Selectively blocks aldosterone binding at the mineralocorticoid receptor. Unlike spironolactone, it has high selectivity for this receptor and significantly lower affinity for androgen and progesterone receptors, resulting in a much lower incidence of endocrine side effects like gynecomastia or menstrual changes. It reduces blood pressure and protects the heart from the inflammatory and fibrotic effects of aldosterone. It helps decrease the workload on the left ventricle and improves survival in post-MI patients with heart failure.",
        ind: "Reduction of cardiovascular mortality post-MI with left ventricular dysfunction (EF < 40%); management of Hypertension as monotherapy or adjunct.",
        con: "Hyperkalemia (serum K+ > 5.5 mEq/L), severe renal impairment (CrCl < 30 mL/min), Type 2 DM with microalbuminuria, and concomitant use of potent CYP3A4 inhibitors (e.g., ketoconazole).",
        aec: "Common: Dizziness, fatigue, flu-like symptoms, diarrhea, and abdominal pain. Cough and headache.",
        aes: "Severe Hyperkalemia (which can lead to cardiac arrest), worsening renal dysfunction, and angioedema (rare).",
        inter: [
            {d: "CYP3A4 Inhibitors", m: "Increases eplerenone levels significantly; avoid strong inhibitors.", s: "high"},
            {d: "ACE-I / ARBs", m: "Additive risk of severe hyperkalemia.", s: "high"}
        ],
        dosage: "Oral: 25 mg to 50 mg once daily. Adjust dose based on serum potassium levels and renal function.",
        admin: "Take once daily with or without food. Maintain consistent daily timing. Do not use potassium-containing salt substitutes or supplements while on this therapy.",
        nurse: "Monitor serum potassium baseline and frequently (Day 3 and Week 1 after starting). Assess for signs of hyperkalemia such as muscle twitching, palpitations, and fatigue. Evaluate renal function (BUN/Cr) throughout the course of treatment. Instruct the patient to report any signs of hypersensitivity."
    },
    {
        g: "Amiloride", b: "Midamor", c: "Potassium-Sparing Diuretic", cat: "cv",
        m: "Inhibits sodium reabsorption in the distal convoluted tubule, cortical collecting tubule, and collecting duct by blocking the epithelial sodium channels (ENaC) on the luminal surface. This action promotes the loss of sodium and water while uniquely inhibiting the excretion of potassium, hydrogen, and magnesium ions. Unlike spironolactone, it is NOT an aldosterone antagonist; instead, it exerts a direct electrophysiological effect on the sodium channels of the nephron. It is a weak diuretic when used alone and is primarily used to mitigate the potassium-wasting effects of more potent diuretics.",
        ind: "Management of Hypertension or Edema associated with heart failure or hepatic cirrhosis, specifically used to counteract the potassium-wasting effects of loop or thiazide diuretics. Also used off-label for lithium-induced polyuria.",
        con: "Hyperkalemia (serum K+ > 5.5 mEq/L), severe renal impairment (CrCl < 30 mL/min), and concomitant use of other potassium-sparing agents.",
        aec: "Common: Nausea, diarrhea, abdominal pain, flatulence, headache, and dizziness.",
        aes: "SEVERE HYPERKALEMIA: Especially in diabetics and elderly patients. Potential for hyponatremia and metabolic acidosis (due to hydrogen ion retention).",
        inter: [
            {d: "ACE Inhibitors / ARBs", m: "Additive risk of severe, life-threatening hyperkalemia.", s: "high"},
            {d: "Potassium Supplements", m: "Extreme risk of fatal hyperkalemia; absolute contraindication.", s: "critical"}
        ],
        dosage: "Oral: 5 mg to 10 mg once daily. Maximum dose is 20 mg/day.",
        admin: "Take orally once daily. Administer WITH FOOD to reduce gastrointestinal distress and improve bioavailability. Avoid taking late in the day to prevent nocturia.",
        nurse: "Monitor serum potassium baseline and frequently throughout therapy. Assess renal function (BUN/Cr). Teach patient to avoid high-potassium foods and potassium-based salt substitutes. Monitor blood pressure. Assess for signs of metabolic acidosis such as confusion or deep, rapid breathing."
    },
    {
        g: "Triamterene", b: "Dyrenium", c: "Potassium-Sparing Diuretic", cat: "cv",
        m: "Exerts a direct inhibitory effect on the exchange of sodium for potassium and hydrogen in the distal tubule and collecting duct. Like amiloride, it blocks the ENaC sodium channels independently of aldosterone levels. This leads to increased sodium and water excretion while conserving potassium. It is often combined with HCTZ (Maxzide/Dyazide) to provide balanced diuretic therapy without significant potassium loss. It is a weak antihypertensive agent when used alone. It may also interfere with the enzyme dihydrofolate reductase at high doses.",
        ind: "Treatment of Edema associated with congestive heart failure, hepatic cirrhosis, and nephrotic syndrome. Often used as an adjunct to thiazide diuretics to prevent hypokalemia.",
        con: "Severe hepatic or renal disease, preexisting hyperkalemia, and history of kidney stones (nephrolithiasis). Known hypersensitivity.",
        aec: "Common: Nausea, vomiting, leg cramps, dizziness, and photosensitivity. May cause a harmless BLUISH DISCOLORATION of the urine.",
        aes: "Hyperkalemia, NEPHROLITHIASIS: Triamterene can be a direct component of kidney stones. Megaloblastic anemia (due to weak folic acid antagonism).",
        inter: [
            {d: "NSAIDs (Indomethacin)", m: "Can precipitate acute renal failure; use with extreme caution or avoid.", s: "high"},
            {d: "ACE Inhibitors", m: "Increases the risk of severe, life-threatening hyperkalemia.", s: "high"}
        ],
        dosage: "Oral: 100 mg twice daily. Maximum dose is 300 mg/day.",
        admin: "Take orally after meals to minimize gastrointestinal upset. Maintain adequate fluid intake (at least 2-3 L/day) to prevent the formation of kidney stones. Take at consistent times.",
        nurse: "Monitor for signs of hyperkalemia (muscle twitching, weakness). Assess for flank pain which may indicate kidney stones. Check CBC periodically for signs of anemia. Warn the patient about the harmless change in urine color to blue. Monitor renal function baseline and periodically."
    },
    {
        g: "Acetazolamide", b: "Diamox", c: "Carbonic Anhydrase Inhibitor", cat: "cv",
        m: "Inhibits the enzyme carbonic anhydrase in the proximal renal tubule. This leads to decreased reabsorption of sodium, potassium, and especially bicarbonate (HCO3-). This creates an alkaline diuresis and leads to a systemic metabolic acidosis. It also reduces the rate of aqueous humor production in the eye by inhibiting carbonic anhydrase in the ciliary body and reduces cerebrospinal fluid (CSF) production. It is a very weak diuretic for edema but useful for its other physiological effects.",
        ind: "Open-angle glaucoma (to reduce intraocular pressure), prevention or treatment of acute mountain sickness (altitude sickness), and treatment of metabolic alkalosis (by inducing bicarbonate loss). Adjunct for certain seizure types.",
        con: "Known hypersensitivity to sulfonamides, hypokalemia, hyponatremia, and severe renal or hepatic disease. Adrenal insufficiency.",
        aec: "Common: Paresthesia (tingling in extremities), fatigue, drowsiness, and altered taste (metallic taste). Nausea and vomiting.",
        aes: "METABOLIC ACIDOSIS, Stevens-Johnson Syndrome (SJS), and bone marrow suppression (rare but serious). Potential for renal calculi.",
        inter: [{d: "Salicylates (Aspirin)", m: "Increases risk of salicylate toxicity and severe metabolic acidosis.", s: "high"}, {d: "Lithium", m: "Increases lithium excretion; risk of decreased lithium levels.", s: "med"}],
        dosage: "Oral: 250 mg to 500 mg one to four times daily. Max 1000 mg/day. Sustained release (Sequels) given BID.",
        admin: "Available in Oral and IV forms. Sustained-release capsules (Sequels) must be swallowed whole; do not crush or chew. Can be taken with food to decrease GI distress.",
        nurse: "Monitor serum electrolytes and acid-base balance periodically. Monitor for skin rash (early sign of SJS). Advise cautious use in patients with COPD as acidosis can worsen respiratory status. Teach patient to report any tingling in fingers or toes."
    },
    {
        g: "Mannitol", b: "Osmitrol", c: "Osmotic Diuretic", cat: "cv",
        m: "A simple sugar that is filtered by the glomerulus but not reabsorbed by the renal tubules. It creates a high osmotic pressure in the tubular fluid, pulling water from the intracellular and interstitial spaces into the vascular system and then into the urine. This results in a rapid and profound increase in urine output. It also draws water out of the brain mass into the bloodstream and reduces intraocular fluid volume. It is not metabolized significantly and is excreted entirely by the kidneys.",
        ind: "Reduction of Intracranial Pressure (ICP) in cerebral edema; reduction of high Intraocular Pressure (IOP); and prevention of acute kidney injury (AKI) during major surgery or in the oliguric phase.",
        con: "Active intracranial bleeding (except during craniotomy), severe pulmonary edema, heart failure, and anuria due to severe renal disease.",
        aec: "Common: Thirst, dry mouth, headache, dizziness, and blurred vision. Nausea and vomiting.",
        aes: "FLUID OVERLOAD: Can lead to acute Pulmonary Edema and heart failure. Profound dehydration, hypernatremia (initially) followed by hyponatremia, and AKI from crystal deposition.",
        inter: [],
        dosage: "IV: 0.25 g/kg to 2 g/kg administered as a 15-25% solution over 30 to 60 minutes.",
        admin: "IV ONLY via a central or large-bore peripheral line. MUST be administered using a FILTERED needle and tubing because the drug easily crystallizes at room temperature. Inspect the bag for crystals before hanging; if present, warm the bag in a specialized warmer to re-dissolve.",
        nurse: "Monitor neuro status (level of consciousness, pupil reaction) and ICP/IOP closely. Monitor hourly urine output; notification required if < 30 mL/hr. Auscultate lungs baseline and hourly for crackles, as rapid fluid shifts can precipitate heart failure. Closely track serum osmolality and electrolytes (Na+, K+) to prevent severe imbalance. Ensure IV access is patent; drug is a potent tissue irritant."
    }
];
