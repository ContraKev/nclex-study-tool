const data_lipids_statins = [
    {
        g: "Atorvastatin", b: "Lipitor", c: "Statin (HMG-CoA Reductase Inhibitor)", cat: "cv",
        m: "Competitively inhibits 3-hydroxy-3-methylglutaryl-coenzyme A (HMG-CoA) reductase, the rate-limiting enzyme in hepatic cholesterol synthesis. By blocking this pathway, the drug reduces the concentration of cholesterol within hepatocytes. This intracellular depletion triggers a profound compensatory response: the upregulation of high-affinity LDL receptors on the hepatocyte membrane. These receptors capture circulating LDL and VLDL remnants from the plasma, significantly lowering systemic LDL-C levels. Furthermore, Atorvastatin inhibits the hepatic synthesis of VLDL and provides 'pleiotropic' benefits, including the stabilization of existing atherosclerotic plaques, improvement in endothelial function, and reduction of vascular inflammation.",
        ind: "Primary Hyperlipidemia (Type IIa and IIb), primary prevention of cardiovascular disease in asymptomatic patients with multiple risk factors (Diabetes, Hypertension, Smoking), secondary prevention of major clinical CV events (Myocardial Infarction, Stroke, Revascularization) in patients with established coronary artery disease, and treatment of elevated serum TG levels.",
        con: "Active liver disease (cirrhosis, hepatitis, persistent and unexplained transaminitis), Pregnancy (Category X - cholesterol is essential for fetal steroid synthesis and cell membrane development), Breastfeeding, and known hypersensitivity to any component of the formulation.",
        aec: "Gastrointestinal distress including dyspepsia, flatulence, and constipation; headache; dizziness; and mild, transient myalgia without significant elevation in Creatine Kinase (CK) levels.",
        aes: "RHABDOMYOLYSIS: Severe skeletal muscle breakdown leading to myoglobinuria, which can precipitate acute renal failure. HEPATOTOXICITY: Clinically significant elevations in ALT/AST (>3x upper limit). New-onset Type 2 Diabetes mellitus (dose-related). Potential for cognitive impairment or memory loss (reversible).",
        inter: [
            {d: "Grapefruit Juice", m: "Potent inhibitor of CYP3A4; results in toxic plasma concentrations of atorvastatin and extreme Rhabdomyolysis risk.", s: "critical"},
            {d: "Warfarin", m: "Potentiates the anticoagulant effect; increases the International Normalized Ratio (INR) and heightens bleeding risk.", s: "high"},
            {d: "Gemfibrozil", m: "Synergistic myopathy risk; dramatically increases the likelihood of skeletal muscle breakdown.", s: "high"},
            {d: "Clarithromycin", m: "Inhibits CYP3A4 metabolism; significantly increases statin-induced toxicity.", s: "high"}
        ],
        dosage: "Adult: 10 mg to 80 mg orally once daily. Pediatric (10-17 years): 10 mg to 20 mg once daily. Dosage is individualized based on baseline LDL levels and therapeutic goals.",
        admin: "Administer orally once daily. While it can be taken at any time, EVENING dosing is physiologically preferred as hepatic cholesterol synthesis peaks during the night. Can be taken without regard to food. Maintain a consistent daily schedule.",
        nurse: "Obtain baseline Liver Function Tests (ALT, AST) and a fasting lipid panel. Re-test LFTs if signs of liver injury appear (jaundice, RUQ pain, dark urine). If the patient reports unexplained muscle pain, tenderness, or weakness, immediately check Creatine Kinase (CK) levels and monitor renal function. Instruct the patient to strictly avoid grapefruit and its juice."
    },
    {
        g: "Simvastatin", b: "Zocor", c: "Statin (HMG-CoA Reductase Inhibitor)", cat: "cv",
        m: "Blocks the conversion of HMG-CoA to mevalonate in the liver by inhibiting HMG-CoA reductase. This action leads to an increase in the density of LDL receptors on the surface of liver cells, facilitating the clearance of LDL-C from the systemic circulation. Simvastatin has a high hepatic extraction ratio but lower lipid solubility than some other agents in its class, requiring specific metabolic activation.",
        ind: "Hypercholesterolemia, mixed dyslipidemia, and reduction of risk for total mortality by reducing coronary heart disease death and non-fatal myocardial infarction in high-risk patients.",
        con: "Active liver disease, pregnancy, breastfeeding, and concomitant use of potent CYP3A4 inhibitors (e.g., ketoconazole, protease inhibitors, erythromycin).",
        aec: "Abdominal pain, nausea, constipation, upper respiratory tract infection, headache, insomnia, and mild elevation in HbA1c.",
        aes: "Myopathy and Rhabdomyolysis (risk is notably higher at the 80mg dose), severe drug-induced hepatotoxicity, and hypersensitivity reactions.",
        inter: [
            {d: "Amiodarone", m: "Increases simvastatin concentration; do not exceed 20mg of simvastatin daily.", s: "high"},
            {d: "Verapamil/Diltiazem", m: "Limit simvastatin dose to 10mg daily to prevent toxic accumulation.", s: "high"},
            {d: "Grapefruit Juice", m: "Potent increase in drug levels via CYP3A4 inhibition; significantly heightens Rhabdo risk.", s: "critical"}
        ],
        dosage: "Adult: 5 mg to 40 mg orally once daily. The 80 mg dose is restricted to patients who have safely used the dose for >12 months without myopathy.",
        admin: "MUST be administered in the EVENING. Dosage should be titrated every 4 weeks based on patient response. Swallow tablets whole; do not crush or chew.",
        nurse: "Perform baseline LFTs and monitor periodically. Evaluate patient for muscle tenderness, specifically in the calves or back. Advise patient to limit alcohol consumption to minimize hepatic strain."
    },
    {
        g: "Rosuvastatin", b: "Crestor", c: "Statin (HMG-CoA Reductase Inhibitor)", cat: "cv",
        m: "High-potency, hydrophilic inhibitor of HMG-CoA reductase. Its long half-life (19 hours) and high hepatoselectivity allow for significant LDL reduction (up to 63%). It is not significantly metabolized by the CYP3A4 isoenzyme, instead utilizing CYP2C9, which reduces the risk of common statin-drug interactions. It works by reducing hepatic cholesterol synthesis and increasing the number of LDL receptors on the hepatocyte membrane.",
        ind: "Hyperlipidemia, mixed dyslipidemia, primary dysbetalipoproteinemia, slowing the progression of atherosclerosis, and primary prevention of cardiovascular disease in patients with multiple risk factors and elevated C-reactive protein.",
        con: "Pregnancy, active liver disease, breastfeeding, and severe renal impairment (CrCl < 30 mL/min).",
        aec: "Myalgia, headache, asthenia (weakness), nausea, abdominal pain, and constipation.",
        aes: "Rhabdomyolysis (highest risk at 40mg dose or in patients of Asian descent), proteinuria (usually transient and not indicative of progressive renal disease), and immune-mediated necrotizing myopathy.",
        inter: [
            {d: "Antacids (Al/Mg)", m: "Reduced absorption; separate administration by at least 2 hours.", s: "med"},
            {d: "Cyclosporine", m: "Extreme increase in rosuvastatin plasma levels (7-fold increase); avoid combination.", s: "critical"},
            {d: "Warfarin", m: "Increased INR and bleeding risk; monitor PT/INR closely upon initiation or dose change.", s: "high"}
        ],
        dosage: "Adult: 5 mg to 40 mg once daily. Asian patients should start at 5 mg due to significantly increased bioavailability in this population. Maximum 40mg dose avoided in many populations.",
        admin: "Can be administered at any time of day, with or without food. Swallow tablets whole. Maintain a consistent daily schedule.",
        nurse: "Check renal function (CrCl) baseline. Monitor for dark urine and unexplained muscle pain. Perform baseline LFTs and monitor if liver injury signs occur."
    },
    {
        g: "Lovastatin", b: "Mevacor, Altoprev", c: "Statin (HMG-CoA Reductase Inhibitor)", cat: "cv",
        m: "A lactone prodrug that is hydrolyzed in the liver to its active beta-hydroxyacid form. It competitively inhibits HMG-CoA reductase, the rate-limiting enzyme in cholesterol synthesis. This results in an increase in LDL receptor expression, enhancing the catabolism of LDL and VLDL remnants.",
        ind: "Primary hypercholesterolemia (Type IIa and IIb), slowing progression of coronary atherosclerosis in patients with CAD.",
        con: "Pregnancy (Category X), breastfeeding, active hepatic disease, unexplained persistent elevations of serum transaminases.",
        aec: "GI upset (cramping, diarrhea, flatulence), myalgia, dizziness, headache, skin rash, and pruritus.",
        aes: "Rhabdomyolysis with acute renal failure, severe transaminitis, blurred vision, and cataracts (rare).",
        inter: [
            {d: "Strong CYP3A4 Inhibitors", m: "Extreme increase in statin levels and Rhabdomyolysis risk.", s: "critical"},
            {d: "Amiodarone", m: "Increases risk of myopathy; do not exceed 20mg lovastatin daily.", s: "high"},
            {d: "Gemfibrozil", m: "Avoid combination; extreme risk of skeletal muscle breakdown.", s: "critical"}
        ],
        dosage: "Immediate-release: 20 mg to 80 mg/day (single or divided). Extended-release: 20 mg to 60 mg/day.",
        admin: "Immediate-release MUST be administered WITH THE EVENING MEAL to increase absorption. Extended-release (Altoprev) should be taken at bedtime.",
        nurse: "Monitor LFTs at baseline and periodically. Advise patient to report any unexplained muscle pain. Baseline and periodic eye exams recommended by some manufacturers."
    },
    {
        g: "Pravastatin", b: "Pravachol", c: "Statin (HMG-CoA Reductase Inhibitor)", cat: "cv",
        m: "Hydrophilic HMG-CoA reductase inhibitor. Unlike lipophilic statins (simvastatin/lovastatin), it does not easily cross the blood-brain barrier and is not significantly metabolized by the CYP450 system (specifically CYP3A4). This leads to a much lower potential for drug-drug interactions, as it is cleared primarily through renal and biliary excretion.",
        ind: "Hyperlipidemia, secondary prevention of MI and stroke, primary prevention in patients with high cholesterol and clinical CAD risk.",
        con: "Active liver disease, pregnancy, breastfeeding, hypersensitivity.",
        aec: "Rash, myalgia, fatigue, GI distress (nausea/vomiting), headache, dizziness.",
        aes: "Myopathy, hepatotoxicity (incidence is statistically lower than lipophilic statins).",
        inter: [{d: "Bile Acid Resins", m: "Reduced absorption; take pravastatin 1h before or 4h after resin.", s: "med"}],
        dosage: "Adult: 10 mg to 80 mg once daily. Adjust dose in significant renal or hepatic impairment.",
        admin: "Administer once daily, usually at bedtime. Can be taken without regard to food. Maintain a consistent daily schedule.",
        nurse: "Excellent choice for patients on complex drug regimens (HIV, transplant) due to lack of CYP3A4 metabolism. Monitor lipid panels for efficacy."
    },
    {
        g: "Fluvastatin", b: "Lescol, Lescol XL", c: "Statin (HMG-CoA Reductase Inhibitor)", cat: "cv",
        m: "Inhibits HMG-CoA reductase, reducing cholesterol synthesis and increasing LDL clearance. It is the first fully synthetic statin and is metabolized primarily by the CYP2C9 isoenzyme.",
        ind: "Hyperlipidemia, secondary prevention of CAD progression following PTCA.",
        con: "Liver disease, pregnancy, breastfeeding.",
        aec: "Myalgia, dyspepsia, headache, insomnia, abdominal pain.",
        aes: "Hepatotoxicity, rhabdomyolysis, hypersensitivity reactions.",
        inter: [{d: "Fluconazole", m: "Inhibits CYP2C9; increases fluvastatin levels and toxicity.", s: "med"}],
        dosage: "Oral: 20 mg to 80 mg daily. 80 mg dose is administered as XL (Extended Release).",
        admin: "Immediate release: Take in the evening. Extended-release (XL): Take at any time of day with or without food. Maintain consistent schedule.",
        nurse: "Obtain baseline LFTs and lipid profile. Monitor ALT/AST if clinical signs of liver injury occur (jaundice, dark urine). Instruct patient to take the regular formulation in the evening to match hepatic cholesterol synthesis cycles. Educate patient to report any new, unexplained muscle pain, tenderness, or weakness immediately, especially if accompanied by malaise or fever. Monitor for signs of insomnia or cognitive change."
    }
];
