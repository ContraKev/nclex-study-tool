/* Women's Health Medications (10 drugs)
   Contraceptives, Emergency Contraception, Vaginitis, HRT, Osteoporosis
   Source: drugs_mens_womens_health.txt, sexually_transmitted_infections.txt */

const data_womens_health = [
    {
        g: "Ethinyl Estradiol/Norethindrone", b: "Ortho-Novum, Loestrin, Junel", c: "Combined Oral Contraceptive (COC)", cat: "repro",
        m: "Combination of synthetic estrogen (ethinyl estradiol) and progestin (norethindrone). Works via MULTIPLE mechanisms: (1) Suppresses GnRH → ↓ FSH/LH → prevents ovulation, (2) Thickens cervical mucus → prevents sperm penetration, (3) Thins endometrium → prevents implantation. Efficacy: >99% with perfect use, ~91% with typical use.",
        ind: "CONTRACEPTION. Menstrual regulation (dysmenorrhea, menorrhagia, irregular cycles). Acne vulgaris. Polycystic ovary syndrome (PCOS). Endometriosis. Primary ovarian insufficiency (hormone replacement).",
        con: "⚠️ ABSOLUTE: Smoking + age >35 (high VTE/stroke risk), history of VTE/PE, known thrombophilia, current/past breast cancer, migraine with aura, uncontrolled hypertension, hepatic disease, undiagnosed vaginal bleeding, pregnancy.",
        aec: "Nausea (especially first 1-3 cycles), breast tenderness, headache, breakthrough bleeding/spotting, mood changes, decreased libido, weight changes.",
        aes: "⚠️ VENOUS THROMBOEMBOLISM (DVT/PE) — risk increases with smoking, age, obesity. Arterial thrombosis (MI, stroke — especially with migraine with aura). Hypertension. Hepatic adenomas (rare). Gallbladder disease. Depression (some women).",
        inter: [
            {d: "Rifampin", m: "SIGNIFICANTLY decreases COC effectiveness — use backup contraception.", s: "high"},
            {d: "Anticonvulsants (phenytoin, carbamazepine, phenobarbital, topiramate)", m: "CYP inducers reduce COC levels — use higher dose or alternative method.", s: "high"},
            {d: "Antibiotics (non-rifampin)", m: "Historically thought to interact; current evidence shows minimal effect except rifampin.", s: "low"},
            {d: "St. John's Wort", m: "Induces CYP3A4 — decreases COC effectiveness.", s: "high"},
            {d: "Lamotrigine", m: "COCs decrease lamotrigine levels — seizure risk.", s: "high"}
        ],
        dosage: "21 active pills + 7 placebo days OR 24 active + 4 placebo (shortened hormone-free interval). Take one pill daily at same time. Can start Day 1 of menses (no backup needed) or Quick Start (backup × 7 days).",
        admin: "Oral. Take at SAME TIME daily for best efficacy. If missed pill <24 hours: take ASAP, continue pack. If missed >24 hours: take missed pill ASAP + backup method × 7 days. If missed 2+ pills in week 3: skip placebo, start new pack (no hormone-free week).",
        nurse: "⚠️ SMOKING ASSESSMENT: ASK about smoking at every visit — combination of COCs + smoking in women >35 dramatically increases clot risk. Teach ACHES warning signs: Abdominal pain (severe), Chest pain, Headache (severe/different), Eye problems (vision changes), Severe leg pain (DVT). Starting new COC: expect spotting × 1-3 months. Missed pills: most pregnancies occur from missed pills in week 1 or extending hormone-free interval. Rifampin interaction is CLINICALLY SIGNIFICANT — must use backup. Annual BP check recommended."
    },
    {
        g: "Etonogestrel/Ethinyl Estradiol Ring", b: "NuvaRing, Annovera", c: "Vaginal Contraceptive Ring", cat: "repro",
        m: "Flexible polymer ring releases continuous low-dose estrogen and progestin directly into vaginal epithelium. Same mechanism as COCs (suppresses ovulation, thickens cervical mucus, thins endometrium). Provides steady hormone levels with lower peak doses than oral pills.",
        ind: "CONTRACEPTION. Similar non-contraceptive benefits as COCs (menstrual regulation, decreased dysmenorrhea).",
        con: "Same as COCs: Smoking + age >35, history of VTE, breast cancer, migraine with aura, uncontrolled HTN, liver disease.",
        aec: "Vaginal discomfort/irritation, increased vaginal discharge, headache, nausea, breakthrough bleeding, breast tenderness. Ring awareness during intercourse (some couples).",
        aes: "Same as COCs: VTE, arterial thrombosis, hypertension. Toxic shock syndrome (very rare). Ring expulsion.",
        inter: [
            {d: "Same as oral COCs", m: "CYP3A4 inducers (rifampin, anticonvulsants, St. John's Wort) decrease effectiveness.", s: "high"}
        ],
        dosage: "NuvaRing: Insert ring, leave in place × 3 weeks, remove × 1 week (withdrawal bleed), insert new ring. Annovera: Reusable ring — same 3 weeks in/1 week out × 13 cycles (1 year).",
        admin: "Intravaginal. Squeeze ring and insert into vagina (exact position doesn't matter — no wrong way). Can remain in place during intercourse. If removed (max 3 hours), rinse and reinsert. Store at room temperature.",
        nurse: "Advantages over pills: Once-monthly maintenance (better compliance), steady hormone levels (less nausea), no daily remembering. Teach insertion: squeeze sides together, insert like tampon. Ring doesn't need to be in specific position — vaginal muscles hold it in place. If ring falls out: rinse with cool water, reinsert within 3 hours. If out >3 hours: backup contraception needed. Partner may feel ring during intercourse — can remove for up to 3 hours if desired. Same ACHES warning signs as pills."
    },
    {
        g: "Norelgestromin/Ethinyl Estradiol Patch", b: "Xulane, Ortho Evra", c: "Transdermal Contraceptive Patch", cat: "repro",
        m: "Adhesive patch delivers estrogen and progestin transdermally. Same mechanism as other combined hormonal contraceptives. Provides steady-state hormone levels without first-pass hepatic metabolism.",
        ind: "CONTRACEPTION. Menstrual regulation.",
        con: "Same as COCs PLUS: Body weight >90 kg (198 lbs) — reduced efficacy. Skin conditions affecting adhesion.",
        aec: "Application site reactions (irritation, redness). Breast tenderness. Headache. Nausea. Breakthrough bleeding. Patch detachment.",
        aes: "⚠️ HIGHER VTE RISK than oral COCs (higher estrogen exposure due to transdermal delivery). Same arterial risks. Skin irritation/hypersensitivity.",
        inter: [
            {d: "Same as oral COCs", m: "CYP3A4 inducers reduce effectiveness.", s: "high"}
        ],
        dosage: "Apply new patch weekly × 3 weeks, then patch-free week (withdrawal bleed). Apply to buttock, abdomen, upper arm, or upper torso — NOT to breasts.",
        admin: "Transdermal. Apply to clean, dry, hairless skin. Press firmly × 10 seconds. Do not apply lotions/oils to area. Change patch same day each week. If patch falls off <24 hours: reapply or use new patch (no backup). If off >24 hours: backup × 7 days.",
        nurse: "⚠️ WEIGHT CONSIDERATION: May be less effective in women >90 kg — consider alternative method. ⚠️ HIGHER VTE RISK than pills — due to higher systemic estrogen exposure. Advantages: Weekly application (better compliance than daily pill). Teach: Do NOT apply to breasts. Rotate application sites. If partially detached: reapply or replace. Patch is waterproof — can swim, shower, exercise. Same ACHES warning signs. Dispose of used patches carefully (still contain hormones)."
    },
    {
        g: "Levonorgestrel IUD", b: "Mirena, Kyleena, Liletta, Skyla", c: "Intrauterine Progestin System", cat: "repro",
        m: "T-shaped device placed in uterus releases levonorgestrel locally. Works via: (1) Thickens cervical mucus, (2) Suppresses endometrium (prevents implantation), (3) May inhibit ovulation (especially Mirena). Very low systemic hormone levels. Efficacy: >99% — one of most effective methods.",
        ind: "⚠️ LONG-ACTING REVERSIBLE CONTRACEPTION (LARC) — 3-7 years depending on brand. Heavy menstrual bleeding (Mirena FDA-approved). Dysmenorrhea. Endometrial protection during estrogen therapy.",
        con: "Current PID or STI. Pregnancy. Uterine anomalies. Unexplained vaginal bleeding. Breast cancer (current). Wilson's disease (for copper IUD, not relevant to hormonal).",
        aec: "Irregular bleeding/spotting (first 3-6 months). Amenorrhea (common after 1 year — beneficial for many women). Cramping at insertion. Ovarian cysts (functional, usually resolve).",
        aes: "⚠️ UTERINE PERFORATION (rare, at insertion). PID (slightly increased risk first 20 days post-insertion). Expulsion (2-10%). Ectopic pregnancy (rare, but if pregnancy occurs, higher proportion are ectopic).",
        inter: [
            {d: "Minimal systemic interactions", m: "Local action with minimal systemic absorption.", s: "low"}
        ],
        dosage: "Mirena: 52mg levonorgestrel, effective × 7 years. Kyleena: 19.5mg, × 5 years. Liletta: 52mg, × 7 years. Skyla: 13.5mg, × 3 years.",
        admin: "Inserted by trained provider during office visit. Optimal timing: during menses (cervix slightly open, confirms not pregnant). Can be inserted immediately postpartum or post-abortion. Check strings monthly.",
        nurse: "⚠️ MOST EFFECTIVE CONTRACEPTION AVAILABLE: >99% efficacy, reversible, long-acting. Teach string check: monthly, feel for strings at cervix (like fishing line). If can't feel strings or feel hard plastic: contact provider (may have expelled or perforated). Amenorrhea is NORMAL and expected — not harmful, many women appreciate no periods. ⚠️ POST-INSERTION: Expect cramping × 24-48 hours (NSAIDs help). Backup × 7 days if not inserted during menses. Warning signs: severe pain, fever, foul discharge (signs of infection/perforation)."
    },
    {
        g: "Levonorgestrel (Emergency)", b: "Plan B One-Step, Take Action, My Way", c: "Emergency Contraceptive", cat: "repro",
        m: "High-dose progestin (levonorgestrel) that works BEFORE pregnancy occurs. Primary mechanism: delays or inhibits ovulation. May also affect sperm transport or endometrium. Does NOT disrupt established pregnancy — NOT an abortifacient. Efficacy: ~89% if taken within 72 hours, decreases with time.",
        ind: "⚠️ EMERGENCY CONTRACEPTION — unprotected intercourse, contraceptive failure (broken condom, missed pills), sexual assault. Most effective within 72 hours, can be used up to 120 hours.",
        con: "Known pregnancy (won't harm fetus but won't work). Hypersensitivity to levonorgestrel.",
        aec: "Nausea (common). Headache. Fatigue. Breast tenderness. Irregular bleeding. Earlier or later next period.",
        aes: "Minimal — very safe. Ectopic pregnancy risk if it fails (not caused by EC, but pre-existing risk).",
        inter: [
            {d: "CYP3A4 inducers", m: "May decrease effectiveness (rifampin, phenytoin, St. John's Wort) — consider higher dose or ulipristal.", s: "med"},
            {d: "Obesity/body weight", m: "May be less effective in women >75 kg — consider ulipristal or copper IUD instead.", s: "med"}
        ],
        dosage: "1.5mg PO × 1 dose AS SOON AS POSSIBLE after unprotected sex. Can be taken up to 120 hours (5 days) but efficacy decreases over time.",
        admin: "Oral. Single dose. No prescription required (OTC for all ages). Take with food if nausea is a concern. Can repeat dose if vomiting occurs within 2 hours.",
        nurse: "⚠️ TIME-SENSITIVE: More effective the sooner it's taken. Available OTC — no age restriction, no ID required. Counsel: This does NOT cause abortion — it prevents pregnancy by delaying ovulation. Safe to use — no lasting side effects. Does NOT affect future fertility. Next period may be early, late, or heavier than normal. If no period within 3 weeks: take pregnancy test. Not as effective as regular contraception — discuss ongoing method. For women >75 kg: ulipristal (Ella) or copper IUD are more effective options."
    },
    {
        g: "Ulipristal", b: "ella", c: "Selective Progesterone Receptor Modulator (SPRM)", cat: "repro",
        m: "Progesterone receptor modulator that delays or inhibits ovulation even when LH surge has begun (more effective than levonorgestrel in late follicular phase). Works up to 120 hours (5 days) with consistent efficacy throughout that window.",
        ind: "⚠️ EMERGENCY CONTRACEPTION — more effective than levonorgestrel, especially days 3-5 and in women with higher body weight.",
        con: "Known pregnancy. Hypersensitivity. Avoid if already taking hormonal contraception (antagonism).",
        aec: "Headache. Nausea. Abdominal pain. Dysmenorrhea. Fatigue.",
        aes: "Minimal serious risks. May affect next menstrual period.",
        inter: [
            {d: "CYP3A4 inducers (rifampin, anticonvulsants)", m: "May decrease effectiveness.", s: "med"},
            {d: "CYP3A4 inhibitors (ketoconazole)", m: "May increase levels.", s: "low"},
            {d: "Hormonal contraceptives", m: "Do not start hormonal contraception for 5 days after ulipristal (antagonism reduces both efficacies).", s: "high"}
        ],
        dosage: "30mg PO × 1 dose. Effective up to 120 hours (5 days) after unprotected intercourse.",
        admin: "Oral. Prescription required (unlike Plan B). Can take with or without food. If vomiting within 3 hours, consider repeat dose.",
        nurse: "⚠️ PRESCRIPTION REQUIRED — unlike Plan B. Advantages over levonorgestrel: (1) Equally effective days 1-5 (levonorgestrel decreases over time), (2) More effective in women with higher BMI. Important: Do NOT start hormonal contraception (pills, patch, ring) for 5 days after taking ulipristal — it will reduce effectiveness of both. Use barrier methods during that time. If copper IUD is desired, that can be placed immediately. Most effective EC after copper IUD."
    },
    {
        g: "Miconazole (Vaginal)", b: "Monistat, Vagistat", c: "Azole Antifungal (Topical)", cat: "abx",
        m: "Imidazole antifungal that inhibits fungal cytochrome P450 enzyme lanosterol 14α-demethylase → blocks ergosterol synthesis → disrupts fungal cell membrane integrity. Topical vaginal application treats local candidal infection with minimal systemic absorption.",
        ind: "⚠️ VULVOVAGINAL CANDIDIASIS (vaginal yeast infection) — OTC availability. Cutaneous candidiasis.",
        con: "First episode of vaginal symptoms (should confirm diagnosis before self-treating). Pregnancy (consult provider). Hypersensitivity to azoles.",
        aec: "Local vaginal burning, itching, irritation (may worsen briefly before improving). Headache. Abdominal cramping.",
        aes: "Allergic reaction (rare). Contact dermatitis.",
        inter: [
            {d: "Warfarin", m: "Even vaginal miconazole can slightly increase INR — monitor.", s: "med"},
            {d: "Latex condoms/diaphragms", m: "Oil-based formulations may weaken latex.", s: "med"}
        ],
        dosage: "Monistat-1 (1200mg suppository): 1 dose at bedtime. Monistat-3 (200mg suppository or 4% cream): daily × 3 days. Monistat-7 (100mg suppository or 2% cream): daily × 7 days. All applied intravaginally at bedtime.",
        admin: "Intravaginal suppository or cream with applicator. Insert at bedtime, remain lying down. Complete full course even if symptoms improve. External cream can be applied to vulva for itching relief.",
        nurse: "⚠️ OTC — APPROPRIATE FOR RECURRENT YEAST INFECTIONS in women who recognize classic symptoms (thick white cottage-cheese discharge, intense itching, no odor). First-time symptoms: see provider to confirm diagnosis (BV, trichomoniasis present differently). Complete FULL course — symptoms may resolve before infection is cleared. Symptoms may temporarily worsen (burning) before improving. ⚠️ If no improvement in 3 days or symptoms recur within 2 months: see provider (may be resistant strain, wrong diagnosis, or underlying condition like diabetes)."
    },
    {
        g: "Fluconazole (Oral)", b: "Diflucan", c: "Triazole Antifungal", cat: "abx",
        m: "Triazole antifungal that inhibits fungal cytochrome P450 enzyme (14α-demethylase), blocking ergosterol synthesis. Oral administration provides systemic treatment reaching vaginal tissue. Fungistatic at typical doses.",
        ind: "⚠️ VULVOVAGINAL CANDIDIASIS — single-dose oral cure (convenient alternative to topical therapy). Oropharyngeal/esophageal candidiasis. Systemic fungal infections. Cryptococcal meningitis.",
        con: "QT prolongation or concurrent QT-prolonging drugs. Pregnancy (teratogenic in high doses — avoid especially first trimester). Severe hepatic impairment. Known hypersensitivity to azoles.",
        aec: "Headache, nausea, abdominal pain, diarrhea. Rash.",
        aes: "⚠️ HEPATOTOXICITY (rare but can be severe). QT prolongation → Torsades de pointes. Stevens-Johnson syndrome (rare). Anaphylaxis (rare).",
        inter: [
            {d: "Warfarin", m: "Significantly INCREASES warfarin effect — monitor INR closely.", s: "high"},
            {d: "Sulfonylureas (glipizide, glyburide)", m: "Increases hypoglycemia risk.", s: "high"},
            {d: "Statins (simvastatin, atorvastatin)", m: "Increases statin levels → rhabdomyolysis risk.", s: "high"},
            {d: "QT-prolonging drugs", m: "Additive QT prolongation — avoid combination.", s: "high"},
            {d: "Phenytoin", m: "Increases phenytoin levels.", s: "med"}
        ],
        dosage: "Vulvovaginal candidiasis (uncomplicated): 150mg PO × 1 dose. Recurrent/complicated: 150mg PO every 72 hours × 3 doses (days 1, 4, 7). Suppressive therapy: 150mg weekly × 6 months.",
        admin: "Oral. Single-dose treatment is highly effective and convenient. Can take with or without food. Symptom relief typically within 24-72 hours.",
        nurse: "⚠️ SINGLE-DOSE CONVENIENCE: One 150mg pill treats most vaginal yeast infections — no messy creams, excellent compliance. Many DRUG INTERACTIONS — review complete medication list before dispensing (warfarin, diabetes meds, statins). ⚠️ PREGNANCY: Avoid — associated with birth defects at high doses. Use topical azoles in pregnancy instead. If no improvement in 3 days: reconsider diagnosis. Recurrent infections (≥4/year): work up for diabetes, HIV, other immunocompromise; may need suppressive therapy."
    },
    {
        g: "Conjugated Estrogens", b: "Premarin, Cenestin", c: "Estrogen Replacement Therapy", cat: "repro",
        m: "Mixture of estrogens (primarily estrone sulfate) that replaces endogenous estrogen lost after menopause. Acts on estrogen receptors throughout body. Relieves vasomotor symptoms by resetting hypothalamic thermoregulatory center. Maintains bone density by inhibiting osteoclast activity.",
        ind: "⚠️ MENOPAUSAL SYMPTOMS — vasomotor (hot flashes, night sweats), vulvovaginal atrophy. OSTEOPOROSIS prevention (when other treatments unsuitable). Hypoestrogenism (primary ovarian insufficiency).",
        con: "⚠️ History of estrogen-dependent cancer (breast, endometrial). Active or history of VTE/PE/stroke/MI. Known thrombophilia. Active liver disease. Undiagnosed vaginal bleeding. Pregnancy.",
        aec: "Breast tenderness. Nausea. Headache. Bloating, fluid retention. Breakthrough bleeding. Mood changes.",
        aes: "⚠️ VENOUS THROMBOEMBOLISM (DVT/PE) — significantly increased risk. STROKE, MI (especially older women or >10 years post-menopause). ⚠️ ENDOMETRIAL CANCER — MUST add progestin in women with uterus. Breast cancer (with prolonged use, especially combined estrogen-progestin). Gallbladder disease. Dementia (if started in women >65).",
        inter: [
            {d: "CYP3A4 inducers (rifampin, anticonvulsants)", m: "Decrease estrogen levels.", s: "med"},
            {d: "Thyroid hormone", m: "Estrogen increases thyroid-binding globulin — may need levothyroxine dose adjustment.", s: "med"},
            {d: "Warfarin", m: "May alter anticoagulant effect.", s: "med"}
        ],
        dosage: "Hot flashes: 0.3-0.625mg PO daily (lowest effective dose). Osteoporosis: 0.3-0.625mg daily. Use with progestin if uterus intact. Transdermal patches: 0.025-0.1mg/day (lower VTE risk than oral).",
        admin: "Oral tablets, transdermal patch, vaginal cream. Take at same time daily. Continuous or cyclic regimens available. Transdermal preferred (bypasses liver, lower VTE risk).",
        nurse: "⚠️ BLACK BOX WARNINGS: Increased risk of stroke, DVT, MI, breast cancer, endometrial cancer, dementia. ⚠️ MANDATORY PROGESTIN: Women with intact uterus MUST receive progestin to prevent endometrial hyperplasia/cancer — estrogen alone increases endometrial cancer risk 8-fold. Use LOWEST effective dose for SHORTEST duration. Ideal candidates: Healthy women <60 years or <10 years post-menopause with moderate-severe symptoms. Teach ACHES warning signs. Annual reassessment — attempt to taper/discontinue periodically. Transdermal route has lower VTE risk than oral."
    },
    {
        g: "Denosumab", b: "Prolia, Xgeva", c: "RANKL Inhibitor (Monoclonal Antibody)", cat: "msk",
        m: "Human monoclonal antibody that binds RANK Ligand (RANKL), preventing it from activating RANK receptor on osteoclast precursors. This INHIBITS osteoclast formation, function, and survival → decreased bone resorption → increased bone mineral density. Different mechanism than bisphosphonates (doesn't bind to bone matrix).",
        ind: "⚠️ POSTMENOPAUSAL OSTEOPOROSIS — women at high fracture risk. Glucocorticoid-induced osteoporosis. Male osteoporosis. Bone metastases from solid tumors (Xgeva, higher dose).",
        con: "HYPOCALCEMIA (correct before starting — can cause severe hypocalcemia). Hypersensitivity. Pregnancy.",
        aec: "Back pain, extremity pain. Musculoskeletal pain. Hypercholesterolemia. Cystitis. Fatigue.",
        aes: "⚠️ SEVERE HYPOCALCEMIA — especially with renal impairment. Supplement calcium/vitamin D mandatory. ⚠️ OSTEONECROSIS OF THE JAW (ONJ) — same risk as bisphosphonates, dental exam before starting. ATYPICAL FEMORAL FRACTURES. Serious infections (cellulitis, URI). Dermatologic reactions. ⚠️ REBOUND VERTEBRAL FRACTURES if stopped abruptly — must transition to bisphosphonate.",
        inter: [
            {d: "Other osteoporosis drugs", m: "Do not use with bisphosphonates — no added benefit, similar mechanisms.", s: "high"},
            {d: "Immunosuppressants", m: "May increase infection risk (denosumab has immunomodulatory effects).", s: "med"}
        ],
        dosage: "Osteoporosis (Prolia): 60mg SC every 6 MONTHS. Bone metastases (Xgeva): 120mg SC every 4 weeks. Always supplement calcium 1000mg + vitamin D 400-800 IU daily.",
        admin: "Subcutaneous injection by healthcare provider (upper arm, thigh, or abdomen). Every 6 months for osteoporosis — excellent compliance. Store refrigerated, remove 30 min before injection.",
        nurse: "⚠️ CALCIUM/VITAMIN D MANDATORY: Hypocalcemia can be severe, especially with renal impairment — ALL patients must take calcium 1000mg + vitamin D daily. Check calcium before each dose. ⚠️ DENTAL EVALUATION before starting — ONJ risk increases with invasive dental procedures. Avoid extractions during treatment if possible. ⚠️ DO NOT STOP ABRUPTLY: Discontinuation causes rapid bone loss and REBOUND VERTEBRAL FRACTURES. Plan transition to bisphosphonate before stopping. Every 6-month dosing = much better compliance than daily/weekly bisphosphonates. Good option for bisphosphonate intolerance."
    }
];
