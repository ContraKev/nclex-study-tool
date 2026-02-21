const data_diabetes_insulins_part1 = [
    {
        g: "Semaglutide", b: "Ozempic (SC), Wegovy (Weight), Rybelsus (Oral)", c: "GLP-1 Receptor Agonist (Incretin Mimetic)", cat: "dm",
        m: "Mimics the action of the endogenous incretin hormone glucagon-like peptide-1 (GLP-1). It binds to and activates the GLP-1 receptor, which stimulates glucose-dependent insulin secretion from the pancreas (only when BG is high), suppresses inappropriately elevated glucagon secretion, and significantly slows gastric emptying. It also acts on the arcuate nucleus of the hypothalamus to increase satiety and reduce appetite, leading to significant sustainable weight loss and improved cardiovascular outcomes. It is highly resistant to degradation by the DPP-4 enzyme, allowing for a long half-life and once-weekly administration in the injectable form.",
        ind: "Management of Type 2 Diabetes Mellitus; reduction of risk of major adverse CV events (MI, Stroke) in adults with T2DM and established CVD; chronic weight management (Wegovy).",
        con: "Personal or family history of Medullary Thyroid Carcinoma (MTC), Multiple Endocrine Neoplasia syndrome type 2 (MEN 2), and known hypersensitivity. Severe gastrointestinal disease (e.g., gastroparesis).",
        aec: "Common: Nausea (dose-dependent and usually transient), vomiting, diarrhea, abdominal pain, constipation, and local injection site reactions (redness, itching).",
        aes: "ACUTE PANCREATITIS (potentially fatal; requires immediate discontinuation), thyroid C-cell tumors (Black Box warning), diabetic retinopathy complications, and acute gallbladder disease (cholecystitis).",
        inter: [{d: "Oral Medications", m: "Delayed gastric emptying may reduce the rate and extent of absorption of concurrently administered oral drugs.", s: "med"}],
        dosage: "SC: 0.25 mg to 2 mg once weekly. Oral (Rybelsus): 3 mg to 14 mg once daily.",
        admin: "SC: Administer once weekly at any time of day. Rotate sites in abdomen, thigh, or arm. Oral (Rybelsus): MUST take on an empty stomach with no more than 4 oz of plain water at least 30 minutes before first food, beverage, or other oral medications to ensure absorption.",
        nurse: "Monitor for severe, persistent abdominal pain which may radiate to the back (pancreatitis). Perform periodic thyroid screening by palpating the neck for masses. Instruct patient on Rybelsus-specific fasting requirements. Assess for retinopathy changes before and during therapy. Monitor weight baseline and weekly."
    },
    {
        g: "Pramlintide", b: "Symlin", c: "Amylin Mimetic", cat: "dm",
        m: "A synthetic analog of human amylin, a small peptide hormone that is co-secreted with insulin by pancreatic beta cells. In patients with diabetes, amylin is either absent or deficient. Pramlintide works by three distinct mechanisms: 1. Slowing gastric emptying, which reduces the rate at which glucose enters the systemic circulation after a meal. 2. Suppressing post-prandial glucagon secretion (which is inappropriately elevated in diabetics). 3. Increasing central satiety (feeling of fullness) through hypothalamic signaling. It is used as an adjunct to insulin therapy to improve postprandial glucose control without causing weight gain. It effectively limits the rate of glucose entry into the blood, preventing the typical post-meal glycemic surge.",
        ind: "Adjunct treatment in patients with Type 1 or Type 2 Diabetes Mellitus who use prandial (mealtime) insulin and have failed to reach glucose targets despite optimal insulin therapy. It is the only non-insulin injectable drug approved for Type 1 diabetics.",
        con: "Gastroparesis (absolute contraindication due to further slowing of motility), hypoglycemia unawareness (inability to detect early warning signs), and known hypersensitivity. Use with caution in patients with recurrent hypoglycemia or poor adherence to monitoring.",
        aec: "Nausea (very common, typically occurs during initial titration and usually subsides over time), anorexia, headache, fatigue, and abdominal pain. Gastrointestinal distress is usually dose-related.",
        aes: "SEVERE HYPOGLYCEMIA (Black Box warning - typically occurs within 3 hours of injection when used with prandial insulin). Significant risk of unintentional weight loss and potentially life-threatening glucose drops if insulin doses are not adjusted correctly.",
        inter: [
            {d: "Prandial Insulin", m: "Extreme synergistic risk of severe hypoglycemia; MUST reduce mealtime insulin dose by 50% upon initiation.", s: "critical"},
            {d: "Anticholinergics", m: "Additive slowing of GI motility; high risk of severe constipation or bowel obstruction.", s: "high"},
            {d: "Oral Medications", m: "Slowed gastric emptying may delay the absorption of other oral medications; take 1h before or 2h after.", s: "med"}
        ],
        dosage: "Subcutaneous: 15 mcg to 120 mcg before each major meal (Type 1: 15-60mcg; Type 2: 60-120mcg). Titrate slowly based on tolerability.",
        admin: "SC injection immediately before major meals (>250 calories or >30g carbs). Do NOT mix in the same syringe as insulin (structural incompatibility). Rotate sites in the abdomen or thigh. If a meal is skipped, the dose MUST be skipped. Do not use if the patient is not compliant with frequent BG monitoring.",
        nurse: "Monitor blood glucose levels 3 hours after injection when peak effect occurs and the risk of hypoglycemia is highest. Ensure patient has a fast-acting glucose source available at all times. Verify that mealtime insulin dose was reduced by 50% when starting Symlin. Educate the patient that nausea is very common initially but usually subsides over several weeks of consistent use. Check for gastroparesis symptoms before therapy."
    },
    {
        g: "Glucagon", b: "GlucaGen, Gvoke, Baqsimi", c: "Hyperglycemic Agent / Pancreatic Hormone", cat: "dm",
        m: "A naturally occurring hormone produced by the alpha cells of the pancreas. It acts as a physiological antagonist to insulin. It stimulates hepatic glycogenolysis (the breakdown of stored glycogen into glucose) and gluconeogenesis (the synthesis of glucose from non-carbohydrate sources) by accelerating enzymatic processes in the liver. This causes a rapid increase in blood glucose levels within 5-15 minutes of administration. It also has a potent relaxing effect on the smooth muscle of the gastrointestinal tract and possesses positive inotropic and chronotropic effects on the heart.",
        ind: "Emergency treatment of SEVERE HYPOGLYCEMIA in patients with diabetes who are unconscious, convulsing, or otherwise unable to ingest oral glucose. Also used as a diagnostic aid during radiologic examinations of the GI tract.",
        con: "Pheochromocytoma (may cause significant catecholamine release and severe HTN), insulinoma, and hypersensitivity.",
        aec: "Nausea, vomiting (very common upon awakening), headache, and transient tachycardia. Secondary rebound hypoglycemia can occur after glycogen stores are depleted.",
        aes: "Hypersensitivity (anaphylaxis), severe hypertension (in patients with pheochromocytoma), and cardiac arrhythmias.",
        inter: [{d: "Warfarin", m: "May increase anticoagulant effect and bleeding risk; monitor INR closely.", s: "med"}],
        dosage: "IM/SC/IV: 1 mg (Adult). Nasal (Baqsimi): 3 mg in one nostril. Pediatric (<20kg): 0.5 mg.",
        admin: "Turn patient on their SIDE (lateral recumbent position) before or immediately after administration to prevent aspiration if vomiting occurs. Patient should awaken within 5 to 15 minutes. If no response after 15 mins, a second dose may be given.",
        nurse: "Monitor blood glucose response every 5-10 minutes. Once the patient is conscious and able to swallow, provide oral fast-acting carbohydrates followed by a balanced snack with protein and complex starch (e.g., milk and crackers). Teach family members/caregivers how to use the emergency kit. Monitor for rebound hypoglycemia."
    },
    {
        g: "Insulin Regular", b: "Humulin R, Novolin R", c: "Short-Acting Insulin", cat: "dm",
        m: "A recombinant human insulin that is identical to endogenous human insulin produced by the pancreas. It promotes cellular uptake of glucose by binding to insulin receptors on muscle and adipose cells. It also facilitates the storage of glucose as glycogen in the liver and inhibits hepatic glucose production. It has a slightly slower onset and longer duration than rapid-acting analogs because it forms hexamers in the subcutaneous tissue which must dissociate into monomers before being absorbed into the circulation.",
        ind: "Management of Type 1 DM, Type 2 DM, Diabetic Ketoacidosis (DKA), and Hyperkalemia (administered with IV dextrose to shift K+ into cells). Also used for gestational diabetes.",
        con: "Hypoglycemia (absolute contraindication), hypersensitivity to human insulin.",
        aec: "Weight gain (due to anabolic effects), lipohypertrophy (fatty lumps at injection site), and mild local site reactions (redness, swelling).",
        aes: "SEVERE HYPOGLYCEMIA (sudden onset: tachycardia, diaphoresis, tremors, confusion, seizures), and severe hypokalemia (shifts K+ into cells).",
        inter: [{d: "Beta Blockers", m: "Mask tachycardia and tremors of hypoglycemia; interfere with the body's ability to recover glucose levels.", s: "high"}],
        dosage: "SC/IV: Individualized based on BG monitoring and carbohydrate counting. IV Drip: 0.1 units/kg/hr for DKA management.",
        admin: "Onset: 30-60 min. Peak: 2-4 hours. Duration: 5-8 hours. Administer 30 minutes BEFORE meals. Regular insulin is the ONLY insulin formulation that can be administered intravenously. When mixing, draw up the CLEAR (Regular) insulin into the syringe FIRST before the CLOUDY (NPH).",
        nurse: "Check BG before administration. Assess for signs of hypoglycemia at the 2-4 hour peak. Always verify dose with a second RN. Rotate injection sites within one anatomical area to prevent lipodystrophy. Store vials in use at room temperature for up to 28 days."
    },
    {
        g: "Insulin Lispro", b: "Humalog, Admelog", c: "Rapid-Acting Insulin", cat: "dm",
        m: "A rapid-acting analog of human insulin where the proline at position B28 is swapped with lysine at position B29. This structural modification prevents the formation of hexamers, allowing the insulin to exist as monomers that are absorbed almost immediately from the subcutaneous site. This mimics the natural first-phase prandial insulin spike more closely than regular insulin. It facilitates rapid cellular glucose uptake and inhibits hepatic glucose output.",
        ind: "Prandial (mealtime) glycemic control in patients with Type 1 and Type 2 Diabetes Mellitus. Often used in continuous subcutaneous insulin infusion (CSII) pumps.",
        con: "Hypoglycemia and known hypersensitivity.",
        aec: "Injection site reactions (pain, redness), weight gain, and peripheral edema.",
        aes: "PROFOUND SUDDEN HYPOGLYCEMIA (onset within 15 minutes), hypokalemia, and severe systemic allergic reactions (rare).",
        inter: [{d: "Alcohol", m: "Potentiates hypoglycemic effects and masks warning signs.", s: "high"}],
        dosage: "SC: Individualized based on meal size and glucose readings. 1 unit typically covers 10-15g of carbohydrates.",
        admin: "Onset: 15 min. Peak: 1-2 hours. Duration: 3-4 hours. MUST be administered 15 minutes before or immediately after starting a meal. GIVE ONLY WHEN FOOD IS PRESENT. Do not use if the solution is cloudy or discolored.",
        nurse: "Monitor BG frequently. Ensure the patient's tray is delivered and they are ready to eat before injecting. Teach the patient that this insulin acts very quickly and has a shorter duration than regular insulin. Always rotate injection sites. Check for clear appearance."
    }
];
