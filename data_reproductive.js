/* Block 10 — Reproductive & OB Medications (10 drugs)
   Source: pharmacology_A_drjames.txt, pharmacology_B_drjames.txt, OB content */

const data_reproductive = [
    {
        g: "Oxytocin", b: "Pitocin", c: "Uterotonic / Posterior Pituitary Hormone", cat: "repro",
        m: "Synthetic version of endogenous oxytocin. Stimulates UTERINE SMOOTH MUSCLE contraction by increasing intracellular calcium. Also causes contraction of MYOEPITHELIAL CELLS in breast → milk ejection (let-down reflex). Uterine sensitivity to oxytocin increases dramatically near term due to increased oxytocin receptors.",
        ind: "LABOR INDUCTION when cervix is favorable. LABOR AUGMENTATION (hypotonic uterine contractions). POSTPARTUM HEMORRHAGE (first-line uterotonic). Stimulate milk let-down.",
        con: "⚠️ Cephalopelvic disproportion (CPD). Unfavorable fetal position (transverse lie). Placenta previa, vasa previa. Prior classic (vertical) uterine incision. Active genital herpes. Umbilical cord prolapse. Fetal distress (unless imminent delivery). Grand multiparity (≥5 births).",
        aec: "UTERINE HYPERSTIMULATION (tachysystole: >5 contractions in 10 minutes). Nausea, vomiting. Hypotension (rapid IV). Headache.",
        aes: "⚠️ UTERINE RUPTURE (especially with prior cesarean, hyperstimulation). FETAL DISTRESS (prolonged contractions reduce uteroplacental blood flow). ⚠️ WATER INTOXICATION/HYPONATREMIA (ADH-like effect at high doses) — seizures, coma. Postpartum hemorrhage (if uterine atony develops from exhaustion). Amniotic fluid embolism (rare). Arrhythmias.",
        inter: [
            {d: "Prostaglandins (misoprostol, dinoprostone)", m: "Additive uterotonic effect — wait adequate interval before starting oxytocin.", s: "high"},
            {d: "Vasopressors (ephedrine, phenylephrine)", m: "Severe hypertension risk.", s: "high"},
            {d: "Cyclopropane anesthesia", m: "Maternal hypotension and arrhythmias.", s: "med"}
        ],
        dosage: "Labor induction/augmentation: Start 0.5-2 milliunits/min IV, increase by 1-2 mU/min every 30-60 min. Usual max 20 mU/min (some protocols to 40 mU/min). Postpartum hemorrhage: 10-40 units in 1L fluid, infuse at 20-40 mU/min, or 10 units IM.",
        admin: "IV infusion (diluted) via infusion pump for precise control. IM for postpartum hemorrhage. NEVER give IV push/bolus (hypotension, arrhythmia). Intranasal for milk let-down (less common).",
        nurse: "⚠️ REQUIRES CONTINUOUS FETAL MONITORING during labor induction/augmentation. Monitor contractions — if tachysystole (>5 in 10 min) or FHR abnormalities: STOP infusion, position mom on left side, give O2, notify MD. Always use infusion pump — never free flow. Monitor I&O — water intoxication with prolonged use at high doses. Document contraction frequency, duration, intensity, resting tone. Have terbutaline or magnesium available for tocolysis if needed."
    },
    {
        g: "Methylergonovine", b: "Methergine", c: "Ergot Alkaloid Uterotonic", cat: "repro",
        m: "Ergot alkaloid that causes SUSTAINED UTERINE CONTRACTION (tetanic) by direct stimulation of smooth muscle. Also causes vasoconstriction. The sustained contraction compresses uterine blood vessels → controls postpartum hemorrhage.",
        ind: "POSTPARTUM HEMORRHAGE due to uterine atony (second-line after oxytocin fails). Subinvolution of the uterus.",
        con: "⚠️ HYPERTENSION, preeclampsia, eclampsia (causes vasoconstriction → worsens HTN). Coronary artery disease, peripheral vascular disease. DO NOT use for labor induction (tetanic contractions would kill fetus). Hypersensitivity to ergots.",
        aec: "Nausea, vomiting. Headache. Abdominal cramping (uterine contractions).",
        aes: "⚠️ SEVERE HYPERTENSION, stroke, MI (especially in patients with HTN/preeclampsia). Peripheral vasospasm, gangrene. Seizures.",
        inter: [
            {d: "CYP3A4 inhibitors (macrolides, azole antifungals, protease inhibitors)", m: "Increased ergot levels → toxicity, vasospasm.", s: "high"},
            {d: "Vasoconstrictors, sympathomimetics", m: "Additive vasoconstriction → severe HTN.", s: "high"},
            {d: "Other Ergots", m: "Additive toxicity.", s: "high"}
        ],
        dosage: "IM: 0.2mg, may repeat every 2-4 hours. Oral: 0.2mg every 6-8 hours for 2-7 days. IV (emergency only): 0.2mg slowly over 1+ minute — rarely used due to HTN risk.",
        admin: "IM preferred (faster, safer than IV). Oral for outpatient maintenance. IV only in life-threatening hemorrhage — give slowly, monitor BP closely.",
        nurse: "⚠️ CHECK BLOOD PRESSURE BEFORE GIVING — do NOT give if BP elevated. Contraindicated in preeclampsia/HTN. Monitor BP frequently after administration. Teach patient about severe cramping (expected). Store in refrigerator, protect from light. Different from oxytocin: causes TETANIC contraction (not rhythmic). For postpartum use only — never for labor induction."
    },
    {
        g: "Carboprost", b: "Hemabate", c: "Prostaglandin F2-alpha Analog", cat: "repro",
        m: "Synthetic analog of prostaglandin F2α (PGF2α). Causes potent UTERINE CONTRACTION and is also a bronchconstrictor. Used when oxytocin and methylergonovine fail to control postpartum hemorrhage.",
        ind: "POSTPARTUM HEMORRHAGE (third-line — refractory to oxytocin and methylergonovine). Pregnancy termination (second trimester, 13-20 weeks).",
        con: "⚠️ ASTHMA or reactive airway disease (PGF2α causes bronchoconstriction). Active cardiac, pulmonary, renal, or hepatic disease. Acute pelvic inflammatory disease.",
        aec: "GI effects common: Nausea, vomiting, diarrhea (80%+). Fever, flushing. Hypertension.",
        aes: "⚠️ BRONCHOSPASM (contraindicated in asthma). Pulmonary edema. Severe hypertension. Uterine rupture.",
        inter: [
            {d: "Other Uterotonics", m: "Additive effect — use cautiously in sequence.", s: "med"},
            {d: "Oxytocin", m: "May augment response — caution.", s: "low"}
        ],
        dosage: "Postpartum hemorrhage: 250mcg (0.25mg) IM deep intramuscular. May repeat every 15-90 minutes. Max total dose 2mg (8 doses).",
        admin: "IM only (deep intramuscular). NEVER give IV. Rotate injection sites for repeated doses.",
        nurse: "⚠️ ASTHMA = ABSOLUTE CONTRAINDICATION — causes bronchospasm. Have respiratory support available. Pre-treat with antiemetics/antidiarrheals if possible (GI effects are common and severe). Monitor vital signs closely — can cause HTN. Used when oxytocin and Methergine fail. Document: time given, response, total doses (max 8 doses)."
    },
    {
        g: "Misoprostol", b: "Cytotec", c: "Prostaglandin E1 Analog", cat: "repro",
        m: "Synthetic prostaglandin E1 analog. CERVICAL RIPENING (softens, dilates cervix via collagen breakdown). UTEROTONIC (stimulates uterine contractions). Originally developed to prevent NSAID-induced ulcers (protects gastric mucosa), but widely used off-label in OB.",
        ind: "CERVICAL RIPENING before labor induction. Postpartum hemorrhage (often used off-label). Medical management of miscarriage. Pregnancy termination (with mifepristone). NSAID-induced ulcer prophylaxis.",
        con: "Prior cesarean section or uterine surgery (higher rupture risk). Active labor (when used for ripening). Known hypersensitivity. Pregnancy (for ulcer indication — teratogenic).",
        aec: "GI: Nausea, vomiting, diarrhea, abdominal pain. Uterine cramping. Fever, chills. Headache.",
        aes: "⚠️ UTERINE HYPERSTIMULATION, RUPTURE (especially with prior cesarean). Fetal distress. Hemorrhage. Incomplete expulsion (if used for pregnancy termination).",
        inter: [
            {d: "Antacids (magnesium-containing)", m: "May worsen diarrhea.", s: "low"},
            {d: "Oxytocin", m: "Wait 4-6 hours after misoprostol before starting oxytocin — additive effect.", s: "high"}
        ],
        dosage: "Cervical ripening: 25mcg vaginally every 3-6 hours. Postpartum hemorrhage: 600-1000mcg rectally, sublingually, or orally. Medical abortion (with mifepristone): 800mcg vaginally/buccally.",
        admin: "Multiple routes: Oral, sublingual, buccal, vaginal, rectal. Vaginal/rectal preferred for OB uses (better uterine effect, fewer GI side effects). For cervical ripening: posterior vaginal fornix.",
        nurse: "⚠️ For cervical ripening: CONTINUOUS FETAL MONITORING required. Monitor for hyperstimulation — if occurs, remove vaginal tablet if accessible, give terbutaline. Wait 4-6 hours after last misoprostol dose before starting oxytocin. Higher uterine rupture risk in patients with prior cesarean — many avoid misoprostol in VBAC candidates. Store at room temperature. Inexpensive and heat-stable — useful in resource-limited settings."
    },
    {
        g: "Terbutaline", b: "Brethine", c: "Beta-2 Agonist / Tocolytic", cat: "repro",
        m: "Selective BETA-2 ADRENERGIC AGONIST. Relaxes smooth muscle including UTERINE MYOMETRIUM (tocolytic effect) and bronchial smooth muscle (bronchodilator). Used to stop preterm labor by relaxing the uterus.",
        ind: "⚠️ ACUTE TOCOLYSIS — short-term management of preterm labor (emergency use to delay delivery 48 hours for steroids or transfer). Rescue tocolysis for uterine hyperstimulation during labor induction. Also: Asthma, COPD (bronchodilator).",
        con: "⚠️ Prolonged tocolysis beyond 48-72 hours (FDA boxed warning — maternal death reported). Cardiac arrhythmias. Poorly controlled diabetes, hyperthyroidism. Gestational age >34 weeks (minimal benefit). Chorioamnionitis. Fetal distress, demise. Severe preeclampsia.",
        aec: "Tachycardia, palpitations. Tremor. Headache. Hyperglycemia. Hypokalemia. Anxiety, nervousness.",
        aes: "⚠️ BLACK BOX: Maternal death and serious adverse events with prolonged use (>48-72 hours) — PULMONARY EDEMA, arrhythmias, MI. ⚠️ PULMONARY EDEMA (especially with IV fluids, magnesium, corticosteroids). Arrhythmias, myocardial ischemia. Severe hypokalemia.",
        inter: [
            {d: "Beta-blockers", m: "Antagonize tocolytic effect.", s: "high"},
            {d: "Other Sympathomimetics", m: "Additive cardiovascular effects.", s: "med"},
            {d: "Corticosteroids (betamethasone)", m: "Both cause hyperglycemia; together may precipitate pulmonary edema.", s: "med"},
            {d: "Magnesium Sulfate", m: "Additive cardiovascular depression, increased pulmonary edema risk.", s: "high"}
        ],
        dosage: "Acute tocolysis: 0.25mg SQ, may repeat in 15-30 min (max 0.5mg in 4 hours). IV: 2.5-10mcg/min, titrate. Uterine hyperstimulation rescue: 0.25mg SQ. ⚠️ Limit duration to 48-72 hours maximum.",
        admin: "Subcutaneous (preferred for tocolysis). IV for acute situations. Oral not recommended for tocolysis. SQ in lateral arm or thigh.",
        nurse: "⚠️ BLACK BOX: Do NOT use >48-72 hours — FDA warning of maternal deaths. For emergency SHORT-TERM tocolysis only. Monitor maternal HR, BP, lung sounds (pulmonary edema), glucose, potassium. Keep maternal HR <120 bpm. If using with steroids (betamethasone), watch closely for pulmonary edema. Assess FHR continuously. Teach patient to report: chest pain, SOB, palpitations. Goal is to delay delivery 48 hours for steroids/transfer — not prevent preterm birth."
    },
    {
        g: "Magnesium Sulfate", b: "MgSO4", c: "Electrolyte / Anticonvulsant / Tocolytic", cat: "repro",
        m: "Essential mineral with multiple mechanisms: (1) SEIZURE PROPHYLAXIS in preeclampsia/eclampsia by CNS depression and membrane stabilization, (2) TOCOLYTIC by blocking calcium entry into myometrial cells, (3) NEUROPROTECTION for preterm infants <32 weeks (reduces cerebral palsy risk). Also treats arrhythmias (torsades de pointes).",
        ind: "⚠️ PREECLAMPSIA/ECLAMPSIA seizure prophylaxis and treatment (first-line). Tocolysis (second-line). FETAL NEUROPROTECTION (given before preterm delivery <32 weeks). Torsades de pointes. Hypomagnesemia.",
        con: "Myasthenia gravis. Heart block. Severe renal impairment (magnesium is renally excreted — toxicity risk). Hypocalcemia. Recent MI.",
        aec: "Flushing, warmth, sweating (common with loading dose). Hypotension. Nausea, vomiting. Headache. Muscle weakness. Decreased DTRs.",
        aes: "⚠️ MAGNESIUM TOXICITY (dose-related): Loss of DTRs (first sign) → Respiratory depression/arrest → Cardiac arrest. Hypotension. Pulmonary edema. Neonatal depression if given close to delivery.",
        inter: [
            {d: "Calcium Channel Blockers (nifedipine)", m: "Profound hypotension and neuromuscular blockade — avoid combination.", s: "high"},
            {d: "Aminoglycosides, Neuromuscular Blockers", m: "Additive neuromuscular blockade — prolonged paralysis.", s: "high"},
            {d: "CNS Depressants", m: "Additive sedation.", s: "med"},
            {d: "Terbutaline", m: "Increased pulmonary edema risk when used together.", s: "high"}
        ],
        dosage: "Preeclampsia: Loading 4-6g IV over 15-30 min, then maintenance 1-2g/hr. Continue 24-48 hours postpartum. Fetal neuroprotection: 4-6g bolus, then 1-2g/hr until delivery. Therapeutic level: 4-7 mEq/L.",
        admin: "IV infusion via pump. IM painful and causes tissue necrosis — avoid. Monitor continuously. Have CALCIUM GLUCONATE at bedside (antidote).",
        nurse: "⚠️ TOXICITY MONITORING — assess every 1-2 hours: (1) Deep tendon reflexes — loss of DTRs is FIRST SIGN of toxicity (hold infusion if absent), (2) Respiratory rate — hold if <12/min, (3) Urine output — should be ≥30mL/hr (renal excretion). ANTIDOTE: Calcium gluconate 1g IV — keep at bedside. Monitor magnesium levels (therapeutic 4-7 mEq/L, toxicity >9-10 mEq/L). Continuous fetal monitoring. Signs of toxicity in order: DTR loss → respiratory depression → cardiac arrest. Foley catheter required for accurate I&O."
    },
    {
        g: "Clomiphene", b: "Clomid, Serophene", c: "Selective Estrogen Receptor Modulator (SERM)", cat: "repro",
        m: "SERM that acts as an estrogen ANTAGONIST at the hypothalamus. Blocks negative feedback from estrogen → hypothalamus thinks estrogen is low → increases GnRH release → increased FSH/LH → OVULATION INDUCTION. Used to treat anovulatory infertility.",
        ind: "OVULATION INDUCTION in women with anovulatory infertility (PCOS, hypothalamic dysfunction). Often first-line for fertility treatment.",
        con: "Pregnancy (teratogenic). Ovarian cysts (may enlarge). Undiagnosed abnormal uterine bleeding. Liver disease. Uncontrolled thyroid or adrenal dysfunction. Primary pituitary failure.",
        aec: "OVARIAN ENLARGEMENT (mild). Hot flashes (anti-estrogen effect). Abdominal distension, bloating. Breast tenderness. Nausea. Headache. Visual disturbances (blurred vision, scotomas).",
        aes: "⚠️ OVARIAN HYPERSTIMULATION SYNDROME (OHSS) — enlarged ovaries, fluid shifts, ascites, thromboembolism (rare with clomiphene alone, more common with gonadotropins). Multiple gestation (5-10% twins). Visual disturbances — discontinue if occur. Ovarian cancer (controversial with prolonged use).",
        inter: [
            {d: "No major drug interactions", m: "Relatively few interactions.", s: "low"}
        ],
        dosage: "50mg PO daily for 5 days, starting day 3-5 of menstrual cycle. If no ovulation, increase to 100mg for next cycle. Max 100mg/day for 5 days. Limit to 6 cycles.",
        admin: "Oral. Taken for 5 days early in menstrual cycle. Ovulation typically occurs 5-10 days after last dose.",
        nurse: "⚠️ Pregnancy test before each cycle — do NOT give if pregnant. Monitor for OHSS: rapid weight gain, abdominal pain/distension, nausea, SOB. Visual changes (blurred vision, flashes) — STOP medication and report. Teach: intercourse should be timed 2-3 days before expected ovulation through day of ovulation. Multiple births risk (mostly twins). Limit to 6 cycles — concern for ovarian cancer with prolonged use. May cause hot flashes, mood changes (anti-estrogen)."
    },
    {
        g: "Leuprolide", b: "Lupron, Eligard", c: "GnRH Agonist", cat: "repro",
        m: "Synthetic analog of GnRH (gonadotropin-releasing hormone). Initial administration causes a brief SURGE in FSH/LH ('flare'). With continuous administration, GnRH receptors are downregulated → SUPPRESSION of FSH/LH → decreased estrogen/testosterone to castrate levels. This 'medical castration' is reversible.",
        ind: "Endometriosis. Uterine fibroids (preoperative shrinkage). Precocious puberty. PROSTATE CANCER (androgen deprivation). Breast cancer (premenopausal). Assisted reproduction (prevent premature LH surge).",
        con: "Pregnancy (teratogenic). Undiagnosed vaginal bleeding. Hypersensitivity.",
        aec: "MENOPAUSAL SYMPTOMS (women): Hot flashes, vaginal dryness, mood changes, decreased libido. Men: Hot flashes, decreased libido, erectile dysfunction. Headache. Injection site reactions.",
        aes: "⚠️ INITIAL 'FLARE' — can worsen symptoms in first 1-2 weeks (especially prostate cancer — may cause bone pain, urinary obstruction; endometriosis — may increase pain). Bone density loss (OSTEOPOROSIS) with prolonged use. Cardiovascular risk (increased with androgen deprivation). Depression. QT prolongation. Rare: Pituitary apoplexy.",
        inter: [
            {d: "QT-prolonging drugs", m: "Additive QT prolongation risk.", s: "med"},
            {d: "Drugs affecting bone (corticosteroids)", m: "Additive osteoporosis risk.", s: "med"}
        ],
        dosage: "Endometriosis/fibroids: 3.75mg IM monthly or 11.25mg IM every 3 months (max 6 months). Prostate cancer: 7.5mg IM monthly, 22.5mg IM every 3 months, or 45mg IM every 6 months. Depot formulations vary.",
        admin: "IM or SC (depot formulations). Depot injections: reconstitute properly, use immediately. Some formulations are specialized kits.",
        nurse: "⚠️ FLARE PHENOMENON: Warn patients symptoms may worsen first 1-2 weeks. In prostate cancer: may need anti-androgen (flutamide, bicalutamide) first to block flare. Monitor bone density with prolonged use — limit to 6 months for endometriosis unless add-back therapy used. Teach menopausal symptom management. Prostate cancer: PSA should decrease — monitor. Fertility: reversible, but counsel on contraception (non-hormonal) during treatment."
    },
    {
        g: "Medroxyprogesterone", b: "Provera, Depo-Provera", c: "Progestin", cat: "repro",
        m: "Synthetic PROGESTOGEN that mimics progesterone. Suppresses LH → inhibits ovulation. Thickens cervical mucus (impedes sperm). Creates atrophic endometrium (prevents implantation). Injectable form provides long-acting contraception.",
        ind: "CONTRACEPTION (Depo-Provera — every 3 months). Abnormal uterine bleeding. Endometriosis. Endometrial hyperplasia (with estrogen HRT). Secondary amenorrhea.",
        con: "Known or suspected pregnancy. Breast cancer. Liver disease. Undiagnosed vaginal bleeding. History of stroke, DVT/PE. Caution: Depression, diabetes, osteoporosis risk.",
        aec: "IRREGULAR BLEEDING (common initially — spotting, breakthrough bleeding, then amenorrhea). Weight gain. Headache. Mood changes, depression. Acne. Decreased libido.",
        aes: "⚠️ BLACK BOX (Depo-Provera): BONE MINERAL DENSITY LOSS — may not be completely reversible. Limit use to 2 years unless no alternatives. Thromboembolism (lower risk than estrogen-containing contraceptives but still present). Delayed return to fertility (up to 12-18 months after discontinuation). Depression.",
        inter: [
            {d: "CYP3A4 inducers (rifampin, phenytoin, carbamazepine)", m: "May decrease effectiveness — use backup contraception.", s: "med"},
            {d: "Aminoglutethimide", m: "Decreases progestin levels.", s: "med"}
        ],
        dosage: "Contraception (Depo-Provera): 150mg IM every 12-13 weeks (must not exceed 13 weeks). Depo-SubQ: 104mg SC every 12-14 weeks. Oral (Provera): 5-10mg daily for 5-10 days for secondary amenorrhea or AUB.",
        admin: "IM: Deep gluteal or deltoid injection. Shake vigorously before use. Give within first 5 days of menstrual period (or anytime if not pregnant). SubQ: anterior thigh or abdomen.",
        nurse: "⚠️ BLACK BOX: Bone loss with long-term use — limit to 2 years. Encourage calcium/vitamin D supplementation. First injection: must be during menses or rule out pregnancy. Injection timing critical: no more than 13 weeks apart — if late, need pregnancy test. Counsel: irregular bleeding common first year then often amenorrhea (not harmful). Weight gain is common. Fertility return may be delayed 12-18 months — not for patients wanting pregnancy soon. Depression monitoring."
    },
    {
        g: "Combined Oral Contraceptives", b: "Various (Yaz, Lo Loestrin, Ortho Tri-Cyclen)", c: "Estrogen-Progestin Combination", cat: "repro",
        m: "Combination of synthetic ESTROGEN (ethinyl estradiol or estetrol) and PROGESTIN. Multiple mechanisms: (1) Suppress FSH/LH → inhibit ovulation (primary), (2) Thicken cervical mucus, (3) Atrophy endometrium. Different formulations vary in estrogen dose and progestin type.",
        ind: "CONTRACEPTION (>99% effective with perfect use). Acne (selected formulations). Dysmenorrhea, menorrhagia. Endometriosis. PCOS (regulate cycles). Emergency contraception (high-dose).",
        con: "⚠️ SMOKING + AGE ≥35 (VTE, MI, stroke risk — absolute contraindication). History of VTE, PE, DVT. Stroke, CAD, MI. Breast cancer. Liver tumors, active liver disease. Undiagnosed vaginal bleeding. Migraine with aura. Prolonged immobilization. Pregnancy.",
        aec: "Nausea (especially initially). Breast tenderness. Headache. Mood changes. Breakthrough bleeding, spotting. Weight changes (minimal). Decreased libido.",
        aes: "⚠️ VENOUS THROMBOEMBOLISM (DVT, PE) — risk increased 3-4x. Arterial events (MI, stroke) — especially with smoking, age >35, hypertension, migraine with aura. Hypertension. Hepatic adenoma (rare). Gallbladder disease.",
        inter: [
            {d: "CYP3A4 inducers (rifampin, phenytoin, carbamazepine, St. John's Wort)", m: "Decrease contraceptive effectiveness — use backup method.", s: "high"},
            {d: "Antibiotics (rifampin)", m: "Rifampin significantly reduces effectiveness. Most other antibiotics: interaction unlikely but some counsel backup.", s: "high"},
            {d: "Lamotrigine", m: "OCPs decrease lamotrigine levels → seizure risk.", s: "med"},
            {d: "Warfarin", m: "May increase or decrease anticoagulant effect.", s: "med"}
        ],
        dosage: "One tablet daily at same time. Most are 21 active + 7 placebo (or 24+4). Start first Sunday after menses or Day 1 of cycle. Extended-cycle regimens available (84 active pills).",
        admin: "Oral. Take at same time daily for best efficacy. If missed: take ASAP; if >24 hours, use backup 7 days.",
        nurse: "⚠️ Screen for VTE risk factors: Age ≥35 + smoking = ABSOLUTE contraindication. Ask about personal/family history of clots, migraines with aura. Teach warning signs (ACHES): Abdominal pain (severe), Chest pain, Headaches (severe), Eye problems (visual changes), Severe leg pain. Take at same time daily. If vomiting/diarrhea within 2-3 hours of taking pill, use backup. Rifampin is MAJOR interaction — need backup contraception. Breakthrough bleeding common first 3 months — usually resolves."
    }
];
