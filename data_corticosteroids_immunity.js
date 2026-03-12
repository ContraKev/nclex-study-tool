/* Block 4 — Corticosteroids, Immunity & Gout Agents (11 drugs)
   Source: immunity_corticosteroids_drjames.txt */

const data_corticosteroids_immunity = [
    {
        g: "Prednisone", b: "Deltasone, Rayos", c: "Systemic Glucocorticoid (Oral)", cat: "immun",
        m: "Synthetic glucocorticoid that is converted to active prednisolone in the liver. Produces potent ANTI-INFLAMMATORY, IMMUNOSUPPRESSIVE, and anti-proliferative effects by inhibiting phospholipase A2, reducing prostaglandin/leukotriene synthesis, and suppressing cytokine production. Prototype oral corticosteroid.",
        ind: "Inflammatory and autoimmune conditions: rheumatoid arthritis, SLE, inflammatory bowel disease, severe asthma/COPD exacerbations, allergic reactions. Transplant rejection prophylaxis. Adrenal insufficiency (replacement). Cancer chemotherapy regimens. Multiple sclerosis exacerbations.",
        con: "Systemic fungal infections. Live virus vaccines during immunosuppressive doses. Active untreated infections. Caution: diabetes, osteoporosis, peptic ulcer disease, hypertension, glaucoma, psychiatric disorders.",
        aec: "METABOLIC: Hyperglycemia (steroid-induced diabetes), increased appetite, weight gain, fluid retention. MUSCULOSKELETAL: Muscle weakness, bone loss. GI: Dyspepsia, increased appetite. CNS: Insomnia, mood changes. Mineralocorticoid effects: Edema, hypokalemia, hypertension.",
        aes: "ADRENAL SUPPRESSION (with prolonged use — requires TAPER). Osteoporosis and fractures. Peptic ulcer/GI bleeding (especially with NSAIDs). Immunosuppression → serious infections. Cushing syndrome (moon face, buffalo hump, striae). Psychosis, depression. Cataracts, glaucoma. Increased cardiovascular risk. Growth suppression in children.",
        inter: [
            {d: "NSAIDs", m: "INCREASED GI bleeding risk — avoid combination if possible.", s: "high"},
            {d: "Loop/Thiazide Diuretics", m: "Additive HYPOKALEMIA.", s: "high"},
            {d: "Warfarin", m: "May enhance OR reduce anticoagulant effect — monitor INR closely.", s: "med"},
            {d: "Live Vaccines", m: "Immunosuppression → risk of vaccine-induced infection.", s: "high"},
            {d: "Diabetes Medications", m: "Steroids cause hyperglycemia → may need dose adjustment.", s: "med"}
        ],
        dosage: "Highly variable by indication. Anti-inflammatory: 5-60mg/day PO in divided doses or once daily. Acute exacerbations: 40-60mg/day × 5-10 days. Maintenance: lowest effective dose. Taper required after >2 weeks of use.",
        admin: "Oral (tablets, liquid). Take with FOOD to reduce GI upset. Once-daily dosing usually in the MORNING (mimics physiologic cortisol pattern). Long-term use requires TAPERING — do NOT stop abruptly.",
        nurse: "⚠️ NEVER stop abruptly after prolonged use — causes adrenal crisis. TAPER required to allow adrenal gland recovery. Give in MORNING to mimic natural cortisol rhythm and reduce insomnia. Monitor blood glucose (especially diabetics). Watch for signs of infection (may be masked). Assess for GI symptoms. Monitor weight, BP, potassium. Long-term: monitor bone density, eye exams. Educate patient about Cushing syndrome signs. Carry steroid card for emergencies."
    },
    {
        g: "Methylprednisolone", b: "Solu-Medrol (IV); Medrol (oral); Depo-Medrol (IM)", c: "Systemic Glucocorticoid (IV/Oral)", cat: "immun",
        m: "Synthetic glucocorticoid with potent anti-inflammatory and immunosuppressive effects. Has HIGHER anti-inflammatory potency than prednisone with LESS mineralocorticoid (salt-retaining) activity. IV form (Solu-Medrol) used for rapid effect in acute situations.",
        ind: "Acute severe inflammatory conditions requiring rapid effect: Acute asthma exacerbation, COPD exacerbation, anaphylaxis (adjunct), acute MS relapse (high-dose pulse therapy), severe allergic reactions, acute transplant rejection, spinal cord injury (controversial).",
        con: "Same as prednisone: systemic fungal infections, live vaccines. Caution with GI ulceration, diabetes, hypertension, osteoporosis, psychiatric history.",
        aec: "Same as prednisone but LESS fluid retention and hypokalemia (less mineralocorticoid effect). Insomnia, mood changes, hyperglycemia, increased appetite, GI upset.",
        aes: "Adrenal suppression with prolonged use. Immunosuppression and infection risk. Osteoporosis. GI bleeding (especially with NSAIDs). Psychiatric effects (psychosis at high doses). Hyperglycemia.",
        inter: [
            {d: "NSAIDs", m: "Increased GI bleeding risk.", s: "high"},
            {d: "CYP3A4 Inducers (Rifampin, Phenytoin)", m: "Decreased corticosteroid effect — may need higher dose.", s: "med"},
            {d: "CYP3A4 Inhibitors (Ketoconazole)", m: "Increased corticosteroid levels and toxicity.", s: "med"},
            {d: "Live Vaccines", m: "Risk of disseminated infection.", s: "high"}
        ],
        dosage: "IV (Solu-Medrol): 10-250mg depending on indication. MS pulse therapy: 1g IV daily × 3-5 days. Acute asthma: 40-125mg IV every 6 hours. Oral (Medrol): 4-48mg/day. Dose pack (Medrol Dosepak): 6-day taper starting at 24mg.",
        admin: "IV (Solu-Medrol) for acute situations — infuse over 30+ minutes for large doses. Oral (Medrol) with food. Medrol Dosepak provides built-in taper schedule for short-term use.",
        nurse: "IV preferred for acute exacerbations when rapid effect needed. Medrol Dosepak is convenient for short courses but FOLLOW the taper schedule exactly. Less fluid retention than prednisone — may be preferred in heart failure or hypertension. High-dose IV pulse therapy (MS, transplant) requires close monitoring. Same adrenal suppression concerns — taper after prolonged use."
    },
    {
        g: "Dexamethasone", b: "Decadron", c: "Systemic Glucocorticoid (High Potency)", cat: "immun",
        m: "Synthetic glucocorticoid with VERY HIGH POTENCY (25-30× more potent than hydrocortisone) and LONG DURATION (36-72 hours). Has essentially NO mineralocorticoid activity (no salt/water retention). Crosses blood-brain barrier well — used for cerebral edema.",
        ind: "Cerebral edema (brain tumors, head injury). Severe inflammatory conditions. Nausea/vomiting prophylaxis with chemotherapy (highly effective antiemetic). Bacterial meningitis (reduces inflammation). COVID-19 (hospitalized patients requiring oxygen). Croup in children. Adrenal function testing.",
        con: "Systemic fungal infections. Live vaccines. Cerebral malaria. Same cautions as other corticosteroids.",
        aec: "Hyperglycemia (very common), insomnia (very long duration), increased appetite, mood changes, GI upset. Minimal fluid retention (no mineralocorticoid effect).",
        aes: "Profound adrenal suppression with prolonged use (very long half-life). Severe hyperglycemia. Immunosuppression. Psychiatric effects. Osteoporosis. Proximal myopathy.",
        inter: [
            {d: "NSAIDs", m: "Increased GI bleeding risk.", s: "high"},
            {d: "CYP3A4 Inducers (Phenytoin, Rifampin, Phenobarbital)", m: "Decreased dexamethasone effect.", s: "med"},
            {d: "Diabetes Medications", m: "Significant hyperglycemia — may need substantial dose increase.", s: "high"}
        ],
        dosage: "Cerebral edema: 10mg IV initially, then 4mg IV/IM every 6 hours. Chemotherapy antiemetic: 8-20mg IV before chemo. Croup: 0.6mg/kg PO/IM single dose. COVID-19: 6mg daily × 10 days.",
        admin: "Oral, IV, IM. Long half-life allows once-daily or less frequent dosing. Often given as single doses or short courses. Oral solution available for children.",
        nurse: "HIGHEST POTENCY corticosteroid — small doses produce large effects. Very long duration (36-72 hours) means effects persist. SEVERE insomnia common — avoid evening dosing when possible. Monitor glucose closely — significant hyperglycemia even in non-diabetics. No fluid retention (useful in cerebral edema, heart failure). Effective antiemetic for chemotherapy. Single-dose for croup is very effective."
    },
    {
        g: "Hydrocortisone", b: "Cortef (oral); Solu-Cortef (IV); various topical brands", c: "Glucocorticoid (Natural Cortisol Equivalent)", cat: "immun",
        m: "Identical to natural CORTISOL produced by adrenal glands. Has both glucocorticoid AND mineralocorticoid activity. Used as physiologic REPLACEMENT in adrenal insufficiency and for its anti-inflammatory effects. LOWEST potency among systemic corticosteroids.",
        ind: "ADRENAL INSUFFICIENCY (Addison's disease) — primary replacement therapy. Acute adrenal crisis (IV). Inflammatory conditions (less common than prednisone due to mineralocorticoid effects). Topical: inflammatory skin conditions (eczema, dermatitis, rashes).",
        con: "Systemic fungal infections. Live vaccines at immunosuppressive doses. Caution: fluid retention conditions (CHF, HTN — has mineralocorticoid effect).",
        aec: "Mineralocorticoid effects: Sodium/water retention, edema, hypertension, hypokalemia. Hyperglycemia, GI upset, mood changes, insomnia.",
        aes: "Same as other corticosteroids but MORE likely to cause fluid retention and hypokalemia due to mineralocorticoid activity. Adrenal suppression with supraphysiologic doses.",
        inter: [
            {d: "NSAIDs", m: "Increased GI bleeding risk.", s: "high"},
            {d: "Diuretics", m: "Additive hypokalemia.", s: "med"},
            {d: "Antihypertensives", m: "May reduce efficacy due to fluid retention.", s: "med"}
        ],
        dosage: "Adrenal insufficiency replacement: 15-25mg/day PO in divided doses (2/3 AM, 1/3 PM to mimic circadian rhythm). Acute adrenal crisis: 100mg IV bolus, then 50-100mg IV every 8 hours. Stress dosing: 2-3× maintenance dose.",
        admin: "Oral (tablets), IV (Solu-Cortef), IM, topical. For adrenal insufficiency: divide dose to mimic natural cortisol pattern (larger AM dose). IV for acute crisis. Topical for skin conditions.",
        nurse: "PHYSIOLOGIC REPLACEMENT for adrenal insufficiency — mimics body's natural cortisol. Patients need STRESS DOSING (double or triple dose) during illness, surgery, trauma — adrenal glands cannot respond to stress. Teach patients to carry emergency injection kit and wear medical alert. More fluid retention than synthetic steroids (prednisone, dexamethasone). Monitor electrolytes. For adrenal crisis: IV hydrocortisone is life-saving."
    },
    {
        g: "Methotrexate", b: "Rheumatrex, Trexall, Otrexup", c: "DMARD (Immunomodulator/Antimetabolite)", cat: "immun",
        m: "Folic acid ANTAGONIST that inhibits dihydrofolate reductase, blocking DNA/RNA synthesis in rapidly dividing cells. At LOW DOSES used for autoimmune disease, acts as immunomodulator by suppressing inflammatory cytokines and lymphocyte proliferation. ANCHOR DRUG for rheumatoid arthritis.",
        ind: "Rheumatoid arthritis (first-line DMARD). Psoriasis and psoriatic arthritis. Juvenile idiopathic arthritis. Inflammatory bowel disease. Ectopic pregnancy. Cancer chemotherapy (high doses).",
        con: "PREGNANCY (Category X — teratogenic). Breastfeeding. Alcoholism or liver disease. Pre-existing bone marrow suppression. Immunodeficiency. Active infection. Severe renal impairment.",
        aec: "GI: Nausea, vomiting, stomatitis (mouth ulcers), diarrhea, anorexia. Fatigue, headache, dizziness. Hair thinning.",
        aes: "BONE MARROW SUPPRESSION (anemia, leukopenia, thrombocytopenia — check CBC). HEPATOTOXICITY (monitor LFTs). PULMONARY TOXICITY (pneumonitis — rare but serious). Ulcerative stomatitis. Severe infections due to immunosuppression. Folic acid deficiency.",
        inter: [
            {d: "NSAIDs", m: "Decrease methotrexate clearance → increased toxicity.", s: "high"},
            {d: "Trimethoprim-Sulfamethoxazole (Bactrim)", m: "Additive antifolate effect → severe bone marrow suppression.", s: "high"},
            {d: "Proton Pump Inhibitors", m: "May increase methotrexate levels.", s: "med"},
            {d: "Penicillins", m: "Decrease renal clearance of methotrexate.", s: "med"},
            {d: "Live Vaccines", m: "Risk of disseminated infection.", s: "high"}
        ],
        dosage: "RA/Psoriasis: 7.5-25mg PO/SC ONCE WEEKLY. Start low (7.5-10mg) and titrate. Cancer: much higher doses (varies by protocol). WEEKLY dosing is critical — daily dosing causes fatal toxicity.",
        admin: "Oral tablets or subcutaneous injection. ⚠️ ONCE WEEKLY dosing — fatal if given daily by mistake. Take with folic acid supplementation (1mg daily or 5mg weekly) to reduce toxicity. Take on same day each week.",
        nurse: "⚠️ CRITICAL: Methotrexate for RA/psoriasis is dosed ONCE WEEKLY — daily dosing is FATAL. Verify weekly dosing at every encounter. Prescribe with FOLIC ACID (reduces hepatotoxicity, GI symptoms, stomatitis). Monitor: CBC with differential, LFTs, creatinine at baseline and regularly. Warn about infection signs. Avoid alcohol (hepatotoxicity). Effective contraception required — teratogenic. Report mouth sores, unusual bruising, dyspnea immediately."
    },
    {
        g: "Hydroxychloroquine", b: "Plaquenil", c: "DMARD (Antimalarial)", cat: "immun",
        m: "Antimalarial drug with immunomodulatory properties. Exact mechanism in autoimmune disease unclear but may involve: inhibiting antigen processing, decreasing cytokine production, and stabilizing lysosomal membranes. SLOW onset (3-6 months for full effect).",
        ind: "Rheumatoid arthritis (mild disease or in combination). Systemic lupus erythematosus (SLE) — considered standard of care. Malaria prophylaxis and treatment. Sjögren syndrome.",
        con: "Pre-existing retinal or visual field changes. Known hypersensitivity. G6PD deficiency (risk of hemolysis). Psoriasis (may worsen).",
        aec: "GI: Nausea, vomiting, diarrhea, abdominal cramps. Headache, dizziness. Skin rash, pruritus. Blue-gray skin discoloration (long-term).",
        aes: "⚠️ RETINAL TOXICITY — can cause IRREVERSIBLE BLINDNESS with long-term use. Corneal deposits. Cardiomyopathy (rare). QT prolongation. Hemolysis in G6PD deficiency. Bone marrow suppression (rare).",
        inter: [
            {d: "Digoxin", m: "Increased digoxin levels.", s: "med"},
            {d: "QT-Prolonging Drugs", m: "Additive QT prolongation risk.", s: "med"},
            {d: "Antacids", m: "May decrease hydroxychloroquine absorption — separate by 4 hours.", s: "low"}
        ],
        dosage: "RA: 200-400mg PO daily (usually 200mg twice daily or 400mg once daily). SLE: 200-400mg daily. Malaria prophylaxis: 400mg weekly. Maximum 5mg/kg/day based on ideal body weight to minimize retinal toxicity.",
        admin: "Oral tablets. Take with food or milk to reduce GI upset. May take 3-6 MONTHS to see full therapeutic effect in autoimmune disease.",
        nurse: "⚠️ RETINAL TOXICITY: Baseline eye exam required, then ANNUAL ophthalmologic screening after 5 years of use (or earlier with risk factors). Risk increases with cumulative dose and duration. Use ideal body weight for dosing (reduces retinal risk). SLOW ONSET — takes 3-6 months for benefit; patient education critical to prevent discontinuation. Generally well-tolerated DMARD. Monitor CBC periodically."
    },
    {
        g: "Cyclosporine", b: "Sandimmune, Neoral, Gengraf", c: "Immunosuppressant (Calcineurin Inhibitor)", cat: "immun",
        m: "Inhibits CALCINEURIN, blocking T-lymphocyte activation and IL-2 production. Produces potent, selective immunosuppression without bone marrow suppression. Critical for transplant rejection prevention.",
        ind: "Prevention of organ TRANSPLANT REJECTION (kidney, liver, heart). Severe rheumatoid arthritis. Severe psoriasis. Atopic dermatitis. Nephrotic syndrome. Graft-versus-host disease.",
        con: "Uncontrolled hypertension. Uncontrolled infection. Malignancy (relative). Renal dysfunction. Concomitant nephrotoxic drugs.",
        aec: "NEPHROTOXICITY (dose-related — most common). HYPERTENSION. Tremor, headache. Hirsutism (excess hair growth). Gingival hyperplasia. Hyperlipidemia. Hyperkalemia. GI upset.",
        aes: "NEPHROTOXICITY — can cause permanent renal damage. Increased infection risk (immunosuppression). Increased malignancy risk (especially lymphoma, skin cancer). Hepatotoxicity. Seizures (with hypomagnesemia). Posterior reversible encephalopathy syndrome (PRES).",
        inter: [
            {d: "Grapefruit Juice", m: "INHIBITS CYP3A4 → markedly increased cyclosporine levels → TOXICITY. AVOID.", s: "high"},
            {d: "CYP3A4 Inhibitors (Ketoconazole, Erythromycin, Diltiazem)", m: "Increased cyclosporine levels → nephrotoxicity.", s: "high"},
            {d: "CYP3A4 Inducers (Rifampin, Phenytoin, St. John's Wort)", m: "Decreased levels → transplant rejection.", s: "high"},
            {d: "Nephrotoxic Drugs (Aminoglycosides, Amphotericin B, NSAIDs)", m: "Additive nephrotoxicity.", s: "high"},
            {d: "Potassium-Sparing Diuretics, ACE Inhibitors", m: "Additive hyperkalemia.", s: "med"}
        ],
        dosage: "Transplant: 10-15mg/kg/day initially, then tapered based on levels. RA/Psoriasis: 2.5-4mg/kg/day divided twice daily. THERAPEUTIC DRUG MONITORING required — target trough levels vary by indication and time post-transplant.",
        admin: "Oral (Neoral is microemulsion formulation with better absorption than Sandimmune — NOT interchangeable). IV available. Take at consistent times. AVOID grapefruit. Monitor drug levels.",
        nurse: "THERAPEUTIC DRUG MONITORING required — measure trough levels. NEPHROTOXICITY is dose-limiting — monitor creatinine and BUN closely. Monitor BP (hypertension common). ⚠️ NO GRAPEFRUIT — dramatically increases levels. Watch for gingival hyperplasia (oral hygiene important). Hirsutism distressing to patients. Neoral and Sandimmune are NOT interchangeable. Increased cancer risk with long-term use — sun protection, skin exams."
    },
    {
        g: "Etanercept", b: "Enbrel", c: "Biologic DMARD (TNF Antagonist)", cat: "immun",
        m: "Recombinant fusion protein that binds and neutralizes TUMOR NECROSIS FACTOR (TNF), a key inflammatory cytokine in autoimmune disease. Reduces joint inflammation and slows structural joint damage in RA.",
        ind: "Rheumatoid arthritis. Psoriatic arthritis. Ankylosing spondylitis. Plaque psoriasis. Juvenile idiopathic arthritis. Often used when conventional DMARDs (methotrexate) fail.",
        con: "Active INFECTION (including localized). Sepsis. ⚠️ LATENT TUBERCULOSIS (must screen and treat before starting). Heart failure (NYHA Class III-IV). Demyelinating disorders (MS). Live vaccines.",
        aec: "INJECTION SITE REACTIONS (redness, swelling, itching — common, usually mild). Upper respiratory infections. Headache.",
        aes: "⚠️ SERIOUS INFECTIONS (bacterial, viral, fungal, opportunistic — including TB reactivation). Blood dyscrasias (pancytopenia, aplastic anemia). Heart failure exacerbation. Demyelinating disease. Lupus-like syndrome. MALIGNANCY (lymphoma risk increased, especially in children/adolescents). Stevens-Johnson syndrome (rare).",
        inter: [
            {d: "Live Vaccines", m: "Risk of disseminated infection — avoid.", s: "high"},
            {d: "Other Biologics (Abatacept, Anakinra)", m: "Increased infection risk — do not combine.", s: "high"},
            {d: "Methotrexate", m: "Often used together for enhanced efficacy — monitor for additive immunosuppression.", s: "med"}
        ],
        dosage: "Adults: 50mg SC once weekly OR 25mg SC twice weekly. Pediatric JIA: 0.8mg/kg SC weekly (max 50mg).",
        admin: "Subcutaneous injection only. Rotate injection sites. Available as prefilled syringe or autoinjector (SureClick). Refrigerate; allow to warm to room temperature before injection.",
        nurse: "⚠️ SCREEN FOR TUBERCULOSIS (TST or IGRA) before starting — TB reactivation can be fatal. Treat latent TB before initiating. Monitor for signs of infection — hold during active infection. Teach proper injection technique and site rotation. Injection site reactions usually resolve with continued use. Do NOT give live vaccines. BLACK BOX WARNING for serious infections and malignancy. Monitor CBC periodically."
    },
    {
        g: "Colchicine", b: "Colcrys, Mitigare", c: "Anti-Gout (Anti-Inflammatory)", cat: "immun",
        m: "Binds to TUBULIN in neutrophils, disrupting microtubule formation and inhibiting neutrophil migration to sites of urate crystal deposition. Reduces the inflammatory response to gout without affecting uric acid levels. Does NOT lower uric acid.",
        ind: "ACUTE GOUT ATTACKS (most effective when started within 12-24 hours of attack onset). Gout prophylaxis during urate-lowering therapy initiation. Familial Mediterranean fever. Pericarditis.",
        con: "Severe renal impairment combined with hepatic impairment (increased toxicity). Concurrent use of P-glycoprotein or strong CYP3A4 inhibitors in renal/hepatic impairment.",
        aec: "GI effects (dose-related): DIARRHEA (most common — often dose-limiting), nausea, vomiting, abdominal pain/cramping.",
        aes: "Severe GI toxicity (bloody diarrhea, dehydration). BONE MARROW SUPPRESSION (aplastic anemia, agranulocytosis, thrombocytopenia). Rhabdomyolysis (muscle breakdown — especially with statins). Peripheral neuropathy. Multi-organ failure with overdose.",
        inter: [
            {d: "Grapefruit Juice", m: "Inhibits CYP3A4 → increased colchicine levels → toxicity.", s: "high"},
            {d: "Strong CYP3A4 Inhibitors (Clarithromycin, Ketoconazole, Ritonavir)", m: "Markedly increased colchicine levels → fatal toxicity possible. Reduce dose or avoid.", s: "high"},
            {d: "P-glycoprotein Inhibitors (Cyclosporine)", m: "Increased colchicine levels.", s: "high"},
            {d: "Statins", m: "Increased risk of RHABDOMYOLYSIS and myopathy.", s: "high"}
        ],
        dosage: "Acute gout: 1.2mg at first sign, then 0.6mg one hour later (max 1.8mg per attack). Current low-dose regimen is as effective as high-dose with less toxicity. Prophylaxis: 0.6mg once or twice daily.",
        admin: "Oral. Start as EARLY as possible during acute attack (within 12-24 hours). Do not repeat acute dosing for at least 3 days. Take with or without food.",
        nurse: "Most effective when started EARLY in acute gout attack (within 12-24 hours of symptom onset). LOW-DOSE regimen now standard — high doses caused severe GI toxicity. DIARRHEA is most common side effect and signals to stop drug. Avoid grapefruit juice. Warn about drug interactions (especially clarithromycin, statins). Does NOT lower uric acid — use with allopurinol for long-term management. Monitor CBC with long-term use. Report muscle pain/weakness (rhabdomyolysis)."
    },
    {
        g: "Allopurinol", b: "Zyloprim, Aloprim", c: "Xanthine Oxidase Inhibitor (Urate-Lowering)", cat: "immun",
        m: "Inhibits XANTHINE OXIDASE, the enzyme that converts hypoxanthine → xanthine → uric acid. Reduces uric acid PRODUCTION. Lowers serum uric acid levels over time, reducing urate crystal deposition and preventing gout attacks.",
        ind: "Chronic GOUT (hyperuricemia management to prevent attacks). Hyperuricemia from cancer chemotherapy (tumor lysis syndrome prophylaxis). Recurrent calcium oxalate kidney stones with hyperuricosuria.",
        con: "Acute gout attack (do not START during acute attack — may worsen). Known hypersensitivity. HLA-B*5801 positive patients (higher risk of severe hypersensitivity — common in certain Asian populations).",
        aec: "Gout flares (common when starting — urate mobilization). Skin rash. GI upset (nausea, diarrhea). Headache, drowsiness.",
        aes: "⚠️ HYPERSENSITIVITY SYNDROME (fever, rash, eosinophilia, hepatitis, renal failure — can be FATAL). Severe skin reactions (Stevens-Johnson syndrome, toxic epidermal necrolysis — SJS/TEN). Hepatotoxicity. Bone marrow suppression (rare).",
        inter: [
            {d: "Azathioprine, 6-Mercaptopurine", m: "Allopurinol INHIBITS their metabolism → severe bone marrow toxicity. Reduce azathioprine dose by 75%.", s: "high"},
            {d: "Warfarin", m: "Increased warfarin effect → bleeding risk. Monitor INR.", s: "med"},
            {d: "ACE Inhibitors (Captopril)", m: "Increased hypersensitivity reaction risk.", s: "med"},
            {d: "Thiazide Diuretics", m: "Increased allopurinol toxicity risk.", s: "med"}
        ],
        dosage: "Start LOW: 100mg PO daily, increase by 100mg every 2-4 weeks. Target: serum uric acid < 6 mg/dL. Usual maintenance: 200-300mg daily. Maximum: 800mg/day. Reduce dose in renal impairment.",
        admin: "Oral. Take after meals to reduce GI upset. Increase fluid intake to prevent kidney stones. START LOW, GO SLOW to minimize initial gout flares.",
        nurse: "Do NOT start during ACUTE gout attack — wait until attack resolves. Starting therapy often TRIGGERS gout flares (give colchicine prophylaxis for first 3-6 months). START LOW, GO SLOW — minimizes flares and hypersensitivity. ⚠️ STOP IMMEDIATELY if rash develops — can progress to life-threatening SJS/TEN. Increase fluids (prevents uric acid stones). Monitor uric acid levels — target < 6 mg/dL. Check renal function at baseline and periodically. Long-term therapy required for chronic gout."
    },
    {
        g: "Probenecid", b: "Benemid", c: "Uricosuric Agent", cat: "immun",
        m: "Inhibits RENAL TUBULAR REABSORPTION of uric acid, increasing uric acid excretion in urine. Lowers serum uric acid by enhancing elimination rather than reducing production. Requires adequate renal function to work.",
        ind: "Chronic GOUT (hyperuricemia) when allopurinol is not tolerated. Must have adequate renal function (GFR > 50 mL/min). Also used to prolong penicillin levels (blocks penicillin secretion).",
        con: "Acute gout attack (do not start during attack). Kidney stones (uric acid stones). Renal impairment (GFR < 50 mL/min — ineffective). Blood dyscrasias. Children under 2 years.",
        aec: "GI upset (nausea, vomiting, anorexia). Headache, dizziness. Skin rash. Sore gums.",
        aes: "RENAL CALCULI (uric acid kidney stones — major risk). Renal injury. Hypersensitivity reactions. Aplastic anemia (rare). Hepatic necrosis (rare).",
        inter: [
            {d: "Aspirin/Salicylates", m: "ANTAGONIZE uricosuric effect of probenecid — AVOID even low-dose aspirin.", s: "high"},
            {d: "Penicillins", m: "Probenecid increases penicillin levels (sometimes used therapeutically).", s: "med"},
            {d: "Methotrexate", m: "Decreased methotrexate excretion → toxicity.", s: "high"},
            {d: "NSAIDs (Indomethacin, Naproxen)", m: "Increased NSAID levels.", s: "med"}
        ],
        dosage: "Initial: 250mg PO twice daily × 1 week. Maintenance: 500mg twice daily. Maximum: 2g/day. Adjust based on serum uric acid levels.",
        admin: "Oral. Take with food or antacids to reduce GI upset. INCREASE FLUID INTAKE substantially (at least 2-3 L/day) to prevent uric acid kidney stones. Alkalinize urine if needed.",
        nurse: "⚠️ AVOID ASPIRIN — even low-dose aspirin blocks probenecid's uricosuric effect. HYDRATION is critical — high fluid intake (2-3 L/day) prevents kidney stone formation. May alkalinize urine (potassium citrate) to increase uric acid solubility. Requires adequate kidney function — ineffective if GFR < 50. Less commonly used than allopurinol but good alternative. Not effective for tumor lysis syndrome. Monitor uric acid levels and renal function."
    }
];
