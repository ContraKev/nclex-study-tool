/* Men's and Women's Health Exam - 40 Questions
   Source: drugs_mens_womens_health.txt
   Topics: Contraceptives, Vaginitis, Osteoporosis, BPH, Erectile Dysfunction
   Question Types: Multiple Choice, SATA, Matrix */

window.mensWomensHealthExamData = [
    // === VAGINITIS QUESTIONS (1-5) ===
    {
        id: "vaginitis_definition_1",
        slide: 2,
        question: "A patient presents with leukorrhea. The nurse understands that leukorrhea is best described as:",
        options: [
            "An abnormal vaginal discharge that is a symptom of an underlying disorder",
            "A specific infection caused by Candida albicans",
            "A normal vaginal secretion during ovulation",
            "A sexually transmitted infection requiring antibiotic therapy"
        ],
        answer: "An abnormal vaginal discharge that is a symptom of an underlying disorder",
        rationale: "Leukorrhea is an abnormal, usually whitish, vaginal discharge that can occur at any age. It is not a disease itself but a SYMPTOM of an underlying disorder, most commonly infection of the lower reproductive tract."
    },
    {
        id: "vaginitis_organisms_2",
        slide: 2,
        question: "Which organisms are common causes of vaginitis? (Select all that apply.)",
        type: "sata",
        options: [
            "Candida albicans (yeast)",
            "Trichomonas vaginalis",
            "Gardnerella vaginalis",
            "Streptococcus pneumoniae",
            "Escherichia coli",
            "Staphylococcus aureus"
        ],
        answer: [0, 1, 2],
        rationale: "The most common organisms causing vaginitis are: Candida albicans (causing yeast infections), Trichomonas vaginalis (causing trichomoniasis), and Gardnerella vaginalis (causing bacterial vaginosis). The other organisms listed are not typical causes of vaginitis."
    },
    {
        id: "vaginitis_treatment_3",
        slide: 2,
        question: "Which medications are commonly used to treat vaginitis?",
        options: [
            "Miconazole (Monistat) and metronidazole (Flagyl)",
            "Amoxicillin and ciprofloxacin",
            "Acyclovir and valacyclovir",
            "Ceftriaxone and azithromycin"
        ],
        answer: "Miconazole (Monistat) and metronidazole (Flagyl)",
        rationale: "Miconazole (Monistat) is an antifungal used for Candida infections (yeast), while metronidazole (Flagyl) is used for Trichomonas and bacterial vaginosis. The other medications are used for different infections (bacterial infections, herpes, and STIs respectively)."
    },
    {
        id: "candida_vs_bv_matrix_4",
        slide: 2,
        type: "matrix",
        question: "For each characteristic, identify whether it describes candidiasis (yeast infection) or bacterial vaginosis.",
        columns: ["Candidiasis", "Bacterial Vaginosis"],
        rows: [
            {"text": "Thick, white 'cottage cheese' discharge", "correct_col_idx": 0},
            {"text": "Thin, gray discharge with fishy odor", "correct_col_idx": 1},
            {"text": "Intense vulvar itching is primary symptom", "correct_col_idx": 0},
            {"text": "Treated with miconazole or fluconazole", "correct_col_idx": 0},
            {"text": "Treated with metronidazole", "correct_col_idx": 1},
            {"text": "Odor worsens after intercourse", "correct_col_idx": 1}
        ],
        rationale: "Candidiasis presents with thick, white cottage cheese discharge, intense itching, and is treated with antifungals. Bacterial vaginosis presents with thin, gray, fishy-smelling discharge (worse after sex) and is treated with metronidazole or clindamycin."
    },
    {
        id: "sitz_bath_5",
        slide: 10,
        question: "A patient with vaginal irritation asks about comfort measures. The nurse should recommend:",
        options: [
            "Warm sitz baths to help relieve irritation",
            "Douching daily with antiseptic solution",
            "Using scented feminine hygiene products",
            "Applying alcohol-based products to the genital area"
        ],
        answer: "Warm sitz baths to help relieve irritation",
        rationale: "Warm sitz baths can help relieve vaginal irritation. Patients should refrain from using irritating vaginal substances including douches and scented products, which can disrupt normal vaginal flora and worsen symptoms."
    },

    // === ORAL CONTRACEPTIVES (6-12) ===
    {
        id: "oc_mechanism_6",
        slide: 12,
        question: "The nurse is teaching a patient about oral contraceptives. Which statement accurately describes how combination birth control pills prevent pregnancy?",
        options: [
            "Estrogens block pituitary release of FSH, and progestins inhibit pituitary release of LH, preventing ovulation",
            "They destroy sperm in the vaginal canal",
            "They increase the thickness of the uterine lining to prevent implantation",
            "They stimulate the production of progesterone to maintain pregnancy"
        ],
        answer: "Estrogens block pituitary release of FSH, and progestins inhibit pituitary release of LH, preventing ovulation",
        rationale: "Combination oral contraceptives work by: (1) Estrogen blocking FSH release, which prevents follicle maturation, and (2) Progestin inhibiting LH release, which prevents ovulation. They also thicken cervical mucus and thin the endometrium."
    },
    {
        id: "oc_types_7",
        slide: 13,
        question: "A patient asks about the 'minipill.' The nurse explains that the minipill:",
        options: [
            "Contains only progestin and is taken every day",
            "Contains both estrogen and progestin taken for 21 days",
            "Is taken only when needed before sexual intercourse",
            "Contains a higher dose of estrogen than combination pills"
        ],
        answer: "Contains only progestin and is taken every day",
        rationale: "The minipill (progestin-only pill) contains only progestin and must be taken every day at the same time without a placebo week. It's an option for women who cannot take estrogen (e.g., breastfeeding mothers, those with history of blood clots)."
    },
    {
        id: "oc_adverse_effects_8",
        slide: 12,
        question: "Which adverse effects should a patient taking oral contraceptives report IMMEDIATELY to their healthcare provider? (Select all that apply.)",
        type: "sata",
        options: [
            "Severe headaches",
            "Leg pain or swelling",
            "Chest pain or shortness of breath",
            "Blurred vision",
            "Mild nausea when starting the medication",
            "Slight weight gain"
        ],
        answer: [0, 1, 2, 3],
        rationale: "Severe headaches, leg pain, chest pain, shortness of breath, and visual changes can indicate serious complications like blood clots, stroke, or pulmonary embolism. These require immediate medical evaluation. Mild nausea and slight weight gain are common side effects that typically resolve."
    },
    {
        id: "oc_aches_9",
        slide: 12,
        question: "The nurse teaches a patient taking oral contraceptives to remember the acronym 'ACHES' for warning signs. Which of the following represents this acronym correctly?",
        options: [
            "Abdominal pain (severe), Chest pain, Headache (severe), Eye problems, Severe leg pain",
            "Appetite changes, Cramping, Headache (mild), Energy loss, Spotting",
            "Anxiety, Constipation, Hair loss, Edema, Sleep changes",
            "Acne, Cramps, Headache, Exhaustion, Skin changes"
        ],
        answer: "Abdominal pain (severe), Chest pain, Headache (severe), Eye problems, Severe leg pain",
        rationale: "ACHES is a critical teaching tool for oral contraceptive users: Abdominal pain (severe), Chest pain, Headaches (severe/different), Eye problems (vision changes), Severe leg pain. These symptoms may indicate thrombosis, stroke, or other serious complications."
    },
    {
        id: "oc_missed_pill_10",
        slide: 13,
        question: "A patient taking combination oral contraceptives missed one pill yesterday. What should the nurse advise?",
        options: [
            "Take the missed pill as soon as remembered, and take today's pill at the regular time",
            "Stop the pack and start a new one next month",
            "Take three pills today to catch up",
            "Use only backup contraception for the remainder of this cycle"
        ],
        answer: "Take the missed pill as soon as remembered, and take today's pill at the regular time",
        rationale: "If one pill is missed, take it as soon as remembered (even if it means taking two pills in one day). No backup contraception is needed for one missed pill in most cases. However, missing multiple pills, especially in week 1 or extending the hormone-free interval, requires backup methods."
    },
    {
        id: "oc_contraindications_11",
        slide: 5,
        question: "Before prescribing oral contraceptives, the nurse should assess for which conditions that would contraindicate their use? (Select all that apply.)",
        type: "sata",
        options: [
            "History of thromboembolic disorders (DVT/PE)",
            "Smoking in women over age 35",
            "Breast cancer",
            "Uncontrolled hypertension",
            "Liver disease",
            "Seasonal allergies"
        ],
        answer: [0, 1, 2, 3, 4],
        rationale: "Contraindications to combination oral contraceptives include: thromboembolic disorders, smoking + age >35 (significantly increases clot risk), breast cancer, uncontrolled hypertension, and liver disease. Seasonal allergies are not a contraindication."
    },
    {
        id: "oc_phases_12",
        slide: 13,
        question: "A patient is prescribed a 'triphasic' oral contraceptive. The nurse explains that triphasic means:",
        options: [
            "The pill contains three different dose levels of hormones throughout the cycle",
            "The pill must be taken three times daily",
            "The pill provides protection against three different STIs",
            "The pill contains three active ingredients"
        ],
        answer: "The pill contains three different dose levels of hormones throughout the cycle",
        rationale: "Triphasic oral contraceptives contain three different hormone dose levels that change throughout the cycle, mimicking natural hormone fluctuations. This may help reduce side effects. Monophasic pills have the same hormone dose throughout."
    },

    // === TRANSDERMAL AND INTRAVAGINAL CONTRACEPTIVES (13-17) ===
    {
        id: "patch_use_13",
        slide: 14,
        question: "A patient is prescribed norelgestromin-ethinyl estradiol transdermal patch (Ortho Evra/Xulane). Which instruction should the nurse provide?",
        options: [
            "Apply a new patch weekly for 3 weeks, then have a patch-free week",
            "Apply one patch monthly and leave it in place for 30 days",
            "Apply patches to the breast area for best absorption",
            "Apply two patches at a time for increased effectiveness"
        ],
        answer: "Apply a new patch weekly for 3 weeks, then have a patch-free week",
        rationale: "The contraceptive patch is applied weekly for 3 weeks (21 days total), followed by a patch-free week during which withdrawal bleeding occurs. The patch should NOT be applied to the breasts - approved sites include buttock, abdomen, upper arm, or upper torso."
    },
    {
        id: "patch_adverse_14",
        slide: 14,
        question: "A patient using the contraceptive patch reports breast tenderness and mild nausea. The nurse should:",
        options: [
            "Reassure the patient these are common side effects that often improve with continued use",
            "Instruct the patient to discontinue the patch immediately",
            "Recommend applying two patches to reduce side effects",
            "Tell the patient to take the patch off at night"
        ],
        answer: "Reassure the patient these are common side effects that often improve with continued use",
        rationale: "Breast tenderness, nausea, weight gain, and depression are common side effects of hormonal contraceptives including the patch. These often improve after the first few cycles. Serious side effects (chest pain, leg pain, severe headache) require immediate evaluation."
    },
    {
        id: "nuvaring_15",
        slide: 16,
        question: "A patient is considering the NuvaRing (etonogestrel-ethinyl estradiol vaginal ring). The nurse should explain that:",
        options: [
            "The ring is inserted vaginally and left in place for 3 weeks, then removed for 1 week",
            "The ring must be removed before each sexual encounter",
            "The ring is a permanent contraceptive device",
            "The ring provides protection against sexually transmitted infections"
        ],
        answer: "The ring is inserted vaginally and left in place for 3 weeks, then removed for 1 week",
        rationale: "NuvaRing is inserted into the vagina and left in place for 3 weeks, then removed for 1 week (during which withdrawal bleeding occurs). The ring does NOT need to be removed for intercourse and does NOT protect against STIs."
    },
    {
        id: "ring_teaching_16",
        slide: 16,
        question: "When teaching a patient how to insert the vaginal ring, the nurse should emphasize:",
        options: [
            "Squeeze the ring and insert into the vagina - exact position doesn't matter",
            "The ring must be placed directly on the cervix to be effective",
            "Insert the ring immediately after intercourse",
            "The ring should be felt by the partner during intercourse to confirm placement"
        ],
        answer: "Squeeze the ring and insert into the vagina - exact position doesn't matter",
        rationale: "The vaginal ring is squeezed and inserted into the vagina. The exact position doesn't matter as the vaginal muscles will hold it in place. It does not need to be placed on the cervix. Most partners do not feel the ring during intercourse."
    },
    {
        id: "hormonal_sti_17",
        slide: 10,
        question: "A patient using hormonal contraception (pills, patch, or ring) asks if she needs to use condoms. The nurse's best response is:",
        options: [
            "Hormonal and surgical contraceptive methods do NOT protect against STIs - condoms should still be used for STI prevention",
            "Hormonal contraceptives provide complete protection against all STIs",
            "Condoms are only needed during the first month of using hormonal contraception",
            "The hormonal effects prevent all types of infections"
        ],
        answer: "Hormonal and surgical contraceptive methods do NOT protect against STIs - condoms should still be used for STI prevention",
        rationale: "This is critical patient education: hormonal contraceptives prevent pregnancy but do NOT prevent STIs. Condoms (male or female) should be used in addition to hormonal contraception for STI protection, especially with new or multiple partners."
    },

    // === OSTEOPOROSIS (18-24) ===
    {
        id: "osteo_definition_18",
        slide: 18,
        question: "When teaching a patient about osteoporosis, the nurse explains that osteoporosis is:",
        options: [
            "The most common bone disease characterized by low bone mineral density",
            "An infection of the bone marrow",
            "Inflammation of the joints",
            "A form of bone cancer"
        ],
        answer: "The most common bone disease characterized by low bone mineral density",
        rationale: "Osteoporosis is the most common bone disease, characterized by decreased bone mineral density leading to increased fracture risk. Over 50 million men and women in the United States have osteoporosis or osteopenia (precursor to osteoporosis)."
    },
    {
        id: "osteo_risk_factors_19",
        slide: 18,
        question: "Which patients are at highest risk for osteoporosis? (Select all that apply.)",
        type: "sata",
        options: [
            "Postmenopausal women",
            "Patients with low body weight",
            "Current smokers",
            "Patients with excessive alcohol intake",
            "Patients with rheumatoid arthritis",
            "Young male athletes"
        ],
        answer: [0, 1, 2, 3, 4],
        rationale: "Risk factors for osteoporosis include: female sex, postmenopausal status, hypogonadism, low body weight, family history (parental hip fracture), white ethnicity, rheumatoid arthritis, smoking, alcohol intake, and low calcium intake. Young male athletes typically have higher bone density."
    },
    {
        id: "bisphosphonate_action_20",
        slide: 21,
        question: "The nurse is teaching about bisphosphonates (alendronate, risedronate). Which statement accurately describes their mechanism of action?",
        options: [
            "They inhibit bone resorption by acting on osteoclasts",
            "They stimulate new bone formation by activating osteoblasts",
            "They increase calcium absorption from the intestines",
            "They enhance vitamin D synthesis in the kidneys"
        ],
        answer: "They inhibit bone resorption by acting on osteoclasts",
        rationale: "Bisphosphonates work by inhibiting osteoclast activity, thereby reducing bone resorption (breakdown). This allows bone formation to catch up, increasing bone density. They do NOT stimulate osteoblasts or bone formation directly."
    },
    {
        id: "alendronate_admin_21",
        slide: 21,
        question: "A patient is prescribed alendronate (Fosamax) for osteoporosis. Which instruction is most important for safe administration?",
        options: [
            "Take first thing in the morning on an empty stomach with a full glass of water, then remain upright for at least 30 minutes",
            "Take at bedtime with a glass of milk for better absorption",
            "Take with food to reduce GI upset",
            "Take whenever convenient during the day"
        ],
        answer: "Take first thing in the morning on an empty stomach with a full glass of water, then remain upright for at least 30 minutes",
        rationale: "Bisphosphonates have specific administration requirements: Take first thing in the morning, on an empty stomach, with a FULL glass of plain water (not other beverages). Remain UPRIGHT (sitting or standing) for at least 30 minutes to prevent esophageal irritation/ulceration. Do not eat or take other medications for 30-60 minutes."
    },
    {
        id: "denosumab_22",
        slide: 22,
        question: "A patient is starting denosumab (Prolia) for osteoporosis. The nurse should teach that this medication:",
        options: [
            "Is given as a subcutaneous injection every 6 months and requires calcium/vitamin D supplementation",
            "Is taken orally every day",
            "Is applied as a topical cream to the spine",
            "Is an IV infusion given weekly"
        ],
        answer: "Is given as a subcutaneous injection every 6 months and requires calcium/vitamin D supplementation",
        rationale: "Denosumab (Prolia) is a RANKL inhibitor given as a subcutaneous injection every 6 months. All patients taking denosumab must supplement with calcium and vitamin D to prevent hypocalcemia. This is a critical safety consideration."
    },
    {
        id: "denosumab_action_23",
        slide: 22,
        question: "The mechanism of action of denosumab (Prolia) is to:",
        options: [
            "Prevent osteoclast formation, leading to decreased bone resorption and increased bone mass",
            "Directly stimulate osteoblast proliferation",
            "Increase intestinal absorption of calcium",
            "Replace estrogen in postmenopausal women"
        ],
        answer: "Prevent osteoclast formation, leading to decreased bone resorption and increased bone mass",
        rationale: "Denosumab is a monoclonal antibody that binds to RANK ligand (RANKL), preventing it from activating RANK on osteoclast precursors. This inhibits osteoclast formation and function, reducing bone resorption and increasing bone density."
    },
    {
        id: "osteo_lifestyle_24",
        slide: 20,
        question: "When providing health education to prevent osteoporosis, which recommendations should the nurse include? (Select all that apply.)",
        type: "sata",
        options: [
            "Stop smoking",
            "Ensure adequate calcium and vitamin D intake",
            "Engage in weight-bearing exercise",
            "Limit alcohol consumption",
            "Avoid all physical activity to prevent falls",
            "Eliminate all dairy products"
        ],
        answer: [0, 1, 2, 3],
        rationale: "Osteoporosis prevention includes: smoking cessation, adequate calcium/vitamin D intake, weight-bearing exercise (walking, jogging), and limiting alcohol. Physical activity is encouraged (not avoided) to maintain bone strength. Dairy products are a good calcium source unless contraindicated."
    },

    // === BENIGN PROSTATIC HYPERPLASIA (25-31) ===
    {
        id: "bph_definition_25",
        slide: 23,
        question: "A patient is diagnosed with benign prostatic hyperplasia (BPH). The nurse explains that BPH is:",
        options: [
            "An enlarged prostate that is common in older men and causes urinary symptoms",
            "A malignant tumor of the prostate requiring chemotherapy",
            "A bacterial infection of the prostate gland",
            "A sexually transmitted infection"
        ],
        answer: "An enlarged prostate that is common in older men and causes urinary symptoms",
        rationale: "Benign prostatic hyperplasia (BPH) is a non-cancerous enlargement of the prostate gland that becomes more common with age. It causes urinary obstruction symptoms like difficulty urinating, weak stream, frequency, nocturia, and incomplete bladder emptying."
    },
    {
        id: "bph_symptoms_26",
        slide: 23,
        question: "Which symptoms would the nurse expect in a patient with BPH? (Select all that apply.)",
        type: "sata",
        options: [
            "Difficulty initiating urination",
            "Need to strain to empty the bladder",
            "Frequency and nocturia",
            "Weak urinary stream",
            "Urinary incontinence or dribbling",
            "Hematuria and flank pain"
        ],
        answer: [0, 1, 2, 3, 4],
        rationale: "BPH causes obstructive symptoms (difficulty starting stream, weak stream, straining) and irritative symptoms (frequency, urgency, nocturia, incontinence, dribbling). Hematuria and flank pain are more suggestive of other urologic conditions and warrant further evaluation."
    },
    {
        id: "alpha_blocker_27",
        slide: 24,
        question: "A patient with BPH is prescribed tamsulosin (Flomax). The nurse explains that this medication works by:",
        options: [
            "Blocking alpha-1 receptors on the prostate to relax smooth muscle and improve urinary flow",
            "Shrinking the prostate gland over several months",
            "Killing bacteria causing prostate infection",
            "Stimulating the bladder to contract more forcefully"
        ],
        answer: "Blocking alpha-1 receptors on the prostate to relax smooth muscle and improve urinary flow",
        rationale: "Alpha-1 blockers like tamsulosin relax smooth muscle in the prostate and bladder neck by blocking alpha-1 adrenergic receptors. This reduces urinary obstruction and improves urine flow. They provide rapid symptom relief but do NOT shrink the prostate."
    },
    {
        id: "alpha_blocker_adverse_28",
        slide: 25,
        question: "Which adverse effects should the nurse teach a patient taking tamsulosin (Flomax) to watch for?",
        options: [
            "Dizziness, orthostatic hypotension, and drowsiness",
            "Increased appetite and weight gain",
            "Excessive urination",
            "Hair growth and voice changes"
        ],
        answer: "Dizziness, orthostatic hypotension, and drowsiness",
        rationale: "Alpha-1 blockers can cause dizziness, drowsiness, weakness, headache, and orthostatic hypotension (especially with first dose). Patients should rise slowly from sitting/lying positions and avoid driving until they know how the medication affects them."
    },
    {
        id: "finasteride_29",
        slide: 27,
        question: "A patient is prescribed finasteride (Proscar) for BPH. The nurse should teach that:",
        options: [
            "It works by shrinking the prostate over 6-12 months by reducing DHT levels",
            "It provides immediate relief of urinary symptoms",
            "It increases testosterone levels",
            "It should be discontinued as soon as symptoms improve"
        ],
        answer: "It works by shrinking the prostate over 6-12 months by reducing DHT levels",
        rationale: "Finasteride is a 5-alpha reductase inhibitor that blocks conversion of testosterone to DHT (dihydrotestosterone). This gradually shrinks the prostate over 6-12 months. It does NOT provide immediate relief - alpha-blockers work faster for symptom relief."
    },
    {
        id: "finasteride_adverse_30",
        slide: 27,
        question: "Common adverse effects of 5-alpha reductase inhibitors (finasteride, dutasteride) include:",
        options: [
            "Impotence, decreased libido, and decreased volume of ejaculate",
            "Increased urination and incontinence",
            "Weight gain and edema",
            "Tachycardia and hypertension"
        ],
        answer: "Impotence, decreased libido, and decreased volume of ejaculate",
        rationale: "5-alpha reductase inhibitors reduce DHT levels, which can cause sexual side effects including erectile dysfunction (impotence), decreased libido (sex drive), and decreased volume of ejaculate. These effects are dose-related and reversible upon discontinuation."
    },
    {
        id: "bph_combination_31",
        slide: 24,
        question: "Research indicates that the most effective treatment for slowing BPH progression is:",
        options: [
            "Combination therapy with an alpha-blocker AND a 5-alpha reductase inhibitor",
            "An alpha-blocker alone",
            "A 5-alpha reductase inhibitor alone",
            "Watchful waiting without medication"
        ],
        answer: "Combination therapy with an alpha-blocker AND a 5-alpha reductase inhibitor",
        rationale: "Studies show that combination therapy (alpha-blocker + 5-alpha reductase inhibitor) is more effective at slowing BPH progression and reducing the risk of urinary retention and need for surgery than either medication alone."
    },

    // === ERECTILE DYSFUNCTION (32-38) ===
    {
        id: "ed_definition_32",
        slide: 28,
        question: "Erectile dysfunction (ED) is defined as:",
        options: [
            "Consistent inability to achieve or maintain an erection sufficient for satisfactory sexual activity",
            "Inability to ejaculate during sexual intercourse",
            "Decreased testosterone levels",
            "Premature ejaculation"
        ],
        answer: "Consistent inability to achieve or maintain an erection sufficient for satisfactory sexual activity",
        rationale: "Erectile dysfunction is the consistent inability to achieve or maintain an erection sufficient for satisfactory sexual activity. Diagnosis is based on medical/sexual history, physical examination, and laboratory studies. It affects physical, emotional, and relationship aspects of life."
    },
    {
        id: "ed_risk_factors_33",
        slide: 28,
        question: "Which conditions are risk factors for erectile dysfunction? (Select all that apply.)",
        type: "sata",
        options: [
            "Cigarette smoking",
            "Diabetes mellitus",
            "Hypertension",
            "Hyperlipidemia",
            "Peripheral vascular disease",
            "Regular exercise"
        ],
        answer: [0, 1, 2, 3, 4],
        rationale: "ED risk factors include: smoking, diabetes, hypertension, hyperlipidemia, coronary artery disease, and peripheral vascular disease - all conditions that affect blood flow. Regular exercise is actually protective and NOT a risk factor for ED."
    },
    {
        id: "pde5_mechanism_34",
        slide: 29,
        question: "PDE-5 inhibitors (sildenafil, tadalafil, vardenafil) work by:",
        options: [
            "Selectively inhibiting phosphodiesterase-5 enzyme, allowing increased blood flow to the penis",
            "Directly increasing testosterone levels",
            "Stimulating the release of nitric oxide",
            "Relaxing the bladder smooth muscle"
        ],
        answer: "Selectively inhibiting phosphodiesterase-5 enzyme, allowing increased blood flow to the penis",
        rationale: "PDE-5 inhibitors block the enzyme that breaks down cGMP in the corpus cavernosum. Increased cGMP causes smooth muscle relaxation and increased blood flow, facilitating erection. They require sexual stimulation to work."
    },
    {
        id: "sildenafil_nitrates_35",
        slide: 29,
        question: "A patient taking sildenafil (Viagra) develops chest pain. The nurse should immediately recognize that:",
        options: [
            "Nitrates (nitroglycerin) are CONTRAINDICATED - this combination can cause severe, life-threatening hypotension",
            "Nitroglycerin should be given immediately to treat the chest pain",
            "The patient should take another dose of sildenafil",
            "This is an expected side effect and requires no intervention"
        ],
        answer: "Nitrates (nitroglycerin) are CONTRAINDICATED - this combination can cause severe, life-threatening hypotension",
        rationale: "⚠️ CRITICAL SAFETY: PDE-5 inhibitors + nitrates = SEVERE HYPOTENSION that can be fatal. If a patient taking Viagra/Cialis develops chest pain, nitroglycerin CANNOT be given for at least 24 hours (48 hours for tadalafil). This is a life-threatening drug interaction."
    },
    {
        id: "pde5_adverse_36",
        slide: 29,
        question: "Common adverse effects of PDE-5 inhibitors include:",
        options: [
            "Headache, flushing, and color vision impairment (blue tinge)",
            "Weight gain and edema",
            "Drowsiness and fatigue",
            "Increased appetite"
        ],
        answer: "Headache, flushing, and color vision impairment (blue tinge)",
        rationale: "Common side effects of PDE-5 inhibitors include headache, flushing of face/neck, nasal congestion, dyspepsia, and transient visual disturbances (blue-tinted vision with sildenafil). Serious effects include hypotension, priapism, and sudden hearing/vision loss."
    },
    {
        id: "tadalafil_duration_37",
        slide: 29,
        question: "A patient asks about the difference between sildenafil (Viagra) and tadalafil (Cialis). The nurse explains that tadalafil:",
        options: [
            "Has a much longer duration of action (up to 36 hours) and can be taken daily for BPH",
            "Works faster than sildenafil",
            "Has fewer side effects",
            "Does not interact with nitrates"
        ],
        answer: "Has a much longer duration of action (up to 36 hours) and can be taken daily for BPH",
        rationale: "Tadalafil (Cialis) has a much longer half-life than sildenafil, providing effects for up to 36 hours ('the weekend pill'). It's the only PDE-5 inhibitor also approved for BPH. However, this also means nitrates must be avoided for 48 hours (vs 24 hours for sildenafil)."
    },
    {
        id: "pde5_priapism_38",
        slide: 29,
        question: "A patient calls 6 hours after taking sildenafil, reporting a persistent painful erection. The nurse should advise:",
        options: [
            "Seek emergency medical care immediately - priapism can cause permanent damage",
            "Wait another 2 hours as this is a normal effect",
            "Take another dose to relieve the symptoms",
            "Apply ice to the genital area and go to sleep"
        ],
        answer: "Seek emergency medical care immediately - priapism can cause permanent damage",
        rationale: "Priapism (erection lasting >4 hours) is a medical emergency. Without treatment, it can cause permanent erectile tissue damage and impotence. The patient should seek immediate emergency care. This is a serious but rare adverse effect of PDE-5 inhibitors."
    },

    // === ASSESSMENT AND TEACHING (39-40) ===
    {
        id: "female_history_39",
        slide: 4,
        question: "When assessing a female patient's reproductive health, which information should the nurse obtain? (Select all that apply.)",
        type: "sata",
        options: [
            "Age of menarche and usual menstrual pattern",
            "Number of pregnancies and pregnancy outcomes",
            "Contraceptive methods used",
            "History of STIs",
            "Results of most recent Pap test",
            "Favorite leisure activities"
        ],
        answer: [0, 1, 2, 3, 4],
        rationale: "A complete female reproductive history includes: menarche age, menstrual pattern, obstetric history (pregnancies/outcomes), contraceptive use, STI history, and Pap test history. This information guides appropriate care and screening recommendations."
    },
    {
        id: "male_history_40",
        slide: 6,
        question: "When assessing a male patient's reproductive health, which symptoms would indicate possible prostate problems? (Select all that apply.)",
        type: "sata",
        options: [
            "Difficulty initiating urination",
            "Need to strain to empty bladder",
            "Nocturia (frequent nighttime urination)",
            "Urinary incontinence or dribbling",
            "Lower back or pelvic pain",
            "Improved athletic performance"
        ],
        answer: [0, 1, 2, 3, 4],
        rationale: "Prostate problems (BPH or prostate cancer) can cause: difficulty starting urination, straining, nocturia, frequency, urgency, incontinence, dribbling, urinary retention, and pelvic/lower back pain. These symptoms require evaluation to differentiate between benign and malignant conditions."
    }
];

// Register the exam
window.availableExams = window.availableExams || [];
window.availableExams.push({
    id: 'mens_womens_health_exam',
    name: "Men's and Women's Health Exam",
    data: window.mensWomensHealthExamData
});
console.log("Created exam module: Men's and Women's Health Exam with 40 questions");
