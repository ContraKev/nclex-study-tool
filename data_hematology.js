/* Hematology & Blood Products - NCLEX Essential
   Anemia treatments, growth factors, blood products */

const data_hematology = [
    {
        g: "Ferrous Sulfate", b: "Feosol, Slow FE, Fer-In-Sol", c: "Iron Supplement", cat: "hem",
        m: "Elemental iron essential for hemoglobin synthesis. Absorbed primarily in duodenum. Incorporated into hemoglobin in RBC precursors in bone marrow.",
        ind: "Iron deficiency anemia (most common anemia). Pregnancy (increased iron needs). Chronic blood loss (menorrhagia, GI bleeding). Inadequate dietary intake.",
        con: "Hemochromatosis. Hemolytic anemias (not iron deficiency). Iron overload. Repeated blood transfusions. GI obstruction.",
        aec: "⚠️ GI UPSET (very common): Nausea, constipation, dark/black stools, abdominal cramping. Teeth staining (liquid forms). Metallic taste.",
        aes: "Iron toxicity/overdose (especially in children — leading cause of pediatric poisoning death). GI hemorrhage. Hepatotoxicity.",
        inter: [
            {d: "Antacids, PPIs, H2 blockers", m: "Decrease iron absorption — need acidic environment", s: "high"},
            {d: "Tetracyclines, fluoroquinolones", m: "Iron chelates antibiotics — separate by 2-4 hours", s: "high"},
            {d: "Levothyroxine", m: "Iron decreases thyroid hormone absorption — separate by 4 hours", s: "high"},
            {d: "Calcium supplements", m: "Decreases iron absorption", s: "med"}
        ],
        dosage: "Adults: 325mg (65mg elemental iron) 1-3 times daily. Children: 3-6mg/kg/day elemental iron. Take for 3-6 months to replenish stores.",
        admin: "Take on EMPTY STOMACH for best absorption (1 hour before or 2 hours after meals). If GI upset intolerable, take with small amount of food (decreases absorption 50%). Take with vitamin C (enhances absorption).",
        nurse: "⚠️ BLACK STOOLS ARE NORMAL — but test for occult blood if concerned about GI bleed. Warn about constipation — increase fluids, fiber. Liquid forms: use straw, rinse mouth (prevents teeth staining). KEEP AWAY FROM CHILDREN — iron overdose is deadly. Reticulocyte count should increase in 1 week; Hgb in 2-4 weeks."
    },
    {
        g: "Iron Dextran", b: "INFeD, Dexferrum", c: "Parenteral Iron", cat: "hem",
        m: "Iron-dextran complex given IM or IV when oral iron not tolerated or absorption impaired. Iron released slowly from complex, taken up by reticuloendothelial system, then incorporated into hemoglobin.",
        ind: "Iron deficiency anemia when oral therapy fails or contraindicated. Malabsorption syndromes. Inflammatory bowel disease. Chronic kidney disease on dialysis. Significant ongoing blood loss.",
        con: "Hypersensitivity to iron dextran. Anemias not due to iron deficiency. Acute kidney infection.",
        aec: "Injection site reactions (IM). Headache. Dizziness. Nausea. Flushing. Brown discoloration at injection site.",
        aes: "⚠️ ANAPHYLAXIS (black box warning) — test dose required. Delayed reactions (1-2 days): arthralgia, myalgia, fever. Hypotension. Respiratory distress.",
        inter: [
            {d: "ACE inhibitors", m: "Increased risk of anaphylactoid reactions", s: "med"},
            {d: "Chloramphenicol", m: "May delay response to iron therapy", s: "low"}
        ],
        dosage: "Total dose calculated based on hemoglobin deficit and body weight. Test dose: 25mg IV over 5 min, observe 1 hour before full dose.",
        admin: "⚠️ TEST DOSE MANDATORY. Have epinephrine, resuscitation equipment available. IV preferred over IM. If IM: use Z-track technique (prevents skin staining). Infuse slowly.",
        nurse: "⚠️ BLACK BOX: ANAPHYLAXIS RISK — test dose required. Monitor for 1 hour after test dose, 30 min after each dose. Have crash cart ready. Signs of reaction: dyspnea, chest pain, hypotension, urticaria. IM injection: Z-track technique prevents permanent skin staining. Monitor H&H in 2-4 weeks."
    },
    {
        g: "Iron Sucrose", b: "Venofer", c: "Parenteral Iron", cat: "hem",
        m: "Iron-sucrose complex for IV administration. Lower molecular weight than iron dextran → lower anaphylaxis risk. Iron released to transferrin after uptake by reticuloendothelial system.",
        ind: "Iron deficiency anemia in chronic kidney disease (dialysis and non-dialysis). When oral iron ineffective or contraindicated.",
        con: "Iron overload. Anemias not due to iron deficiency. Known hypersensitivity.",
        aec: "Hypotension (especially if infused too fast). Headache. Nausea. Muscle cramps. Pruritus.",
        aes: "Anaphylaxis (rare, less than iron dextran). Hypotension. Chest pain. Dyspnea.",
        inter: [
            {d: "Oral iron supplements", m: "Reduce absorption of oral iron — separate dosing", s: "low"}
        ],
        dosage: "CKD-dialysis: 100mg per dialysis session x 10 doses (1000mg total). CKD-nondialysis: 200mg x 5 doses over 14 days.",
        admin: "IV push (100mg over 2-5 min) or IV infusion (dilute in NS, infuse over 15+ min). No test dose required but observe for reactions. Give during dialysis for HD patients.",
        nurse: "SAFER than iron dextran — no test dose required, but still monitor for reactions. Watch BP during infusion (hypotension common with fast infusion). Can be given during hemodialysis. Black box warning removed (lower risk than dextran). Still have resuscitation equipment available."
    },
    {
        g: "Cyanocobalamin", b: "Nascobal, B12 injections", c: "Vitamin B12 Supplement", cat: "hem",
        m: "Essential cofactor for DNA synthesis and myelin maintenance. Required for conversion of methylmalonyl-CoA to succinyl-CoA and homocysteine to methionine. Deficiency → megaloblastic anemia and neurological damage.",
        ind: "Vitamin B12 deficiency. Pernicious anemia (intrinsic factor deficiency). Post-gastrectomy. Malabsorption syndromes. Strict vegetarian/vegan diet. Metformin-induced B12 deficiency.",
        con: "Leber's hereditary optic neuropathy (can cause optic atrophy). Cobalt hypersensitivity.",
        aec: "Injection site pain. Diarrhea. Itching. Hypokalemia (during initial treatment as RBCs are made). Flushing.",
        aes: "Anaphylaxis (rare). Pulmonary edema. Heart failure (fluid retention). Hypokalemia (can be severe).",
        inter: [
            {d: "Metformin", m: "Decreases B12 absorption — monitor levels", s: "med"},
            {d: "PPIs, H2 blockers", m: "Decrease B12 absorption (need acid for release from food)", s: "med"},
            {d: "Colchicine", m: "Decreases B12 absorption", s: "low"}
        ],
        dosage: "Deficiency: 1000mcg IM daily x 7 days, then weekly x 4 weeks, then monthly for life (pernicious anemia). Oral: 1000-2000mcg daily.",
        admin: "IM or deep SubQ for pernicious anemia (no intrinsic factor = no oral absorption). Oral supplements work for dietary deficiency only. Nasal spray available (Nascobal).",
        nurse: "⚠️ PERNICIOUS ANEMIA = LIFELONG INJECTIONS (no intrinsic factor to absorb oral B12). Check potassium during initial treatment — hypokalemia can occur as new RBCs are made. Neurological symptoms (paresthesias, ataxia) may be permanent if treatment delayed. Assess for neuro changes. Reticulocyte count increases in 3-4 days."
    },
    {
        g: "Folic Acid", b: "Folate, Folvite", c: "Vitamin B9 Supplement", cat: "hem",
        m: "Essential for DNA/RNA synthesis and amino acid metabolism. Converted to tetrahydrofolate (active form). Critical during pregnancy for neural tube development. Deficiency → megaloblastic anemia.",
        ind: "Folate deficiency anemia. Pregnancy (neural tube defect prevention). Methotrexate rescue (leucovorin). Alcoholism. Malabsorption. Hemolytic anemias. Dialysis patients.",
        con: "Undiagnosed anemia (can mask B12 deficiency). Pernicious anemia (unless with B12 — folic acid alone worsens neuro symptoms).",
        aec: "Rare: Nausea. Altered sleep patterns. Irritability. GI disturbances.",
        aes: "Can mask B12 deficiency → irreversible neurological damage. Allergic reactions (rare).",
        inter: [
            {d: "Phenytoin", m: "Mutual decrease in levels", s: "high"},
            {d: "Methotrexate", m: "Folic acid antagonizes methotrexate effect", s: "high"},
            {d: "Sulfasalazine", m: "Decreases folate absorption", s: "med"}
        ],
        dosage: "Deficiency: 1mg daily. Pregnancy: 400-800mcg daily (4mg if previous neural tube defect). Dialysis: 1mg daily.",
        admin: "Oral, can take with or without food. Begin folate supplementation BEFORE conception for neural tube defect prevention.",
        nurse: "⚠️ CRITICAL PREGNANCY COUNSELING: Start folate BEFORE pregnancy — neural tube closes by day 28 (often before pregnancy known). Do NOT use folate alone for undiagnosed anemia — must rule out B12 deficiency first (folate corrects anemia but neuro damage progresses). High-risk pregnancies need 4mg daily."
    },
    {
        g: "Epoetin Alfa", b: "Epogen, Procrit", c: "Erythropoiesis-Stimulating Agent (ESA)", cat: "hem",
        m: "Recombinant human erythropoietin. Binds to erythropoietin receptors on erythroid progenitor cells in bone marrow → stimulates RBC production. Mimics natural kidney-produced erythropoietin.",
        ind: "Anemia of chronic kidney disease (most common). Chemotherapy-induced anemia. Zidovudine-induced anemia in HIV. Reduce need for transfusion in surgical patients.",
        con: "⚠️ Uncontrolled hypertension. Pure red cell aplasia (anti-erythropoietin antibodies). History of serious allergic reaction.",
        aec: "Hypertension (very common). Headache. Arthralgia. Injection site reactions. Flu-like symptoms.",
        aes: "⚠️ THROMBOEMBOLIC EVENTS (stroke, MI, DVT). Pure red cell aplasia. Hypertensive encephalopathy. Seizures. Tumor progression (in cancer).",
        inter: [
            {d: "Antihypertensives", m: "May need dose adjustment as BP rises", s: "med"}
        ],
        dosage: "CKD: 50-300 units/kg 3x/week IV or SubQ. Target Hgb 10-12 g/dL (not >12). Adjust dose to avoid rapid Hgb rise (>1g/dL in 2 weeks).",
        admin: "SubQ or IV (IV preferred for dialysis patients). Do NOT shake vial (denatures protein). Single-use vials only.",
        nurse: "⚠️ BLACK BOX: Increased mortality, MI, stroke, tumor progression. Target Hgb 10-12 g/dL — do NOT exceed 12 g/dL. Monitor BP closely — hypertension common (may need to start/adjust antihypertensives). Check iron stores — ESAs need adequate iron to work. Takes 2-6 weeks for effect."
    },
    {
        g: "Darbepoetin Alfa", b: "Aranesp", c: "Erythropoiesis-Stimulating Agent (ESA)", cat: "hem",
        m: "Modified erythropoietin with longer half-life than epoetin alfa (3x longer). Same mechanism: stimulates erythroid progenitor cells → increased RBC production.",
        ind: "Anemia of chronic kidney disease. Chemotherapy-induced anemia in non-myeloid malignancies.",
        con: "Same as epoetin: uncontrolled HTN, pure red cell aplasia, serious allergic reaction history.",
        aec: "Same as epoetin: hypertension, headache, arthralgia, fatigue.",
        aes: "Same as epoetin: thromboembolic events, PRCA, seizures, tumor progression.",
        inter: [
            {d: "Antihypertensives", m: "May need dose adjustment", s: "med"}
        ],
        dosage: "CKD: 0.45mcg/kg SubQ or IV once weekly or 0.75mcg/kg every 2 weeks. Chemotherapy: 2.25mcg/kg weekly or 500mcg every 3 weeks.",
        admin: "Advantage: Less frequent dosing than epoetin. Do not shake. Use single-dose vials.",
        nurse: "Same black box warnings as epoetin. Advantage: once weekly or every 2 weeks vs 3x/week (better for non-dialysis CKD patients). Same Hgb targets (10-12 g/dL). Same monitoring: BP, iron stores, H&H."
    },
    {
        g: "Filgrastim", b: "Neupogen, Zarxio (biosimilar)", c: "Granulocyte Colony-Stimulating Factor (G-CSF)", cat: "hem",
        m: "Recombinant human G-CSF. Stimulates neutrophil production in bone marrow. Reduces duration of neutropenia. Also mobilizes stem cells into peripheral blood for collection.",
        ind: "⚠️ CHEMOTHERAPY-INDUCED NEUTROPENIA (most common). Bone marrow transplant. Severe chronic neutropenia. Peripheral blood stem cell mobilization.",
        con: "Hypersensitivity to E. coli-derived proteins. Do not give 24 hours before or after chemotherapy.",
        aec: "⚠️ BONE PAIN (very common — 30%). Injection site reactions. Headache. Fatigue. Nausea.",
        aes: "Splenic rupture (rare but serious). ARDS. Allergic reactions. Capillary leak syndrome. Sickle cell crisis (in sickle cell patients).",
        inter: [
            {d: "Chemotherapy", m: "Do NOT give within 24 hours of chemo — kills rapidly dividing cells", s: "high"}
        ],
        dosage: "Chemo-induced neutropenia: 5mcg/kg/day SubQ starting 24-72 hours AFTER chemotherapy until ANC recovery. Stem cell mobilization: 10mcg/kg/day.",
        admin: "SubQ preferred (IV also acceptable). Start 24-72 hours AFTER chemo, stop 24 hours BEFORE next cycle. Single-use vials. Can teach patient self-injection.",
        nurse: "⚠️ TIMING IS CRITICAL: Give 24-72 hours AFTER chemo, stop 24 hours BEFORE next dose. Bone pain is very common — treat with acetaminophen/NSAIDs (not opioids first-line). Report left upper quadrant pain (splenic rupture). Monitor CBC/ANC. Discontinue once ANC recovers."
    },
    {
        g: "Pegfilgrastim", b: "Neulasta, Udenyca (biosimilar)", c: "Pegylated G-CSF", cat: "hem",
        m: "Pegylated form of filgrastim with extended half-life (15-80 hours vs 3-4 hours). Same mechanism: stimulates neutrophil production. PEGylation reduces renal clearance.",
        ind: "Chemotherapy-induced neutropenia prevention. Given ONCE per chemotherapy cycle.",
        con: "Same as filgrastim. Do not use in infants (benzyl alcohol preservative). Do not give 14 days before or 24 hours after chemotherapy.",
        aec: "Bone pain (very common). Injection site reactions. Headache.",
        aes: "Same as filgrastim: splenic rupture, ARDS, capillary leak, sickle cell crisis.",
        inter: [
            {d: "Chemotherapy", m: "Do NOT give within 14 days before or 24 hours after chemo", s: "high"}
        ],
        dosage: "6mg SubQ ONCE per chemotherapy cycle, given 24-72 hours after chemotherapy.",
        admin: "Single 6mg dose per cycle (vs daily filgrastim). On-body injector (Neulasta Onpro) can be applied day of chemo and delivers drug next day. Do NOT administer to infants.",
        nurse: "ADVANTAGE: Once per cycle vs daily injections. Same timing rules as filgrastim. On-body injector option improves compliance but teach patient about the device. Same bone pain issue — acetaminophen helps. Same splenic rupture warning. Check ANC before each chemo cycle."
    },
    {
        g: "Oprelvekin", b: "Neumega", c: "Interleukin-11 (Thrombopoietic Agent)", cat: "hem",
        m: "Recombinant human interleukin-11. Stimulates megakaryocyte proliferation and maturation → increases platelet production. Used for chemotherapy-induced thrombocytopenia.",
        ind: "Prevention of severe thrombocytopenia following myelosuppressive chemotherapy in non-myeloid malignancies.",
        con: "Hypersensitivity. Caution in heart failure, atrial arrhythmias, fluid retention states.",
        aec: "⚠️ FLUID RETENTION (edema, pleural effusions). Dyspnea. Tachycardia. Atrial arrhythmias. Conjunctival redness.",
        aes: "Atrial fibrillation/flutter. Pulmonary edema. Anaphylaxis. Papilledema (blurred vision).",
        inter: [
            {d: "Diuretics", m: "May need increased doses due to fluid retention", s: "med"}
        ],
        dosage: "50mcg/kg SubQ once daily. Start 6-24 hours after chemotherapy. Continue until platelets >50,000 (max 21 days).",
        admin: "SubQ injection. Start 6-24 hours after chemo completion. Discontinue 2 days before next chemotherapy cycle.",
        nurse: "⚠️ FLUID RETENTION is major issue — daily weights, monitor for edema, dyspnea, pleural effusions. Pre-existing heart disease is relative contraindication. Discontinue for papilledema (visual changes). Less commonly used now due to side effects — newer agents preferred."
    },
    {
        g: "Vitamin K (Phytonadione)", b: "Mephyton, AquaMEPHYTON", c: "Fat-Soluble Vitamin / Coagulation Factor", cat: "hem",
        m: "Essential cofactor for hepatic synthesis of clotting factors II, VII, IX, X and proteins C and S. Reverses vitamin K antagonist (warfarin) effect.",
        ind: "Warfarin overdose/reversal. Vitamin K deficiency bleeding. Hemorrhagic disease of newborn (prophylaxis). Malabsorption syndromes. Prolonged antibiotic therapy.",
        con: "Hypersensitivity.",
        aec: "Injection site pain/swelling. Flushing. Altered taste. Transient hypotension.",
        aes: "⚠️ ANAPHYLAXIS (IV route — black box). Warfarin resistance (if excessive doses given).",
        inter: [
            {d: "Warfarin", m: "Reverses warfarin effect — use only for reversal indication", s: "high"},
            {d: "Broad-spectrum antibiotics", m: "Kill gut flora that produce vitamin K → may need supplementation", s: "low"}
        ],
        dosage: "Warfarin reversal: 1-10mg oral, SubQ, IM, or slow IV (based on INR and bleeding). Newborn prophylaxis: 0.5-1mg IM at birth.",
        admin: "⚠️ IV route: ANAPHYLAXIS RISK — dilute in D5W or NS, infuse slowly (over 15-30 min). Oral preferred for non-emergent reversal. IM for newborns.",
        nurse: "⚠️ IV VITAMIN K: Black box for anaphylaxis — use only when rapid reversal needed and oral not feasible. Have resuscitation equipment ready. For minor warfarin over-anticoagulation: hold warfarin, give oral vitamin K. Takes 6-24 hours for effect (faster IV). Too much = warfarin resistance for days."
    },
    {
        g: "Aminocaproic Acid", b: "Amicar", c: "Antifibrinolytic Agent", cat: "hem",
        m: "Inhibits plasminogen activators and, to a lesser degree, plasmin. Prevents breakdown of clots by blocking fibrinolysis. Does NOT promote clot formation — preserves existing clots.",
        ind: "Excessive bleeding from hyperfibrinolysis. Post-surgical bleeding (cardiac, dental). Hemophilia-related bleeding. Subarachnoid hemorrhage (prevent rebleeding).",
        con: "DIC (disseminated intravascular coagulation). Active intravascular clotting. Upper urinary tract bleeding (can form clots in ureters).",
        aec: "Nausea, diarrhea, abdominal cramps. Dizziness. Headache. Nasal congestion.",
        aes: "⚠️ THROMBOSIS (clots can form in blood vessels). Myopathy/rhabdomyolysis (with prolonged use). Renal failure (clots in ureters). Seizures (high doses).",
        inter: [
            {d: "Estrogens/oral contraceptives", m: "Increased thrombosis risk", s: "high"},
            {d: "Clotting factor concentrates", m: "Additive thrombosis risk", s: "high"}
        ],
        dosage: "Loading: 4-5g IV or oral over 1 hour. Maintenance: 1-1.25g/hour or 1-1.25g oral every hour (max 30g/day).",
        admin: "IV: Dilute in NS or D5W, infuse slowly. Monitor for hypotension with rapid infusion. Can give orally (syrup or tabs).",
        nurse: "⚠️ CONTRAINDICATED IN DIC — will worsen organ damage. Monitor for thrombosis (DVT signs, PE symptoms). With prolonged use >1 week: monitor CK for myopathy. Avoid in upper urinary tract bleeding (clots block ureters → hydronephrosis). Used adjunctively with factor replacement in hemophilia."
    },
    {
        g: "Tranexamic Acid", b: "Lysteda, Cyklokapron", c: "Antifibrinolytic Agent", cat: "hem",
        m: "Competitive inhibitor of plasminogen activation. More potent than aminocaproic acid (10x). Prevents clot breakdown without promoting new clot formation.",
        ind: "Heavy menstrual bleeding (oral). Prevention of bleeding in hemophilia (oral/IV). Trauma-associated hemorrhage. Post-surgical bleeding.",
        con: "Active thromboembolic disease. Subarachnoid hemorrhage (some sources). History of convulsions. Color vision defects (relative).",
        aec: "Headache. Nasal/sinus symptoms. Back pain. Abdominal pain. Nausea.",
        aes: "Thromboembolic events (DVT, PE, stroke). Seizures (especially with renal impairment). Visual disturbances.",
        inter: [
            {d: "Hormonal contraceptives", m: "Increased thrombosis risk", s: "high"},
            {d: "Factor IX concentrates", m: "Additive thrombosis risk", s: "high"}
        ],
        dosage: "Menorrhagia: 1300mg TID x 5 days during menstruation. IV (surgical): 10mg/kg before surgery, then 25mg/kg/day.",
        admin: "Oral tablets (do not crush). IV: slow infusion (100mg/min max). Use for maximum 5 days per menstrual cycle.",
        nurse: "POPULAR FOR MENORRHAGIA — first antifibrinolytic FDA-approved for heavy periods. Teach: Take during menstruation only (max 5 days/cycle). Do NOT use with hormonal birth control containing estrogen (thrombosis risk). Report vision changes, leg swelling, chest pain. Same thrombosis precautions as aminocaproic acid."
    }
];
