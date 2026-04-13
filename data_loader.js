// Master Data Aggregator - Globally Exposed
window.drugDB = [];

function mergeData(groupData) {
    if (Array.isArray(groupData)) {
        groupData.forEach(d => {
            if (!window.drugDB.some(existing => existing.g === d.g)) {
                window.drugDB.push(d);
            }
        });
    }
}

// Atomic Loads
if (typeof data_lipids_statins !== 'undefined') mergeData(data_lipids_statins);
if (typeof data_lipids_resins !== 'undefined') mergeData(data_lipids_resins);
if (typeof data_lipids_fibrates_misc !== 'undefined') mergeData(data_lipids_fibrates_misc);

// RAAS Atomic Loads
if (typeof data_raas_ace !== 'undefined') mergeData(data_raas_ace);
if (typeof data_raas_arb_dri !== 'undefined') mergeData(data_raas_arb_dri);

// CCB & Beta Atomic Loads
if (typeof data_ccb !== 'undefined') mergeData(data_ccb);
if (typeof data_beta_blockers !== 'undefined') mergeData(data_beta_blockers);

// Adrenergics & Vasodilators Atomic Loads
if (typeof data_adrenergics !== 'undefined') mergeData(data_adrenergics);
if (typeof data_vasodilators !== 'undefined') mergeData(data_vasodilators);

// Diuretics Atomic Loads
if (typeof data_diuretics_loop_thiazide !== 'undefined') mergeData(data_diuretics_loop_thiazide);
if (typeof data_diuretics_ksparing_misc !== 'undefined') mergeData(data_diuretics_ksparing_misc);

// CV Specific Atomic Loads
if (typeof data_angina_hf !== 'undefined') mergeData(data_angina_hf);
if (typeof data_antiplatelets !== 'undefined') mergeData(data_antiplatelets);
if (typeof data_anticoagulants !== 'undefined') mergeData(data_anticoagulants);
if (typeof data_antiarrhythmics !== 'undefined') mergeData(data_antiarrhythmics);

// Diabetes Atomic Loads
if (typeof data_diabetes_sensitizers !== 'undefined') mergeData(data_diabetes_sensitizers);
if (typeof data_diabetes_secretagogues !== 'undefined') mergeData(data_diabetes_secretagogues);
if (typeof data_diabetes_alpha_sglt2 !== 'undefined') mergeData(data_diabetes_alpha_sglt2);
if (typeof data_diabetes_gliptin_glp1a !== 'undefined') mergeData(data_diabetes_gliptin_glp1a);
if (typeof data_diabetes_insulins_part1 !== 'undefined') mergeData(data_diabetes_insulins_part1);
if (typeof data_diabetes_insulins_part2 !== 'undefined') mergeData(data_diabetes_insulins_part2);

// Pain Management Atomic Loads
if (typeof data_pain_adjuvants !== 'undefined') mergeData(data_pain_adjuvants);
if (typeof data_pain_opioid_agonists !== 'undefined') mergeData(data_pain_opioid_agonists);
if (typeof data_pain_partial_antagonists !== 'undefined') mergeData(data_pain_partial_antagonists);

// Antimicrobials Atomic Loads
if (typeof data_antimicrobials_part1 !== 'undefined') mergeData(data_antimicrobials_part1);
if (typeof data_antimicrobials_part2 !== 'undefined') mergeData(data_antimicrobials_part2);
if (typeof data_antimicrobials_part3 !== 'undefined') mergeData(data_antimicrobials_part3);

// Respiratory Atomic Loads
if (typeof data_respiratory_part1 !== 'undefined') mergeData(data_respiratory_part1);
if (typeof data_respiratory_part2 !== 'undefined') mergeData(data_respiratory_part2);

// Corticosteroids & Immunity Atomic Loads
if (typeof data_corticosteroids_immunity !== 'undefined') mergeData(data_corticosteroids_immunity);

// CNS & Psych Atomic Loads
if (typeof data_cns_psych !== 'undefined') mergeData(data_cns_psych);

// GI Atomic Loads
if (typeof data_gi !== 'undefined') mergeData(data_gi);

// Thyroid Atomic Loads
if (typeof data_thyroid !== 'undefined') mergeData(data_thyroid);

// Neurology Atomic Loads
if (typeof data_parkinsons !== 'undefined') mergeData(data_parkinsons);
if (typeof data_alzheimers !== 'undefined') mergeData(data_alzheimers);

// Reproductive & OB Atomic Loads
if (typeof data_reproductive !== 'undefined') mergeData(data_reproductive);

// STI & Sexual Health Atomic Loads
if (typeof data_sti_drugs !== 'undefined') mergeData(data_sti_drugs);
if (typeof data_womens_health !== 'undefined') mergeData(data_womens_health);
if (typeof data_mens_health !== 'undefined') mergeData(data_mens_health);

// Urology Atomic Loads
if (typeof data_urology !== 'undefined') mergeData(data_urology);

// Ophthalmic Atomic Loads
if (typeof data_ophthalmic !== 'undefined') mergeData(data_ophthalmic);

// Osteoporosis/MSK Atomic Loads
if (typeof data_osteoporosis !== 'undefined') mergeData(data_osteoporosis);

// Dermatology Atomic Loads
if (typeof data_dermatology !== 'undefined') mergeData(data_dermatology);

// Hematology Atomic Loads
if (typeof data_hematology !== 'undefined') mergeData(data_hematology);

// Emergency Atomic Loads
if (typeof data_emergency !== 'undefined') mergeData(data_emergency);

// Electrolytes/IV Fluids Atomic Loads
if (typeof data_electrolytes !== 'undefined') mergeData(data_electrolytes);

console.log("Global Pharma Database Initialized:", window.drugDB.length, "drugs.");
