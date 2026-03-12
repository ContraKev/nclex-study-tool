/* Block 1d — Pain: Adjuvants + Migraine + Muscle Relaxants (6 drugs)
   Source: pain_lecture_drjames.txt (Slides 66-72) */

const data_pain_adjuvants = [
    {
        g: "Gabapentin", b: "Neurontin, Gralise, Horizant", c: "Anticonvulsant / Adjuvant Analgesic", cat: "pain",
        m: "Binds to alpha-2-delta subunit of voltage-gated calcium channels in the CNS, reducing excitatory neurotransmitter release. Originally developed as anticonvulsant but now widely used for NEUROPATHIC PAIN. Does NOT work through GABA receptors despite the name. Modulates pain signal transmission in dorsal horn.",
        ind: "NEUROPATHIC PAIN — diabetic peripheral neuropathy, postherpetic neuralgia (shingles pain). Chronic pain syndromes. Fibromyalgia (off-label). Seizure disorders (partial seizures, adjunctive). Restless leg syndrome (Horizant formulation).",
        con: "Hypersensitivity. Severe renal impairment (requires dose adjustment). Abrupt discontinuation (taper to avoid withdrawal seizures).",
        aec: "Drowsiness, dizziness, fatigue. Peripheral edema. Weight gain. Ataxia, coordination problems. Blurred vision.",
        aes: "CNS depression (especially when combined with opioids or CNS depressants). Respiratory depression (FDA warning when combined with opioids). Suicidal ideation (monitor mood). Angioedema (rare). Withdrawal seizures if stopped abruptly. Abuse potential (increasing concern).",
        inter: [
            {d: "Opioids", m: "Additive CNS and respiratory depression — FDA boxed warning. Increased overdose death risk.", s: "high"},
            {d: "CNS Depressants (Alcohol, Benzodiazepines)", m: "Enhanced sedation and CNS depression.", s: "high"},
            {d: "Antacids", m: "Reduce gabapentin absorption — separate by 2 hours.", s: "low"}
        ],
        dosage: "Neuropathic pain: Start 100-300mg at bedtime, titrate up to 300-600mg TID. Maximum 3600mg/day. Renal impairment: reduce dose based on CrCl. Seizures: 300-600mg TID.",
        admin: "Oral. May take with or without food. Titrate slowly to minimize sedation. Do NOT stop abruptly — taper over at least 1 week. Gralise and Horizant are extended-release — not interchangeable with immediate-release.",
        nurse: "Assess pain level before and after treatment. Monitor for CNS depression especially when combined with opioids — FDA warning about respiratory depression risk. Evaluate for suicidal ideation (all anticonvulsants carry this risk). Taper slowly when discontinuing — abrupt stop can cause seizures. Educate about drowsiness — avoid driving until effects known. Dose adjustment needed in renal impairment."
    },
    {
        g: "Pregabalin", b: "Lyrica, Lyrica CR", c: "Anticonvulsant / Adjuvant Analgesic (Schedule V)", cat: "pain",
        m: "Same mechanism as gabapentin — binds to alpha-2-delta subunit of voltage-gated calcium channels, reducing excitatory neurotransmitter release. More potent and more predictable absorption than gabapentin. SCHEDULE V controlled substance due to abuse potential (euphoria at high doses).",
        ind: "NEUROPATHIC PAIN — diabetic peripheral neuropathy, postherpetic neuralgia, spinal cord injury pain. FIBROMYALGIA (FDA-approved). Seizure disorders (partial seizures, adjunctive). Generalized anxiety disorder (approved in Europe).",
        con: "Hypersensitivity to pregabalin or gabapentin. Severe renal impairment (requires dose adjustment). Abrupt discontinuation.",
        aec: "Dizziness, drowsiness, dry mouth. Peripheral edema, weight gain. Blurred vision. Difficulty concentrating.",
        aes: "CNS/respiratory depression (especially with opioids — FDA boxed warning). Suicidal ideation. Angioedema. Withdrawal symptoms if stopped abruptly (insomnia, nausea, headache, diarrhea, seizures). ABUSE POTENTIAL (Schedule V) — reports of euphoria, especially at high doses.",
        inter: [
            {d: "Opioids", m: "Additive CNS and respiratory depression — FDA boxed warning. Associated with increased overdose deaths.", s: "high"},
            {d: "CNS Depressants (Alcohol, Benzodiazepines)", m: "Enhanced sedation.", s: "high"},
            {d: "Thiazolidinediones (Pioglitazone)", m: "Additive risk of peripheral edema and weight gain.", s: "med"}
        ],
        dosage: "Neuropathic pain: Start 50mg TID or 75mg BID, titrate to 150-300mg BID. Maximum 600mg/day. Fibromyalgia: 75mg BID initially, may increase to 150mg BID. Renal impairment: reduce dose.",
        admin: "Oral. May take with or without food. Titrate gradually. Do NOT stop abruptly — taper over at least 1 week. Lyrica CR is once-daily extended-release.",
        nurse: "CONTROLLED SUBSTANCE (Schedule V) — monitor for signs of misuse. Same CNS/respiratory depression warning as gabapentin when combined with opioids. Monitor for suicidal ideation. Assess for peripheral edema and weight gain. Do not discontinue abruptly — taper gradually. More predictable pharmacokinetics than gabapentin allows BID dosing. Renal dose adjustment required."
    },
    {
        g: "Duloxetine", b: "Cymbalta, Irenka", c: "SNRI Antidepressant / Adjuvant Analgesic", cat: "pain",
        m: "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI) — inhibits reuptake of both serotonin and norepinephrine in the CNS. The dual mechanism enhances descending pain inhibitory pathways, making it effective for neuropathic and chronic pain independent of its antidepressant effects.",
        ind: "NEUROPATHIC PAIN — diabetic peripheral neuropathy (FDA-approved). FIBROMYALGIA (FDA-approved). CHRONIC MUSCULOSKELETAL PAIN (FDA-approved). Major depressive disorder. Generalized anxiety disorder.",
        con: "Concurrent use with MAOIs (or within 14 days). Uncontrolled narrow-angle glaucoma. Severe renal impairment (CrCl < 30). Severe hepatic impairment. Hypersensitivity.",
        aec: "Nausea (common, often improves with time), dry mouth, constipation. Drowsiness, fatigue, dizziness. Decreased appetite. Sweating. Insomnia.",
        aes: "SEROTONIN SYNDROME (with other serotonergic drugs) — agitation, hyperthermia, tachycardia, muscle rigidity. Suicidal ideation (FDA black box warning for all antidepressants in young adults). Hepatotoxicity (avoid in liver disease). Hypertension. Severe skin reactions (rare). Withdrawal syndrome if stopped abruptly (dizziness, nausea, headache, paresthesias).",
        inter: [
            {d: "MAOIs", m: "CONTRAINDICATED — risk of severe serotonin syndrome. Allow 14-day washout.", s: "high"},
            {d: "Other Serotonergic Drugs (SSRIs, Tramadol, Triptans)", m: "Increased risk of serotonin syndrome.", s: "high"},
            {d: "CYP1A2/CYP2D6 Inhibitors (Fluvoxamine, Quinidine)", m: "Increased duloxetine levels → enhanced effects and toxicity.", s: "med"},
            {d: "Anticoagulants (Warfarin)", m: "SSRIs/SNRIs increase bleeding risk.", s: "med"}
        ],
        dosage: "Diabetic neuropathy: 60mg once daily. Fibromyalgia: Start 30mg daily × 1 week, then 60mg daily. Chronic pain: 30mg daily initially, may increase to 60mg. Maximum 120mg/day (some conditions). Depression/anxiety: 60-120mg daily.",
        admin: "Oral. Take with or without food. Swallow whole — do NOT crush, chew, or open delayed-release capsules. Taper when discontinuing — do not stop abruptly.",
        nurse: "Monitor for serotonin syndrome symptoms (agitation, hyperthermia, tachycardia, tremor, muscle rigidity). Assess suicidal ideation, especially in young adults starting treatment. Monitor blood pressure (SNRIs can increase BP). Do NOT give with MAOIs. Taper gradually when discontinuing to avoid withdrawal syndrome. Helpful for patients with comorbid depression/anxiety and chronic pain. Takes 1-2 weeks to see pain benefit."
    },
    {
        g: "Sumatriptan", b: "Imitrex (injection, nasal, tablet); Onzetra Xsail (nasal); Sumavel (needle-free injection); Treximet (with naproxen)", c: "Serotonin Receptor Agonist (Triptan) / Antimigraine", cat: "pain",
        m: "Selective agonist at serotonin 5-HT1B and 5-HT1D receptors. Causes vasoconstriction of dilated intracranial blood vessels and inhibits release of inflammatory neuropeptides. The prototype TRIPTAN — first-line ABORTIVE treatment for acute migraine attacks.",
        ind: "ACUTE MIGRAINE attacks (abortive treatment — NOT for prevention). Cluster headaches. Most effective when taken early in migraine. Available in multiple formulations for rapid relief.",
        con: "ISCHEMIC HEART DISEASE, coronary artery vasospasm, or uncontrolled hypertension (causes vasoconstriction). History of stroke or TIA. Peripheral vascular disease. Hemiplegic or basilar migraine. Concurrent use with MAOIs or within 2 weeks. Concurrent use with ergotamine derivatives.",
        aec: "Chest pain/pressure/tightness (often NOT cardiac — 'triptan sensations'). Flushing, tingling, warm sensation. Dizziness, vertigo. Throat tightness. Fatigue. Injection site reactions.",
        aes: "CORONARY ARTERY VASOSPASM → angina, myocardial ischemia, MI (rare but serious — avoid in CAD). Stroke. Arrhythmias. Serotonin syndrome (when combined with other serotonergics). Medication overuse headache with frequent use.",
        inter: [
            {d: "Ergotamine derivatives (Ergotamine, DHE)", m: "Additive vasoconstriction — wait 24 hours between use. Potentially serious vasospasm.", s: "high"},
            {d: "MAOIs", m: "MAO-A inhibitors increase sumatriptan levels → enhanced vasoconstriction risk.", s: "high"},
            {d: "Other Triptans", m: "Do not use within 24 hours of another triptan.", s: "high"},
            {d: "SSRIs/SNRIs", m: "Risk of serotonin syndrome (monitor symptoms).", s: "med"}
        ],
        dosage: "Oral: 25-100mg at onset, may repeat after 2 hours (max 200mg/day). Nasal spray: 5-20mg in one nostril, may repeat after 2 hours (max 40mg/day). SC injection: 6mg, may repeat after 1 hour (max 12mg/day).",
        admin: "Oral tablets, nasal spray, SC injection, intranasal powder. Take at first sign of migraine for best effect. SC injection provides fastest relief (10-15 min). Nasal spray: 15-20 min onset. Oral: 30-60 min onset. Do NOT use for migraine prevention — only acute attacks.",
        nurse: "Assess for cardiovascular risk factors before prescribing — contraindicated in CAD. Educate that chest pain/tightness is often NOT cardiac (triptan sensation) but should be evaluated if severe or persistent. First dose may be given in clinic to monitor for cardiac effects in at-risk patients. Administer early in migraine for best results. Do not exceed recommended frequency — can cause medication overuse headache. Avoid in patients taking ergotamines or MAOIs."
    },
    {
        g: "Cyclobenzaprine", b: "Flexeril, Amrix (ER)", c: "Skeletal Muscle Relaxant (Centrally Acting)", cat: "pain",
        m: "Acts primarily within the CNS at the brainstem level to reduce skeletal muscle spasm. Structurally related to tricyclic antidepressants (TCAs) and shares their anticholinergic properties. Does NOT act directly on skeletal muscle. Reduces muscle hyperactivity associated with acute painful musculoskeletal conditions.",
        ind: "ACUTE MUSCULOSKELETAL PAIN with muscle spasm — adjunct to rest, physical therapy, and other measures. Short-term use only (2-3 weeks). NOT effective for spasticity from CNS disorders (use baclofen instead).",
        con: "Concurrent use with MAOIs or within 14 days. Hyperthyroidism. Cardiac conduction disturbances (arrhythmias, heart block, CHF). Acute recovery phase of MI.",
        aec: "DROWSINESS/SEDATION (very common). Dry mouth. Dizziness. Fatigue. Constipation. Blurred vision (anticholinergic effects).",
        aes: "Anticholinergic toxicity (confusion, urinary retention, tachycardia — especially in elderly). Serotonin syndrome (with serotonergics). Cardiac arrhythmias. Seizures (overdose).",
        inter: [
            {d: "MAOIs", m: "Risk of hyperpyretic crisis, seizures, and death — CONTRAINDICATED.", s: "high"},
            {d: "CNS Depressants (Alcohol, Opioids, Benzodiazepines)", m: "Additive sedation — significant impairment.", s: "high"},
            {d: "Serotonergic Drugs (SSRIs, SNRIs, Tramadol)", m: "Risk of serotonin syndrome.", s: "med"},
            {d: "Anticholinergic Drugs", m: "Additive anticholinergic effects.", s: "med"}
        ],
        dosage: "Immediate-release: 5-10mg TID. Maximum 30mg/day. Extended-release (Amrix): 15-30mg once daily. Use lowest effective dose. Limit to 2-3 weeks.",
        admin: "Oral. Usually given TID for immediate-release. Best taken at bedtime if sedation is problematic. Short-term use only — not intended for chronic therapy.",
        nurse: "⚠️ CAUSES SIGNIFICANT SEDATION — counsel patient about drowsiness, avoid driving until effects known. Short-term use only (2-3 weeks). Avoid in elderly due to anticholinergic effects and sedation (Beers Criteria). Monitor for anticholinergic symptoms (dry mouth, constipation, urinary retention, confusion). Not effective for spasticity — only for acute muscle spasm. Do NOT use with MAOIs."
    },
    {
        g: "Baclofen", b: "Lioresal, Gablofen (intrathecal)", c: "Skeletal Muscle Relaxant (GABA-B Agonist)", cat: "pain",
        m: "Agonist at GABA-B receptors in the spinal cord. Inhibits release of excitatory neurotransmitters and reduces transmission of impulses from muscle spindles. Reduces spasticity by acting at the spinal cord level. Can also be given intrathecally for severe spasticity.",
        ind: "SPASTICITY from CNS disorders — multiple sclerosis, spinal cord injury, cerebral palsy, stroke. NOT effective for acute musculoskeletal spasm (use cyclobenzaprine). Intrathecal baclofen for severe refractory spasticity.",
        con: "Hypersensitivity. Abrupt withdrawal (risk of severe withdrawal syndrome). Use with caution in renal impairment, seizure disorders, psychiatric disorders.",
        aec: "Drowsiness, sedation, dizziness. Weakness. Nausea. Headache. Hypotonia (excessive muscle relaxation).",
        aes: "WITHDRAWAL SYNDROME if stopped abruptly — can be life-threatening: hyperthermia, altered mental status, seizures, rhabdomyolysis, multiple organ failure. Respiratory depression (high doses or intrathecal). CNS depression. Hallucinations, confusion. Urinary retention.",
        inter: [
            {d: "CNS Depressants (Alcohol, Opioids, Benzodiazepines)", m: "Additive sedation and respiratory depression.", s: "high"},
            {d: "Antihypertensives", m: "Additive hypotension.", s: "med"},
            {d: "TCAs", m: "Additive sedation and muscle weakness.", s: "med"}
        ],
        dosage: "Oral: Start 5mg TID, increase by 5mg/dose every 3 days. Usual dose: 40-80mg/day in divided doses. Maximum 80mg/day. Intrathecal (pump): Initial test dose 50mcg, maintenance varies widely.",
        admin: "Oral or intrathecal pump. Oral given in 3-4 divided doses. NEVER stop abruptly — must taper slowly over 1-2 weeks minimum. Intrathecal pump requires surgical implantation and specialized management.",
        nurse: "⚠️ NEVER DISCONTINUE ABRUPTLY — baclofen withdrawal is life-threatening (seizures, hyperthermia, rhabdomyolysis). Taper slowly over 1-2 weeks or longer. For intrathecal pumps: monitor for pump malfunction, infection, catheter issues — abrupt loss of intrathecal baclofen is a medical emergency. Monitor muscle tone — goal is reduction of spasticity without eliminating all tone (some tone is needed for function). Effective for CNS-related spasticity (MS, spinal cord injury, CP) but NOT for acute muscle spasm."
    }
];
