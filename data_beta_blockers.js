const data_beta_blockers = [
    {
        g: "Metoprolol", b: "Lopressor (Tartrate), Toprol XL (Succinate)", c: "Beta-1 Selective Adrenergic Blocker", cat: "cv",
        m: "Selectively blocks Beta-1 adrenergic receptors primarily located in the heart tissue. At therapeutic doses, it has little to no effect on the Beta-2 receptors in the lungs or liver. This blockade reduces heart rate (negative chronotropy), reduces cardiac output, and decreases myocardial oxygen demand by lowering contractility (negative inotropy). It also inhibits the release of renin from the kidneys, further contributing to its long-term antihypertensive effect. High doses may lose selectivity and partially block Beta-2 receptors, which could potentially cause bronchoconstriction.",
        ind: "Management of Hypertension, Angina Pectoris, Heart Failure (NYHA Class II-III, once stabilized), and post-Myocardial Infarction to reduce long-term cardiovascular mortality and prevent ventricular remodeling.",
        con: "Sinus bradycardia (HR < 45 bpm), 2nd or 3rd degree heart block, cardiogenic shock, and overt (acute decompensated) heart failure. Known hypersensitivity to the drug or other beta-blockers.",
        aec: "Common: Fatigue, dizziness, depression, erectile dysfunction (impotence), nausea, diarrhea, and cold extremities.",
        aes: "SEVERE BRADYCARDIA, heart block, worsening acute heart failure, and masking the sympathetic signs of hypoglycemia (tachycardia). Abrupt withdrawal can cause rebound hypertension, angina, or MI.",
        inter: [
            {d: "Insulin / Oral Hypoglycemics", m: "Masks common sympathetic signs of low blood sugar (tachycardia, tremors); monitor BG strictly.", s: "high"},
            {d: "CCBs (Verapamil / Diltiazem)", m: "Additive suppression of SA/AV node and contractility; significant risk of severe HF and heart block.", s: "high"},
            {d: "Digoxin", m: "Additive slowing of AV node conduction; monitor for bradycardia.", s: "med"}
        ],
        dosage: "Oral: 25 mg to 200 mg daily. IV: 5 mg bolus q2min (up to 3 doses) during acute MI management. Succinate is once daily; Tartrate is BID.",
        admin: "Oral and IV routes. Tartrate (Lopressor) is immediate-release and MUST be taken WITH or immediately following food to increase bioavailability. Succinate (Toprol XL) is extended-release and can be taken without food. Do not crush XL.",
        nurse: "Check Apical Pulse and BP before administration; HOLD if HR < 60 or SBP < 90. Do NOT stop medication abruptly (risk of rebound HTN, Angina, or MI). Monitor BG closely in diabetics as it masks hypoglycemia. Assess for signs of worsening heart failure including crackles and peripheral edema."
    },
    {
        g: "Atenolol", b: "Tenormin", c: "Beta-1 Selective Adrenergic Blocker", cat: "cv",
        m: "Competitively blocks Beta-1 receptors in heart muscle, reducing heart rate and myocardial contractility. It is significantly more hydrophilic than metoprolol or propranolol, resulting in extremely low lipid solubility. This minimizes penetration across the blood-brain barrier and potentially reduces the incidence of CNS side effects like vivid dreams, nightmares, and insomnia. It is not metabolized by the liver and is excreted almost entirely unchanged by the kidneys, providing a predictable action profile.",
        ind: "Management of Hypertension, Chronic Stable Angina Pectoris, and secondary prevention of MI to reduce cardiovascular mortality. Also used off-label for alcohol withdrawal.",
        con: "Sinus bradycardia, 2nd or 3rd degree heart block, cardiogenic shock, and uncompensated heart failure. Hypersensitivity.",
        aec: "Common: Fatigue, cold extremities (due to reduced peripheral blood flow), dizziness, GI upset, and hypotension.",
        aes: "Severe symptomatic bradycardia, AV node block, and bronchospasm (at high doses where B1 selectivity is lost). Rebound tachycardia upon sudden cessation.",
        inter: [
            {d: "NSAIDs", m: "May decrease the antihypertensive effect of atenolol via prostaglandin inhibition.", s: "med"},
            {d: "Calcium Channel Blockers", m: "Additive effect on slowing the heart rate.", s: "high"}
        ],
        dosage: "Oral: 25 mg to 100 mg once daily. IV: 5 mg slow injection over 5 minutes for acute management of arrhythmias.",
        admin: "Oral and IV routes. Dose adjustment is essential in patients with significant renal impairment (CrCl < 35 mL/min) as the drug is not metabolized. Take at the same time each day.",
        nurse: "Check apical pulse and BP before every dose. Monitor renal function (BUN/Creatinine). Instruct patient to rise slowly from a sitting position to avoid orthostatic hypotension. Educate the patient not to skip doses. Monitor for signs of respiratory distress if the patient has a history of mild asthma."
    },
    {
        g: "Propranolol", b: "Inderal, Hemangeol, Innopran XL", c: "Non-Selective Beta-Adrenergic Blocker", cat: "cv",
        m: "Competitively and non-selectively blocks both Beta-1 (heart) and Beta-2 (lungs, liver, peripheral vessels) adrenergic receptors. This results in decreased heart rate, reduced myocardial contractility, and lowered blood pressure. It also induces bronchoconstriction by blocking B2 receptors in the lungs and inhibits glycogenolysis in the liver, which can both precipitate hypoglycemia and mask its sympathetic symptoms. It is highly lipid-soluble and readily crosses the blood-brain barrier.",
        ind: "Hypertension, Angina Pectoris, cardiac dysrhythmias, Migraine prophylaxis, Essential Tremor, and off-label for Stage Fright or performance anxiety. Also used for pheochromocytoma.",
        con: "BRONCHIAL ASTHMA, COPD, Bradycardia, Heart Block > 1st degree, and uncompensated Heart Failure. Known hypersensitivity.",
        aec: "Common: Fatigue, dizziness, vivid dreams, insomnia (due to high lipid solubility), and cold extremities. Nausea and vomiting.",
        aes: "BRONCHOSPASM: Life-threatening in patients with respiratory disease. Severe bradycardia, agranulocytosis, and anaphylaxis. Hypoglycemia unawareness.",
        inter: [
            {d: "Albuterol (Beta-2 Agonists)", m: "Antagonizes and blocks the effect of the rescue inhaler (Beta-2 blockade); lethal combo in asthma.", s: "critical"},
            {d: "Insulin", m: "Prolongs hypoglycemia and masks compensatory tachycardia and tremors.", s: "high"}
        ],
        dosage: "Oral: 40 mg to 320 mg daily in divided doses. IV: 1 mg to 3 mg slow push (not to exceed 1 mg/min). Max 640 mg/day.",
        admin: "Oral and IV routes. Absolute contraindication in patients with reactive airway disease (Asthma/COPD). Assess respiratory status before every dose. For IV use, monitor EKG and BP continuously. Do not stop abruptly.",
        nurse: "Auscultate lung sounds baseline and periodically for wheezing. Check HR and BP. HOLD if wheezing or HR < 60 bpm. Teach patient that this drug may cause sleep disturbances. Monitor blood glucose closely in diabetic patients. Advise patient to carry a medical ID card."
    },
    {
        g: "Nadolol", b: "Corgard", c: "Non-selective Beta Blocker", cat: "cv",
        m: "Competitively blocks both Beta-1 and Beta-2 receptors. Like atenolol, it is highly hydrophilic and has a very low lipid solubility, resulting in negligible CNS penetration. It is not metabolized by the liver and is excreted unchanged by the kidneys. It possesses a very long half-life (20-24 hours), which allows for once-daily dosing. It reduces cardiac output and decreases both systolic and diastolic blood pressure. It also reduces heart rate and myocardial contractility.",
        ind: "Management of Hypertension and long-term treatment of Angina Pectoris. Sometimes used for portal hypertension.",
        con: "Bronchial asthma, overt heart failure, cardiogenic shock, 2nd/3rd degree heart block, and severe bradycardia.",
        aec: "Common: Fatigue, dizziness, bradycardia, cold extremities, and gastrointestinal upset.",
        aes: "Bronchospasm, severe bradycardia, and progression of renal impairment. Rebound symptoms if stopped suddenly.",
        inter: [{d: "NSAIDs", m: "Decreases antihypertensive efficacy.", s: "med"}],
        dosage: "Oral: 40 mg to 240 mg once daily. Adjust based on renal function.",
        admin: "Take once daily without regard to food. Dosage reduction is mandatory in patients with renal failure based on creatinine clearance (CrCl). Swallow tablets whole.",
        nurse: "Auscultate lung sounds baseline and periodically for wheezing (Beta-2 blockade). Check heart rate and blood pressure before administration; HOLD if HR < 60 bpm. Monitor BUN and Creatinine as the drug is renally excreted. Educate patient that this medication is long-acting and must be taken exactly as prescribed to maintain stable levels."
    },
    {
        g: "Carvedilol", b: "Coreg, Coreg CR", c: "Alpha/Beta-Adrenergic Blocker", cat: "cv",
        m: "A non-selective beta blocker (B1, B2) that also possesses Alpha-1 receptor blocking activity. This results in peripheral vasodilation (via alpha blockade) and heart rate/contractility reduction (via beta blockade). It also possesses antioxidant properties and prevents the growth of vascular smooth muscle. This combined mechanism reduces the workload on the heart more effectively than pure beta blockers, particularly in heart failure, by decreasing afterload and preventing cardiac remodeling.",
        ind: "Heart Failure (HFrEF), Hypertension, and Left ventricular dysfunction following a Myocardial Infarction to increase survival rates.",
        con: "Severe chronic heart failure (decompensated), asthma, severe hepatic impairment, 2nd/3rd degree heart block, and severe bradycardia.",
        aec: "Common: Dizziness, fatigue, weight gain, diarrhea, and hyperglycemia. Postural hypotension.",
        aes: "Severe bradycardia, postural hypotension (syncope), worsening HF (if initiated too aggressively), and Stevens-Johnson syndrome (rare). Hypoglycemia masking.",
        inter: [
            {d: "Digoxin", m: "Increases digoxin plasma levels by 15%; monitor for toxicity.", s: "med"},
            {d: "Insulin", m: "Increases risk of hypoglycemia and masks symptoms.", s: "high"}
        ],
        dosage: "Oral: 3.125 mg to 50 mg twice daily. Extended release (CR): 10 mg to 80 mg once daily.",
        admin: "Oral only. MUST TAKE WITH FOOD to slow the rate of absorption and minimize the risk of severe orthostatic hypotension. Taper slowly over 1-2 weeks when discontinuing.",
        nurse: "Monitor blood pressure and heart rate. Weigh patient daily and report a weight gain of > 2 lb in 24 hours or 5 lb in a week (signs of worsening heart failure). Assess for signs of fluid overload including new crackles or peripheral edema. Inform diabetic patients that carvedilol may increase blood glucose levels and mask symptoms of hypoglycemia."
    },
    {
        g: "Labetalol", b: "Trandate", c: "Alpha/Beta-Adrenergic Blocker", cat: "cv",
        m: "Competitively blocks alpha-1, beta-1, and beta-2 receptors. By blocking alpha-1 receptors, it reduces blood pressure by decreasing peripheral vascular resistance. By blocking beta receptors, it protects the heart from reflex tachycardia that typically occurs with pure vasodilators. This balanced action makes it highly effective for rapid blood pressure control without significantly reducing cardiac output in most patients.",
        ind: "Hypertensive Crisis/Emergency (IV), and chronic Hypertension (Oral). Also used for blood pressure control in pregnancy (preeclampsia).",
        con: "Asthma, overt heart failure, cardiogenic shock, severe bradycardia, and heart block greater than 1st degree.",
        aec: "Common: Dizziness, nausea, scalp tingling (unique sensation during initiation), and orthostatic hypotension.",
        aes: "Severe bradycardia, drug-induced hepatotoxicity, and bronchospasm. Risk of syncope with initial IV doses.",
        inter: [{d: "Beta Agonists", m: "Mutual antagonism of effects.", s: "high"}],
        dosage: "Oral: 100 mg to 400 mg twice daily. IV: 20 mg slow bolus over 2 min; may repeat 40-80 mg q10min up to 300 mg total.",
        admin: "Oral and IV routes. Keep patient SUPINE during and for at least 3 hours after IV administration to prevent syncope and serious orthostatic drops. Monitor BP continuously during IV push.",
        nurse: "Monitor blood pressure and heart rate every 5 minutes during IV bolus administration. Perform baseline and periodic LFTs. Teach patient to rise very slowly from a sitting or lying position. Advise patient that a transient 'scalp tingling' sensation is a common and harmless side effect of initiation. Monitor for wheezing."
    }
];
