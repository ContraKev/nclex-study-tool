const data_lipids_resins = [
    {
        g: "Ezetimibe", b: "Zetia", c: "Cholesterol Absorption Inhibitor", cat: "cv",
        m: "Selectively inhibits the absorption of cholesterol and related phytosterols in the small intestine. Specifically targets the Niemann-Pick C1-Like 1 (NPC1L1) protein transporter on the brush border of enterocytes. This reduces the delivery of intestinal cholesterol to the liver, leading to a depletion of hepatic cholesterol stores and a compensatory increase in LDL receptor expression on hepatocytes, which decreases serum LDL-C.",
        ind: "Primary hyperlipidemia (as monotherapy or adjunct to statins), homozygous sitosterolemia, and homozygous familial hypercholesterolemia.",
        con: "Moderate to severe hepatic impairment, pregnancy or breastfeeding (when combined with statins), and known hypersensitivity.",
        aec: "Fatigue, diarrhea, abdominal pain, arthralgia (joint pain), and sinusitis or upper respiratory tract infection.",
        aes: "Cholelithiasis (gallstones - risk increases if used with fibrates), severe myopathy/rhabdomyolysis (rare), and angioedema.",
        inter: [
            {d: "Bile Acid Resins", m: "Decreased absorption of ezetimibe; separate administration by at least 2-4 hours.", s: "med"},
            {d: "Fibrates", m: "Significant increase in risk of gallstones; monitor for RUQ pain.", s: "high"},
            {d: "Cyclosporine", m: "Increases drug levels of both agents; monitor closely.", s: "med"}
        ],
        dosage: "Oral: 10 mg once daily. No dosage adjustment needed for elderly or mild renal impairment.",
        admin: "Take once daily without regard to food. Can be co-administered with statins (except for combination tablets with different rules).",
        nurse: "Monitor LFTs at baseline when used with statins. Monitor for cholecystitis symptoms (intolerance to fatty foods, RUQ pain)."
    },
    {
        g: "Cholestyramine", b: "Questran, Prevalite", c: "Bile Acid Sequestrant (Resin)", cat: "cv",
        m: "A non-absorbable anion-exchange resin that binds with bile acids in the intestine to form an insoluble complex that is excreted in the feces. This prevents the enterohepatic reabsorption of bile acids, forcing the liver to convert more internal cholesterol into new bile acids, which dramatically lowers serum LDL levels.",
        ind: "Primary hypercholesterolemia, pruritus associated with partial biliary obstruction, and off-label for certain types of diarrhea (bile acid malabsorption).",
        con: "Complete biliary obstruction (where bile cannot reach the gut), hypersensitivity, and history of bowel obstruction.",
        aec: "Severe constipation (most common), bloating, flatulence, nausea, and abdominal distention.",
        aes: "Vitamin A, D, E, K deficiency (due to impaired fat-soluble vitamin absorption), fecal impaction, metabolic acidosis (rare), and hyperchloremia.",
        inter: [{d: "All Oral Meds", m: "Resin binds almost all oral drugs in gut; take others 1h before or 4-6h after resin.", s: "critical"}],
        dosage: "Oral: 4 g to 24 g daily, typically divided into two to four doses. Powder packets are 4 g each.",
        admin: "MUST be mixed with 2-6 oz of fluid (water, juice, soup, or milk). Do not take in dry powder form (serious aspiration/choking risk). Sips of water during day to aid digestion.",
        nurse: "Monitor for severe constipation; provide stool softeners as needed. Monitor PT/INR if on warfarin (increased risk of bleeding due to Vitamin K loss). Increase fluid and fiber intake."
    },
    {
        g: "Colesevelam", b: "Welchol", c: "Bile Acid Sequestrant", cat: "cv",
        m: "Non-absorbable polymer that binds bile acids in the intestine. Also improves glycemic control by increasing GLP-1 secretion and affecting hepatic glucose production (mechanism not fully understood). Better tolerated than older resins.",
        ind: "Primary hyperlipidemia (Type IIa), Type 2 Diabetes Mellitus glycemic control (adjunct to diet and exercise).",
        con: "Bowel obstruction, serum TG > 500 mg/dL, and history of triglyceride-induced pancreatitis.",
        aec: "Constipation, dyspepsia, nausea, abdominal pain, and pharyngitis.",
        aes: "Bowel obstruction, severe hypertriglyceridemia flare, Vitamin K deficiency (less common than cholestyramine).",
        inter: [{d: "Narrow-Index Drugs", m: "Potential for reduced absorption; separate administration by 4h.", s: "med"}],
        dosage: "Oral: 3.75 g daily (as 6 tablets once daily or 3 tablets BID, or 1 powder packet).",
        admin: "Take with meals and a full glass of liquid. Swallow tablets whole; do not crush or chew. Take powder as an oral suspension.",
        nurse: "Preferred resin due to improved GI tolerance and fewer drug-drug interactions. Monitor TG levels baseline and periodically."
    },
    {
        g: "Colestipol", b: "Colestid", c: "Bile Acid Sequestrant", cat: "cv",
        m: "Binds bile acids in the gut to prevent reabsorption into the enterohepatic circulation. Leads to increased hepatic conversion of cholesterol to bile acids and upregulation of LDL receptors.",
        ind: "Primary hypercholesterolemia.",
        con: "Biliary obstruction, hypersensitivity.",
        aec: "Constipation, flatulence, bloating, nausea, and headache.",
        aes: "Fecal impaction, esophageal obstruction (if granules are taken without adequate fluid).",
        inter: [{d: "All Oral Meds", m: "May bind other drugs; separate administration by 1h before or 4h after.", s: "high"}],
        dosage: "Tablets: 2 g to 16 g daily. Granules: 5 g to 30 g daily in single or divided doses.",
        admin: "Granules must be mixed with at least 90 mL of liquid (water, juice) or soft food (yogurt/applesauce). Do not take dry.",
        nurse: "Monitor bowel frequency and consistency; provide stool softeners as needed to prevent fecal impaction. Encourage the patient to increase daily fluid and dietary fiber intake to mitigate severe constipation. Instruct the patient to take other medications at least 1 hour before or 4-6 hours after colestipol to prevent binding and decreased absorption. Assess for signs of Vitamin A, D, E, or K deficiency with long-term use."
    }
];
