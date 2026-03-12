/* Block 3a — Respiratory: Upper Airway & Secretion Management (10 drugs)
   Source: respiratory_pharm.txt (Slides 5-33) */

const data_respiratory_part1 = [
    {
        g: "Diphenhydramine", b: "Benadryl", c: "Antihistamine (1st Generation)", cat: "resp",
        m: "Selectively blocks H1 histamine receptors, preventing histamine-mediated allergic responses. Inhibits smooth muscle constriction in blood vessels and respiratory tract. Decreases capillary permeability. Also has significant ANTICHOLINERGIC and sedating effects due to CNS penetration across the blood-brain barrier.",
        ind: "Allergic rhinitis, allergic conjunctivitis, urticaria (hives), angioedema. Respiratory cold and allergy symptoms. Motion sickness. Insomnia (OTC sleep aid). Mild extrapyramidal symptoms. Adjunct in anaphylaxis.",
        con: "Angle-closure glaucoma. Urinary retention/BPH (anticholinergic effects worsen obstruction). Severe asthma attack (thickens secretions). MAOIs (intensifies anticholinergic effects). Caution in elderly — Beers Criteria drug.",
        aec: "ANTICHOLINERGIC EFFECTS: Dry mouth, blurred vision, constipation, urinary retention. SEDATION (drowsiness, dizziness, confusion) — most common complaint. Headache, thickened bronchial secretions.",
        aes: "Paradoxical CNS excitation in children (flushed face, fever, tachycardia, pupil dilation, hallucinations, seizures). Severe anticholinergic toxicity ('mad as a hatter, blind as a bat, dry as a bone, red as a beet, hot as a hare'). Falls in elderly.",
        inter: [
            {d: "CNS Depressants (Alcohol, Opioids, Benzodiazepines)", m: "Additive CNS depression and sedation — avoid driving.", s: "high"},
            {d: "Other Anticholinergic Drugs (TCAs, Atropine)", m: "Additive anticholinergic effects — risk of toxicity.", s: "high"},
            {d: "MAOIs", m: "Intensifies and prolongs anticholinergic effects.", s: "high"}
        ],
        dosage: "Adults: 25-50mg PO every 4-6 hours. Maximum 300mg/day. Sleep aid: 25-50mg at bedtime. IM/IV: 10-50mg. Children 6-12: 12.5-25mg every 4-6 hours.",
        admin: "Oral (tablets, capsules, liquid), IM, IV. IV should be administered slowly (25mg/min). Take with food to reduce GI upset. Available OTC.",
        nurse: "Avoid in ELDERLY — high anticholinergic burden, increased fall risk, cognitive impairment (Beers Criteria). Monitor for anticholinergic syndrome: dry mouth, urinary retention, constipation, tachycardia, confusion. Warn about SEDATION — do not drive or operate machinery. Paradoxical excitation in children. Caution with asthma — may thicken secretions. Teach patient to use sugarless gum/candy for dry mouth."
    },
    {
        g: "Loratadine", b: "Claritin", c: "Antihistamine (2nd Generation)", cat: "resp",
        m: "Selectively blocks peripheral H1 histamine receptors. DOES NOT CROSS the blood-brain barrier significantly — resulting in minimal CNS/sedating effects. No significant anticholinergic activity. Called 'non-sedating antihistamine.'",
        ind: "Seasonal and perennial allergic rhinitis. Chronic idiopathic urticaria (hives). Allergic conjunctivitis. Preferred over 1st generation antihistamines for daytime use when sedation is undesirable.",
        con: "Known hypersensitivity. Severe hepatic impairment (reduce dose). Caution with QT-prolonging conditions at high doses.",
        aec: "Headache, fatigue, dry mouth (minimal compared to 1st gen), nausea, somnolence (much less than diphenhydramine).",
        aes: "Rare: cardiac arrhythmias at very high doses (QT prolongation reported in overdose). Hypersensitivity reactions.",
        inter: [
            {d: "CYP3A4 Inhibitors (Ketoconazole, Erythromycin)", m: "Increased loratadine levels, but clinical significance is low.", s: "low"},
            {d: "CNS Depressants", m: "Minimal additive sedation — much less than 1st gen antihistamines.", s: "low"}
        ],
        dosage: "Adults and children ≥6 years: 10mg PO once daily. Children 2-5 years: 5mg once daily. Reditabs (ODT) available.",
        admin: "Oral (tablets, liquid, orally disintegrating tablets). Once-daily dosing. May take with or without food. Available OTC.",
        nurse: "PREFERRED over 1st generation antihistamines for most patients due to minimal sedation and no anticholinergic effects. Safe for daytime use — does not impair driving. Once-daily dosing improves adherence. Onset of action is slower than diphenhydramine (1-3 hours). Reditabs dissolve on tongue without water. Reduce dose in hepatic impairment."
    },
    {
        g: "Fexofenadine", b: "Allegra", c: "Antihistamine (3rd Generation)", cat: "resp",
        m: "Active metabolite of terfenadine. Selectively blocks peripheral H1 histamine receptors with virtually NO CNS penetration. No anticholinergic effects. 3rd generation antihistamines have LOWER cardiac toxicity risk than 2nd generation in patients with metabolic issues.",
        ind: "Seasonal allergic rhinitis. Chronic idiopathic urticaria. Preferred when complete avoidance of sedation is required.",
        con: "Known hypersensitivity. Severe renal impairment (reduce dose).",
        aec: "Headache, nausea, dysmenorrhea, drowsiness (rare — not significantly different from placebo in studies).",
        aes: "Hypersensitivity reactions (rare). Lower risk of cardiac arrhythmias compared to older 2nd-generation agents.",
        inter: [
            {d: "Antacids (Aluminum/Magnesium)", m: "Decreased absorption of fexofenadine — separate by 2 hours.", s: "med"},
            {d: "Fruit Juices (Grapefruit, Orange, Apple)", m: "Can decrease absorption by up to 36% — take with WATER only.", s: "med"},
            {d: "Ketoconazole, Erythromycin", m: "Increased fexofenadine levels, but no QT prolongation (unlike older agents).", s: "low"}
        ],
        dosage: "Adults and children ≥12 years: 60mg PO twice daily OR 180mg once daily. Children 2-11 years: 30mg twice daily.",
        admin: "Oral (tablets, ODT, suspension). Take with WATER — avoid fruit juices. May take without regard to food. Separate from antacids by 2 hours.",
        nurse: "TRUE non-sedating antihistamine — ideal for patients who need to remain fully alert. Teach patient to take with WATER ONLY (not juice). No anticholinergic side effects. Safe alternative in elderly patients. Reduce dose in severe renal impairment. No significant drug interactions with CYP3A4 inhibitors (safer than older agents)."
    },
    {
        g: "Pseudoephedrine", b: "Sudafed", c: "Decongestant (Systemic/Sympathomimetic)", cat: "resp",
        m: "SYMPATHOMIMETIC agent that acts on alpha-adrenergic receptors in nasal mucosa, causing VASOCONSTRICTION. Shrinks swollen nasal membranes, reduces inflammation, and opens nasal passages. Also has some beta-adrenergic activity.",
        ind: "Nasal and sinus congestion from colds, flu, allergies, and sinusitis. Eustachian tube congestion.",
        con: "Severe or uncontrolled HYPERTENSION. Severe coronary artery disease. MAOIs (within 14 days — hypertensive crisis). Narrow-angle glaucoma. Symptomatic prostatic hypertrophy (urinary retention).",
        aec: "ADRENERGIC/CNS STIMULATION: Nervousness, restlessness, insomnia, tremor. Tachycardia, palpitations. Headache, dizziness. Elevated blood pressure.",
        aes: "HYPERTENSION (can be significant). Cardiac arrhythmias. Stroke (rare, with abuse). Urinary retention in males with BPH.",
        inter: [
            {d: "MAOIs", m: "CONTRAINDICATED — severe hypertensive crisis.", s: "high"},
            {d: "Antihypertensives (Beta-blockers, ACE inhibitors)", m: "Pseudoephedrine may DECREASE antihypertensive effect.", s: "high"},
            {d: "Caffeine/Other Stimulants", m: "Additive CNS and cardiovascular stimulation.", s: "med"},
            {d: "Tricyclic Antidepressants", m: "Enhanced pressor response.", s: "med"}
        ],
        dosage: "Adults: 60mg PO every 4-6 hours. Maximum 240mg/day. Extended-release: 120mg every 12 hours or 240mg once daily. Children vary by age.",
        admin: "Oral (tablets, liquid, extended-release). ER tablets should not be crushed. Take during the day — AVOID at bedtime due to insomnia. Behind-the-counter (requires ID) due to methamphetamine precursor.",
        nurse: "Monitor BLOOD PRESSURE — avoid or use cautiously in hypertension, heart disease, hyperthyroidism, diabetes. Avoid at BEDTIME due to insomnia. Avoid caffeine and alcohol. Behind-the-counter sales (ID required, purchase limits) due to meth lab diversion. More effective than phenylephrine but greater cardiovascular effects. Teach patient to report palpitations, chest pain, severe headache."
    },
    {
        g: "Phenylephrine", b: "Sudafed PE, Neo-Synephrine (nasal spray)", c: "Decongestant (Systemic & Topical Sympathomimetic)", cat: "resp",
        m: "Selective ALPHA-1 adrenergic agonist causing vasoconstriction of nasal blood vessels, reducing swelling and congestion. Less beta activity than pseudoephedrine. Available as oral and topical (nasal spray) formulations.",
        ind: "Nasal congestion from colds, flu, allergies, sinusitis. Hypotension (IV form). Pupil dilation (ophthalmic).",
        con: "Severe or uncontrolled hypertension. Severe coronary artery disease. MAOIs. Topical: do NOT use nasal spray for more than 3 DAYS (rebound congestion).",
        aec: "Oral: Less CNS stimulation than pseudoephedrine. Nasal spray: Burning, stinging, dryness, sneezing. Mild increase in blood pressure.",
        aes: "REBOUND CONGESTION (rhinitis medicamentosa) — occurs if nasal spray used > 3 days. Hypertension. Cardiac arrhythmias (rare).",
        inter: [
            {d: "MAOIs", m: "Risk of hypertensive crisis (less than pseudoephedrine but still avoid).", s: "high"},
            {d: "Antihypertensives", m: "May reduce antihypertensive effect.", s: "med"},
            {d: "Other Alpha-agonists", m: "Additive vasoconstriction.", s: "med"}
        ],
        dosage: "Oral: 10mg every 4 hours (OTC has been shown to have limited efficacy). Nasal spray: 2-3 sprays in each nostril every 4 hours. MAX 3 DAYS for nasal spray.",
        admin: "Oral (tablets), nasal spray. Oral form available OTC (no ID required, unlike pseudoephedrine). Nasal spray provides faster onset but risk of rebound.",
        nurse: "CRITICAL TEACHING for nasal spray: Do NOT use for more than 3 DAYS — causes REBOUND CONGESTION (rhinitis medicamentosa) where congestion becomes worse than the original problem. Oral phenylephrine has LESS impact on BP than pseudoephedrine but also appears LESS EFFECTIVE (studies question oral efficacy). Available without ID (unlike pseudoephedrine). Monitor for rebound congestion symptoms."
    },
    {
        g: "Dextromethorphan", b: "Robitussin DM, Delsym", c: "Antitussive (Non-Opioid Cough Suppressant)", cat: "resp",
        m: "Suppresses cough by acting on the cough center in the MEDULLA of the brainstem. Chemically related to opioids but does NOT bind to opioid receptors at therapeutic doses — no analgesic effect, minimal abuse potential at normal doses, and no respiratory depression.",
        ind: "Symptomatic relief of NONPRODUCTIVE (dry) COUGH. NOT for productive cough (coughing up mucus) — suppressing productive cough can lead to mucus buildup and infection.",
        con: "Productive cough (may cause mucus retention and infection risk). Concurrent MAOIs (serotonin syndrome). Caution in patients taking SSRIs/SNRIs.",
        aec: "Drowsiness (less than opioid antitussives), dizziness, nausea, GI upset, headache.",
        aes: "SEROTONIN SYNDROME (with MAOIs or serotonergic drugs). Abuse potential at HIGH doses (dissociative effects at 10-30× therapeutic dose — 'robotripping'). CNS depression.",
        inter: [
            {d: "MAOIs", m: "Risk of SEROTONIN SYNDROME — avoid combination.", s: "high"},
            {d: "SSRIs/SNRIs", m: "Increased serotonin syndrome risk.", s: "med"},
            {d: "CYP2D6 Inhibitors (Fluoxetine, Paroxetine)", m: "Increased dextromethorphan levels.", s: "med"},
            {d: "CNS Depressants", m: "Additive sedation (less than codeine).", s: "low"}
        ],
        dosage: "Adults: 10-20mg PO every 4 hours OR 30mg every 6-8 hours. Extended-release (Delsym): 60mg every 12 hours. Maximum 120mg/day. Often in combination products.",
        admin: "Oral (liquid, capsules, lozenges, extended-release suspension). Often combined with guaifenesin, decongestants, or antihistamines in OTC products. Take with full glass of water.",
        nurse: "Only for NONPRODUCTIVE (dry) cough — do NOT suppress productive cough (risks infection). Lesser CNS effects than codeine — preferred OTC cough suppressant. Watch for abuse in adolescents ('robotripping' at high doses). Avoid with MAOIs. If cough persists beyond 1 week or is accompanied by fever, seek medical evaluation. Check combination products for other active ingredients."
    },
    {
        g: "Benzonatate", b: "Tessalon, Tessalon Perles", c: "Antitussive (Non-Opioid/Peripheral)", cat: "resp",
        m: "Related to local anesthetics (similar to tetracaine). Anesthetizes stretch receptors in the respiratory tract, lungs, and pleura, reducing cough reflex at the SOURCE rather than suppressing the cough center in the brain.",
        ind: "Symptomatic relief of nonproductive cough. Alternative when CNS-acting antitussives are undesirable.",
        con: "Known hypersensitivity. Children under 10 years (accidental ingestion of dissolved capsule contents can cause fatal overdose). Do NOT chew or dissolve capsules.",
        aec: "Sedation (less than dextromethorphan), dizziness, headache, nasal congestion, constipation, nausea, pruritus.",
        aes: "SEVERE HYPERSENSITIVITY REACTIONS (bronchospasm, laryngospasm, cardiovascular collapse) if capsule is chewed/dissolved and drug contacts oral mucosa. Choking hazard in children. Overdose can cause seizures, cardiac arrest.",
        inter: [
            {d: "CNS Depressants", m: "Additive sedation (minimal).", s: "low"},
            {d: "Local Anesthetics", m: "Potential additive anesthetic effects.", s: "low"}
        ],
        dosage: "Adults and children >10 years: 100-200mg PO three times daily as needed. Maximum 600mg/day.",
        admin: "Oral capsules (soft gelatin 'perles'). MUST be swallowed WHOLE — do NOT chew, dissolve, or break open capsule. If contents contact oral mucosa, can cause numbing → choking hazard and severe hypersensitivity.",
        nurse: "CRITICAL SAFETY: Capsules must be swallowed WHOLE. If chewed or broken, the released drug can anesthetize the mouth and throat → choking, aspiration, and severe allergic reactions. Not safe for children < 10 (accidental deaths reported from chewing capsules). Prescription only. Less CNS depression than codeine or dextromethorphan. Store away from children."
    },
    {
        g: "Guaifenesin", b: "Mucinex, Robitussin", c: "Expectorant", cat: "resp",
        m: "Increases the volume and reduces the viscosity (thickness) of respiratory tract secretions. Works by stimulating the gastric mucosa, which triggers a reflex secretion of respiratory tract fluid. Makes it easier to cough up and clear mucus from the airways.",
        ind: "Symptomatic relief of PRODUCTIVE cough — helps loosen and thin mucus for easier expectoration. Chest congestion from colds, bronchitis, flu.",
        con: "Known hypersensitivity. Persistent cough due to smoking, asthma, chronic bronchitis, or emphysema (requires medical evaluation first).",
        aec: "Nausea, vomiting, GI upset (due to gastric irritation mechanism), dizziness, headache, rash.",
        aes: "Bronchospasm (rare, in patients with asthma). Kidney stones (rare, with excessive use).",
        inter: [
            {d: "None significant", m: "Guaifenesin has no major drug interactions.", s: "low"}
        ],
        dosage: "Adults: 200-400mg PO every 4 hours. Maximum 2.4g/day. Extended-release (Mucinex): 600-1200mg every 12 hours. Maximum 2.4g/day.",
        admin: "Oral (tablets, liquid, extended-release tablets). Extended-release tablets should NOT be crushed or chewed. DRINK PLENTY OF FLUIDS — essential for effectiveness (fluid helps thin secretions).",
        nurse: "CRITICAL TEACHING: Must drink PLENTY OF FLUIDS (water) — guaifenesin works by increasing respiratory secretions, and adequate hydration is essential for full benefit. Use for PRODUCTIVE cough (unlike dextromethorphan which is for dry cough). Very safe — OTC, no significant drug interactions. May be combined with other cold medications. If cough persists > 7 days or worsens, seek medical evaluation."
    },
    {
        g: "Acetylcysteine", b: "Mucomyst, Acetadote", c: "Mucolytic", cat: "resp",
        m: "Breaks down the DISULFIDE BONDS in mucus glycoproteins, reducing mucus viscosity and making it easier to clear by coughing. Has a distinctive ROTTEN EGG (sulfur) ODOR. Also serves as an ANTIDOTE for acetaminophen (Tylenol) overdose by replenishing glutathione in the liver.",
        ind: "Inhaled: Adjunctive mucolytic therapy in bronchitis, COPD, cystic fibrosis, pneumonia, emphysema. Tracheostomy care. Pre-bronchoscopy airway clearance. IV/Oral: ANTIDOTE for ACETAMINOPHEN TOXICITY (prevents hepatotoxicity if given within 8-10 hours of overdose).",
        con: "Acetylcysteine commonly causes VOMITING — avoid in peptic ulcer disease, esophageal varices, active GI bleeding (aspiration risk).",
        aec: "ROTTEN EGG ODOR (sulfur smell — warn patient). Nausea, vomiting (common — especially oral/IV forms). Rhinorrhea, drowsiness. Inhalation: Bronchospasm (more common in asthmatics).",
        aes: "BRONCHOSPASM — can trigger acute bronchospasm especially in patients with asthma. Aspiration (secondary to vomiting). Anaphylactoid reactions with IV use.",
        inter: [
            {d: "Activated Charcoal", m: "Charcoal adsorbs oral acetylcysteine — may reduce antidote effectiveness in overdose.", s: "med"},
            {d: "Nitroglycerin", m: "Acetylcysteine may potentiate hypotensive effect.", s: "low"}
        ],
        dosage: "Mucolytic inhalation: 3-5mL of 20% solution OR 6-10mL of 10% solution via nebulizer every 2-6 hours. Acetaminophen overdose: IV loading 150mg/kg, then 50mg/kg over 4h, then 100mg/kg over 16h (21-hour protocol). Oral: 140mg/kg loading, then 70mg/kg every 4 hours for 17 doses.",
        admin: "Inhalation via nebulizer for mucolytic effect. IV (Acetadote) or oral for acetaminophen overdose. For inhalation: administer bronchodilator FIRST (before acetylcysteine) if bronchospasm is a concern. Oral solution tastes terrible — may mix with cola or juice.",
        nurse: "WARN about ROTTEN EGG SMELL (sulfur) — expected and harmless. Have SUCTION available — increased secretions require clearing. BRONCHODILATOR should be given FIRST in asthmatics to prevent bronchospasm. Commonly causes vomiting — antiemetics may be needed. In acetaminophen overdose: MOST EFFECTIVE within 8 hours of ingestion but can still help up to 24 hours. Monitor liver function. Equipment/tubing may need frequent cleaning due to residue."
    },
    {
        g: "Dornase Alfa", b: "Pulmozyme", c: "Mucolytic (Recombinant DNase)", cat: "resp",
        m: "Recombinant human deoxyribonuclease (DNase) enzyme. CYSTIC FIBROSIS patients have thick mucus containing large amounts of DNA from dead inflammatory cells. Dornase alfa cleaves (breaks down) this extracellular DNA, significantly reducing mucus viscosity and improving airway clearance.",
        ind: "Cystic fibrosis (CF) — management of pulmonary disease to improve lung function and reduce respiratory infections. Used in conjunction with standard CF therapies.",
        con: "Known hypersensitivity to dornase alfa or Chinese hamster ovary cell products (CHO-derived).",
        aec: "Voice changes, hoarseness (dysphonia), sore throat (pharyngitis), laryngitis. Chest pain, rash, conjunctivitis.",
        aes: "Serious hypersensitivity reactions (rare). No significant systemic toxicity (acts locally in airways).",
        inter: [
            {d: "None significant", m: "No known drug interactions — acts locally.", s: "low"}
        ],
        dosage: "2.5mg (one ampule) inhaled once daily via recommended nebulizer. Some patients benefit from twice-daily dosing.",
        admin: "Inhalation via jet nebulizer ONLY (not ultrasonic — may denature the enzyme). Ampules are single-use. Must be refrigerated (2-8°C) and protected from light. Do not mix with other medications in the nebulizer.",
        nurse: "SPECIFIC to CYSTIC FIBROSIS — breaks down DNA in thick CF mucus. Requires specific nebulizer system (jet nebulizer, not ultrasonic). Refrigerate ampules. Single-use — discard any remaining solution. Voice changes and sore throat are common. Monitor pulmonary function tests for improvement. Used as part of comprehensive CF care including chest physiotherapy, bronchodilators, antibiotics."
    }
];
