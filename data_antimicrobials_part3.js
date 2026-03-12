/* Block 2c — Antimicrobials: Metronidazole, Anti-TB, Antifungals, Antivirals (8 drugs)
   Source: antimicrobial_drjames.txt */

const data_antimicrobials_part3 = [
    {
        g: "Metronidazole", b: "Flagyl, MetroGel, Metrocream", c: "Nitroimidazole Antibiotic / Antiprotozoal", cat: "abx",
        m: "Bactericidal against ANAEROBES and antiprotozoal agent. After entering cells, it's reduced to active metabolites that damage DNA. Excellent activity against anaerobic bacteria (Bacteroides, Clostridium) and protozoa (Giardia, Trichomonas, Entamoeba). First-line for C. difficile colitis.",
        ind: "C. DIFFICILE COLITIS (first-line with vancomycin). Bacterial vaginosis. Trichomoniasis. Giardiasis. Amebiasis. Intra-abdominal infections (anaerobic coverage). H. pylori eradication (combination therapy). Dental infections. Pelvic inflammatory disease.",
        con: "First trimester pregnancy (teratogenic). Concurrent alcohol use or within 48 hours (disulfiram reaction). Known hypersensitivity.",
        aec: "GI upset — nausea, vomiting, metallic taste, dry mouth. Headache. DARK URINE (harmless).",
        aes: "DISULFIRAM-LIKE REACTION with alcohol — facial flushing, tachycardia, vomiting, dyspnea. Avoid alcohol during and for 48 hours after treatment. Neurotoxicity — peripheral neuropathy (numbness, tingling), seizures, ataxia. Stevens-Johnson syndrome (rare). Candida superinfection.",
        inter: [
            {d: "ALCOHOL", m: "DISULFIRAM-LIKE REACTION — severe nausea, vomiting, flushing, tachycardia. Avoid during and 48h after.", s: "high"},
            {d: "Warfarin", m: "INCREASED anticoagulant effect → bleeding risk.", s: "high"},
            {d: "Phenytoin", m: "Increased phenytoin levels → toxicity.", s: "high"},
            {d: "Lithium", m: "Increased lithium levels → toxicity.", s: "high"},
            {d: "Disulfiram", m: "Acute psychosis and confusion — do not use together.", s: "high"}
        ],
        dosage: "C. diff: 500mg PO every 8 hours for 10-14 days. Bacterial vaginosis: 500mg PO BID for 7 days or gel intravaginally. Trichomoniasis: 2g PO single dose (treat partners too). Amebiasis: 500-750mg PO TID for 5-10 days.",
        admin: "Oral, IV, topical, vaginal. Take with FOOD to reduce GI upset. Complete full course. ABSOLUTELY NO ALCOHOL during treatment and for 48 hours after.",
        nurse: "⚠️ NO ALCOHOL — disulfiram-like reaction causes severe vomiting, flushing, tachycardia. Includes alcohol in mouthwash, cough syrups, and cooking. Educate about METALLIC TASTE (common, harmless). Dark urine is normal. Monitor for peripheral neuropathy with prolonged use. First-line for C. diff along with oral vancomycin. Treat sexual partners for trichomoniasis."
    },
    {
        g: "Isoniazid", b: "INH, Nydrazid", c: "Antitubercular Agent (First-Line)", cat: "abx",
        m: "Bactericidal against actively dividing Mycobacterium tuberculosis. Inhibits synthesis of mycolic acid, a key component of mycobacterial cell wall. Most potent first-line anti-TB drug. Used for both active TB treatment (combination) and latent TB prophylaxis (monotherapy).",
        ind: "TUBERCULOSIS — active TB (always in combination with rifampin, pyrazinamide, ethambutol = 'RIPE'). Latent TB infection prophylaxis (monotherapy for 6-9 months). Close contacts of active TB patients.",
        con: "Active hepatic disease or history of INH-induced hepatitis. Severe adverse reactions to INH (drug-induced lupus, peripheral neuropathy).",
        aec: "Mild GI upset. Elevated transaminases (usually asymptomatic).",
        aes: "HEPATOTOXICITY — can be fatal. Monitor LFTs. Risk increases with age, alcohol use, and concurrent hepatotoxic drugs. PERIPHERAL NEUROPATHY — numbness, tingling, ataxia (preventable with vitamin B6). Drug-induced lupus. Optic neuritis. Seizures (overdose).",
        inter: [
            {d: "Alcohol", m: "Increased risk of hepatotoxicity.", s: "high"},
            {d: "Phenytoin", m: "Increased phenytoin levels → toxicity.", s: "high"},
            {d: "Carbamazepine", m: "Increased carbamazepine levels.", s: "med"},
            {d: "Disulfiram", m: "Psychotic reactions.", s: "high"},
            {d: "Tyramine-rich foods (aged cheese, wine)", m: "MAO inhibition by INH → hypertensive crisis.", s: "med"}
        ],
        dosage: "Active TB: 5mg/kg/day (max 300mg) PO daily OR 15mg/kg (max 900mg) 2-3×/week (DOT). Latent TB: 300mg PO daily for 6-9 months. Always give with PYRIDOXINE (vitamin B6) 25-50mg daily.",
        admin: "Oral (tablets, syrup). Take on empty stomach for best absorption (can take with food if GI upset). ALWAYS supplement with vitamin B6 (pyridoxine) to prevent peripheral neuropathy.",
        nurse: "⚠️ ALWAYS give with VITAMIN B6 (pyridoxine) to prevent peripheral neuropathy — especially in diabetics, alcoholics, malnourished patients. Monitor LFTs at baseline and monthly — stop if AST > 3× ULN with symptoms. TB treatment requires 6-12 months — adherence critical. NO ALCOHOL during treatment. Educate about reporting symptoms of hepatitis (jaundice, dark urine, RUQ pain, fatigue). RIPE regimen = Rifampin, Isoniazid, Pyrazinamide, Ethambutol."
    },
    {
        g: "Rifampin", b: "Rifadin, Rimactane", c: "Antitubercular Agent (First-Line) / Rifamycin", cat: "abx",
        m: "Bactericidal by inhibiting bacterial DNA-dependent RNA polymerase, blocking RNA transcription. Broad activity including Mycobacterium tuberculosis and many gram-positive bacteria. POTENT CYP450 INDUCER — causes numerous drug interactions by increasing metabolism of other drugs.",
        ind: "TUBERCULOSIS — active TB (combination with INH, pyrazinamide, ethambutol). Latent TB (alternative regimen). Meningococcal/H. influenzae carrier eradication. Leprosy. Staphylococcal infections (combination therapy). Prosthetic device infections.",
        con: "Concurrent use with HIV protease inhibitors (profoundly reduces their levels). Active hepatitis. Hypersensitivity.",
        aec: "GI upset — nausea, vomiting, diarrhea. ORANGE/RED DISCOLORATION of body fluids (urine, tears, sweat, saliva) — harmless but can stain contact lenses and clothing.",
        aes: "HEPATOTOXICITY — monitor LFTs; risk increased with isoniazid and alcohol. Flu-like syndrome with intermittent dosing. Thrombocytopenia. Hemolytic anemia. Acute renal failure (rare, with intermittent dosing).",
        inter: [
            {d: "Oral Contraceptives", m: "REDUCED effectiveness — use backup/alternative contraception.", s: "high"},
            {d: "Warfarin", m: "REDUCED warfarin effect → increased clotting risk. May need doubled dose.", s: "high"},
            {d: "HIV Protease Inhibitors", m: "Dramatically reduced PI levels — often contraindicated.", s: "high"},
            {d: "Methadone, Opioids", m: "Reduced opioid levels → withdrawal symptoms.", s: "high"},
            {d: "Antiepileptics, Digoxin, Cyclosporine, Azole Antifungals", m: "Reduced levels of many drugs due to CYP450 induction.", s: "high"}
        ],
        dosage: "Active TB: 10mg/kg (max 600mg) PO daily OR 600mg 2-3×/week (DOT). Latent TB: 600mg daily for 4 months. Meningitis prophylaxis: 600mg PO BID for 2 days.",
        admin: "Oral (capsules, suspension) or IV. Take on empty stomach 1 hour before or 2 hours after meals. Swallow capsules whole. May cause orange/red tears — remove contact lenses before taking.",
        nurse: "⚠️ Educate about ORANGE BODY FLUIDS — urine, tears, sweat, saliva will turn orange/red. PERMANENT staining of soft contact lenses — wear glasses. MASSIVE drug interactions due to CYP450 induction — review ALL medications. Oral contraceptives DO NOT work — use alternative birth control. Monitor LFTs. NO ALCOHOL. Adherence critical for TB cure and preventing resistance. Watch for hepatitis symptoms."
    },
    {
        g: "Amphotericin B", b: "Fungizone; AmBisome (liposomal); Abelcet (lipid complex)", c: "Polyene Antifungal (Systemic)", cat: "abx",
        m: "Fungicidal by binding to ergosterol in fungal cell membranes, creating pores that cause cell death. Broad-spectrum activity against most pathogenic fungi. Reserved for SERIOUS/LIFE-THREATENING systemic fungal infections due to toxicity. Liposomal formulations reduce nephrotoxicity.",
        ind: "SEVERE SYSTEMIC FUNGAL INFECTIONS — invasive aspergillosis, candidiasis, cryptococcal meningitis, mucormycosis, histoplasmosis, coccidioidomycosis. Used when azoles are ineffective or contraindicated. Intrathecal for fungal meningitis. Empiric therapy in febrile neutropenia.",
        con: "Known hypersensitivity. Severe renal impairment (relative — use lipid formulations). Concurrent nephrotoxic drugs if possible.",
        aec: "INFUSION-RELATED REACTIONS — fever, chills, rigors, headache, nausea, hypotension (1-3 hours after start). Premedicate with diphenhydramine, acetaminophen, ± hydrocortisone.",
        aes: "NEPHROTOXICITY — MOST SERIOUS adverse effect. Monitor BUN/Cr. Electrolyte abnormalities — HYPOKALEMIA, hypomagnesemia (renal wasting). Anemia (bone marrow suppression). Thrombophlebitis. Hepatotoxicity. Cardiac arrhythmias (from hypokalemia).",
        inter: [
            {d: "Nephrotoxic Drugs (Aminoglycosides, Vancomycin, NSAIDs, Cyclosporine)", m: "ADDITIVE nephrotoxicity — avoid combinations if possible.", s: "high"},
            {d: "Corticosteroids", m: "Increased hypokalemia risk.", s: "med"},
            {d: "Digoxin", m: "Hypokalemia from amphotericin potentiates digoxin toxicity.", s: "high"},
            {d: "Diuretics", m: "Additive hypokalemia.", s: "med"}
        ],
        dosage: "Conventional: 0.25-1mg/kg IV daily (test dose first). Liposomal (AmBisome): 3-5mg/kg IV daily. Lipid complex (Abelcet): 5mg/kg IV daily. Infuse over 2-6 hours.",
        admin: "IV infusion ONLY. Test dose (1mg over 20-30 min) often given first to assess tolerance. Infuse SLOWLY over 2-6 hours. Premedicate to reduce infusion reactions (diphenhydramine, acetaminophen, hydrocortisone). Monitor vitals during infusion.",
        nurse: "⚠️ HIGHLY NEPHROTOXIC — monitor renal function (BUN/Cr) closely. Prehydrate with saline bolus before infusion. Monitor POTASSIUM and MAGNESIUM — replace as needed. PREMEDICATE to prevent infusion reactions (fever, chills, rigors). Lipid formulations (AmBisome, Abelcet) are less nephrotoxic — preferred if available. Monitor for arrhythmias from hypokalemia. Reserved for serious infections — not empiric therapy for mild fungal infections."
    },
    {
        g: "Fluconazole", b: "Diflucan", c: "Azole Antifungal (Triazole)", cat: "abx",
        m: "Fungistatic (fungicidal at high doses) by inhibiting fungal cytochrome P450 enzyme (14α-demethylase), blocking ergosterol synthesis in cell membrane. Good CNS penetration. Well-tolerated oral option for many fungal infections. Does NOT cover molds (Aspergillus, Mucor).",
        ind: "CANDIDIASIS — oropharyngeal, esophageal, vaginal, systemic candidiasis. Cryptococcal meningitis (maintenance after amphotericin induction). Prophylaxis in immunocompromised patients. Coccidioidomycosis. Tinea infections (dermatophytes).",
        con: "Concurrent use with QT-prolonging drugs. Pregnancy (teratogenic at high doses). Known hypersensitivity to azoles.",
        aec: "GI upset — nausea, vomiting, diarrhea, abdominal pain. Headache. Rash.",
        aes: "HEPATOTOXICITY — monitor LFTs. QT PROLONGATION → torsades de pointes. Stevens-Johnson syndrome (rare). Alopecia (high doses, prolonged use).",
        inter: [
            {d: "Warfarin", m: "INCREASED warfarin effect → bleeding (CYP2C9 inhibition).", s: "high"},
            {d: "Phenytoin", m: "Increased phenytoin levels.", s: "high"},
            {d: "Cyclosporine, Tacrolimus", m: "Increased immunosuppressant levels → toxicity.", s: "high"},
            {d: "Statins", m: "Increased statin levels → rhabdomyolysis risk.", s: "high"},
            {d: "QT-Prolonging Drugs", m: "Additive QT prolongation.", s: "high"},
            {d: "Sulfonylureas", m: "Increased hypoglycemia risk.", s: "med"}
        ],
        dosage: "Oropharyngeal candidiasis: 200mg day 1, then 100mg daily for 7-14 days. Vaginal candidiasis: 150mg PO single dose. Esophageal: 200-400mg daily. Systemic candidiasis: 400-800mg daily. Cryptococcal meningitis maintenance: 200mg daily.",
        admin: "Oral (tablets, suspension) or IV. Excellent oral bioavailability. Take with or without food. Single-dose vaginal candidiasis treatment is convenient.",
        nurse: "Generally well-tolerated compared to amphotericin. Monitor LFTs with prolonged use. CYP450 inhibitor — check for drug interactions (warfarin, phenytoin, statins). Does NOT cover Aspergillus or Mucor — amphotericin needed for mold infections. Single 150mg dose for vaginal yeast is very convenient. Monitor for QT prolongation with high doses or concurrent QT drugs."
    },
    {
        g: "Nystatin", b: "Mycostatin, Nilstat", c: "Polyene Antifungal (Topical/Local)", cat: "abx",
        m: "Fungicidal polyene that binds to ergosterol in fungal membranes (like amphotericin). NOT absorbed from GI tract or skin — used only for LOCAL/TOPICAL treatment of Candida. Available as oral suspension (swish and swallow/spit), topical cream/powder, and vaginal tablets.",
        ind: "ORAL CANDIDIASIS (thrush) — most common use of oral suspension. Cutaneous candidiasis. Intestinal candidiasis. Vaginal candidiasis. Prophylaxis of oral thrush in immunocompromised patients.",
        con: "Known hypersensitivity.",
        aec: "Oral: unpleasant taste, nausea, vomiting. Topical: local irritation, contact dermatitis (rare).",
        aes: "Minimal systemic absorption means minimal systemic toxicity. Rare hypersensitivity reactions. Stevens-Johnson syndrome (extremely rare).",
        inter: [
            {d: "None significant", m: "No significant systemic interactions due to lack of absorption.", s: "low"}
        ],
        dosage: "Oral suspension (thrush): 400,000-600,000 units (4-6mL) swish and swallow/spit 4×/day. Continue for 48 hours after symptoms resolve. Topical cream/powder: apply 2-3×/day. Vaginal tablets: 100,000 units daily for 2 weeks.",
        admin: "ORAL SUSPENSION: Shake well before use. SWISH in mouth for as long as possible (several minutes) to coat mucosa, then swallow or spit. For infants: apply to oral mucosa with swab. Do NOT eat or drink for 30 minutes after. Topical: apply to clean, dry skin.",
        nurse: "For ORAL THRUSH: teach proper technique — SWISH suspension in mouth for several minutes before swallowing. Shake suspension well. Continue treatment 48 hours after lesions heal. Infants: apply with cotton swab to oral mucosa. NOT absorbed systemically — cannot treat systemic infections. Assess for dentures that may harbor Candida — clean nightly. Common in patients on antibiotics, steroids, chemotherapy, or immunocompromised."
    },
    {
        g: "Acyclovir", b: "Zovirax", c: "Antiviral (Nucleoside Analog)", cat: "abx",
        m: "Virostatic nucleoside analog that inhibits viral DNA polymerase after activation by viral thymidine kinase. Active against herpes simplex virus (HSV-1, HSV-2) and varicella-zoster virus (VZV). Requires viral enzyme for activation — selective for infected cells with minimal host toxicity.",
        ind: "HERPES SIMPLEX — genital herpes (primary and recurrent), herpes labialis (cold sores), herpes encephalitis. VARICELLA-ZOSTER — chickenpox (varicella), shingles (herpes zoster). HSV keratitis (ophthalmic). IV for severe infections and immunocompromised patients.",
        con: "Known hypersensitivity to acyclovir or valacyclovir. Dehydration (increases nephrotoxicity risk).",
        aec: "Oral: nausea, vomiting, diarrhea, headache. Topical: burning, stinging at application site. IV: phlebitis.",
        aes: "NEPHROTOXICITY (IV) — crystal precipitation in renal tubules. Ensure adequate hydration and slow infusion. Neurotoxicity (confusion, tremors, seizures — usually with renal impairment or high doses). Thrombotic thrombocytopenic purpura/hemolytic uremic syndrome (rare).",
        inter: [
            {d: "Nephrotoxic Drugs", m: "Increased nephrotoxicity risk — especially with IV acyclovir.", s: "med"},
            {d: "Probenecid", m: "Decreased renal clearance → increased acyclovir levels.", s: "low"},
            {d: "Zidovudine", m: "Increased neurotoxicity risk (drowsiness, lethargy).", s: "med"}
        ],
        dosage: "Genital herpes (primary): 400mg PO TID or 200mg 5×/day for 7-10 days. Recurrent: 400-800mg PO TID for 5 days. Suppressive: 400mg PO BID. Herpes zoster (shingles): 800mg PO 5×/day for 7-10 days. IV (severe): 5-10mg/kg every 8 hours. Renal adjustment required.",
        admin: "Oral, IV, topical, ophthalmic. IV: infuse over AT LEAST 1 HOUR to reduce nephrotoxicity. Ensure adequate HYDRATION before and during IV therapy. Topical: apply with glove to avoid autoinoculation. Start treatment within 72 hours of symptom onset for best effect.",
        nurse: "Start treatment EARLY (within 72 hours of symptoms) for maximum benefit. IV: infuse slowly (≥1 hour) and hydrate well to prevent crystalline nephropathy. Adjust dose in renal impairment. For shingles: most effective if started within 72 hours of rash onset. Valacyclovir is a prodrug with better oral bioavailability — often preferred. Monitor renal function with IV use. Contact precautions for active lesions."
    },
    {
        g: "Oseltamivir", b: "Tamiflu", c: "Antiviral (Neuraminidase Inhibitor)", cat: "abx",
        m: "Inhibits viral neuraminidase enzyme, which is essential for release of new viral particles from infected cells. Active against INFLUENZA A and B viruses. Reduces severity and duration of flu symptoms if started within 48 hours of symptom onset. Also used for prophylaxis.",
        ind: "INFLUENZA treatment — adults and children ≥ 2 weeks with flu symptoms for ≤ 48 hours. Influenza prophylaxis — post-exposure prophylaxis and seasonal prophylaxis in high-risk individuals. Reduces hospitalization and complications in high-risk groups.",
        con: "Known hypersensitivity. End-stage renal disease on dialysis (severe dose reduction needed).",
        aec: "Nausea, vomiting (most common — take with food). Headache. Insomnia.",
        aes: "Neuropsychiatric events — abnormal behavior, confusion, hallucinations, delirium, self-injury (rare, mainly in children/adolescents — monitor closely). Severe skin reactions (rare). Hepatotoxicity (rare).",
        inter: [
            {d: "Live attenuated influenza vaccine (LAIV)", m: "Oseltamivir may reduce LAIV effectiveness — do not give within 2 weeks before or 48 hours after LAIV.", s: "med"},
            {d: "Probenecid", m: "Increased oseltamivir levels (decreased renal clearance).", s: "low"}
        ],
        dosage: "Treatment: 75mg PO BID for 5 days. Start within 48 hours of symptom onset. Prophylaxis: 75mg PO daily for ≥ 10 days (post-exposure) or duration of community outbreak (seasonal). Pediatric dosing by weight. Renal adjustment for CrCl < 60.",
        admin: "Oral (capsules, suspension). Take with FOOD to reduce nausea. May open capsules and mix with sweetened liquid for children. Start within 48 HOURS of flu symptoms for treatment effectiveness.",
        nurse: "TIMING IS CRITICAL — must start within 48 hours of symptom onset for treatment benefit. Take with FOOD to reduce nausea. Monitor children/adolescents for NEUROPSYCHIATRIC symptoms (confusion, abnormal behavior). Not a substitute for annual flu vaccination. Adjust dose in renal impairment. Useful for post-exposure prophylaxis in contacts of confirmed flu cases. Resistance can develop with widespread use."
    }
];
