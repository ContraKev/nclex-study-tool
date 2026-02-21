const data_ccb = [
    {
        g: "Amlodipine", b: "Norvasc", c: "Calcium Channel Blocker (Dihydropyridine)", cat: "cv",
        m: "Selectively inhibits the transmembrane influx of calcium ions into vascular smooth muscle cells and cardiac muscle cells. It is significantly more selective for vascular smooth muscle than for myocardial tissue (approx. 80:1 ratio), leading to potent peripheral vasodilation and a reduction in systemic vascular resistance (afterload). This lowers blood pressure and decreases myocardial oxygen demand without significantly affecting heart rate, SA node, or AV conduction at therapeutic doses. It also increases blood flow to the heart muscle through coronary vasodilation and is effective in preventing coronary artery spasm.",
        ind: "Management of Hypertension (as monotherapy or in combination), Chronic Stable Angina Pectoris, and Vasospastic (Prinzmetal's or Variant) Angina.",
        con: "Known hypersensitivity to amlodipine or other dihydropyridines, severe hypotension (SBP < 90), and cardiogenic shock.",
        aec: "Common: Peripheral edema (dependent edema of ankles and feet - dose-related), flushing, headache, dizziness, and palpitations. Nausea and fatigue.",
        aes: "Severe symptomatic hypotension, worsening of angina or acute Myocardial Infarction (paradoxical response especially upon initiation or dose increase), and GINGIVAL HYPERPLASIA (rare but clinically significant gum overgrowth).",
        inter: [
            {d: "Simvastatin", m: "Inhibits simvastatin metabolism; increases risk of myopathy. Limit simvastatin dose to 20 mg daily.", s: "high"},
            {d: "CYP3A4 Inhibitors", m: "Increases amlodipine concentration and the subsequent risk of profound hypotension.", s: "med"}
        ],
        dosage: "Oral: 2.5 mg to 10 mg once daily. Maximum dose is 10 mg/day. Pediatric (6-17y): 2.5-5 mg once daily.",
        admin: "Administered orally once daily. Can be taken with or without food. Maintain consistent daily timing to ensure stable plasma levels. If a dose is missed for more than 12 hours, skip and take next scheduled dose; do not double.",
        nurse: "Check blood pressure before administration. Assess for peripheral edema (shoes may feel tight by the end of the day). Advise meticulous oral hygiene and regular dental visits to prevent gingival hyperplasia. Monitor for increased frequency of angina during start of therapy. Teach patient to report any swelling of the face or tongue (rare angioedema)."
    },
    {
        g: "Nifedipine", b: "Procardia, Adalat CC", c: "Calcium Channel Blocker (Dihydropyridine)", cat: "cv",
        m: "Inhibits the influx of calcium ions across the cell membrane of vascular smooth muscle. It produces potent coronary and peripheral vasodilation. Unlike non-dihydropyridines, it has minimal effect on the SA and AV nodes at clinical doses, making it useful for blood pressure control but often triggering a compensatory sympathetic (reflex) response. The rapid drop in blood pressure caused by immediate-release forms triggers reflex tachycardia and increases myocardial oxygen demand, which is why long-acting forms are preferred for hypertension.",
        ind: "Hypertension (Extended Release formulations ONLY), Chronic Stable Angina, and Vasospastic (Prinzmetal's) Angina. Off-label for Raynaud's and preterm labor.",
        con: "Hypersensitivity, ST-elevation MI (STEMI), and concurrent use of strong CYP3A4 inducers (e.g., Rifampin) which drastically reduce drug levels. Cardiogenic shock.",
        aec: "Common: Facial flushing, headache, dizziness, peripheral edema, nausea, and palpitations.",
        aes: "REFLEX TACHYCARDIA: Especially with immediate-release forms. Severe hypotension, heart failure exacerbation, and rare hepatotoxicity. Potential for profound syncope.",
        inter: [
            {d: "Grapefruit Juice", m: "Inhibits metabolism; significant increase in drug levels and risk of severe hypotensive crisis.", s: "critical"},
            {d: "Beta Blockers", m: "May be used to prevent reflex tachycardia but increases risk of symptomatic hypotension.", s: "med"}
        ],
        dosage: "Extended Release (ER/XL): 30 mg to 90 mg once daily. Immediate Release (IR): 10 mg to 20 mg TID. Max 120-180 mg/day depending on form.",
        admin: "Do NOT crush, chew, or break Extended Release (ER/CC/XL) tablets. The immediate-release capsule is NOT for hypertensive crisis (SL route) due to fatal BP drops and MI risk. Administer at consistent times.",
        nurse: "Monitor heart rate for reflex tachycardia. Ensure the patient is using the long-acting formulation for chronic HTN management. Monitor for pedal edema. Teach patient to swallow whole. Assess for signs of GI obstruction in patients with pre-existing severe narrowing of the GI tract (related to the ghost pill shell)."
    },
    {
        g: "Felodipine", b: "Plendil", c: "Calcium Channel Blocker (Dihydropyridine)", cat: "cv",
        m: "Highly vascular-selective calcium channel blocker that prevents the entry of calcium into smooth muscle cells. This results in significant peripheral vasodilation and a reduction in systemic vascular resistance (afterload) with minimal effects on the cardiac conduction system. It has a higher affinity for vascular smooth muscle than for cardiac muscle, making it a potent antihypertensive agent with minimal negative inotropic effects at therapeutic doses.",
        ind: "Management of Hypertension, often used as part of a combination regimen with other antihypertensive agents.",
        con: "Severe hypotension, cardiogenic shock, and known hypersensitivity to the drug or other dihydropyridines.",
        aec: "Common: Peripheral edema, headache, flushing, dizziness, and palpitations.",
        aes: "Severe symptomatic hypotension, syncope, and gingival hyperplasia. Rare cases of angioedema.",
        inter: [
            {d: "Grapefruit Juice", m: "Increases bioavailability significantly by inhibiting intestinal CYP3A4; risk of toxicity.", s: "high"},
            {d: "Anticonvulsants (Phenytoin)", m: "Decreases felodipine levels significantly.", s: "med"}
        ],
        dosage: "Oral: 2.5 mg to 10 mg once daily. Dosage is typically titrated at intervals of no less than 2 weeks based on clinical response.",
        admin: "Take once daily. Swallow extended-release tablets whole; do not crush or chew. Take consistently with or without food. Avoid high-fat meals which can increase the rate of absorption.",
        nurse: "Check BP before administration. Monitor for significant ankle swelling. Advise patient to use caution when rising from a lying or sitting position to prevent falls. Evaluate for gingival changes baseline and periodically."
    },
    {
        g: "Nicardipine", b: "Cardene, Cardene IV", c: "Calcium Channel Blocker (Dihydropyridine)", cat: "cv",
        m: "Inhibits calcium influx in smooth muscle. Highly selective for arterial vessels with little effect on the heart muscle. Potent coronary and systemic vasodilator. The IV form allows for rapid, precise titration of blood pressure in acute settings without significant negative inotropy. It increases coronary blood flow and decreases systemic vascular resistance, making it ideal for hypertensive emergencies involving target organ damage.",
        ind: "Management of Chronic Angina and Hypertension (Oral); Short-term treatment of hypertensive crisis or emergency (IV). Also used for post-operative BP control.",
        con: "Advanced aortic stenosis (risk of severe hypotension due to fixed cardiac output). Hypersensitivity.",
        aec: "Common: Flushing, headache, pedal edema, nausea, tachycardia (reflex), and dizziness.",
        aes: "Severe hypotension, paradoxical tachycardia, phlebitis at the IV site, and exacerbation of heart failure. Rare thrombocytopenia.",
        inter: [{d: "Cyclosporine", m: "Increases cyclosporine levels; monitor serum levels closely to prevent nephrotoxicity.", s: "med"}],
        dosage: "Oral: 20-40 mg three times daily (TID). IV: 5 mg/hr initially, titrating up to 15 mg/hr based on target BP goals.",
        admin: "Available in Oral and IV forms. Change peripheral IV sites every 12 hours to prevent irritation and phlebitis. Titrate IV slowly based on continuous blood pressure response. Do not stop IV infusion abruptly.",
        nurse: "Monitor IV site for redness or pain (drug is a potent irritant). Monitor BP continuously during infusion. Ensure large-bore IV access if possible. Monitor for signs of heart failure (crackles, dyspnea) if used in patients with LV dysfunction."
    },
    {
        g: "Verapamil", b: "Calan, Isoptin, Verelan", c: "Calcium Channel Blocker (Non-Dihydropyridine)", cat: "cv",
        m: "Inhibits calcium ion entry into myocardial cells and the specialized conduction system (SA and AV nodes). It exerts significant negative inotropic (force), negative chronotropic (rate), and negative dromotropic (conduction) effects. It also causes moderate peripheral vasodilation and significantly increases the refractory period of the AV node. This action suppresses supraventricular tachycardias and reduces the workload of the heart by decreasing the force of contraction and afterload.",
        ind: "Supraventricular Tachyarrhythmias (A-Fib/Flutter rate control, PSVT), Angina Pectoris (especially vasospastic), and Hypertension.",
        con: "Severe Heart Failure (HFrEF), 2nd or 3rd degree heart block, sick sinus syndrome (without pacemaker), and cardiogenic shock. Severe hypotension.",
        aec: "Common: CONSTIPATION (most common and severe side effect due to gut smooth muscle blockade), dizziness, nausea, headache, and peripheral edema.",
        aes: "SEVERE BRADYCARDIA, heart block, Heart Failure exacerbation (due to negative inotropy), and profound hypotension. Hepatotoxicity (rare).",
        inter: [
            {d: "Digoxin", m: "Increases digoxin plasma levels by 50-70%; extremely high risk of fatal digitalis toxicity.", s: "critical"},
            {d: "Beta Blockers", m: "Additive suppression of SA/AV node and contractility; significant risk of fatal HF and heart block.", s: "high"},
            {d: "Grapefruit Juice", m: "Significant increase in drug levels via CYP3A4 inhibition; avoid combination.", s: "high"}
        ],
        dosage: "Oral: 120 mg to 480 mg daily in divided doses (BID/TID) or SR once daily. IV: 5 mg to 10 mg given over 2 minutes.",
        admin: "Oral and IV routes. For constipation: Teach patient to increase dietary fiber and fluid intake significantly. For IV: Monitor EKG and BP continuously throughout administration. Give IV dose slowly over 2 minutes (3 mins in elderly).",
        nurse: "Check APICAL PULSE before administration (HOLD and notify provider if HR < 60 bpm). Assess for signs of HF (crackles, peripheral edema, SOB). Monitor EKG for PR interval prolongation. Evaluate bowel habits daily. Teach patient to avoid grapefruit juice."
    },
    {
        g: "Diltiazem", b: "Cardizem, Tiazac, Dilacor", c: "Calcium Channel Blocker (Non-Dihydropyridine)", cat: "cv",
        m: "Inhibits calcium ion influx during depolarization of cardiac and vascular smooth muscle cells. It significantly slows AV node conduction and prolongs the nodal refractory period. It exhibits less negative inotropic effect than verapamil but is a more potent coronary and peripheral vasodilator. This results in a decreased ventricular rate in atrial arrhythmias and a reduction in myocardial oxygen demand. It effectively dilates both main coronary and collateral arteries.",
        ind: "Rate control in Atrial Fibrillation and Atrial Flutter, conversion of PSVT to sinus rhythm, management of chronic stable Angina, and treatment of Hypertension.",
        con: "Acute Myocardial Infarction with pulmonary congestion, 2nd or 3rd degree heart block, sick sinus syndrome, and severe hypotension.",
        aec: "Common: Peripheral edema, headache, dizziness, nausea, and skin rash. Fatigue and weakness.",
        aes: "Severe Bradycardia, AV block, Heart Failure exacerbation, and rare clinical hepatotoxicity. Acute generalized exanthematous pustulosis (AGEP).",
        inter: [
            {d: "Beta Blockers", m: "Increased risk of severe bradycardia and AV conduction delay; use with caution.", s: "high"},
            {d: "Statins (CYP3A4)", m: "Inhibits metabolism; increases risk of statin-induced myopathy and toxicity.", s: "med"}
        ],
        dosage: "Oral: 120 mg to 360 mg daily (divided or CD/XR/LA). IV: 0.25 mg/kg bolus over 2 min, then 5-15 mg/hr continuous infusion.",
        admin: "Oral and IV routes. Do NOT crush or chew CD/LA/XR/XT formulations. Continuous EKG and BP monitoring are mandatory for IV drip administration. IV bolus dose should be followed by a titration drip for AFib management.",
        nurse: "Monitor heart rate and rhythm via EKG continuously. Assess for peripheral edema and signs of heart failure (weight gain, dyspnea). Monitor LFTs baseline and periodically. Teach patient to report any new rash or skin eruption immediately."
    }
];
