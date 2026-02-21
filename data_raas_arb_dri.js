const data_raas_arb_dri = [
    {
        g: "Losartan", b: "Cozaar", c: "Angiotensin II Receptor Blocker (ARB)", cat: "cv",
        m: "Selectively and competitively blocks the binding of Angiotensin II to the AT1 receptor found in many tissues, including vascular smooth muscle and the adrenal gland. By preventing Angiotensin II from binding to its receptor, it blocks the potent vasoconstrictor and aldosterone-secreting effects of Angiotensin II. Unlike ACE inhibitors, ARBs do not inhibit the breakdown of bradykinin, which significantly reduces the incidence of the dry, persistent cough often associated with ACE-I therapy. This action results in a decrease in systemic vascular resistance and blood pressure.",
        ind: "Management of Hypertension (monotherapy or in combination), treatment of Diabetic Nephropathy in patients with Type 2 Diabetes and a history of hypertension (reduces the rate of progression of renal disease), and stroke prevention in patients with hypertension and left ventricular hypertrophy (LVH).",
        con: "Pregnancy (Black Box: fetal injury and death), known hypersensitivity to losartan, and concurrent use with aliskiren in patients with diabetes.",
        aec: "Dizziness, headache, fatigue, diarrhea, muscle cramps, and upper respiratory tract infection symptoms.",
        aes: "Hyperkalemia (less common than with ACEIs but still significant), renal impairment (acute kidney injury in susceptible patients), Angioedema (rare but life-threatening), and severe symptomatic hypotension.",
        inter: [
            {d: "NSAIDs/COX-2 Inhibitors", m: "Blunts the BP-lowering effect and significantly increases the risk of acute renal failure.", s: "high"},
            {d: "Fluconazole", m: "Increases plasma levels of the active metabolite of losartan by inhibiting its metabolism.", s: "med"},
            {d: "Potassium-Sparing Diuretics", m: "Additive risk of severe hyperkalemia; monitor serum K+ strictly.", s: "high"}
        ],
        dosage: "Oral: 25 mg to 100 mg daily, administered as a single dose or divided into two equal doses. Pediatric (6-16y): 0.7 mg/kg once daily up to 50 mg.",
        admin: "Administer orally once or twice daily. Can be taken with or without food. Maintain a consistent daily schedule to ensure stable plasma concentrations.",
        nurse: "Monitor blood pressure at baseline and periodically. Monitor renal function (Creatinine/eGFR) and serum potassium levels. Instruct female patients of childbearing age to use effective contraception and notify the provider immediately if pregnancy occurs."
    },
    {
        g: "Valsartan", b: "Diovan", c: "Angiotensin II Receptor Blocker (ARB)", cat: "cv",
        m: "Selectively and competitively blocks the binding of Angiotensin II to the AT1 receptor in vascular smooth muscle and the adrenal gland. This antagonizes the vasoconstrictor and aldosterone-secreting effects of Angiotensin II, leading to systemic vasodilation and increased sodium and water excretion. Valsartan has high affinity for the AT1 receptor (over 20,000 times greater than for the AT2 receptor). Like other ARBs, it does not interfere with bradykinin metabolism, making it a suitable alternative for patients who develop a cough on ACE inhibitors.",
        ind: "Hypertension (monotherapy or in combination), Heart Failure (NYHA Class II-IV) in patients who are intolerant of ACE inhibitors, and reduction of cardiovascular mortality in clinically stable patients with left ventricular failure or dysfunction following a Myocardial Infarction.",
        con: "Pregnancy (Black Box: fetal toxicity), hypersensitivity to valsartan, and concurrent use with aliskiren in patients with diabetes.",
        aec: "Headache, dizziness, fatigue, abdominal pain, and viral infections.",
        aes: "Severe hypotension (especially in volume-depleted patients), Hyperkalemia, Renal failure (especially in patients with renal artery stenosis), and rare cases of hepatotoxicity.",
        inter: [
            {d: "Cyclosporine", m: "Increases the risk of renal toxicity and hyperkalemia; avoid or monitor closely.", s: "high"},
            {d: "Lithium", m: "Increases serum lithium concentrations; risk of lithium toxicity.", s: "high"},
            {d: "NSAIDs", m: "May reduce the antihypertensive effect and worsen renal function.", s: "med"}
        ],
        dosage: "Oral: Hypertension: 80 mg to 320 mg once daily. Heart Failure: 40 mg to 160 mg twice daily. Post-MI: 20 mg to 160 mg twice daily.",
        admin: "Orally once or twice daily depending on the indication. Can be taken with or without food. Titrate dose based on patient response and tolerance.",
        nurse: "Assess blood pressure and heart rate baseline and periodically. Monitor serum potassium and renal function labs. Assess for signs of fluid volume deficit (dehydration) before starting therapy."
    },
    {
        g: "Candesartan", b: "Atacand", c: "Angiotensin II Receptor Blocker (ARB)", cat: "cv",
        m: "A potent, long-acting, selective AT1 receptor blocker. It is administered as the prodrug candesartan cilexetil, which is completely converted to the active candesartan during absorption from the GI tract. It inhibits the vasoconstrictor and aldosterone-secreting effects of Angiotensin II by blocking the binding of Angiotensin II to the AT1 receptor in many tissues. It demonstrates a very slow dissociation from the AT1 receptor, providing a prolonged antihypertensive effect.",
        ind: "Management of Hypertension in adults and children (1 to <17 years), and treatment of Heart Failure (NYHA Class II-IV and LVEF <= 40%) to reduce CV death and HF hospitalization.",
        con: "Pregnancy (Black Box: Category D/X), hypersensitivity, and concurrent use with aliskiren in diabetics.",
        aec: "Dizziness, back pain, upper respiratory tract infection, pharyngitis, and rhinitis.",
        aes: "Hyperkalemia, renal impairment (elevated BUN/Creatinine), Angioedema (rare), and symptomatic hypotension.",
        inter: [
            {d: "Potassium Supplements", m: "Severe risk of life-threatening hyperkalemia; avoid or monitor strictly.", s: "high"},
            {d: "NSAIDs", m: "Increased risk of renal dysfunction and decreased antihypertensive efficacy.", s: "med"},
            {d: "Lithium", m: "May increase lithium levels and toxicity.", s: "high"}
        ],
        dosage: "Oral: Hypertension: 8 mg to 32 mg once daily (titrated). Heart Failure: 4 mg initially, titrating up to 32 mg once daily.",
        admin: "Administer orally once daily. Swallow tablets whole with a glass of water. Maintain consistent timing each day.",
        nurse: "Monitor serum potassium and renal function. Check blood pressure frequently during titration. Instruct patient to report any swelling of the face, lips, or tongue immediately."
    },
    {
        g: "Aliskiren", b: "Tekturna", c: "Direct Renin Inhibitor (DRI)", cat: "cv",
        m: "Binds directly to the active site of the renin enzyme, inhibiting the conversion of Angiotensinogen to Angiotensin I. This effectively inhibits the entire Renin-Angiotensin-Aldosterone System (RAAS) at its very source, the rate-limiting step. This leads to a decrease in plasma renin activity and a reduction in blood pressure through vasodilation and reduced sodium/water retention.",
        ind: "Management of Hypertension, either as monotherapy or in combination with other antihypertensive agents.",
        con: "Pregnancy (Black Box: fetal injury), concurrent use with ACE inhibitors or ARBs in patients with diabetes or renal impairment (eGFR < 60 mL/min).",
        aec: "Diarrhea (dose-related), cough (rare), headache, and abdominal pain.",
        aes: "ANGIOEDEMA (potentially involving the larynx and glottis), Hyperkalemia (especially if used with other RAAS suppressants), and severe hypotension.",
        inter: [
            {d: "High-Fat Meals", m: "Substantially decreases the absorption and bioavailability of the drug (by approx 70%).", s: "high"},
            {d: "Itraconazole/Ketoconazole", m: "Strong inhibitors of P-glycoprotein; significantly increases aliskiren plasma levels.", s: "high"},
            {d: "Cyclosporine", m: "Extreme increase in aliskiren concentration; combination is contraindicated.", s: "critical"}
        ],
        dosage: "Oral: 150 mg to 300 mg once daily.",
        admin: "Take once daily at the same time each day. IMPORTANT: Avoid taking with high-fat meals as this will drastically reduce absorption. Be consistent with regard to meals.",
        nurse: "Monitor for signs of angioedema (throat or face swelling, difficulty breathing). Monitor serum potassium levels closely, especially in high-risk patients (DM, renal impairment). Instruct patient to stop medication and contact provider immediately if pregnancy is suspected."
    }
];
