/* Block 7 — Thyroid Medications (6 drugs)
   Source: pharmacology_B_drjames.txt */

const data_thyroid = [
    {
        g: "Levothyroxine", b: "Synthroid, Levoxyl, Tirosint", c: "Thyroid Hormone (T4)", cat: "endo",
        m: "Synthetic THYROXINE (T4), the major hormone produced by the thyroid gland. T4 is converted to the more active T3 in peripheral tissues. Replaces or supplements endogenous thyroid hormone in hypothyroidism. Long half-life (~7 days) allows once-daily dosing.",
        ind: "HYPOTHYROIDISM (primary, secondary, tertiary). Hashimoto's thyroiditis. Post-thyroidectomy replacement. Myxedema coma (IV). TSH suppression in thyroid cancer. Congenital hypothyroidism.",
        con: "Untreated adrenal insufficiency (give corticosteroids first — thyroid hormone increases cortisol metabolism). Acute MI (relative). Thyrotoxicosis.",
        aec: "Generally well-tolerated at proper doses. Signs of HYPERthyroidism if overdosed: palpitations, tachycardia, tremor, nervousness, insomnia, heat intolerance, weight loss, diarrhea.",
        aes: "⚠️ OVERREPLACEMENT: Angina, arrhythmias (especially atrial fibrillation), MI. Osteoporosis with chronic excess. Adrenal crisis if adrenal insufficiency not treated first.",
        inter: [
            {d: "Calcium, Iron, Antacids, Sucralfate", m: "BIND levothyroxine in GI tract → reduced absorption. Separate by 4 hours.", s: "high"},
            {d: "Cholestyramine, Colestipol", m: "Bind thyroid hormone — separate by 4-6 hours.", s: "high"},
            {d: "Warfarin", m: "Levothyroxine INCREASES warfarin effect → bleeding risk.", s: "med"},
            {d: "Estrogen (HRT, OCPs)", m: "Increases thyroxine-binding globulin → may need higher dose.", s: "med"}
        ],
        dosage: "Adults: Start 25-50mcg/day (lower in elderly, cardiac disease: 12.5-25mcg). Increase by 12.5-25mcg every 4-6 weeks until TSH normal. Full replacement typically 1.6mcg/kg/day. Myxedema coma: 200-500mcg IV loading.",
        admin: "Oral. Take on EMPTY STOMACH, 30-60 minutes BEFORE breakfast, with water only. Take at same time daily. Tirosint gel caps may have better absorption.",
        nurse: "⚠️ Take on EMPTY STOMACH 30-60 min before breakfast — food reduces absorption. Separate from calcium, iron, antacids by 4 hours. Monitor TSH 6-8 weeks after dose change. Watch for HYPERthyroid symptoms if overdosed. In elderly/cardiac patients: START LOW, GO SLOW. Narrow therapeutic index — brand substitution may affect levels."
    },
    {
        g: "Liothyronine", b: "Cytomel, Triostat", c: "Thyroid Hormone (T3)", cat: "endo",
        m: "Synthetic TRIIODOTHYRONINE (T3), the active thyroid hormone. More potent and faster-acting than T4 but shorter half-life (~1 day). Used when rapid effect needed or T4-to-T3 conversion impaired.",
        ind: "Myxedema coma (IV — faster onset). T3 suppression test. Short-term replacement before radioactive iodine therapy. Some use in combination with T4 for refractory hypothyroidism (controversial).",
        con: "Same as levothyroxine: untreated adrenal insufficiency, acute cardiovascular disease, thyrotoxicosis.",
        aec: "Same hyperthyroid symptoms as T4 but more pronounced: tachycardia, palpitations, tremor, anxiety, insomnia, weight loss, diarrhea.",
        aes: "Higher risk of cardiac adverse effects due to rapid onset and potency. Osteoporosis with chronic use.",
        inter: [
            {d: "Same as Levothyroxine", m: "Calcium, iron, antacids reduce absorption. Increases warfarin effect.", s: "high"}
        ],
        dosage: "Oral: Start 25mcg/day, increase by 12.5-25mcg every 1-2 weeks. Usual 25-75mcg/day in divided doses. Myxedema coma: 25-50mcg IV initially.",
        admin: "Oral, IV. Shorter half-life requires divided doses. IV for myxedema coma.",
        nurse: "Rarely used as monotherapy — T4 is standard. T3 has SHORT half-life requiring divided doses and causes more cardiac effects. Main use is myxedema coma (IV). 25mcg T3 ≈ 100mcg T4."
    },
    {
        g: "Methimazole", b: "Tapazole", c: "Antithyroid Agent (Thionamide)", cat: "endo",
        m: "Inhibits THYROID PEROXIDASE, blocking thyroid hormone SYNTHESIS (not release). Blocks oxidation of iodide and coupling of iodotyrosines. Preferred over PTU except in first trimester pregnancy.",
        ind: "HYPERTHYROIDISM (Graves' disease, toxic nodular goiter). Pre-treatment before thyroidectomy or radioactive iodine. Thyroid storm (with other agents).",
        con: "Known hypersensitivity. Breastfeeding (PTU preferred). First trimester pregnancy (teratogenic — use PTU).",
        aec: "GI upset, rash, urticaria, pruritus, arthralgia, headache. Transient leukopenia.",
        aes: "⚠️ AGRANULOCYTOSIS (0.2-0.5%) — potentially fatal. Monitor for fever, sore throat, mouth sores. HEPATOTOXICITY (cholestatic). Teratogenicity (aplasia cutis, choanal atresia).",
        inter: [
            {d: "Warfarin", m: "Hyperthyroidism increases warfarin metabolism; treating it may INCREASE warfarin effect.", s: "med"},
            {d: "Beta-blockers", m: "Often used together for symptom control.", s: "low"}
        ],
        dosage: "Initial: 15-30mg/day PO. Maintenance: 5-15mg/day. Thyroid storm: 60-80mg/day. Takes 4-8 weeks for full effect.",
        admin: "Oral. Can be given as single daily dose (longer half-life than PTU).",
        nurse: "⚠️ AGRANULOCYTOSIS: Teach patient — report IMMEDIATELY: fever, sore throat, mouth ulcers. Stop drug, check WBC. Usually in first 3 months. Takes 4-8 weeks for effect — patient needs beta-blockers while waiting. ⚠️ First trimester: Use PTU instead (methimazole is teratogenic)."
    },
    {
        g: "Propylthiouracil (PTU)", b: "PTU", c: "Antithyroid Agent (Thionamide)", cat: "endo",
        m: "Inhibits thyroid peroxidase (like methimazole) AND blocks peripheral T4→T3 conversion. Dual mechanism makes it useful in thyroid storm. Shorter half-life requires multiple daily doses.",
        ind: "Hyperthyroidism — FIRST TRIMESTER PREGNANCY (preferred). THYROID STORM (blocks T4→T3 conversion). When methimazole not tolerated.",
        con: "History of PTU-induced hepatotoxicity. Generally avoid if methimazole can be used.",
        aec: "Similar to methimazole: GI upset, rash, arthralgia, transient leukopenia.",
        aes: "⚠️ BLACK BOX: SEVERE HEPATOTOXICITY (including fatal liver failure). Monitor LFTs. AGRANULOCYTOSIS. ANCA-positive vasculitis.",
        inter: [
            {d: "Same as Methimazole", m: "Warfarin/digoxin effects change as thyroid normalizes.", s: "med"}
        ],
        dosage: "Initial: 100-150mg PO every 8 hours. Maintenance: 100-150mg/day. Thyroid storm: 200-250mg every 4 hours.",
        admin: "Oral. MUST be given in divided doses (every 8 hours) — less convenient than methimazole.",
        nurse: "⚠️ BLACK BOX: HEPATOTOXICITY — monitor LFTs, teach signs (jaundice, dark urine, RUQ pain). ⚠️ AGRANULOCYTOSIS: Same warning as methimazole. PTU preferred in: (1) First trimester, (2) Thyroid storm. After first trimester, switch to methimazole."
    },
    {
        g: "Radioactive Iodine (I-131)", b: "Iodotope, Sodium Iodide I-131", c: "Radiopharmaceutical", cat: "endo",
        m: "Radioactive isotope of iodine that is concentrated in thyroid tissue. Emits beta particles that destroy thyroid follicular cells over weeks to months. Results in permanent reduction in thyroid function — most patients become hypothyroid.",
        ind: "GRAVES' DISEASE (definitive treatment). Toxic multinodular goiter. Toxic adenoma. Thyroid cancer ablation (post-thyroidectomy). Adjunct in thyroid cancer.",
        con: "⚠️ PREGNANCY, BREASTFEEDING (absolutely contraindicated — fetal/neonatal thyroid destruction). Caution in severe hyperthyroidism (pretreat with antithyroid drugs to prevent thyroid storm).",
        aec: "Neck tenderness, thyroiditis (temporary). Nausea. Metallic taste.",
        aes: "⚠️ HYPOTHYROIDISM (expected outcome — lifelong levothyroxine needed). Thyroid storm (if not pretreated). Worsening Graves' ophthalmopathy. Radiation safety concerns. Salivary gland damage with high doses.",
        inter: [
            {d: "Antithyroid drugs", m: "Must stop methimazole/PTU several days before I-131 (interfere with uptake).", s: "high"},
            {d: "Iodine-containing products", m: "Block thyroid uptake — avoid contrast dye, amiodarone, iodine supplements.", s: "high"}
        ],
        dosage: "Hyperthyroidism: Typically 10-30 mCi (millicuries) PO, calculated based on thyroid size and uptake. Thyroid cancer: Much higher doses (100-200 mCi).",
        admin: "Oral (capsule or liquid). Patient must follow radiation safety precautions after treatment.",
        nurse: "⚠️ PREGNANCY TEST required before administration in women of childbearing age. ⚠️ RADIATION PRECAUTIONS: Patient should limit close contact (especially with children, pregnant women) for several days. Flush toilet twice, wash hands well. Use separate utensils. Sleep alone for a few days. Pretreatment with methimazole often needed in severe hyperthyroidism — stop 3-7 days before I-131. EXPECT HYPOTHYROIDISM — most patients need lifelong levothyroxine."
    },
    {
        g: "Potassium Iodide", b: "SSKI, Lugol's Solution, ThyroSafe", c: "Iodide / Thyroid Blocker", cat: "endo",
        m: "High doses of iodide cause WOLFF-CHAIKOFF EFFECT — temporary inhibition of thyroid hormone synthesis and release. Also reduces thyroid vascularity (useful pre-surgery). Different from radioactive iodine — this is stable iodide.",
        ind: "THYROID STORM (blocks hormone release — rapid effect). Pre-operative preparation for thyroidectomy (reduces gland vascularity). RADIATION EMERGENCY (blocks thyroid uptake of radioactive iodine). Expectorant (lower doses).",
        con: "Hypersensitivity to iodine. Dermatitis herpetiformis. Hyperkalemia (potassium content). Avoid in Hashimoto's thyroiditis.",
        aec: "GI upset, metallic taste, salivary gland swelling. Acne-like rash. Burning in mouth/throat.",
        aes: "⚠️ IODIDE-INDUCED HYPERTHYROIDISM (Jod-Basedow phenomenon) — especially in areas of iodine deficiency or autonomous nodules. Severe allergic reactions (rare).",
        inter: [
            {d: "ACE inhibitors, K-sparing diuretics", m: "Additive hyperkalemia.", s: "high"},
            {d: "Lithium", m: "Additive antithyroid effect — hypothyroidism.", s: "med"}
        ],
        dosage: "Thyroid storm: SSKI 5 drops (250mg) every 6 hours. Pre-op: Lugol's solution 3-5 drops TID for 10 days before surgery. Radiation emergency: 130mg daily for adults.",
        admin: "Oral. Dilute SSKI in water or juice (unpleasant taste). Start AFTER antithyroid drug (methimazole) in thyroid storm — iodide alone can worsen hyperthyroidism initially.",
        nurse: "⚠️ In THYROID STORM: Give antithyroid drug (methimazole) BEFORE potassium iodide — giving iodide first provides substrate for more hormone synthesis. Monitor for iodism (metallic taste, salivary swelling, skin eruptions). Check potassium if on ACE inhibitors or K-sparing diuretics. Radiation emergency: Start within hours of exposure, continue 10-14 days."
    }
];
