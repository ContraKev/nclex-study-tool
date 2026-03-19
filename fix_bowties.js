#!/usr/bin/env node
/**
 * fix_bowties.js — Fix all bowtie questions to enforce 2 left / 1 center / 2 right answer pattern.
 *
 * Issues fixed:
 *   1. Structural: M-021–M-025 have step objects embedded inside bowtie answer arrays
 *   2. Too few answers (1 instead of 2): adds clinically appropriate 2nd answer + option
 *   3. Too many answers (3-4 instead of 2): trims to the 2 highest-priority nursing actions
 */

const fs = require("fs");

const FILE = "dist/index.html";
let html = fs.readFileSync(FILE, "utf8");

// ── Fix map: mission ID → bowtie patch ──────────────────────────────────
// Each patch specifies the corrected left_actions and/or right_monitor.
// "options" is the full replacement option list; "answer" is the 2-item answer array.
// If a key is omitted, the existing value is kept.

const fixes = {
    // ── STRUCTURAL + count fixes (M-021–M-025) ─────────────────────────
    // These have step objects embedded in answer arrays. We extract only
    // the string answers and fix counts.

    "M-021": {
        left_actions: {
            options: ["Hold IV Insulin", "Check K+ before resuming insulin", "Administer IV Potassium", "Give Dextrose bolus", "Increase fluid rate"],
            answer: ["Hold IV Insulin", "Administer IV Potassium"]
        }
    },
    "M-022": {
        left_actions: {
            options: ["Administer IM Glucagon", "Force feed oral juice", "Administer IV D50W (If access)", "Call 911", "Start Insulin Drip"],
            answer: ["Administer IM Glucagon", "Call 911"]
        }
    },
    "M-023": {
        left_actions: {
            options: ["Give stat Long-Acting Insulin (Glargine)", "Give stat Rapid-Acting Insulin (Lispro)", "Resume pump immediately", "Call Tech Support", "Change bed linens"],
            answer: ["Give stat Long-Acting Insulin (Glargine)", "Give stat Rapid-Acting Insulin (Lispro)"]
        }
    },
    "M-024": {
        left_actions: {
            options: ["Increase Bedtime NPH", "Decrease Bedtime NPH", "Notify provider of glucose pattern", "Start Glipizide", "Offer ice chips"],
            answer: ["Increase Bedtime NPH", "Notify provider of glucose pattern"]
        }
    },
    "M-025": {
        left_actions: {
            options: ["Advise to go to ER immediately", "Emphasize to continue taking insulin", "Take extra Zofran", "Take extra Lantus", "Document findings in chart"],
            answer: ["Advise to go to ER immediately", "Emphasize to continue taking insulin"]
        },
        right_monitor: {
            options: ["Anion Gap / ABG", "Serial Blood Glucose", "Urine Culture", "Stool for Ova/Parasites", "Hand Grip Strength"],
            answer: ["Anion Gap / ABG", "Serial Blood Glucose"]
        }
    },

    // ── Too few answers — need to add 2nd ───────────────────────────────

    "M-027": {
        left_actions: {
            options: ["Give 4oz Juice", "Follow with protein/complex carb snack", "Give Insulin Bolus", "Send him home", "Give Diet Soda"],
            answer: ["Give 4oz Juice", "Follow with protein/complex carb snack"]
        },
        right_monitor: {
            options: ["Recheck BG in 15 mins", "Monitor for return of symptoms", "Call 911", "Urine Ketones", "Pain Score"],
            answer: ["Recheck BG in 15 mins", "Monitor for return of symptoms"]
        }
    },
    "M-029": {
        right_monitor: {
            options: ["Intraocular Pressure", "Pupil Shape", "WBC", "Temperature", "Pupillary Response"],
            answer: ["Intraocular Pressure", "Pupil Shape"]
        }
    },
    "M-031": {
        left_actions: {
            options: ["Prepare for Dialysis (CRRT)", "Restrict fluid intake", "Give 2L Fluid Bolus", "Increase Diuretic", "Reassure the patient"],
            answer: ["Prepare for Dialysis (CRRT)", "Restrict fluid intake"]
        }
    },
    "M-032": {
        left_actions: {
            options: ["Administer IV D50W / Oral Glucose", "Administer Glucagon (IV)", "Administer Atropine", "Start Pacing", "Apply warm compress"],
            answer: ["Administer IV D50W / Oral Glucose", "Administer Glucagon (IV)"]
        }
    },
    "M-034": {
        left_actions: {
            options: ["Oral Potassium Replacement", "Magnesium Sulfate", "IV Potassium Bolus", "Muscle Relaxers", "Apply warm compress"],
            answer: ["Oral Potassium Replacement", "Magnesium Sulfate"]
        }
    },
    "M-035": {
        right_monitor: {
            options: ["Anion Gap closure", "Serial Blood Glucose and Ketones", "Urine Culture", "Vaginal pH", "Serum Albumin"],
            answer: ["Anion Gap closure", "Serial Blood Glucose and Ketones"]
        }
    },
    "M-036": {
        left_actions: {
            options: ["Start Norepinephrine (Levophed)", "Give Albumin", "Give Lasix", "Start Dopamine", "Offer ice chips"],
            answer: ["Start Norepinephrine (Levophed)", "Give Albumin"]
        }
    },
    "M-065": {
        left_actions: {
            options: ["TRUS biopsy", "Refer to urologist", "Alpha blocker", "Antibiotics"],
            answer: ["TRUS biopsy", "Refer to urologist"]
        }
    },
    "M-066": {
        left_actions: {
            options: ["IV antibiotics", "Obtain urine and blood cultures", "Prostate massage", "Oral antibiotics only"],
            answer: ["IV antibiotics", "Obtain urine and blood cultures"]
        }
    },
    "M-067": {
        right_monitor: {
            options: ["Blood pressure", "Heart rate", "Erection duration"],
            answer: ["Blood pressure", "Heart rate"]
        }
    },
    "M-069": {
        left_actions: {
            options: ["Radical orchiectomy", "Obtain tumor markers (AFP, hCG, LDH)", "Antibiotics", "Needle biopsy"],
            answer: ["Radical orchiectomy", "Obtain tumor markers (AFP, hCG, LDH)"]
        }
    },
    "M-070": {
        left_actions: {
            options: ["Manual reduction with ice", "Administer analgesic for pain", "Topical steroids", "Circumcision immediately"],
            answer: ["Manual reduction with ice", "Administer analgesic for pain"]
        }
    },
    "M-071": {
        left_actions: {
            options: ["Indomethacin to close", "Monitor for signs of heart failure", "Prostaglandin to keep open", "Immediate surgery"],
            answer: ["Indomethacin to close", "Monitor for signs of heart failure"]
        }
    },
    "M-074": {
        left_actions: {
            options: ["Turn to left side", "Elevate legs", "IV fluid bolus"],
            answer: ["Turn to left side", "Elevate legs"]
        }
    },
    "M-087": {
        left_actions: {
            options: ["Metronidazole", "Educate on completing full antibiotic course", "Fluconazole", "Partner treatment"],
            answer: ["Metronidazole", "Educate on completing full antibiotic course"]
        }
    },

    // ── Too many answers — trim to 2 ────────────────────────────────────

    "M-041": {
        left_actions: {
            answer: ["Apply oxygen via non-rebreather mask", "Call rapid response"]
        },
        right_monitor: {
            answer: ["ABG analysis", "Respiratory rate and pattern"]
        }
    },
    "M-055": {
        left_actions: {
            answer: ["Stop airway clearance immediately", "Position patient on affected side"]
        },
        right_monitor: {
            answer: ["Amount and color of blood expectorated", "Oxygen saturation continuously"]
        }
    },
    "M-057": {
        left_actions: {
            answer: ["Administer supplemental oxygen", "Obtain urgent chest X-ray"]
        }
    },
    "M-062": {
        left_actions: {
            answer: ["Elevate affected arm", "Compression garments"]
        },
        right_monitor: {
            answer: ["Arm circumference", "Signs of infection"]
        }
    },
    "M-073": {
        left_actions: {
            answer: ["More frequent visits", "NST/BPP monitoring"]
        }
    },
    "M-076": {
        right_monitor: {
            answer: ["DTRs (reflexes)", "Respiratory rate"]
        }
    },
    "M-077": {
        left_actions: {
            answer: ["Position changes", "O2 and IV fluids"]
        }
    },
    "M-078": {
        left_actions: {
            answer: ["Immediate intrauterine resuscitation", "Prepare for cesarean"]
        }
    },
    "M-081": {
        left_actions: {
            answer: ["Fundal massage", "Oxytocin infusion"]
        }
    },
    "M-083": {
        left_actions: {
            answer: ["Fundal massage", "Notify provider stat"]
        }
    },
    "M-084": {
        left_actions: {
            answer: ["Screen with validated tool", "Assess safety/suicidality"]
        }
    },
    "M-085": {
        left_actions: {
            answer: ["Dry and stimulate", "Assess APGAR at 1 and 5 min"]
        }
    },
    "M-086": {
        left_actions: {
            answer: ["Skin-to-skin warming", "Check blood glucose"]
        }
    },
    "M-091": {
        left_actions: {
            answer: ["Discuss HRT risks/benefits", "Lifestyle modifications"]
        }
    }
};

