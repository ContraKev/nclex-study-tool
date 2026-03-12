/* Block 2a — Antimicrobials: Cell Wall Inhibitors (8 drugs)
   Source: antimicrobial_drjames.txt */

const data_antimicrobials_part1 = [
    {
        g: "Amoxicillin", b: "Amoxil, Moxatag; Augmentin (with clavulanate)", c: "Penicillin (Broad-Spectrum) / Beta-Lactam", cat: "abx",
        m: "Bactericidal beta-lactam antibiotic that inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs). Broad-spectrum penicillin effective against both gram-positive and some gram-negative bacteria. Clavulanate (in Augmentin) is a beta-lactamase inhibitor that extends coverage to beta-lactamase-producing organisms.",
        ind: "Respiratory tract infections (otitis media, sinusitis, pharyngitis, bronchitis, pneumonia). Urinary tract infections. Skin/soft tissue infections. H. pylori eradication (combination therapy). Dental infections. Prophylaxis for bacterial endocarditis.",
        con: "Penicillin allergy (ALWAYS ask before prescribing). Severe allergic reaction history (anaphylaxis). Infectious mononucleosis (causes rash).",
        aec: "GI upset — nausea, vomiting, diarrhea (the 'big three' of all antibiotics). Rash (non-allergic rash common, especially with mono).",
        aes: "ALLERGIC REACTIONS — ranging from rash to severe anaphylaxis. C. difficile-associated diarrhea (CDAD) — foul-smelling diarrhea indicates suprainfection. Nephritis (rare). Seizures (high doses). Superinfection (yeast vaginitis, oral thrush).",
        inter: [
            {d: "Oral Contraceptives", m: "May reduce effectiveness — use backup contraception.", s: "med"},
            {d: "Warfarin", m: "May increase INR and bleeding risk.", s: "med"},
            {d: "Methotrexate", m: "Reduced renal excretion → methotrexate toxicity.", s: "high"},
            {d: "Aminoglycosides", m: "Penicillins inactivate aminoglycosides in same IV solution — administer separately.", s: "high"}
        ],
        dosage: "Adults: 250-500mg PO every 8 hours or 500-875mg every 12 hours. Augmentin: 500/125mg or 875/125mg every 12 hours. Pediatric: 25-50mg/kg/day divided every 8-12 hours.",
        admin: "Oral (tablets, capsules, chewables, suspension). May take with or without food — taking with food reduces GI upset. Complete entire prescribed course even if feeling better.",
        nurse: "⚠️ ALWAYS ask about PENICILLIN ALLERGY before administering — cross-reactivity with cephalosporins possible. Obtain culture specimens before starting antibiotic. Monitor for signs of allergic reaction (rash, hives, difficulty breathing). Assess for diarrhea — foul-smelling stool may indicate C. diff. Educate about completing full course. Advise backup contraception if on oral contraceptives."
    },
    {
        g: "Ampicillin", b: "Principen (oral); Unasyn (with sulbactam)", c: "Penicillin (Broad-Spectrum) / Beta-Lactam", cat: "abx",
        m: "Bactericidal beta-lactam antibiotic with broader gram-negative coverage than penicillin G. Inhibits bacterial cell wall synthesis. Available IV for serious infections. Sulbactam (in Unasyn) is a beta-lactamase inhibitor extending coverage to resistant organisms.",
        ind: "Meningitis (especially in neonates and elderly — covers Listeria). Respiratory infections. UTIs. GI infections. Septicemia. Bacterial endocarditis prophylaxis. Intra-abdominal infections (Unasyn).",
        con: "Penicillin allergy. Infectious mononucleosis (high incidence of rash).",
        aec: "GI upset (nausea, vomiting, diarrhea). Rash. Injection site reactions (IV/IM).",
        aes: "Anaphylaxis and severe allergic reactions. C. difficile colitis. Seizures (high IV doses). Interstitial nephritis. Superinfection.",
        inter: [
            {d: "Oral Contraceptives", m: "Reduced effectiveness.", s: "med"},
            {d: "Aminoglycosides", m: "Inactivated when mixed in same IV solution.", s: "high"},
            {d: "Allopurinol", m: "Increased risk of rash.", s: "low"},
            {d: "Warfarin", m: "May increase bleeding risk.", s: "med"}
        ],
        dosage: "Oral: 250-500mg every 6 hours. IV/IM: 1-2g every 4-6 hours. Meningitis: 2g IV every 4 hours. Unasyn: 1.5-3g IV every 6 hours.",
        admin: "Oral, IV, IM. Oral best on empty stomach (1 hour before or 2 hours after meals). IV infuse over 15-30 minutes. IM injection into large muscle.",
        nurse: "Assess penicillin allergy history. For meningitis: ampicillin is first-line to cover Listeria in neonates and elderly. Monitor for seizures with high IV doses. Keep IV and IM sites separate from aminoglycosides. Assess renal function — dose adjustment may be needed."
    },
    {
        g: "Piperacillin-Tazobactam", b: "Zosyn", c: "Penicillin (Extended-Spectrum/Anti-Pseudomonal) / Beta-Lactam", cat: "abx",
        m: "Bactericidal extended-spectrum penicillin with anti-pseudomonal activity. Tazobactam is a beta-lactamase inhibitor that protects piperacillin from degradation. Provides very broad coverage including Pseudomonas aeruginosa, Enterobacter, and anaerobes. Reserved for serious hospital-acquired infections.",
        ind: "Hospital-acquired/ventilator-associated pneumonia. Complicated intra-abdominal infections. Complicated skin/soft tissue infections. Febrile neutropenia. Septicemia. Serious Pseudomonas infections.",
        con: "Penicillin or cephalosporin allergy. History of cholestatic jaundice with piperacillin-tazobactam.",
        aec: "Diarrhea, nausea, vomiting. Headache. Insomnia. Rash. Injection site reactions.",
        aes: "C. difficile-associated diarrhea. Bleeding (inhibits platelet function). Seizures. Electrolyte disturbances (hypokalemia). Nephrotoxicity (especially with aminoglycosides). Leukopenia, thrombocytopenia with prolonged use.",
        inter: [
            {d: "Aminoglycosides", m: "Inactivated if mixed in same solution; also additive nephrotoxicity.", s: "high"},
            {d: "Anticoagulants", m: "Increased bleeding risk — monitor coagulation parameters.", s: "high"},
            {d: "Methotrexate", m: "Reduced clearance → toxicity.", s: "high"},
            {d: "Probenecid", m: "Increases piperacillin levels.", s: "med"}
        ],
        dosage: "3.375g IV every 6 hours or 4.5g IV every 6-8 hours. Extended infusion: 3.375g over 4 hours every 8 hours (better efficacy). Renal dosing required for CrCl < 40.",
        admin: "IV only. Standard infusion over 30 minutes. Extended infusion (4 hours) increasingly used for better pharmacodynamics. Adjust dose in renal impairment. Do NOT mix with aminoglycosides.",
        nurse: "Reserved for serious infections — not first-line outpatient antibiotic. Monitor bleeding parameters (PT/PTT, platelet count) especially with prolonged therapy. Watch for signs of superinfection. Separate IV administration from aminoglycosides by flushing line. Monitor renal function. Assess for C. diff (foul-smelling diarrhea)."
    },
    {
        g: "Cephalexin", b: "Keflex", c: "Cephalosporin (1st Generation) / Beta-Lactam", cat: "abx",
        m: "Bactericidal beta-lactam antibiotic that inhibits bacterial cell wall synthesis. First-generation cephalosporin with excellent gram-POSITIVE coverage (Staphylococcus, Streptococcus) but limited gram-negative activity. Cross-sensitivity with penicillins possible (5-10%).",
        ind: "Skin and soft tissue infections (cellulitis, impetigo). Respiratory tract infections (pharyngitis, tonsillitis). Bone infections (osteomyelitis). UTIs (limited). Prophylaxis before dental procedures (penicillin-allergic without anaphylaxis history).",
        con: "Cephalosporin allergy. Severe penicillin allergy (anaphylaxis) — cross-reactivity risk. Use with caution in penicillin allergy without anaphylaxis.",
        aec: "GI upset (diarrhea, nausea, vomiting). Headache. Dizziness.",
        aes: "Allergic reactions (rash to anaphylaxis). C. difficile colitis — monitor for foul-smelling diarrhea. Superinfection. Nephrotoxicity (rare).",
        inter: [
            {d: "Warfarin", m: "May increase INR — monitor closely.", s: "med"},
            {d: "Probenecid", m: "Decreases renal excretion → increased cephalexin levels.", s: "low"},
            {d: "Aminoglycosides", m: "Additive nephrotoxicity risk.", s: "med"}
        ],
        dosage: "Adults: 250-500mg PO every 6 hours or 500mg-1g every 12 hours. Severe infections: up to 4g/day. Pediatric: 25-50mg/kg/day divided every 6-12 hours.",
        admin: "Oral only (capsules, tablets, suspension). May take with or without food. Complete full course. Shake suspension well before use.",
        nurse: "Ask about BOTH penicillin AND cephalosporin allergies — cross-reactivity possible but less common than previously thought. First-gen cephalosporins are best for gram-positive skin infections. Monitor for GI distress and diarrhea. Educate about completing full antibiotic course."
    },
    {
        g: "Cefazolin", b: "Ancef, Kefzol", c: "Cephalosporin (1st Generation) / Beta-Lactam", cat: "abx",
        m: "Bactericidal first-generation cephalosporin for IV/IM use. Excellent gram-positive coverage (Staph, Strep). Most commonly used for SURGICAL PROPHYLAXIS due to safety profile and Staph coverage. Also used for serious infections requiring parenteral therapy.",
        ind: "SURGICAL PROPHYLAXIS — most common use (clean and clean-contaminated surgeries). Skin/soft tissue infections. Bone/joint infections. Respiratory infections. UTIs. Septicemia. Endocarditis.",
        con: "Cephalosporin allergy. Severe penicillin allergy (anaphylaxis history).",
        aec: "Injection site pain/phlebitis. GI upset. Rash.",
        aes: "Allergic reactions. C. difficile colitis. Superinfection. Bleeding (rare — some cephalosporins affect vitamin K). Nephrotoxicity (rare, dose-related).",
        inter: [
            {d: "Aminoglycosides", m: "Additive nephrotoxicity — monitor renal function.", s: "med"},
            {d: "Probenecid", m: "Decreased renal clearance of cefazolin.", s: "low"},
            {d: "Anticoagulants", m: "Some cephalosporins increase bleeding risk.", s: "med"}
        ],
        dosage: "Surgical prophylaxis: 1-2g IV within 60 minutes of incision; redose every 3-4 hours if prolonged surgery. Infection treatment: 500mg-1g IV/IM every 6-8 hours. Severe: 1-1.5g every 6 hours.",
        admin: "IV (preferred) or IM. IV push over 3-5 minutes or infuse over 30 minutes. For surgical prophylaxis: must be given within 60 minutes BEFORE surgical incision for effectiveness.",
        nurse: "SURGICAL PROPHYLAXIS timing is critical — give within 60 minutes before incision. Redose for surgeries > 4 hours or significant blood loss. Monitor for signs of allergic reaction. Assess IV site for phlebitis. First-gen cephalosporins do NOT cross blood-brain barrier — not for meningitis."
    },
    {
        g: "Ceftriaxone", b: "Rocephin", c: "Cephalosporin (3rd Generation) / Beta-Lactam", cat: "abx",
        m: "Bactericidal third-generation cephalosporin with EXPANDED gram-negative coverage and ability to penetrate CSF. Long half-life allows once-daily dosing. Eliminated primarily by biliary excretion — can be used in renal impairment without dose adjustment. Does NOT cover Pseudomonas.",
        ind: "Meningitis (bacterial). Community-acquired pneumonia. Gonorrhea (single-dose IM). Pelvic inflammatory disease. Intra-abdominal infections. Lyme disease (neurologic). Otitis media (refractory). Septicemia. Bone/joint infections.",
        con: "Cephalosporin allergy. Neonates with hyperbilirubinemia (ceftriaxone displaces bilirubin from albumin). Do NOT give with calcium-containing IV solutions in neonates (fatal precipitate).",
        aec: "Diarrhea. Injection site reactions. Rash. Eosinophilia.",
        aes: "BILIARY SLUDGE/PSEUDOLITHIASIS — can cause gallbladder symptoms (reversible). C. difficile colitis. Bleeding tendencies (affects vitamin K-dependent factors). Superinfection. Hemolytic anemia (rare). Allergic reactions.",
        inter: [
            {d: "Calcium-containing IV solutions", m: "FATAL precipitate in neonates — never co-administer in neonates.", s: "high"},
            {d: "Warfarin", m: "Increased bleeding risk — affects vitamin K.", s: "high"},
            {d: "Aminoglycosides", m: "Additive nephrotoxicity (less with ceftriaxone due to biliary elimination).", s: "med"}
        ],
        dosage: "Adults: 1-2g IV/IM once daily. Meningitis: 2g IV every 12 hours. Gonorrhea: 500mg IM single dose. Pediatric: 50-100mg/kg/day divided every 12-24 hours (max 4g/day).",
        admin: "IV or IM. IV infusion over 30 minutes. IM with lidocaine 1% to reduce pain. Once-daily dosing due to long half-life. Do NOT reconstitute or mix with calcium-containing solutions.",
        nurse: "Third-gen cephalosporins CROSS the blood-brain barrier — appropriate for meningitis. Monitor for biliary symptoms (RUQ pain, N/V) — biliary sludge is reversible. In neonates: NEVER give with calcium IV products (fatal lung/kidney precipitates). Longer duration makes it convenient for outpatient parenteral therapy. Watch for C. diff."
    },
    {
        g: "Ceftaroline", b: "Teflaro", c: "Cephalosporin (5th Generation) / Beta-Lactam", cat: "abx",
        m: "Bactericidal fifth-generation cephalosporin with unique activity against MRSA (methicillin-resistant Staphylococcus aureus). Binds to PBP2a found in MRSA, making it the ONLY cephalosporin effective against MRSA. Also covers typical gram-positive and gram-negative organisms.",
        ind: "MRSA infections — skin/soft tissue infections (ABSSSI). Community-acquired bacterial pneumonia (CABP). Alternative to vancomycin for MRSA when nephrotoxicity is a concern.",
        con: "Cephalosporin or penicillin allergy with anaphylaxis. Known hypersensitivity.",
        aec: "Diarrhea, nausea. Headache. Rash. Positive direct Coombs test (usually without hemolysis).",
        aes: "C. difficile colitis. Allergic reactions. Seroconversion of Coombs test (rare hemolytic anemia). Seizures (rare).",
        inter: [
            {d: "Probenecid", m: "Decreases renal clearance of ceftaroline.", s: "low"},
            {d: "Other nephrotoxic drugs", m: "Monitor renal function when combined.", s: "med"}
        ],
        dosage: "Skin infections (ABSSSI): 600mg IV every 12 hours for 5-14 days. Pneumonia (CABP): 600mg IV every 12 hours for 5-7 days. Renal adjustment needed for CrCl ≤ 50.",
        admin: "IV only. Infuse over 60 minutes (5-60 min per manufacturer). Adjust dose in renal impairment.",
        nurse: "ONLY cephalosporin effective against MRSA — unique mechanism binding PBP2a. Alternative to vancomycin when avoiding nephrotoxicity/ototoxicity. Monitor for positive Coombs test. Watch for C. diff. Not effective against Pseudomonas or ESBL-producing organisms."
    },
    {
        g: "Vancomycin", b: "Vancocin (oral); generic (IV)", c: "Glycopeptide Antibiotic", cat: "abx",
        m: "Bactericidal glycopeptide that inhibits bacterial cell wall synthesis by binding to D-ala-D-ala terminus of peptidoglycan precursors. Reserved for serious gram-positive infections including MRSA. Oral form is NOT absorbed — used only for C. difficile colitis (stays in GI tract).",
        ind: "IV: MRSA infections (pneumonia, bacteremia, endocarditis, osteomyelitis, skin/soft tissue). Serious gram-positive infections when penicillins/cephalosporins cannot be used. Surgical prophylaxis in penicillin-allergic patients. ORAL: C. difficile colitis (pseudomembranous colitis).",
        con: "Known hypersensitivity. Use with caution in renal impairment and hearing impairment.",
        aec: "Nausea. Chills. Phlebitis at IV site. Fever.",
        aes: "RED MAN SYNDROME (vancomycin flushing syndrome) — flushing, rash, pruritus, hypotension, tachycardia from rapid infusion. NOT true allergy — slow infusion rate. NEPHROTOXICITY — monitor BUN/Cr, trough levels. OTOTOXICITY — tinnitus, vertigo, hearing loss. Thrombophlebitis. Neutropenia (prolonged use).",
        inter: [
            {d: "Aminoglycosides (Gentamicin)", m: "ADDITIVE nephrotoxicity and ototoxicity — monitor closely.", s: "high"},
            {d: "Loop Diuretics (Furosemide)", m: "Additive ototoxicity.", s: "high"},
            {d: "Amphotericin B", m: "Additive nephrotoxicity.", s: "high"},
            {d: "NSAIDs", m: "Increased vancomycin levels in neonates.", s: "med"}
        ],
        dosage: "IV: 15-20mg/kg every 8-12 hours (typically 1-1.5g every 12 hours). Target trough: 10-20 mcg/mL (higher for serious infections). Oral (C. diff): 125mg PO every 6 hours for 10 days. Loading dose may be used for serious infections.",
        admin: "IV: infuse over AT LEAST 60 MINUTES (ideally 1-2 hours) to prevent Red Man Syndrome. Monitor peak and trough levels. Oral: for C. diff ONLY — not absorbed systemically. Dose adjust in renal impairment.",
        nurse: "⚠️ RED MAN SYNDROME is NOT an allergy — caused by rapid infusion. Slow the rate; may premedicate with antihistamine. Do NOT confuse with anaphylaxis (which requires epinephrine). Monitor PEAK and TROUGH levels — trough before 4th dose. NEPHROTOXIC: check BUN/Cr, urine output. OTOTOXIC: ask about hearing changes, tinnitus, vertigo. IV site: rotate due to phlebitis risk. Oral vancomycin is for C. diff ONLY — not absorbed for systemic infections."
    }
];
