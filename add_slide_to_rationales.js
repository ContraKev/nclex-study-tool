#!/usr/bin/env node
/**
 * add_slide_to_rationales.js — Add slide numbers to rationales in dist/index.html
 */

const fs = require("fs");

const FILE = "dist/index.html";
let html = fs.readFileSync(FILE, "utf8");

// Men's and Women's Health Exam rationales
const mensReplacements = [
    {
        old: "Leukorrhea is an abnormal, usually whitish, vaginal discharge that can occur at any age. It is not a disease itself but a SYMPTOM of an underlying disorder, most commonly infection of the lower reproductive tract.",
        slide: 2
    },
    {
        old: "The most common organisms causing vaginitis are: Candida albicans (causing yeast infections), Trichomonas vaginalis (causing trichomoniasis), and Gardnerella vaginalis (causing bacterial vaginosis). The other organisms listed are not typical causes of vaginitis.",
        slide: 2
    },
    {
        old: "Miconazole (Monistat) is an antifungal used for Candida infections (yeast), while metronidazole (Flagyl) is used for Trichomonas and bacterial vaginosis. The other medications are used for different infections (bacterial infections, herpes, and STIs respectively).",
        slide: 2
    },
    {
        old: "Candidiasis presents with thick, white cottage cheese discharge, intense itching, and is treated with antifungals. Bacterial vaginosis presents with thin, gray, fishy-smelling discharge (worse after sex) and is treated with metronidazole or clindamycin.",
        slide: 2
    },
    {
        old: "Warm sitz baths can help relieve vaginal irritation. Patients should refrain from using irritating vaginal substances including douches and scented products, which can disrupt normal vaginal flora and worsen symptoms.",
        slide: 10
    },
    {
        old: "Combination oral contraceptives work by: (1) Estrogen blocking FSH release, which prevents follicle maturation, and (2) Progestin inhibiting LH release, which prevents ovulation. They also thicken cervical mucus and thin the endometrium.",
        slide: 12
    },
    {
        old: "The minipill (progestin-only pill) contains only progestin and must be taken every day at the same time without a placebo week. It's an option for women who cannot take estrogen (e.g., breastfeeding mothers, those with history of blood clots).",
        slide: 13
    },
    {
        old: "Severe headaches, leg pain, chest pain, shortness of breath, and visual changes can indicate serious complications like blood clots, stroke, or pulmonary embolism. These require immediate medical evaluation. Mild nausea and slight weight gain are common side effects that typically resolve.",
        slide: 12
    },
    {
        old: "ACHES is a critical teaching tool for oral contraceptive users: Abdominal pain (severe), Chest pain, Headaches (severe/different), Eye problems (vision changes), Severe leg pain. These symptoms may indicate thrombosis, stroke, or other serious complications.",
        slide: 12
    },
    {
        old: "If one pill is missed, take it as soon as remembered (even if it means taking two pills in one day). No backup contraception is needed for one missed pill in most cases. However, missing multiple pills, especially in week 1 or extending the hormone-free interval, requires backup methods.",
        slide: 13
    },
    {
        old: "Contraindications to combination oral contraceptives include: thromboembolic disorders, smoking + age >35 (significantly increases clot risk), breast cancer, uncontrolled hypertension, and liver disease. Seasonal allergies are not a contraindication.",
        slide: 5
    },
    {
        old: "Triphasic oral contraceptives contain three different hormone dose levels that change throughout the cycle, mimicking natural hormone fluctuations. This may help reduce side effects. Monophasic pills have the same hormone dose throughout.",
        slide: 13
    },
    {
        old: "The contraceptive patch is applied weekly for 3 weeks (21 days total), followed by a patch-free week during which withdrawal bleeding occurs. The patch should NOT be applied to the breasts - approved sites include buttock, abdomen, upper arm, or upper torso.",
        slide: 14
    },
    {
        old: "Breast tenderness, nausea, weight gain, and depression are common side effects of hormonal contraceptives including the patch. These often improve after the first few cycles. Serious side effects (chest pain, leg pain, severe headache) require immediate evaluation.",
        slide: 14
    },
    {
        old: "NuvaRing is inserted into the vagina and left in place for 3 weeks, then removed for 1 week (during which withdrawal bleeding occurs). The ring does NOT need to be removed for intercourse and does NOT protect against STIs.",
        slide: 16
    },
    {
        old: "The vaginal ring is squeezed and inserted into the vagina. The exact position doesn't matter as the vaginal muscles will hold it in place. It does not need to be placed on the cervix. Most partners do not feel the ring during intercourse.",
        slide: 16
    },
    {
        old: "This is critical patient education: hormonal contraceptives prevent pregnancy but do NOT prevent STIs. Condoms (male or female) should be used in addition to hormonal contraception for STI protection, especially with new or multiple partners.",
        slide: 10
    },
    {
        old: "Osteoporosis is the most common bone disease, characterized by decreased bone mineral density leading to increased fracture risk. Over 50 million men and women in the United States have osteoporosis or osteopenia (precursor to osteoporosis).",
        slide: 18
    },
    {
        old: "Risk factors for osteoporosis include: female sex, postmenopausal status, hypogonadism, low body weight, family history (parental hip fracture), white ethnicity, rheumatoid arthritis, smoking, alcohol intake, and low calcium intake. Young male athletes typically have higher bone density.",
        slide: 18
    },
    {
        old: "Bisphosphonates work by inhibiting osteoclast activity, thereby reducing bone resorption (breakdown). This allows bone formation to catch up, increasing bone density. They do NOT stimulate osteoblasts or bone formation directly.",
        slide: 21
    },
    {
        old: "Bisphosphonates have specific administration requirements: Take first thing in the morning, on an empty stomach, with a FULL glass of plain water (not other beverages). Remain UPRIGHT (sitting or standing) for at least 30 minutes to prevent esophageal irritation/ulceration. Do not eat or take other medications for 30-60 minutes.",
        slide: 21
    },
    {
        old: "Denosumab (Prolia) is a subcutaneous injection every 6 months. All patients taking denosumab must supplement with calcium and vitamin D to prevent hypocalcemia. This is a critical safety consideration.",
        slide: 22
    },
    {
        old: "Denosumab is a monoclonal antibody that binds to RANK ligand (RANKL), preventing it from activating RANK on osteoclast precursors. This inhibits osteoclast formation and function, reducing bone resorption and increasing bone density.",
        slide: 22
    },
    {
        old: "Osteoporosis prevention includes: smoking cessation, adequate calcium/vitamin D intake, weight-bearing exercise (walking, jogging), and limiting alcohol. Physical activity is encouraged (not avoided) to maintain bone strength. Dairy products are a good calcium source unless contraindicated.",
        slide: 20
    },
    {
        old: "Benign prostatic hyperplasia (BPH) is a non-cancerous enlargement of the prostate gland that becomes more common with age. It causes urinary obstruction symptoms like difficulty urinating, weak stream, frequency, nocturia, and incomplete bladder emptying.",
        slide: 23
    },
    {
        old: "BPH causes obstructive symptoms (difficulty starting stream, weak stream, straining) and irritative symptoms (frequency, urgency, nocturia, incontinence, dribbling). Hematuria and flank pain are more suggestive of other urologic conditions and warrant further evaluation.",
        slide: 23
    },
    {
        old: "Alpha-1 blockers like tamsulosin relax smooth muscle in the prostate and bladder neck by blocking alpha-1 adrenergic receptors. This reduces urinary obstruction and improves urine flow. They provide rapid symptom relief but do NOT shrink the prostate.",
        slide: 24
    },
    {
        old: "Alpha-1 blockers can cause dizziness, drowsiness, weakness, headache, and orthostatic hypotension (especially with first dose). Patients should rise slowly from sitting/lying positions and avoid driving until they know how the medication affects them.",
        slide: 25
    },
    {
        old: "Finasteride is a 5-alpha reductase inhibitor that blocks conversion of testosterone to DHT (dihydrotestosterone). This gradually shrinks the prostate over 6-12 months. It does NOT provide immediate relief - alpha-blockers work faster for symptom relief.",
        slide: 27
    },
    {
        old: "5-alpha reductase inhibitors reduce DHT levels, which can cause sexual side effects including erectile dysfunction (impotence), decreased libido (sex drive), and decreased volume of ejaculate. These effects are dose-related and reversible upon discontinuation.",
        slide: 27
    },
    {
        old: "Studies show that combination therapy (alpha-blocker + 5-alpha reductase inhibitor) is more effective at slowing BPH progression and reducing the risk of urinary retention and need for surgery than either medication alone.",
        slide: 24
    },
    {
        old: "Erectile dysfunction is the consistent inability to achieve or maintain an erection sufficient for satisfactory sexual activity. Diagnosis is based on medical/sexual history, physical examination, and laboratory studies. It affects physical, emotional, and relationship aspects of life.",
        slide: 28
    },
    {
        old: "ED risk factors include: smoking, diabetes, hypertension, hyperlipidemia, coronary artery disease, and peripheral vascular disease - all conditions that affect blood flow. Regular exercise is actually protective and NOT a risk factor for ED.",
        slide: 28
    },
    {
        old: "PDE-5 inhibitors block the enzyme that breaks down cGMP in the corpus cavernosum. Increased cGMP causes smooth muscle relaxation and increased blood flow, facilitating erection. They require sexual stimulation to work.",
        slide: 29
    },
    {
        old: "⚠️ CRITICAL SAFETY: PDE-5 inhibitors + nitrates = SEVERE HYPOTENSION that can be fatal. If a patient taking Viagra/Cialis develops chest pain, nitroglycerin CANNOT be given for at least 24 hours (48 hours for tadalafil). This is a life-threatening drug interaction.",
        slide: 29
    },
    {
        old: "Common side effects of PDE-5 inhibitors include headache, flushing of face/neck, nasal congestion, dyspepsia, and transient visual disturbances (blue-tinted vision with sildenafil). Serious effects include hypotension, priapism, and sudden hearing/vision loss.",
        slide: 29
    },
    {
        old: "Tadalafil (Cialis) has a much longer half-life than sildenafil, providing effects for up to 36 hours ('the weekend pill'). It's the only PDE-5 inhibitor also approved for BPH. However, this also means nitrates must be avoided for 48 hours (vs 24 hours for sildenafil).",
        slide: 29
    },
    {
        old: "Priapism (erection lasting >4 hours) is a medical emergency. Without treatment, it can cause permanent erectile tissue damage and impotence. The patient should seek immediate emergency care. This is a serious but rare adverse effect of PDE-5 inhibitors.",
        slide: 29
    },
    {
        old: "A complete female reproductive history includes: menarche age, menstrual pattern, obstetric history (pregnancies/outcomes), contraceptive use, STI history, and Pap test history. This information guides appropriate care and screening recommendations.",
        slide: 4
    },
    {
        old: "Prostate problems (BPH or prostate cancer) can cause: difficulty starting urination, straining, nocturia, frequency, urgency, incontinence, dribbling, urinary retention, and pelvic/lower back pain. These symptoms require evaluation to differentiate between benign and malignant conditions.",
        slide: 6
    }
];

