const data_diabetes_alpha_sglt2 = [
    {
        g: "Acarbose", b: "Precose", c: "Alpha-Glucosidase Inhibitor", cat: "dm",
        m: "Competitively and reversibly inhibits the alpha-glucosidase enzymes (glucomidase, sucrase, maltase) in the brush border of the small intestine. This action significantly delays the digestion and subsequent absorption of complex carbohydrates and sucrose into smaller glucose molecules. As a result, the post-prandial rise in blood glucose is blunted and smoothed out. It does NOT stimulate insulin secretion and does not cause hypoglycemia when used as monotherapy. Its effect is purely local within the GI tract.",
        ind: "Management of Type 2 Diabetes Mellitus as an adjunct to diet and exercise to specifically control post-prandial hyperglycemia spikes.",
        con: "Inflammatory Bowel Disease (IBD), colonic ulceration, partial intestinal obstruction, and chronic intestinal diseases characterized by marked disorders of digestion or absorption.",
        aec: "Gastrointestinal: FLATULENCE (very common, up to 70% of patients), diarrhea, abdominal pain, and borborygmi (stomach rumbling). Symptoms are related to the fermentation of undigested carbohydrates in the colon.",
        aes: "Hepatotoxicity (clinically significant elevations in LFTs with long-term use) and iron deficiency anemia (due to reduced absorption).",
        inter: [
            {d: "Digestive Enzymes (Amylase)", m: "Reduces the therapeutic effect of acarbose; avoid concurrent use.", s: "med"},
            {d: "Digoxin", m: "May reduce the absorption and serum levels of digoxin by interfering with gut uptake.", s: "med"}
        ],
        dosage: "Oral: 25 mg to 100 mg three times daily. Max 100 mg TID.",
        admin: "MUST be administered orally with the VERY FIRST BITE of each main meal to ensure the drug is present when carbs enter the intestine. If a meal is skipped, the dose must be skipped.",
        nurse: "Monitor LFTs every 3 months for the first year. If hypoglycemia occurs (due to other concurrent DM drugs), it MUST be treated with GLUCOSE (dextrose tabs/gel), not sucrose (cane sugar/juice/candy), as acarbose prevents the breakdown of sucrose."
    },
    {
        g: "Miglitol", b: "Glyset", c: "Alpha-Glucosidase Inhibitor", cat: "dm",
        m: "Inhibits alpha-glucosidase enzymes in the small intestine brush border. Unlike acarbose, miglitol is systemically absorbed but not metabolized, and is excreted by the kidneys. It delays the absorption of dietary carbohydrates, reducing the magnitude of post-prandial glucose elevations.",
        ind: "Management of Type 2 Diabetes Mellitus.",
        con: "Chronic intestinal diseases, IBD, colonic ulceration, and intestinal obstruction.",
        aec: "Abdominal pain, diarrhea, and flatulence (dose-related and usually transient).",
        aes: "Severe GI distress and skin rash (rare).",
        inter: [],
        dosage: "Oral: 25 mg to 100 mg three times daily.",
        admin: "Take orally with the first bite of each main meal. Do not take if not eating a full meal.",
        nurse: "Monitor iron levels periodically as the drug may decrease iron absorption. Educate the patient that hypoglycemia must be treated with glucose (dextrose) only."
    },
    {
        g: "Canagliflozin", b: "Invokana", c: "SGLT2 Inhibitor", cat: "dm",
        m: "Inhibits the Sodium-Glucose Co-Transporter 2 (SGLT2) in the proximal renal tubules. SGLT2 is responsible for at least 90% of glucose reabsorption from the glomerular filtrate. By blocking this transporter, canagliflozin reduces the renal threshold for glucose and increases urinary glucose excretion (glycosuria), effectively removing glucose from the body via the kidneys and providing an insulin-independent mechanism for glucose lowering.",
        ind: "Type 2 Diabetes Mellitus; reduction of risk of major adverse CV events in adults with T2DM and established CVD; treatment of diabetic nephropathy with albuminuria.",
        con: "Severe renal impairment (eGFR < 30 mL/min), end-stage renal disease (ESRD), or patients on dialysis.",
        aec: "Polyuria (increased urination), increased thirst (thirst/dry mouth), vulvovaginal candidiasis (yeast infection), and urinary tract infections.",
        aes: "EUGLYCEMIC KETOACIDOSIS (DKA with normal or near-normal BG levels), severe hypotension/dehydration, hyperkalemia, and increased risk of lower limb amputation (Black Box warning).",
        inter: [{d: "Diuretics (Loop/Thiazide)", m: "Significantly increases the risk of severe dehydration and symptomatic hypotension.", s: "high"}],
        dosage: "Oral: 100 mg to 300 mg once daily.",
        admin: "Take once daily BEFORE the first meal of the day. Ensure the patient maintains adequate daily fluid intake to prevent dehydration.",
        nurse: "Monitor hydration status and blood pressure baseline and periodically. Assess for signs of genital itching or burning (yeast). Check serum potassium and renal function. Teach patient to report any new foot pain or sores immediately (Amputation risk)."
    },
    {
        g: "Dapagliflozin", b: "Farxiga", c: "SGLT2 Inhibitor", cat: "dm",
        m: "Selective inhibitor of SGLT2 in the renal tubules, promoting glycosuria and associated caloric loss. It also reduces sodium reabsorption, which may contribute to its clinically proven beneficial effects in heart failure and chronic kidney disease by reducing volume overload.",
        ind: "Type 2 Diabetes Mellitus, symptomatic Heart Failure (HFrEF and HFpEF), and Chronic Kidney Disease (CKD).",
        con: "Hypersensitivity; patients on dialysis.",
        aec: "Increased urination, UTIs, nasopharyngitis, and thirst.",
        aes: "Ketoacidosis, acute kidney injury, FOURNIER'S GANGRENE (rare but life-threatening necrotizing fasciitis of the perineum), and volume depletion.",
        inter: [],
        dosage: "Oral: 5 mg to 10 mg once daily.",
        admin: "Take once daily in the morning with or without food. Ensure patient is hydrated.",
        nurse: "Assess for signs of infection in the genital or perianal area (pain, tenderness, erythema). Monitor blood pressure and renal function labs. Educate on signs of DKA (nausea, abdominal pain)."
    },
    {
        g: "Empagliflozin", b: "Jardiance", c: "SGLT2 Inhibitor", cat: "dm",
        m: "Inhibits SGLT2 to increase urinary glucose excretion. It provides cardioprotective and renoprotective effects by reducing intraglomerular pressure and improving cardiac energetics. Proven to significantly reduce the risk of cardiovascular death in T2DM patients.",
        ind: "Type 2 Diabetes, symptomatic Heart Failure, and reduction of risk of sustained eGFR decline in CKD patients.",
        con: "Hypersensitivity; eGFR < 30 mL/min.",
        aec: "Genital mycotic infections, UTIs, increased urination, and joint pain.",
        aes: "Ketoacidosis, urosepsis, pyelonephritis, and severe volume depletion.",
        inter: [],
        dosage: "Oral: 10 mg to 25 mg once daily.",
        admin: "Take once daily in the morning. Consistent daily administration is required.",
        nurse: "Monitor renal labs (BUN/Cr) baseline and periodically. Check for signs of volume depletion (dizziness, hypotension). Teach patient genital hygiene to reduce yeast infection risk."
    }
];
