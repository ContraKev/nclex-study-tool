const data_lipids_fibrates_misc = [
    {
        g: "Gemfibrozil", b: "Lopid", c: "Fibric Acid Derivative (Fibrate)", cat: "cv",
        m: "Activates the peroxisome proliferator-activated receptor-alpha (PPAR-alpha), which increases the expression of lipoprotein lipase and reduces the expression of apolipoprotein C-III (an inhibitor of lipoprotein lipase). This process dramatically enhances the lipolysis and elimination of triglyceride-rich particles from the plasma and reduces hepatic uptake of free fatty acids, thereby decreasing VLDL production. It also increases the synthesis of apolipoproteins A-I and A-II, leading to a significant rise in HDL-C levels. It is highly effective at lowering VLDL and increasing HDL.",
        ind: "Treatment of severe hypertriglyceridemia (Type IV or V hyperlipidemia) in patients at risk for pancreatitis, and reduction of coronary heart disease risk in Type IIb patients with low HDL and elevated LDL/TGs who have failed diet/exercise.",
        con: "Gallbladder disease (increased biliary cholesterol excretion), primary biliary cirrhosis, severe renal dysfunction (CrCl < 30 mL/min), and severe hepatic impairment.",
        aec: "Dyspepsia (heartburn), abdominal pain, diarrhea, nausea, fatigue, and mild decrease in hemoglobin/hematocrit.",
        aes: "Cholelithiasis (gallstones - major risk due to increased biliary cholesterol), severe myopathy and Rhabdomyolysis (especially if mixed with statins), hepatotoxicity (elevated ALT/AST), and acute renal failure.",
        inter: [
            {d: "Statins (All)", m: "Extreme risk of severe myopathy and Rhabdomyolysis; combination generally contraindicated.", s: "critical"},
            {d: "Warfarin", m: "Displaces warfarin from protein-binding sites; extreme bleeding risk and INR elevation.", s: "high"},
            {d: "Repaglinide", m: "CONTRAINDICATED; inhibits metabolism via CYP2C8 leading to severe prolonged hypoglycemia.", s: "critical"}
        ],
        dosage: "Oral: 600 mg twice daily. Total 1200 mg/day.",
        admin: "Administer orally 30 minutes BEFORE the morning and evening meals. Taking with food may reduce GI upset but can also alter absorption efficiency. Swallow tablets whole.",
        nurse: "Monitor LFTs, CBC (risk of anemia), and serum lipids baseline and periodically. Assess for signs of gallstones (RUQ pain, nausea after fatty meals). Ensure patient is not taking statins concurrently. Instruct patient to report any unexplained muscle pain."
    },
    {
        g: "Fenofibrate", b: "Tricor, Lipofen, Antara", c: "Fibric Acid Derivative (Fibrate)", cat: "cv",
        m: "Activates PPAR-alpha to increase TG catabolism and decrease hepatic TG production. More potent TG reduction and safer profile with statins compared to gemfibrozil, though risk remains elevated. Reduces VLDL and increases HDL by upregulating Apo A-I/A-II. It works by increasing the activity of lipoprotein lipase, which breaks down triglycerides in the blood.",
        ind: "Hypertriglyceridemia, mixed dyslipidemia, and primary hypercholesterolemia as an adjunct to diet.",
        con: "Severe renal disease (CrCl < 30), active liver disease, gallbladder disease, and nursing mothers.",
        aec: "Dyspepsia, nasopharyngitis, liver enzyme elevation, muscle pain, headache, and abdominal pain.",
        aes: "Gallstones (cholelithiasis), myopathy, pancreatitis, and pulmonary embolism (rarely reported).",
        inter: [
            {d: "Warfarin", m: "Increases bleeding risk and potentiates anticoagulant effect; monitor INR closely.", s: "high"},
            {d: "Bile Acid Resins", m: "Inhibit absorption of fenofibrate; separate administration by at least 2-4 hours.", s: "med"}
        ],
        dosage: "Oral: 48 mg to 145 mg once daily. Dosage depends on specific brand and micronized formulation.",
        admin: "Take once daily. Formulations like Lipofen MUST be taken with food to ensure absorption; Tricor can be taken without regard to food. Maintain consistent schedule.",
        nurse: "Monitor creatinine and LFTs baseline and periodically. Evaluate patient for myopathy symptoms (pain/weakness). Monitor for RUQ pain or jaundice."
    },
    {
        g: "Alirocumab", b: "Praluent", c: "PCSK9 Inhibitor (Monoclonal Antibody)", cat: "cv",
        m: "A fully human monoclonal antibody that binds to proprotein convertase subtilisin/kexin type 9 (PCSK9). By inhibiting PCSK9, it prevents the degradation of LDL receptors on the surface of hepatocytes. This keeps more LDL receptors active and available to clear LDL-C from the blood, resulting in dramatic and rapid LDL reduction (often >50% beyond statin therapy).",
        ind: "Refractory high LDL cholesterol in adults with clinical atherosclerotic CV disease (ASCVD) or heterozygous familial hypercholesterolemia (HeFH) requiring additional lowering.",
        con: "History of prior serious hypersensitivity to alirocumab or any of its components.",
        aec: "Injection site reactions (redness, pain, itching), flu-like symptoms (cough, sore throat), and myalgia.",
        aes: "Serious allergic reactions (rash, urticaria), vasculitis, and neurocognitive effects (rare/unconfirmed).",
        inter: [],
        dosage: "Subcutaneous: 75 mg to 150 mg every 2 weeks. Can be administered as 300 mg once every 4 weeks.",
        admin: "Subcutaneous injection in thigh, abdomen, or upper arm. Keep refrigerated. Allow to reach room temperature for 30-40 min before use. Do not shake.",
        nurse: "Teach self-injection technique. Monitor for signs of hypersensitivity. Verify that patient is also adherent to a high-intensity statin if tolerated. Monitor lipid panel at 4-8 weeks."
    },
    {
        g: "Evolocumab", b: "Repatha", c: "PCSK9 Inhibitor (Monoclonal Antibody)", cat: "cv",
        m: "Monoclonal antibody that inhibits the PCSK9 enzyme, thereby increasing the number of high-affinity LDL receptors on the liver surface. This results in enhanced uptake of LDL from the systemic circulation and significantly lowers serum LDL-C levels (often by 60% or more).",
        ind: "LDL reduction in patients with clinical CVD or familial hypercholesterolemia; prevention of myocardial infarction and stroke.",
        con: "Prior serious hypersensitivity reactions to the drug.",
        aec: "Nasopharyngitis, upper respiratory tract infection, back pain, and dizziness.",
        aes: "Injection site rash, angioedema, and serious systemic allergic reactions.",
        inter: [],
        dosage: "Subcutaneous: 140 mg every 2 weeks or 420 mg once monthly.",
        admin: "SC injection in abdomen, thigh, or arm. Rotate sites. Refrigerate and protect from light. Use within 30 days if removed from fridge.",
        nurse: "Refrigerate; do not shake. Assess for latex allergy (needle cap may contain dry natural rubber). Monitor lipid response at 4-8 weeks. Teach patient disposal of sharps."
    },
    {
        g: "Bempedoic acid", b: "Nexletol", c: "ACL Inhibitor", cat: "cv",
        m: "Inhibits adenosine triphosphate-citrate lyase (ACL), an enzyme upstream of HMG-CoA reductase in the cholesterol synthesis pathway. It is a prodrug that is activated only in the liver by a specific enzyme (very long-chain acyl-CoA synthetase 1) not found in most peripheral tissues (muscle), which reduces muscle-related side effects common with statins.",
        ind: "Hyperlipidemia in adults who require additional LDL lowering; specifically indicated for statin-intolerant patients or HeFH.",
        con: "Prior serious hypersensitivity.",
        aec: "Muscle spasms, abdominal pain, anemia, and increased liver enzymes.",
        aes: "Hyperuricemia (Gout - can worsen pre-existing gout), Tendon rupture (specifically the Achilles, higher risk if >60y or using corticosteroids).",
        inter: [
            {d: "Simvastatin/Pravastatin", m: "Increases statin plasma levels; limit simvastatin to 20mg or pravastatin to 40mg.", s: "high"}
        ],
        dosage: "Oral: 180 mg once daily.",
        admin: "Take orally once daily with or without food. Maintain consistent schedule.",
        nurse: "Monitor uric acid levels. Advise patient to report any joint pain or tendon swelling immediately. Monitor LFTs baseline."
    },
    {
        g: "Niacin", b: "Niaspan (ER), Slo-Niacin, Nicobid", c: "Vitamin B3 / Antilipemic", cat: "cv",
        m: "Inhibits the release of free fatty acids from adipose tissue and reduces the hepatic production of VLDL and TG. It also reduces the catabolism of HDL, leading to a significant increase in HDL-C levels. In high doses, it also has direct vasodilatory effects on peripheral vessels.",
        ind: "Severe Hypertriglyceridemia, mixed dyslipidemia, and reduction of recurrent MI risk (secondary prevention). Often used when TG levels exceed 500 mg/dL.",
        con: "Active peptic ulcer disease, active liver disease, and arterial bleeding.",
        aec: "INTENSE FLUSHING and itching (histamine and prostaglandin release), dyspepsia, headache, and tingling of extremities.",
        aes: "Hepatotoxicity (elevated LFTs), hyperglycemia (significant caution in diabetics), hyperuricemia (gout flare), and hypotension.",
        inter: [
            {d: "Alcohol", m: "Increases risk of flushing and potentiates liver toxicity.", s: "high"},
            {d: "Bile Acid Resins", m: "Binds niacin; separate administration by at least 4-6 hours.", s: "med"}
        ],
        dosage: "Oral: 500 mg to 2000 mg once daily at bedtime. Start low (e.g., 500mg) and titrate slowly over weeks.",
        admin: "Take Aspirin 325mg (or NSAID) 30 min before dose to reduce flushing. Take with a low-fat snack at bedtime. Do not take with hot fluids or spicy foods.",
        nurse: "Monitor BP, blood glucose (especially in diabetics), and uric acid. Assess LFTs periodically. Educate patient that flushing is common and often subsides with time."
    },
    {
        g: "Omega-3", b: "Lovaza, Vascepa, Epanova", c: "Fish Oil / Antilipemic", cat: "cv",
        m: "Reduces hepatic triglyceride synthesis by inhibiting key enzymes (like diacylglycerol acyltransferase) and increases the clearance of TG from circulating VLDL particles. Provides high concentrations of EPA and DHA to stabilize myocardial membranes.",
        ind: "Severe Hypertriglyceridemia (TGs > 500 mg/dL) as an adjunct to diet. Vascepa is used specifically for CV risk reduction.",
        con: "Hypersensitivity to fish or shellfish.",
        aec: "GI upset, fishy eructation (burps), altered taste (dysgeusia), and dyspepsia.",
        aes: "Increased bleeding risk (prolongs bleeding time), AFib or Flutter (especially in patients with established CVD).",
        inter: [{d: "Anticoagulants/NSAIDs", m: "Increased hemorrhage risk via additive antiplatelet effects.", s: "high"}],
        dosage: "Oral: 2 g to 4 g daily (Vascepa: 2g twice daily).",
        admin: "Take with food to minimize fishy taste. Swallow capsules whole; do not break, crush, or chew.",
        nurse: "Monitor for bruising or bleeding. Check for fish/shellfish allergy history. Monitor EKG for new-onset AFib in high-risk patients. Monitor TG levels."
    }
];
