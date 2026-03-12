/* STI Lecture Exam - 45 Questions
   Source: sexually_transmitted_infections.txt
   Topics: Chlamydia, Gonorrhea, Syphilis, Herpes, HPV, Trichomoniasis, BV, HIV
   Question Types: Multiple Choice, SATA, Matrix, Ordering */

window.stiExamData = [
    // === CHLAMYDIA QUESTIONS (1-6) ===
    {
        id: "chlamydia_treatment_1",
        slide: 15,
        question: "A 22-year-old female is diagnosed with chlamydia. Which medication regimen should the nurse anticipate for this patient?",
        options: [
            "Azithromycin (Zithromax) 1g PO × 1 dose",
            "Penicillin G benzathine 2.4 million units IM × 1 dose",
            "Metronidazole (Flagyl) 500mg PO BID × 7 days",
            "Valacyclovir (Valtrex) 1g PO BID × 10 days"
        ],
        answer: "Azithromycin (Zithromax) 1g PO × 1 dose",
        rationale: "Azithromycin 1g as a single oral dose is the first-line treatment for chlamydia. Single-dose therapy ensures compliance since the patient takes the entire treatment at once. Penicillin is for syphilis, metronidazole is for trichomoniasis/BV, and valacyclovir is for herpes."
    },
    {
        id: "chlamydia_complications_2",
        slide: 13,
        question: "A nurse is teaching a patient diagnosed with chlamydia about potential complications if the infection is left untreated. Which complications should the nurse include? (Select all that apply.)",
        type: "sata",
        options: [
            "Pelvic inflammatory disease (PID)",
            "Ectopic pregnancy",
            "Infertility",
            "Five times increased risk of HIV acquisition if exposed",
            "Genital warts",
            "Neurosyphilis"
        ],
        answer: [0, 1, 2, 3],
        rationale: "Untreated chlamydia can cause PID, which can lead to scarring of the fallopian tubes, resulting in ectopic pregnancy and infertility. Patients with chlamydia are also 5 times more likely to contract HIV if exposed. Genital warts are caused by HPV, and neurosyphilis is a complication of untreated syphilis."
    },
    {
        id: "chlamydia_asymptomatic_3",
        slide: 13,
        question: "The nurse is providing education to a group of college students about sexually transmitted infections. Which statement about chlamydia is most important for the nurse to emphasize?",
        options: [
            "Many people with chlamydia don't develop symptoms but can still infect others",
            "Chlamydia causes a painful chancre at the site of infection",
            "Chlamydia can be prevented with the HPV vaccine",
            "Chlamydia requires lifelong antiviral therapy"
        ],
        answer: "Many people with chlamydia don't develop symptoms but can still infect others",
        rationale: "Chlamydia is often asymptomatic, which makes it particularly dangerous because infected individuals can unknowingly transmit the infection to sexual partners. This is why routine screening is recommended for sexually active young adults. Chancres are associated with syphilis, the HPV vaccine prevents HPV, and chlamydia is bacterial (not viral) and is curable with antibiotics."
    },
    {
        id: "azithromycin_teaching_4",
        slide: 15,
        question: "When teaching a patient about azithromycin (Zithromax) prescribed for chlamydia, which instruction should the nurse include?",
        options: [
            "Take the medication at least 2 hours before or after antacids",
            "Take the medication with a full glass of milk to reduce GI upset",
            "This medication will cure your infection in 24 hours",
            "Sexual activity may resume immediately after taking the dose"
        ],
        answer: "Take the medication at least 2 hours before or after antacids",
        rationale: "Antacids decrease the absorption of azithromycin, so they should be separated by at least 2 hours. Milk does not need to be avoided with azithromycin (unlike tetracyclines). While azithromycin works quickly, patients should abstain from sexual activity for 7 days after single-dose treatment to prevent transmission."
    },
    {
        id: "chlamydia_partner_5",
        slide: 53,
        question: "A 20-year-old female is diagnosed with chlamydia. She is concerned about notifying her sexual partner. The nurse explains expedited partner therapy (EPT). Which statement best describes EPT?",
        options: [
            "The provider gives the patient prescriptions or medications to deliver to partners without examining them first",
            "The health department will contact and treat all sexual partners confidentially",
            "Partners must come to the clinic for their own evaluation before treatment",
            "Partners can purchase the same medication over-the-counter at a pharmacy"
        ],
        answer: "The provider gives the patient prescriptions or medications to deliver to partners without examining them first",
        rationale: "Expedited partner therapy (EPT) allows the healthcare provider to give prescriptions or medications to patients to take to their sexual partners without first examining those partners. This approach helps prevent reinfection, especially when partners are unable or unwilling to seek medical care on their own."
    },
    {
        id: "chlamydia_screening_6",
        slide: 13,
        question: "According to CDC guidelines, which population should be routinely screened for chlamydia annually?",
        options: [
            "Sexually active women under age 25",
            "All adults over age 40",
            "Men who use condoms consistently",
            "Post-menopausal women"
        ],
        answer: "Sexually active women under age 25",
        rationale: "The CDC recommends annual chlamydia screening for all sexually active women under age 25, as well as older women with risk factors (new or multiple partners). Nearly half of new STI infections occur in persons ages 15-24. Routine screening is essential because chlamydia is often asymptomatic."
    },

    // === GONORRHEA QUESTIONS (7-12) ===
    {
        id: "gonorrhea_treatment_7",
        slide: 20,
        question: "A patient is diagnosed with uncomplicated gonorrhea. Which treatment regimen should the nurse anticipate?",
        options: [
            "Ceftriaxone 500mg IM × 1 dose PLUS Doxycycline 100mg PO BID × 7 days",
            "Metronidazole 2g PO × 1 dose",
            "Penicillin G benzathine 2.4 million units IM weekly × 3 weeks",
            "Acyclovir 400mg PO TID × 7 days"
        ],
        answer: "Ceftriaxone 500mg IM × 1 dose PLUS Doxycycline 100mg PO BID × 7 days",
        rationale: "Current CDC guidelines recommend dual therapy for gonorrhea: Ceftriaxone (IM injection) combined with doxycycline (or azithromycin if doxycycline cannot be used). Dual therapy is recommended due to emerging antibiotic resistance. Metronidazole is for trichomoniasis, penicillin G is for syphilis, and acyclovir is for herpes."
    },
    {
        id: "gonorrhea_injection_8",
        slide: 20,
        question: "When preparing to administer ceftriaxone IM for gonorrhea treatment, which nursing action is most appropriate?",
        options: [
            "Reconstitute with 1% lidocaine to reduce injection pain",
            "Administer in the deltoid muscle for faster absorption",
            "Divide the dose into two separate syringes for IV administration",
            "Warm the medication to body temperature before injection"
        ],
        answer: "Reconstitute with 1% lidocaine to reduce injection pain",
        rationale: "IM ceftriaxone injections are painful. Reconstituting the medication with 1% lidocaine (instead of sterile water) significantly reduces injection site pain. The injection should be given deep IM in the upper outer quadrant of the gluteus, not the deltoid. Ceftriaxone for gonorrhea is NEVER given IV for this indication."
    },
    {
        id: "gonorrhea_complications_9",
        slide: 18,
        question: "A patient with untreated gonorrhea develops fever, skin lesions, and joint pain. The nurse recognizes these as signs of:",
        options: [
            "Disseminated gonococcal infection affecting heart, skin, and joints",
            "Allergic reaction to gonorrhea bacteria",
            "Secondary syphilis",
            "Herpes simplex reactivation"
        ],
        answer: "Disseminated gonococcal infection affecting heart, skin, and joints",
        rationale: "Untreated gonorrhea can become systemic (disseminated), affecting the heart, meninges, skin, and joints. This is a serious complication requiring IV antibiotics. These symptoms are not an allergic reaction but rather spread of the bacterial infection throughout the body."
    },
    {
        id: "gonorrhea_followup_10",
        slide: 16,
        question: "After completing treatment for gonorrhea, the nurse should advise the patient that:",
        options: [
            "Follow-up examination is essential to confirm the infection has been eradicated",
            "No follow-up is needed if symptoms resolve within 48 hours",
            "The patient is now immune to future gonorrhea infections",
            "Sexual activity may resume immediately after completing antibiotics"
        ],
        answer: "Follow-up examination is essential to confirm the infection has been eradicated",
        rationale: "Follow-up examination is essential after antimicrobial therapy for gonorrhea to confirm the infection has been eradicated. This is especially important due to increasing antibiotic resistance. Patients should abstain from sex for 7 days after treatment. Having gonorrhea does NOT provide immunity to future infections."
    },
    {
        id: "gonorrhea_transmission_11",
        slide: 16,
        question: "A patient asks the nurse, 'Can I get gonorrhea from a toilet seat?' Which response is most accurate?",
        options: [
            "No, gonorrhea is transmitted only through sexual contact, not from toilet seats, doorknobs, or towels",
            "Yes, gonorrhea bacteria can survive on surfaces for up to 24 hours",
            "It depends on how recently the toilet seat was used by an infected person",
            "You should avoid public restrooms to prevent all STI transmission"
        ],
        answer: "No, gonorrhea is transmitted only through sexual contact, not from toilet seats, doorknobs, or towels",
        rationale: "Gonorrhea is NOT transmitted through casual contact with objects like toilet seats, doorknobs, or towels. It is spread through vaginal, oral, or anal sexual contact. The bacteria cannot survive long outside the human body and requires direct mucous membrane contact for transmission."
    },
    {
        id: "gonorrhea_neonatal_12",
        slide: 18,
        question: "A pregnant patient tests positive for gonorrhea. The nurse explains that without treatment, the greatest risk to the newborn is:",
        options: [
            "Eye infection (ophthalmia neonatorum) that can cause blindness",
            "Respiratory distress syndrome",
            "Congenital heart defects",
            "Developmental delays"
        ],
        answer: "Eye infection (ophthalmia neonatorum) that can cause blindness",
        rationale: "Babies of mothers with untreated gonorrhea can be infected during childbirth. Gonorrhea most commonly affects the newborn's eyes (ophthalmia neonatorum), which can lead to blindness if untreated. This is why prophylactic eye ointment is given to all newborns after delivery."
    },

    // === SYPHILIS QUESTIONS (13-20) ===
    {
        id: "syphilis_primary_13",
        slide: 26,
        question: "A patient presents with a small, painless ulcer on the genitals. The nurse recognizes this as a characteristic finding of:",
        options: [
            "Primary syphilis (chancre)",
            "Genital herpes",
            "Gonorrhea",
            "Chlamydia"
        ],
        answer: "Primary syphilis (chancre)",
        rationale: "A chancre is the hallmark of primary syphilis - a small, painless ulcer that appears at the site of infection. Unlike herpes lesions which are painful, syphilitic chancres are typically painless. The chancre heals spontaneously within 6 weeks even without treatment, but the infection progresses to secondary syphilis if untreated."
    },
    {
        id: "syphilis_secondary_14",
        slide: 26,
        question: "A patient with untreated syphilis develops a 'copper penny' rash on the palms and soles, along with white patches in the mouth and swollen lymph nodes. These findings indicate:",
        options: [
            "Secondary syphilis",
            "Primary syphilis",
            "Latent syphilis",
            "Tertiary syphilis"
        ],
        answer: "Secondary syphilis",
        rationale: "Secondary syphilis occurs 6 weeks to 6 months after initial infection. Classic signs include: a distinctive 'copper penny' rash on palms and soles (unusual location for most rashes), moist wart-like lesions (condylomata lata), white patches in the mouth, lymphadenopathy, fever, hair loss, and weight loss."
    },
    {
        id: "syphilis_treatment_15",
        slide: 26,
        question: "A patient diagnosed with primary syphilis has no known drug allergies. Which treatment should the nurse anticipate?",
        options: [
            "Penicillin G benzathine 2.4 million units IM × 1 dose",
            "Azithromycin 1g PO × 1 dose",
            "Ceftriaxone 500mg IM daily × 7 days",
            "Valacyclovir 1g PO BID × 10 days"
        ],
        answer: "Penicillin G benzathine 2.4 million units IM × 1 dose",
        rationale: "Penicillin G benzathine (Bicillin L-A) is the first-line and ONLY proven treatment for syphilis, especially in pregnancy. For primary or secondary syphilis, a single IM dose of 2.4 million units is curative. Late latent or tertiary syphilis requires 3 weekly injections."
    },
    {
        id: "syphilis_penicillin_admin_16",
        slide: 26,
        question: "When administering penicillin G benzathine (Bicillin L-A) for syphilis, the MOST critical nursing action is:",
        options: [
            "NEVER administer intravenously - deep IM injection only",
            "Administer slowly IV over 30 minutes",
            "Divide the dose between two deltoid injections",
            "Pre-medicate with diphenhydramine to prevent allergic reaction"
        ],
        answer: "NEVER administer intravenously - deep IM injection only",
        rationale: "⚠️ CRITICAL SAFETY: Penicillin G benzathine must NEVER be given IV - it can cause immediate cardiopulmonary arrest and death. It must be given as a deep IM injection only, typically in the upper outer quadrant of the gluteus. This is a well-known medication safety issue."
    },
    {
        id: "syphilis_herxheimer_17",
        slide: 26,
        question: "Two hours after receiving penicillin G benzathine for syphilis, a patient develops fever (102°F), chills, headache, and muscle aches. The nurse should:",
        options: [
            "Recognize this as the expected Jarisch-Herxheimer reaction and provide supportive care",
            "Call a code and prepare for anaphylaxis treatment",
            "Administer a second dose of penicillin",
            "Document an allergy to penicillin in the patient's chart"
        ],
        answer: "Recognize this as the expected Jarisch-Herxheimer reaction and provide supportive care",
        rationale: "The Jarisch-Herxheimer reaction is an EXPECTED response occurring 2-8 hours after syphilis treatment. It is caused by the release of antigens from dying spirochetes, NOT an allergic reaction. Symptoms include fever, chills, hypotension, and tachycardia. Treatment is supportive (antipyretics, fluids). Patients should be warned about this before treatment."
    },
    {
        id: "syphilis_pregnancy_18",
        slide: 26,
        question: "A pregnant patient is diagnosed with syphilis and reports a penicillin allergy (hives). Which statement by the nurse is most accurate?",
        options: [
            "Penicillin desensitization will be needed because penicillin is the only treatment that protects the fetus",
            "Doxycycline is a safe alternative during pregnancy",
            "The infection can be treated after delivery to avoid medication risks",
            "No treatment is needed if the patient is asymptomatic"
        ],
        answer: "Penicillin desensitization will be needed because penicillin is the only treatment that protects the fetus",
        rationale: "Penicillin is the ONLY treatment proven to protect the fetus from congenital syphilis. For pregnant patients with penicillin allergy, desensitization must be performed before treatment. Doxycycline is contraindicated in pregnancy (causes fetal tooth discoloration). Untreated syphilis can cause severe fetal abnormalities, stillbirth, or death."
    },
    {
        id: "syphilis_diagnostic_19",
        slide: 22,
        question: "The nurse is reviewing laboratory results for a patient being screened for syphilis. Which test is commonly used for syphilis screening?",
        options: [
            "Rapid Plasma Reagin (RPR) test",
            "Nucleic acid amplification test (NAAT)",
            "Viral culture",
            "Complete blood count (CBC)"
        ],
        answer: "Rapid Plasma Reagin (RPR) test",
        rationale: "The Rapid Plasma Reagin (RPR) test is a serologic screening test for syphilis. It detects antibodies to syphilis. A positive screening test is typically confirmed with a more specific test (FTA-ABS or TP-PA). NAATs are used for chlamydia and gonorrhea, viral cultures for herpes."
    },
    {
        id: "syphilis_stages_matrix_20",
        slide: 26,
        type: "matrix",
        question: "For each finding, identify the stage of syphilis it is most characteristic of.",
        columns: ["Primary", "Secondary", "Tertiary"],
        rows: [
            {"text": "Painless chancre (ulcer) at infection site", "correct_col_idx": 0},
            {"text": "Copper penny rash on palms and soles", "correct_col_idx": 1},
            {"text": "Cardiovascular involvement and gummas", "correct_col_idx": 2},
            {"text": "Condylomata lata (moist wart-like lesions)", "correct_col_idx": 1},
            {"text": "Neurosyphilis with cognitive changes", "correct_col_idx": 2}
        ],
        rationale: "Primary syphilis: painless chancre. Secondary syphilis: copper penny rash, condylomata lata, lymphadenopathy. Tertiary syphilis: cardiovascular damage, gummas (granulomatous lesions), neurosyphilis. Latent syphilis (between secondary and tertiary) has no symptoms but the person remains infectious."
    },

    // === HERPES QUESTIONS (21-27) ===
    {
        id: "herpes_types_21",
        slide: 28,
        question: "A patient asks the nurse about the difference between HSV-1 and HSV-2. Which response is most accurate?",
        options: [
            "HSV-1 typically causes oral herpes (cold sores), while HSV-2 typically causes genital herpes, but both can infect either location",
            "HSV-1 only affects the mouth and HSV-2 only affects the genitals",
            "HSV-1 is curable but HSV-2 is not",
            "HSV-1 is more contagious than HSV-2"
        ],
        answer: "HSV-1 typically causes oral herpes (cold sores), while HSV-2 typically causes genital herpes, but both can infect either location",
        rationale: "While HSV-1 is traditionally associated with oral herpes and HSV-2 with genital herpes, both types can infect either location. Oral-genital contact can spread HSV-1 to the genitals. Neither type is curable - both cause lifelong infections with potential recurrences."
    },
    {
        id: "herpes_transmission_22",
        slide: 31,
        question: "When teaching about genital herpes transmission, which statement should the nurse include?",
        options: [
            "Herpes can be transmitted even when no visible sores are present due to viral shedding",
            "Herpes can only be transmitted when active lesions are visible",
            "Condoms provide 100% protection against herpes transmission",
            "Once lesions heal, the virus is eliminated from the body"
        ],
        answer: "Herpes can be transmitted even when no visible sores are present due to viral shedding",
        rationale: "A critical teaching point: herpes can be transmitted even when asymptomatic due to viral shedding. The virus can be present on the skin without visible lesions. Condoms reduce but do not eliminate transmission risk (they don't cover all potentially infectious areas). The virus remains dormant in nerve ganglia for life."
    },
    {
        id: "herpes_treatment_23",
        slide: 31,
        question: "A patient is diagnosed with a first episode of genital herpes. Which medication should the nurse anticipate?",
        options: [
            "Valacyclovir (Valtrex) 1g PO BID × 10 days",
            "Azithromycin (Zithromax) 1g PO × 1 dose",
            "Metronidazole (Flagyl) 500mg PO BID × 7 days",
            "Ceftriaxone 500mg IM × 1 dose"
        ],
        answer: "Valacyclovir (Valtrex) 1g PO BID × 10 days",
        rationale: "Valacyclovir (a prodrug of acyclovir) is the first-line treatment for genital herpes. For initial episodes, treatment duration is 7-10 days. The other medications listed treat bacterial infections, not viral infections. Antiviral therapy reduces symptom severity and duration but does not cure the infection."
    },
    {
        id: "herpes_suppressive_24",
        slide: 31,
        question: "A patient with recurrent genital herpes outbreaks (6 per year) asks about reducing transmission risk to their partner. The nurse should discuss:",
        options: [
            "Daily suppressive antiviral therapy can reduce transmission to partners by approximately 50%",
            "There is no way to reduce transmission risk to partners",
            "Transmission only occurs during active outbreaks",
            "Antibiotics can prevent transmission"
        ],
        answer: "Daily suppressive antiviral therapy can reduce transmission to partners by approximately 50%",
        rationale: "Daily suppressive therapy (such as valacyclovir 500mg-1g daily) reduces viral shedding and can decrease the risk of transmitting herpes to sexual partners by approximately 50%. Combined with condom use, this provides the best protection. However, neither method provides complete protection."
    },
    {
        id: "herpes_prodrome_25",
        slide: 31,
        question: "A patient with herpes asks when they should start taking antiviral medication. The nurse should advise:",
        options: [
            "At the first sign of prodromal symptoms (tingling, itching, or burning at the site)",
            "Wait until lesions fully develop before starting medication",
            "Only take medication when lesions are visible",
            "Antivirals are only effective for the first outbreak"
        ],
        answer: "At the first sign of prodromal symptoms (tingling, itching, or burning at the site)",
        rationale: "Antiviral therapy is most effective when started at the first sign of prodromal symptoms - tingling, itching, or burning that often precedes lesion formation. Early treatment can reduce outbreak severity and duration. Waiting until lesions are fully developed reduces medication effectiveness."
    },
    {
        id: "herpes_nursing_26",
        slide: 31,
        question: "Which statement by a patient with newly diagnosed genital herpes indicates a need for additional teaching?",
        options: [
            "Once my sores heal, I can't transmit the virus to anyone",
            "I should tell my sexual partners about my diagnosis",
            "There is no cure for herpes, but medications can help manage outbreaks",
            "Using condoms can help reduce but not eliminate transmission risk"
        ],
        answer: "Once my sores heal, I can't transmit the virus to anyone",
        rationale: "This statement is INCORRECT and needs clarification. Herpes can be transmitted even when no visible sores are present due to asymptomatic viral shedding. The other statements are accurate: partner disclosure is important, herpes is incurable but manageable, and condoms reduce but don't eliminate risk."
    },
    {
        id: "herpes_acyclovir_iv_27",
        slide: 31,
        question: "A hospitalized patient is receiving IV acyclovir for severe herpes infection. Which nursing intervention is most important?",
        options: [
            "Infuse slowly over at least 1 hour with adequate hydration to prevent crystalluria",
            "Administer as an IV push over 2-3 minutes",
            "Restrict fluid intake during infusion",
            "Monitor for hypoglycemia"
        ],
        answer: "Infuse slowly over at least 1 hour with adequate hydration to prevent crystalluria",
        rationale: "IV acyclovir must be infused slowly (over at least 1 hour) with adequate hydration to prevent crystalluria and nephrotoxicity. Rapid infusion or dehydration can cause acyclovir crystals to precipitate in renal tubules. BUN and creatinine should be monitored. IV push administration is contraindicated."
    },

    // === TRICHOMONIASIS QUESTIONS (28-31) ===
    {
        id: "trich_presentation_28",
        slide: 33,
        question: "A patient presents with a foul-smelling, frothy, yellow-green vaginal discharge and genital itching. The nurse suspects:",
        options: [
            "Trichomoniasis",
            "Bacterial vaginosis",
            "Candidiasis (yeast infection)",
            "Chlamydia"
        ],
        answer: "Trichomoniasis",
        rationale: "Trichomoniasis classically presents with a frothy, yellow-green, foul-smelling vaginal discharge along with genital itching and painful urination. Bacterial vaginosis causes a thin, gray discharge with fishy odor. Candidiasis causes thick, white 'cottage cheese' discharge. Chlamydia is often asymptomatic."
    },
    {
        id: "trich_treatment_29",
        slide: 33,
        question: "A patient is prescribed metronidazole (Flagyl) for trichomoniasis. Which instruction is MOST important for the nurse to provide?",
        options: [
            "Avoid ALL alcohol during treatment and for 48-72 hours after completing the medication",
            "Take the medication with a full glass of milk",
            "Sexual partners do not need treatment",
            "Expect urine to turn bright red during treatment"
        ],
        answer: "Avoid ALL alcohol during treatment and for 48-72 hours after completing the medication",
        rationale: "⚠️ CRITICAL TEACHING: Metronidazole causes a severe disulfiram-like reaction when combined with alcohol - severe nausea, vomiting, flushing, and headache. Patients must avoid ALL alcohol sources (including mouthwash and cough syrups) during treatment and for 48-72 hours after. Dark urine (not red) is a harmless side effect."
    },
    {
        id: "trich_partner_30",
        slide: 33,
        question: "When teaching about trichomoniasis treatment, the nurse should emphasize that:",
        options: [
            "Both partners must be treated simultaneously to prevent reinfection",
            "Only the symptomatic partner needs treatment",
            "Treatment should be delayed until symptoms resolve",
            "Trichomoniasis is self-limiting and will resolve without treatment"
        ],
        answer: "Both partners must be treated simultaneously to prevent reinfection",
        rationale: "Trichomoniasis requires simultaneous treatment of BOTH sexual partners. If only one partner is treated, reinfection will occur when sexual activity resumes. Many men with trichomoniasis are asymptomatic but still carry and transmit the parasite."
    },
    {
        id: "trich_men_31",
        slide: 33,
        question: "A male patient's female partner was just diagnosed with trichomoniasis. The patient states, 'I don't have any symptoms, so I don't need treatment.' The nurse's best response is:",
        options: [
            "Men with trichomoniasis typically have no symptoms but can still transmit the infection and should be treated",
            "You're correct - only symptomatic patients need treatment",
            "Trichomoniasis does not affect men",
            "You should wait to see if symptoms develop before seeking treatment"
        ],
        answer: "Men with trichomoniasis typically have no symptoms but can still transmit the infection and should be treated",
        rationale: "Men with trichomoniasis are typically asymptomatic but remain infectious. Treatment of all sexual partners is essential to prevent 'ping-pong' reinfection. Both partners should be treated and abstain from sexual activity until treatment is complete."
    },

    // === BACTERIAL VAGINOSIS QUESTIONS (32-34) ===
    {
        id: "bv_presentation_32",
        slide: 41,
        question: "A patient presents with a thin, gray vaginal discharge with a 'fishy' odor that worsens after intercourse. The nurse recognizes this as characteristic of:",
        options: [
            "Bacterial vaginosis (BV)",
            "Trichomoniasis",
            "Genital herpes",
            "Gonorrhea"
        ],
        answer: "Bacterial vaginosis (BV)",
        rationale: "Bacterial vaginosis is characterized by a thin, grayish discharge with a distinctive 'fishy' odor. The odor often worsens after intercourse or during menses due to the increase in vaginal pH. BV is caused by an overgrowth of anaerobic bacteria when normal vaginal flora is disrupted."
    },
    {
        id: "bv_treatment_33",
        slide: 41,
        question: "A patient with bacterial vaginosis asks if her male partner needs treatment. The nurse's response should be:",
        options: [
            "Routine treatment of male partners is not recommended for BV, but you should avoid douching and having multiple partners",
            "Yes, your partner must take the same medication",
            "Yes, your partner needs a different antibiotic",
            "BV can only occur in patients who are not sexually active"
        ],
        answer: "Routine treatment of male partners is not recommended for BV, but you should avoid douching and having multiple partners",
        rationale: "Unlike most STIs, routine partner treatment is NOT recommended for bacterial vaginosis. BV is not considered a true STI but is associated with having multiple sexual partners and douching. It results from disruption of normal vaginal flora rather than transmission of a specific pathogen."
    },
    {
        id: "bv_vs_candida_34",
        slide: 41,
        type: "matrix",
        question: "For each characteristic, identify whether it is associated with bacterial vaginosis (BV) or candidiasis (yeast infection).",
        columns: ["Bacterial Vaginosis", "Candidiasis"],
        rows: [
            {"text": "Thin, gray discharge with fishy odor", "correct_col_idx": 0},
            {"text": "Thick, white 'cottage cheese' discharge", "correct_col_idx": 1},
            {"text": "Treated with metronidazole", "correct_col_idx": 0},
            {"text": "Treated with fluconazole or miconazole", "correct_col_idx": 1},
            {"text": "Odor worsens after intercourse", "correct_col_idx": 0},
            {"text": "Intense itching is the primary symptom", "correct_col_idx": 1}
        ],
        rationale: "BV presents with thin, gray, fishy-smelling discharge (worse after sex) and is treated with metronidazole or clindamycin. Candidiasis presents with thick, white cottage cheese discharge, intense itching, and is treated with antifungals (fluconazole or miconazole)."
    },

    // === HPV AND GENITAL WARTS QUESTIONS (35-38) ===
    {
        id: "hpv_transmission_35",
        slide: 36,
        question: "When teaching patients about HPV (human papillomavirus), which statement by the nurse is most accurate?",
        options: [
            "HPV is the most common sexually transmitted infection in the United States",
            "HPV only affects women",
            "HPV always causes visible warts",
            "There is a cure for HPV infection"
        ],
        answer: "HPV is the most common sexually transmitted infection in the United States",
        rationale: "HPV is the most common STI. Many people with HPV have no symptoms and can unknowingly transmit the virus. While some HPV strains cause visible genital warts, others cause no visible symptoms but can lead to cervical, anal, or oropharyngeal cancers. There is no cure, but vaccines can prevent infection."
    },
    {
        id: "hpv_imiquimod_36",
        slide: 39,
        question: "A patient is prescribed imiquimod (Aldara) cream for genital warts. Which instruction should the nurse provide?",
        options: [
            "Apply a thin layer three times weekly at bedtime, leave on for 6-10 hours, then wash off",
            "Apply daily in the morning and leave on all day",
            "Apply thick layer twice daily for rapid results",
            "Apply until warts resolve, usually within 1-2 days"
        ],
        answer: "Apply a thin layer three times weekly at bedtime, leave on for 6-10 hours, then wash off",
        rationale: "Imiquimod (Aldara) for genital warts is applied three times weekly (e.g., Mon/Wed/Fri) at bedtime, left on for 6-10 hours, then washed off. Treatment may take up to 16 weeks. Local skin reactions (redness, erosion) are expected and indicate immune response. Patience is required."
    },
    {
        id: "hpv_vaccine_37",
        slide: 36,
        question: "A parent asks about the HPV vaccine for their 11-year-old daughter. The nurse should explain that:",
        options: [
            "The HPV vaccine is recommended for both boys and girls, ideally at ages 11-12, before sexual activity begins",
            "Only girls need the HPV vaccine",
            "The vaccine should be given after the person becomes sexually active",
            "The vaccine treats existing HPV infections"
        ],
        answer: "The HPV vaccine is recommended for both boys and girls, ideally at ages 11-12, before sexual activity begins",
        rationale: "HPV vaccination is recommended for both boys and girls at ages 11-12 (can start at age 9). The vaccine is most effective when given BEFORE exposure to HPV through sexual activity. It prevents infection with HPV strains most likely to cause genital warts and cervical/other cancers but does NOT treat existing infections."
    },
    {
        id: "hpv_screening_38",
        slide: 50,
        question: "A patient with a history of HPV infection asks about cervical cancer screening. The nurse should advise:",
        options: [
            "Women with HPV or genital warts are at higher risk for cervical cancer and should have regular Pap smears",
            "Cervical cancer screening is not needed if the HPV vaccine was received",
            "Only women with visible genital warts need cervical cancer screening",
            "Cervical cancer screening can be discontinued after age 30"
        ],
        answer: "Women with HPV or genital warts are at higher risk for cervical cancer and should have regular Pap smears",
        rationale: "Certain high-risk HPV strains can cause cervical cancer. Women with HPV infection or history of genital warts should have annual Pap smears as recommended. Even vaccinated women should continue routine cervical cancer screening because the vaccine doesn't protect against all HPV strains."
    },

    // === HIV QUESTIONS (39-42) ===
    {
        id: "hiv_pathophysiology_39",
        slide: 44,
        question: "A nursing student asks how HIV causes immunodeficiency. The nurse explains that HIV:",
        options: [
            "Gradually destroys T4 (CD4+) lymphocytes that are essential for fighting infections",
            "Directly attacks and destroys red blood cells",
            "Prevents the production of all white blood cells",
            "Only affects the respiratory system"
        ],
        answer: "Gradually destroys T4 (CD4+) lymphocytes that are essential for fighting infections",
        rationale: "HIV specifically targets and destroys CD4+ T-helper lymphocytes, which are critical for coordinating the immune response. As CD4 count declines, the patient becomes increasingly susceptible to opportunistic infections. When the immune system ceases to function adequately (CD4 <200), the patient has AIDS."
    },
    {
        id: "hiv_opportunistic_40",
        slide: 44,
        question: "The nurse is teaching about HIV progression to AIDS. An opportunistic infection is best described as:",
        options: [
            "An infection that thrives when the immune system is impaired and would not cause disease in a healthy person",
            "Any bacterial infection",
            "An infection that only occurs in healthcare settings",
            "An infection that can be prevented with handwashing"
        ],
        answer: "An infection that thrives when the immune system is impaired and would not cause disease in a healthy person",
        rationale: "Opportunistic infections are caused by organisms that typically don't cause disease in people with healthy immune systems. When HIV destroys CD4 cells and immunity declines, these organisms 'take the opportunity' to cause serious, often life-threatening infections (e.g., Pneumocystis pneumonia, Candida, CMV)."
    },
    {
        id: "hiv_reporting_41",
        slide: 10,
        question: "Which sexually transmitted infections must be reported to the local health department? (Select all that apply.)",
        type: "sata",
        options: [
            "HIV/AIDS",
            "Gonorrhea",
            "Syphilis",
            "Chlamydia",
            "Trichomoniasis",
            "Bacterial vaginosis"
        ],
        answer: [0, 1, 2, 3],
        rationale: "HIV/AIDS, gonorrhea, syphilis, and chlamydia must be reported to the local health department. This allows public health officials to contact sexual partners and provide testing/treatment to slow disease transmission. Trichomoniasis and bacterial vaginosis are NOT reportable conditions."
    },
    {
        id: "hiv_blood_donation_42",
        slide: 50,
        question: "When teaching a patient newly diagnosed with HIV, the nurse should emphasize that the patient:",
        options: [
            "Cannot donate blood",
            "Can donate blood after 6 months of antiretroviral therapy",
            "Can donate blood if viral load is undetectable",
            "Should donate blood to help others with HIV"
        ],
        answer: "Cannot donate blood",
        rationale: "Patients with HIV are permanently excluded from donating blood to prevent transmission to blood recipients. This restriction remains even if the patient's viral load is undetectable with treatment. This is an important teaching point for newly diagnosed patients."
    },

    // === NURSING CARE AND ASSESSMENT QUESTIONS (43-45) ===
    {
        id: "sti_assessment_43",
        slide: 48,
        question: "When obtaining a sexual history from a patient being evaluated for STIs, which nursing approach is most appropriate?",
        options: [
            "Use a nonjudgmental, matter-of-fact tone and avoid expressing personal opinions about the patient's lifestyle",
            "Express disapproval of risky behaviors to discourage future risk",
            "Skip sensitive questions to avoid embarrassing the patient",
            "Only ask questions if the patient appears comfortable discussing sexuality"
        ],
        answer: "Use a nonjudgmental, matter-of-fact tone and avoid expressing personal opinions about the patient's lifestyle",
        rationale: "Healthcare providers must put aside personal beliefs and approach STI assessment without judgment. Judgmental attitudes create barriers to care and may prevent patients from seeking treatment, leading to continued disease spread. A professional, nonjudgmental approach encourages honest disclosure and promotes trust."
    },
    {
        id: "sti_teaching_44",
        slide: 50,
        question: "A nurse is providing discharge teaching to a patient treated for an STI. Which instructions should be included? (Select all that apply.)",
        type: "sata",
        options: [
            "Complete the full course of antibiotics even if symptoms resolve",
            "Avoid sexual contact until the infection is cured",
            "Use condoms to prevent reinfection",
            "Sexual partners should be examined and treated",
            "Return for follow-up as directed",
            "STIs provide immunity against future infection"
        ],
        answer: [0, 1, 2, 3, 4],
        rationale: "All statements except the last are correct. Patients should: complete all antibiotics, avoid sex until cured, use condoms, ensure partners are treated, and return for follow-up. STIs do NOT provide immunity - patients can be reinfected with the same STI multiple times."
    },
    {
        id: "sti_interventions_45",
        slide: 49,
        question: "A patient newly diagnosed with genital herpes is tearful and states, 'My life is over. No one will ever want to be with me.' Which nursing intervention is most therapeutic?",
        options: [
            "Acknowledge the patient's feelings and provide accurate information about living with herpes",
            "Tell the patient that herpes is very common and not a big deal",
            "Immediately refer the patient to a psychiatrist",
            "Change the subject to avoid increasing the patient's distress"
        ],
        answer: "Acknowledge the patient's feelings and provide accurate information about living with herpes",
        rationale: "The nurse should first acknowledge the patient's emotional response - this validates their feelings. Then provide accurate education: herpes is manageable, many people have fulfilling relationships, transmission can be reduced with medication and condoms. Dismissing feelings or avoiding the topic is not therapeutic."
    }
];

// Register the exam
window.availableExams = window.availableExams || [];
window.availableExams.push({
    id: 'sti_exam',
    name: 'Sexually Transmitted Infections Exam',
    data: window.stiExamData
});
console.log('Created exam module: Sexually Transmitted Infections Exam with 45 questions');
