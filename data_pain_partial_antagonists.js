/* Block 1c — Pain: Partial Agonists + Antagonists (5 drugs)
   Source: pain_lecture_drjames.txt (Slides 56-65) */

const data_pain_partial_antagonists = [
    {
        g: "Buprenorphine", b: "Buprenex (injection); Subutex (sublingual); Suboxone (with naloxone); Butrans (patch)", c: "Opioid Partial Agonist (Mu-receptor)", cat: "pain",
        m: "PARTIAL AGONIST at mu-opioid receptors — produces analgesia but with a CEILING EFFECT (increasing dose beyond a point does not increase analgesia or respiratory depression). High receptor binding affinity means it can displace full agonists from receptors. Also used for opioid use disorder (OUD) treatment.",
        ind: "Short-term pain relief (up to 3 weeks) of moderate to severe pain in OPIOID-NAÏVE patients. Opioid use disorder (OUD) — maintenance treatment to reduce cravings, prevent withdrawal, and block euphoric effects of other opioids. Potency similar to morphine.",
        con: "Severe respiratory depression. Patients actively using full opioid agonists (can precipitate withdrawal). Severe hepatic impairment. Hypersensitivity. QT prolongation (Suboxone).",
        aec: "Clamminess, dizziness, sedation, sweating. Nausea, vomiting, dry mouth. Constipation. Headache.",
        aes: "Respiratory depression (ceiling effect limits this risk). Precipitated WITHDRAWAL (abstinence syndrome) in patients dependent on full opioid agonists. Mental status changes — confusion, disorientation, hallucinations. Hepatotoxicity (rare). QT prolongation.",
        inter: [
            {d: "Full Opioid Agonists (Morphine, Oxycodone)", m: "Buprenorphine can DISPLACE full agonists from receptors → precipitates acute withdrawal in opioid-dependent patients.", s: "high"},
            {d: "CNS Depressants (Alcohol, Benzodiazepines)", m: "Additive respiratory depression and sedation.", s: "high"},
            {d: "CYP3A4 Inhibitors (Ketoconazole, Ritonavir)", m: "Increased buprenorphine levels → enhanced effects.", s: "med"}
        ],
        dosage: "Pain (injection): 0.3mg IM/IV every 6 hours PRN. Transdermal patch (Butrans): 5-20mcg/hr every 7 days. OUD (sublingual): Subutex 2-8mg SL daily initially, maintenance 8-24mg daily. Suboxone: buprenorphine/naloxone 4/1 to 24/6mg SL daily.",
        admin: "IM, IV, sublingual, transdermal. Sublingual tablets must dissolve under tongue — takes 5-10 minutes. Suboxone film placed under tongue or inside cheek. Transdermal patch applied every 7 days. For OUD: must wait until patient is in mild withdrawal before initiating (to avoid precipitated withdrawal).",
        nurse: "For OUD treatment: patient must be in early withdrawal before starting (12-24h after last opioid use) — initiating too early precipitates severe withdrawal. Monitor for abstinence syndrome if patient has been using full agonists. Ceiling effect provides safety margin for respiratory depression. Partial agonist activity means it can both treat AND precipitate withdrawal depending on patient's opioid status. Monitor liver function periodically."
    },
    {
        g: "Butorphanol", b: "Stadol (injection); Stadol NS (nasal spray)", c: "Opioid Partial Agonist-Antagonist (Kappa agonist, Mu antagonist)", cat: "pain",
        m: "Mixed agonist-antagonist: AGONIST at kappa-opioid receptors (produces analgesia) and ANTAGONIST/partial agonist at mu-receptors. Has ceiling effect for analgesia and respiratory depression. Can precipitate withdrawal in patients dependent on mu-agonist opioids.",
        ind: "Moderate to severe pain — short-term use (up to 3 weeks) in opioid-naïve patients. Migraine headaches (nasal spray is often used for acute migraine). Labor pain. Preoperative/postoperative analgesia. Potency similar to morphine.",
        con: "Patients physically dependent on full mu-opioid agonists (will precipitate withdrawal). Severe respiratory depression. Avoid in patients with history of substance use disorder (still has abuse potential).",
        aec: "Sedation, dizziness, nausea, vomiting, sweating, clamminess. Headache, confusion. Nasal congestion (nasal spray).",
        aes: "Respiratory depression (ceiling effect limits severity). ABSTINENCE SYNDROME (precipitated withdrawal) in opioid-dependent patients. Hallucinations, psychotomimetic effects (more common with kappa agonists). Hypotension.",
        inter: [
            {d: "Full Opioid Agonists (Morphine, Fentanyl)", m: "Butorphanol's mu-antagonist activity can precipitate withdrawal and reduce effectiveness of full agonists.", s: "high"},
            {d: "CNS Depressants", m: "Additive sedation and respiratory depression.", s: "high"},
            {d: "MAOIs", m: "Unpredictable potentiation.", s: "high"}
        ],
        dosage: "IM: 1-4mg every 3-4 hours PRN. IV: 0.5-2mg every 3-4 hours PRN. Nasal spray: 1 spray (1mg) in one nostril; may repeat in 60-90 minutes. Maximum 4 sprays/day.",
        admin: "IM, IV, nasal spray. Nasal spray is convenient for migraine treatment outside hospital. Rotate nostrils with nasal spray. IV push over 3-5 minutes.",
        nurse: "⚠️ Can cause ABSTINENCE SYNDROME in opioid-dependent patients — assess opioid use history before administration. Has abuse potential despite partial agonist classification (Schedule IV). Monitor for psychotomimetic effects (hallucinations, dysphoria) — more common with kappa agonists. Useful alternative when mu-agonist abuse is a concern. Nasal spray useful for migraine patients who need rapid relief."
    },
    {
        g: "Nalbuphine", b: "Nubain", c: "Opioid Partial Agonist-Antagonist (Kappa agonist, Mu antagonist)", cat: "pain",
        m: "Mixed agonist-antagonist: AGONIST at kappa-opioid receptors and ANTAGONIST at mu-receptors. Has ceiling effect for both analgesia and respiratory depression. Unique among this class: NOT a controlled substance due to minimal physical dependence liability.",
        ind: "Moderate to severe pain — often used for OBSTETRIC patients (labor analgesia) due to ceiling effect on respiratory depression (safer for mother and fetus). Postoperative pain. Preoperative sedation.",
        con: "Patients physically dependent on mu-opioid agonists (precipitates withdrawal). Severe respiratory depression. Head injury with elevated ICP.",
        aec: "Sedation, dizziness, sweating, clamminess. Nausea, vomiting, dry mouth. Headache.",
        aes: "Respiratory depression (limited by ceiling effect — key safety feature for obstetrics). Precipitated WITHDRAWAL in opioid-dependent patients. Psychotomimetic effects (less common than butorphanol).",
        inter: [
            {d: "Full Opioid Agonists (Morphine)", m: "Mu-antagonist activity precipitates withdrawal in dependent patients and reduces full agonist effectiveness.", s: "high"},
            {d: "CNS Depressants", m: "Additive sedation.", s: "med"},
            {d: "MAOIs", m: "Unpredictable interactions.", s: "high"}
        ],
        dosage: "IM/SC/IV: 10mg every 3-6 hours PRN. Maximum single dose: 20mg. Maximum daily dose: 160mg.",
        admin: "IM, SC, IV. IV push slowly. Can be given via PCA pump in some settings.",
        nurse: "Preferred opioid for OBSTETRIC analgesia due to ceiling effect on respiratory depression — provides margin of safety for both mother and newborn. NOT a controlled substance (minimal dependence liability) — unique advantage. Monitor for withdrawal if patient has any opioid dependence history. Assess pain response — ceiling effect means higher doses won't provide additional analgesia."
    },
    {
        g: "Naloxone", b: "Narcan (injection, nasal spray); Evzio (auto-injector)", c: "Opioid Antagonist (Pure)", cat: "pain",
        m: "PURE COMPETITIVE ANTAGONIST at all opioid receptors (mu, kappa, delta). Displaces opioid agonists from receptors and REVERSES opioid effects including respiratory depression, sedation, and analgesia. Has higher receptor affinity than most opioids. NO analgesic or agonist activity — used only for REVERSAL.",
        ind: "REVERSAL of opioid overdose — first-line treatment for opioid-induced respiratory depression. Diagnosis of suspected opioid overdose. Postoperative reversal of opioid effects. Available to first responders and for take-home naloxone programs.",
        con: "Known hypersensitivity. Use with caution in opioid-dependent patients (will precipitate withdrawal). Cardiovascular disease (reversal can cause catecholamine surge).",
        aec: "Nausea, vomiting. Sweating. Tachycardia, hypertension (reversal-related stress response).",
        aes: "PRECIPITATED WITHDRAWAL in opioid-dependent patients — can be severe: nausea, vomiting, diarrhea, abdominal cramps, chills, myalgia, joint pain, piloerection, yawning, rhinorrhea, lacrimation, anxiety, irritability. Pulmonary edema (rare). Seizures (rare). Cardiac arrhythmias from catecholamine surge.",
        inter: [
            {d: "Opioid Agonists (Morphine, Heroin, Fentanyl)", m: "Naloxone competitively displaces opioids from receptors → reverses ALL opioid effects including analgesia and respiratory depression.", s: "high"},
            {d: "Partial Agonists (Buprenorphine)", m: "High-affinity partial agonists may be harder to displace — higher naloxone doses may be needed.", s: "med"}
        ],
        dosage: "IV/IM/SC: 0.4-2mg every 2-3 minutes until response (max 10mg). Intranasal (Narcan spray): 4mg in one nostril, may repeat every 2-3 minutes. Auto-injector (Evzio): 0.4mg or 2mg IM/SC. Note: Duration is shorter than most opioids — repeat dosing often needed.",
        admin: "IV (fastest onset), IM, SC, intranasal. IV onset: 1-2 minutes. IM/SC onset: 2-5 minutes. Intranasal onset: 3-5 minutes. Duration: 30-90 minutes — SHORTER than most opioids, so re-sedation/re-narcotization can occur. Repeat doses as needed.",
        nurse: "⚠️ NALOXONE DURATION IS SHORTER THAN MOST OPIOIDS — patient may re-sedate when naloxone wears off. Continue monitoring for at least 2 hours after last dose; longer for long-acting opioids (methadone, fentanyl patches). Titrate dose to restore adequate respiration while minimizing withdrawal. In post-op patients, complete reversal eliminates analgesia — use small incremental doses. Have resuscitation equipment ready. Educate patients/families on take-home naloxone for opioid overdose prevention."
    },
    {
        g: "Naltrexone", b: "Revia, Depade (oral); Vivitrol (IM extended-release)", c: "Opioid Antagonist (Pure)", cat: "pain",
        m: "PURE COMPETITIVE ANTAGONIST at opioid receptors. Similar mechanism to naloxone but with ORAL bioavailability and MUCH LONGER duration of action (24-72 hours oral, 30 days IM). Blocks euphoric effects of opioids. Also has effects on endogenous opioid system related to alcohol reward pathways.",
        ind: "MAINTENANCE of opioid-free state in formerly opioid-dependent patients (adjunct to psychosocial treatment). Adjunct treatment for ALCOHOL USE DISORDER — reduces craving and drinking. NOT for acute opioid reversal (use naloxone). Note: Methylnaltrexone (Relistor) is a peripherally-acting variant used for opioid-induced CONSTIPATION.",
        con: "Current opioid use or acute opioid withdrawal (will precipitate severe withdrawal). Acute hepatitis or liver failure. Positive urine drug screen for opioids. Hypersensitivity.",
        aec: "Nausea (common, especially initially), headache, dizziness, fatigue, anxiety, insomnia. Injection site reactions (Vivitrol).",
        aes: "HEPATOTOXICITY — dose-related; monitor liver function. Precipitated WITHDRAWAL if opioids are in system. Depression, suicidal ideation (monitor mood). Injection site reactions with Vivitrol (induration, pain, nodules).",
        inter: [
            {d: "Opioid Agonists (All)", m: "Naltrexone blocks opioid effects — patients will NOT get analgesia or euphoria from opioids while on naltrexone. Attempting to override blockade with high opioid doses is DANGEROUS.", s: "high"},
            {d: "Opioid-containing medications (cough syrups, antidiarrheals)", m: "Effects will be blocked; patient may not get expected therapeutic effect.", s: "med"},
            {d: "Hepatotoxic drugs", m: "Additive liver toxicity risk.", s: "med"}
        ],
        dosage: "Oral (Revia): 50mg daily or 100mg every other day. IM (Vivitrol): 380mg deep gluteal IM every 4 weeks. Must be opioid-free for 7-10 days before starting (verified by urine screen and/or naloxone challenge).",
        admin: "Oral daily or IM monthly. IM injection is deep gluteal only — do not inject IV or SC. Patient MUST be opioid-free for 7-10 days before initiation — consider naloxone challenge test to confirm. Supervised administration may improve adherence.",
        nurse: "⚠️ Patient MUST be opioid-free for 7-10 days before starting — initiating in opioid-dependent patient causes severe precipitated withdrawal. Verify with urine drug screen. Monitor liver function (AST/ALT at baseline and periodically). Educate patient: opioids will NOT work for pain relief while on naltrexone — patient must inform all healthcare providers. Warn about overdose risk if patient attempts to override blockade with high opioid doses. For alcohol use disorder: reduces craving but works best with counseling. Vivitrol (monthly injection) improves adherence vs daily oral."
    }
];
