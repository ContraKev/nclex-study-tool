/* Men's Health Medications (8 drugs)
   Testosterone replacement, ED treatments, Prostate cancer
   Source: reproductive_disorders_male.txt, drugs_mens_womens_health.txt */

const data_mens_health = [
    {
        g: "Testosterone", b: "AndroGel, Androderm, Testopel, Depo-Testosterone", c: "Androgen Hormone", cat: "endo",
        m: "Primary male sex hormone (androgen) produced by Leydig cells in testes. Exogenous testosterone replaces or supplements deficient endogenous production. Binds to androgen receptors → promotes development of male characteristics, anabolic effects (muscle mass, bone density), erythropoiesis, and libido.",
        ind: "HYPOGONADISM (primary or secondary testosterone deficiency). Delayed puberty (male). Constitutional delay of growth. Off-label: HIV-associated wasting, anemia. NOT for age-related testosterone decline without symptoms.",
        con: "Prostate cancer (known or suspected). Breast cancer in men. Polycythemia. Severe cardiac, hepatic, or renal disease. Women who are or may become pregnant (teratogenic). Sleep apnea (may worsen).",
        aec: "Acne, oily skin. Injection site reactions. Gynecomastia. Mood changes, irritability. Fluid retention. Headache. Increased hematocrit.",
        aes: "⚠️ POLYCYTHEMIA (increased RBCs → thrombosis risk — monitor hematocrit). Cardiovascular events (MI, stroke — black box warning). Hepatotoxicity (especially oral forms). Sleep apnea worsening. Prostate enlargement. ⚠️ SECONDARY EXPOSURE: Women and children can be exposed via skin contact with gel application sites. Testicular atrophy (exogenous testosterone suppresses natural production). Infertility during treatment.",
        inter: [
            {d: "Anticoagulants (warfarin)", m: "Increases anticoagulant effect — monitor INR.", s: "high"},
            {d: "Insulin, Oral hypoglycemics", m: "May decrease blood glucose — adjust diabetes medications.", s: "med"},
            {d: "Corticosteroids", m: "Additive fluid retention, edema.", s: "med"}
        ],
        dosage: "Gels (AndroGel 1%): 50-100mg daily applied to shoulders/upper arms. Patch (Androderm): 2-6mg/day applied nightly. IM (cypionate/enanthate): 50-400mg every 2-4 weeks. Pellets (Testopel): 150-450mg SC every 3-6 months.",
        admin: "Multiple formulations: Topical gel (most common): Apply to clean, dry skin on shoulders, upper arms, or abdomen — NOT to genitals. Let dry before dressing. Wash hands after. Patch: Apply to back, abdomen, thigh, or upper arm. Rotate sites. IM: Deep gluteal injection using Z-track technique.",
        nurse: "⚠️ SECONDARY EXPOSURE (gels): Women and children must NOT touch application sites — can cause virilization (deepened voice, body hair, clitoral enlargement in women; precocious puberty in children). Cover application site with clothing. Wash area before skin-to-skin contact. ⚠️ Monitor: Hematocrit (stop if >54%), PSA and DRE (prostate monitoring), lipid panel, LFTs. Z-track for IM injections. Patch: NEVER apply to scrotum (Androderm designed for other sites). Gel: let dry completely before dressing. Educate: Testosterone therapy suppresses sperm production — causes infertility during treatment (reversible after stopping)."
    },
    {
        g: "Alprostadil", b: "Caverject, Edex, MUSE", c: "Prostaglandin E1 (PGE1)", cat: "repro",
        m: "Synthetic prostaglandin E1 that causes direct smooth muscle relaxation of corpus cavernosum and dilation of cavernosal arteries. This increases blood flow into erectile tissue → erection. Acts locally; no need for sexual stimulation (unlike PDE5 inhibitors).",
        ind: "ERECTILE DYSFUNCTION — especially when PDE5 inhibitors are contraindicated, ineffective, or not tolerated. ED from vascular, neurogenic, psychogenic, or mixed causes. Diagnostic testing for ED.",
        con: "Conditions predisposing to priapism (sickle cell disease, multiple myeloma, leukemia). Penile implants. Anatomical deformity of penis (Peyronie's). Concurrent anticoagulants (injection form). Urethral stricture (MUSE).",
        aec: "⚠️ PENILE PAIN (most common — 30-50% with injection). Prolonged erection. Penile fibrosis (with repeated injections). Urethral burning (MUSE). Dizziness, hypotension.",
        aes: "⚠️ PRIAPISM (erection >4 hours) — urologic emergency; can cause permanent damage if not treated. Penile fibrosis, plaque formation. Hematoma at injection site. Syncope (MUSE, due to hypotension).",
        inter: [
            {d: "Anticoagulants", m: "Increased bleeding risk with injection.", s: "med"},
            {d: "Vasoactive drugs", m: "Additive hypotensive effects.", s: "med"},
            {d: "Other ED treatments", m: "Do not combine with other intracavernosal agents.", s: "high"}
        ],
        dosage: "Intracavernosal (Caverject, Edex): Start 2.5mcg, titrate to effective dose (usual 5-40mcg). Max 60mcg/dose, 3×/week with 24hr between doses. Intraurethral (MUSE): 125-1000mcg pellet inserted into urethra.",
        admin: "Intracavernosal: Inject into lateral aspect of proximal third of penis (avoid dorsal veins/nerves). Alternate sides. Patient/partner training required. Intraurethral (MUSE): Urinate first, then insert pellet into urethra using applicator. Roll penis to distribute medication.",
        nurse: "⚠️ PRIAPISM RISK: Teach patient that erection lasting >4 hours requires IMMEDIATE emergency care — permanent damage can occur. First dose should be given in office with monitoring. Teach proper injection technique (avoid visible veins, alternate sides). Injection pain is common — often decreases with continued use. ⚠️ MUSE: Urinate before insertion (facilitates drug distribution). Female partners may experience vaginal burning — barrier contraception recommended. Do not use more than 3×/week. Can be used when PDE5 inhibitors are contraindicated (e.g., patients on nitrates for heart disease)."
    },
    {
        g: "Sildenafil", b: "Viagra, Revatio", c: "Phosphodiesterase-5 (PDE5) Inhibitor", cat: "cv",
        m: "Selectively inhibits phosphodiesterase type 5 (PDE5), the enzyme that breaks down cyclic GMP (cGMP) in corpus cavernosum. Increased cGMP causes smooth muscle relaxation → increased blood flow → erection. ⚠️ REQUIRES SEXUAL STIMULATION to work (stimulation triggers NO release → cGMP production).",
        ind: "ERECTILE DYSFUNCTION (ED). PULMONARY ARTERIAL HYPERTENSION (Revatio — different dosing). Off-label: Raynaud phenomenon, altitude sickness.",
        con: "⚠️ ABSOLUTE: Concurrent NITRATE use (nitroglycerin, isosorbide) — severe, potentially fatal hypotension. Recent stroke or MI. Severe hepatic impairment. Hypotension (<90/50). Hereditary retinal disorders.",
        aec: "Headache (most common). Flushing. Dyspepsia. Nasal congestion. Visual disturbances (blue tinge, light sensitivity). Dizziness.",
        aes: "⚠️ SEVERE HYPOTENSION with nitrates — can be FATAL. ⚠️ PRIAPISM (rare but serious). Sudden hearing loss (rare). Non-arteritic anterior ischemic optic neuropathy (NAION) — sudden vision loss (rare). Cardiac events in patients with pre-existing cardiovascular disease.",
        inter: [
            {d: "Nitrates (nitroglycerin, isosorbide)", m: "⚠️ ABSOLUTE CONTRAINDICATION — severe, potentially fatal hypotension. Do NOT use within 24 hours of nitrate.", s: "high"},
            {d: "Alpha-blockers", m: "Additive hypotension — start low dose, separate by 4+ hours.", s: "high"},
            {d: "CYP3A4 inhibitors (ketoconazole, ritonavir, erythromycin)", m: "Increase sildenafil levels — reduce dose.", s: "med"},
            {d: "Other PDE5 inhibitors", m: "Do not combine.", s: "high"},
            {d: "Grapefruit juice", m: "Increases drug levels.", s: "low"}
        ],
        dosage: "ED: 50mg PO 1 hour before sexual activity. Range 25-100mg based on efficacy/tolerability. Max 100mg/day, once daily only. Elderly, hepatic/renal impairment, concurrent CYP3A4 inhibitors: start 25mg. PAH (Revatio): 20mg PO TID.",
        admin: "Oral. Take 30-60 minutes before sexual activity. Can take with or without food (high-fat meal delays absorption). Effects last 4-5 hours. NOT an aphrodisiac — requires sexual stimulation.",
        nurse: "⚠️ NITRATE CHECK IS CRITICAL: Before giving, confirm patient is NOT on ANY nitrates (nitroglycerin SL, patch, spray, isosorbide, amyl nitrite 'poppers'). Combination causes severe, potentially fatal hypotension. ⚠️ If chest pain occurs after taking sildenafil: Do NOT give nitroglycerin — call 911. Teach: Take 30-60 min before activity; requires sexual stimulation; only once daily; report erection >4 hours (priapism). Blue-tinted vision is temporary side effect. Avoid grapefruit juice. Not for use in women or children (except PAH)."
    },
    {
        g: "Tadalafil", b: "Cialis, Adcirca", c: "Phosphodiesterase-5 (PDE5) Inhibitor", cat: "cv",
        m: "Same mechanism as sildenafil — inhibits PDE5 → increases cGMP → smooth muscle relaxation → erection. Distinguishing feature: VERY LONG DURATION (up to 36 hours) — nicknamed 'the weekend pill.' Also relaxes smooth muscle in prostate/bladder → used for BPH.",
        ind: "Erectile dysfunction. BENIGN PROSTATIC HYPERPLASIA (BPH) — only PDE5 inhibitor with this FDA indication. Pulmonary arterial hypertension (Adcirca). ED + BPH combination.",
        con: "Same as sildenafil: Nitrate use, recent MI/stroke, severe hypotension, hepatic impairment.",
        aec: "Headache, dyspepsia, back pain, myalgia (unique to tadalafil), nasal congestion, flushing.",
        aes: "Same as sildenafil: Severe hypotension with nitrates, priapism, sudden hearing/vision loss, NAION.",
        inter: [
            {d: "Nitrates", m: "⚠️ CONTRAINDICATED — do not use within 48 hours (longer than sildenafil due to long half-life).", s: "high"},
            {d: "Alpha-blockers", m: "Additive hypotension — use caution, stable alpha-blocker dose first.", s: "high"},
            {d: "CYP3A4 inhibitors", m: "Increase tadalafil levels — max 10mg/72 hours with strong inhibitors.", s: "med"}
        ],
        dosage: "ED (as needed): 10mg before activity, may increase to 20mg. Max once/day. ED (daily): 2.5-5mg once daily (allows spontaneity). BPH or ED+BPH: 5mg once daily. PAH (Adcirca): 40mg once daily.",
        admin: "Oral. As-needed dosing: take before anticipated activity (can work up to 36 hours). Daily dosing: take at same time each day. Can take with or without food.",
        nurse: "⚠️ NITRATE WINDOW IS LONGER: Due to 36-hour duration, avoid nitrates for 48 hours after tadalafil (vs 24 hours for sildenafil). Unique features: Daily dosing option allows spontaneity; approved for BPH (improves urinary symptoms). Back pain and myalgia are more common than with sildenafil. Same critical teaching about nitrates and priapism. Long duration may be preferred by some patients (more natural timing)."
    },
    {
        g: "Bicalutamide", b: "Casodex", c: "Non-Steroidal Antiandrogen", cat: "repro",
        m: "Competitively blocks ANDROGEN RECEPTORS, preventing testosterone and DHT from binding. Does not lower testosterone levels — blocks its action at the receptor. Used with GnRH agonists (Lupron) for COMBINED ANDROGEN BLOCKADE in prostate cancer.",
        ind: "PROSTATE CANCER — metastatic, in combination with GnRH agonist (combined androgen blockade). Also used to block initial testosterone flare when starting GnRH agonist.",
        con: "Hypersensitivity. Women (especially pregnant — antiandrogenic effects on male fetus). Severe hepatic impairment.",
        aec: "Hot flashes (common). Gynecomastia, breast pain. Diarrhea. Asthenia. Nausea. Peripheral edema.",
        aes: "⚠️ HEPATOTOXICITY — can be severe/fatal. Monitor LFTs. Interstitial pneumonitis (rare). Cardiovascular events (combined with GnRH agonist).",
        inter: [
            {d: "Warfarin", m: "May displace warfarin from protein binding → increased INR. Monitor closely.", s: "high"},
            {d: "CYP3A4 substrates", m: "Bicalutamide inhibits CYP3A4 — may increase levels of some drugs.", s: "med"}
        ],
        dosage: "50mg PO once daily in combination with GnRH agonist. Start same day or before starting GnRH agonist (blocks flare). Take at same time each day.",
        admin: "Oral. Take with or without food. Usually continued for duration of GnRH agonist therapy.",
        nurse: "⚠️ HEPATOTOXICITY: Check LFTs before starting and periodically. Teach signs: jaundice, dark urine, RUQ pain, nausea/vomiting — stop drug and report immediately. Usually given WITH GnRH agonist (like Lupron) — combined androgen blockade is more effective than either alone. Start bicalutamide before or same day as GnRH agonist to prevent testosterone flare. Hot flashes are common — offer comfort measures. Monitor for gynecomastia, breast tenderness."
    },
    {
        g: "Enzalutamide", b: "Xtandi", c: "Androgen Receptor Inhibitor", cat: "repro",
        m: "Second-generation antiandrogen with STRONGER binding to androgen receptors than bicalutamide. Also inhibits nuclear translocation of androgen receptor and DNA binding. Works even in castration-resistant prostate cancer where tumor has upregulated androgen receptors.",
        ind: "CASTRATION-RESISTANT PROSTATE CANCER (CRPC) — metastatic and non-metastatic. Can be used before or after chemotherapy. Also approved for metastatic castration-sensitive prostate cancer.",
        con: "Hypersensitivity. History of seizures (lowers seizure threshold). Pregnancy (Cat X — teratogenic).",
        aec: "Fatigue (very common). Hot flashes. Diarrhea. Musculoskeletal pain. Headache. Hypertension.",
        aes: "⚠️ SEIZURES (rare but serious — avoid in seizure history). Falls and fractures. Ischemic heart disease. Posterior reversible encephalopathy syndrome (PRES — rare). Cognitive impairment.",
        inter: [
            {d: "CYP3A4 substrates", m: "Enzalutamide is a STRONG CYP3A4 inducer — decreases levels of many drugs (warfarin, certain HIV meds, etc.).", s: "high"},
            {d: "CYP2C9, CYP2C19 substrates", m: "Also induces these enzymes.", s: "med"},
            {d: "Drugs that lower seizure threshold", m: "Additive seizure risk.", s: "high"}
        ],
        dosage: "160mg PO once daily (four 40mg capsules). Can be used with or without concurrent GnRH agonist.",
        admin: "Oral capsules. Take at same time each day. Swallow whole with water. Can take with or without food.",
        nurse: "⚠️ SEIZURE RISK: Avoid in patients with seizure history or conditions that lower seizure threshold. If seizure occurs, permanently discontinue. DRUG INTERACTIONS: Enzalutamide strongly induces CYP3A4 — may decrease effectiveness of many drugs including warfarin, HIV meds, some antibiotics. Review all medications carefully. Monitor for falls (especially elderly), fatigue, cognitive changes. Used for castration-resistant disease — cancer progressing despite low testosterone. Continue GnRH agonist (maintain castrate testosterone levels)."
    },
    {
        g: "Abiraterone", b: "Zytiga, Yonsa", c: "CYP17 Inhibitor", cat: "repro",
        m: "Inhibits CYP17A1 enzyme (17α-hydroxylase/C17,20-lyase), which is required for androgen synthesis in the testes, adrenal glands, AND prostate tumor tissue. This provides more complete androgen suppression than GnRH agonists alone, which only suppress testicular testosterone.",
        ind: "METASTATIC PROSTATE CANCER — castration-resistant (CRPC) and high-risk castration-sensitive. Used with prednisone to prevent mineralocorticoid excess.",
        con: "Severe hepatic impairment (Child-Pugh C). ⚠️ MUST be given with prednisone (abiraterone blocks cortisol synthesis → adrenal insufficiency without steroid replacement).",
        aec: "Fatigue. Joint swelling/pain. Edema. Hot flashes. Diarrhea. Hypertension. Hypokalemia.",
        aes: "⚠️ HEPATOTOXICITY — monitor LFTs monthly. Adrenal insufficiency (if prednisone not taken). Hypertension, hypokalemia, fluid retention (mineralocorticoid effects from CYP17 inhibition). Cardiac events.",
        inter: [
            {d: "CYP2D6 substrates", m: "Abiraterone inhibits CYP2D6 — increases levels of some drugs (dextromethorphan, some antidepressants).", s: "med"},
            {d: "Strong CYP3A4 inducers (rifampin, phenytoin)", m: "May decrease abiraterone levels — avoid if possible.", s: "med"},
            {d: "QT-prolonging drugs", m: "Use caution — hypokalemia from abiraterone increases QT risk.", s: "med"}
        ],
        dosage: "Zytiga: 1000mg PO once daily on empty stomach WITH prednisone 5mg BID. Yonsa: 500mg PO once daily WITH methylprednisolone 4mg BID (Yonsa can be taken with or without food).",
        admin: "Oral. ⚠️ Zytiga MUST be taken on EMPTY STOMACH — food dramatically increases absorption → toxicity. Take 1 hour before or 2 hours after meals. ALWAYS take with prednisone. Yonsa (micronized formulation) can be taken with food.",
        nurse: "⚠️ PREDNISONE IS MANDATORY: Abiraterone blocks cortisol synthesis — without prednisone replacement, patient will develop adrenal crisis. Never give abiraterone without concurrent steroid. ⚠️ EMPTY STOMACH (Zytiga): Food increases absorption 5-10× — causes toxicity. Take 1 hour before or 2 hours after eating. Monitor: LFTs monthly initially, BP, potassium (hypokalemia common), signs of fluid retention. Teach: Always take prednisone as prescribed, never skip doses. Continue GnRH agonist if previously on one."
    },
    {
        g: "Sipuleucel-T", b: "Provenge", c: "Autologous Cellular Immunotherapy", cat: "immun",
        m: "Personalized cancer vaccine. Patient's own dendritic cells (APCs) are harvested via leukapheresis, exposed to PAP-GM-CSF fusion protein (prostate cancer antigen), then reinfused. Activated dendritic cells present prostate cancer antigens to T cells → immune attack on prostate cancer cells.",
        ind: "METASTATIC CASTRATION-RESISTANT PROSTATE CANCER (mCRPC) — asymptomatic or minimally symptomatic. NOT indicated for visceral metastases or rapidly progressing disease.",
        con: "Not recommended for patients with visceral metastases or rapidly progressing disease (won't have time to benefit). Active infection (defer until resolved).",
        aec: "⚠️ INFUSION REACTIONS (most common): Chills, fever, fatigue, nausea, headache — typically occur during or within 24 hours of infusion. Back/joint pain.",
        aes: "Severe infusion reactions. Cerebrovascular events (rare). Infections related to leukapheresis catheter. Thromboembolic events.",
        inter: [
            {d: "Immunosuppressants", m: "Theoretical concern that immunosuppression could reduce efficacy — not extensively studied.", s: "med"},
            {d: "Chemotherapy", m: "Avoid concurrent chemotherapy — may suppress immune response. Can sequence before or after.", s: "med"}
        ],
        dosage: "3 infusions, each approximately 2 weeks apart. Each infusion is prepared from a separate leukapheresis procedure. Must be given within 18 hours of final formulation.",
        admin: "IV infusion over 60 minutes. Pre-medicate with acetaminophen and antihistamine 30 minutes before. Three total infusions, each from separate leukapheresis collection.",
        nurse: "⚠️ UNIQUE PREPARATION: This is the patient's OWN cells — verify identity at EVERY step (collection, infusion). Each treatment cycle requires: (1) Leukapheresis (collect cells), (2) Manufacturing (activate cells), (3) Infusion ~3 days later. Premedicate to reduce infusion reactions. Monitor closely during and 1 hour after infusion. Infusion reactions are common but usually manageable — chills, fever, fatigue. Does NOT shrink tumors — extends survival ~4 months. Works by priming immune system — benefit may not be immediately apparent. Schedule all 3 infusions upfront. NOT a cure but extends survival in mCRPC."
    }
];
