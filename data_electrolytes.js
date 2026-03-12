/* Electrolytes & IV Fluids - NCLEX Essential
   Replacement therapy, IV solutions, electrolyte management */

const data_electrolytes = [
    {
        g: "Potassium Chloride", b: "K-Dur, Klor-Con, KCl", c: "Electrolyte Supplement (Potassium)", cat: "lytes",
        m: "Essential intracellular cation. Required for nerve impulse conduction, muscle contraction (especially cardiac), acid-base balance, and enzyme function.",
        ind: "⚠️ HYPOKALEMIA (K+ <3.5 mEq/L). Prevention of hypokalemia (diuretic therapy, digoxin therapy). Replacement in diabetic ketoacidosis.",
        con: "Hyperkalemia. Severe renal impairment (cannot excrete potassium). Addison's disease. Acute dehydration. Tissue damage (crush injury, burns).",
        aec: "GI upset: nausea, vomiting, diarrhea, abdominal pain. GI ulceration (tablets). Injection site pain (IV).",
        aes: "⚠️ CARDIAC ARRHYTHMIAS (hyperkalemia). Cardiac arrest. GI bleeding/perforation (oral). Tissue necrosis (extravasation).",
        inter: [
            {d: "ACE inhibitors, ARBs", m: "Additive hyperkalemia — monitor closely", s: "high"},
            {d: "Potassium-sparing diuretics", m: "Severe hyperkalemia risk", s: "high"},
            {d: "NSAIDs", m: "Decreased potassium excretion", s: "med"}
        ],
        dosage: "Prevention: 20-40 mEq/day PO divided. Treatment: Based on deficit. IV: 10-20 mEq/hour (max 40 mEq/hour with cardiac monitoring). Never exceed 200 mEq/day.",
        admin: "⚠️ IV: MUST dilute (max 40 mEq/L peripheral, 80 mEq/L central). Never IV push. Infuse slowly (10-20 mEq/hour). Oral: Take with food and full glass of water. Extended-release forms: do not crush.",
        nurse: "⚠️ NEVER IV PUSH — causes fatal cardiac arrest. Must dilute and infuse slowly. Peripheral max concentration 40 mEq/L. Burning at IV site = too concentrated or too fast. Monitor ECG for severe hypokalemia or rapid replacement. Check renal function before IV replacement. Oral forms: take with food to reduce GI upset. Liquid KCl tastes terrible — mix with juice."
    },
    {
        g: "Sodium Chloride (0.9% NS)", b: "Normal Saline, NS", c: "IV Crystalloid (Isotonic)", cat: "lytes",
        m: "Isotonic solution (308 mOsm/L) matching plasma osmolality. Provides water and sodium/chloride for extracellular fluid expansion. Does not cause fluid shifts between compartments.",
        ind: "⚠️ VOLUME RESUSCITATION. Dehydration. Maintenance fluids. Medication dilution. Wound irrigation. Hyponatremia (mild). DKA fluid replacement.",
        con: "Hypernatremia. Fluid overload. Heart failure (use cautiously). Hyperchloremic acidosis (excessive use).",
        aec: "Fluid overload. Peripheral edema. Pulmonary edema. Hypernatremia. Hyperchloremic metabolic acidosis.",
        aes: "Congestive heart failure exacerbation. Pulmonary edema. Severe electrolyte imbalances.",
        inter: [
            {d: "Lithium", m: "Sodium load increases lithium excretion — may reduce efficacy", s: "med"}
        ],
        dosage: "Maintenance: 100-150 mL/hour adults. Resuscitation: 500-1000mL bolus, reassess. Children: Calculate based on weight (Holliday-Segar formula).",
        admin: "IV infusion. For bolus: use pressure bag if rapid infusion needed. Warm fluids in hypothermia. Always check solution clarity before administration.",
        nurse: "MOST COMMON IV FLUID. Isotonic — stays in vascular space (good for volume expansion). Monitor for fluid overload: lung sounds, edema, JVD. 3L of NS = ~3L stays intravascular. Watch for hyperchloremic acidosis with large volumes. Better than hypotonic fluids for most resuscitation."
    },
    {
        g: "Lactated Ringer's (LR)", b: "Ringer's Lactate, Hartmann's Solution", c: "IV Crystalloid (Isotonic/Balanced)", cat: "lytes",
        m: "Isotonic balanced crystalloid (273 mOsm/L). Contains sodium, potassium, calcium, chloride, and lactate (converts to bicarbonate in liver). More physiologic than NS.",
        ind: "⚠️ TRAUMA RESUSCITATION. Burns. Surgery. GI losses. Preferred over NS for large-volume resuscitation (less acidosis).",
        con: "Severe liver disease (cannot metabolize lactate). Hyperkalemia. Hypercalcemia. Head injury (controversial — slight hypotonicity).",
        aec: "Fluid overload. Electrolyte imbalances. Lactic acidosis (if liver cannot convert).",
        aes: "Same as NS. Additionally: hypercalcemia, hyperkalemia (contains both).",
        inter: [
            {d: "Blood products", m: "Calcium in LR can cause clotting in same line — use NS for blood", s: "high"},
            {d: "Ceftriaxone", m: "Calcium-containing fluids cause precipitation", s: "high"}
        ],
        dosage: "Same as NS for resuscitation. Bolus and maintenance as clinically indicated.",
        admin: "⚠️ DO NOT USE WITH BLOOD PRODUCTS (calcium causes clotting). Do not use with ceftriaxone. Otherwise similar to NS administration.",
        nurse: "⚠️ INCOMPATIBLE WITH BLOOD — use NS for transfusions. Contains potassium (4 mEq/L) — consider in renal failure. Contains calcium — avoid with ceftriaxone. Better than NS for large-volume resuscitation (less acidosis). Lactate is NOT lactic acid — liver converts to bicarbonate. Preferred in trauma per guidelines."
    },
    {
        g: "Dextrose 5% in Water (D5W)", b: "D5W", c: "IV Crystalloid (Isotonic→Hypotonic)", cat: "lytes",
        m: "Isotonic when infused (252 mOsm/L) but becomes hypotonic as glucose is metabolized, providing free water. Provides 170 kcal/L. Not for volume resuscitation.",
        ind: "Maintenance fluids in patients who need free water. Vehicle for IV medications. Mild hypoglycemia prevention. TPN component.",
        con: "⚠️ NOT FOR VOLUME RESUSCITATION (becomes hypotonic). Hyperglycemia. Diabetes (monitor glucose). Head injury (cerebral edema risk).",
        aec: "Hyperglycemia. Fluid shifts to cells. Hyponatremia (dilutional). Phlebitis.",
        aes: "Cerebral edema (hypotonic effect). Severe hyperglycemia. Pulmonary edema.",
        inter: [],
        dosage: "Maintenance: 75-125 mL/hour. For medication dilution: as required by drug.",
        admin: "Never use for volume resuscitation (won't stay intravascular). Monitor glucose in diabetics. Watch for hyponatremia with prolonged use.",
        nurse: "⚠️ DO NOT USE FOR RESUSCITATION — becomes FREE WATER after glucose metabolized (goes into cells, not blood vessels). Best for: medication administration, free water replacement, patients needing glucose. Monitor glucose in diabetics. Can cause hyponatremia if used long-term. Not for head injury (increases cerebral edema)."
    },
    {
        g: "Magnesium Sulfate", b: "MgSO4, Epsom Salt (topical)", c: "Electrolyte Supplement (Magnesium)", cat: "lytes",
        m: "Essential cofactor for 300+ enzymes. Required for neuromuscular function, cardiac rhythm, protein synthesis. Blocks NMDA receptors (anticonvulsant). Smooth muscle relaxant (bronchodilator, tocolytic).",
        ind: "⚠️ HYPOMAGNESEMIA. Eclampsia/pre-eclampsia (first-line). Torsades de pointes. Severe asthma. Arrhythmias (digoxin toxicity adjunct).",
        con: "Heart block. Myocardial damage. Severe renal impairment (cannot excrete). Hypermagnesemia.",
        aec: "Flushing. Hypotension. Nausea. Muscle weakness. Decreased reflexes. Bradycardia.",
        aes: "⚠️ RESPIRATORY DEPRESSION. Cardiac arrest. Complete heart block. Paralysis (neuromuscular blockade).",
        inter: [
            {d: "Calcium channel blockers", m: "Additive hypotension and cardiac depression", s: "high"},
            {d: "Neuromuscular blockers", m: "Prolonged paralysis", s: "high"},
            {d: "CNS depressants", m: "Additive depression", s: "med"}
        ],
        dosage: "Hypomagnesemia: 1-2g IV over 1 hour. Eclampsia: 4-6g IV loading, then 1-2g/hour infusion. Torsades: 1-2g IV over 5-20 min.",
        admin: "IV: Dilute and infuse slowly (risk of hypotension). IM: Deep IM injection (painful). Have calcium gluconate at bedside as antidote.",
        nurse: "⚠️ ANTIDOTE = CALCIUM GLUCONATE (have at bedside). Monitor: DTRs (absent = toxicity), respiratory rate, urine output. Therapeutic level: 4-7 mEq/L for eclampsia. Toxic signs: Loss of DTRs (first sign), respiratory depression, cardiac arrest. Check renal function — excreted by kidneys. Essential for eclampsia prevention — give regardless of Mg level."
    },
    {
        g: "Calcium Gluconate", b: "Calglucon", c: "Electrolyte Supplement (Calcium)", cat: "lytes",
        m: "Provides ionized calcium for bone, cardiac, neuromuscular, and coagulation function. Antagonizes magnesium and potassium effects on heart. Contains 9% elemental calcium.",
        ind: "⚠️ HYPOCALCEMIA. Magnesium toxicity antidote. Hyperkalemia (cardiac protection). Calcium channel blocker overdose. Hypermagnesemia. Black widow spider bite.",
        con: "Hypercalcemia. Digitalis toxicity (relative). VF. Severe hypercalciuria.",
        aec: "Flushing. Bradycardia. Peripheral vasodilation. Nausea. Constipation.",
        aes: "Hypercalcemia. Cardiac arrhythmias. Tissue necrosis (extravasation — less than CaCl). Cardiac arrest.",
        inter: [
            {d: "Digoxin", m: "Increases digoxin toxicity — use cautiously", s: "high"},
            {d: "Ceftriaxone", m: "Fatal precipitation in neonates — never co-administer", s: "high"},
            {d: "Thiazide diuretics", m: "Additive hypercalcemia", s: "med"}
        ],
        dosage: "Hypocalcemia: 1-2g IV over 10-20 min. Hyperkalemia/Mg toxicity: 1-3g IV over 5-10 min, may repeat. Maintenance: 1-2g/day IV if unable to take oral.",
        admin: "IV: Slow push or infusion (rapid = cardiac arrest). Peripheral vein acceptable (unlike CaCl). Do not mix with phosphate or bicarbonate (precipitates). Oral forms for chronic replacement.",
        nurse: "⚠️ SAFER THAN CALCIUM CHLORIDE — can give peripherally. Contains less elemental calcium (need more for same effect). For Mg toxicity: 1g reverses effect. Monitor for infiltration (still caustic). Check ionized calcium levels. Incompatible with ceftriaxone — FATAL in neonates. Signs of hypocalcemia: Chvostek sign, Trousseau sign, tetany."
    },
    {
        g: "Sodium Phosphate", b: "Phospha-Soda, Fleet Enema", c: "Electrolyte Supplement (Phosphorus) / Laxative", cat: "lytes",
        m: "Provides phosphorus for ATP synthesis, bone mineralization, acid-base buffering, and cellular function. As enema: draws water into bowel via osmotic effect.",
        ind: "Hypophosphatemia (refeeding syndrome, DKA recovery, alcoholism). Bowel preparation before procedures (oral/enema).",
        con: "Hyperphosphatemia. Severe renal impairment. Hypocalcemia. Bowel obstruction (enema). Heart failure (sodium load).",
        aec: "Nausea, diarrhea. Abdominal cramping. Hyperphosphatemia. Hypocalcemia (phosphorus binds calcium).",
        aes: "⚠️ SEVERE ELECTROLYTE DISTURBANCES. Acute phosphate nephropathy (from oral bowel prep). Cardiac arrhythmias. Tetany (from hypocalcemia).",
        inter: [
            {d: "Calcium supplements", m: "Phosphorus binds calcium — reduced absorption of both", s: "med"},
            {d: "ACE inhibitors", m: "Increased hyperkalemia risk (sodium phosphate contains potassium)", s: "med"}
        ],
        dosage: "IV replacement: Based on level and weight. Oral: 250-500mg phosphorus 2-4 times daily. Bowel prep: Follow specific protocol.",
        admin: "IV: Must dilute, infuse over 4-6 hours (too fast = hypocalcemia, arrhythmias). Oral: Take with meals to reduce GI upset. Enema: As single dose for bowel prep.",
        nurse: "⚠️ REFEEDING SYNDROME: Phosphorus drops when malnourished patient starts eating — can be fatal. Monitor phosphorus in: anorexia, alcoholism, DKA, TPN. IV replacement must be slow (hypocalcemia, arrhythmias if too fast). Monitor calcium when giving phosphorus. Fleet enemas: AVOID in renal impairment (acute phosphate nephropathy). Pediatric Fleet doses differ — check carefully."
    },
    {
        g: "Sodium Polystyrene Sulfonate", b: "Kayexalate, SPS", c: "Potassium-Binding Resin", cat: "lytes",
        m: "Cation exchange resin that exchanges sodium for potassium in GI tract. Each gram removes approximately 0.5-1 mEq of potassium. Slow onset (hours).",
        ind: "⚠️ HYPERKALEMIA (non-emergent). Chronic hyperkalemia in CKD. Adjunct after acute hyperkalemia stabilized.",
        con: "Bowel obstruction. Post-operative patients (ileus risk). Neonates (fatal intestinal necrosis reported). Hypokalemia.",
        aec: "Constipation. Nausea, vomiting. Hypokalemia. Hypomagnesemia. Hypocalcemia. Sodium retention.",
        aes: "⚠️ INTESTINAL NECROSIS (especially with sorbitol). Bowel perforation. Severe hypokalemia. Pulmonary edema (sodium load).",
        inter: [
            {d: "Sorbitol", m: "Increased risk of intestinal necrosis — avoid if possible", s: "high"},
            {d: "Lithium, thyroxine", m: "Binds these drugs — separate administration", s: "med"},
            {d: "Antacids (Mg, Al)", m: "Binds these cations instead of potassium — avoid", s: "med"}
        ],
        dosage: "Oral: 15-60g in water or sorbitol 1-4 times daily. Rectal (retention enema): 30-50g in water, retain 30-60 min.",
        admin: "Give with water or low-sorbitol vehicle. Do NOT give with antacids. Rectal: warm to body temp, retain as long as possible, then evacuate.",
        nurse: "⚠️ SLOW ONSET (hours) — not for acute/emergent hyperkalemia. FDA warning: intestinal necrosis, especially with sorbitol. Monitor K+ closely — can cause severe hypokalemia. Tastes terrible — mix with juice or use enema. Monitor for constipation/obstruction. Newer agents (patiromer, sodium zirconium) may be safer but more expensive."
    },
    {
        g: "Albumin (Human)", b: "Albuminar, Albutein, Flexbumin", c: "Colloid / Plasma Expander", cat: "lytes",
        m: "Human plasma protein that provides oncotic pressure. 5% is iso-oncotic (expands volume 1:1). 25% is hyper-oncotic (draws fluid from interstitium 1:4-5).",
        ind: "Hypovolemic shock. Burns (after 24 hours). Paracentesis-induced hypotension. Hepatorenal syndrome. Hypoalbuminemia with edema.",
        con: "Heart failure (volume expansion). Severe anemia (dilution). Hypersensitivity to albumin.",
        aec: "Fluid overload. Flushing. Urticaria. Nausea. Fever. Chills.",
        aes: "Pulmonary edema. Anaphylaxis (rare). Coagulation abnormalities (dilution).",
        inter: [],
        dosage: "5%: 250-500mL IV. 25%: 50-100mL IV (draws 4-5x volume from interstitium). Dose based on clinical indication.",
        admin: "5% can give rapidly. 25%: give slowly (1-2 mL/min) — rapid infusion causes fluid shifts. Use filtered tubing. Do not mix with other drugs.",
        nurse: "⚠️ 25% ALBUMIN: Draws fluid from tissues — can cause pulmonary edema if patient has total body fluid overload. Use 25% only if: hypovolemia with peripheral edema. Use 5% for: pure intravascular volume depletion. Very expensive — reserve for appropriate indications. No infection risk (heat-treated). Monitor for fluid overload."
    },
    {
        g: "Hetastarch", b: "Hespan, Hextend", c: "Colloid / Plasma Expander", cat: "lytes",
        m: "Synthetic colloid (hydroxyethyl starch) that provides oncotic pressure similar to albumin. Expands plasma volume 1:1. Longer duration than crystalloids.",
        ind: "Hypovolemic shock (when crystalloids insufficient). Plasma volume expansion.",
        con: "⚠️ RENAL IMPAIRMENT. Sepsis (increased mortality — FDA warning). Critically ill patients. Coagulopathy. Congestive heart failure.",
        aec: "Coagulopathy (dilutional + direct effect). Pruritus (prolonged, severe). Anaphylactoid reactions.",
        aes: "⚠️ ACUTE KIDNEY INJURY (FDA black box in critically ill). Increased mortality in sepsis. Severe bleeding. Anaphylaxis.",
        inter: [
            {d: "Anticoagulants", m: "Increased bleeding risk", s: "high"}
        ],
        dosage: "500-1000mL IV. Max 1500mL/day (20mL/kg/day). Limit total dose to prevent accumulation.",
        admin: "IV infusion over 30-60 min. Monitor closely for fluid overload and coagulation changes. Avoid in sepsis and critically ill.",
        nurse: "⚠️ FDA BLACK BOX WARNING: Increased mortality in critically ill, increased renal failure. AVOID IN SEPSIS — Surviving Sepsis Guidelines recommend against starches. Causes prolonged pruritus (weeks) in many patients. Monitor coagulation (PT, PTT). NOT first-line — use crystalloids (NS, LR) first. If used, limit duration and total dose."
    },
    {
        g: "Desmopressin", b: "DDAVP, Stimate", c: "Synthetic ADH Analogue", cat: "lytes",
        m: "Synthetic analogue of vasopressin (ADH) with enhanced antidiuretic effect and minimal pressor activity. Binds V2 receptors in kidney → increased water reabsorption. Also releases von Willebrand factor.",
        ind: "⚠️ DIABETES INSIPIDUS (central). Primary nocturnal enuresis. Hemophilia A (mild). Von Willebrand disease (type 1). Uremic bleeding.",
        con: "Type 2B von Willebrand disease (causes thrombocytopenia). Hyponatremia. Moderate-severe renal impairment. Conditions with risk of fluid overload.",
        aec: "Headache. Nasal congestion (intranasal). Nausea. Flushing. Abdominal cramps.",
        aes: "⚠️ HYPONATREMIA (water intoxication). Seizures. Thrombosis (rare).",
        inter: [
            {d: "NSAIDs, SSRIs, TCAs", m: "Increased hyponatremia risk", s: "high"},
            {d: "Carbamazepine", m: "Potentiates antidiuretic effect", s: "med"},
            {d: "Lithium, demeclocycline", m: "May reduce antidiuretic effect", s: "low"}
        ],
        dosage: "DI: 10-40mcg intranasally daily in 1-3 doses, or 0.05mg PO BID-TID, or 2-4mcg IV/SubQ daily. Hemophilia: 0.3mcg/kg IV over 15-30 min.",
        admin: "Intranasal: Calibrated rhinal tube or nasal spray. Restrict fluids during therapy to prevent hyponatremia. Do not use nasal route if nasal congestion.",
        nurse: "⚠️ HYPONATREMIA RISK: Restrict fluids during therapy. Monitor sodium, especially in children and elderly. For DI: Adjust dose based on urine output and specific gravity. For nocturnal enuresis: Give at bedtime, no fluids after administration. For bleeding disorders: Check factor levels to ensure response before procedures. Intranasal may not work if nasal congestion."
    }
];
