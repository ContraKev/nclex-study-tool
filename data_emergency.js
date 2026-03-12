/* Emergency & Critical Care Drugs - NCLEX Essential
   Vasopressors, antidotes, reversal agents, code drugs */

const data_emergency = [
    {
        g: "Epinephrine", b: "Adrenalin, EpiPen", c: "Catecholamine / Vasopressor", cat: "emerg",
        m: "Endogenous catecholamine with alpha-1, beta-1, and beta-2 agonist activity. Alpha: vasoconstriction. Beta-1: increased HR, contractility, automaticity. Beta-2: bronchodilation.",
        ind: "⚠️ CARDIAC ARREST (first-line). Anaphylaxis (first-line). Severe asthma/bronchospasm. Hypotension/shock. Adjunct to local anesthetics.",
        con: "Relative: narrow-angle glaucoma, labor (relaxes uterus), sulfite allergy (in some formulations). In anaphylaxis: NO ABSOLUTE CONTRAINDICATIONS.",
        aec: "Tachycardia. Palpitations. Anxiety. Tremor. Headache. Pallor. Hypertension.",
        aes: "⚠️ ARRHYTHMIAS (ventricular). Hypertensive crisis. Cerebral hemorrhage. Pulmonary edema. Myocardial ischemia/infarction. Tissue necrosis (extravasation).",
        inter: [
            {d: "Beta-blockers", m: "Block beta effects, leaving unopposed alpha → severe HTN", s: "high"},
            {d: "TCAs, MAOIs", m: "Potentiate cardiovascular effects", s: "high"},
            {d: "Digoxin", m: "Increased arrhythmia risk", s: "med"}
        ],
        dosage: "CARDIAC ARREST: 1mg IV/IO every 3-5 min. ANAPHYLAXIS: 0.3-0.5mg IM (EpiPen 0.3mg adult). Infusion: 2-10 mcg/min.",
        admin: "Cardiac arrest: IV/IO preferred, ET if no access (2-2.5mg diluted). Anaphylaxis: IM into lateral thigh (faster absorption than SubQ). NEVER give anaphylaxis dose IV (use infusion only).",
        nurse: "⚠️ KNOW YOUR DOSES: Anaphylaxis = 0.3-0.5mg IM. Cardiac arrest = 1mg IV. NEVER give 1mg IV for anaphylaxis (causes arrest). EpiPen through clothes is OK. Monitor continuous ECG. Extravasation: treat with phentolamine. Teach patients: EpiPen, then ER — effects wear off in 15-20 min."
    },
    {
        g: "Norepinephrine", b: "Levophed", c: "Catecholamine / Vasopressor", cat: "emerg",
        m: "Potent alpha-1 agonist with some beta-1 activity. Primary effect: vasoconstriction → increased SVR and BP. Minimal beta-2 (no bronchodilation).",
        ind: "⚠️ SEPTIC SHOCK (first-line vasopressor). Hypotension unresponsive to fluids. Neurogenic shock. Cardiogenic shock (with inotrope).",
        con: "Hypovolemia (must correct first). Mesenteric/peripheral vascular thrombosis. Halothane/cyclopropane anesthesia.",
        aec: "Bradycardia (reflex from HTN). Anxiety. Headache. Dyspnea. Pallor.",
        aes: "⚠️ TISSUE NECROSIS (extravasation). Arrhythmias. Severe hypertension. Organ ischemia (kidney, mesentery, digits). Gangrene.",
        inter: [
            {d: "MAOIs", m: "Severe, prolonged hypertension", s: "high"},
            {d: "TCAs", m: "Potentiated pressor effect", s: "high"},
            {d: "Beta-blockers", m: "Unopposed alpha effects", s: "med"}
        ],
        dosage: "Start 8-12 mcg/min IV, titrate to BP goal (usually MAP >65). Typical range: 2-30 mcg/min. Mix 4mg in 250mL D5W.",
        admin: "⚠️ CENTRAL LINE PREFERRED (vesicant). If peripheral: large vein, monitor closely for infiltration. Never stop abruptly — taper. Continuous infusion only.",
        nurse: "⚠️ FIRST-LINE FOR SEPTIC SHOCK per Surviving Sepsis Guidelines. Central line preferred — extravasation causes tissue necrosis. If infiltration: STOP immediately, aspirate, inject phentolamine into area. Monitor MAP goal (usually >65). Ensure adequate fluid resuscitation FIRST. Fingers/toes ischemia = drug working but watch closely."
    },
    {
        g: "Dopamine", b: "Intropin", c: "Catecholamine / Vasopressor", cat: "emerg",
        m: "Dose-dependent effects: Low (1-5 mcg/kg/min): dopaminergic (renal vasodilation). Medium (5-10): beta-1 (↑HR, contractility). High (>10): alpha-1 (vasoconstriction).",
        ind: "Shock (cardiogenic, septic — second-line). Bradycardia unresponsive to atropine. Symptomatic hypotension.",
        con: "Pheochromocytoma. Uncorrected tachyarrhythmias. Ventricular fibrillation.",
        aec: "Tachycardia. Nausea/vomiting. Headache. Angina. Palpitations. Dyspnea.",
        aes: "Arrhythmias. Tissue necrosis (extravasation). Gangrene of extremities. Myocardial ischemia.",
        inter: [
            {d: "MAOIs", m: "Prolonged, severe hypertension — use 1/10th dose", s: "high"},
            {d: "Phenytoin", m: "May cause hypotension and bradycardia", s: "med"},
            {d: "Halogenated anesthetics", m: "Increased arrhythmia risk", s: "med"}
        ],
        dosage: "Start 2-5 mcg/kg/min, titrate to effect. Max ~20 mcg/kg/min (consider norepinephrine if higher doses needed).",
        admin: "Central line preferred. Must use infusion pump — never bolus. Correct hypovolemia first. Taper gradually.",
        nurse: "⚠️ 'RENAL DOSE' DOPAMINE (1-3 mcg/kg/min) NOT PROVEN to protect kidneys — don't order for this indication. Dose-dependent effects: low = renal, medium = cardiac, high = pressor. Less commonly used now (norepinephrine preferred for sepsis). Same extravasation precautions — phentolamine for infiltration."
    },
    {
        g: "Vasopressin", b: "Pitressin, ADH", c: "Vasopressor (Non-Catecholamine)", cat: "emerg",
        m: "Synthetic antidiuretic hormone. V1 receptors on blood vessels → vasoconstriction (independent of adrenergic receptors). V2 receptors in kidney → water reabsorption.",
        ind: "Septic shock (adjunct to norepinephrine). Cardiac arrest (alternative to epinephrine). Variceal bleeding. Diabetes insipidus.",
        con: "Chronic nephritis with nitrogen retention. Hypersensitivity. Coronary artery disease (relative).",
        aec: "Hyponatremia. Headache. Abdominal cramps. Nausea. Pallor. Tremor.",
        aes: "⚠️ MYOCARDIAL ISCHEMIA. Water intoxication. Severe hypertension. Mesenteric ischemia. Skin necrosis.",
        inter: [
            {d: "Carbamazepine, SSRIs", m: "Potentiate antidiuretic effect → hyponatremia", s: "med"},
            {d: "Lithium, demeclocycline", m: "Decrease antidiuretic effect", s: "low"}
        ],
        dosage: "Septic shock: 0.03-0.04 units/min fixed dose (do NOT titrate). Cardiac arrest: 40 units IV x1 (can replace 1st or 2nd epi). DI: 5-10 units IM/SubQ BID-TID.",
        admin: "Septic shock: Add to norepinephrine (not first-line alone). Fixed dose — do NOT titrate up. Cardiac arrest: single dose only.",
        nurse: "⚠️ FOR SEPTIC SHOCK: Fixed dose 0.03-0.04 U/min — do NOT titrate (unlike catecholamines). Add when norepinephrine dose escalating. Advantage: works even in acidosis (catecholamine receptors impaired). Monitor for ischemia (coronary, mesenteric, skin). Splanchnic vasoconstriction — watch for bowel ischemia."
    },
    {
        g: "Atropine", b: "AtroPen", c: "Anticholinergic / Antimuscarinic", cat: "emerg",
        m: "Competitive antagonist at muscarinic acetylcholine receptors. Blocks parasympathetic (vagal) effects → increases HR, reduces secretions, dilates pupils, relaxes smooth muscle.",
        ind: "⚠️ SYMPTOMATIC BRADYCARDIA. Organophosphate/nerve agent poisoning. Preoperative (reduce secretions). Cycloplegia/mydriasis.",
        con: "Narrow-angle glaucoma. Obstructive GI disease. Obstructive uropathy. Myasthenia gravis. Tachyarrhythmias.",
        aec: "Dry mouth. Blurred vision. Urinary retention. Constipation. Tachycardia. Flushing.",
        aes: "Hyperthermia ('hot as a hare'). Delirium ('mad as a hatter'). Ventricular arrhythmias. Paralytic ileus.",
        inter: [
            {d: "Other anticholinergics", m: "Additive effects — increased toxicity risk", s: "high"},
            {d: "Potassium chloride", m: "Atropine delays GI transit → increased ulcer risk from KCl", s: "med"}
        ],
        dosage: "Bradycardia: 0.5mg IV every 3-5 min (max 3mg). Organophosphate: 2-4mg IV, repeat as needed (may need massive doses). Pre-op: 0.4-0.6mg IM.",
        admin: "IV push for bradycardia. Doses <0.5mg may cause paradoxical bradycardia. Organophosphate: titrate to clearing secretions (may need 10+ mg).",
        nurse: "⚠️ FOR BRADYCARDIA: Does NOT work for infranodal block (below AV node) — prepare for pacing. Minimum dose 0.5mg (smaller doses = paradoxical bradycardia). Max 3mg. ORGANOPHOSPHATE POISONING: Atropinize until secretions clear — may need massive doses. Signs of atropine toxicity: 'Dry as a bone, blind as a bat, red as a beet, mad as a hatter, hot as a hare.'"
    },
    {
        g: "Adenosine", b: "Adenocard", c: "Antiarrhythmic (Miscellaneous)", cat: "emerg",
        m: "Endogenous nucleoside that slows conduction through AV node and interrupts reentry pathways. Very short half-life (<10 seconds). Causes transient asystole.",
        ind: "⚠️ PSVT (paroxysmal supraventricular tachycardia) — drug of choice for conversion. Diagnostic: distinguish SVT from VT (won't terminate VT).",
        con: "Second or third-degree AV block (without pacemaker). Sick sinus syndrome. Known hypersensitivity. Asthma (may cause bronchospasm).",
        aec: "Facial flushing (very common). Chest discomfort/pressure. Dyspnea. Headache. Lightheadedness. Metallic taste.",
        aes: "Asystole (transient, expected). Bronchospasm. Severe bradycardia. Atrial fibrillation (rare).",
        inter: [
            {d: "Dipyridamole", m: "Blocks adenosine uptake → potentiates effect (use lower dose)", s: "high"},
            {d: "Carbamazepine", m: "Increased heart block", s: "high"},
            {d: "Caffeine, theophylline", m: "Block adenosine receptors → need higher dose", s: "med"}
        ],
        dosage: "6mg rapid IV push, followed by 20mL NS flush. If no response in 1-2 min: 12mg, then 12mg again if needed.",
        admin: "⚠️ RAPID IV PUSH — must give as fast as possible through IV closest to heart. Follow immediately with 20mL NS flush. Warn patient about feeling of 'impending doom.'",
        nurse: "⚠️ EXPECT ASYSTOLE — it's supposed to happen (usually 3-5 seconds). Record rhythm strip during administration. Use port closest to heart. PUSH FAST, FLUSH FAST. Warn patient: 'You will feel very strange for a few seconds — chest pressure, flushing, like something bad is happening — it passes quickly.' If on dipyridamole: use 3mg. If on caffeine/theophylline: may need higher dose."
    },
    {
        g: "Amiodarone", b: "Pacerone, Cordarone", c: "Antiarrhythmic (Class III)", cat: "emerg",
        m: "Multichannel blocker: blocks potassium, sodium, and calcium channels + alpha/beta receptors. Prolongs action potential and refractory period. Most effective antiarrhythmic but most toxic.",
        ind: "⚠️ VENTRICULAR ARRHYTHMIAS (VF/pulseless VT). A-fib rate control (second-line). Life-threatening arrhythmias when other drugs fail.",
        con: "Cardiogenic shock. Severe sinus node dysfunction. Second/third-degree AV block (without pacemaker). Hypersensitivity to iodine.",
        aec: "Bradycardia. Hypotension. Nausea. Phlebitis. Constipation. Photosensitivity. Blue-gray skin discoloration.",
        aes: "⚠️ PULMONARY TOXICITY (fibrosis). Hepatotoxicity. Thyroid dysfunction (hypo or hyper — contains iodine). Corneal deposits. Torsades de pointes (paradoxically). Optic neuropathy.",
        inter: [
            {d: "Digoxin", m: "Increases digoxin levels 70-100% — reduce digoxin dose by half", s: "high"},
            {d: "Warfarin", m: "Increases warfarin effect — reduce dose, monitor INR", s: "high"},
            {d: "QT-prolonging drugs", m: "Additive QT prolongation → Torsades", s: "high"},
            {d: "Simvastatin", m: "Increased myopathy risk — limit statin dose", s: "high"}
        ],
        dosage: "CARDIAC ARREST: 300mg IV push, then 150mg. STABLE VT: 150mg over 10 min, then 1mg/min x6h, then 0.5mg/min x18h. PO: 400-800mg/day loading, then 200-400mg daily.",
        admin: "IV: central line preferred (phlebitis). Use in-line filter. Cardiac arrest: can give via peripheral rapidly. Oral: give with food (decreases GI upset).",
        nurse: "⚠️ MOST TOXIC ANTIARRHYTHMIC — extensive monitoring required. Before starting: baseline PFTs, LFTs, TFTs, eye exam. Ongoing: PFTs every 6 months, LFTs/TFTs every 6 months. PULMONARY TOXICITY: Dry cough, dyspnea, fever — get CXR, stop drug. Half-life 40-55 DAYS — effects persist weeks after stopping. Blue skin = cosmetic (sun exposure). Photosensitivity: sunscreen, protective clothing."
    },
    {
        g: "Lidocaine", b: "Xylocaine", c: "Antiarrhythmic (Class IB) / Local Anesthetic", cat: "emerg",
        m: "Sodium channel blocker. Suppresses automaticity in ventricles. Shortens action potential duration. Also local anesthetic (blocks nerve conduction).",
        ind: "Ventricular arrhythmias (VT, PVCs) — second-line to amiodarone. Local/regional anesthesia.",
        con: "Severe heart block (without pacemaker). Wolff-Parkinson-White syndrome. Stokes-Adams syndrome. Known hypersensitivity.",
        aec: "CNS: drowsiness, dizziness, paresthesias, confusion. CV: bradycardia, hypotension.",
        aes: "Seizures. Respiratory arrest. Severe bradycardia/asystole. Anaphylaxis. CNS depression → coma.",
        inter: [
            {d: "Beta-blockers", m: "Increased lidocaine toxicity", s: "med"},
            {d: "Cimetidine", m: "Increases lidocaine levels", s: "med"},
            {d: "Other antiarrhythmics", m: "Additive cardiac depression", s: "med"}
        ],
        dosage: "VT: 1-1.5mg/kg IV bolus, may repeat 0.5-0.75mg/kg every 5-10 min (max 3mg/kg). Infusion: 1-4mg/min. Local: varies by block type.",
        admin: "IV only for arrhythmias (not IM, not SubQ). Reduce dose in heart failure, liver disease, elderly (decreased clearance).",
        nurse: "⚠️ SECOND-LINE to amiodarone for VF/VT arrest. CNS toxicity = early warning (perioral numbness, tinnitus, confusion) → if seen, reduce dose. Seizures = overdose — prepare to intubate. Reduce dose in CHF and liver disease. For local anesthesia: calculate max dose (4.5mg/kg without epi, 7mg/kg with epi)."
    },
    {
        g: "Naloxone", b: "Narcan", c: "Opioid Antagonist / Antidote", cat: "emerg",
        m: "Competitive antagonist at mu, kappa, and delta opioid receptors. Reverses all opioid effects: sedation, respiratory depression, analgesia, miosis. Rapid onset, short duration.",
        ind: "⚠️ OPIOID OVERDOSE (respiratory depression). Reversal of opioid effects post-surgery. Neonatal opioid depression. Diagnosis of opioid dependence.",
        con: "Hypersensitivity. Caution in opioid-dependent patients (precipitates withdrawal).",
        aec: "⚠️ ACUTE OPIOID WITHDRAWAL (in dependent patients): agitation, vomiting, diaphoresis, tachycardia, hypertension, piloerection.",
        aes: "Pulmonary edema (especially in cardiac patients). Seizures. Arrhythmias. Severe hypertension. Cardiac arrest (from withdrawal).",
        inter: [],
        dosage: "Overdose: 0.4-2mg IV/IM/SubQ/IN, repeat every 2-3 min as needed. Post-op: 0.1-0.2mg IV (titrate). Nasal spray: 4mg per nostril.",
        admin: "IV preferred for fastest onset. IM/SubQ if no IV. Intranasal (Narcan spray) for community use. May need repeated doses (opioid half-life longer than naloxone).",
        nurse: "⚠️ DURATION ~30-90 MIN (shorter than most opioids) — patient may re-sedate and stop breathing. Monitor for AT LEAST 2 hours after naloxone. In chronic opioid users: titrate to respiratory drive, NOT full alertness (prevents severe withdrawal). Community distribution programs: teach bystanders to use intranasal. After reversal: patient often hostile (reversed analgesia, in withdrawal)."
    },
    {
        g: "Flumazenil", b: "Romazicon", c: "Benzodiazepine Antagonist / Antidote", cat: "emerg",
        m: "Competitive antagonist at GABA-A benzodiazepine binding site. Reverses sedation, amnesia, and respiratory depression from benzodiazepines.",
        ind: "Reversal of benzodiazepine sedation (procedural). Benzodiazepine overdose (selected cases). Diagnosis of benzodiazepine toxicity.",
        con: "⚠️ CHRONIC BENZODIAZEPINE USE (precipitates seizures). TCA overdose (seizures). Known seizure disorder. Patients on benzos for seizure control. Mixed overdose with proconvulsants.",
        aec: "Dizziness. Injection site pain. Agitation. Headache. Blurred vision. Nausea.",
        aes: "⚠️ SEIZURES (especially in chronic benzo users, TCA overdose, or seizure patients). Arrhythmias. Resedation.",
        inter: [
            {d: "TCAs, other proconvulsants", m: "Unmasking of seizure-provoking effects when benzo reversed", s: "high"}
        ],
        dosage: "Procedural sedation: 0.2mg IV over 15 sec, repeat 0.2mg every 45 sec until awake (max 1mg). Overdose: Same, max 3-5mg total.",
        admin: "IV only. Inject into running IV in large vein. Slow injection (over 15 sec) to minimize pain.",
        nurse: "⚠️ DO NOT USE ROUTINELY IN OVERDOSE — seizure risk. Contraindicated if: chronic benzo use, seizure history, TCA co-ingestion, or unknown ingestion. Duration 45-90 min — may need repeat doses. Have seizure precautions and resuscitation equipment ready. Not used as often now — supportive care preferred for most benzo overdoses."
    },
    {
        g: "N-Acetylcysteine", b: "Mucomyst, Acetadote", c: "Antidote (Acetaminophen) / Mucolytic", cat: "emerg",
        m: "Provides cysteine for glutathione synthesis. Glutathione detoxifies toxic NAPQI metabolite from acetaminophen. Also mucolytic (breaks disulfide bonds in mucus).",
        ind: "⚠️ ACETAMINOPHEN OVERDOSE (within 8-10 hours preferred, can give up to 24+ hours). Mucolytic for cystic fibrosis, COPD.",
        con: "Hypersensitivity (rare but can occur).",
        aec: "Nausea, vomiting (IV and oral). Rash. Flushing. Bronchospasm (inhaled). Unpleasant sulfur smell/taste.",
        aes: "Anaphylactoid reaction (IV — infusion-related). Severe bronchospasm. Angioedema.",
        inter: [
            {d: "Activated charcoal", m: "May adsorb oral NAC — give charcoal first, then NAC", s: "low"}
        ],
        dosage: "ACETAMINOPHEN OVERDOSE: IV (Acetadote): 150mg/kg over 1h, then 50mg/kg over 4h, then 100mg/kg over 16h (21h total). Oral: 140mg/kg loading, then 70mg/kg q4h x 17 doses.",
        admin: "IV: Dilute in D5W. Anaphylactoid reactions (flushing, pruritis) common at start — slow infusion, give antihistamine. Oral: Dilute in juice/soda (masks sulfur taste), may need anti-emetic.",
        nurse: "⚠️ LIFE-SAVING FOR ACETAMINOPHEN OVERDOSE — most effective within 8 hours but give up to 24+ hours post-ingestion. Check Rumack-Matthew nomogram to determine need for treatment. IV preferred (better tolerated). Oral NAC smells terrible — mix with cola, use straw. Infusion reactions: stop IV, give diphenhydramine, restart slower. Monitor LFTs, PT/INR."
    },
    {
        g: "Activated Charcoal", b: "Actidose, CharcoAid", c: "Adsorbent / Antidote", cat: "emerg",
        m: "Porous carbon with large surface area that adsorbs ingested toxins in GI tract, preventing absorption. Does NOT work on all substances.",
        ind: "⚠️ GI DECONTAMINATION for oral poisoning (most effective within 1 hour). Multiple-dose for some drugs (theophylline, carbamazepine, phenobarbital).",
        con: "⚠️ CAUSTIC/CORROSIVE INGESTIONS (acids, alkalis). Hydrocarbon ingestion with aspiration risk. Unprotected airway (risk of aspiration). GI obstruction or ileus. NOT effective: iron, lithium, alcohols, cyanide, heavy metals, potassium.",
        aec: "Black stools. Constipation. Vomiting. Abdominal distension.",
        aes: "⚠️ ASPIRATION (charcoal pneumonitis — very serious). Bowel obstruction (multiple doses). Electrolyte imbalances (with cathartics).",
        inter: [
            {d: "Oral medications", m: "Charcoal binds and inactivates oral drugs — separate by 2h", s: "high"},
            {d: "Ipecac", m: "Charcoal adsorbs ipecac — do not use together", s: "high"}
        ],
        dosage: "Single dose: Adults 25-100g, Children 1g/kg (max 50g). Multiple dose: 25-50g q2-6h. Mix with water to slurry consistency.",
        admin: "Protect airway (intubate if needed before giving). Give within 1 hour of ingestion for best effect (can give later if large ingestion or slow-release). Can give via NG if patient refuses oral.",
        nurse: "⚠️ AIRWAY FIRST — aspiration of charcoal is dangerous. Most effective within 1 HOUR of ingestion. NOT for: iron, lithium, alcohols, acids/bases, cyanide. Black stools are normal — warn patient. If vomiting occurs, may need to repeat dose. Does NOT require cathartic with every dose (avoid sorbitol in children). Position patient upright or left lateral to reduce aspiration risk."
    },
    {
        g: "Dextrose 50%", b: "D50, D50W", c: "Hyperglycemic Agent / Antidote", cat: "emerg",
        m: "Concentrated glucose solution providing rapid increase in blood glucose. Essential fuel for brain and cardiac function.",
        ind: "⚠️ HYPOGLYCEMIA (symptomatic or severe). Altered mental status of unknown cause (with thiamine). Coma cocktail component. Insulin overdose.",
        con: "Intracranial hemorrhage (hyperglycemia worsens outcomes). Delirium tremens (give thiamine first). Hyperglycemia.",
        aec: "Phlebitis/thrombosis (very irritating to veins). Hyperglycemia. Fluid overload.",
        aes: "Severe hyperglycemia. Hyperosmolar syndrome. Tissue necrosis (extravasation).",
        inter: [],
        dosage: "Adults: 25-50mL (12.5-25g glucose) IV push. Pediatrics: D25 or D10 preferred (less hypertonic). May repeat as needed.",
        admin: "⚠️ GIVE THIAMINE FIRST in alcoholics/malnourished (D50 can precipitate Wernicke encephalopathy). Large vein preferred — very hypertonic (irritating). Recheck glucose in 15-20 min.",
        nurse: "⚠️ 'COMA COCKTAIL': Thiamine, D50, Naloxone for altered mental status. Give THIAMINE BEFORE D50 in suspected alcoholism (Wernicke prevention). Very hypertonic — causes phlebitis. Check glucose before giving if possible, but don't delay if symptomatic hypoglycemia suspected. Pediatrics: use D10 or D25 (D50 too hypertonic for small veins)."
    },
    {
        g: "Glucagon", b: "GlucaGen, Baqsimi", c: "Hyperglycemic Agent / Antidote", cat: "emerg",
        m: "Pancreatic hormone that stimulates hepatic glycogenolysis and gluconeogenesis → raises blood glucose. Also positive inotrope and chronotrope (beta-blocker antidote).",
        ind: "⚠️ SEVERE HYPOGLYCEMIA (when IV access unavailable). Beta-blocker overdose. Calcium channel blocker overdose. Diagnostic imaging (GI relaxation).",
        con: "Pheochromocytoma. Insulinoma. Known hypersensitivity. Patients with depleted glycogen stores (starvation, adrenal insufficiency).",
        aec: "Nausea, vomiting (common). Transient hyperglycemia. Injection site reactions.",
        aes: "Severe hypertension (pheochromocytoma). Hypotension (dehydration from vomiting). Allergic reaction.",
        inter: [
            {d: "Warfarin", m: "May enhance anticoagulant effect at high doses", s: "med"},
            {d: "Insulin", m: "Antagonizes glucose-lowering effect", s: "low"}
        ],
        dosage: "Hypoglycemia: 1mg IM/SubQ/IV (0.5mg if <25kg). Beta-blocker OD: 3-5mg IV bolus, then 3-5mg/hour infusion. Nasal spray: 3mg per nostril.",
        admin: "IM or SubQ for hypoglycemia if no IV. Requires reconstitution before injection (mix powder + diluent). Nasal spray (Baqsimi) — no reconstitution needed.",
        nurse: "⚠️ USE WHEN IV ACCESS NOT AVAILABLE for hypoglycemia — IM/SubQ works in 10-20 min. Teach family/caregivers to administer. DOES NOT WORK if glycogen depleted (chronic starvation, alcoholism, liver disease) — need IV dextrose. Nausea/vomiting common — position to prevent aspiration. Beta-blocker OD: much higher doses needed, may require infusion."
    },
    {
        g: "Calcium Chloride/Gluconate", b: "Cal-Plus, various", c: "Electrolyte / Antidote", cat: "emerg",
        m: "Provides ionized calcium for cardiac and neuromuscular function. Antagonizes potassium effects on myocardium. Reverses calcium channel blocker toxicity.",
        ind: "⚠️ HYPERKALEMIA (cardiac protection). Calcium channel blocker overdose. Hypocalcemia (symptomatic). Magnesium toxicity. Black widow spider bite.",
        con: "Digitalis toxicity (calcium increases digoxin effects). Hypercalcemia. VF.",
        aec: "Bradycardia. Hypotension. Flushing. Nausea. Peripheral vasodilation.",
        aes: "⚠️ TISSUE NECROSIS (extravasation of calcium chloride). Cardiac arrest (too rapid IV). Hypercalcemia.",
        inter: [
            {d: "Digoxin", m: "Calcium potentiates digoxin toxicity — use cautiously if at all", s: "high"},
            {d: "Ceftriaxone", m: "Precipitates with calcium — fatal cases in neonates", s: "high"}
        ],
        dosage: "Hyperkalemia: CaCl 500-1000mg (5-10mL of 10%) or Ca gluconate 1-2g IV over 5-10 min. CCB overdose: 1-3g Ca gluconate IV, may repeat.",
        admin: "⚠️ CALCIUM CHLORIDE: CENTRAL LINE ONLY (3x more calcium than gluconate, very caustic). Calcium gluconate: can give peripheral but still caustic. Slow IV push (5-10 min to avoid cardiac arrest).",
        nurse: "⚠️ KNOW THE DIFFERENCE: Calcium CHLORIDE = central line only, 3x more elemental calcium. Calcium GLUCONATE = safer peripherally but still watch for infiltration. FOR HYPERKALEMIA: Calcium stabilizes heart IMMEDIATELY but does NOT lower K+ — still need insulin/glucose, bicarb, kayexalate. AVOID in digoxin toxicity unless life-threatening hyperkalemia. Ceftriaxone + calcium = fatal precipitation in neonates."
    },
    {
        g: "Sodium Bicarbonate", b: "NaHCO3", c: "Alkalinizing Agent / Antidote", cat: "emerg",
        m: "Provides bicarbonate to buffer acids. Raises serum and urine pH. In hyperkalemia: shifts potassium into cells. In TCA overdose: alkalinizes serum, reduces drug binding.",
        ind: "⚠️ SEVERE METABOLIC ACIDOSIS. Hyperkalemia (adjunct). TCA overdose. Salicylate overdose (urinary alkalinization). Sodium channel blocker toxicity.",
        con: "Metabolic/respiratory alkalosis. Hypocalcemia. Hypokalemia. Chloride-responsive alkalosis.",
        aec: "Hypokalemia. Hypocalcemia. Metabolic alkalosis. Hypernatremia. Fluid overload.",
        aes: "Severe metabolic alkalosis. Paradoxical CNS acidosis. Cardiac arrhythmias. Hypokalemic paralysis.",
        inter: [
            {d: "Acidic drugs (aspirin, phenobarbital)", m: "Urinary alkalinization increases excretion", s: "med"},
            {d: "Basic drugs (amphetamines, quinidine)", m: "Urinary alkalinization decreases excretion", s: "med"}
        ],
        dosage: "Cardiac arrest: 1mEq/kg IV initially, then 0.5mEq/kg every 10 min based on ABG. Hyperkalemia: 50mEq IV over 5 min. TCA OD: 1-2mEq/kg boluses for QRS widening.",
        admin: "IV: Give slowly (over 5 min, or faster in arrest). Incompatible with many drugs — flush line. Extravasation causes tissue necrosis.",
        nurse: "⚠️ NOT ROUTINE IN CARDIAC ARREST — only for known severe acidosis, hyperkalemia, or TCA overdose. Causes hypokalemia — check K+ after giving. FOR TCA OVERDOSE: Goal is to narrow QRS and maintain serum pH 7.45-7.55. Can give multiple doses. Incompatible with calcium, catecholamines in same line — flush well. Monitor ABGs, electrolytes."
    }
];
