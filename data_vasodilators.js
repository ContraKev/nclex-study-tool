const data_vasodilators = [
    {
        g: "Hydralazine", b: "Apresoline", c: "Direct-Acting Vasodilator", cat: "cv",
        m: "Exerts a direct relaxing effect on the vascular smooth muscle of the precapillary arterioles, likely by inhibiting calcium release from the sarcoplasmic reticulum. It has little to no effect on the venous system. By reducing peripheral resistance, it triggers a significant compensatory reflex sympathetic response, which increases heart rate, stroke volume, and cardiac output. It also increases plasma renin activity, leading to sodium and water retention. It reduces blood pressure but its efficacy is often limited by these compensatory mechanisms unless combined with other agents.",
        ind: "Management of Moderate to Severe Hypertension (usually as part of a multi-drug regimen) and treatment of chronic Heart Failure (when combined with isosorbide dinitrate, particularly in patients intolerant to ACEIs/ARBs).",
        con: "Coronary artery disease (due to the high risk of reflex tachycardia precipitating myocardial ischemia), mitral valvular rheumatic heart disease, and known hypersensitivity.",
        aec: "Common: Headache, palpitations (reflex tachycardia), nausea, diarrhea, dizziness, and anorexia. Flushing and nasal congestion may occur.",
        aes: "REFLEX TACHYCARDIA: Potentially leading to acute myocardial infarction. SYSTEMIC LUPUS ERYTHEMATOSUS (SLE)-LIKE SYNDROME: Characterized by fever, joint pain, Butterfly rash, and nephritis; more common in slow acetylators. Peripheral neuropathy.",
        inter: [
            {d: "Beta Blockers", m: "Beneficial interaction; blocks the reflex tachycardia caused by hydralazine; essential combination.", s: "med"},
            {d: "NSAIDs", m: "Decreased antihypertensive effect due to renal prostaglandin inhibition.", s: "med"}
        ],
        dosage: "Oral: 10 mg to 50 mg four times daily. IV: 10 mg to 40 mg every 4 to 6 hours. Maximum 300 mg/day (Oral).",
        admin: "Available in Oral and IV forms. Often co-administered with a beta-blocker (to manage tachycardia) and a diuretic (to manage fluid retention). Administer at the same time each day to maintain stable control.",
        nurse: "Monitor heart rate and blood pressure frequently, especially during titration. Assess for signs of SLE syndrome (joint pain, butterfly rash on face, pleuritis). Monitor for peripheral edema and weight gain. Instruct patient to report any tingling or numbness in extremities (neuropathy)."
    },
    {
        g: "Minoxidil", b: "Loniten, Rogaine (Topical)", c: "Direct-Acting Vasodilator", cat: "cv",
        m: "A potent vasodilator that acts by opening ATP-sensitive potassium channels in arteriolar smooth muscle cells, causing hyperpolarization and profound relaxation. It is much more potent than hydralazine and has no significant effect on venous tone. It reduces peripheral vascular resistance dramatically, which leads to a massive compensatory increase in heart rate and substantial renal sodium and water retention. It is considered a last-line agent for resistant hypertension.",
        ind: "Management of severe or resistant Hypertension that is not responding to maximal doses of a diuretic and two other conventional antihypertensive agents.",
        con: "Pheochromocytoma (due to stimulation of catecholamine release) and acute Myocardial Infarction. Known hypersensitivity.",
        aec: "Common: Hypertriglyceridemia, nausea, vomiting, and headache. Dizziness and salt/water retention are very common.",
        aes: "HYPERTRICHOSIS: Excessive hair growth (face, arms, back) occurring in 80% of patients; reversible upon discontinuation. PERICARDIAL EFFUSION: Can lead to cardiac tamponade (Black Box warning). Severe reflex tachycardia.",
        inter: [],
        dosage: "Oral: 5 mg to 40 mg once daily. Max 100 mg/day for resistant hypertension. Topical used for alopecia.",
        admin: "Oral only for hypertension. Should almost ALWAYS be used concurrently with a loop diuretic (to manage severe fluid retention) and a beta-blocker (to manage extreme reflex tachycardia).",
        nurse: "Monitor weight daily and report gain > 2 lb in 24 hours. Assess for signs of pericardial effusion or cardiac tamponade (distended neck veins, muffled heart sounds, SOB). Perform baseline and periodic EKG. Warn the patient about the high likelihood of increased hair growth and reassure that it is reversible."
    },
    {
        g: "Diazoxide", b: "Hyperstat IV, Proglycem (Oral)", cat: "cv", c: "Direct-Acting Vasodilator / Glucose-Elevating Agent",
        m: "Acts directly on the smooth muscle of the peripheral arterioles to cause rapid and profound vasodilation. It also inhibits the release of insulin from the pancreatic beta cells by keeping ATP-sensitive potassium channels open, which is why the oral form is used for hypoglycemia. It does not affect veins. It causes a sharp decrease in BP which triggers marked reflex tachycardia and fluid retention.",
        ind: "IV: Emergency reduction of blood pressure in hypertensive crisis. Oral (Proglycem): Management of hypoglycemia caused by hyperinsulinism (e.g., islet cell tumor).",
        con: "Hypersensitivity to thiazides or sulfonamides; compensatory hypertension (e.g., coarctation of aorta).",
        aec: "Common: Nausea, vomiting, abdominal pain, and dizziness. Headache and palpitations.",
        aes: "SEVERE HYPERGLYCEMIA: Especially problematic in diabetic patients. Profound sodium and water retention, and ketoacidosis. Potential for cerebral or myocardial ischemia if BP drops too rapidly.",
        inter: [{d: "Warfarin", m: "Increases the anticoagulant effect; monitor INR strictly.", s: "med"}, {d: "Antihypertensives", m: "Additive hypotensive effects.", s: "high"}],
        dosage: "IV: 1 to 3 mg/kg (Max 150 mg) repeated every 5 to 15 minutes until BP is controlled. Oral: 3 to 8 mg/kg daily in divided doses.",
        admin: "IV form MUST be given as a RAPID BOLUS (under 30 seconds) into a large vein to ensure the drug reaches arteriolar sites before binding extensively to albumin. Maintain patient in a supine position during and for 1 hour after injection.",
        nurse: "Monitor blood glucose levels frequently (q1-2h) during IV therapy. Monitor for signs of fluid overload (edema, crackles). Keep patient supine after injection to prevent syncope. Monitor BP continuously during emergency IV administration."
    },
    {
        g: "Nitroprusside", b: "Nitropress, Nipride", c: "Direct-Acting Vasodilator", cat: "cv",
        m: "Immediately releases nitric oxide, which acts directly on BOTH venous and arterial smooth muscle to cause potent, immediate vasodilation. This results in a profound decrease in both preload and afterload. It is the most powerful and fastest-acting antihypertensive agent available, with an onset within seconds and an effect that disappears 1-10 minutes after stopping the infusion. It is metabolized to cyanide and then to thiocyanate.",
        ind: "Immediate reduction of blood pressure in Hypertensive Crisis (Emergency), and controlled hypotension during surgery to reduce surgical bleeding. Also used for acute heart failure to reduce afterload.",
        con: "Compensatory hypertension (e.g., AV shunt or coarctation of the aorta), and decreased cerebral perfusion. Known hypersensitivity.",
        aec: "Common: Nausea, sweating, restlessness, muscle twitching, and headache. These are often signs of too rapid a reduction in blood pressure.",
        aes: "CYANIDE TOXICITY: Characterized by metabolic acidosis, confusion, weakness, and almond-scented breath. Thiocyanate toxicity (presents as psychosis, delirium). Profound and lethal hypotension.",
        inter: [],
        dosage: "IV Infusion: 0.3 to 10 mcg/kg/min titration. Maximum infusion rate should not exceed 10 mcg/kg/min. Average maintenance dose is 3 mcg/kg/min.",
        admin: "IV ONLY via dedicated infusion pump. The IV bag and tubing MUST be protected from light (WRAP IN FOIL). The solution should be slightly brownish; discard if it is blue, green, or bright red (indicates decomposition). Monitor infusion site for extravasation.",
        nurse: "Monitor BP continuously (every 2-5 minutes) with an arterial line preferred. Stop infusion if BP drops too low. Monitor serum thiocyanate levels if infusion lasts > 48 hours. Assess for signs of cyanide poisoning (metabolic acidosis, CNS changes). Ensure antidote (sodium thiosulfate) is available."
    }
];
