const data_antiarrhythmics = [
    {
        g: "Quinidine", b: "Quinidex, Quinora", c: "Class IA Antiarrhythmic", cat: "cv",
        m: "A classic Class IA antiarrhythmic that works by depressing myocardial excitability, conduction velocity, and contractility through the blockade of fast sodium channels in the myocardial cell membrane. It primarily slows the rapid inward sodium current during Phase 0 of the cardiac action potential. Additionally, it possesses anticholinergic (vagolytic) effects and prolongs the action potential duration and effective refractory period. This dual action helps stabilize the cell membrane and suppress ectopic pacemaker activity, making it effective for both atrial and ventricular arrhythmias.",
        ind: "Management of Atrial Fibrillation, Atrial Flutter, and life-threatening Ventricular Arrhythmias. It is often used to maintain normal sinus rhythm after conversion of AFib/Flutter.",
        con: "Complete heart block (without a pacemaker), myasthenia gravis, and history of QT interval prolongation. Known hypersensitivity to quinidine or other cinchona derivatives.",
        aec: "Common: Diarrhea (extremely common, occurring in up to 30% of patients), nausea, vomiting, abdominal pain, and bitter or metallic taste.",
        aes: "CINCHONISM: A unique syndrome of toxicity characterized by tinnitus, headache, vertigo, and blurred vision. Severe: QT Interval Prolongation leading to Torsades de Pointes, thrombocytopenia, and potential for fatal arrhythmias.",
        inter: [
            {d: "Digoxin", m: "Reduces renal clearance of digoxin; leads to a 2-fold increase in digoxin levels and high risk of digitalis toxicity.", s: "critical"},
            {d: "Warfarin", m: "Potentiates the anticoagulant effect, increasing the risk of hemorrhage.", s: "high"},
            {d: "Antacids", m: "May increase quinidine levels by reducing renal excretion.", s: "med"}
        ],
        dosage: "Oral: 200 mg to 400 mg every 6 to 8 hours. Sustained release: 300 mg to 600 mg every 8 to 12 hours. Max 600 mg/dose.",
        admin: "Administer orally. Take with food or a full glass of water to minimize the high incidence of GI distress. If used for AFib, ensure the patient is digitalized or beta-blocked first to prevent a paradoxical rapid ventricular response.",
        nurse: "Monitor EKG continuously for widened QRS complex and prolonged QT interval (>50% increase requires holding dose). Monitor serum digoxin levels strictly if co-administered. Assess for early signs of cinchonism (ringing in ears). Monitor CBC for thrombocytopenia. Advise patient to report any unexplained bruising or bleeding."
    },
    {
        g: "Lidocaine", b: "Xylocaine", c: "Class IB Antiarrhythmic", cat: "cv",
        m: "Suppresses automaticity and spontaneous depolarization of the ventricles during diastole by direct action on the tissues. It has little to no effect on the SA node or atrial tissue, classifying it as a Class IB agent. It works by blocking sodium channels, primarily in the ischemic, depolarized, or rapidly firing myocardium. This selective action allows it to suppress ventricular ectopy and prevent ventricular fibrillation without significantly altering the conduction of normal heart beats. It is metabolized rapidly by the liver.",
        ind: "Acute management of life-threatening Ventricular Arrhythmias (Ventricular Tachycardia, PVCs, Ventricular Fibrillation) occurring during acute MI, cardiac surgery, or cardiac catheterization.",
        con: "Adam-Stokes syndrome, severe degrees of SA, AV, or intraventricular heart block in the absence of a functional pacemaker, and hypersensitivity to amide-type anesthetics.",
        aec: "CNS: Dizziness, drowsiness, slurred speech, blurred or double vision, and a 'metallic' taste in the mouth.",
        aes: "CNS TOXICITY (Lido Jitters): tremors, twitching, seizures, and respiratory depression. Cardiovascular: Severe bradycardia and cardiovascular collapse if administered too rapidly.",
        inter: [{d: "Beta Blockers", m: "May decrease lidocaine clearance, increasing the risk of toxicity.", s: "med"}],
        dosage: "IV Bolus: 1 to 1.5 mg/kg initially. IV Infusion: 1 to 4 mg/minute continuous titration. Max 3mg/kg total bolus dose.",
        admin: "IV ONLY for cardiac arrhythmias. Use only lidocaine labeled 'WITHOUT EPINEPHRINE' for IV cardiac use. Requires a continuous infusion pump for precise delivery. For IM use, only used in emergency settings when IV access is unavailable.",
        nurse: "Monitor for signs of CNS toxicity (confusion, seizures, tremors). Monitor EKG continuously for widened QRS or PR interval. Check therapeutic serum levels (Target range is 1.5 - 5 mcg/mL). Keep emergency resuscitative equipment nearby. Notify provider immediately if neuro status changes."
    },
    {
        g: "Flecainide", b: "Tambocor", c: "Class IC Antiarrhythmic", cat: "cv",
        m: "A potent Class IC sodium channel blocker that significantly slows conduction throughout the myocardial conduction system, including the atria, ventricles, and the His-Purkinje system. It has little effect on the action potential duration or repolarization. It exhibits significant negative inotropic effects, which can decrease cardiac output. Because it so effectively slows conduction, it can create a substrate for new, dangerous arrhythmias, especially in hearts with existing damage.",
        ind: "Prevention of paroxysmal Atrial Fibrillation/Flutter and life-threatening Ventricular Arrhythmias. Reserved for patients without structural heart disease.",
        con: "Structural heart disease (Black Box: significantly increased mortality post-MI), Heart Failure (due to negative inotropy), and 2nd/3rd degree heart block. Concurrent use of ritonavir.",
        aec: "Common: Dizziness, visual disturbances (blurred vision, difficulty focusing), headache, and nausea.",
        aes: "PRO-ARRHYTHMIC EFFECTS: Can cause new or worsened arrhythmias (VT/VF). Heart Failure exacerbation and severe symptomatic bradycardia.",
        inter: [
            {d: "Digoxin", m: "Increases digoxin plasma levels by approximately 15-25%; monitor strictly.", s: "high"},
            {d: "Amiodarone", m: "Increases flecainide levels by 50%; require dose reduction.", s: "high"}
        ],
        dosage: "Oral: 50 mg to 150 mg every 12 hours. Maximum dose 300 mg/day.",
        admin: "Orally twice daily. Do not use in patients with any history of MI, structural heart disease, or significant left ventricular dysfunction. Initiation is typically done in a hospital setting.",
        nurse: "Monitor EKG for PR and QRS interval widening (Hold if QRS increases by >50%). Assess for signs of worsening heart failure (weight gain, peripheral edema, crackles). Monitor for visual changes. Instruct patient to report any palpitations or fainting spells immediately."
    },
    {
        g: "Amiodarone", b: "Cordarone, Pacerone", c: "Class III Antiarrhythmic", cat: "cv",
        m: "A complex Class III agent that primarily prolongs the action potential duration and the refractory period in all cardiac tissues by blocking potassium channels. Uniquely, it also possesses sodium channel blocking, calcium channel blocking, and non-competitive alpha- and beta-adrenergic blocking properties. It is highly lipophilic and accumulates in adipose tissue and organs, leading to an extremely long and variable half-life (average 58 days, range 15-142 days). It contains high amounts of iodine, which can affect thyroid function.",
        ind: "Treatment and prophylaxis of life-threatening Ventricular Tachycardia and Ventricular Fibrillation; conversion and rate control of Atrial Fibrillation in patients with HF.",
        con: "Severe sinus-node dysfunction causing bradycardia, 2nd/3rd degree heart block (without pacemaker), and cardiogenic shock. Known iodine hypersensitivity.",
        aec: "Common: Photosensitivity, corneal micro-deposits (seeing halos at night), nausea, vomiting, and constipation.",
        aes: "PULMONARY FIBROSIS (potentially fatal lung scarring), HEPATOTOXICITY, thyroid dysfunction (hypo- or hyper-thyroidism), and BLUE-GREY skin discoloration. Visual loss (rare).",
        inter: [
            {d: "Warfarin", m: "Inhibits metabolism; increases PT/INR by 100%; MUST reduce warfarin dose by 50% immediately.", s: "critical"},
            {d: "Digoxin", m: "Inhibits renal/hepatic clearance; MUST reduce digoxin dose by 50% to prevent fatal toxicity.", s: "critical"},
            {d: "Statins", m: "Increases risk of statin-induced myopathy and rhabdomyolysis.", s: "high"}
        ],
        dosage: "Oral Maintenance: 200 mg to 400 mg daily. IV Bolus: 150 mg to 300 mg. IV Infusion: 0.5 to 1 mg/min.",
        admin: "Oral and IV routes. IV doses must be administered through a 0.22-micron in-line filter to catch precipitates. Use a central line if possible as the drug is a potent vesicant and highly irritating to peripheral veins.",
        nurse: "Monitor PFTs (Pulmonary Function Tests), LFTs, and Thyroid labs baseline and every 6 months. Teach patient to use high-SPF sunscreen and wear protective clothing. Instruct patient to report any new dry cough or shortness of breath immediately. Monitor EKG for QTc prolongation."
    },
    {
        g: "Sotalol", b: "Betapace", c: "Class III Antiarrhythmic / Beta Blocker", cat: "cv",
        m: "Demonstrates both non-selective beta-adrenergic blocking properties (Class II) and cardiac action potential duration prolongation properties (Class III). It inhibits potassium channels to prolong repolarization. Because it is a non-selective beta blocker, it reduces heart rate and contractility while potentially causing bronchoconstriction. It is unique among beta blockers for its potent antiarrhythmic effects on the ventricles.",
        ind: "Management of life-threatening Ventricular Arrhythmias and maintenance of normal sinus rhythm in patients with highly symptomatic Atrial Fibrillation or Atrial Flutter.",
        con: "BRONCHIAL ASTHMA, severe sinus bradycardia, long QT syndrome, uncompensated HF, and severe renal impairment (CrCl < 40 mL/min).",
        aec: "Fatigue, dizziness, bradycardia, dyspnea (shortness of breath), and gastrointestinal upset.",
        aes: "PRO-ARRHYTHMIA: Significant dose-dependent risk of Torsades de Pointes (especially with high doses, female gender, or renal failure). Severe bradycardia and heart block.",
        inter: [{d: "QT-Prolonging Drugs", m: "Additive risk of life-threatening Torsades de Pointes; avoid combination.", s: "high"}],
        dosage: "Oral: 80 mg to 160 mg twice daily. Dosage must be reduced in renal impairment.",
        admin: "Available in Oral and IV forms. Must be initiated in a hospital setting with continuous EKG monitoring for at least 3 days to assess for QT prolongation and pro-arrhythmic events.",
        nurse: "Calculate and monitor the QTc interval before every dose (HOLD and notify provider if QTc > 500ms). Monitor renal function (CrCl) strictly as the drug is renally excreted. Assess for wheezing or respiratory distress. Monitor BP and HR."
    },
    {
        g: "Adenosine", b: "Adenocard", c: "Miscellaneous Antiarrhythmic", cat: "cv",
        m: "A naturally occurring nucleoside that slows conduction time through the AV node, can interrupt the reentry pathways through the AV node, and can restore normal sinus rhythm in patients with SVT. It works by activating potassium channels and inhibiting calcium influx. It has an extremely short half-life of less than 10 seconds because it is rapidly cleared from the circulation by cellular uptake. This allows for rapid termination of arrhythmias with minimal lasting systemic effects.",
        ind: "Conversion to sinus rhythm of paroxysmal supraventricular tachycardia (PSVT), including that associated with Wolff-Parkinson-White (WPW) syndrome. Not effective for AFib/Flutter.",
        con: "2nd or 3rd degree heart block (without pacemaker), sick sinus syndrome (without pacemaker), and symptomatic bronchial asthma.",
        aec: "Common: Facial flushing, shortness of breath, chest pressure/pain, and nausea. These symptoms are transient due to the short half-life.",
        aes: "ASYSTOLE: A brief period of flatline (several seconds) is expected and intended. Transient arrhythmias and bronchospasm.",
        inter: [
            {d: "Caffeine / Theophylline", m: "Antagonizes adenosine receptors; may require significantly higher doses of adenosine.", s: "high"},
            {d: "Dipyridamole", m: "Inhibits uptake and potentiates adenosine; must reduce adenosine dose by 50%.", s: "high"}
        ],
        dosage: "IV: 6 mg rapid bolus; if no effect, 12 mg bolus given 1-2 minutes later. A second 12 mg dose may be given.",
        admin: "IV ONLY. Administer via RAPID IV PUSH (over 1-2 seconds) into the vein closest to the heart (antecubital), immediately followed by a rapid 20mL saline flush using the 'two-syringe' technique.",
        nurse: "Continuous EKG monitoring is mandatory. Warn the patient they will feel a very unpleasant sensation like 'someone kicked them in the chest' or a sense of impending doom for several seconds. Keep emergency equipment at the bedside."
    }
];
