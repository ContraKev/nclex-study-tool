/* STI Treatment Medications (10 drugs)
   Source: sexually_transmitted_infections.txt, drugs_mens_womens_health.txt */

const data_sti_drugs = [
    {
        g: "Azithromycin", b: "Zithromax, Z-Pack", c: "Macrolide Antibiotic", cat: "abx",
        m: "Binds to 50S ribosomal subunit of bacteria, inhibiting protein synthesis. Bacteriostatic at typical doses. Azalide subclass of macrolides with extended half-life allowing once-daily or single-dose therapy. Concentrates in tissues and phagocytes, achieving high intracellular levels.",
        ind: "⚠️ CHLAMYDIA (first-line, single dose). Gonorrhea (combined with ceftriaxone). MAC prophylaxis in HIV. Community-acquired pneumonia. Pharyngitis, sinusitis, bronchitis. Skin infections.",
        con: "History of cholestatic jaundice/hepatic dysfunction with prior azithromycin. QT prolongation risk. Known hypersensitivity to macrolides.",
        aec: "GI: Nausea, vomiting, diarrhea, abdominal pain (most common). Headache.",
        aes: "⚠️ QT PROLONGATION → Torsades de pointes (especially with other QT-prolonging drugs). Hepatotoxicity (cholestatic jaundice). C. difficile-associated diarrhea. Severe allergic reactions. Myasthenia gravis exacerbation.",
        inter: [
            {d: "Antacids (aluminum/magnesium)", m: "Decrease absorption — take azithromycin 1 hr before or 2 hrs after antacids.", s: "med"},
            {d: "QT-prolonging drugs", m: "Additive QT prolongation — avoid with Class IA/III antiarrhythmics, fluoroquinolones.", s: "high"},
            {d: "Warfarin", m: "May increase anticoagulant effect — monitor INR.", s: "med"},
            {d: "Digoxin", m: "May increase digoxin levels.", s: "med"}
        ],
        dosage: "Chlamydia: 1g PO × 1 dose (single-dose cure). Gonorrhea: 1g PO × 1 dose WITH ceftriaxone. CAP: 500mg day 1, then 250mg days 2-5. Z-Pack: 250mg × 6 tablets over 5 days.",
        admin: "Oral tablets, suspension, IV. Can take with or without food. Suspension: shake well. Single-dose therapy ideal for STI treatment compliance.",
        nurse: "⚠️ CHLAMYDIA: Single 1g dose is FIRST-LINE — ensures compliance since patient takes entire treatment at once. Separate from antacids by 2 hours. Counsel: Complete all doses if using Z-Pack. Sexual partners must be treated. Abstain from sex for 7 days after single-dose treatment. Return if symptoms persist. Report to health department as required."
    },
    {
        g: "Ceftriaxone", b: "Rocephin", c: "Third-Generation Cephalosporin", cat: "abx",
        m: "Binds to penicillin-binding proteins (PBPs) in bacterial cell wall, inhibiting cell wall synthesis → bactericidal. Third-generation cephalosporin with extended gram-negative coverage. Long half-life (6-9 hours) allows once-daily dosing.",
        ind: "⚠️ GONORRHEA (first-line, single IM dose with azithromycin). Meningitis. Serious gram-negative infections. Lyme disease. Surgical prophylaxis. Pneumonia, UTI, intra-abdominal infections.",
        con: "Cephalosporin allergy. Caution with penicillin allergy (~1-2% cross-reactivity). Neonates with hyperbilirubinemia (displaces bilirubin).",
        aec: "Injection site pain (IM). Diarrhea. Rash. Eosinophilia.",
        aes: "⚠️ BILIARY SLUDGE/PSEUDOLITHIASIS (especially with prolonged use). Hemolytic anemia. C. difficile colitis. Anaphylaxis. Seizures (rare, high doses). Do NOT mix with calcium-containing solutions in neonates (fatal precipitation).",
        inter: [
            {d: "Calcium-containing IV solutions", m: "CONTRAINDICATED in neonates — fatal lung/kidney precipitation. Adults: use caution, separate infusions.", s: "high"},
            {d: "Warfarin", m: "May increase INR — monitor.", s: "med"},
            {d: "Aminoglycosides", m: "Synergistic but give separately (chemical incompatibility).", s: "low"}
        ],
        dosage: "Gonorrhea: 500mg IM × 1 dose (with azithromycin 1g PO). Disseminated gonococcal: 1g IV/IM daily × 7 days. Meningitis: 2g IV every 12 hours. Surgical prophylaxis: 1-2g IV.",
        admin: "IM or IV. IM: reconstitute with lidocaine 1% to reduce pain. IV: infuse over 30 minutes. Single dose for uncomplicated gonorrhea.",
        nurse: "⚠️ GONORRHEA: Current CDC recommendation is 500mg IM × 1 dose PLUS azithromycin 1g PO (dual therapy due to resistance). IM injection is PAINFUL — use lidocaine diluent. Counsel patient: partners must be treated, abstain 7 days, report if symptoms persist. Follow-up culture recommended. Report to health department. Screen for other STIs (chlamydia, syphilis, HIV)."
    },
    {
        g: "Doxycycline", b: "Vibramycin, Doryx", c: "Tetracycline Antibiotic", cat: "abx",
        m: "Binds to 30S ribosomal subunit, inhibiting bacterial protein synthesis. Bacteriostatic. Broad-spectrum activity including intracellular organisms (Chlamydia, Rickettsia). Better absorbed and longer half-life than tetracycline.",
        ind: "⚠️ CHLAMYDIA (alternative to azithromycin). SYPHILIS (penicillin-allergic patients). Gonorrhea (with ceftriaxone). PID. Lyme disease. Acne. Malaria prophylaxis. Rickettsia, Ehrlichia infections. Prostatitis.",
        con: "⚠️ PREGNANCY (causes fetal tooth discoloration, bone growth inhibition). Children <8 years (permanent tooth staining). Hypersensitivity to tetracyclines.",
        aec: "GI upset, nausea, vomiting, diarrhea. ⚠️ PHOTOSENSITIVITY (severe sunburn). Esophageal irritation/ulceration. Vaginal candidiasis.",
        aes: "C. difficile colitis. Hepatotoxicity (high doses). Increased intracranial pressure (pseudotumor cerebri). Severe skin reactions. Superinfection.",
        inter: [
            {d: "Calcium, Iron, Antacids, Dairy", m: "CHELATE tetracyclines → greatly reduced absorption. Separate by 2-3 hours.", s: "high"},
            {d: "Warfarin", m: "Increases anticoagulant effect — monitor INR closely.", s: "high"},
            {d: "Oral Contraceptives", m: "May decrease OCP effectiveness — use backup contraception.", s: "med"},
            {d: "Isotretinoin", m: "Both cause pseudotumor cerebri — avoid combination.", s: "high"},
            {d: "Penicillins", m: "Bacteriostatic tetracyclines may antagonize bactericidal penicillins.", s: "med"}
        ],
        dosage: "Chlamydia: 100mg PO BID × 7 days. Syphilis (PCN-allergic): 100mg PO BID × 14-28 days (depending on stage). Gonorrhea adjunct: 100mg PO BID × 7 days. PID: 100mg PO/IV BID × 14 days.",
        admin: "Oral or IV. Take with FULL GLASS OF WATER. Remain UPRIGHT for 30 minutes after taking (prevents esophageal ulceration). Can take with food if GI upset (though may slightly reduce absorption).",
        nurse: "⚠️ PREGNANCY CONTRAINDICATED — causes permanent tooth discoloration in fetus. Avoid in children <8 years. ⚠️ PHOTOSENSITIVITY: Warn about severe sunburn — wear sunscreen, protective clothing. Take with full glass of water, stay upright 30 min. Separate from dairy/antacids/iron by 2-3 hours. For STIs: complete FULL 7-day course even if symptoms improve. Partners must be treated."
    },
    {
        g: "Penicillin G Benzathine", b: "Bicillin L-A", c: "Long-Acting Penicillin", cat: "abx",
        m: "Binds to penicillin-binding proteins (PBPs), inhibiting cell wall synthesis → bactericidal. Benzathine salt creates a deep tissue depot that slowly releases penicillin over 2-4 weeks, maintaining therapeutic levels without daily dosing.",
        ind: "⚠️ SYPHILIS — all stages (first-line). Rheumatic fever prophylaxis. Group A streptococcal pharyngitis (when compliance is concern). Yaws, bejel, pinta.",
        con: "Penicillin allergy. NEVER give IV (fatal). IM only.",
        aec: "Injection site pain (significant — thick suspension). Jarisch-Herxheimer reaction (syphilis treatment).",
        aes: "Anaphylaxis (rare but can be fatal). ⚠️ JARISCH-HERXHEIMER REACTION: Fever, chills, hypotension, tachycardia 2-8 hours after syphilis treatment — NOT an allergic reaction, caused by release of spirochete antigens. Neurotoxicity (very high doses).",
        inter: [
            {d: "Probenecid", m: "Decreases renal excretion → higher penicillin levels (sometimes used intentionally).", s: "low"},
            {d: "Methotrexate", m: "Decreased methotrexate excretion → toxicity.", s: "med"},
            {d: "Warfarin", m: "May increase INR.", s: "low"}
        ],
        dosage: "Primary/Secondary Syphilis: 2.4 million units IM × 1 dose. Early latent syphilis: 2.4 million units IM × 1 dose. Late latent/tertiary syphilis: 2.4 million units IM weekly × 3 weeks. Neurosyphilis: NOT adequate — use aqueous penicillin G IV.",
        admin: "⚠️ DEEP IM INJECTION ONLY — never IV (cardiac arrest and death). Large volume requires upper outer quadrant of gluteus. May divide into two injection sites. Thick suspension — use 18-21 gauge needle to draw up.",
        nurse: "⚠️ SYPHILIS FIRST-LINE: Single IM dose cures primary/secondary syphilis. ⚠️ NEVER GIVE IV — causes immediate cardiopulmonary arrest and death. Deep IM only (upper outer gluteus). Warn patient about JARISCH-HERXHEIMER REACTION — flu-like symptoms 2-8 hours after injection are EXPECTED with syphilis treatment, not an allergy. Treat with antipyretics/fluids. Pregnant women: this is ONLY treatment option (no alternatives for fetal protection). Report to health department. Repeat serologic testing at 6 and 12 months."
    },
    {
        g: "Valacyclovir", b: "Valtrex", c: "Antiviral (Nucleoside Analog Prodrug)", cat: "abx",
        m: "Prodrug rapidly converted to ACYCLOVIR after oral administration. Acyclovir is phosphorylated by viral thymidine kinase, then cellular kinases → acyclovir triphosphate inhibits viral DNA polymerase and terminates DNA chain elongation. Selective for virus-infected cells.",
        ind: "⚠️ GENITAL HERPES (HSV-2) — first episode, recurrent episodes, and daily suppression. Herpes labialis (cold sores, HSV-1). Herpes zoster (shingles). Varicella (chickenpox).",
        con: "Hypersensitivity to valacyclovir or acyclovir. Caution in renal impairment (dose adjustment required).",
        aec: "Headache, nausea, abdominal pain, dizziness.",
        aes: "⚠️ THROMBOTIC THROMBOCYTOPENIC PURPURA / HEMOLYTIC UREMIC SYNDROME (TTP/HUS) — especially in immunocompromised patients at high doses. Acute renal failure (crystalluria — ensure hydration). CNS effects (confusion, hallucinations — especially elderly, renal impairment).",
        inter: [
            {d: "Nephrotoxic drugs", m: "Additive nephrotoxicity risk.", s: "med"},
            {d: "Probenecid, Cimetidine", m: "Decrease acyclovir excretion → increased levels.", s: "low"},
            {d: "Mycophenolate", m: "Increased levels of both drugs.", s: "low"}
        ],
        dosage: "Genital herpes (first episode): 1g PO BID × 10 days. Recurrent episodes: 500mg PO BID × 3 days OR 1g PO daily × 5 days. Daily suppression: 500mg-1g PO daily. Herpes zoster: 1g PO TID × 7 days. Dose reduce in renal impairment.",
        admin: "Oral. Can take with or without food. Better bioavailability than acyclovir (3-5× higher). Start treatment within 72 hours of symptom onset for best efficacy.",
        nurse: "⚠️ GENITAL HERPES: No cure — antivirals reduce outbreak severity/duration and viral shedding. Start treatment at FIRST SIGN of outbreak (prodrome: tingling, itching). Daily suppressive therapy reduces transmission to partners by ~50%. Counsel: Herpes can be transmitted even when asymptomatic (viral shedding). Condoms reduce but don't eliminate transmission. Disclose status to partners. Hydration important — crystalluria risk. Dose adjustment needed in renal impairment."
    },
    {
        g: "Acyclovir", b: "Zovirax", c: "Antiviral (Nucleoside Analog)", cat: "abx",
        m: "Selectively phosphorylated by viral thymidine kinase in infected cells → acyclovir triphosphate inhibits viral DNA polymerase and terminates viral DNA chain. Minimal effect on uninfected cells (selective toxicity). Active against HSV-1, HSV-2, VZV.",
        ind: "Genital herpes (HSV-2). Herpes labialis (HSV-1). Herpes zoster (shingles). Varicella (chickenpox). HSV encephalitis. Neonatal herpes. Mucocutaneous HSV in immunocompromised.",
        con: "Hypersensitivity. Caution in renal impairment, dehydration, neurologic abnormalities.",
        aec: "Nausea, vomiting, diarrhea, headache. IV: phlebitis at injection site.",
        aes: "⚠️ NEPHROTOXICITY (crystalluria — especially with rapid IV infusion, dehydration). CNS toxicity (tremor, confusion, hallucinations, seizures — especially in renal impairment). TTP/HUS (rare).",
        inter: [
            {d: "Nephrotoxic drugs", m: "Additive nephrotoxicity.", s: "med"},
            {d: "Probenecid", m: "Decreases renal excretion.", s: "low"},
            {d: "Zidovudine", m: "Increased lethargy and fatigue.", s: "low"}
        ],
        dosage: "Genital herpes (initial): 400mg PO TID × 7-10 days OR 200mg 5×/day. Recurrent: 400mg TID × 5 days. Suppression: 400mg BID. Severe/disseminated: 5-10mg/kg IV every 8 hours. Herpes encephalitis: 10mg/kg IV every 8 hours × 14-21 days.",
        admin: "Oral, IV, topical. IV: infuse over at least 1 hour with adequate hydration (prevents crystalluria). Topical less effective than systemic.",
        nurse: "⚠️ IV ACYCLOVIR: Infuse SLOWLY (≥1 hour) with adequate hydration — prevents crystalluria and nephrotoxicity. Monitor renal function. BUN/Cr elevation = hold and notify provider. Oral acyclovir has poor bioavailability (15-30%) — valacyclovir often preferred. Start treatment early (within 72 hours) for best results. Dose adjustment required in renal impairment."
    },
    {
        g: "Metronidazole", b: "Flagyl, MetroGel", c: "Nitroimidazole Antibiotic/Antiprotozoal", cat: "abx",
        m: "Enters bacterial/protozoal cells → reduced by ferredoxin → forms cytotoxic intermediates that damage DNA, causing cell death. Active against ANAEROBES and certain protozoa (Trichomonas, Giardia, Entamoeba). No activity against aerobes.",
        ind: "⚠️ TRICHOMONIASIS (first-line). BACTERIAL VAGINOSIS (first-line). Giardiasis. Amebiasis. C. difficile infection. Anaerobic infections. H. pylori (part of triple therapy). PID.",
        con: "First trimester pregnancy (relative — use if benefits outweigh risks). Concurrent alcohol use (disulfiram-like reaction). Hypersensitivity.",
        aec: "GI: Nausea, metallic taste (very common), anorexia. Headache. Dark urine (harmless).",
        aes: "⚠️ DISULFIRAM-LIKE REACTION with alcohol (severe nausea, vomiting, flushing, headache). Peripheral neuropathy (prolonged use). Seizures. Leukopenia. Stevens-Johnson syndrome (rare).",
        inter: [
            {d: "Alcohol", m: "⚠️ DISULFIRAM REACTION — avoid alcohol during treatment and 48-72 hours after.", s: "high"},
            {d: "Warfarin", m: "INCREASES warfarin effect significantly — monitor INR closely.", s: "high"},
            {d: "Lithium", m: "Increases lithium toxicity.", s: "med"},
            {d: "Disulfiram", m: "Psychotic reactions — avoid combination.", s: "high"},
            {d: "Phenytoin, Phenobarbital", m: "Decreased metronidazole levels.", s: "med"}
        ],
        dosage: "Trichomoniasis: 2g PO × 1 dose OR 500mg BID × 7 days. Bacterial vaginosis: 500mg PO BID × 7 days OR gel 0.75% intravaginally daily × 5 days. C. diff: 500mg PO TID × 10-14 days. Anaerobic infections: 500mg IV/PO every 6-8 hours.",
        admin: "Oral, IV, topical gel/cream. Take oral with food to reduce GI upset. Vaginal gel: insert at bedtime.",
        nurse: "⚠️ NO ALCOHOL — disulfiram-like reaction causes severe nausea, vomiting, flushing. Avoid alcohol during treatment AND 48-72 hours AFTER completing therapy (includes alcohol in mouthwash, cough syrups). Warn about metallic taste (common, harmless). Dark urine is normal. For trichomoniasis: BOTH partners must be treated simultaneously or reinfection occurs. Single 2g dose ensures compliance. Complete full course even if symptoms resolve."
    },
    {
        g: "Imiquimod", b: "Aldara, Zyclara", c: "Immune Response Modifier", cat: "derm",
        m: "Toll-like receptor 7 (TLR7) agonist that stimulates the innate and acquired immune systems. Induces production of interferon-alpha, TNF-alpha, and other cytokines → activates immune cells to attack virus-infected cells and tumor cells. Does NOT directly kill virus.",
        ind: "⚠️ GENITAL WARTS (HPV-induced condylomata acuminata). Actinic keratoses. Superficial basal cell carcinoma.",
        con: "Do not apply to open wounds, sunburned skin, or mucous membranes. Not for internal genital warts (cervical, vaginal, urethral, rectal).",
        aec: "⚠️ LOCAL SKIN REACTIONS (expected): Erythema, erosion, excoriation, flaking, edema, scabbing, induration, vesicles. May be intense — indicates immune response.",
        aes: "Severe local inflammatory reactions. Flu-like symptoms (systemic absorption). Hypopigmentation/hyperpigmentation (usually temporary).",
        inter: [
            {d: "Immunosuppressants", m: "May reduce imiquimod effectiveness.", s: "med"},
            {d: "Other topical medications", m: "Do not use on same area simultaneously.", s: "low"}
        ],
        dosage: "Genital warts (Aldara 5%): Apply thin layer 3× per week (e.g., Mon/Wed/Fri) at bedtime × up to 16 weeks. Leave on 6-10 hours, then wash off. Actinic keratoses (Zyclara 3.75%): Apply daily × 2 weeks, off 2 weeks, repeat.",
        admin: "Topical cream. Apply to warts only (not surrounding skin). Use enough to cover warts with thin film. Wash hands before and after. Wash off after 6-10 hours. Do not cover with occlusive dressing.",
        nurse: "⚠️ HPV/GENITAL WARTS: Imiquimod works by stimulating immune response, NOT by directly killing virus. Local reactions (redness, erosion) are EXPECTED and indicate it's working — but severe reactions may need rest periods. Apply 3× weekly at bedtime, wash off in AM. Takes up to 16 weeks — patience required. Warts may clear partially before completing full course. Does NOT cure HPV infection — recurrence possible. Partners should be examined. HPV vaccination recommended if not previously received. Annual Pap smears for women (cervical cancer screening)."
    },
    {
        g: "Clindamycin (Vaginal)", b: "Cleocin, Clindesse", c: "Lincosamide Antibiotic", cat: "abx",
        m: "Binds to 50S ribosomal subunit, inhibiting bacterial protein synthesis. Bacteriostatic (bactericidal at high concentrations). Active against most gram-positive cocci and anaerobes. Vaginal formulation treats local infection.",
        ind: "⚠️ BACTERIAL VAGINOSIS (alternative to metronidazole). Not effective for trichomoniasis or yeast infections.",
        con: "History of regional enteritis, ulcerative colitis, or antibiotic-associated colitis. Hypersensitivity to clindamycin or lincomycin.",
        aec: "Vaginal candidiasis (secondary yeast infection — common). Vulvovaginal irritation, itching.",
        aes: "⚠️ C. DIFFICILE-ASSOCIATED DIARRHEA (CDAD) — can occur even with vaginal/topical use. Severe colitis. Allergic reactions.",
        inter: [
            {d: "Latex condoms/diaphragms", m: "Cream base WEAKENS latex — avoid for 72 hours after use. Use alternative contraception.", s: "high"},
            {d: "Neuromuscular blockers", m: "May enhance neuromuscular blockade (systemic absorption).", s: "low"}
        ],
        dosage: "Bacterial vaginosis: Cleocin 2% cream — one applicatorful (5g) intravaginally at bedtime × 7 days. Clindesse — one applicatorful (5g) × 1 dose. Ovules: 100mg intravaginally at bedtime × 3 days.",
        admin: "Intravaginal cream or suppository/ovule. Insert at bedtime. Complete full course even during menstruation. Clindesse is single-dose option.",
        nurse: "⚠️ BACTERIAL VAGINOSIS: Alternative when metronidazole not tolerated or contraindicated. ⚠️ LATEX WARNING: Cream base contains oils that weaken latex — do NOT rely on latex condoms or diaphragms during treatment AND 72 hours after. Use alternative contraception. Monitor for secondary yeast infection (common). Teach: fishy odor should improve; complete full course. C. diff risk exists even with vaginal use — report persistent diarrhea. Not effective for yeast or trichomoniasis."
    },
    {
        g: "Fluconazole", b: "Diflucan", c: "Azole Antifungal", cat: "abx",
        m: "Inhibits fungal cytochrome P450 enzyme (14-alpha-demethylase), blocking conversion of lanosterol to ergosterol. Ergosterol is essential for fungal cell membrane integrity → membrane dysfunction and cell death. Fungistatic (can be fungicidal at high concentrations).",
        ind: "⚠️ VULVOVAGINAL CANDIDIASIS (single-dose oral cure). Oropharyngeal/esophageal candidiasis. Cryptococcal meningitis. Systemic candidiasis. Prophylaxis in immunocompromised patients.",
        con: "Concurrent use of drugs that prolong QT interval. Co-administration with terfenadine (if fluconazole ≥400mg/day). Known hypersensitivity to azole antifungals. Caution in hepatic impairment.",
        aec: "Headache, nausea, abdominal pain, diarrhea. Rash.",
        aes: "⚠️ HEPATOTOXICITY (rare but can be severe — monitor LFTs with prolonged use). QT prolongation → Torsades de pointes. Severe skin reactions (Stevens-Johnson syndrome, DRESS). Adrenal insufficiency (high doses).",
        inter: [
            {d: "Warfarin", m: "Significantly INCREASES warfarin effect — close INR monitoring required.", s: "high"},
            {d: "Sulfonylureas (glipizide, glyburide)", m: "Increases hypoglycemia risk.", s: "high"},
            {d: "Phenytoin", m: "Increases phenytoin levels.", s: "med"},
            {d: "Statins (simvastatin, lovastatin)", m: "Increases statin levels → rhabdomyolysis risk. Avoid combination.", s: "high"},
            {d: "Cyclosporine, Tacrolimus", m: "Increases immunosuppressant levels — monitor closely.", s: "high"},
            {d: "QT-prolonging drugs", m: "Additive QT prolongation.", s: "high"}
        ],
        dosage: "Vulvovaginal candidiasis (uncomplicated): 150mg PO × 1 dose. Complicated/recurrent: 150mg PO every 72 hours × 3 doses. Oropharyngeal candidiasis: 200mg day 1, then 100mg daily × 7-14 days. Systemic candidiasis: 400-800mg daily.",
        admin: "Oral tablets or suspension. IV available. Can take with or without food. Single-dose for vaginal yeast = excellent compliance.",
        nurse: "⚠️ VAGINAL CANDIDIASIS: Single 150mg oral dose is highly effective and convenient — no messy creams. Symptom relief typically within 24-72 hours. If no improvement in 3 days, consider alternative diagnosis (may not be yeast). Many DRUG INTERACTIONS — review full med list (especially warfarin, statins, diabetic meds). For recurrent infections (≥4/year): may need prolonged suppressive therapy. OTC topical antifungals (miconazole) are alternatives. Hepatotoxicity rare but monitor with prolonged use."
    }
];
