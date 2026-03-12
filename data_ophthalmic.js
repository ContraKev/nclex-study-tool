/* Block 12 — Ophthalmic/Glaucoma Medications (6 drugs)
   Source: pharmacology_A_drjames.txt */

const data_ophthalmic = [
    {
        g: "Timolol (ophthalmic)", b: "Timoptic, Betimol, Istalol", c: "Beta-Blocker (Ophthalmic)", cat: "ophthal",
        m: "Non-selective BETA-ADRENERGIC BLOCKER applied topically to the eye. Decreases AQUEOUS HUMOR PRODUCTION by the ciliary body (beta-2 blockade reduces cAMP-mediated fluid secretion). Does not affect pupil size or accommodation — advantage over some other glaucoma drugs.",
        ind: "OPEN-ANGLE GLAUCOMA (first-line). Ocular hypertension. Sometimes used in angle-closure glaucoma as adjunct after laser/surgery.",
        con: "⚠️ ASTHMA, severe COPD (systemic absorption causes bronchospasm). Sinus bradycardia, heart block (2nd/3rd degree), cardiogenic shock, decompensated heart failure. Caution: Diabetes (masks hypoglycemia symptoms), peripheral vascular disease.",
        aec: "Ocular: Burning, stinging on instillation, dry eyes, blurred vision. SYSTEMIC (absorbed): Bradycardia, fatigue, dizziness, depression.",
        aes: "⚠️ SYSTEMIC BETA-BLOCKADE (even from eye drops): Bronchospasm in asthma/COPD, severe bradycardia, heart block, hypotension, heart failure exacerbation. Masking of hypoglycemia. Depression.",
        inter: [
            {d: "Oral Beta-blockers", m: "Additive systemic beta-blockade — monitor closely.", s: "high"},
            {d: "Calcium channel blockers (verapamil, diltiazem)", m: "Additive bradycardia, AV block.", s: "med"},
            {d: "Clonidine", m: "Additive bradycardia, rebound HTN if clonidine stopped.", s: "med"},
            {d: "Epinephrine (systemic)", m: "Unopposed alpha stimulation → severe HTN.", s: "med"}
        ],
        dosage: "0.25% or 0.5% solution: 1 drop in affected eye(s) twice daily. 0.5% gel-forming solution (Timoptic-XE): 1 drop once daily. Response seen in ~30 minutes, max effect 1-2 hours.",
        admin: "Ophthalmic drops. PUNCTAL OCCLUSION technique (press on inner corner of eye for 2-3 minutes after instillation) reduces systemic absorption. Wait 5 minutes between different eye drops.",
        nurse: "⚠️ SYSTEMIC ABSORPTION IS REAL — even eye drops can cause bradycardia, bronchospasm. Screen for asthma, COPD, heart block, HF before starting. Teach PUNCTAL OCCLUSION to minimize systemic effects. Monitor HR and respiratory status, especially initially. Ask about fatigue, depression, exercise intolerance (beta-blockade). Does NOT cause miosis (pupil constriction) or accommodation changes — advantage for driving, reading. If patient on oral beta-blocker: additive effects — monitor closely."
    },
    {
        g: "Latanoprost", b: "Xalatan", c: "Prostaglandin Analog (Ophthalmic)", cat: "ophthal",
        m: "Prostaglandin F2-alpha analog that increases UVEOSCLERAL OUTFLOW of aqueous humor (secondary drainage pathway). This is a different mechanism than drugs that decrease production. Very effective IOP reduction (25-35%). Once-daily dosing.",
        ind: "OPEN-ANGLE GLAUCOMA (often first-line — most effective class). Ocular hypertension.",
        con: "Active intraocular inflammation (uveitis, iritis). Macular edema risk. Known hypersensitivity. Caution: Aphakia, pseudophakia with torn posterior capsule (macular edema risk).",
        aec: "⚠️ COSMETIC CHANGES: Increased iris pigmentation (irreversible brown color change in ~30% of patients with mixed-color irides), eyelash growth (longer, thicker, darker), periorbital skin darkening. Conjunctival hyperemia (red eye). Ocular irritation, foreign body sensation.",
        aes: "Macular edema (especially in aphakic/pseudophakic patients). Iritis, uveitis reactivation. Herpes keratitis reactivation.",
        inter: [
            {d: "Other Prostaglandin Analogs", m: "Do not use together — may reduce efficacy (paradoxical).", s: "med"},
            {d: "Thimerosal-containing products", m: "May precipitate — separate by 5 minutes.", s: "low"}
        ],
        dosage: "One drop in affected eye(s) ONCE DAILY in the EVENING. More frequent use may reduce efficacy.",
        admin: "Ophthalmic solution. EVENING dosing optimal. Refrigerate before opening; after opening, stable at room temperature for 6 weeks. Remove contact lenses before instillation, wait 15 minutes to reinsert.",
        nurse: "⚠️ COSMETIC CHANGES: Warn patients about potential PERMANENT darkening of iris (especially in patients with hazel, green, blue-brown irides). Eyelash changes also occur. Give in EVENING — more effective and avoids daytime hyperemia. Once daily ONLY — more frequent dosing is LESS effective. No systemic beta-blockade effects (unlike timolol). Refrigerate unopened bottles. Can use with other glaucoma drugs if needed. Contact lens wearers: remove lenses, wait 15 min after instilling."
    },
    {
        g: "Brimonidine", b: "Alphagan, Alphagan P", c: "Alpha-2 Agonist (Ophthalmic)", cat: "ophthal",
        m: "Selective ALPHA-2 ADRENERGIC AGONIST. Dual mechanism: (1) Decreases aqueous humor production (reduces blood flow to ciliary body), (2) Increases uveoscleral outflow. Also has neuroprotective properties (theoretical benefit beyond IOP lowering).",
        ind: "Open-angle glaucoma. Ocular hypertension. Prevention of IOP spikes after laser procedures.",
        con: "Concurrent MAO inhibitor therapy. Caution: Severe cardiovascular disease, cerebral/coronary insufficiency, Raynaud's phenomenon, thromboangiitis obliterans, depression. ⚠️ Children under 2 years (severe CNS depression).",
        aec: "Ocular: Allergic conjunctivitis (common — up to 25%), burning, stinging, hyperemia, blurred vision, foreign body sensation. Systemic: Dry mouth, fatigue, drowsiness, headache.",
        aes: "⚠️ Severe ALLERGIC REACTIONS (follicular conjunctivitis — may need to discontinue). Systemic: Hypotension, bradycardia. ⚠️ CNS depression in CHILDREN — apnea, hypotension, hypothermia, bradycardia (contraindicated in infants).",
        inter: [
            {d: "MAOIs", m: "CONTRAINDICATED — severe interaction potential.", s: "high"},
            {d: "CNS depressants", m: "Additive sedation.", s: "med"},
            {d: "Antihypertensives", m: "Additive hypotension.", s: "med"},
            {d: "Tricyclic antidepressants", m: "May reduce brimonidine efficacy.", s: "low"}
        ],
        dosage: "0.1%, 0.15%, or 0.2% solution: 1 drop in affected eye(s) TID (approximately 8 hours apart). Alphagan P uses purite preservative (less allergy than benzalkonium chloride).",
        admin: "Ophthalmic drops TID. Wait 5 minutes between different eye medications. Contact lens removal recommended.",
        nurse: "⚠️ ALLERGIC CONJUNCTIVITIS common (15-25%) — may need to switch to different class. Watch for follicular reaction, lid swelling. ⚠️ NEVER use in infants/young children — can cause severe CNS/respiratory depression. Check for MAOIs (contraindicated). Monitor for systemic effects: fatigue, drowsiness, dry mouth — especially in elderly. TID dosing less convenient than once-daily prostaglandin analogs. Good adjunct when added to other agents."
    },
    {
        g: "Pilocarpine (ophthalmic)", b: "Isopto Carpine", c: "Cholinergic Agonist (Miotic)", cat: "ophthal",
        m: "Direct-acting MUSCARINIC CHOLINERGIC AGONIST. Causes MIOSIS (pupil constriction) and contraction of ciliary muscle. In open-angle glaucoma, ciliary muscle contraction pulls on trabecular meshwork → increases aqueous outflow via conventional pathway. In angle-closure, miosis pulls iris away from trabecular meshwork.",
        ind: "ANGLE-CLOSURE GLAUCOMA (acute — pulls iris away from angle). Open-angle glaucoma (adjunct — less commonly used now). Reversal of mydriasis after eye exam. Dry mouth (Salagen — oral form).",
        con: "Acute iritis, acute inflammatory conditions of anterior eye. Conditions where miosis is undesirable. Caution: Retinal detachment risk in predisposed patients, asthma, bradycardia, GI obstruction.",
        aec: "⚠️ MIOSIS → Decreased night vision (pupil can't dilate), dim vision. Ciliary muscle spasm → BROW ACHE (pain around eye), myopia (nearsightedness), blurred vision. These effects are troublesome, limiting use. Ocular irritation.",
        aes: "⚠️ SYSTEMIC CHOLINERGIC EFFECTS (rare but possible): Bradycardia, bronchospasm, increased salivation, sweating, GI upset. Retinal detachment (rare, in predisposed patients).",
        inter: [
            {d: "Anticholinergics (atropine)", m: "Direct antagonism — opposite effects on pupil.", s: "high"},
            {d: "Other Miotics", m: "Additive effect.", s: "low"}
        ],
        dosage: "1% or 2% solution: 1-2 drops up to 4 times daily. Acute angle-closure: 1-2 drops every 5-10 minutes initially. Higher concentrations (4%, 6%) rarely used.",
        admin: "Ophthalmic drops. Gel available for once-daily dosing at bedtime (blurs vision, so nighttime use). Multiple daily doses required for solution.",
        nurse: "⚠️ VISUAL SIDE EFFECTS limit use: Tell patients about decreased night vision (pupil stays small), brow ache, temporary myopia — affects driving, reading. Give at bedtime if using gel form (blurs vision). Less commonly used now due to side effects — prostaglandin analogs and beta-blockers preferred. Still important for ACUTE ANGLE-CLOSURE GLAUCOMA (miosis is essential to pull iris away). Systemic cholinergic effects possible — ask about asthma, bradycardia, GI problems."
    },
    {
        g: "Acetazolamide", b: "Diamox", c: "Carbonic Anhydrase Inhibitor (Systemic)", cat: "ophthal",
        m: "Inhibits CARBONIC ANHYDRASE enzyme throughout the body. In the eye: inhibits carbonic anhydrase in ciliary body → decreases bicarbonate formation → reduces aqueous humor production (40-60% reduction). Also a weak diuretic and used for altitude sickness.",
        ind: "ACUTE ANGLE-CLOSURE GLAUCOMA (rapid IOP reduction needed). Open-angle glaucoma (adjunct when topical agents insufficient). Altitude sickness prophylaxis. Edema (weak diuretic). Seizures (certain types).",
        con: "SULFONAMIDE ALLERGY (cross-reactivity). Severe renal/hepatic impairment. Hyponatremia, hypokalemia. Adrenal insufficiency. Cirrhosis (may precipitate hepatic encephalopathy). Acidosis.",
        aec: "METALLIC TASTE (common), paresthesias (tingling in fingers, toes, perioral), GI upset, anorexia, polyuria. Drowsiness, fatigue.",
        aes: "⚠️ METABOLIC ACIDOSIS (inhibits bicarbonate reabsorption). Severe HYPOKALEMIA. Blood dyscrasias (aplastic anemia, agranulocytosis — rare, sulfonamide class). KIDNEY STONES (alkaline urine precipitates calcium phosphate). Stevens-Johnson syndrome (sulfa allergy). Hepatic failure.",
        inter: [
            {d: "Aspirin (high-dose)", m: "Increased CNS penetration of acetazolamide — toxicity.", s: "high"},
            {d: "Lithium", m: "Increased lithium excretion → decreased levels.", s: "med"},
            {d: "Amphetamines", m: "Alkaline urine decreases excretion → toxicity.", s: "med"},
            {d: "Potassium-wasting diuretics", m: "Additive hypokalemia.", s: "med"},
            {d: "Metformin", m: "Increased lactic acidosis risk.", s: "med"}
        ],
        dosage: "Glaucoma: 250mg PO 1-4 times daily, or 500mg SR BID. Acute angle-closure: 500mg IV initially, then oral. Altitude sickness: 125-250mg BID starting 1-2 days before ascent. Max 1g/day.",
        admin: "Oral tablets, sustained-release capsules, IV (for acute situations). SR capsules should not be crushed. Take with food to reduce GI upset.",
        nurse: "⚠️ CHECK FOR SULFA ALLERGY before giving (sulfonamide structure). Monitor potassium — can cause significant hypokalemia. Watch for acidosis symptoms (rapid breathing, confusion). Tingling/paresthesias are COMMON and usually benign — reassure patient. KIDNEY STONES: Encourage fluids (2-3L/day) to prevent. Temporary use preferred — tolerance develops and side effects limit long-term use. Systemic drug with systemic effects — more side effects than topical agents. Metallic taste affects compliance."
    },
    {
        g: "Dorzolamide", b: "Trusopt", c: "Carbonic Anhydrase Inhibitor (Topical)", cat: "ophthal",
        m: "Topical carbonic anhydrase inhibitor applied directly to the eye. Same mechanism as acetazolamide (decreases aqueous humor production) but localized delivery reduces systemic side effects. Often combined with timolol (Cosopt).",
        ind: "Open-angle glaucoma. Ocular hypertension. Usually second-line or adjunct to prostaglandin analogs or beta-blockers.",
        con: "SULFONAMIDE ALLERGY. Severe renal impairment (systemic absorption can accumulate).",
        aec: "Ocular: Burning, stinging (common — 33%), bitter taste (drains into nasopharynx), blurred vision, superficial punctate keratitis. Mild systemic: Headache, fatigue.",
        aes: "Severe ocular allergy (less common than brimonidine). Corneal edema (with compromised corneal endothelium). Rarely: Same systemic effects as acetazolamide (acidosis, hypokalemia, blood dyscrasias) — but much less common with topical use.",
        inter: [
            {d: "Oral carbonic anhydrase inhibitors", m: "Additive effect — generally avoid combination.", s: "med"},
            {d: "High-dose aspirin", m: "Same theoretical interaction as acetazolamide.", s: "low"}
        ],
        dosage: "2% solution: 1 drop in affected eye(s) TID. Cosopt (dorzolamide/timolol): 1 drop BID.",
        admin: "Ophthalmic drops TID. Bitter taste common (drains through nasolacrimal duct — warn patients). Contact lenses: remove, wait 15 minutes.",
        nurse: "⚠️ CHECK FOR SULFA ALLERGY (cross-reactivity with sulfonamides). Topical administration has MUCH fewer systemic effects than acetazolamide — preferred for chronic use. Common complaint: burning/stinging on instillation, bitter taste. TID dosing is inconvenient. Often combined with timolol (Cosopt) for BID convenience. Good add-on when prostaglandin or beta-blocker alone is insufficient."
    }
];
