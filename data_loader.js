// Master Data Aggregator - Globally Exposed
window.drugDB = [];

function mergeData(groupData) {
    if (Array.isArray(groupData)) {
        window.drugDB = window.drugDB.concat(groupData);
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

console.log("Global Pharma Database Initialized:", window.drugDB.length, "drugs.");
