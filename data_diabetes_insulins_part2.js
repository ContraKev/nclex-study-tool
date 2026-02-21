const data_diabetes_insulins_part2 = [
    {
        g: "Insulin Aspart", b: "NovoLog, Fiasp", c: "Rapid-Acting Insulin", cat: "dm",
        m: "A recombinant human insulin analog where the amino acid proline at position B28 is replaced with aspartic acid. This modification reduces the tendency of the insulin molecule to form hexamers (six-molecule clusters), allowing for significantly more rapid absorption from the subcutaneous injection site into the systemic circulation. It facilitates the cellular uptake of glucose by binding to insulin receptors, promoting glycogen synthesis, and inhibiting hepatic glucose production. It mimics the rapid, first-phase insulin response seen in a healthy pancreas in response to glucose intake.",
        ind: "Management of glycemic control in adults and children with Type 1 or Type 2 Diabetes Mellitus, particularly for controlling postprandial (after-meal) glucose levels. Suitable for use in insulin pumps.",
        con: "Episodes of hypoglycemia and known hypersensitivity to insulin aspart or its components.",
        aec: "Weight gain, lipodystrophy (localized fat tissue damage), itching, and injection site erythema.",
        aes: "SUDDEN ONSET SEVERE HYPOGLYCEMIA, hypokalemia (due to intracellular potassium shift), and severe systemic allergic reactions (anaphylaxis).",
        inter: [{d: "Beta Blockers", m: "Mask tachycardia and other early warning symptoms of hypoglycemia and may delay recovery.", s: "high"}],
        dosage: "SC: Individualized based on glucose monitoring. Usually 0.5 to 1 unit/kg/day total dose, with aspart providing the prandial portion.",
        admin: "Onset: 10-20 min. Peak: 1-3 hours. Duration: 3-5 hours. Administer SC 5 to 10 minutes BEFORE a meal. Can be given immediately after starting a meal if necessary. Do not use if the solution is cloudy or contains particles.",
        nurse: "Monitor fingerstick glucose levels before meals and at bedtime. Ensure the patient has food immediately available before administration. Rotate injection sites within the chosen anatomical area. For patients using insulin pumps, assess the infusion site for infection or leakage."
    },
    {
        g: "Insulin Glulisine", b: "Apidra", c: "Rapid-Acting Insulin", cat: "dm",
        m: "A rapid-acting analog of human insulin created by replacing asparagine with lysine at position B3 and lysine with glutamic acid at position B29. This prevents the formation of hexamers and allows for faster onset and a shorter duration of action compared to regular human insulin. It facilitates glucose uptake into muscle and fat cells and inhibits glucose output from the liver. It provides tight control of mealtime glucose spikes. It is uniquely formulated with a stabilizing agent that allows it to maintain its kinetic profile even when mixed with certain other insulins.",
        ind: "Glycemic control in adults and children with Type 1 DM and adults with Type 2 DM. Specifically indicated for use during mealtime or for correcting high blood sugars in an acute setting.",
        con: "Hypoglycemia and known hypersensitivity to the drug or the stabilizing agents used in its manufacture.",
        aec: "Hypoglycemia, injection site reactions (swelling, itching), and lipodystrophy. Potential for transient nasopharyngitis or upper respiratory symptoms.",
        aes: "Severe life-threatening hypoglycemia and acute hypokalemia which can lead to cardiac dysrhythmias.",
        inter: [{d: "Alcohol", m: "Potentiates the glucose-lowering effects and masks early warning signs.", s: "high"}],
        dosage: "SC: Individualized based on carbohydrate counting and current BG levels. Typically 1 unit per 10-15g of carbs.",
        admin: "Onset: 15 min. Peak: 1 hour. Duration: 2-4 hours. Administer SC within 15 minutes BEFORE or 20 minutes AFTER starting a meal. Compatible with regular insulin for mixing if required. Must use a specialized insulin syringe or pen device.",
        nurse: "Monitor BG frequently, especially 1 hour post-dose. Teach patient the importance of consistent timing with meals. Assess for symptoms of hypoglycemia including cold, clammy skin and confusion. Ensure that the patient understands that this is a bolus insulin, not for 24-hour basal coverage."
    },
    {
        g: "Insulin NPH", b: "Humulin N, Novolin N", c: "Intermediate-Acting Insulin", cat: "dm",
        m: "A neutral protamine Hagedorn (NPH) insulin where regular human insulin is conjugated with the protein protamine. The protamine significantly slows the absorption of the insulin from the subcutaneous site, resulting in a prolonged duration of action. This provides basal insulin coverage for approximately half a day to a full day. It facilitates glucose transport into cells and stimulates hepatic glycogen synthesis. It has a cloudy appearance due to the protein complex.",
        ind: "Treatment of Type 1 and Type 2 Diabetes Mellitus for basal (background) glycemic control. Preferred for use in pregnancy.",
        con: "Hypoglycemia, hypersensitivity to protamine or insulin.",
        aec: "Hypoglycemia (typically occurring mid-to-late afternoon during the peak), weight gain, and lipohypertrophy.",
        aes: "Severe hypoglycemia, severe hypokalemia, and systemic allergic reactions.",
        inter: [],
        dosage: "SC: Individualized. Often administered once or twice daily (BID) to provide 24-hour basal coverage.",
        admin: "Onset: 1-2 hours. Peak: 4-12 hours. Duration: 18-24 hours. MUST be gently rolled (not shaken) before administration to ensure the suspension is uniform. Drawn into the syringe SECOND (after regular insulin) when mixing. Always remember 'Clear before Cloudy'.",
        nurse: "Check BG levels, particularly during the peak time (4-12h post-dose) when the risk of hypoglycemia is highest. Assess injection sites for fatty lumps (lipodystrophy). Instruct the patient on proper mixing technique to avoid contaminating the clear insulin vial."
    },
    {
        g: "Insulin Glargine", b: "Lantus, Basaglar, Toujeo", c: "Long-Acting Insulin", cat: "dm",
        m: "A long-acting human insulin analog designed to have low solubility at neutral pH. After subcutaneous injection, the acidic solution (pH 4.0) is neutralized by the body's natural pH, causing the insulin to form micro-precipitates in the tissue. These precipitates dissolve slowly and steadily over 24 hours, providing a constant, peakless level of insulin in the circulation. This mimics the continuous, low-level basal insulin secretion of a healthy pancreas and provides 24-hour glycemic control with minimal fluctuations. It does not possess a distinct peak, which significantly reduces the risk of nocturnal hypoglycemia compared to NPH insulin.",
        ind: "Once-daily basal glycemic control in adults and pediatric patients with Type 1 DM and adults with Type 2 DM. Preferred for patients requiring stable, peakless background coverage.",
        con: "Episodes of hypoglycemia and known hypersensitivity. Not for the treatment of diabetic ketoacidosis (which requires IV regular insulin).",
        aec: "Injection site pain (due to the acidic nature of the solution), weight gain, and minor hypoglycemia. Potential for respiratory infection.",
        aes: "Severe hypoglycemia (less common than with NPH), hypokalemia, and anaphylaxis. Long-term risk of increased tumor progression (theoretical, monitor closely).",
        inter: [{d: "Other Insulins", m: "Mixing with other solutions changes the pH and ruins the peakless kinetic profile.", s: "critical"}],
        dosage: "SC: Individualized. Toujeo is a concentrated form (300 units/mL); Lantus is standard (100 units/mL). Adjust doses carefully.",
        admin: "Onset: 1-2 hours. NO PEAK. Duration: 24 hours. Administer SC once daily at the same time each day (usually bedtime or morning). NEVER mix glargine in the same syringe with any other insulin or solution as the pH change will cause immediate precipitation and unpredictable kinetics. Do not administer intravenously.",
        nurse: "Verify that the patient does NOT mix this insulin. Ensure consistent daily timing. Monitor BG daily. Educate the patient that this insulin is for background control, not for mealtime corrections. Check for clear appearance; if the solution is cloudy, discard it."
    },
    {
        g: "Insulin Detemir", b: "Levemir", c: "Long-Acting Insulin", cat: "dm",
        m: "A long-acting insulin analog with a fatty acid (myristic acid) side chain attached to the lysine at position B29. After injection, detemir molecules form hexamers and then bind reversibly to albumin in both the subcutaneous tissue and the bloodstream. This reversible albumin binding results in a slow and prolonged absorption and distribution, providing a stable, long-lasting basal insulin effect. This mechanism of 'albumin-buffering' results in more predictable and less variable blood sugar levels compared to intermediate-acting NPH insulin. It mimics the natural steady release of insulin from the pancreas.",
        ind: "Basal glycemic control in adults and pediatric patients with Type 1 or Type 2 Diabetes Mellitus. Useful for patients who experience weight gain with other insulins.",
        con: "Hypoglycemia and known hypersensitivity to the drug or albumin-binding components.",
        aec: "Injection site reactions (pain, redness), weight gain (statistically less weight gain than NPH or Glargine), and headache. Flu-like symptoms may occur.",
        aes: "Severe hypoglycemia, acute hypokalemia, and systemic hypersensitivity reactions.",
        inter: [],
        dosage: "SC: Individualized. Once or twice daily (BID). Typically 0.1 to 0.2 units/kg.",
        admin: "Onset: 1-2 hours. Peak: 6-8 hours (relatively flat). Duration: 12-24 hours (dose-dependent). Do NOT mix detemir with other insulins or solutions. If used twice daily, space doses 12 hours apart. Administer at the same time each day to maintain steady-state levels.",
        nurse: "Monitor BG baseline and periodically. Rotate injection sites. Assess for signs of hypoglycemia. Educate patient that this is a basal insulin and must be used even when the patient is not eating (unless otherwise instructed). Instruct patient not to dilute or mix this medication."
    },
    {
        g: "Insulin Degludec", b: "Tresiba", c: "Ultra-Long-Acting Insulin", cat: "dm",
        m: "An ultra-long-acting basal insulin analog that forms soluble multi-hexamers upon subcutaneous injection. These multi-hexamers create a large 'depot' in the tissue, from which insulin monomers are slowly and continuously released into the circulation. This results in an exceptionally long half-life (25 hours) and a duration of action exceeding 42 hours. It provides a highly stable and consistent glucose-lowering effect with significantly less intra-patient variability.",
        ind: "Once-daily basal glycemic control in adults and pediatric patients (1 year+) with Type 1 and Type 2 DM.",
        con: "Hypoglycemia and hypersensitivity.",
        aec: "Nasopharyngitis, upper respiratory tract infection, headache, and weight gain.",
        aes: "Severe hypoglycemia and severe hypokalemia.",
        inter: [],
        dosage: "SC: Individualized. Available in 100 units/mL (U-100) and 200 units/mL (U-200) pens.",
        admin: "Onset: 1 hour. Peak: None. Duration: > 42 hours. Administer SC once daily at any time of day. While consistent timing is preferred, the long duration allows for dose timing flexibility, provided there are at least 8 hours between doses.",
        nurse: "Monitor BG. Instruct the patient on the ultra-long duration of action. Do not mix with other insulins. Ensure the patient is using the correct pen concentration (U-100 vs U-200)."
    }
];
