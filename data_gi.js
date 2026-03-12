/* Block 6 — Gastrointestinal Medications (10 drugs)
   Source: pharmacology_B_drjames.txt */

const data_gi = [
    {
        g: "Omeprazole", b: "Prilosec", c: "Proton Pump Inhibitor (PPI)", cat: "gi",
        m: "Irreversibly inhibits the H+/K+-ATPase (PROTON PUMP) in gastric parietal cells, blocking the final step of acid secretion. Most potent acid suppressors available — reduces gastric acid secretion by up to 90%. Onset takes 1-2 hours but effect lasts 24 hours.",
        ind: "GERD. Peptic ulcer disease (gastric and duodenal ulcers). H. pylori eradication (part of triple/quadruple therapy). Zollinger-Ellison syndrome. NSAID-induced ulcer prophylaxis. Stress ulcer prophylaxis in ICU.",
        con: "Known hypersensitivity. Caution with long-term use due to adverse effects.",
        aec: "GI: Headache, nausea, diarrhea, constipation, abdominal pain, flatulence. Generally well-tolerated short-term.",
        aes: "⚠️ LONG-TERM USE RISKS: VITAMIN B12 DEFICIENCY (reduced absorption). HYPOMAGNESEMIA (can be severe). OSTEOPOROSIS and FRACTURES (hip, wrist, spine — reduced calcium absorption). C. DIFFICILE infection (reduced stomach acid allows bacterial overgrowth). Increased PNEUMONIA risk. Possible increased dementia risk (controversial).",
        inter: [
            {d: "Clopidogrel (Plavix)", m: "Omeprazole inhibits CYP2C19 → reduced clopidogrel activation → decreased antiplatelet effect. Use alternative PPI (pantoprazole) if possible.", s: "high"},
            {d: "Methotrexate", m: "PPIs may increase methotrexate levels.", s: "med"},
            {d: "Drugs Requiring Acid for Absorption (Ketoconazole, Iron, B12)", m: "Reduced absorption due to increased gastric pH.", s: "med"},
            {d: "Warfarin", m: "May increase warfarin levels — monitor INR.", s: "low"}
        ],
        dosage: "GERD: 20mg PO daily × 4-8 weeks. Maintenance: 20mg daily. PUD: 20-40mg daily × 4-8 weeks. H. pylori: 20mg twice daily (with antibiotics) × 10-14 days. Zollinger-Ellison: 60mg daily or higher.",
        admin: "Oral (capsules, tablets, ODT, powder for suspension). Take 30-60 minutes BEFORE meals (before breakfast for once-daily dosing). Capsules should be swallowed whole. ODT dissolves on tongue.",
        nurse: "Take BEFORE meals (30-60 min before breakfast is ideal). Short-term use is generally safe. ⚠️ LONG-TERM USE concerns: Monitor B12, magnesium, and consider bone density. Review necessity periodically — many patients remain on PPIs longer than needed. Not for immediate heartburn relief (use antacids for acute symptoms). Counsel on lifestyle modifications (elevate head of bed, avoid triggers, weight loss). Do not stop abruptly after long-term use — may cause rebound acid hypersecretion."
    },
    {
        g: "Famotidine", b: "Pepcid", c: "H2 Receptor Antagonist", cat: "gi",
        m: "Competitively blocks HISTAMINE H2 receptors on gastric parietal cells, reducing basal and stimulated gastric acid secretion. Less potent acid suppression than PPIs but faster onset. Preferred H2 blocker (fewer drug interactions than cimetidine).",
        ind: "GERD (mild to moderate). Peptic ulcer disease. Stress ulcer prophylaxis. Heartburn (OTC). Zollinger-Ellison syndrome.",
        con: "Known hypersensitivity. Adjust dose in renal impairment.",
        aec: "Generally well-tolerated. Headache, dizziness, constipation, diarrhea. Less CNS effects than cimetidine.",
        aes: "QT prolongation (rare, especially with IV use). CNS effects in elderly or renal impairment (confusion, hallucinations — less than cimetidine). Thrombocytopenia (rare).",
        inter: [
            {d: "Drugs Requiring Acid for Absorption", m: "Reduced absorption of ketoconazole, itraconazole, iron, calcium.", s: "med"},
            {d: "No significant CYP450 interactions", m: "Unlike cimetidine, famotidine does NOT significantly inhibit CYP enzymes.", s: "low"}
        ],
        dosage: "GERD: 20mg PO twice daily or 40mg at bedtime. PUD: 40mg at bedtime × 4-8 weeks. Maintenance: 20mg at bedtime. OTC heartburn: 10-20mg as needed (max 2 doses/day).",
        admin: "Oral (tablets, oral suspension), IV. May take with or without food. Can give at bedtime for nocturnal acid suppression.",
        nurse: "PREFERRED H2 blocker — fewer drug interactions than cimetidine, no gynecomastia. Faster onset than PPIs — useful for breakthrough symptoms. Less potent than PPIs — often used as step-down therapy or for mild symptoms. Adjust dose in RENAL IMPAIRMENT. May give IV for stress ulcer prophylaxis in ICU. Watch for confusion in elderly, especially with renal impairment. OTC available for occasional heartburn."
    },
    {
        g: "Sucralfate", b: "Carafate", c: "Mucosal Protectant", cat: "gi",
        m: "In the acidic environment of the stomach, forms a sticky, paste-like substance that binds to ulcer craters, creating a protective BARRIER over the ulcer. Also stimulates prostaglandin and mucus production. Does NOT reduce acid secretion — provides physical protection.",
        ind: "Duodenal ulcer (treatment and maintenance). Stress ulcer prophylaxis. Gastritis. GERD (adjunct).",
        con: "Known hypersensitivity. Caution in renal failure (contains aluminum).",
        aec: "CONSTIPATION (most common — aluminum-containing). Dry mouth, nausea, GI discomfort.",
        aes: "Aluminum accumulation (in severe renal impairment — can cause aluminum toxicity, encephalopathy, osteomalacia). Bezoar formation (rare).",
        inter: [
            {d: "Many Drugs", m: "Sucralfate binds to many drugs in the GI tract, REDUCING THEIR ABSORPTION: quinolones, tetracyclines, phenytoin, digoxin, ketoconazole, levothyroxine, warfarin.", s: "high"},
            {d: "Timing Critical", m: "Take sucralfate 2 hours BEFORE or AFTER other medications to avoid interactions.", s: "high"}
        ],
        dosage: "Active ulcer: 1g PO four times daily (1 hour before meals and at bedtime). Maintenance: 1g twice daily.",
        admin: "Oral (tablets, suspension). Take on EMPTY STOMACH — 1 hour BEFORE meals and at bedtime. ⚠️ Separate from other medications by 2 hours.",
        nurse: "⚠️ TIMING is critical: Take 1 hour BEFORE meals (needs acidic environment to work). Separate from ALL other medications by at least 2 hours (binds to many drugs and reduces absorption). Constipation is common — encourage fluids and fiber. Does NOT reduce acid — works by coating the ulcer. Often used in combination with acid-suppressing agents. Contains aluminum — caution in renal failure."
    },
    {
        g: "Aluminum/Magnesium Hydroxide", b: "Maalox, Mylanta", c: "Antacid (Combination)", cat: "gi",
        m: "NEUTRALIZES gastric acid by chemical reaction. Aluminum hydroxide and magnesium hydroxide are combined to balance their GI effects: aluminum causes CONSTIPATION, magnesium causes DIARRHEA — together they tend to cancel out.",
        ind: "Heartburn, acid indigestion, sour stomach (symptomatic relief). GERD symptoms. Hyperphosphatemia (aluminum binds dietary phosphate in renal failure).",
        con: "Renal failure (aluminum and magnesium accumulation). Bowel obstruction.",
        aec: "Combination products minimize GI effects. Aluminum alone: constipation, hypophosphatemia. Magnesium alone: diarrhea, hypermagnesemia (in renal failure).",
        aes: "In RENAL FAILURE: Aluminum toxicity (encephalopathy, osteomalacia). Magnesium toxicity (muscle weakness, respiratory depression, cardiac effects). Phosphate depletion with chronic aluminum use.",
        inter: [
            {d: "Quinolones (Ciprofloxacin), Tetracyclines", m: "Chelation — dramatically reduced antibiotic absorption. Separate by 2-4 hours.", s: "high"},
            {d: "Many Drugs", m: "Antacids can bind to or alter absorption of digoxin, iron, isoniazid, ketoconazole. Separate administration.", s: "med"},
            {d: "Enteric-Coated Medications", m: "Increased gastric pH may cause premature dissolution of enteric coatings.", s: "med"}
        ],
        dosage: "10-20mL or 2-4 tablets PO between meals and at bedtime as needed. Maximum varies by product.",
        admin: "Oral (liquid, chewable tablets). Take 1-3 hours AFTER meals and at bedtime (when acid secretion is highest). Chew tablets thoroughly. Separate from other medications by at least 2 hours.",
        nurse: "RAPID relief (within minutes) but SHORT duration (30-60 min on empty stomach, 2-3 hours if taken after food). Combination products balance constipation (Al) and diarrhea (Mg). ⚠️ AVOID in renal failure — toxic accumulation of aluminum and magnesium. Many DRUG INTERACTIONS — separate from other meds by 2 hours minimum. Check sodium content in patients with HTN/CHF (some products are high in sodium). Not for long-term use — treat underlying cause."
    },
    {
        g: "Ondansetron", b: "Zofran", c: "Antiemetic (5-HT3 Antagonist)", cat: "gi",
        m: "Selectively blocks SEROTONIN 5-HT3 receptors in the chemoreceptor trigger zone (CTZ) and vagal afferents in the GI tract. These receptors play a key role in chemotherapy-induced and postoperative nausea/vomiting. Does NOT cause sedation or extrapyramidal symptoms.",
        ind: "CHEMOTHERAPY-INDUCED nausea and vomiting (CINV) — highly effective. Postoperative nausea and vomiting (PONV). Radiation-induced nausea. Off-label: Gastroenteritis, hyperemesis gravidarum.",
        con: "Known hypersensitivity. Congenital long QT syndrome. Use with caution in patients at risk for QT prolongation.",
        aec: "Headache (most common), constipation, dizziness, fatigue, diarrhea.",
        aes: "⚠️ QT PROLONGATION — can cause torsades de pointes (dose-dependent, especially IV). Serotonin syndrome (rare, with other serotonergic drugs). Hypersensitivity reactions.",
        inter: [
            {d: "QT-Prolonging Drugs", m: "Additive QT prolongation — avoid or use caution with other QT-prolonging medications.", s: "high"},
            {d: "Serotonergic Drugs (SSRIs, SNRIs)", m: "Theoretical risk of serotonin syndrome (rare).", s: "low"},
            {d: "Apomorphine", m: "Profound hypotension — contraindicated.", s: "high"}
        ],
        dosage: "CINV: 8mg PO 30 min before chemo, then 8mg every 8-12 hours × 1-2 days. IV: 8-24mg before chemo. PONV prevention: 4mg IV at end of surgery. Maximum single IV dose: 16mg (due to QT risk).",
        admin: "Oral (tablets, ODT, solution), IV, IM. ODT dissolves on tongue without water. IV should be given slowly. For chemotherapy: give 30 minutes BEFORE treatment.",
        nurse: "⚠️ ECG monitoring recommended with IV doses, especially >16mg or in patients with QT risk factors. Highly effective for CINV — first-line agent. Does NOT cause sedation or dystonia (unlike dopamine antagonists). CONSTIPATION is common side effect — not diarrhea. ODT form good for patients who cannot swallow or are actively nauseous. Headache is most common complaint. Maximum single IV dose is 16mg due to QT prolongation risk."
    },
    {
        g: "Prochlorperazine", b: "Compazine", c: "Antiemetic (Dopamine Antagonist/Phenothiazine)", cat: "gi",
        m: "Blocks DOPAMINE D2 receptors in the chemoreceptor trigger zone (CTZ). As a phenothiazine, also has antihistaminic and anticholinergic effects. Effective antiemetic but carries risk of extrapyramidal side effects.",
        ind: "Nausea and vomiting (various causes). Migraine-associated nausea. Postoperative nausea. NOT first-line for CINV (5-HT3 antagonists preferred).",
        con: "Children under 2 years or under 20 pounds (increased dystonia risk). Parkinson's disease (worsens symptoms). Severe CNS depression. Bone marrow suppression.",
        aec: "Sedation, drowsiness, dizziness. Anticholinergic effects (dry mouth, blurred vision, constipation, urinary retention). Orthostatic hypotension.",
        aes: "⚠️ EXTRAPYRAMIDAL SYMPTOMS (EPS): Acute DYSTONIA (torticollis, oculogyric crisis — especially in young adults), akathisia, parkinsonism. ⚠️ TARDIVE DYSKINESIA (with prolonged use). NEUROLEPTIC MALIGNANT SYNDROME (rare). QT prolongation.",
        inter: [
            {d: "CNS Depressants (Alcohol, Opioids, Benzodiazepines)", m: "Additive CNS depression.", s: "high"},
            {d: "Anticholinergics", m: "Additive anticholinergic effects.", s: "med"},
            {d: "Dopamine Agonists (Levodopa)", m: "Antagonistic effects — may worsen Parkinson's.", s: "high"},
            {d: "QT-Prolonging Drugs", m: "Additive QT prolongation risk.", s: "med"}
        ],
        dosage: "Adults: 5-10mg PO 3-4 times daily. IM: 5-10mg every 3-4 hours (max 40mg/day). Rectal: 25mg twice daily. IV: 2.5-10mg slow push.",
        admin: "Oral, IM, IV, rectal. IV push slowly to reduce hypotension risk. Deep IM injection.",
        nurse: "⚠️ Monitor for EPS, especially ACUTE DYSTONIA in young adults (sudden neck twisting, eye rolling) — treat with diphenhydramine (Benadryl) or benztropine. Avoid in Parkinson's disease. Causes sedation — falls precautions. ⚠️ AVOID in children < 2 years (high dystonia risk). Orthostatic hypotension — rise slowly. Less effective than ondansetron for CINV. Better for general nausea, migraines."
    },
    {
        g: "Metoclopramide", b: "Reglan", c: "Prokinetic / Antiemetic (Dopamine Antagonist)", cat: "gi",
        m: "Dual mechanism: (1) Blocks dopamine D2 receptors in CTZ (antiemetic effect). (2) Enhances GI motility by sensitizing tissues to acetylcholine and blocking dopamine in the myenteric plexus (PROKINETIC effect — speeds gastric emptying).",
        ind: "DIABETIC GASTROPARESIS. GERD (short-term). Nausea and vomiting. Facilitates small bowel intubation. Postoperative ileus. CINV (adjunct).",
        con: "GI obstruction, perforation, or hemorrhage. Pheochromocytoma. Seizure disorders. Parkinson's disease. ⚠️ History of TARDIVE DYSKINESIA.",
        aec: "Restlessness, drowsiness, fatigue, diarrhea. Anxiety, agitation.",
        aes: "⚠️ BLACK BOX WARNING: TARDIVE DYSKINESIA — irreversible involuntary movements (lip smacking, tongue protrusion) can occur, especially with long-term use (>12 weeks). Risk increases with duration and cumulative dose. EXTRAPYRAMIDAL SYMPTOMS (dystonia, akathisia). Depression, suicidal ideation. NEUROLEPTIC MALIGNANT SYNDROME (rare).",
        inter: [
            {d: "CNS Depressants", m: "Additive sedation.", s: "med"},
            {d: "Dopamine Agonists (Levodopa)", m: "Antagonistic effects — worsens Parkinson's symptoms.", s: "high"},
            {d: "Drugs with Anticholinergic Effects", m: "May reduce prokinetic effect of metoclopramide.", s: "med"},
            {d: "Opioids", m: "Metoclopramide enhances absorption of opioids; opioids antagonize GI motility effect.", s: "med"}
        ],
        dosage: "Gastroparesis: 10mg PO 30 min before meals and at bedtime. GERD: 10-15mg PO up to 4 times daily. Antiemetic: 10-20mg IV/IM. ⚠️ Limit treatment to < 12 weeks.",
        admin: "Oral, IV, IM. Give 30 minutes BEFORE meals for gastroparesis. IV push slowly (over 1-2 min for doses <10mg). Available as ODT.",
        nurse: "⚠️ BLACK BOX: Do NOT use > 12 WEEKS — high risk of TARDIVE DYSKINESIA which is often IRREVERSIBLE. Monitor for abnormal movements at every visit. Counsel patient/family to report any involuntary movements. Give 30 min BEFORE meals to improve gastric emptying. Avoid in Parkinson's disease. Watch for EPS (dystonia, akathisia) — more common in young adults. Depression monitoring important. Document indication and planned duration clearly."
    },
    {
        g: "Polyethylene Glycol (PEG)", b: "MiraLAX, GoLYTELY (bowel prep)", c: "Laxative (Osmotic)", cat: "gi",
        m: "Non-absorbable OSMOTIC agent that retains water in the bowel lumen through osmotic activity, softening stool and increasing stool frequency. Does not stimulate the bowel — works passively. No significant electrolyte shifts with low-dose use.",
        ind: "Occasional CONSTIPATION (MiraLAX). BOWEL PREPARATION for colonoscopy (GoLYTELY — large volume PEG with electrolytes). Chronic constipation. Fecal impaction (with electrolyte solution).",
        con: "Known or suspected GI obstruction. Bowel perforation. Toxic colitis/megacolon.",
        aec: "Bloating, cramping, flatulence, nausea. Diarrhea (excessive use). Electrolyte disturbances minimal with OTC dose.",
        aes: "Severe dehydration and electrolyte imbalance (with bowel prep volumes or prolonged high-dose use). Aspiration (if administered improperly in patients at risk).",
        inter: [
            {d: "Minimal Drug Interactions", m: "PEG is not significantly absorbed — few drug interactions.", s: "low"},
            {d: "Other Oral Medications", m: "May reduce absorption if severe diarrhea occurs — separate dosing.", s: "low"}
        ],
        dosage: "Constipation (MiraLAX): 17g (1 capful) dissolved in 8 oz liquid PO once daily. Bowel prep (GoLYTELY): 240mL every 10 min until 4 liters consumed or effluent clear.",
        admin: "Oral. Mix powder with any liquid (water, juice). Bowel prep: usually split-dose protocol (half evening before, half morning of procedure). Refrigerate bowel prep solution to improve palatability.",
        nurse: "MiraLAX: Safe for daily use in chronic constipation — takes 1-3 days for effect. Mix in any beverage. OTC available. Does not cause dependence or stimulate bowel. BOWEL PREP: Very large volumes — ensure patient can drink safely (aspiration risk in elderly/dysphagia). Split-dose protocols improve tolerability and cleansing. Monitor for signs of dehydration. Clear liquids only during prep. Adequate prep is critical for successful colonoscopy."
    },
    {
        g: "Bisacodyl", b: "Dulcolax", c: "Laxative (Stimulant)", cat: "gi",
        m: "Stimulates sensory nerve endings in the colonic mucosa, triggering peristalsis. Also increases fluid and electrolyte secretion into the bowel lumen. Acts directly on the colon — produces bowel movement within 6-12 hours (oral) or 15-60 minutes (rectal).",
        ind: "Occasional constipation. Bowel preparation for procedures (with other agents). Evacuation before diagnostic procedures.",
        con: "Intestinal obstruction. Acute surgical abdomen. Acute inflammatory bowel conditions. Fecal impaction (use osmotic agents first).",
        aec: "Abdominal cramps (common), nausea, diarrhea, rectal burning (suppository).",
        aes: "ELECTROLYTE IMBALANCE (hypokalemia) with chronic use. Dehydration. Laxative dependence ('lazy bowel') with chronic use. Cathartic colon (rare, with long-term abuse).",
        inter: [
            {d: "Antacids, PPIs, H2 Blockers, Milk", m: "Do NOT take within 1 hour of bisacodyl tablets — can dissolve enteric coating and cause gastric irritation/cramping.", s: "med"},
            {d: "Diuretics", m: "Additive potassium loss.", s: "med"}
        ],
        dosage: "Oral: 5-15mg (1-3 tablets) once daily, usually at bedtime. Rectal (suppository): 10mg once daily. Bowel prep: per protocol (often combined with other agents).",
        admin: "Oral tablets are ENTERIC-COATED — swallow whole, do not crush or chew. Take on empty stomach. Rectal suppository: retain as long as comfortable. Do NOT take tablets with milk or antacids.",
        nurse: "SWALLOW tablets WHOLE — enteric coating prevents stomach irritation. Do NOT take within 1 hour of milk, antacids, or acid-suppressing drugs. Works in 6-12 hours (oral) — usually given at BEDTIME for morning bowel movement. Suppository works in 15-60 minutes — useful when rapid results needed. NOT for daily long-term use — can cause dependence. Monitor potassium with frequent use. Encourage fiber, fluids, and exercise for chronic constipation management."
    },
    {
        g: "Loperamide", b: "Imodium", c: "Antidiarrheal (Opioid Agonist)", cat: "gi",
        m: "Synthetic opioid that acts on MU-OPIOID RECEPTORS in the GI tract, slowing intestinal motility and reducing fluid/electrolyte secretion. Does NOT cross the blood-brain barrier at therapeutic doses — no CNS or analgesic effects. No abuse potential at normal doses.",
        ind: "Acute nonspecific diarrhea. Chronic diarrhea (inflammatory bowel disease, short bowel syndrome). Traveler's diarrhea. Ileostomy output management.",
        con: "Bloody diarrhea or fever (suggests infectious etiology that may worsen with slowing motility). C. difficile colitis. Bacterial enterocolitis (Salmonella, Shigella, Campylobacter). Acute ulcerative colitis. Children under 2 years.",
        aec: "Constipation (if overused), abdominal cramps, nausea, dizziness, dry mouth.",
        aes: "⚠️ TOXIC MEGACOLON (if used in infectious colitis — bacteria retained). QT prolongation and cardiac arrhythmias with massive overdoses (abuse). Severe constipation/ileus. CNS depression in overdose.",
        inter: [
            {d: "P-glycoprotein Inhibitors (Quinidine, Ritonavir)", m: "May increase loperamide levels, potentially allowing CNS penetration.", s: "med"},
            {d: "Opioids", m: "Additive constipating effect.", s: "low"}
        ],
        dosage: "Acute diarrhea: 4mg initially, then 2mg after each loose stool. Maximum 16mg/day (OTC) or 8mg/day for self-treatment. Chronic diarrhea: 4-8mg/day in divided doses.",
        admin: "Oral (tablets, capsules, liquid). May take with or without food. Use only for short-term (48 hours max for acute diarrhea) unless directed by provider.",
        nurse: "⚠️ Do NOT use in bloody/mucoid diarrhea or with fever — slowing motility can worsen infectious diarrhea (toxic megacolon, prolonged infection). Safe and effective for NON-INFECTIOUS diarrhea. OTC available. Maintain hydration — loperamide treats symptoms but does not replace fluids/electrolytes. Limit use to 48 hours for acute self-treatment — see provider if diarrhea persists. At normal doses: no CNS effects, no abuse potential, not a controlled substance."
    }
];
