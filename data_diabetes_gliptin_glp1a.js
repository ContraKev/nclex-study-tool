const data_diabetes_gliptin_glp1a = [
    {
        g: "Sitagliptin", b: "Januvia", c: "DPP-4 Inhibitor (Gliptin)", cat: "dm",
        m: "Inhibits the Dipeptidyl Peptidase-4 (DPP-4) enzyme, which is responsible for the rapid degradation of incretin hormones, specifically Glucagon-Like Peptide-1 (GLP-1) and Glucose-dependent Insulinotropic Polypeptide (GIP). By extending the half-life of these endogenous hormones, sitagliptin increases insulin synthesis and release from pancreatic beta cells and decreases glucagon secretion from alpha cells in a glucose-dependent manner. This results in lowered fasting and postprandial glucose levels without causing weight gain or hypoglycemia.",
        ind: "Management of Type 2 Diabetes Mellitus as monotherapy or in combination with metformin, sulfonylureas, or TZDs to achieve glycemic targets.",
        con: "History of prior serious hypersensitivity reaction to sitagliptin; use with caution in patients with a history of chronic or acute pancreatitis.",
        aec: "Upper respiratory tract infection, nasopharyngitis, headache, and gastrointestinal upset (diarrhea, nausea).",
        aes: "PANCREATITIS (potentially fatal; presents as severe, persistent abdominal pain radiating to the back), serious hypersensitivity reactions (anaphylaxis, Stevens-Johnson syndrome), and acute renal failure.",
        inter: [
            {d: "Digoxin", m: "May slightly increase the serum concentration of digoxin; monitor levels.", s: "med"},
            {d: "Insulin / Sulfonylureas", m: "Increases risk of hypoglycemia when used in combination; monitor BG.", s: "high"}
        ],
        dosage: "Oral: 100 mg once daily. Adjust to 50 mg or 25 mg in patients with moderate to severe renal impairment (eGFR < 45).",
        admin: "Take once daily without regard to food. Maintain a consistent daily schedule. Tablet must be swallowed whole.",
        nurse: "Monitor renal function (Creatinine/eGFR) baseline and annually. Assess for severe, persistent abdominal pain with or without vomiting (hallmark of pancreatitis). Educate the patient on signs of serious skin reactions (rash, blistering)."
    },
    {
        g: "Linagliptin", b: "Tradjenta", c: "DPP-4 Inhibitor (Gliptin)", cat: "dm",
        m: "Inhibits the DPP-4 enzyme to increase levels of active incretin hormones. It is highly selective for DPP-4. Uniquely among the gliptins, linagliptin is primarily excreted via the enterohepatic system (feces) rather than the kidneys, meaning no dosage adjustment is required for renal impairment, making it the preferred gliptin for CKD patients.",
        ind: "Management of Type 2 Diabetes Mellitus.",
        con: "Prior hypersensitivity; history of pancreatitis.",
        aec: "Nasopharyngitis, cough, headache, and musculoskeletal pain.",
        aes: "Acute pancreatitis, severe arthralgia (joint pain), and bullous pemphigoid (autoimmune skin blistering).",
        inter: [{d: "Rifampin", m: "Decreases linagliptin efficacy; avoid combination.", s: "med"}],
        dosage: "Oral: 5 mg once daily.",
        admin: "Take once daily with or without food. No renal or hepatic dose adjustment needed.",
        nurse: "Assess for signs of pancreatitis. Monitor for severe, disabling joint pain. Teach patient to report any new skin blisters or erosions immediately."
    },
    {
        g: "Exenatide", b: "Byetta (BID), Bydureon (Weekly)", c: "GLP-1 Receptor Agonist (Incretin Mimetic)", cat: "dm",
        m: "A synthetic analog of human GLP-1 that binds to and activates the GLP-1 receptor. It enhances glucose-dependent insulin secretion, suppresses inappropriately elevated glucagon secretion, and significantly slows gastric emptying. It also promotes satiety and weight loss by acting on the central nervous system. It is resistant to degradation by DPP-4.",
        ind: "Management of Type 2 Diabetes Mellitus as an adjunct to diet/exercise or oral agents to improve glycemic control.",
        con: "Personal or family history of medullary thyroid carcinoma (MTC), MEN 2, and severe renal impairment (CrCl < 30 mL/min).",
        aec: "Nausea (very common initially), vomiting, diarrhea, and significant WEIGHT LOSS (average 6-7 lbs).",
        aes: "ACUTE PANCREATITIS, renal failure, and thyroid C-cell tumors (Black Box warning).",
        inter: [{d: "Oral Meds", m: "Slowed gastric emptying may delay the absorption of other oral medications; separate narrow-index drugs.", s: "med"}],
        dosage: "Subcutaneous: 5 mcg to 10 mcg BID (Byetta) or 2 mg once weekly (Bydureon).",
        admin: "Byetta: Inject SC within 60 minutes BEFORE the morning and evening meals. Never inject after a meal. Bydureon: Inject SC once weekly at any time.",
        nurse: "Teach SC injection technique and rotation of sites. Monitor for severe abdominal pain. Monitor weight. Ensure patient understands the strict timing requirement for Byetta BID."
    },
    {
        g: "Dulaglutide", b: "Trulicity", c: "GLP-1 Receptor Agonist (Incretin Mimetic)", cat: "dm",
        m: "Mimics the action of GLP-1 to stimulate insulin release, inhibit glucagon, and slow gastric emptying. It is a long-acting formulation utilizing a once-weekly dosing schedule. It increases cyclic AMP in beta cells in a glucose-dependent manner.",
        ind: "Type 2 Diabetes Mellitus; reduction of major adverse CV events in T2DM patients with established CVD or multiple risk factors.",
        con: "History of MTC or MEN 2.",
        aec: "Nausea, vomiting, abdominal pain, diarrhea, and decreased appetite.",
        aes: "Thyroid tumors (Black Box warning), pancreatitis, and acute kidney injury (secondary to GI-induced dehydration).",
        inter: [],
        dosage: "Subcutaneous: 0.75 mg to 1.5 mg once weekly. Maximum dose 4.5 mg once weekly.",
        admin: "Administer SC once weekly into the abdomen, thigh, or upper arm. Rotate sites. Pen is single-use and disposable.",
        nurse: "Monitor for severe GI distress. Check renal labs if patient is persistently vomiting. Teach signs of thyroid tumors (neck mass, dysphagia, hoarseness)."
    },
    {
        g: "Liraglutide", b: "Victoza (DM), Saxenda (Weight)", c: "GLP-1 Receptor Agonist (Incretin Mimetic)", cat: "dm",
        m: "Increases glucose-dependent insulin secretion and suppresses glucagon. Slows gastric emptying and increases satiety. Provides constant GLP-1 receptor activation with a single daily dose due to its 13-hour half-life.",
        ind: "Type 2 Diabetes Mellitus; chronic weight management (Saxenda); reduction of CV risk in T2DM.",
        con: "Personal/family history of Medullary Thyroid Carcinoma (MTC) or MEN 2.",
        aec: "Nausea, diarrhea, constipation, headache, and decreased appetite.",
        aes: "Pancreatitis, gallbladder disease (cholecystitis), and renal impairment.",
        inter: [],
        dosage: "Subcutaneous: 0.6 mg to 1.8 mg once daily (Victoza); up to 3 mg daily (Saxenda).",
        admin: "Inject SC once daily at any time without regard to meals. Rotate sites.",
        nurse: "Assess for signs of pancreatitis. Monitor for gallbladder disease (RUQ pain, fatty food intolerance). Instruct on once-daily injection and storage."
    }
];
