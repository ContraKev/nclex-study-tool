/* Block 11 — Urology Medications (6 drugs)
   BPH, Overactive Bladder, Urinary Retention
   Source: pharmacology_A_drjames.txt, pharmacology_B_drjames.txt */

const data_urology = [
    {
        g: "Tamsulosin", b: "Flomax", c: "Alpha-1A Blocker (Uroselective)", cat: "uro",
        m: "Selectively blocks ALPHA-1A ADRENERGIC RECEPTORS in the prostate and bladder neck. Alpha-1A receptors mediate smooth muscle contraction in these areas. Blocking them → smooth muscle relaxation → improved urine flow in BPH. More uroselective than non-selective alpha-blockers (less orthostatic hypotension).",
        ind: "BENIGN PROSTATIC HYPERPLASIA (BPH) — improves urinary symptoms (frequency, urgency, weak stream, incomplete emptying). Facilitates passage of ureteral stones (off-label).",
        con: "Hypersensitivity. Caution: Concurrent PDE5 inhibitors (additive hypotension). Planned cataract surgery (intraoperative floppy iris syndrome — inform ophthalmologist). Orthostatic hypotension (though less than non-selective blockers).",
        aec: "Dizziness, lightheadedness. Abnormal ejaculation (retrograde ejaculation — common). Rhinitis, nasal congestion. Headache.",
        aes: "⚠️ ORTHOSTATIC HYPOTENSION (less than other alpha-blockers but still possible, especially first dose). INTRAOPERATIVE FLOPPY IRIS SYNDROME (IFIS) — complicates cataract surgery even if drug stopped. Syncope. Priapism (rare).",
        inter: [
            {d: "PDE5 Inhibitors (sildenafil, tadalafil)", m: "Additive hypotension — caution if combining.", s: "med"},
            {d: "Other Antihypertensives", m: "Additive hypotensive effect.", s: "med"},
            {d: "CYP3A4 inhibitors (ketoconazole)", m: "Increase tamsulosin levels.", s: "low"},
            {d: "CYP2D6 inhibitors (paroxetine)", m: "May increase tamsulosin levels.", s: "low"}
        ],
        dosage: "0.4mg once daily, 30 minutes after the same meal each day. May increase to 0.8mg if inadequate response after 2-4 weeks.",
        admin: "Oral. Take 30 minutes after a meal (same meal daily for consistency). Capsules should not be crushed, chewed, or opened.",
        nurse: "⚠️ FIRST-DOSE HYPOTENSION less likely than with terazosin/doxazosin, but still counsel on rising slowly. Teach about abnormal/retrograde ejaculation (common, not harmful). ⚠️ If patient has cataract surgery planned: INFORM OPHTHALMOLOGIST even if tamsulosin stopped — IFIS risk persists. Does NOT shrink prostate — for symptom relief only. Often combined with 5-alpha-reductase inhibitor (finasteride) for comprehensive BPH management."
    },
    {
        g: "Finasteride", b: "Proscar, Propecia", c: "5-Alpha-Reductase Inhibitor", cat: "uro",
        m: "Inhibits TYPE II 5-ALPHA-REDUCTASE, the enzyme that converts testosterone to dihydrotestosterone (DHT). DHT drives prostate growth; blocking its formation → prostate shrinkage (20-30% reduction). Also blocks DHT effects on hair follicles (used for male pattern baldness).",
        ind: "BENIGN PROSTATIC HYPERPLASIA (BPH) — reduces prostate size, improves symptoms, reduces risk of acute urinary retention and need for surgery. Male pattern baldness (Propecia — lower dose).",
        con: "⚠️ Pregnancy (TERATOGENIC — causes genital abnormalities in male fetus). Women of childbearing potential should NOT handle crushed tablets. Hypersensitivity.",
        aec: "SEXUAL DYSFUNCTION: Decreased libido (6%), erectile dysfunction (8%), decreased ejaculate volume. Gynecomastia, breast tenderness.",
        aes: "⚠️ HIGH-GRADE PROSTATE CANCER — may be diagnosed at higher rate (controversial — may unmask existing cancer). Depression, anxiety. Allergic reactions.",
        inter: [
            {d: "No major drug interactions", m: "Not significantly metabolized by CYP450.", s: "low"}
        ],
        dosage: "BPH (Proscar): 5mg once daily. Male pattern baldness (Propecia): 1mg once daily. Takes 6-12 months for full BPH effect.",
        admin: "Oral. Can take with or without food. ⚠️ Women who are or may become pregnant should NOT handle crushed or broken tablets (transdermal absorption of DHT-blocking drug is teratogenic).",
        nurse: "⚠️ PREGNANCY WARNING: Tablets should not be handled by pregnant women — DHT inhibition causes male fetus genital abnormalities. Counsel patient if partner is pregnant. SLOW ONSET: Takes 3-6 months to see symptom improvement, 6-12 months for maximum effect — set expectations. ⚠️ PSA levels decrease by ~50% — must DOUBLE PSA values when screening for prostate cancer. Sexual side effects may persist even after stopping ('post-finasteride syndrome' — controversial). Combined with tamsulosin often for complementary effects."
    },
    {
        g: "Dutasteride", b: "Avodart", c: "5-Alpha-Reductase Inhibitor (Dual)", cat: "uro",
        m: "Inhibits BOTH TYPE I AND TYPE II 5-alpha-reductase (finasteride only blocks type II). More complete DHT suppression (>90% vs ~70% with finasteride). Results in more prostate shrinkage.",
        ind: "Benign prostatic hyperplasia (BPH). Often combined with tamsulosin (Jalyn = dutasteride + tamsulosin).",
        con: "Same as finasteride: Pregnancy, women of childbearing potential, hypersensitivity. Severe hepatic impairment.",
        aec: "Same as finasteride: Sexual dysfunction (erectile dysfunction, decreased libido, ejaculation disorders), gynecomastia, breast tenderness.",
        aes: "⚠️ Same prostate cancer concerns as finasteride. Very long half-life (5 weeks) — effects persist long after stopping.",
        inter: [
            {d: "CYP3A4 inhibitors (ritonavir, ketoconazole)", m: "May increase dutasteride levels.", s: "low"}
        ],
        dosage: "0.5mg once daily. Jalyn: dutasteride 0.5mg + tamsulosin 0.4mg once daily, 30 min after same meal.",
        admin: "Oral. Swallow capsules whole — do not crush or chew (drug may irritate oropharyngeal mucosa). Can take with or without food.",
        nurse: "Same warnings as finasteride but note VERY LONG HALF-LIFE (5 weeks) — drug persists in body long after stopping. More complete DHT suppression may mean slightly more efficacy but similar side effect profile. ⚠️ Pregnancy warning same as finasteride — no handling by pregnant women. PSA decreases similarly — must adjust for prostate cancer screening. Jalyn (combination) convenient for patients needing both drug classes."
    },
    {
        g: "Oxybutynin", b: "Ditropan, Ditropan XL, Oxytrol (patch)", c: "Anticholinergic / Antispasmodic", cat: "uro",
        m: "Blocks MUSCARINIC (M3) RECEPTORS on bladder detrusor muscle. This relaxes the bladder smooth muscle, reducing involuntary contractions (detrusor overactivity). Increases bladder capacity and delays initial urge to void.",
        ind: "OVERACTIVE BLADDER (OAB): Urgency, frequency, urge incontinence. Neurogenic bladder (detrusor overactivity). Pediatric enuresis.",
        con: "Urinary retention, gastric retention, uncontrolled narrow-angle glaucoma. GI obstruction, paralytic ileus. Myasthenia gravis. Caution: Elderly (cognitive impairment, falls), dementia, constipation, BPH.",
        aec: "⚠️ ANTICHOLINERGIC EFFECTS (common and dose-limiting): Dry mouth (most common), constipation, blurred vision, drowsiness, dizziness. Cognitive impairment (especially elderly). Heat intolerance. Urinary retention.",
        aes: "⚠️ ANTICHOLINERGIC TOXICITY: Delirium, hallucinations, tachycardia, hyperthermia. Severe urinary retention. Paralytic ileus. QT prolongation. Cognitive decline with long-term use in elderly.",
        inter: [
            {d: "Other Anticholinergics", m: "Additive anticholinergic burden — avoid combinations.", s: "high"},
            {d: "Cholinesterase inhibitors (donepezil)", m: "Antagonistic — defeats purpose of Alzheimer's treatment.", s: "high"},
            {d: "CNS depressants", m: "Additive sedation.", s: "med"},
            {d: "Potassium chloride (solid)", m: "Delayed GI transit may cause KCl-induced ulceration.", s: "med"}
        ],
        dosage: "IR: Start 5mg BID-TID, max 5mg QID. XL: 5-10mg once daily, max 30mg/day. Patch (Oxytrol): Apply one 3.9mg/day patch twice weekly. Topical gel also available.",
        admin: "Oral (IR, XL), transdermal patch, topical gel. XL: swallow whole, do not crush. Patch: apply to dry, intact skin on abdomen, hip, or buttock. Rotate sites.",
        nurse: "⚠️ BEERS CRITERIA: Avoid in elderly if possible — high anticholinergic burden causes cognitive impairment, delirium, falls. Use lowest effective dose. Transdermal (patch, gel) has FEWER systemic anticholinergic effects — preferred in elderly. Monitor for urinary retention — especially in men with BPH. Counsel on dry mouth management (sugar-free gum, frequent sips). Watch for constipation — encourage fluids, fiber. Avoid overheating (impaired sweating)."
    },
    {
        g: "Tolterodine", b: "Detrol, Detrol LA", c: "Anticholinergic / Antimuscarinic", cat: "uro",
        m: "Competitive muscarinic receptor antagonist with RELATIVE SELECTIVITY for bladder M3 receptors over salivary gland receptors. This selectivity theoretically reduces dry mouth compared to oxybutynin, though both occur.",
        ind: "Overactive bladder (OAB): urgency, frequency, urge incontinence.",
        con: "Same as oxybutynin: Urinary retention, gastric retention, uncontrolled narrow-angle glaucoma. GI obstruction. Caution in elderly, hepatic impairment.",
        aec: "Dry mouth (less than oxybutynin), constipation, headache, dry eyes, dizziness, somnolence.",
        aes: "Same anticholinergic toxicity risks as oxybutynin. QT prolongation. Cognitive effects in elderly.",
        inter: [
            {d: "CYP3A4 inhibitors (ketoconazole, erythromycin, clarithromycin)", m: "Increase tolterodine levels — reduce dose to 1mg BID.", s: "med"},
            {d: "CYP2D6 inhibitors (fluoxetine, paroxetine)", m: "Increase tolterodine levels in poor metabolizers.", s: "med"},
            {d: "Other Anticholinergics", m: "Additive effects.", s: "high"}
        ],
        dosage: "IR: 2mg BID. LA: 4mg once daily. Reduce dose to 1mg BID (IR) or 2mg daily (LA) with CYP3A4 inhibitors or hepatic impairment.",
        admin: "Oral with or without food. LA capsules: swallow whole.",
        nurse: "May be better tolerated than oxybutynin (fewer anticholinergic side effects). Still requires same precautions in elderly (Beers criteria). Monitor for urinary retention, constipation, dry mouth. Dose reduce with CYP3A4 inhibitors. Long-acting (LA) formulation is once-daily, better compliance, fewer peaks in side effects."
    },
    {
        g: "Bethanechol", b: "Urecholine", c: "Cholinergic Agonist (Muscarinic)", cat: "uro",
        m: "Direct-acting MUSCARINIC CHOLINERGIC AGONIST. Stimulates M3 receptors on bladder detrusor muscle → contraction → promotes voiding. Also increases GI motility. Used for URinary RETENTION (opposite of oxybutynin which treats overactive bladder).",
        ind: "URINARY RETENTION (non-obstructive): Post-operative, neurogenic bladder with hypotonic detrusor. Post-operative GI ileus (off-label). NOT for mechanical obstruction (BPH, stricture).",
        con: "⚠️ MECHANICAL URINARY OBSTRUCTION (BPH, stricture) — stimulating contraction against obstruction causes bladder rupture. Mechanical GI obstruction. Asthma, COPD. Hyperthyroidism. Peptic ulcer. Parkinsonism. Bradycardia, hypotension. Epilepsy.",
        aec: "CHOLINERGIC effects: Abdominal cramps, diarrhea, nausea, salivation, sweating, flushing, headache. Urgency, frequency.",
        aes: "⚠️ CHOLINERGIC CRISIS (overdose): Severe bradycardia, hypotension, bronchoconstriction, respiratory distress. Bladder rupture if given with obstruction. Syncope.",
        inter: [
            {d: "Anticholinergics", m: "Antagonistic — defeats purpose.", s: "high"},
            {d: "Cholinesterase inhibitors", m: "Additive cholinergic effects — toxicity risk.", s: "high"},
            {d: "Beta-blockers", m: "Additive bradycardia.", s: "med"}
        ],
        dosage: "10-50mg PO TID-QID on empty stomach. Start low (10-25mg), titrate to effect. Give 1 hour before or 2 hours after meals to reduce nausea.",
        admin: "Oral only in US (subcutaneous available in some countries but rarely used due to severe reactions). Take on empty stomach for best absorption.",
        nurse: "⚠️ CRITICAL: Rule out MECHANICAL OBSTRUCTION before giving — if bladder contracts against obstruction, can rupture. Used for HYPOTONIC bladder (can't contract), NOT for BPH or stricture. Monitor for cholinergic effects: bradycardia, increased salivation, sweating, GI cramping. Have ATROPINE available as antidote for cholinergic crisis. Take on empty stomach. Rarely used now — intermittent catheterization often preferred. Opposite mechanism from oxybutynin (which relaxes bladder)."
    }
];