// STI Exam rationales
const stiReplacements = [
    {
        old: "Azithromycin 1g as a single oral dose is the first-line treatment for chlamydia. Single-dose therapy ensures compliance since the patient takes the entire treatment at once. Penicillin is for syphilis, metronidazole is for trichomoniasis/BV, and valacyclovir is for herpes.",
        slide: 15
    },
    {
        old: "Untreated chlamydia can cause PID, which can lead to scarring of the fallopian tubes, resulting in ectopic pregnancy and infertility. Patients with chlamydia are also 5 times more likely to contract HIV if exposed. Genital warts are caused by HPV, and neurosyphilis is a complication of untreated syphilis.",
        slide: 13
    },
    {
        old: "Chlamydia is often asymptomatic, which makes it particularly dangerous because infected individuals can unknowingly transmit the infection to sexual partners. This is why routine screening is recommended for sexually active young adults. Chancres are associated with syphilis, the HPV vaccine prevents HPV, and chlamydia is bacterial (not viral) and is curable with antibiotics.",
        slide: 13
    },
    {
        old: "Antacids decrease the absorption of azithromycin, so they should be separated by at least 2 hours. Milk does not need to be avoided with azithromycin (unlike tetracyclines). While azithromycin works quickly, patients should abstain from sexual activity for 7 days after single-dose treatment to prevent transmission.",
        slide: 15
    },
    {
        old: "Expedited partner therapy (EPT) allows the healthcare provider to give prescriptions or medications to patients to take to their sexual partners without first examining those partners. This approach helps prevent reinfection, especially when partners are unable or unwilling to seek medical care on their own.",
        slide: 53
    },
    {
        old: "The CDC recommends annual chlamydia screening for all sexually active women under age 25, as well as older women with risk factors (new or multiple partners). Nearly half of new STI infections occur in persons ages 15-24. Routine screening is essential because chlamydia is often asymptomatic.",
        slide: 13
    },
    {
        old: "Current CDC guidelines recommend dual therapy for gonorrhea: Ceftriaxone (IM injection) combined with doxycycline (or azithromycin if doxycycline cannot be used). Dual therapy is recommended due to emerging antibiotic resistance. Metronidazole is for trichomoniasis, penicillin G is for syphilis, and acyclovir is for herpes.",
        slide: 20
    },
    {
        old: "IM ceftriaxone injections are painful. Reconstituting the medication with 1% lidocaine (instead of sterile water) significantly reduces injection site pain. The injection should be given deep IM in the upper outer quadrant of the gluteus, not the deltoid. Ceftriaxone for gonorrhea is NEVER given IV for this indication.",
        slide: 20
    },
    {
        old: "Untreated gonorrhea can become systemic (disseminated), affecting the heart, meninges, skin, and joints. This is a serious complication requiring IV antibiotics. These symptoms are not an allergic reaction but rather spread of the bacterial infection throughout the body.",
        slide: 18
    },
    {
        old: "Follow-up examination is essential after antimicrobial therapy for gonorrhea to confirm the infection has been eradicated. This is especially important due to increasing antibiotic resistance. Patients should abstain from sex for 7 days after treatment. Having gonorrhea does NOT provide immunity to future infections.",
        slide: 16
    },
    {
        old: "Gonorrhea is NOT transmitted through casual contact with objects like toilet seats, doorknobs, or towels. It is spread through vaginal, oral, or anal sexual contact. The bacteria cannot survive long outside the human body and requires direct mucous membrane contact for transmission.",
        slide: 16
    },
    {
        old: "Babies of mothers with untreated gonorrhea can be infected during childbirth. Gonorrhea most commonly affects the newborn's eyes (ophthalmia neonatorum), which can lead to blindness if untreated. This is why prophylactic eye ointment is given to all newborns after delivery.",
        slide: 18
    },
    {
        old: "A chancre is the hallmark of primary syphilis - a small, painless ulcer that appears at the site of infection. Unlike herpes lesions which are painful, syphilitic chancres are typically painless. The chancre heals spontaneously within 6 weeks even without treatment, but the infection progresses to secondary syphilis if untreated.",
        slide: 26
    },
    {
        old: "Secondary syphilis occurs 6 weeks to 6 months after initial infection. Classic signs include: a distinctive 'copper penny' rash on palms and soles (unusual location for most rashes), moist wart-like lesions (condylomata lata), white patches in the mouth, lymphadenopathy, fever, hair loss, and weight loss.",
        slide: 26
    },
    {
        old: "Penicillin G benzathine (Bicillin L-A) is the first-line and ONLY proven treatment for syphilis, especially in pregnancy. For primary or secondary syphilis, a single IM dose of 2.4 million units is curative. Late latent or tertiary syphilis requires 3 weekly injections.",
        slide: 26
    },
    {
        old: "⚠️ CRITICAL SAFETY: Penicillin G benzathine must NEVER be given IV - it can cause immediate cardiopulmonary arrest and death. It must be given as a deep IM injection only, typically in the upper outer quadrant of the gluteus. This is a well-known medication safety issue.",
        slide: 26
    },
    {
        old: "The Jarisch-Herxheimer reaction is an EXPECTED response occurring 2-8 hours after syphilis treatment. It is caused by the release of antigens from dying spirochetes, NOT an allergic reaction. Symptoms include fever, chills, hypotension, and tachycardia. Treatment is supportive (antipyretics, fluids). Patients should be warned about this before treatment.",
        slide: 26
    },
    {
        old: "Penicillin is the ONLY treatment proven to protect the fetus from congenital syphilis. For pregnant patients with penicillin allergy, desensitization must be performed before treatment. Doxycycline is contraindicated in pregnancy (causes fetal tooth discoloration). Untreated syphilis can cause severe fetal abnormalities, stillbirth, or death.",
        slide: 26
    },
    {
        old: "The Rapid Plasma Reagin (RPR) test is a serologic screening test for syphilis. It detects antibodies to syphilis. A positive screening test is typically confirmed with a more specific test (FTA-ABS or TP-PA). NAATs are used for chlamydia and gonorrhea, viral cultures for herpes.",
        slide: 22
    },
    {
        old: "Primary syphilis: painless chancre. Secondary syphilis: copper penny rash, condylomata lata, lymphadenopathy. Tertiary syphilis: cardiovascular damage, gummas (granulomatous lesions), neurosyphilis. Latent syphilis (between secondary and tertiary) has no symptoms but the person remains infectious.",
        slide: 26
    },
    {
        old: "While HSV-1 is traditionally associated with oral herpes and HSV-2 with genital herpes, both types can infect either location. Oral-genital contact can spread HSV-1 to the genitals. Neither type is curable - both cause lifelong infections with potential recurrences.",
        slide: 28
    },
    {
        old: "A critical teaching point: herpes can be transmitted even when asymptomatic due to viral shedding. The virus can be present on the skin without visible lesions. Condoms reduce but do not eliminate transmission risk (they don't cover all potentially infectious areas). The virus remains dormant in nerve ganglia for life.",
        slide: 31
    },
    {
        old: "Valacyclovir (a prodrug of acyclovir) is the first-line treatment for genital herpes. For initial episodes, treatment duration is 7-10 days. The other medications listed treat bacterial infections, not viral infections. Antiviral therapy reduces symptom severity and duration but does not cure the infection.",
        slide: 31
    },
    {
        old: "Daily suppressive therapy (such as valacyclovir 500mg-1g daily) reduces viral shedding and can decrease the risk of transmitting herpes to sexual partners by approximately 50%. Combined with condom use, this provides the best protection. However, neither method provides complete protection.",
        slide: 31
    },
    {
        old: "Antiviral therapy is most effective when started at the first sign of prodromal symptoms - tingling, itching, or burning that often precedes lesion formation. Early treatment can reduce outbreak severity and duration. Waiting until lesions are fully developed reduces medication effectiveness.",
        slide: 31
    },
    {
        old: "This statement is INCORRECT and needs clarification. Herpes can be transmitted even when no visible sores are present due to asymptomatic viral shedding. The other statements are accurate: partner disclosure is important, herpes is incurable but manageable, and condoms reduce but don't eliminate risk.",
        slide: 31
    },
    {
        old: "IV acyclovir must be infused slowly (over at least 1 hour) with adequate hydration to prevent crystalluria and nephrotoxicity. Rapid infusion or dehydration can cause acyclovir crystals to precipitate in renal tubules. BUN and creatinine should be monitored. IV push administration is contraindicated.",
        slide: 31
    },
    {
        old: "Trichomoniasis classically presents with a frothy, yellow-green, foul-smelling vaginal discharge along with genital itching and painful urination. Bacterial vaginosis causes a thin, gray discharge with fishy odor. Candidiasis causes thick, white 'cottage cheese' discharge. Chlamydia is often asymptomatic.",
        slide: 33
    },
    {
        old: "⚠️ CRITICAL TEACHING: Metronidazole causes a severe disulfiram-like reaction when combined with alcohol - severe nausea, vomiting, flushing, and headache. Patients must avoid ALL alcohol sources (including mouthwash and cough syrups) during treatment and for 48-72 hours after. Dark urine (not red) is a harmless side effect.",
        slide: 33
    },
    {
        old: "Trichomoniasis requires simultaneous treatment of BOTH sexual partners. If only one partner is treated, reinfection will occur when sexual activity resumes. Many men with trichomoniasis are asymptomatic but still carry and transmit the parasite.",
        slide: 33
    },
    {
        old: "Men with trichomoniasis are typically asymptomatic but remain infectious. Treatment of all sexual partners is essential to prevent 'ping-pong' reinfection. Both partners should be treated and abstain from sexual activity until treatment is complete.",
        slide: 33
    },
    {
        old: "Bacterial vaginosis is characterized by a thin, grayish discharge with a distinctive 'fishy' odor. The odor often worsens after intercourse or during menses due to the increase in vaginal pH. BV is caused by an overgrowth of anaerobic bacteria when normal vaginal flora is disrupted.",
        slide: 41
    },
    {
        old: "Unlike most STIs, routine partner treatment is NOT recommended for bacterial vaginosis. BV is not considered a true STI but is associated with having multiple sexual partners and douching. It results from disruption of normal vaginal flora rather than transmission of a specific pathogen.",
        slide: 41
    },
    {
        old: "BV presents with thin, gray, fishy-smelling discharge (worse after sex) and is treated with metronidazole or clindamycin. Candidiasis presents with thick, white cottage cheese discharge, intense itching, and is treated with antifungals (fluconazole or miconazole).",
        slide: 41
    },
    {
        old: "HPV is the most common STI. Many people with HPV have no symptoms and can unknowingly transmit the virus. While some HPV strains cause visible genital warts, others cause no visible symptoms but can lead to cervical, anal, or oropharyngeal cancers. There is no cure, but vaccines can prevent infection.",
        slide: 36
    },
    {
        old: "Imiquimod (Aldara) for genital warts is applied three times weekly (e.g., Mon/Wed/Fri) at bedtime, left on for 6-10 hours, then washed off. Treatment may take up to 16 weeks. Local skin reactions (redness, erosion) are expected and indicate immune response. Patience is required.",
        slide: 39
    },
    {
        old: "HPV vaccination is recommended for both boys and girls at ages 11-12 (can start at age 9). The vaccine is most effective when given BEFORE exposure to HPV through sexual activity. It prevents infection with HPV strains most likely to cause genital warts and cervical/other cancers but does NOT treat existing infections.",
        slide: 36
    },
    {
        old: "Certain high-risk HPV strains can cause cervical cancer. Women with HPV infection or history of genital warts should have annual Pap smears as recommended. Even vaccinated women should continue routine cervical cancer screening because the vaccine doesn't protect against all HPV strains.",
        slide: 50
    },
    {
        old: "HIV specifically targets and destroys CD4+ T-helper lymphocytes, which are critical for coordinating the immune response. As CD4 count declines, the patient becomes increasingly susceptible to opportunistic infections. When the immune system ceases to function adequately (CD4 <200), the patient has AIDS.",
        slide: 44
    },
    {
        old: "Opportunistic infections are caused by organisms that typically don't cause disease in people with healthy immune systems. When HIV destroys CD4 cells and immunity declines, these organisms 'take the opportunity' to cause serious, often life-threatening infections (e.g., Pneumocystis pneumonia, Candida, CMV).",
        slide: 44
    },
    {
        old: "HIV/AIDS, gonorrhea, syphilis, and chlamydia must be reported to the local health department. This allows public health officials to contact sexual partners and provide testing/treatment to slow disease transmission. Trichomoniasis and bacterial vaginosis are NOT reportable conditions.",
        slide: 10
    },
    {
        old: "Patients with HIV are permanently excluded from donating blood to prevent transmission to blood recipients. This restriction remains even if the patient's viral load is undetectable with treatment. This is an important teaching point for newly diagnosed patients.",
        slide: 50
    },
    {
        old: "Healthcare providers must put aside personal beliefs and approach STI assessment without judgment. Judgmental attitudes create barriers to care and may prevent patients from seeking treatment, leading to continued disease spread. A professional, nonjudgmental approach encourages honest disclosure and promotes trust.",
        slide: 48
    },
    {
        old: "All statements except the last are correct. Patients should: complete all antibiotics, avoid sex until cured, use condoms, ensure partners are treated, and return for follow-up. STIs do NOT provide immunity - patients can be reinfected with the same STI multiple times.",
        slide: 50
    },
    {
        old: "The nurse should first acknowledge the patient's emotional response - this validates their feelings. Then provide accurate education: herpes is manageable, many people have fulfilling relationships, transmission can be reduced with medication and condoms. Dismissing feelings or avoiding the topic is not therapeutic.",
        slide: 49
    }
];

// Apply replacements
for (const rep of mensReplacements) {
    html = html.replace(new RegExp(rep.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), rep.old + ' (Slide ' + rep.slide + ')');
}

for (const rep of stiReplacements) {
    html = html.replace(new RegExp(rep.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), rep.old + ' (Slide ' + rep.slide + ')');
}

console.log(`Added slide numbers to ${mensReplacements.length + stiReplacements.length} rationales`);

fs.writeFileSync(FILE, html, "utf8");
console.log(`\nWrote updated file to ${FILE}`);