const data_raas_ace = [
    {
        g: "Lisinopril", b: "Prinivil, Zestril", c: "ACE Inhibitor", cat: "cv",
        m: "Competitively inhibits the Angiotensin-Converting Enzyme (ACE), preventing the conversion of Angiotensin I to Angiotensin II, a potent vasoconstrictor. By blocking Angiotensin II, it also decreases the secretion of Aldosterone from the adrenal cortex, which promotes sodium and water excretion while retaining potassium. Furthermore, it increases levels of bradykinin, which promotes vasodilation but also triggers the characteristic dry, non-productive cough. This combined effect reduces peripheral vascular resistance (afterload) and reduces blood volume (preload).",
        ind: "Management of Hypertension (as monotherapy or in combination), Heart Failure with reduced ejection fraction (HFrEF) to reduce mortality, stabilization following acute Myocardial Infarction (to increase survival), and slowing the progression of Diabetic Nephropathy.",
        con: "Pregnancy (Black Box: fetal injury and death), history of angioedema (hereditary or induced by previous ACE-I therapy), bilateral renal artery stenosis, and concurrent use with aliskiren in patients with diabetes mellitus.",
        aec: "Persistent dry, hacking, non-productive cough (hallmark), dizziness, headache, fatigue, and orthostatic hypotension.",
        aes: "Angioedema (potentially fatal airway swelling involving face, lips, or tongue), Hyperkalemia (serum K+ > 5.0 mEq/L), first-dose hypotension (syncope risk), and acute renal failure (especially in renal artery stenosis).",
        inter: [
            {d: "Spironolactone", m: "Severe synergistic hyperkalemia risk; requires strict potassium monitoring.", s: "high"},
            {d: "NSAIDs", m: "Decreases antihypertensive effect and increases risk of acute kidney injury.", s: "med"},
            {d: "Lithium", m: "Inhibits renal clearance of lithium; significant risk of toxic lithium levels.", s: "high"}
        ],
        dosage: "Oral: Hypertension: 10 mg to 40 mg once daily. Heart Failure: 5 mg to 40 mg daily. Post-MI: 5 mg initially, then 5-10 mg daily.",
        admin: "Orally once daily at the same time each day. Monitor blood pressure for 2 to 6 hours after the first dose to detect orthostatic hypotension. Can be taken with or without food.",
        nurse: "Monitor serum Potassium and Creatinine levels strictly. Assess for signs of facial, lip, or tongue swelling (Emergency Intervention). Teach patient to avoid potassium-based salt substitutes. Notify provider if a persistent cough develops."
    },
    {
        g: "Captopril", b: "Capoten", c: "ACE Inhibitor", cat: "cv",
        m: "Competitively inhibits ACE, resulting in lower levels of Angiotensin II and Aldosterone. It was the first ACE-I developed; unlike newer agents, it has a short half-life and contains a sulfhydryl group that may contribute to certain unique side effects. It reduces systemic vascular resistance and blood volume by inhibiting the RAAS pathway and increasing vasodilatory bradykinin levels.",
        ind: "Hypertension, Heart Failure, Diabetic Nephropathy (especially Type 1), and left ventricular dysfunction following Myocardial Infarction to improve clinical outcomes.",
        con: "Pregnancy, history of ACE-I induced angioedema, and bilateral renal artery stenosis.",
        aec: "Metallic or salty taste disturbance (dysgeusia), dry cough, skin rash, and orthostatic hypotension.",
        aes: "NEUTROPENIA and Agranulocytosis (higher risk than other ACEIs; requires monitoring), proteinuria, and severe angioedema.",
        inter: [
            {d: "Food", m: "Decreases absorption by 30-40%; must be taken on an empty stomach.", s: "med"},
            {d: "Allopurinol", m: "Increased risk of hypersensitivity reactions and neutropenia.", s: "high"}
        ],
        dosage: "Oral: 25 mg to 150 mg daily, typically divided into two or three doses (BID or TID). Maximum dose 450 mg/day.",
        admin: "MUST be taken on an EMPTY STOMACH (1 hour before or 2 hours after meals) for maximum absorption. Swallow tablets whole.",
        nurse: "Monitor CBC with differential at baseline and every 2 weeks for the first 3 months of therapy (due to Neutropenia risk). Monitor renal function and serum potassium."
    },
    {
        g: "Enalapril", b: "Vasotec (Oral), Enalaprilat (IV)", c: "ACE Inhibitor", cat: "cv",
        m: "An oral prodrug that is hydrolyzed in the liver to its active metabolite, enalaprilat. It inhibits ACE to cause systemic vasodilation and decreased aldosterone-mediated fluid retention. By preventing the formation of Angiotensin II, it reduces the workload on the heart and decreases arterial pressure. It is unique as the only ACE inhibitor available in an intravenous formulation for acute management.",
        ind: "Hypertension, symptomatic heart failure, and asymptomatic left ventricular dysfunction (to prevent the clinical development of heart failure).",
        con: "Pregnancy, history of angioedema, and hypersensitivity.",
        aec: "Dry cough, dizziness, headache, hypotension, and fatigue.",
        aes: "Angioedema, severe hyperkalemia, and acute renal failure, particularly in patients with renal artery stenosis.",
        inter: [{d: "Potassium Supplements", m: "Major risk of fatal hyperkalemia; monitor K+ levels strictly.", s: "critical"}],
        dosage: "Oral: 5 mg to 40 mg daily (single or divided). IV (Enalaprilat): 1.25 mg slow push over 5 minutes every 6 hours.",
        admin: "Available in Oral and IV forms. Enalaprilat is the ONLY ACE-I for IV use. When giving IV, ensure slow administration over 5 minutes and monitor BP continuously.",
        nurse: "Assess BP and renal labs. Monitor for first-dose hypotension, particularly in patients already receiving diuretic therapy or those with volume depletion."
    },
    {
        g: "Ramipril", b: "Altace", c: "ACE Inhibitor", cat: "cv",
        m: "Long-acting, highly lipophilic ACE inhibitor with high tissue penetration. It inhibits the conversion of Angio I to Angio II, reducing vasoconstriction and aldosterone release. It provides significant cardioprotection by improving endothelial function and preventing ventricular remodeling post-MI. It effectively reduces peripheral resistance without increasing heart rate.",
        ind: "Hypertension, heart failure following MI, and reduction in the risk of MI, stroke, or cardiovascular death in patients aged 55+ with established CVD or diabetes.",
        con: "Pregnancy (Black Box: Category D/X), history of angioedema, and hypersensitivity.",
        aec: "Dry cough, orthostatic hypotension, headache, and dizziness.",
        aes: "Hyperkalemia, angioedema, renal impairment, and syncope.",
        inter: [{d: "Diuretics", m: "Potentiates severe first-dose hypotension; monitor BP closely.", s: "med"}],
        dosage: "Oral: 2.5 mg to 10 mg once daily. Maximum dose 20 mg/day.",
        admin: "Take once or twice daily. For patients with dysphagia, capsules can be opened and the contents sprinkled on applesauce or mixed with water/juice.",
        nurse: "Monitor labs (K+, Cr) and BP. Instruct patient to report any facial swelling or difficulty breathing immediately. Assess for volume status."
    },
    {
        g: "Benazepril", b: "Lotensin", c: "ACE Inhibitor", cat: "cv",
        m: "Competitively inhibits the ACE enzyme, blocking the production of Angiotensin II. This leads to reduced vasoconstriction and a decrease in the secretion of aldosterone, resulting in lowered blood pressure and reduced sodium retention. It increases plasma renin activity and decreases aldosterone levels while potentially increasing bradykinin concentrations in the lung tissue.",
        ind: "Management of Hypertension, either as monotherapy or in combination with thiazide diuretics.",
        con: "Pregnancy, history of ACE-I induced angioedema.",
        aec: "Dry, persistent cough, headache, dizziness, and somnolence.",
        aes: "Angioedema, hyperkalemia, renal dysfunction, and symptomatic hypotension.",
        inter: [{d: "Diuretics", m: "Additive hypotensive effect; risk of excessive BP drop.", s: "med"}],
        dosage: "Oral: 10 mg to 40 mg once daily. Initial dose may be lower in patients on diuretics.",
        admin: "Administer orally once daily. Maintain consistent timing to ensure stable blood levels. Can be taken with or without food.",
        nurse: "Monitor blood pressure and serum potassium levels. Assess for signs of angioedema. Advise patient to use caution when rising from a seated position."
    },
    {
        g: "Fosinopril", b: "Monopril", c: "ACE Inhibitor", cat: "cv",
        m: "Inhibits ACE to prevent Angiotensin II formation. Fosinopril is unique because it is a phosphorus-containing ACE inhibitor that is cleared by both hepatic and renal routes (dual clearance). This compensatory clearance allows for safer use in patients with mild-to-moderate renal or hepatic impairment without significant dose adjustment.",
        ind: "Hypertension and Heart Failure (as adjunct to diuretics and digitalis).",
        con: "Pregnancy, history of angioedema.",
        aec: "Dry cough, dizziness, nausea, vomiting, and fatigue.",
        aes: "Angioedema, hypotension, hyperkalemia, and liver enzyme elevation.",
        inter: [{d: "Antacids", m: "Aluminum or magnesium antacids can reduce absorption; separate by 2 hours.", s: "med"}],
        dosage: "Oral: 10 mg to 40 mg once daily. Max dose 80 mg/day.",
        admin: "Once daily. Swallow tablets whole. Can be taken without regard to food.",
        nurse: "Preferred ACE-I for patients with mild renal impairment due to dual clearance. Monitor BP and electrolytes. Assess for hepatic dysfunction signs."
    }
];
