const data_anticoagulants = [
    {
        g: "Warfarin", b: "Coumadin, Jantoven", c: "Anticoagulant (Vitamin K Antagonist)", cat: "cv",
        m: "Inhibits the enzyme Vitamin K Epoxide Reductase (VKOR), which is responsible for converting inactive vitamin K epoxide to its active reduced form. This active vitamin K is a required cofactor for the hepatic synthesis of Vitamin K-dependent clotting factors II (prothrombin), VII, IX, and X, as well as the anticoagulant proteins C and S. By depleting the supply of active Vitamin K, warfarin prevents the further formation of functional clotting factors. It has no direct effect on established clots but prevents the extension of existing thrombi and the formation of new ones by allowing the body's natural fibrinolytic system to work unopposed. Its onset is delayed (3-5 days) because it does not affect factors already circulating in the blood.",
        ind: "Prophylaxis and treatment of Venous Thromboembolism (DVT), Pulmonary Embolism (PE), thromboembolic complications associated with Atrial Fibrillation or cardiac valve replacement, and reduction in the risk of recurrent Myocardial Infarction or stroke.",
        con: "Active major bleeding, Pregnancy (Category X - causes fetal hemorrhage, CNS defects, and death), hemorrhagic stroke, recent or planned surgery of the CNS or eye, and severe uncontrolled hypertension.",
        aec: "Common: Gastrointestinal distress (nausea, abdominal pain), easy bruising, minor bleeding (epistaxis, gum bleeding), and transient hair loss (alopecia).",
        aes: "MAJOR HEMORRHAGE (potentially fatal), skin necrosis or gangrene (rare, associated with protein C deficiency), 'purple toe' syndrome (cholesterol microembolization), and drug-induced hepatotoxicity.",
        inter: [
            {d: "NSAIDs / Aspirin", m: "CRITICAL bleeding risk; dual inhibition of platelets and direct damage to GI mucosa; avoid combination.", s: "critical"},
            {d: "Vitamin K Foods", m: "Directly antagonizes the drug effect; must maintain CONSISTENT daily intake to keep INR stable.", s: "high"},
            {d: "Antibiotics", m: "Kills intestinal flora that synthesize Vitamin K; leads to significantly increased INR and bleeding.", s: "high"},
            {d: "G-Herbs (Garlic/Ginger/Ginkgo)", m: "Additive antiplatelet effects and increased risk of major hemorrhage.", s: "high"}
        ],
        dosage: "Oral: Initial 2 mg to 10 mg once daily for 2 days. Maintenance: Typically 2 mg to 10 mg based on daily PT/INR results. Adjustments are precise.",
        admin: "Administer orally at the SAME TIME each day (usually evening) to maintain steady-state levels. Antidote: Vitamin K (Phytonadione). For urgent reversal: Prothrombin Complex Concentrate (PCC) or Fresh Frozen Plasma (FFP).",
        nurse: "Monitor PT/INR strictly (Target 2.0-3.0 for DVT/AFib; 2.5-3.5 for mechanical valves). Assess for signs of occult bleeding (guaiac-positive stool, hematuria, coffee-ground emesis). Teach patient to use a soft toothbrush and electric razor. Instruct patient to MAINTAIN a consistent (not zero) intake of green leafy vegetables. Advise avoiding all new OTC meds or herbal supplements without consulting the provider. Instruct patient to wear a medical alert bracelet."
    },
    {
        g: "Heparin", b: "Hep-Lock, Heparin Sodium", c: "Anticoagulant", cat: "cv",
        m: "A high-molecular-weight mucopolysaccharide that binds to and potently increases the activity of Antithrombin III. This complex then rapidly inactivates thrombin (Factor IIa), Factor Xa, and several other clotting factors (IX, XI, XII). By preventing the conversion of fibrinogen to fibrin, heparin inhibits the formation of a stable fibrin clot and stops the growth of existing thrombi. It does not dissolve existing clots. At high doses, it can also inhibit platelet aggregation and prolong the bleeding time. It has a very rapid onset and a short half-life (1.5 hours).",
        ind: "Acute treatment of DVT, Pulmonary Embolism, unstable angina, Acute MI, and prophylaxis of thrombosis during cardiac surgery, vascular surgery, or hemodialysis. Low-dose SC used for DVT prophylaxis in immobile patients.",
        con: "Uncontrolled active bleeding, history of Heparin-Induced Thrombocytopenia (HIT), severe thrombocytopenia (< 100,000 cells/mm³), and suspected intracranial hemorrhage.",
        aec: "Common: Injection site bruising, pain, local irritation, and transient hair loss with long-term use.",
        aes: "MAJOR BLEEDING and hemorrhage (GI, GU, intracranial), HEPARIN-INDUCED THROMBOCYTOPENIA (HIT - a 50% or greater drop in platelets due to immune-mediated antibodies), and osteoporosis (with use > 6 months).",
        inter: [
            {d: "Antiplatelets / NSAIDs", m: "Significantly increased risk of major hemorrhage due to combined effects.", s: "high"},
            {d: "Digoxin / Nitroglycerin", m: "May partially inhibit the anticoagulant effect of heparin; monitor aPTT closely.", s: "med"}
        ],
        dosage: "SC: 5000 units every 8 to 12 hours. IV Bolus: 80 units/kg. IV Infusion: 18 units/kg/hr titration based on aPTT nomogram.",
        admin: "SC or IV ONLY. Do NOT administer IM (causes massive hematomas). SC: inject into deep SC tissue of the abdomen; do not aspirate or rub. IV: always use an infusion pump and REQUIRE dual-nurse verification of every dose and titration change. Standard Heparin concentration is 10,000 units/mL; Hep-Lock flush is 10-100 units/mL.",
        nurse: "Monitor activated Partial Thromboplastin Time (aPTT) every 6 hours during titration (Target 1.5-2.5x control). Monitor Platelet count daily (Immediately notify provider if platelets drop by 50%). Antidote: Protamine Sulfate. Monitor for signs of bleeding (hematuria, epistaxis, abdominal pain)."
    },
    {
        g: "Enoxaparin", b: "Lovenox", c: "Low Molecular Weight Heparin (LMWH)", cat: "cv",
        m: "A depolymerized heparin derivative with a much smaller molecular size than unfractionated heparin. It has a significantly higher ratio of anti-Factor Xa activity to anti-Factor IIa (thrombin) activity. This results in a more predictable and stable anticoagulant response, a longer half-life (4.5 to 7 hours), and a lower incidence of Heparin-Induced Thrombocytopenia (HIT). It works by potentiating the inhibition of Factor Xa by antithrombin III, thereby blocking the common pathway of coagulation.",
        ind: "Prophylaxis of DVT following abdominal, hip, or knee surgery; treatment of established DVT and PE; and management of unstable angina and non-Q-wave Myocardial Infarction.",
        con: "Active major bleeding, history of HIT, hypersensitivity to heparin, pork products, or benzyl alcohol. Not for use in patients with prosthetic heart valves (in some populations).",
        aec: "Common: Local irritation and erythema at the injection site, minor bruising, and mild anemia.",
        aes: "Severe Hemorrhage, SPINAL/EPIDURAL HEMATOMA (Black Box warning - can lead to permanent paralysis in patients undergoing spinal procedures), and immune-mediated thrombocytopenia.",
        inter: [{d: "NSAIDs / Aspirin", m: "Significantly increased bleeding risk; use with extreme caution.", s: "high"}],
        dosage: "Subcutaneous: Prophylaxis: 30 mg to 40 mg once daily. Treatment: 1 mg/kg every 12 hours or 1.5 mg/kg once daily. Adjust dose in renal failure.",
        admin: "SC ONLY into the 'love handles' area of the abdomen. Do NOT expel the air bubble from the prefilled syringe (ensures the entire dose is delivered and prevents tracking). Do NOT rub the site after administration. Alternate left and right sides of the abdomen.",
        nurse: "Monitor CBC for signs of occult blood loss (Hgb/Hct). Routine monitoring of aPTT is NOT required due to predictable kinetics. Use with extreme caution in patients with renal impairment (eGFR < 30 requires 50% dose reduction). Monitor for neurological changes if the patient has had a spinal puncture."
    },
    {
        g: "Fondaparinux", b: "Arixtra", c: "Factor Xa Inhibitor (Anticoagulant)", cat: "cv",
        m: "A synthetic pentasaccharide that selectively and reversibly binds to antithrombin III. This binding induces a specific conformational change that increases antithrombin's affinity for Factor Xa by 300-fold. This results in the potent and specific inhibition of Factor Xa without any effect on thrombin (Factor IIa). It does not bind to platelet factor 4 (PF4), which means it does not cause Heparin-Induced Thrombocytopenia (HIT). It has 100% bioavailability and a long half-life (17-21 hours).",
        ind: "Prophylaxis of DVT in patients undergoing major orthopedic (hip/knee) or abdominal surgery; treatment of acute DVT and PE when combined with warfarin.",
        con: "Severe renal impairment (CrCl < 30 mL/min), body weight less than 50 kg (110 lbs), active major bleeding, and bacterial endocarditis.",
        aec: "Common: Nausea, insomnia, dizziness, and injection site reactions (rash, bruising).",
        aes: "MAJOR BLEEDING, spinal/epidural hematoma risk (Black Box), and thrombocytopenia (rare compared to heparin).",
        inter: [],
        dosage: "Subcutaneous: 2.5 mg once daily (prophylaxis). Treatment: 5 mg to 10 mg based on weight (>100kg: 10mg; 50-100kg: 7.5mg; <50kg: 5mg).",
        admin: "SC injection ONLY. Do NOT use in patients under 110 lbs for prophylaxis due to the extreme risk of major hemorrhage. Rotate sites in the abdomen. Do not expel the air bubble from the prefilled syringe.",
        nurse: "Monitor renal function (CrCl) baseline and throughout therapy as the drug is renally excreted. Assess for signs of bleeding. fondaparinux does NOT require routine aPTT or PT/INR monitoring. Monitor for signs of spinal hematoma (numbness, weakness in legs)."
    },
    {
        g: "Apixaban", b: "Eliquis", c: "Direct Factor Xa Inhibitor (DOAC)", cat: "cv",
        m: "Directly, selectively, and reversibly inhibits both free and clot-bound Factor Xa. By blocking the common pathway of the coagulation cascade, it prevents the conversion of prothrombin to thrombin, thereby inhibiting the amplification of thrombus development. It does not require antithrombin III for its action. It has a predictable anticoagulant effect, leading to a wide therapeutic index compared to warfarin.",
        ind: "Reduction of the risk of stroke and systemic embolism in patients with nonvalvular Atrial Fibrillation; prophylaxis and treatment of DVT and PE.",
        con: "Active pathological bleeding, severe hepatic impairment (Child-Pugh C), and prosthetic heart valves. Use with caution in severe renal failure.",
        aec: "Common: Nausea, easy bruising, minor epistaxis (nosebleed), and gum bleeding.",
        aes: "MAJOR HEMORRHAGE (GI, intracranial, or intraocular), and spinal/epidural hematoma risk during spinal procedures.",
        inter: [
            {d: "Strong CYP3A4/P-gp Inducers", m: "Significantly decreases apixaban levels; high risk of thromboembolic events.", s: "high"},
            {d: "Strong CYP3A4/P-gp Inhibitors", m: "Increases apixaban levels; high risk of major bleeding.", s: "high"}
        ],
        dosage: "Oral: 2.5 mg to 5 mg twice daily (BID). Standard dose is 5 mg BID unless specific renal/age/weight criteria are met.",
        admin: "Orally twice daily with or without food. Maintain consistent schedule. If a patient cannot swallow whole tablets, they can be crushed and mixed with water, apple juice, or applesauce. Antidote: Andexxa (Andexanet alfa).",
        nurse: "Routine lab monitoring (INR/aPTT) is NOT required. Assess for signs of bleeding (bruising, dark stools). Check renal function baseline. Educate patient that they must not stop the drug abruptly as the risk of stroke increases significantly."
    },
    {
        g: "Rivaroxaban", b: "Xarelto", c: "Direct Factor Xa Inhibitor (DOAC)", cat: "cv",
        m: "Directly and selectively inhibits Factor Xa, blocking the rate-limiting step of thrombin generation in the coagulation cascade. Like apixaban, it inhibits both free and clot-bound Factor Xa. It has high oral bioavailability when taken with food (for higher doses). It provides a rapid onset of anticoagulation (2-4 hours) and does not require initial bridging with heparin in most scenarios.",
        ind: "Prophylaxis of DVT and PE following hip or knee replacement; treatment of VTE; stroke prevention in nonvalvular Atrial Fibrillation; and reduction of CV risk in CAD/PAD (low dose).",
        con: "Active major bleeding, moderate to severe hepatic impairment, and prosthetic heart valves.",
        aec: "Common: Back pain, abdominal pain, bruising, and dizziness.",
        aes: "LIFE-THREATENING HEMORRHAGE, and risk of spinal hematoma (Black Box warning). Increased risk of thrombotic events if discontinued prematurely.",
        inter: [{d: "NSAIDs / Clopidogrel", m: "Significantly increased bleeding risk; additive effects.", s: "high"}],
        dosage: "Oral: 10 mg to 20 mg once daily. Doses above 15 mg require food.",
        admin: "Doses of 15 mg or 20 mg MUST be taken WITH THE EVENING MEAL to ensure adequate systemic absorption (absorption increases from 66% to nearly 100% with food). 10 mg can be taken without food.",
        nurse: "Assess for signs of bleeding. Monitor LFTs and renal function (avoid if CrCl < 15). Educate on the absolute necessity of taking with the largest meal of the day for higher doses. Instruct patient not to miss doses due to the short half-life."
    },
    {
        g: "Dabigatran", b: "Pradaxa", c: "Direct Thrombin Inhibitor (DOAC)", cat: "cv",
        m: "An oral prodrug that is rapidly converted to the active dabigatran, which competitively and reversibly inhibits free and clot-bound thrombin (Factor IIa). Thrombin is the final enzyme in the coagulation cascade that converts fibrinogen to fibrin. By blocking thrombin, dabigatran prevents the formation of fibrin mesh and inhibits thrombin-induced platelet aggregation. It has a fast onset (1 hour) and provides stable anticoagulation.",
        ind: "Prevention of stroke and systemic embolism in nonvalvular Atrial Fibrillation; treatment and prevention of recurrent DVT and PE.",
        con: "Active major bleeding, prosthetic heart valves (increased risk of MI/clot), and severe renal impairment (CrCl < 15 mL/min).",
        aec: "Common: Dyspepsia (GI upset - occurs in 35% of patients), gastritis-like symptoms, nausea, and abdominal pain.",
        aes: "MAJOR GI BLEEDING (demonstrates a higher risk of GI hemorrhage than warfarin), intracranial hemorrhage, and anaphylaxis.",
        inter: [{d: "P-glycoprotein Inhibitors", m: "May increase dabigatran levels; monitor for bleeding.", s: "med"}],
        dosage: "Oral: 75 mg to 150 mg twice daily (BID). Adjust dose based on renal function.",
        admin: "Must be swallowed whole; do NOT crush, chew, or open capsules. Opening the capsule increases absorption by 75%, leading to toxic levels and fatal hemorrhage. Keep in original manufacturer bottle to protect from moisture; discard 4 months after opening. Antidote: Idarucizumab (Praxbind).",
        nurse: "Assess for GI symptoms and occult bleeding. Educate patient NOT to use pill organizers; they must keep the drug in the original bottle with the desiccant cap. Monitor renal function strictly. Advise patient to take with a full glass of water."
    },
    {
        g: "Alteplase", b: "Activase (tPA)", c: "Thrombolytic / Fibrinolytic", cat: "cv",
        m: "A recombinant form of human tissue plasminogen activator. It binds directly to fibrin in a thrombus and converts the entrapped plasminogen to the active enzyme plasmin. Plasmin then digests the fibrin meshwork of the clot, resulting in its rapid dissolution (thrombolysis). It is 'clot-specific,' meaning it has a higher affinity for fibrin-bound plasminogen than circulating plasminogen, though it still creates a systemic lytic state.",
        ind: "Management of Acute Ischemic Stroke (MUST be initiated within 3 to 4.5 hours of symptom onset); Acute Myocardial Infarction; and massive Pulmonary Embolism. Also used at low doses to clear occluded central venous catheters.",
        con: "Active internal bleeding, history of recent stroke (within 3 months), severe uncontrolled hypertension (SBP > 185 or DBP > 110), recent major surgery or trauma, and intracranial neoplasm or aneurysm.",
        aec: "Common: Minor bleeding from gums, nose, or previous IV sites; fever; and nausea.",
        aes: "INTRACRANIAL HEMORRHAGE (ICH), major life-threatening GI or GU hemorrhage, and fatal anaphylaxis. Reperfusion arrhythmias (during AMI treatment).",
        inter: [{d: "Anticoagulants / Antiplatelets", m: "Extreme, often fatal risk of hemorrhage; avoid concurrent use until alteplase is cleared.", s: "critical"}],
        dosage: "IV: Ischemic Stroke: 0.9 mg/kg (Max 90 mg). 10% given as initial bolus over 1 minute, followed by 90% as continuous infusion over 60 minutes.",
        admin: "IV ONLY via a dedicated large-bore IV line. Perform a thorough neurological assessment and obtain a non-contrast CT scan to rule out ICH BEFORE administration. Reconstitute with sterile water only; do not shake the vial (swirl gently).",
        nurse: "Perform neuro checks and BP monitoring every 15 minutes during the infusion and every 30 mins for the next 6 hours. Avoid all invasive procedures (no IM injections, no Foley, no arterial sticks) for 24 hours. Maintain absolute bedrest. Monitor for any change in mental status."
    },
    {
        g: "Reteplase", b: "Retavase", c: "Thrombolytic", cat: "cv",
        m: "A recombinant plasminogen activator that is a non-glycosylated deletion mutant of native tPA. It is less fibrin-specific than alteplase, which allows it to penetrate deeper into the thrombus meshwork to promote dissolution. It has a longer half-life (13-16 minutes), which permits convenient double-bolus dosing rather than a continuous infusion. Like alteplase, it converts plasminogen to plasmin to digest fibrin.",
        ind: "Management of acute Myocardial Infarction (AMI) in adults to improve ventricular function, reduce the incidence of heart failure, and decrease mortality associated with AMI.",
        con: "Active internal bleeding, recent intracranial hemorrhage, severe uncontrolled hypertension, and recent major surgery.",
        aec: "Bleeding at injection sites, anemia, and nausea.",
        aes: "Severe hemorrhage (GI/GU), intracranial hemorrhage, and REPERFUSION ARRHYTHMIAS (e.g., accelerated idioventricular rhythm, PVCs, VT).",
        inter: [],
        dosage: "IV: 10 units bolus given over 2 minutes, followed by a second 10 units bolus 30 minutes later.",
        admin: "IV Bolus only. Do not administer other medications in the same IV line as reteplase. Use a dedicated line. Incompatible with heparin and dobutamine in the same line.",
        nurse: "Monitor for reperfusion arrhythmias (which indicate the clot is dissolving and blood flow is returning). Assess for signs of bleeding. Monitor EKG and BP continuously. Maintain bedrest and avoid invasive procedures."
    }
];
