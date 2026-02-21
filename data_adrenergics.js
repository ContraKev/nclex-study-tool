const data_adrenergics = [
    {
        g: "Prazosin", b: "Minipress", c: "Alpha-1 Adrenergic Blocker", cat: "cv",
        m: "Selectively and competitively inhibits postsynaptic alpha-1 adrenergic receptors in the smooth muscle of blood vessels. This action inhibits the vasoconstrictor effect of circulating catecholamines (norepinephrine), leading to significant peripheral vasodilation of both arterioles and veins. The result is a decrease in total peripheral resistance and a profound reduction in systemic blood pressure. Unlike non-selective alpha-blockers, prazosin typically does not cause significant reflex tachycardia because it does not block presynaptic alpha-2 receptors. It also helps relax smooth muscle in the bladder neck and prostate, though it is used primarily for hypertension.",
        ind: "Management of Hypertension (often as an adjunct to other antihypertensives) and off-label treatment of PTSD-related nightmares and sleep disturbances (due to CNS alpha-1 blockade).",
        con: "Known hypersensitivity to prazosin or other quinazolines (terazosin, doxazosin). Use with extreme caution in patients with preexisting cataracts or undergoing cataract surgery (Floppy Iris Syndrome risk).",
        aec: "Common: Dizziness, drowsiness, headache, lack of energy (asthenia), nausea, and palpitations. Nasal congestion and dry mouth may occur.",
        aes: "FIRST-DOSE SYNCOPE: Severe orthostatic hypotension causing sudden loss of consciousness, typically within 30-90 minutes of the initial dose. Priapism (rare medical emergency) and significant fluid retention (edema).",
        inter: [
            {d: "PDE-5 Inhibitors (Viagra)", m: "Additive vasodilatory effects; extreme risk of severe, symptomatic hypotension.", s: "high"},
            {d: "Beta Blockers", m: "Increases risk of severe first-dose postural hypotension and syncope.", s: "high"},
            {d: "NSAIDs", m: "May decrease the antihypertensive effect by promoting sodium and water retention.", s: "med"}
        ],
        dosage: "Oral: Initial dose 1 mg two or three times daily. Maintenance: 6 mg to 15 mg daily in divided doses. Maximum dose is 20 mg/day.",
        admin: "Administer orally. The VERY FIRST DOSE (and the first dose of any significant dose increase) should be taken at BEDTIME to minimize the risk of injury from first-dose syncope. Maintain consistent hydration.",
        nurse: "Monitor blood pressure for 2-6 hours after the first dose. Teach patient to rise very slowly from a sitting or lying position (orthostatic safety). Advise avoiding hazardous activities for 24 hours after the first dose or dose increases. Monitor for peripheral edema and weight gain. Instruct patient to report any painful, prolonged erection immediately."
    },
    {
        g: "Terazosin", b: "Hytrin", c: "Alpha-1 Adrenergic Blocker", cat: "cv",
        m: "Competitively inhibits postsynaptic alpha-1 adrenergic receptors, resulting in potent vasodilation of both veins and arterioles. This reduces peripheral vascular resistance and lowers systemic blood pressure. It also selectively relaxes smooth muscle in the bladder neck and prostate capsule, improving urine flow and reducing the symptoms of BPH. It has a longer duration of action than prazosin, allowing for once-daily dosing. It does not significantly affect heart rate in the steady state, though reflex tachycardia can occur during initial titration.",
        ind: "Management of Hypertension (monotherapy or in combination) and symptomatic treatment of Benign Prostatic Hyperplasia (BPH).",
        con: "Hypersensitivity to terazosin or other alpha-1 blockers. Use with caution in patients with hepatic impairment or those undergoing cataract surgery.",
        aec: "Common: Dizziness, asthenia (weakness), nasal congestion, peripheral edema, somnolence, and nausea.",
        aes: "Postural hypotension, first-dose syncope (loss of consciousness), and rare thrombocytopenia. Intraoperative Floppy Iris Syndrome (IFIS) during eye surgery. Risk of priapism.",
        inter: [{d: "Antihypertensives", m: "Additive hypotensive effects; increased risk of dizziness and falls.", s: "med"}],
        dosage: "Oral: Initial 1 mg at bedtime. Maintenance for HTN: 1 mg to 5 mg daily. Maintenance for BPH: up to 10 mg once daily. Max 20 mg/day.",
        admin: "Administer orally once daily at BEDTIME. If therapy is interrupted for several days, the patient must restart at the 1 mg initial dose to prevent syncope. Swallow tablets whole.",
        nurse: "Assess blood pressure periodically, specifically checking for orthostatic drops. Monitor for fluid retention and weight gain. Evaluate urinary symptoms if used for BPH (flow, urgency, frequency). Teach the patient the 'First-Dose at Bedtime' rule and orthostatic safety precautions. Advise the patient to notify their ophthalmologist of terazosin use before any eye procedures."
    },
    {
        g: "Doxazosin", b: "Cardura, Cardura XL", c: "Alpha-1 Adrenergic Blocker", cat: "cv",
        m: "Selectively inhibits postsynaptic alpha-1 adrenergic receptors. By blocking these receptors, it causes peripheral vasodilation of both arterioles and veins, which decreases total peripheral resistance and lowers blood pressure. It has a long half-life (approx. 22 hours), allowing for consistent 24-hour blood pressure control with once-daily dosing. It also relaxes smooth muscle in the prostate and bladder neck, making it highly effective for male patients with concurrent BPH. It may also have a modest beneficial effect on lipid profiles by slightly lowering LDL and total cholesterol.",
        ind: "Management of Hypertension (often as part of a combination) and treatment of Benign Prostatic Hyperplasia (BPH).",
        con: "Hypersensitivity to doxazosin or other quinazolines. Use with caution in patients with hepatic impairment. Use with caution in patients with pre-existing severe gastrointestinal narrowing (for XL form).",
        aec: "Common: Dizziness, headache, fatigue, edema, somnolence, and nausea. Accidental injury related to dizziness.",
        aes: "FIRST-DOSE SYNCOPE, severe postural hypotension, and Intraoperative Floppy Iris Syndrome (IFIS). Potential for rare hepatotoxicity and blood dyscrasias.",
        inter: [{d: "PDE-5 Inhibitors", m: "Significantly increases risk of severe symptomatic hypotension; monitor BP closely.", s: "high"}],
        dosage: "Oral: 1 mg to 16 mg once daily. XL formulation: 4 mg to 8 mg once daily. Max dose for HTN is 16 mg/day.",
        admin: "Take once daily. The XL (Extended Release) tablets MUST be swallowed whole and taken WITH BREAKFAST. Do not crush, chew, or break the XL tablets. The immediate-release form is usually taken at bedtime.",
        nurse: "Monitor BP closely after the first dose and any dose increase. Teach patient that the empty shell of the XL tablet may be visible in the stool (this is normal). Teach orthostatic safety (dangling legs at bedside). Monitor weight and for signs of edema. Advise the patient to avoid hazardous tasks until the effects of the medication are known."
    },
    {
        g: "Clonidine", b: "Catapres, Catapres-TTS, Kapvay", c: "Alpha-2 Adrenergic Agonist (Centrally Acting)", cat: "cv",
        m: "Stimulates alpha-2 adrenergic receptors in the brainstem (specifically the vasomotor center). This results in a potent decrease in sympathetic outflow from the central nervous system to the heart, kidneys, and peripheral vasculature. This leads to a reduction in peripheral vascular resistance, heart rate, and both systolic and diastolic blood pressure. It also reduces plasma renin activity. The Kapvay (extended-release) form acts on receptors in the prefrontal cortex to improve symptoms of ADHD.",
        ind: "Management of Hypertension (usually as an add-on therapy), ADHD (Kapvay), and off-label for opioid withdrawal, nicotine dependence, migraine prophylaxis, and severe pain management (epidural).",
        con: "Known hypersensitivity; anticoagulant therapy (for transdermal patch due to skin irritation). Use with extreme caution in patients with severe coronary insufficiency, recent MI, or chronic renal failure.",
        aec: "Common: Xerostomia (DRY MOUTH - occurs in up to 40%), sedation, dizziness, constipation, and impotence. Fatigue and headache.",
        aes: "REBOUND HYPERTENSION: Severe, rapid, and potentially fatal rise in BP (along with nervousness and tremors) if the drug is stopped abruptly. Bradycardia, AV block, and vivid dreams or hallucinations (rare).",
        inter: [
            {d: "CNS Depressants / Alcohol", m: "Additive sedation and respiratory depression; high risk of injury.", s: "high"},
            {d: "Tricyclic Antidepressants", m: "May decrease the antihypertensive effect of clonidine; monitor BP.", s: "med"},
            {d: "Beta Blockers", m: "May potentiate bradycardia and worsen rebound hypertension upon withdrawal.", s: "high"}
        ],
        dosage: "Oral: 0.1 mg to 0.3 mg twice daily (BID). Patch (TTS): 0.1 mg to 0.3 mg/24hr (one patch applied every 7 days).",
        admin: "Oral: Take the larger portion of the daily dose at BEDTIME to minimize daytime sedation. Patch: Apply to a hairless, intact area of the upper outer arm or chest; rotate sites and change every 7 days. Taper drug over 2-4 days when discontinuing to avoid rebound HTN.",
        nurse: "Monitor for severe rebound HTN (nervousness, agitation, headache, tachycardia) if a dose is missed. Check skin under the patch for irritation or allergic dermatitis. Advise frequent sips of water or sugarless gum for dry mouth. Instruct patient NOT to discontinue the drug abruptly. Monitor BP and HR periodically. Assess for signs of depression."
    },
    {
        g: "Methyldopa", b: "Aldomet (still used clinically)", c: "Alpha-2 Adrenergic Agonist (Centrally Acting)", cat: "cv",
        m: "A prodrug that is converted to the active metabolite alpha-methylnorepinephrine in the central nervous system. This metabolite stimulates central alpha-2 receptors, which reduces sympathetic outflow from the brainstem to the heart and blood vessels. This leads to a decrease in arterial pressure and peripheral resistance without a significant reduction in heart rate or cardiac output. It is unique among antihypertensives for its long established safety profile in pregnancy and its lack of effect on renal blood flow.",
        ind: "Management of Hypertension, specifically recognized as the DRUG OF CHOICE for Hypertension in Pregnancy (Preeclampsia and Gestational Hypertension).",
        con: "Active hepatic disease (acute hepatitis or active cirrhosis), hypersensitivity to the drug or its components, and concurrent use of Monoamine Oxidase (MAO) inhibitors.",
        aec: "Common: Sedation (most common side effect, usually transient), dry mouth, headache, and nasal congestion. Gastrointestinal upset and dizziness.",
        aes: "HEPATOTOXICITY: Potentially severe and life-threatening liver injury. HEMOLYTIC ANEMIA (associated with a positive Coombs test), drug-induced fever, and discolored urine (darkens on exposure to air). Rare lupus-like syndrome.",
        inter: [
            {d: "Iron Supplements", m: "Significantly decreases methyldopa absorption; separate administration by at least 2 hours.", s: "med"},
            {d: "Lithium", m: "Increases risk of lithium toxicity by reducing renal clearance of the drug.", s: "high"}
        ],
        dosage: "Oral: 250 mg to 500 mg two to three times daily. Maximum 3g/day. IV: 250 mg to 500 mg every 6 hours (Max 1g q6h).",
        admin: "Available in Oral and IV (as methyldopate HCl) forms. Infuse IV doses slowly over 30 to 60 minutes. Maintain consistent dosing to keep steady-state levels and avoid fluctuations in blood pressure.",
        nurse: "Monitor Liver Function Tests (LFTs) baseline and periodically (especially during the first 6-12 weeks). Check CBC for signs of hemolytic anemia (decreased Hgb/Hct). Educate the patient that urine may darken upon standing (harmless oxidation). Instruct the patient to report any unexplained fever or yellowing of the eyes/skin. Monitor BP baseline and throughout therapy."
    },
    {
        g: "Guanfacine", b: "Tenex, Intuniv", c: "Alpha-2 Adrenergic Agonist (Centrally Acting)", cat: "cv",
        m: "Selectively stimulates alpha-2A adrenergic receptors in the prefrontal cortex and brainstem. This action reduces sympathetic outflow from the vasomotor center, lowering heart rate and peripheral resistance. In the prefrontal cortex, it helps regulate signaling to improve attention, impulsivity, and emotional regulation. It is more selective for the alpha-2A subtype than clonidine, which may result in a lower incidence of certain side effects like sedation.",
        ind: "Management of Hypertension (Tenex) and treatment of Attention Deficit Hyperactivity Disorder (ADHD) as monotherapy or adjunct (Intuniv).",
        con: "Known hypersensitivity to guanfacine. Use with caution in patients with severe coronary insufficiency, recent MI, or cerebrovascular disease.",
        aec: "Common: Somnolence (sleepiness), fatigue, headache, xerostomia (dry mouth), and abdominal pain. Irritability and dizziness.",
        aes: "Severe bradycardia, hypotension (especially orthostatic), and severe rebound hypertension upon abrupt discontinuation. Potential for syncope.",
        inter: [
            {d: "Valproic Acid", m: "May increase the serum concentration of valproic acid; monitor levels.", s: "med"},
            {d: "Strong CYP3A4 Inhibitors", m: "Significantly increases guanfacine levels; require dose adjustment.", s: "high"}
        ],
        dosage: "HTN: 1 mg to 3 mg daily at bedtime. ADHD: 1 mg to 4 mg once daily. Max 7 mg/day for ADHD.",
        admin: "Oral only. Take at bedtime to minimize daytime sedation. Intuniv (ER) MUST be swallowed whole and MUST NOT be taken with high-fat meals, as this increases drug absorption to potentially toxic levels. Taper slowly when stopping.",
        nurse: "Monitor blood pressure and heart rate baseline and periodically, as the drug can cause severe bradycardia. Do NOT crush, chew, or break extended-release (Intuniv) tablets. Educate the patient and caregivers to taper the dose slowly when discontinuing to avoid severe rebound hypertension. Instruct patient to avoid taking Intuniv with high-fat meals. Monitor for excessive somnolence during the first 2 weeks of therapy."
    }
];