// ── Apply fixes ─────────────────────────────────────────────────────────

// Find each concat block, parse it, fix missions, re-serialize
const concatRegex = /(window\.customMissions\s*=\s*window\.customMissions\.concat\()(\[[\s\S]*?\])(\);\s*\n)/g;
let fixCount = 0;
let structuralFixes = 0;

html = html.replace(concatRegex, (fullMatch, prefix, arrStr, suffix) => {
    let arr;
    try {
        arr = eval("(" + arrStr + ")");
    } catch (e) {
        console.error("  PARSE ERROR, skipping block");
        return fullMatch;
    }

    let changed = false;

    for (const mission of arr) {
        const fix = fixes[mission.id];
        if (!fix) continue;

        const steps = mission.steps || [];

        // Find the bowtie step
        let bowtieIdx = steps.findIndex(s => s.type === "bowtie");
        if (bowtieIdx === -1) continue;

        let bt = steps[bowtieIdx];

        // ── STRUCTURAL FIX: extract embedded step objects from answer arrays ──
        for (const wing of ["left_actions", "right_monitor"]) {
            if (bt[wing] && Array.isArray(bt[wing].answer)) {
                const embeddedSteps = bt[wing].answer.filter(a => typeof a === "object" && a !== null && a.type);
                const stringAnswers = bt[wing].answer.filter(a => typeof a === "string");

                if (embeddedSteps.length > 0) {
                    console.log(`  ${mission.id}: Extracting ${embeddedSteps.length} embedded step(s) from ${wing}.answer`);
                    bt[wing].answer = stringAnswers;

                    // Re-insert embedded steps into the mission steps array after the bowtie
                    for (let i = 0; i < embeddedSteps.length; i++) {
                        const insertIdx = bowtieIdx + 1 + i;
                        // Only add if not already present
                        if (!steps.find(s => s.id === embeddedSteps[i].id && s.type === embeddedSteps[i].type)) {
                            steps.splice(insertIdx, 0, embeddedSteps[i]);
                        }
                    }
                    structuralFixes++;
                    changed = true;
                }
            }
        }

        // ── ANSWER/OPTIONS FIX ──
        if (fix.left_actions) {
            if (fix.left_actions.options) {
                bt.left_actions.options = fix.left_actions.options;
            }
            if (fix.left_actions.answer) {
                bt.left_actions.answer = fix.left_actions.answer;
            }
            changed = true;
        }
        if (fix.right_monitor) {
            if (fix.right_monitor.options) {
                bt.right_monitor.options = fix.right_monitor.options;
            }
            if (fix.right_monitor.answer) {
                bt.right_monitor.answer = fix.right_monitor.answer;
            }
            changed = true;
        }

        // Verify fix
        const la = bt.left_actions;
        const rm = bt.right_monitor;
        const cc = bt.center_condition;
        const lc = Array.isArray(la?.answer) ? la.answer.length : 0;
        const rc = Array.isArray(rm?.answer) ? rm.answer.length : 0;
        const ccOk = typeof cc?.answer === "string";

        if (lc === 2 && rc === 2 && ccOk) {
            console.log(`  ✅ ${mission.id}: Fixed → L:${lc} C:1 R:${rc}`);
            fixCount++;
        } else {
            console.log(`  ❌ ${mission.id}: STILL BROKEN → L:${lc} C:${ccOk?1:0} R:${rc}`);
        }

        // Ensure all answers exist in options
        for (const ans of la.answer) {
            if (!la.options.includes(ans)) {
                la.options.push(ans);
                console.log(`    Added missing option to left: "${ans}"`);
            }
        }
        for (const ans of rm.answer) {
            if (!rm.options.includes(ans)) {
                rm.options.push(ans);
                console.log(`    Added missing option to right: "${ans}"`);
            }
        }
    }

    if (changed) {
        return prefix + JSON.stringify(arr) + suffix;
    }
    return fullMatch;
});

console.log(`\nTotal bowties fixed: ${fixCount}`);
console.log(`Structural fixes (embedded steps extracted): ${structuralFixes}`);

fs.writeFileSync(FILE, html, "utf8");
console.log(`\nWrote fixed file to ${FILE}`);
