const data_diabetes_sensitizers = [
    {
        g: "Metformin", b: "Glucophage, Fortamet, Glumetza", c: "Biguanide (Insulin Sensitizer)", cat: "dm",
        m: "Decreases hepatic glucose production (gluconeogenesis) by inhibiting mitochondrial complex I. It also decreases intestinal absorption of glucose and increases insulin sensitivity in peripheral tissues by increasing glucose uptake and utilization. It does not stimulate insulin secretion from the pancreas, which is why it does not cause weight gain and has a minimal risk of hypoglycemia when used as monotherapy. It also has favorable effects on lipid profiles.",
        ind: "First-line pharmacological treatment for Type 2 Diabetes Mellitus in adults and children (10+ years); Polycystic Ovary Syndrome (PCOS - off-label).",
        con: "Renal impairment (eGFR < 30 mL/min/1.73m²), Metabolic acidosis (including Diabetic Ketoacidosis), acute or chronic conditions that can cause tissue hypoxia (sepsis, shock, acute MI), and hepatic impairment.",
        aec: "Gastrointestinal disturbances (nausea, vomiting, diarrhea, abdominal bloating, metallic taste) which are often transient and dose-dependent.",
        aes: "LACTIC ACIDOSIS (rare but potentially fatal; risk increases with renal impairment or hypoxia), and Vitamin B12 and folic acid deficiency (due to interference with absorption).",
        inter: [
            {d: "Iodinated Contrast", m: "Synergistic risk for acute kidney injury and subsequent lactic acidosis; MUST hold drug.", s: "critical"},
            {d: "Alcohol", m: "Potentiates the drug's effect on lactate metabolism; significant risk of lactic acidosis.", s: "high"},
            {d: "Cimetidine", m: "Competes for renal tubular secretion; increases metformin levels by 60%.", s: "med"}
        ],
        dosage: "Oral: Initial 500 mg twice daily or 850 mg once daily. Maintenance: 1500 mg to 2550 mg daily in divided doses. Max 2550 mg/day.",
        admin: "Administer orally WITH MEALS to minimize gastrointestinal side effects. For Extended-Release (XR) versions, take once daily with the evening meal. DO NOT crush or chew XR tablets.",
        nurse: "Monitor renal function (eGFR/Creatinine) at baseline and annually. HOLD Metformin for 48 hours before and after any radiologic study requiring IV contrast. Assess for B12 deficiency (anemia, peripheral neuropathy). Teach patient to report somnolence, cold skin, or hyperventilation (Lactic Acidosis signs)."
    },
    {
        g: "Pioglitazone", b: "Actos", c: "Thiazolidinedione (TZD / Glitazone)", cat: "dm",
        m: "Selectively stimulates the peroxisome proliferator-activated receptor-gamma (PPAR-gamma). This regulates the expression of insulin-responsive genes involved in glucose and lipid metabolism. It increases insulin sensitivity in muscle and adipose tissue and decreases hepatic glucose output. It requires the presence of insulin to be effective but does not stimulate its secretion.",
        ind: "Management of Type 2 Diabetes Mellitus as monotherapy or in combination with other agents.",
        con: "NYHA Class III or IV Heart Failure (Black Box: may cause or exacerbate CHF), active liver disease, and history of bladder cancer.",
        aec: "Weight gain (due to both fluid retention and fat accumulation), peripheral edema, and upper respiratory tract infection.",
        aes: "HEART FAILURE EXACERBATION (due to fluid retention), bladder cancer (long-term use), and increased risk of distal bone fractures in women.",
        inter: [
            {d: "Insulin", m: "Significantly increases the risk of severe edema and congestive heart failure.", s: "high"},
            {d: "Oral Contraceptives", m: "May decrease the efficacy of hormonal birth control.", s: "med"}
        ],
        dosage: "Oral: 15 mg to 45 mg once daily.",
        admin: "Take once daily without regard to food. Onset of therapeutic effect is slow; may take 8-12 weeks for maximum glucose reduction.",
        nurse: "Monitor for signs of fluid overload (SOB, crackles, rapid weight gain, swollen ankles). Weigh patient daily. Monitor LFTs baseline and periodically. Assess for hematuria (bladder cancer risk)."
    },
    {
        g: "Rosiglitazone", b: "Avandia", c: "Thiazolidinedione (TZD / Glitazone)", cat: "dm",
        m: "Increases insulin sensitivity in target tissues by activating PPAR-gamma receptors. Reduces glucose production in the liver and increases glucose uptake in the periphery. Similar to pioglitazone but has different cardiovascular safety considerations.",
        ind: "Management of Type 2 Diabetes Mellitus.",
        con: "NYHA Class III/IV Heart Failure, history of MI or ACS (increased risk of ischemic events).",
        aec: "Edema, headache, back pain, and fatigue.",
        aes: "Congestive Heart Failure, Myocardial Ischemia risk, and elevations in LDL cholesterol.",
        inter: [{d: "Rifampin", m: "Decreases rosiglitazone levels; risk of treatment failure.", s: "med"}],
        dosage: "Oral: 2 mg to 8 mg daily (single or divided doses).",
        admin: "Administer orally once or twice daily without regard to food.",
        nurse: "Monitor for symptoms of heart failure. Monitor lipid panels baseline and during therapy. Not recommended for patients with pre-existing heart disease."
    }
];
