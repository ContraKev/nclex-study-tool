/* Block 3b — Respiratory: Bronchodilators & Asthma/COPD Controllers (9 drugs)
   Source: respiratory_pharm.txt (Slides 44-62) */

const data_respiratory_part2 = [
    {
        g: "Albuterol", b: "Proventil, Ventolin, ProAir (MDI); Accuneb (nebulizer)", c: "Beta-2 Agonist (Short-Acting/SABA)", cat: "resp",
        m: "Selective BETA-2 ADRENERGIC AGONIST that stimulates beta-2 receptors on bronchial smooth muscle, causing BRONCHODILATION and improved airflow. Also inhibits histamine release from mast cells. RAPID ONSET (1-2 minutes) with SHORT DURATION (3-6 hours) — makes it ideal as a RESCUE inhaler.",
        ind: "ACUTE BRONCHOSPASM RELIEF ('rescue' inhaler) — first-line treatment for acute asthma attacks, exercise-induced bronchospasm, COPD exacerbations. Prevention of exercise-induced bronchospasm (15-30 min before exercise).",
        con: "Hypersensitivity to albuterol. Severe cardiac disease should use cautiously (systemic beta effects on heart). Tachyarrhythmias.",
        aec: "ADRENERGIC EFFECTS: Tachycardia, palpitations, tremor (especially hands), nervousness, headache, dizziness. Hypokalemia (shifts potassium intracellularly).",
        aes: "Paradoxical bronchospasm (rare — stop inhaler immediately). Significant cardiovascular effects at high doses (arrhythmias, angina, hypertension). Hypokalemia (especially with concurrent diuretics).",
        inter: [
            {d: "Beta-Blockers (Propranolol)", m: "Non-selective beta-blockers BLOCK albuterol's bronchodilating effect — AVOID in asthma.", s: "high"},
            {d: "Diuretics (Loop, Thiazide)", m: "Additive HYPOKALEMIA — albuterol causes potassium shift into cells.", s: "med"},
            {d: "MAOIs, TCAs", m: "May potentiate cardiovascular effects.", s: "med"},
            {d: "Other Sympathomimetics", m: "Additive cardiovascular stimulation.", s: "med"}
        ],
        dosage: "MDI (inhaler): 1-2 puffs every 4-6 hours PRN. Nebulizer: 2.5mg (0.5mL of 0.5% solution) every 4-8 hours. Acute attack: may use more frequently initially. Exercise prophylaxis: 2 puffs 15-30 min before.",
        admin: "Metered-dose inhaler (MDI), dry powder inhaler (DPI), nebulizer solution. Shake MDI before use. PROPER INHALER TECHNIQUE is critical for effectiveness. Wait 1 minute between puffs. Use spacer device to improve delivery.",
        nurse: "RESCUE INHALER — should be used for ACUTE symptoms, NOT daily maintenance. If patient uses albuterol more than 2x/week (other than exercise prophylaxis), asthma is NOT well-controlled and needs step-up therapy. Teach PROPER INHALER TECHNIQUE (shake, exhale, inhale slowly while pressing, hold breath 10 sec). Rinse mouth after use (reduces local irritation). Track usage — excessive use indicates poor control. Monitor heart rate and potassium in frequent users."
    },
    {
        g: "Salmeterol", b: "Serevent Diskus", c: "Beta-2 Agonist (Long-Acting/LABA)", cat: "resp",
        m: "Selective BETA-2 ADRENERGIC AGONIST with LONG DURATION of action (12 hours). Binds to beta-2 receptors and remains attached longer than short-acting agents. Provides sustained bronchodilation for MAINTENANCE therapy. SLOW onset (10-20 minutes) — NOT for acute attacks.",
        ind: "MAINTENANCE therapy for persistent asthma (in combination with inhaled corticosteroid) and COPD. Prevention of exercise-induced bronchospasm (30 min before exercise). NOT for acute bronchospasm rescue.",
        con: "Acute asthma attack (not a rescue inhaler). ⚠️ BLACK BOX WARNING: LABAs increase the risk of asthma-related death when used WITHOUT an inhaled corticosteroid. Must ALWAYS be used WITH inhaled corticosteroid in asthma patients. Monotherapy with LABA in asthma is CONTRAINDICATED.",
        aec: "Tachycardia, palpitations, tremor, nervousness, headache, throat irritation, upper respiratory infections.",
        aes: "PARADOXICAL BRONCHOSPASM (rare). Serious cardiovascular effects (arrhythmias, QT prolongation) at high doses. ⚠️ INCREASED ASTHMA MORTALITY when used as monotherapy — always combine with ICS.",
        inter: [
            {d: "Beta-Blockers", m: "Non-selective beta-blockers reduce effectiveness — avoid or use cardioselective agents.", s: "high"},
            {d: "QT-Prolonging Drugs", m: "Additive risk of QT prolongation and arrhythmias.", s: "med"},
            {d: "CYP3A4 Inhibitors (Ketoconazole)", m: "Increased salmeterol levels → cardiovascular effects.", s: "med"},
            {d: "Diuretics", m: "Additive hypokalemia risk.", s: "med"}
        ],
        dosage: "Asthma/COPD maintenance: 1 inhalation (50mcg) twice daily (every 12 hours). Exercise prophylaxis: 1 inhalation 30 min before exercise (if not on twice-daily regimen).",
        admin: "Dry powder inhaler (Diskus device). Twice-daily dosing. NOT to be used more than twice in 24 hours. Never used for acute symptoms. Often prescribed as combination product with fluticasone (Advair).",
        nurse: "⚠️ CRITICAL PATIENT EDUCATION: This is NOT a rescue inhaler — will NOT work for acute attacks. Must keep albuterol available for emergencies. BLACK BOX WARNING: Never use salmeterol ALONE for asthma — must always be combined with inhaled corticosteroid to reduce mortality risk. Twice-daily — maintain consistent schedule. Rinse mouth after use. If using separately from ICS, take ICS first."
    },
    {
        g: "Ipratropium", b: "Atrovent", c: "Anticholinergic Bronchodilator (Short-Acting/SAMA)", cat: "resp",
        m: "Competitively blocks MUSCARINIC (acetylcholine) receptors on bronchial smooth muscle, inhibiting vagal-mediated bronchoconstriction. Reduces mucus secretion. COMPLEMENTARY mechanism to beta-agonists — often used together for additive bronchodilation. Onset 15-30 minutes, duration 4-6 hours.",
        ind: "Bronchospasm associated with COPD (chronic bronchitis, emphysema). Acute asthma exacerbations (combined with albuterol — Combivent/DuoNeb). Often more effective for COPD than for asthma.",
        con: "Hypersensitivity to atropine or ipratropium. Narrow-angle glaucoma (if drug contacts eyes). Urinary retention/bladder neck obstruction.",
        aec: "Dry mouth (most common), throat irritation, cough, bitter taste. Minimal systemic anticholinergic effects (poorly absorbed from lungs).",
        aes: "ACUTE NARROW-ANGLE GLAUCOMA if drug contacts eyes (especially via nebulizer mist). Urinary retention (rare). Paradoxical bronchospasm.",
        inter: [
            {d: "Other Anticholinergics", m: "Additive anticholinergic effects — use caution.", s: "med"},
            {d: "Beta-2 Agonists (Albuterol)", m: "SYNERGISTIC bronchodilation — commonly combined (Combivent, DuoNeb).", s: "low"}
        ],
        dosage: "MDI: 2 puffs (17mcg/puff) 4 times daily. Nebulizer: 500mcg (2.5mL) every 6-8 hours. Combination (Combivent): ipratropium/albuterol 2 puffs 4 times daily.",
        admin: "MDI or nebulizer. Often combined with albuterol in same inhaler (Combivent) or nebulizer solution (DuoNeb). When using nebulizer, protect eyes from mist (use mouthpiece, not face mask if possible).",
        nurse: "Protect EYES from nebulizer mist — can precipitate acute angle-closure glaucoma. Rinse mouth after use to reduce dry mouth and bitter taste. Slower onset than albuterol but complementary mechanism — often used together. More effective for COPD than asthma. Monitor for urinary retention in patients with BPH. Combination with albuterol (DuoNeb) is standard for acute COPD exacerbations."
    },
    {
        g: "Tiotropium", b: "Spiriva HandiHaler, Spiriva Respimat", c: "Anticholinergic Bronchodilator (Long-Acting/LAMA)", cat: "resp",
        m: "Long-acting muscarinic antagonist (LAMA) that blocks M1, M2, and M3 receptors but dissociates very slowly from M3 receptors on bronchial smooth muscle. This provides SUSTAINED bronchodilation lasting 24 HOURS from a single daily dose.",
        ind: "MAINTENANCE therapy for COPD (first-line agent for COPD). Maintenance therapy for asthma (as add-on when ICS/LABA is insufficient). NOT for acute bronchospasm.",
        con: "Acute bronchospasm rescue (not a rescue inhaler). Hypersensitivity to tiotropium or atropine. Narrow-angle glaucoma. Urinary retention.",
        aec: "Dry mouth (most common — up to 16%), constipation, pharyngitis, sinusitis, rhinitis.",
        aes: "Acute narrow-angle glaucoma (if drug contacts eyes). Urinary retention (especially in males with BPH). Paradoxical bronchospasm. Angioedema (rare).",
        inter: [
            {d: "Other Anticholinergics (Ipratropium)", m: "Avoid concurrent use — additive anticholinergic effects, no additional benefit.", s: "high"},
            {d: "Anticholinergic Medications (TCAs, Antihistamines)", m: "Additive systemic anticholinergic effects.", s: "med"}
        ],
        dosage: "HandiHaler: One 18mcg capsule inhaled once daily. Respimat: 2 inhalations (2.5mcg each = 5mcg) once daily. Same time each day.",
        admin: "HandiHaler: Capsule is placed in device and PUNCTURED, then inhaled (do NOT swallow capsules). Respimat: Soft mist inhaler, does not require coordination. Once-daily dosing. Do NOT use with other anticholinergic bronchodilators.",
        nurse: "HandiHaler capsules are for INHALATION ONLY — do NOT swallow (some patients mistakenly take orally). Once-daily dosing improves adherence. ⚠️ Do NOT use with ipratropium (Atrovent) — both are anticholinergics, no additive benefit. Protect eyes from drug. May take 1-3 weeks for full effect in COPD. Studies show tiotropium may be SUPERIOR to LABAs for preventing COPD exacerbations."
    },
    {
        g: "Fluticasone", b: "Flovent HFA, Flovent Diskus (inhaled); Advair (with salmeterol); Breo Ellipta (with vilanterol)", c: "Inhaled Corticosteroid (ICS)", cat: "resp",
        m: "Synthetic corticosteroid with potent ANTI-INFLAMMATORY effects in the airways. Reduces airway inflammation, edema, and hyperreactivity. Decreases mucus production. Suppresses cytokine release and mast cell degranulation. Does NOT provide immediate bronchodilation — used for MAINTENANCE.",
        ind: "MAINTENANCE therapy for persistent asthma (cornerstone of asthma control). Maintenance in COPD (usually combined with LABA). NOT for acute bronchospasm.",
        con: "Acute asthma attack or status asthmaticus (not a rescue medication). Active or quiescent tuberculosis. Untreated fungal, bacterial, or viral infections. Hypersensitivity to milk proteins (Flovent Diskus contains lactose).",
        aec: "ORAL CANDIDIASIS (thrush) — most common local effect. Hoarseness, dysphonia (voice changes), sore throat, cough. Upper respiratory infections.",
        aes: "SYSTEMIC corticosteroid effects with HIGH doses or prolonged use: Adrenal suppression, osteoporosis, growth retardation in children, cataracts, glaucoma, skin thinning. Pneumonia risk increased in COPD patients on ICS.",
        inter: [
            {d: "CYP3A4 Inhibitors (Ritonavir, Ketoconazole)", m: "Significantly increased fluticasone levels → systemic corticosteroid effects (Cushing syndrome, adrenal suppression).", s: "high"},
            {d: "Immunosuppressants", m: "Additive immunosuppression at high doses.", s: "med"}
        ],
        dosage: "Flovent HFA: 88-440mcg twice daily (varies by asthma severity). Diskus: 100-500mcg twice daily. Advair (fluticasone/salmeterol): 100/50 to 500/50mcg twice daily. Titrate to lowest effective dose.",
        admin: "MDI (HFA), dry powder inhaler (Diskus). Twice-daily dosing. MUST RINSE MOUTH after each use to prevent candidiasis. Use spacer with MDI for better delivery. When using both rescue and controller inhalers: bronchodilator FIRST, then ICS.",
        nurse: "CRITICAL: Rinse mouth and SPIT after every use — prevents oral thrush and hoarseness. This is a CONTROLLER, not a rescue inhaler — won't help acute attacks. Takes 1-4 WEEKS for full effect. Order of inhalers: bronchodilator FIRST, then ICS. Monitor children's growth (potential suppression at high doses). Watch for signs of thrush (white patches in mouth). If on high doses, monitor for systemic effects. Do not stop abruptly — may need to taper."
    },
    {
        g: "Budesonide", b: "Pulmicort Flexhaler, Pulmicort Respules (nebulizer)", c: "Inhaled Corticosteroid (ICS)", cat: "resp",
        m: "Synthetic corticosteroid with potent local anti-inflammatory effects. Reduces airway inflammation, edema, mucus secretion, and bronchial hyperreactivity. Undergoes extensive first-pass hepatic metabolism, resulting in LOW systemic bioavailability and fewer systemic effects.",
        ind: "MAINTENANCE therapy for persistent asthma. Prophylaxis in children (Respules can be used in children as young as 12 months). Often used in combination with formoterol (Symbicort).",
        con: "Acute asthma attack (not for rescue). Primary treatment of status asthmaticus. Active untreated infections (TB, fungal, viral).",
        aec: "Oropharyngeal candidiasis, hoarseness, throat irritation, cough. Respules: pharyngitis, rhinitis.",
        aes: "Same systemic risks as other ICS with high-dose/prolonged use: adrenal suppression, osteoporosis, growth suppression in children, cataracts, glaucoma.",
        inter: [
            {d: "CYP3A4 Inhibitors (Ketoconazole, Itraconazole, Ritonavir)", m: "Increased budesonide levels → systemic corticosteroid effects.", s: "high"},
            {d: "Grapefruit Juice", m: "May increase oral budesonide levels (less relevant for inhaled form).", s: "low"}
        ],
        dosage: "Flexhaler: 180-360mcg twice daily (up to 720mcg twice daily for severe asthma). Respules (children): 0.25-1mg total daily dose via nebulizer (divided once or twice daily). Symbicort: 80/4.5 to 160/4.5mcg twice daily.",
        admin: "Dry powder inhaler (Flexhaler) or nebulizer solution (Respules). Respules are for NEBULIZER only — especially useful for young children who cannot use inhalers. Rinse mouth after use.",
        nurse: "NEBULIZED form (Pulmicort Respules) available for young children who cannot use inhalers — one of few ICS options for toddlers. Same mouth-rinsing protocol as all ICS. Low systemic absorption makes it relatively safer long-term. Monitor growth in children. Controller medication — takes time to work. Symbicort (with formoterol) provides both controller and some quick-relief benefit due to formoterol's rapid onset."
    },
    {
        g: "Montelukast", b: "Singulair", c: "Leukotriene Receptor Antagonist (LTRA)", cat: "resp",
        m: "Selectively blocks LEUKOTRIENE D4 receptors in the airways. Leukotrienes are inflammatory mediators that cause bronchoconstriction, mucus secretion, and airway edema. Blocking them reduces inflammation and improves airflow. ORAL medication — alternative/add-on to inhaled corticosteroids.",
        ind: "Prophylaxis and chronic treatment of asthma (as alternative to low-dose ICS or add-on therapy). Prevention of exercise-induced bronchospasm. Allergic rhinitis (seasonal and perennial).",
        con: "Hypersensitivity. NOT for acute asthma attacks (not a bronchodilator). ⚠️ BLACK BOX WARNING for serious neuropsychiatric events.",
        aec: "Headache, dizziness, fatigue, abdominal pain, dyspepsia, dental pain, epistaxis (nosebleeds), upper respiratory infection.",
        aes: "⚠️ NEUROPSYCHIATRIC EVENTS (BLACK BOX): Agitation, aggressive behavior, anxiety, depression, disorientation, hallucinations, insomnia, suicidal thoughts and behavior. These can occur in patients of any age. Hepatotoxicity (rare — with zafirlukast/zileuton, less with montelukast). Churg-Strauss syndrome (rare, eosinophilic vasculitis).",
        inter: [
            {d: "Phenobarbital, Rifampin", m: "CYP inducers may decrease montelukast levels.", s: "low"},
            {d: "Phenytoin", m: "Phenytoin may decrease montelukast effectiveness.", s: "low"}
        ],
        dosage: "Adults and adolescents ≥15 years: 10mg PO once daily (evening). Children 6-14 years: 5mg chewable tablet once daily. Children 2-5 years: 4mg chewable or granules once daily.",
        admin: "Oral tablets (regular and chewable) and oral granules. Once-daily dosing in the EVENING. Can be taken with or without food. Granules can be mixed with soft food.",
        nurse: "⚠️ MONITOR FOR NEUROPSYCHIATRIC SYMPTOMS: Mood changes, depression, anxiety, agitation, suicidal thoughts — can occur at any age. FDA requires Black Box Warning. Counsel patients/families to report behavioral changes immediately. Discontinue if neuropsychiatric symptoms develop. NOT a rescue medication — for maintenance only. Oral administration makes it attractive for patients who dislike inhalers. Consider risks vs. benefits — inhaled corticosteroids may be safer first-line."
    },
    {
        g: "Theophylline", b: "Theo-24, Theochron, Elixophyllin", c: "Xanthine Bronchodilator", cat: "resp",
        m: "Nonselective inhibition of phosphodiesterase enzyme → increased cAMP → bronchial smooth muscle relaxation. Also blocks adenosine receptors (contributes to CNS stimulation) and has anti-inflammatory effects. Historically important but now LAST-LINE due to narrow therapeutic index and side effects.",
        ind: "Long-term management of PERSISTENT ASTHMA unresponsive to beta-agonists or inhaled corticosteroids. COPD maintenance. Has fallen OUT OF FAVOR due to narrow therapeutic range (5-15 mcg/mL) and toxicity risk.",
        con: "Active peptic ulcer disease. Uncontrolled seizure disorders. Cardiac arrhythmias (especially tachyarrhythmias). Hypersensitivity.",
        aec: "NARROW THERAPEUTIC INDEX: Nausea, vomiting, headache, insomnia, restlessness, irritability, tremor, diuresis. GI disturbances are often EARLY WARNING SIGNS of toxicity.",
        aes: "THEOPHYLLINE TOXICITY: GI (severe nausea, vomiting — early signs), CNS (seizures, confusion, agitation), Cardiovascular (tachycardia, arrhythmias including fatal ventricular arrhythmias). Toxicity can be LIFE-THREATENING.",
        inter: [
            {d: "Ciprofloxacin and other Fluoroquinolones", m: "INHIBIT theophylline metabolism → TOXICITY.", s: "high"},
            {d: "Cimetidine", m: "Inhibits metabolism → increased theophylline levels.", s: "high"},
            {d: "Phenytoin, Phenobarbital, Rifampin", m: "INDUCE metabolism → decreased theophylline levels.", s: "high"},
            {d: "Caffeine", m: "Both are xanthines — additive CNS stimulation. Caffeine also increases theophylline levels.", s: "med"},
            {d: "Tobacco/Marijuana Smoking", m: "INDUCES metabolism → decreased theophylline levels. Dose needs increase in smokers.", s: "med"}
        ],
        dosage: "Individualized based on serum levels. Initial: 10-14mg/kg/day (max 300mg/day). Maintenance: Titrate to therapeutic range (5-15 mcg/mL). Sustained-release formulations allow once or twice daily dosing.",
        admin: "Oral (tablets, capsules, liquid, sustained-release). Sustained-release should NOT be crushed. Take with food to reduce GI upset. Consistent dosing schedule is essential.",
        nurse: "MONITOR SERUM THEOPHYLLINE LEVELS: Therapeutic range 5-15 mcg/mL. Levels >20 mcg/mL cause toxicity. Nausea and vomiting are often FIRST SIGNS of toxicity — do not dismiss as minor. Many drug interactions affect levels — review all medications. SMOKERS require HIGHER doses (smoking induces metabolism); if patient QUITS smoking, reduce dose to prevent toxicity. Avoid caffeine. Check levels with any dosage change or if toxicity symptoms appear. Last-line agent — modern therapy favors inhaled medications."
    },
    {
        g: "Cromolyn Sodium", b: "Intal (inhaled); NasalCrom (nasal)", c: "Mast Cell Stabilizer", cat: "resp",
        m: "MAST CELL STABILIZER that prevents degranulation and release of histamine and other inflammatory mediators from mast cells. Does NOT reverse bronchospasm — used for PROPHYLAXIS only. Must be taken BEFORE allergen exposure. Full benefit takes 2-4 weeks.",
        ind: "PROPHYLACTIC therapy for mild persistent asthma (alternative to low-dose ICS). Prevention of exercise-induced bronchospasm (30 min before). Prevention of allergen-induced asthma (before exposure). Allergic rhinitis (nasal spray).",
        con: "Acute asthma attack (no bronchodilator effect). Status asthmaticus. Hypersensitivity.",
        aec: "Throat irritation, dry mouth, oral irritation (inhaled form). Nasal irritation, sneezing (nasal form). Bad taste, cough.",
        aes: "BRONCHOSPASM, coughing (paradoxical — especially when first starting). Laryngeal edema, angioedema (rare hypersensitivity).",
        inter: [
            {d: "None significant", m: "No major drug interactions — acts locally.", s: "low"}
        ],
        dosage: "Inhaled: 20mg (2 puffs or 1 nebulizer ampule) 4 times daily. Exercise prophylaxis: 20mg 30 min before exercise. Nasal (NasalCrom): 1 spray each nostril 3-4 times daily.",
        admin: "Inhaled via MDI or nebulizer. Nasal spray. PROPHYLACTIC — must be used regularly, not PRN. Effects take 2-4 WEEKS to develop fully. Use 30 minutes BEFORE allergen exposure or exercise.",
        nurse: "PROPHYLACTIC ONLY — will NOT help an acute asthma attack. Must be used CONSISTENTLY (4 times daily) for full benefit — takes 2-4 weeks. Ideal for patients who want to minimize steroid use. Very SAFE — essentially no systemic effects. If bronchospasm occurs with use, pretreat with beta-agonist. Before allergen exposure (e.g., cat dander, pollen season): start 1-2 weeks in advance. Exercise-induced: use 30 min before activity. Largely replaced by inhaled corticosteroids but remains safe option for children and pregnancy."
    }
];
