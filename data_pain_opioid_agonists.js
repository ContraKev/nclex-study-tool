/* Block 1b — Pain: Opioid Agonists (9 drugs)
   Source: pain_lecture_drjames.txt (Slides 39-55) */

const data_pain_opioid_agonists = [
    {
        g: "Morphine", b: "MS Contin, Kadian (ER); Roxanol (oral solution)", c: "Opioid Agonist (Mu-receptor)", cat: "pain",
        m: "Binds to mu-opioid receptors in the CNS and peripheral tissues, inhibiting ascending pain pathways and altering perception of and emotional response to pain. Produces analgesia, euphoria, sedation, and respiratory depression. Prototype opioid against which all others are compared.",
        ind: "Severe acute and chronic pain. Post-surgical pain. Cancer pain. Myocardial infarction pain. Used in patient-controlled analgesia (PCA) pumps. Available oral, parenteral, rectal, and epidural.",
        con: "Respiratory insufficiency or depression. Head injuries with elevated intracranial pressure (masks neurological signs). Paralytic ileus. Severe hepatic or renal disease (toxic metabolites accumulate in kidneys). Obesity and obstructive sleep apnea. Myasthenia gravis. Pregnancy (neonatal withdrawal).",
        aec: "Nausea, vomiting, constipation, pruritus (itching), sweating, dizziness, sedation.",
        aes: "RESPIRATORY DEPRESSION — most dangerous effect. Hypotension, bradycardia. CNS depression (disorientation, dysphoria, euphoria). Urinary retention. Biliary tract spasm (avoid in biliary colic). OPIOID TOXICITY TRIAD: respiratory depression + coma + pinpoint pupils (miosis).",
        inter: [
            {d: "CNS Depressants (Alcohol, Benzodiazepines)", m: "Cumulative sedation and respiratory depression — potentially fatal.", s: "high"},
            {d: "Tricyclic Antidepressants", m: "Additive CNS depression and sedation.", s: "med"},
            {d: "Antihistamines", m: "Additive sedation and CNS depression.", s: "med"},
            {d: "MAOIs", m: "Severe, unpredictable potentiation of opioid effects.", s: "high"}
        ],
        dosage: "Oral IR: 15-30mg every 4 hours PRN. Oral ER (MS Contin): 15-200mg every 8-12 hours. IV: 2-10mg every 2-4 hours (titrate). PCA: 1-2mg demand dose with lockout interval. Rectal: 10-20mg every 4 hours.",
        admin: "Oral immediate-release and extended-release (ER) formulations available. ER tablets (MS Contin, Kadian) must NOT be crushed, chewed, or dissolved — risk of fatal dose dumping. IV push over 4-5 minutes. Rectal and epidural routes also available.",
        nurse: "MONITOR RESPIRATORY RATE — hold medication if RR < 12/min and notify provider. Assess pain before and after administration (30 min post-IV, 60 min post-PO). Monitor vital signs, O2 saturation, and mental status. Toxic metabolites accumulate in kidneys — consider alternative opioids for renal insufficiency. Keep naloxone (Narcan) readily available. Assess bowel function (prescribe bowel regimen). Evaluate for urinary retention. Safety precautions for fall risk due to sedation/orthostatic hypotension."
    },
    {
        g: "Codeine", b: "Tylenol #3, #4 (with acetaminophen)", c: "Opioid Agonist (Mu-receptor)", cat: "pain",
        m: "Prodrug that is partially converted to morphine by CYP2D6 in the liver. Weak mu-opioid receptor agonist. Also suppresses the cough reflex by direct action on the medullary cough center. The ONLY opioid agonist that has a true 'ceiling effect' — increasing dose beyond a certain point does not produce greater analgesia.",
        ind: "Mild to moderate pain (typically in combination with acetaminophen). Cough suppression (antitussive). Schedule II alone; Schedule III when combined with acetaminophen.",
        con: "Respiratory depression. Known CYP2D6 ultra-rapid metabolizers (risk of fatal respiratory depression, especially in children — FDA black box). Post-tonsillectomy/adenoidectomy in children (contraindicated). Same general opioid contraindications as morphine.",
        aec: "Nausea, vomiting, stomach upset (more GI upset than other opioids), constipation, drowsiness, dizziness, lightheadedness.",
        aes: "Respiratory depression (especially in CYP2D6 ultra-rapid metabolizers). Severe hypotension. Seizures (rare, high doses). Same opioid toxicity triad as morphine at high doses.",
        inter: [
            {d: "CNS Depressants (Alcohol, Benzodiazepines)", m: "Additive sedation and respiratory depression.", s: "high"},
            {d: "CYP2D6 Inhibitors (Fluoxetine, Paroxetine)", m: "Reduce conversion to morphine → decreased analgesic effect.", s: "med"},
            {d: "Acetaminophen (combination products)", m: "Monitor total acetaminophen intake — risk of hepatotoxicity if exceeding 3-4g/day.", s: "high"}
        ],
        dosage: "Adults: 15-60mg PO every 4-6 hours PRN. Maximum 360mg/day. Antitussive: 10-20mg every 4-6 hours. Combination (Tylenol #3): codeine 30mg + acetaminophen 300mg per tablet.",
        admin: "Oral only (tablets, liquid). Often prescribed in combination with acetaminophen. Take with food to reduce GI upset.",
        nurse: "Monitor for respiratory depression. Typically not used as primary analgesic — only opioid with ceiling effect. Track total acetaminophen dose when using combination products (Tylenol #3). Genetic variations in CYP2D6 affect efficacy — poor metabolizers get little pain relief, ultra-rapid metabolizers are at risk for toxicity. Not recommended in children for cough or post-tonsillectomy pain."
    },
    {
        g: "Oxycodone", b: "OxyContin (ER); Percocet (with APAP); Percodan (with ASA)", c: "Opioid Agonist (Mu-receptor)", cat: "pain",
        m: "Semi-synthetic opioid that binds to mu-opioid receptors in the CNS, producing analgesia similar to morphine. Also has some kappa-receptor agonist activity. Approximately 1.5× more potent than oral morphine.",
        ind: "Moderate to severe pain. Available as immediate-release (IR) and extended-release (ER) formulations. Often combined with acetaminophen (Percocet) or aspirin (Percodan) for enhanced analgesia.",
        con: "Same as morphine: respiratory depression, head injuries/elevated ICP, paralytic ileus, severe asthma/COPD without monitoring. GI obstruction (especially ER formulation). Opioid-naïve patients should NOT start on ER formulations.",
        aec: "Nausea, vomiting, constipation, drowsiness, dizziness, pruritus, dry mouth.",
        aes: "Respiratory depression. Hypotension. Opioid toxicity triad. Severe constipation/bowel obstruction. HIGH ABUSE POTENTIAL — OxyContin abuse was a major driver of the opioid epidemic.",
        inter: [
            {d: "CNS Depressants (Alcohol, Benzodiazepines)", m: "Potentially fatal respiratory depression and sedation.", s: "high"},
            {d: "CYP3A4 Inhibitors (Ketoconazole, Erythromycin)", m: "Increased oxycodone levels → enhanced effects and toxicity.", s: "high"},
            {d: "Acetaminophen (Percocet)", m: "Monitor combined acetaminophen intake — hepatotoxicity risk above 3-4g/day.", s: "high"}
        ],
        dosage: "IR: 5-15mg PO every 4-6 hours PRN. ER (OxyContin): 10-80mg every 12 hours (opioid-tolerant patients only for higher doses). Percocet: oxycodone 5mg/acetaminophen 325mg, 1-2 tabs every 6 hours.",
        admin: "Oral. ER tablets must NOT be crushed, broken, or chewed — risk of rapid release and fatal overdose. IR available as tablets, capsules, and oral solution. Combination products (Percocet) — track total acetaminophen dose.",
        nurse: "Monitor respiratory rate, O2 saturation, pain level, and sedation. ER formulations are for opioid-TOLERANT patients only — starting opioid-naïve patients on ER can be fatal. When using Percocet, track ALL sources of acetaminophen. Assess for signs of misuse/diversion. Educate patient on safe storage and disposal. Keep naloxone available."
    },
    {
        g: "Hydrocodone", b: "Vicodin, Norco (with APAP); Zohydro ER", c: "Opioid Agonist (Mu-receptor)", cat: "pain",
        m: "Semi-synthetic opioid that binds to mu-opioid receptors in the CNS. Similar mechanism to morphine but relatively weaker than oxycodone. Also has antitussive (cough suppressant) properties.",
        ind: "Moderate to moderately severe pain. Most commonly prescribed as a combination product with acetaminophen (Vicodin, Norco). Also used as antitussive in some formulations. Most frequently prescribed opioid in the United States.",
        con: "Same general opioid contraindications: respiratory depression, severe asthma/COPD without monitoring, paralytic ileus, head injury/elevated ICP. Known hypersensitivity.",
        aec: "Nausea, vomiting, constipation, drowsiness, dizziness, lightheadedness.",
        aes: "Respiratory depression. Hypotension. Opioid toxicity triad. HEPATOTOXICITY from the acetaminophen component in combination products (Vicodin/Norco) — major concern with overuse.",
        inter: [
            {d: "CNS Depressants (Alcohol, Benzodiazepines)", m: "Additive CNS and respiratory depression.", s: "high"},
            {d: "CYP3A4 Inhibitors", m: "Increased hydrocodone plasma levels → toxicity risk.", s: "med"},
            {d: "Acetaminophen (combination products)", m: "Track total APAP intake across ALL medications — max 3-4g/day.", s: "high"}
        ],
        dosage: "Norco: hydrocodone 5-10mg/acetaminophen 325mg, 1-2 tabs every 4-6 hours PRN. Maximum based on acetaminophen component (do not exceed 3-4g/day APAP). ER (Zohydro): 10mg every 12 hours, titrate.",
        admin: "Oral. Most commonly prescribed in combination with acetaminophen. ER formulations must NOT be crushed or chewed. Take with food to reduce GI upset.",
        nurse: "Weaker than oxycodone — appropriate for moderate pain. Critical to monitor total acetaminophen intake when using Norco/Vicodin — patients often unaware of APAP content. Educate: do NOT take additional Tylenol with Norco. Monitor respiratory status, pain assessment, bowel function. Assess for misuse — most commonly prescribed opioid and frequently abused."
    },
    {
        g: "Hydromorphone", b: "Dilaudid", c: "Opioid Agonist (Mu-receptor)", cat: "pain",
        m: "Semi-synthetic opioid derived from morphine. Binds to mu-opioid receptors with high affinity. Approximately 7 TIMES MORE POTENT than morphine — a critical safety distinction. Produces potent analgesia, sedation, and respiratory depression.",
        ind: "Moderate to severe pain in opioid-tolerant patients. Post-surgical pain. Cancer pain. When morphine is not tolerated or is ineffective.",
        con: "Same as morphine. Opioid-naïve patients at HIGH risk due to potency. Respiratory depression. Severe asthma without monitoring. Head injury/elevated ICP. Paralytic ileus.",
        aec: "Nausea, vomiting, constipation, sedation, dizziness, pruritus, sweating.",
        aes: "RESPIRATORY DEPRESSION (amplified by high potency). Severe hypotension. Opioid toxicity triad. CNS depression. HIGH-ALERT MEDICATION — frequently involved in fatal medication errors.",
        inter: [
            {d: "CNS Depressants (Alcohol, Benzodiazepines)", m: "Profound respiratory depression and sedation — potentially fatal.", s: "high"},
            {d: "Other Opioids", m: "Additive effects — extreme caution with equianalgesic dose conversion.", s: "high"},
            {d: "MAOIs", m: "Unpredictable potentiation of opioid effects.", s: "high"}
        ],
        dosage: "Oral: 2-4mg every 4-6 hours PRN. IV: 0.2-1mg every 2-3 hours (note: these LOW numbers reflect HIGH potency). IM/SC: 1-2mg every 4-6 hours.",
        admin: "Oral, IV, IM, SC, rectal. IV push slowly over 2-3 minutes. Note that doses are MUCH SMALLER than morphine because of 7× potency.",
        nurse: "⚠️ HIGH-ALERT MEDICATION: Nurses have mistaken hydromorphone for morphine — the 7× potency difference makes this error FATAL. Doses of 0.2-1mg IV may seem 'small' but are equipotent to 1.5-7mg morphine. Always verify drug name AND dose independently. Use tall-man lettering: HYDROmorphone vs. morphine. Monitor respiratory rate strictly — hold if < 12/min. Requires independent double-check at many institutions."
    },
    {
        g: "Fentanyl", b: "Duragesic (patch); Actiq (lozenge); Fentora (buccal); Sublimaze (injection)", c: "Opioid Agonist (Mu-receptor)", cat: "pain",
        m: "Synthetic opioid that binds to mu-opioid receptors with very high affinity. Approximately 50-100× MORE POTENT than morphine. Highly lipophilic — crosses blood-brain barrier rapidly. Short duration of action when given IV; prolonged effect via transdermal patch due to slow absorption from skin depot.",
        ind: "Severe pain (acute and chronic). Transdermal patch (Duragesic) for CHRONIC pain in opioid-TOLERANT patients ONLY. Parenteral for surgical/procedural analgesia and severe acute pain. Buccal/sublingual for breakthrough cancer pain. General anesthesia adjunct.",
        con: "Opioid-naïve patients must NOT use transdermal patches (fatal respiratory depression). Acute or intermittent pain (patch is for chronic pain only). Same general opioid contraindications. Avoid exposing patch to heat sources (heating pads, hot tubs) — accelerates absorption.",
        aec: "Nausea, vomiting, constipation, drowsiness, dizziness, application site reactions (patch).",
        aes: "RESPIRATORY DEPRESSION — primary lethal risk given extreme potency. Profound sedation. Bradycardia, hypotension. Chest wall rigidity ('wooden chest syndrome' with rapid IV push). Opioid toxicity triad.",
        inter: [
            {d: "CNS Depressants (Alcohol, Benzodiazepines, Diazepam)", m: "Synergistic respiratory depression — major cause of overdose deaths.", s: "high"},
            {d: "CYP3A4 Inhibitors (Ketoconazole, Ritonavir, Grapefruit)", m: "Increased fentanyl levels → fatal respiratory depression.", s: "high"},
            {d: "MAOIs", m: "Severe, unpredictable potentiation.", s: "high"},
            {d: "Serotonergic drugs (SSRIs, SNRIs)", m: "Risk of serotonin syndrome.", s: "med"}
        ],
        dosage: "IV: 25-100mcg (NOTE: micrograms, not milligrams). Transdermal patch: 12-100mcg/hr, applied every 72 hours. Buccal (Actiq): 200-1600mcg per lozenge for breakthrough cancer pain.",
        admin: "IV: push slowly (rapid push → chest wall rigidity). Transdermal: apply to flat, non-irritated, non-hairy skin; rotate sites; takes 6-12 hours to reach steady state — DO NOT discontinue current oral opioid during this period. Patch is applied every 72 hours. Buccal lozenges dissolved against cheek mucosa.",
        nurse: "Transdermal patch: for opioid-TOLERANT patients ONLY (using ≥60mg oral morphine equivalents/day for ≥1 week). Takes 6-12 hours to reach steady state — continue current pain meds during initiation. Do NOT cut patches. Avoid heat exposure to patch area. Dispose of used patches by folding sticky sides together and flushing. Dosed in MICROGRAMS (mcg), not milligrams. Patches provide up to 72 hours of pain relief. Keep naloxone available."
    },
    {
        g: "Methadone", b: "Dolophine, Methadose", c: "Opioid Agonist (Mu-receptor) / NMDA Antagonist", cat: "pain",
        m: "Synthetic opioid that binds to mu-opioid receptors AND blocks NMDA receptors (which may contribute to its efficacy in neuropathic and chronic pain). Has a uniquely LONG and VARIABLE half-life (8-59 hours), allowing for once-daily or twice-daily dosing. Accumulates in tissues over days.",
        ind: "Drug of choice for DETOXIFICATION and MAINTENANCE treatment of opioid use disorder (OUD). Chronic pain and cancer-related pain. Alternative to morphine when renal insufficiency is present (metabolized by liver, not kidneys).",
        con: "QT prolongation or history of cardiac dysrhythmias. Concurrent use of QT-prolonging drugs. Respiratory depression. Same general opioid contraindications. Requires careful dose titration due to tissue accumulation.",
        aec: "Nausea, vomiting, constipation, sweating, drowsiness, dizziness, dry mouth.",
        aes: "CARDIAC DYSRHYTHMIA — QT prolongation → torsades de pointes (potentially fatal). Respiratory depression (may be DELAYED due to long half-life and drug accumulation). Tissue accumulation can lead to delayed toxicity days after dose changes.",
        inter: [
            {d: "QT-Prolonging Drugs (Fluoroquinolones, Antipsychotics, TCAs)", m: "Additive QT prolongation → risk of fatal torsades de pointes.", s: "high"},
            {d: "CNS Depressants (Alcohol, Benzodiazepines)", m: "Additive respiratory depression.", s: "high"},
            {d: "CYP3A4 Inducers (Rifampin, Phenytoin, Carbamazepine)", m: "Decreased methadone levels → potential withdrawal symptoms.", s: "high"},
            {d: "CYP3A4 Inhibitors (Fluconazole, Erythromycin)", m: "Increased methadone levels → delayed toxicity.", s: "med"}
        ],
        dosage: "OUD maintenance: 20-120mg PO daily (titrated). Chronic pain: 2.5-10mg PO every 8-12 hours initially, titrate slowly. Dosing is complex — equianalgesic conversion from other opioids is NOT straightforward.",
        admin: "Oral (tablets, liquid). For OUD, dispensed through regulated methadone clinics (must be witnessed dosing initially). Once-daily or twice-daily dosing due to long half-life. Dose increases should be at least 5-7 days apart due to tissue accumulation.",
        nurse: "MONITOR ECG — obtain baseline and periodic ECGs for QT prolongation. Drug accumulates in tissues; toxicity may appear DAYS after dose changes — do not increase dose too quickly. Eliminated by liver (not kidneys) — safe alternative in renal insufficiency. Long half-life allows qd or q12h dosing. Educate about risk of cardiac arrhythmia. For OUD: regulated dispensing through licensed clinics. Keep naloxone available — note that methadone's effects may outlast naloxone (repeated doses of naloxone may be needed)."
    },
    {
        g: "Meperidine", b: "Demerol", c: "Opioid Agonist (Mu-receptor)", cat: "pain",
        m: "Synthetic opioid that binds to mu-opioid receptors. Produces analgesia similar to morphine but with a shorter duration. Its toxic metabolite, normeperidine, accumulates and has a long half-life (15-30 hours). Normeperidine is a CNS excitant that can cause SEIZURES.",
        ind: "USE IS NOW DISFAVORED and restricted at most institutions due to seizure risk from normeperidine accumulation. May still be used short-term post-anesthesia to treat/prevent SHIVERING (rigors). NOT recommended for pain management when safer alternatives exist.",
        con: "Renal impairment (normeperidine accumulates). Seizure disorders. Use with MAOIs (fatal interaction — serotonin syndrome and hyperpyrexia). Repeated dosing beyond 48 hours. Elderly patients (increased normeperidine accumulation).",
        aec: "Nausea, vomiting, constipation, dizziness, sedation, sweating.",
        aes: "SEIZURES from normeperidine accumulation — the primary reason this drug is disfavored. CNS excitation (tremors, myoclonus, agitation). Serotonin syndrome (with MAOIs/SSRIs). Respiratory depression. Standard opioid toxicity.",
        inter: [
            {d: "MAOIs", m: "CONTRAINDICATED — fatal combination causing serotonin syndrome, hyperpyrexia, seizures, cardiovascular collapse.", s: "high"},
            {d: "SSRIs/SNRIs", m: "Increased risk of serotonin syndrome.", s: "high"},
            {d: "CNS Depressants", m: "Additive respiratory and CNS depression.", s: "high"}
        ],
        dosage: "50-150mg PO/IM/SC every 3-4 hours PRN. Use should be LIMITED to < 48 hours and < 600mg/24 hours. For post-anesthesia shivering: 25-50mg IV.",
        admin: "Oral, IM, SC, IV. IV should be administered slowly. Short-acting — requires frequent dosing. Most institutions have restricted or removed meperidine from formulary.",
        nurse: "⚠️ DISFAVORED DRUG: Do not use for > 48 hours or > 600mg/24 hours. Normeperidine (toxic metabolite) accumulates with repeated doses and causes SEIZURES — especially dangerous in renal impairment and elderly. If prescribed, question the order and suggest safer alternatives (morphine, hydromorphone). Primary remaining use: post-anesthesia shivering. NEVER give with MAOIs. Monitor for tremors, myoclonus, agitation (early signs of normeperidine toxicity)."
    },
    {
        g: "Tramadol", b: "Ultram, ConZip (ER); Ultracet (with APAP)", c: "Opioid Agonist (Atypical / Dual Mechanism)", cat: "pain",
        m: "DUAL MECHANISM: (1) Weak mu-opioid receptor agonist providing mild opioid analgesia; (2) Inhibits reuptake of norepinephrine and serotonin (similar to SNRIs), providing additional non-opioid pain relief. This unique dual action makes it effective for moderate pain while carrying lower (but not zero) abuse potential compared to traditional opioids.",
        ind: "Moderate to moderately severe pain. Often used as a step between NSAIDs and strong opioids. Ultracet combines tramadol with acetaminophen for enhanced analgesia.",
        con: "Concurrent use of MAOIs (serotonin syndrome risk). Seizure disorders (lowers seizure threshold). Use with other serotonergic drugs requires caution. Severe respiratory depression. Suicidal patients (seizures and serotonin syndrome risk). Children < 12 years.",
        aec: "Nausea, vomiting, constipation, dizziness, drowsiness, headache, dry mouth.",
        aes: "SEIZURES — tramadol lowers seizure threshold, especially at high doses. SEROTONIN SYNDROME (with SSRIs, SNRIs, MAOIs, TCAs) — agitation, hyperthermia, tachycardia, muscle rigidity, clonus. Respiratory depression (less than traditional opioids but still possible). Anaphylactoid reactions (rare).",
        inter: [
            {d: "SSRIs/SNRIs (Fluoxetine, Sertraline, Duloxetine)", m: "Increased risk of SEROTONIN SYNDROME and seizures due to additive serotonergic effects.", s: "high"},
            {d: "MAOIs", m: "CONTRAINDICATED — severe serotonin syndrome risk.", s: "high"},
            {d: "TCAs (Amitriptyline)", m: "Additive seizure risk and serotonin syndrome risk.", s: "high"},
            {d: "Carbamazepine", m: "CYP3A4 induction decreases tramadol efficacy.", s: "med"},
            {d: "Acetaminophen (Ultracet)", m: "Monitor total APAP intake when using combination product.", s: "med"}
        ],
        dosage: "IR: 50-100mg PO every 4-6 hours PRN. Maximum 400mg/day. ER (ConZip): 100-300mg PO once daily. Ultracet: tramadol 37.5mg/APAP 325mg, 2 tabs every 4-6 hours (max 8 tabs/day).",
        admin: "Oral. ER formulations must NOT be crushed or chewed. Take with or without food. Start at lower doses and titrate up.",
        nurse: "Monitor for SEROTONIN SYNDROME (agitation, hyperthermia, tachycardia, diaphoresis, muscle rigidity, clonus) — especially when combined with antidepressants. Assess seizure history — tramadol lowers seizure threshold. Weaker opioid than morphine but still carries abuse potential (Schedule IV). When using Ultracet, track total acetaminophen intake. Teach patient to report muscle twitching, confusion, rapid heartbeat. Not reversed as effectively by naloxone due to dual mechanism."
    }
];
