const data_diabetes_secretagogues = [
    {
        g: "Glipizide", b: "Glucotrol, Glucotrol XL", c: "Sulfonylurea (Second Generation)", cat: "dm",
        m: "Potently stimulates the release of insulin from the pancreatic beta cells by binding to and closing ATP-sensitive potassium channels on the cell membrane. This action triggers a sequence of events including cell depolarization, opening of voltage-gated calcium channels, and a subsequent influx of calcium ions that facilitates the exocytosis of insulin-containing secretory granules into the bloodstream. Beyond its primary pancreatic effect, it also increases the sensitivity of peripheral insulin receptors at target tissues like muscle and fat, enhancing glucose uptake. It requires functional pancreatic beta cells to be effective and is therefore useless in Type 1 Diabetes.",
        ind: "Management of Type 2 Diabetes Mellitus as an adjunct to diet and exercise to improve glycemic control. Often used when metformin is contraindicated or insufficient as monotherapy.",
        con: "Type 1 Diabetes Mellitus (absolute contraindication), Diabetic Ketoacidosis (DKA), hypersensitivity to sulfonamides (potential cross-reactivity), and pregnancy at term.",
        aec: "Common: Gastrointestinal upset (nausea, dyspepsia), weight gain (due to the anabolic effects of increased insulin), dizziness, and headache. Dermatologic: Photosensitivity and rash.",
        aes: "SEVERE HYPOGLYCEMIA: Can be profound, prolonged, and life-threatening, especially if a meal is missed. DISULFIRAM-LIKE REACTION: Intense nausea, vomiting, flushing, and palpitations when consumed with alcohol. Rare: Hematologic reactions such as hemolytic anemia or thrombocytopenia.",
        inter: [
            {d: "Alcohol", m: "Increases risk of profound hypoglycemia and triggers a severe disulfiram-like reaction.", s: "high"},
            {d: "Beta Blockers", m: "Masks common sympathetic signs of hypoglycemia (specifically tachycardia and tremors), delaying recognition of crisis.", s: "high"},
            {d: "NSAIDs / Warfarin", m: "Potentiates hypoglycemic effect by displacing the drug from protein-binding sites; monitor BG strictly.", s: "med"}
        ],
        dosage: "Oral: Immediate-release: 2.5 mg to 20 mg daily (doses > 15 mg should be divided BID). Extended-release (XL): 5 mg to 20 mg once daily.",
        admin: "Administer orally 30 minutes BEFORE breakfast or the first main meal of the day to ensure drug levels peak when food is absorbed. If a meal is skipped, the dose MUST be skipped to prevent acute hypoglycemia.",
        nurse: "Monitor blood glucose levels frequently, especially during initiation or dose changes. Ensure the patient always carries a fast-acting source of carbohydrate (glucose tabs). Educate on the necessity of regular, consistent meal timing. Assess for history of sulfa allergy before starting therapy. Monitor weight baseline and periodically."
    },
    {
        g: "Glyburide", b: "DiaBeta, Glynase PresTab", c: "Sulfonylurea (Second Generation)", cat: "dm",
        m: "Exerts a potent stimulatory effect on pancreatic beta cells to release insulin by inhibiting ATP-sensitive potassium channels. It has a significantly longer duration of action and a more prolonged hypoglycemic effect than glipizide. It is metabolized by the liver into several active metabolites that are excreted by both the liver and kidneys. This dual clearance pathway means that any degree of renal impairment significantly increases the risk of drug accumulation and subsequent fatal hypoglycemia.",
        ind: "Management of Type 2 Diabetes Mellitus.",
        con: "Type 1 Diabetes, DKA, and severe renal or hepatic impairment. Use with extreme caution in the elderly due to prolonged half-life.",
        aec: "Weight gain, nausea, epigastric fullness, heartburn, and skin rash.",
        aes: "SEVERE AND PROLONGED HYPOGLYCEMIA: High risk in the elderly and patients with renal dysfunction. Cholestatic jaundice and hepatotoxicity (rare).",
        inter: [
            {d: "Alcohol", m: "Increases hypoglycemia risk and triggers a disulfiram-like reaction.", s: "high"},
            {d: "Ciprofloxacin", m: "Potentiates the hypoglycemic effect of glyburide.", s: "med"}
        ],
        dosage: "Oral: 1.25 mg to 20 mg daily. Dosage above 10 mg should be divided into BID dosing for more stable control.",
        admin: "Take orally once daily with breakfast or the first main meal. Do not skip meals after taking. For Glynase (micronized form), follow specific dosing instructions as it is not bioequivalent to DiaBeta.",
        nurse: "Monitor renal function (BUN/Creatinine) baseline and periodically. Accumulation in renal failure can cause severe, refractory hypoglycemia. Teach patient to report signs of jaundice (yellow skin/eyes) or dark urine immediately. Not recommended for patients over 65 years of age."
    },
    {
        g: "Glimepiride", b: "Amaryl", c: "Sulfonylurea (Second Generation)", cat: "dm",
        m: "Stimulates the release of insulin from the pancreatic beta cells. It demonstrates a more rapid onset and longer duration of action than older sulfonylureas. It binds to a different site on the ATP-sensitive potassium channel than glipizide, which may result in a lower risk of hypoglycemia during exercise. It also demonstrates extra-pancreatic effects by increasing the sensitivity of peripheral tissues to insulin.",
        ind: "Management of Type 2 Diabetes Mellitus as an adjunct to diet and exercise.",
        con: "Sulfa allergy, DKA, and Type 1 Diabetes Mellitus.",
        aec: "Nausea, dizziness, headache, and accidental injury (due to dizziness).",
        aes: "Severe Hypoglycemia, hemolytic anemia, and thrombocytopenia. Potential for serious hypersensitivity reactions.",
        inter: [
            {d: "Alcohol", m: "Disulfiram-like reaction and increased risk of low blood sugar.", s: "high"},
            {d: "Fluconazole", m: "Inhibits metabolism; significant risk of toxic accumulation and hypoglycemia.", s: "high"}
        ],
        dosage: "Oral: 1 mg to 8 mg once daily. Maximum dose is 8 mg/day.",
        admin: "Take once daily with breakfast or the first main meal. Maintain consistent daily timing. Do not take if not eating a full meal.",
        nurse: "Monitor blood glucose baseline and periodically. Check CBC for signs of blood dyscrasias (unusual bleeding/bruising). Educate the patient on photosensitivity precautions and the use of sunscreen."
    },
    {
        g: "Chlorpropamide", b: "Diabinese", c: "Sulfonylurea (First Generation)", cat: "dm",
        m: "Stimulates insulin release from the pancreas. It is characterized by an extremely long half-life (up to 36-48 hours) and long duration of action. It is metabolized in the liver and excreted primarily in the urine. Due to its long duration, it carries a very high risk of cumulative toxicity and prolonged hypoglycemia, especially in the elderly.",
        ind: "Management of Type 2 Diabetes Mellitus (rarely used in modern practice due to safer second-generation alternatives).",
        con: "Renal impairment, elderly patients (BEERS list drug), liver disease, and hypersensitivity to sulfonylureas.",
        aec: "GI upset, dizziness, and headache.",
        aes: "PROLONGED HYPOGLYCEMIA (can last for days after stopping), severe disulfiram-like reaction with alcohol, and SIADH (causing water retention and dilutional hyponatremia).",
        inter: [{d: "Alcohol", m: "Severe flushing and hypotension (disulfiram reaction).", s: "high"}],
        dosage: "Oral: 100 mg to 500 mg once daily. Max 750 mg/day.",
        admin: "Take daily with food. Avoid in the elderly. Monitor sodium levels if the patient appears confused or lethargic.",
        nurse: "Monitor for signs of fluid retention (edema, weight gain). Monitor serum sodium levels (SIADH risk). Educate the patient to avoid alcohol completely while on this drug and for 48 hours after stopping."
    },
    {
        g: "Tolazamide", b: "Tolinase", c: "Sulfonylurea (First Generation)", cat: "dm",
        m: "Stimulates the secretion of insulin from pancreatic beta cells. It is moderately long-acting and is metabolized to several mildly active metabolites. It decreases hepatic glucose production and increases insulin receptor sensitivity in the periphery.",
        ind: "Management of Type 2 Diabetes Mellitus.",
        con: "Diabetic Ketoacidosis, severe hepatic or renal dysfunction, and hypersensitivity.",
        aec: "Nausea, heartburn, and epigastric distress.",
        aes: "Hypoglycemia and cholestatic jaundice.",
        inter: [],
        dosage: "Oral: 100 mg to 1000 mg daily. Doses greater than 500 mg should be divided into BID dosing.",
        admin: "Take with the first meal of the day. If taking BID, take with breakfast and dinner.",
        nurse: "Monitor for signs of hypoglycemia. Check LFTs periodically. Assess for history of sulfa allergy."
    },
    {
        g: "Repaglinide", b: "Prandin", c: "Meglitinide / Glinide (Insulin Secretagogue)", cat: "dm",
        m: "Stimulates pancreatic insulin release by closing ATP-sensitive potassium channels in the beta cell membrane, leading to depolarization and calcium-mediated insulin exocytosis. It has a much faster onset and shorter duration of action (4-6 hours) than sulfonylureas, providing targeted control of post-prandial glucose spikes. It mimics the normal physiological prandial insulin response and requires the presence of glucose to be most effective.",
        ind: "Management of Type 2 Diabetes Mellitus, specifically indicated for the control of post-prandial glucose levels.",
        con: "Type 1 Diabetes, Diabetic Ketoacidosis, and concurrent use of gemfibrozil.",
        aec: "Upper respiratory tract infection, headache, diarrhea, and back pain.",
        aes: "SEVERE HYPOGLYCEMIA (especially if the meal is delayed or skipped) and serious hypersensitivity reactions.",
        inter: [
            {d: "Gemfibrozil", m: "Strongly inhibits CYP2C8 metabolism; leads to an 8-fold increase in drug levels and FATAL hypoglycemia. COMBINATION CONTRAINDICATED.", s: "critical"},
            {d: "Clarithromycin", m: "Inhibits metabolism and increases drug levels and hypoglycemia risk.", s: "high"}
        ],
        dosage: "Oral: 0.5 mg to 4 mg administered before each meal. Maximum 16 mg/day.",
        admin: "MUST take 15 to 30 minutes BEFORE each major meal. If a meal is skipped, the dose MUST be skipped. If a meal is added, a dose MUST be added. NO MEAL = NO DOSE.",
        nurse: "Ideal for patients with erratic eating schedules. Monitor for signs of hypoglycemia immediately following meals. Ensure the patient understands the 'No Meal, No Dose' rule to avoid crisis. Monitor HbA1c."
    },
    {
        g: "Nateglinide", b: "Starlix", c: "Meglitinide / Glinide (Insulin Secretagogue)", cat: "dm",
        m: "Rapidly and transiently restores early insulin secretion in response to a meal. It has a very rapid onset and a shorter duration than repaglinide, specifically targeting the first-phase insulin response. It decreases postprandial glucose spikes by stimulating the pancreas immediately after ingestion.",
        ind: "Management of Type 2 Diabetes Mellitus as an adjunct to diet and exercise.",
        con: "Type 1 Diabetes, DKA, and known hypersensitivity.",
        aec: "Dizziness, flu-like symptoms, accidental trauma, and upper respiratory infection.",
        aes: "Hypoglycemia (less risk than sulfonylureas but still present).",
        inter: [],
        dosage: "Oral: 60 mg to 120 mg three times daily before meals.",
        admin: "Administer 1 to 30 minutes before each main meal. Do NOT take the dose if you are skipping the meal.",
        nurse: "Monitor postprandial blood glucose levels. Teach the patient that this drug only works effectively if taken immediately before eating. Assess for dizziness."
    }
];
