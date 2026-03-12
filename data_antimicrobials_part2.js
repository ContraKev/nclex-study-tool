/* Block 2b — Antimicrobials: Protein Synthesis & DNA Inhibitors (8 drugs)
   Source: antimicrobial_drjames.txt */

const data_antimicrobials_part2 = [
    {
        g: "Azithromycin", b: "Zithromax, Z-Pak, Zmax", c: "Macrolide Antibiotic", cat: "abx",
        m: "Bacteriostatic antibiotic that inhibits bacterial protein synthesis by binding to 50S ribosomal subunit. Broad-spectrum coverage including atypical organisms (Mycoplasma, Chlamydia, Legionella). ALTERNATIVE for penicillin-allergic patients. Unique tissue penetration and long half-life allow short courses.",
        ind: "Community-acquired pneumonia. Upper respiratory infections (pharyngitis, sinusitis, otitis media). Atypical pneumonia (Mycoplasma, Chlamydia, Legionella). STIs (Chlamydia, gonorrhea). Skin infections. MAC prophylaxis in HIV. COPD exacerbations.",
        con: "Known hypersensitivity to macrolides. History of cholestatic jaundice with prior azithromycin. QT prolongation or concurrent QT-prolonging drugs.",
        aec: "GI upset — nausea, vomiting, diarrhea, abdominal pain (most common). Headache.",
        aes: "QT PROLONGATION → dysrhythmias, torsades de pointes, cardiac arrest (especially with other QT-prolonging drugs). HEPATOTOXICITY — jaundice, elevated LFTs. Ototoxicity — hearing loss, tinnitus (high doses). C. difficile colitis. Allergic reactions.",
        inter: [
            {d: "QT-Prolonging Drugs (Fluoroquinolones, Antipsychotics)", m: "Additive QT prolongation → risk of fatal arrhythmias.", s: "high"},
            {d: "Warfarin", m: "Increased anticoagulant effect — monitor INR.", s: "high"},
            {d: "Digoxin", m: "Increased digoxin levels → toxicity.", s: "high"},
            {d: "Antacids (aluminum/magnesium)", m: "Decreased absorption — take 1 hour before or 2 hours after.", s: "low"}
        ],
        dosage: "Z-Pak: 500mg day 1, then 250mg days 2-5 (total 5 days). Single-dose: 1g PO for Chlamydia. CAP: 500mg IV/PO daily. Pediatric: 10mg/kg day 1, then 5mg/kg days 2-5.",
        admin: "Oral (tablets, suspension, Z-Pak) or IV. Take oral on empty stomach (1 hour before or 2 hours after food) — but can take with food if GI upset. Complete full course even with short duration.",
        nurse: "Monitor for QT prolongation — especially in patients with cardiac history or on other QT-prolonging drugs. Good alternative for PENICILLIN-ALLERGIC patients. Long half-life allows short courses (Z-Pak). Assess liver function with prolonged use. Educate: complete full course even though it's only 5 days. Watch for C. diff."
    },
    {
        g: "Erythromycin", b: "E-Mycin, Ery-Tab, Erythrocin; Ilotycin (ophthalmic)", c: "Macrolide Antibiotic", cat: "abx",
        m: "Bacteriostatic macrolide that inhibits bacterial protein synthesis by binding to 50S ribosomal subunit. Prototype macrolide — older but still used. Narrow therapeutic index with many drug interactions due to CYP3A4 inhibition. GI motility effects (prokinetic).",
        ind: "Respiratory infections (alternative to penicillin). Pertussis (whooping cough). Chlamydial infections. Ophthalmia neonatorum prophylaxis (ophthalmic ointment at birth). Acne (topical). Gastroparesis (prokinetic effect).",
        con: "Hypersensitivity to macrolides. Concurrent use with QT-prolonging drugs. Severe hepatic impairment. Concurrent pimozide, ergotamine, or cisapride (contraindicated interactions).",
        aec: "GI upset — nausea, vomiting, diarrhea, abdominal cramping (MORE common than azithromycin). Thrombophlebitis (IV).",
        aes: "QT PROLONGATION → cardiac arrhythmias, torsades de pointes. HEPATOTOXICITY — cholestatic hepatitis (especially estolate salt). Ototoxicity (high IV doses). Superinfection. Severe GI effects.",
        inter: [
            {d: "Carbamazepine", m: "INCREASED carbamazepine levels → toxicity (ataxia, drowsiness).", s: "high"},
            {d: "Warfarin", m: "INCREASED warfarin levels → bleeding risk.", s: "high"},
            {d: "Digoxin", m: "INCREASED digoxin levels → toxicity.", s: "high"},
            {d: "Statins (Simvastatin, Lovastatin)", m: "Increased statin levels → rhabdomyolysis risk.", s: "high"},
            {d: "QT-Prolonging Drugs", m: "Additive QT prolongation.", s: "high"}
        ],
        dosage: "Adults: 250-500mg PO every 6 hours or 333mg every 8 hours. IV: 15-20mg/kg/day divided every 6 hours. Ophthalmic: 0.5-inch ribbon in each eye within 1 hour of birth.",
        admin: "Oral (best on empty stomach), IV, topical, ophthalmic. GI upset very common — can take with food if needed. IV: infuse over 20-60 minutes (phlebitis risk). Ophthalmic for newborn prophylaxis.",
        nurse: "More drug interactions than azithromycin due to CYP3A4 inhibition — review medication list carefully. GI upset is VERY common — may need to take with food despite reduced absorption. Monitor for cardiac arrhythmias. Ophthalmic ointment is standard newborn prophylaxis for ophthalmia neonatorum. Check liver function with prolonged use."
    },
    {
        g: "Doxycycline", b: "Vibramycin, Doryx, Monodox, Oracea", c: "Tetracycline Antibiotic", cat: "abx",
        m: "Bacteriostatic antibiotic that inhibits bacterial protein synthesis by binding to 30S ribosomal subunit. Broad-spectrum coverage including atypicals (Rickettsia, Chlamydia, Mycoplasma). Can be used in renal impairment (hepatic elimination). Photosensitivity is a key concern.",
        ind: "Acne. Rosacea. STIs (Chlamydia, syphilis). Lyme disease. Rocky Mountain spotted fever (Rickettsia). Malaria prophylaxis. MRSA skin infections (community-acquired). Respiratory infections (atypical pneumonia). Anthrax prophylaxis.",
        con: "Pregnancy (teratogenic — causes fetal bone/tooth abnormalities). Children < 8 years (permanent TOOTH DISCOLORATION and enamel hypoplasia). Severe hepatic impairment.",
        aec: "GI upset — nausea, vomiting, diarrhea. PHOTOSENSITIVITY — severe sunburn. Esophageal irritation/ulceration (take upright with plenty of water).",
        aes: "TOOTH DISCOLORATION in children and developing fetus — permanent yellow/brown staining. Hepatotoxicity — monitor LFTs. Pseudotumor cerebri (increased intracranial pressure). Superinfection (C. diff, yeast). Azotemia (in renal impairment with other tetracyclines — not doxycycline).",
        inter: [
            {d: "Dairy products, Calcium, Iron, Antacids, Magnesium", m: "CHELATION reduces doxycycline absorption — take 1-2 hours apart.", s: "high"},
            {d: "Oral Contraceptives", m: "May reduce effectiveness — use backup method.", s: "med"},
            {d: "Warfarin", m: "Increased anticoagulant effect.", s: "med"},
            {d: "Barbiturates, Phenytoin, Carbamazepine", m: "Decreased doxycycline levels (enzyme induction).", s: "med"}
        ],
        dosage: "Adults: 100mg PO every 12 hours day 1, then 100mg daily or BID. Severe infections: 100mg every 12 hours. Acne: 50-100mg daily. Malaria prophylaxis: 100mg daily (start 1-2 days before travel).",
        admin: "Oral with FULL GLASS of water. REMAIN UPRIGHT for at least 30 minutes after dose (prevents esophageal ulceration). Avoid lying down after taking. Avoid dairy/antacids/iron within 1-2 hours. Apply sunscreen and avoid prolonged sun exposure.",
        nurse: "⚠️ CONTRAINDICATED in pregnancy and children < 8 (tooth discoloration). Educate about PHOTOSENSITIVITY — wear sunscreen, protective clothing, avoid prolonged sun. Take UPRIGHT with water — can cause esophageal ulcers if lying down. Separate from dairy, calcium, iron, antacids by 1-2 hours. Safer than other tetracyclines in renal impairment (hepatic elimination)."
    },
    {
        g: "Gentamicin", b: "Garamycin; generic", c: "Aminoglycoside Antibiotic", cat: "abx",
        m: "Bactericidal antibiotic that irreversibly binds to 30S ribosomal subunit, causing misreading of mRNA and bacterial cell death. Concentration-dependent killing — higher peaks are more effective. Narrow therapeutic index requiring PEAK and TROUGH monitoring. Active against aerobic gram-negative bacilli.",
        ind: "Serious gram-negative infections (E. coli, Klebsiella, Pseudomonas, Proteus, Enterobacter). Septicemia. Pyelonephritis. Endocarditis (synergy with beta-lactams). Intra-abdominal infections. Often combined with beta-lactam for broad coverage and synergy.",
        con: "Known hypersensitivity. Myasthenia gravis (worsens neuromuscular blockade). Pregnancy (fetal ototoxicity). Pre-existing renal impairment or hearing loss (relative).",
        aec: "Injection site pain. Nausea.",
        aes: "NEPHROTOXICITY — elevated BUN/Cr, decreased urine output, proteinuria, hematuria. Monitor trough levels. OTOTOXICITY — irreversible hearing loss, tinnitus, vertigo. NEUROMUSCULAR BLOCKADE — weakness, respiratory depression (especially in myasthenia gravis or with neuromuscular blockers).",
        inter: [
            {d: "Penicillins (in same IV line)", m: "Penicillins INACTIVATE aminoglycosides — administer separately.", s: "high"},
            {d: "Vancomycin", m: "ADDITIVE nephrotoxicity and ototoxicity.", s: "high"},
            {d: "Loop Diuretics (Furosemide)", m: "ADDITIVE ototoxicity.", s: "high"},
            {d: "Amphotericin B", m: "Additive nephrotoxicity.", s: "high"},
            {d: "Neuromuscular Blockers", m: "Enhanced neuromuscular blockade → prolonged paralysis.", s: "high"}
        ],
        dosage: "Traditional: 1-2.5mg/kg IV every 8 hours. Once-daily (extended-interval): 5-7mg/kg IV every 24 hours. Adjust based on levels and renal function. Target trough < 2 mcg/mL (traditional); peak 15-30 mcg/mL.",
        admin: "IV (most common) or IM. IV infusion over 30-60 minutes. NEVER mix with penicillins in same IV solution. Monitor PEAK (30 min after IV ends) and TROUGH (before next dose) levels.",
        nurse: "⚠️ NEPHROTOXIC and OTOTOXIC — monitor renal function (BUN/Cr) and hearing. Check PEAK and TROUGH levels — trough before 4th dose with traditional dosing. Assess for hearing changes, tinnitus, vertigo. Monitor urine output (< 30 mL/hr is concerning). Contraindicated in myasthenia gravis. Do NOT mix with penicillins in same IV line. Once-daily dosing is increasingly used — better efficacy, less toxicity."
    },
    {
        g: "Ciprofloxacin", b: "Cipro, Cipro XR", c: "Fluoroquinolone Antibiotic", cat: "abx",
        m: "Bactericidal antibiotic that inhibits DNA gyrase and topoisomerase IV, preventing bacterial DNA replication and repair. Broad-spectrum coverage including Pseudomonas. Good penetration into bone, prostate, and urinary tract. Concentration-dependent killing.",
        ind: "UTIs (including complicated). Respiratory infections (but NOT first-line for CAP). Bone/joint infections. Intra-abdominal infections. Skin/soft tissue infections. Infectious diarrhea. Anthrax (post-exposure prophylaxis). Prostatitis. Gonorrhea (resistance increasing).",
        con: "Known hypersensitivity to fluoroquinolones. Concurrent tizanidine use. History of tendon disorders with fluoroquinolones. Children (except specific indications) — cartilage damage risk.",
        aec: "GI upset — nausea, vomiting, diarrhea. Headache. Dizziness. Rash.",
        aes: "ACHILLES TENDON RUPTURE — especially in elderly, corticosteroid users, kidney/heart/lung transplant patients. BLACK BOX WARNING. QT PROLONGATION → arrhythmias. CNS effects — seizures, confusion, psychosis. PHOTOSENSITIVITY — severe sunburn. Peripheral neuropathy. Aortic aneurysm/dissection risk. C. difficile colitis. Hypoglycemia.",
        inter: [
            {d: "Dairy, Calcium, Iron, Antacids, Sucralfate", m: "CHELATION significantly reduces absorption — take 2 hours before or 6 hours after.", s: "high"},
            {d: "Warfarin", m: "INCREASED anticoagulant effect — monitor INR.", s: "high"},
            {d: "Theophylline", m: "Increased theophylline levels → toxicity.", s: "high"},
            {d: "Tizanidine", m: "CONTRAINDICATED — markedly increased tizanidine levels.", s: "high"},
            {d: "QT-Prolonging Drugs", m: "Additive QT prolongation.", s: "high"}
        ],
        dosage: "UTI: 250-500mg PO every 12 hours. Severe infections: 400mg IV every 8-12 hours or 500-750mg PO every 12 hours. Anthrax: 500mg PO every 12 hours.",
        admin: "Oral or IV. Take oral on EMPTY STOMACH with water (not dairy). Avoid antacids, iron, calcium within 2 hours before or 6 hours after dose. IV infuse over 60 minutes. Hydrate well.",
        nurse: "⚠️ BLACK BOX WARNING: Tendon rupture risk — stop immediately if tendon pain occurs. Risk factors: age > 60, steroids, transplant patients. Avoid in children if possible (cartilage concerns). Educate about PHOTOSENSITIVITY — use sunscreen. Separate from dairy/antacids by 2-6 hours. Monitor for CNS effects. Watch for C. diff. Not first-line for uncomplicated infections."
    },
    {
        g: "Levofloxacin", b: "Levaquin", c: "Fluoroquinolone Antibiotic", cat: "abx",
        m: "Bactericidal fluoroquinolone with enhanced gram-positive coverage compared to ciprofloxacin. Inhibits DNA gyrase and topoisomerase IV. Good respiratory penetration — used for community-acquired pneumonia. Once-daily dosing. Same BLACK BOX warnings as ciprofloxacin.",
        ind: "Community-acquired pneumonia. Hospital-acquired pneumonia. Acute bacterial sinusitis. Acute exacerbation of chronic bronchitis. Complicated UTI. Skin/soft tissue infections. Prostatitis. Anthrax prophylaxis.",
        con: "Same as ciprofloxacin: fluoroquinolone hypersensitivity, concurrent tizanidine, history of fluoroquinolone-associated tendon disorders, myasthenia gravis (can worsen muscle weakness).",
        aec: "GI upset. Headache. Insomnia. Dizziness.",
        aes: "Same BLACK BOX WARNINGS as ciprofloxacin: TENDON RUPTURE, peripheral neuropathy, CNS effects, myasthenia gravis exacerbation, aortic aneurysm. QT PROLONGATION. Photosensitivity. Hypoglycemia/hyperglycemia. C. difficile colitis.",
        inter: [
            {d: "Antacids, Iron, Calcium, Dairy", m: "Chelation reduces absorption — separate by 2 hours.", s: "high"},
            {d: "Warfarin", m: "Increased anticoagulant effect.", s: "high"},
            {d: "QT-Prolonging Drugs", m: "Additive QT prolongation.", s: "high"},
            {d: "NSAIDs", m: "Increased CNS stimulation and seizure risk.", s: "med"},
            {d: "Corticosteroids", m: "INCREASED tendon rupture risk.", s: "high"}
        ],
        dosage: "CAP: 500mg PO/IV daily or 750mg daily for 5-7 days. UTI: 250-500mg daily. Severe infections: 750mg daily. Renal adjustment required.",
        admin: "Oral or IV. Once-daily dosing. Take oral 2 hours before or after antacids/minerals. IV infuse over 60-90 minutes. Adequate hydration.",
        nurse: "Same warnings as ciprofloxacin — tendon rupture, CNS effects, QT prolongation. Better respiratory coverage than cipro — often used for pneumonia. Exacerbates myasthenia gravis — avoid. Once-daily dosing improves compliance. Monitor blood glucose — can cause both hypo- and hyperglycemia. Reserve for appropriate indications — FDA advises against use for uncomplicated infections due to serious adverse effects."
    },
    {
        g: "Trimethoprim-Sulfamethoxazole", b: "Bactrim, Septra (TMP-SMX)", c: "Sulfonamide + Dihydrofolate Reductase Inhibitor", cat: "abx",
        m: "Synergistic BACTERICIDAL combination: Sulfamethoxazole inhibits dihydropteroate synthetase (step 1) and trimethoprim inhibits dihydrofolate reductase (step 2) in bacterial folic acid synthesis pathway. Together they are bactericidal. Good urinary and respiratory penetration.",
        ind: "UTIs (first-line for uncomplicated). Pneumocystis jirovecii pneumonia (PCP) — treatment and prophylaxis. Traveler's diarrhea. MRSA skin infections (community-acquired). Otitis media. Shigellosis. Toxoplasmosis prophylaxis.",
        con: "SULFA ALLERGY — cross-reacts with sulfonamide antibiotics, sulfonylureas (glipizide, glyburide), thiazide and loop diuretics (HCTZ, furosemide). Severe renal or hepatic impairment. Pregnancy at term (kernicterus risk). Megaloblastic anemia from folate deficiency.",
        aec: "GI upset — nausea, vomiting, anorexia. Rash (common).",
        aes: "STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS — severe skin peeling, requires immediate discontinuation. CRYSTALLURIA — crystals in urine can damage kidneys (ensure adequate hydration). Blood dyscrasias — hemolytic anemia, agranulocytosis, thrombocytopenia, aplastic anemia. HYPERKALEMIA (trimethoprim blocks potassium secretion). Photosensitivity.",
        inter: [
            {d: "Warfarin", m: "INCREASED anticoagulant effect — monitor INR closely.", s: "high"},
            {d: "Phenytoin", m: "Increased phenytoin levels → toxicity.", s: "high"},
            {d: "ACE Inhibitors, ARBs, K-sparing Diuretics", m: "ADDITIVE hyperkalemia risk.", s: "high"},
            {d: "Methotrexate", m: "Increased methotrexate toxicity (both affect folate).", s: "high"},
            {d: "Sulfonylureas", m: "Increased hypoglycemia risk.", s: "med"}
        ],
        dosage: "UTI: 1 DS tablet (800/160mg) PO every 12 hours for 3-14 days. PCP treatment: 15-20mg/kg/day TMP component divided every 6-8 hours. PCP prophylaxis: 1 DS tablet daily or 3×/week.",
        admin: "Oral (tablets, suspension) or IV. Take with FULL GLASS of WATER and maintain adequate hydration (prevents crystalluria). May take with or without food. Avoid excessive sun exposure.",
        nurse: "⚠️ Ask about SULFA ALLERGY before administering — includes diuretics and sulfonylureas. Monitor for RASH — can progress to Stevens-Johnson (blistering, mucosal involvement = STOP immediately). Ensure adequate HYDRATION to prevent crystalluria. Monitor potassium — can cause hyperkalemia. Check CBC periodically for blood dyscrasias. Good first-line UTI treatment. Effective for PCP prophylaxis in HIV."
    },
    {
        g: "Nitrofurantoin", b: "Macrobid, Macrodantin, Furadantin", c: "Urinary Antiseptic / Nitrofuran", cat: "abx",
        m: "Bactericidal antibiotic that damages bacterial DNA through reactive intermediates. Concentrates in URINE only — not effective for systemic infections. Active against most urinary pathogens including E. coli. Used for UTI treatment and chronic suppression.",
        ind: "URINARY TRACT INFECTIONS — treatment of acute uncomplicated cystitis. Long-term suppression of recurrent UTIs. NOT for pyelonephritis (doesn't reach renal tissue). NOT for systemic infections.",
        con: "CrCl < 30 mL/min (inadequate urine concentration and increased toxicity). Anuria. Infants < 1 month. Term pregnancy (hemolytic anemia risk in newborn). G6PD deficiency (hemolysis).",
        aec: "GI upset — nausea, vomiting (take with food). BROWN DISCOLORATION OF URINE (harmless). Headache.",
        aes: "PULMONARY TOXICITY — acute (hypersensitivity pneumonitis: fever, cough, dyspnea) or chronic (pulmonary fibrosis with prolonged use). Peripheral neuropathy (numbness, tingling). Hemolytic anemia (G6PD deficiency). Hepatotoxicity. Blood dyscrasias.",
        inter: [
            {d: "Antacids (magnesium)", m: "Decreased nitrofurantoin absorption.", s: "low"},
            {d: "Probenecid", m: "Decreased urinary excretion → reduced effectiveness and increased toxicity.", s: "med"},
            {d: "Fluoroquinolones", m: "Nitrofurantoin may antagonize fluoroquinolone activity in urine.", s: "low"}
        ],
        dosage: "Acute UTI: Macrobid 100mg PO every 12 hours for 5-7 days. Macrodantin: 50-100mg PO every 6 hours. Chronic suppression: 50-100mg PO at bedtime.",
        admin: "Oral. Take WITH FOOD or MILK (improves absorption and reduces GI upset). Swallow capsules whole — do NOT crush (stains teeth). Complete full course.",
        nurse: "Only for BLADDER infections (UTI/cystitis) — NOT for kidney infections or systemic infections. Educate about BROWN URINE (normal, harmless). Take with FOOD to reduce nausea and improve absorption. Monitor for PULMONARY symptoms (cough, dyspnea) — stop if develops. Check renal function — contraindicated if CrCl < 30. Avoid in late pregnancy. Do NOT crush capsules — stains teeth."
    }
];
