/* Block 8 — Parkinson's & Movement Disorder Medications (7 drugs)
   Source: pharmacology_A_drjames.txt, pharmacology_B_drjames.txt */

const data_parkinsons = [
    {
        g: "Levodopa-Carbidopa", b: "Sinemet, Rytary, Duopa", c: "Dopamine Precursor + Decarboxylase Inhibitor", cat: "neuro",
        m: "Levodopa is converted to DOPAMINE in the brain, replenishing the depleted dopamine in the substantia nigra. Carbidopa inhibits peripheral decarboxylase, preventing levodopa conversion to dopamine outside the CNS. This allows more levodopa to reach the brain and reduces peripheral side effects (nausea, hypotension).",
        ind: "PARKINSON'S DISEASE — most effective drug for motor symptoms (tremor, rigidity, bradykinesia). Parkinsonism. Restless legs syndrome (off-label).",
        con: "Narrow-angle glaucoma. Concurrent MAOIs (hypertensive crisis). Undiagnosed skin lesions (may activate melanoma). Psychosis.",
        aec: "DYSKINESIAS (involuntary movements — choreiform, dystonic) — common with long-term use. Nausea, vomiting (reduced with carbidopa). Orthostatic hypotension. Darkening of urine/sweat. Vivid dreams.",
        aes: "⚠️ 'ON-OFF' PHENOMENON — unpredictable fluctuations between mobility and immobility. 'WEARING OFF' — decreased duration of effect. Hallucinations, psychosis, confusion (especially elderly). Impulse control disorders (gambling, hypersexuality). Sudden sleep attacks. Neuroleptic malignant syndrome if abruptly stopped.",
        inter: [
            {d: "MAOIs (non-selective)", m: "CONTRAINDICATED — hypertensive crisis. Stop MAOI 2 weeks before starting.", s: "high"},
            {d: "Antipsychotics", m: "Block dopamine receptors — worsen parkinsonism. Avoid typical antipsychotics.", s: "high"},
            {d: "Metoclopramide", m: "Blocks dopamine — worsens symptoms and reduces levodopa effect.", s: "high"},
            {d: "Pyridoxine (Vitamin B6)", m: "Enhances peripheral decarboxylation — less relevant with carbidopa but avoid high doses.", s: "low"},
            {d: "Iron supplements", m: "May reduce levodopa absorption — separate by 2 hours.", s: "med"},
            {d: "High-protein meals", m: "Amino acids compete for absorption and brain transport — take 30 min before meals.", s: "med"}
        ],
        dosage: "Sinemet: Start 25/100mg (carbidopa/levodopa) TID. Increase gradually. Usual 200-800mg levodopa/day in divided doses. Max ~1500-2000mg levodopa/day. Rytary (extended-release) for fluctuations.",
        admin: "Oral. Take 30 minutes BEFORE meals for best absorption (protein interferes). Take with full glass of water. Consistent timing important. Do NOT crush CR/ER formulations.",
        nurse: "⚠️ NEVER stop abruptly — risk of neuroleptic malignant syndrome (fever, rigidity, altered mental status). Monitor for ON-OFF fluctuations — may need dose/timing adjustments. Watch for DYSKINESIAS (involuntary movements) — common with long-term use; may need dose reduction. Teach: take 30 min before meals, avoid high-protein meals close to doses. Urine/sweat may turn dark — harmless. Monitor for psychiatric effects: hallucinations, confusion, impulse control disorders. Rising slowly to prevent orthostatic hypotension."
    },
    {
        g: "Pramipexole", b: "Mirapex, Mirapex ER", c: "Dopamine Agonist (Non-Ergot)", cat: "neuro",
        m: "Directly stimulates DOPAMINE D2 and D3 receptors in the striatum, mimicking dopamine's effects. Non-ergot dopamine agonist with high affinity for D3 receptors. Does not require conversion — works directly on receptors.",
        ind: "Parkinson's disease (early monotherapy or adjunct to levodopa). RESTLESS LEGS SYNDROME (RLS) — FDA approved. May delay need for levodopa in early PD.",
        con: "Hypersensitivity. Caution in renal impairment (primarily renally eliminated).",
        aec: "Nausea, vomiting. Orthostatic hypotension, dizziness. Somnolence, fatigue. Hallucinations (especially elderly). Peripheral edema. Headache.",
        aes: "⚠️ SUDDEN SLEEP ATTACKS (sleep episodes without warning) — dangerous while driving. IMPULSE CONTROL DISORDERS: pathological gambling, hypersexuality, compulsive shopping/eating. Hallucinations, psychosis. Worsening dyskinesias when combined with levodopa. Withdrawal syndrome if stopped abruptly.",
        inter: [
            {d: "CNS Depressants", m: "Additive sedation — caution with opioids, benzodiazepines, alcohol.", s: "med"},
            {d: "Antipsychotics", m: "Block dopamine receptors — antagonize effect.", s: "high"},
            {d: "Cimetidine", m: "Reduces renal clearance — may increase pramipexole levels.", s: "low"}
        ],
        dosage: "Parkinson's: Start 0.125mg TID, increase gradually over weeks. Usual 0.5-1.5mg TID (1.5-4.5mg/day). RLS: 0.125-0.5mg 2-3 hours before bedtime. Reduce dose in renal impairment.",
        admin: "Oral. Can take with or without food (food may reduce nausea). Gradual titration essential. Taper slowly to discontinue.",
        nurse: "⚠️ SLEEP ATTACKS: Warn patient about sudden onset sleep — avoid driving until response known. ⚠️ IMPULSE CONTROL: Ask about gambling, shopping, sexual behavior at each visit — patient may not report spontaneously. Taper slowly when discontinuing — withdrawal syndrome. Start low, increase slowly over weeks. Monitor for orthostatic hypotension. Preferred over ergot agonists (no fibrosis risk). Reduce dose in renal impairment."
    },
    {
        g: "Ropinirole", b: "Requip, Requip XL", c: "Dopamine Agonist (Non-Ergot)", cat: "neuro",
        m: "Directly stimulates dopamine D2 receptors in the striatum. Similar mechanism to pramipexole. Non-ergot dopamine agonist — preferred over older ergot derivatives due to safety.",
        ind: "Parkinson's disease (early or adjunct). Restless legs syndrome (RLS).",
        con: "Hypersensitivity. Caution in severe hepatic impairment.",
        aec: "Similar to pramipexole: Nausea, dizziness, somnolence, orthostatic hypotension, hallucinations, peripheral edema.",
        aes: "⚠️ SLEEP ATTACKS. IMPULSE CONTROL DISORDERS. Hallucinations, psychosis. Syncope. Dyskinesias with levodopa. Withdrawal syndrome.",
        inter: [
            {d: "Ciprofloxacin", m: "CYP1A2 inhibitor — increases ropinirole levels. May need dose reduction.", s: "med"},
            {d: "Estrogen (HRT)", m: "May increase ropinirole levels.", s: "low"},
            {d: "CNS Depressants", m: "Additive sedation.", s: "med"},
            {d: "Antipsychotics", m: "Dopamine antagonism — avoid.", s: "high"}
        ],
        dosage: "Parkinson's: Start 0.25mg TID, increase weekly. Usual 3-8mg TID (9-24mg/day). XL: Start 2mg daily. RLS: 0.25-4mg 1-3 hours before bedtime.",
        admin: "Oral. Take with food to reduce nausea. Gradual titration. XL tablets: swallow whole, do not crush/chew.",
        nurse: "Same warnings as pramipexole: sleep attacks, impulse control disorders, taper slowly. CYP1A2 substrate — watch for interactions (ciprofloxacin, smoking cessation may increase levels). Food reduces nausea. Non-ergot = no cardiac valve fibrosis risk (advantage over older agents like bromocriptine, pergolide)."
    },
    {
        g: "Bromocriptine", b: "Parlodel, Cycloset", c: "Dopamine Agonist (Ergot)", cat: "neuro",
        m: "Ergot-derived dopamine agonist that stimulates D2 receptors. Also suppresses prolactin release (D2 agonism at pituitary). Older agent — largely replaced by non-ergot agonists for Parkinson's due to fibrosis risk.",
        ind: "Hyperprolactinemia (prolactinoma, galactorrhea). Acromegaly. Parkinson's disease (less commonly used now). Type 2 diabetes (Cycloset — increases dopamine tone to improve glycemic control).",
        con: "Uncontrolled hypertension. Pregnancy-induced hypertension/preeclampsia. Sensitivity to ergot alkaloids. Coronary artery disease, peripheral vascular disease.",
        aec: "Nausea, vomiting (common initially). Dizziness, orthostatic hypotension. Headache. Fatigue, drowsiness. Nasal congestion.",
        aes: "⚠️ FIBROTIC REACTIONS (ergot class effect): Retroperitoneal fibrosis, pleural fibrosis, cardiac valve fibrosis — reason non-ergot agonists preferred. Psychiatric: hallucinations, confusion. Severe hypotension. Digital vasospasm (Raynaud's). Stroke, MI (rare — hypertensive episodes postpartum).",
        inter: [
            {d: "Antipsychotics", m: "Antagonize dopaminergic effect.", s: "high"},
            {d: "Erythromycin, CYP3A4 inhibitors", m: "Increase bromocriptine levels.", s: "med"},
            {d: "Other Ergots", m: "Additive vasoconstriction risk.", s: "high"}
        ],
        dosage: "Hyperprolactinemia: Start 1.25-2.5mg daily, increase gradually. Usual 2.5-15mg/day. Parkinson's: 1.25mg BID, titrate to 10-40mg/day. Diabetes (Cycloset): 0.8mg daily, titrate to 1.6-4.8mg.",
        admin: "Oral. Take with food to reduce GI upset. Start low, increase gradually (minimizes nausea/hypotension). Cycloset: take within 2 hours of waking.",
        nurse: "Ergot derivative — largely replaced by non-ergot agonists (pramipexole, ropinirole) for Parkinson's due to fibrosis risk. Still used for hyperprolactinemia. Give WITH FOOD to reduce nausea. Monitor BP — orthostatic hypotension common. Long-term: monitor for fibrotic complications (dyspnea, edema, flank pain). Cycloset (diabetes) has different dosing/timing — take within 2 hours of waking."
    },
    {
        g: "Benztropine", b: "Cogentin", c: "Anticholinergic (Antimuscarinic)", cat: "neuro",
        m: "Blocks MUSCARINIC acetylcholine receptors in the striatum. In Parkinson's, dopamine deficiency creates relative acetylcholine excess. Blocking acetylcholine helps restore dopamine-ACh balance. More effective for tremor than bradykinesia/rigidity.",
        ind: "Parkinson's disease (adjunct — mainly for TREMOR). DRUG-INDUCED EXTRAPYRAMIDAL SYMPTOMS (EPS) — acute dystonia, parkinsonism from antipsychotics. Not effective for tardive dyskinesia.",
        con: "Narrow-angle glaucoma. Urinary retention, BPH with obstruction. GI obstruction, paralytic ileus. Myasthenia gravis. Dementia (worsens cognition). Tardive dyskinesia (may worsen).",
        aec: "ANTICHOLINERGIC effects: Dry mouth, blurred vision, constipation, urinary retention, decreased sweating. Sedation, drowsiness. Confusion (especially elderly).",
        aes: "⚠️ ANTICHOLINERGIC TOXICITY: Hyperthermia (can't sweat), delirium, hallucinations, tachycardia, seizures. Severe urinary retention. Paralytic ileus. Worsening of dementia/cognitive impairment. Exacerbation of tardive dyskinesia.",
        inter: [
            {d: "Other Anticholinergics", m: "Additive anticholinergic effects — avoid combinations.", s: "high"},
            {d: "Antihistamines, TCAs, Antipsychotics", m: "Many have anticholinergic properties — cumulative toxicity.", s: "med"},
            {d: "Cholinesterase Inhibitors", m: "Antagonistic effects — avoid combination.", s: "high"}
        ],
        dosage: "Parkinson's: 0.5-2mg PO daily or BID. EPS (acute dystonia): 1-2mg IM/IV, then 1-2mg PO BID for prevention. Max 6mg/day.",
        admin: "Oral, IM, IV. IM/IV for acute dystonic reactions (faster onset). Can take with food if GI upset.",
        nurse: "⚠️ HIGH ANTICHOLINERGIC BURDEN: Avoid in elderly (Beers criteria) — cognitive impairment, falls, delirium. Monitor for urinary retention (especially men with BPH). Constipation management. Teach: dry mouth (sugar-free gum, frequent sips), avoid overheating (impaired sweating). More effective for tremor than other PD symptoms. For acute EPS: IM/IV gives rapid relief of dystonia. Does NOT help tardive dyskinesia — may worsen it."
    },
    {
        g: "Amantadine", b: "Symmetrel, Gocovri", c: "NMDA Antagonist / Antiviral", cat: "neuro",
        m: "Multiple mechanisms: (1) Increases dopamine release and blocks reuptake, (2) NMDA glutamate receptor antagonist, (3) Mild anticholinergic effects. Originally an antiviral — anti-parkinsonian effects discovered serendipitously. Uniquely effective for DYSKINESIAS.",
        ind: "Parkinson's disease (early or adjunct). LEVODOPA-INDUCED DYSKINESIAS — Gocovri ER specifically approved. Drug-induced EPS. Influenza A prophylaxis/treatment (limited use now due to resistance).",
        con: "Severe renal impairment (renally eliminated). Untreated angle-closure glaucoma. Caution in seizure disorders, psychiatric illness, heart failure.",
        aec: "Dizziness, insomnia, anxiety. Nausea, dry mouth, constipation. LIVEDO RETICULARIS (mottled, net-like purple skin discoloration — legs). Peripheral edema.",
        aes: "⚠️ CNS effects: Hallucinations, confusion, psychosis (especially elderly, renal impairment). Suicidal ideation. Neuroleptic malignant syndrome if stopped abruptly. Seizures. QT prolongation (rare).",
        inter: [
            {d: "Anticholinergics", m: "Additive CNS and anticholinergic effects.", s: "med"},
            {d: "CNS Stimulants", m: "Additive CNS stimulation, insomnia.", s: "low"},
            {d: "Live Influenza Vaccine", m: "May reduce vaccine effectiveness (antiviral mechanism).", s: "low"},
            {d: "Bupropion, Quinidine, Dofetilide", m: "Additive risk of CNS effects or QT prolongation.", s: "med"}
        ],
        dosage: "Parkinson's/EPS: 100mg BID (morning and early afternoon to avoid insomnia). Max 400mg/day. Dyskinesia (Gocovri ER): 137mg at bedtime, increase to 274mg. Reduce dose in renal impairment.",
        admin: "Oral. Take early in day (last dose early afternoon) — insomnia if taken late. Gocovri ER: take at bedtime (extended-release designed for morning effect).",
        nurse: "⚠️ Reduce dose in renal impairment — CNS toxicity. Give early in day — causes insomnia if given late. Livedo reticularis (purple mottled skin on legs) — cosmetic, reversible, not dangerous. Watch for psychiatric effects: hallucinations, confusion, especially in elderly. Do NOT stop abruptly — taper over 1-2 weeks. Unique role: one of few drugs that helps DYSKINESIAS from levodopa. Monitor orthostatic BP, edema."
    },
    {
        g: "Selegiline", b: "Eldepryl, Zelapar, Emsam", c: "MAO-B Inhibitor", cat: "neuro",
        m: "Selectively inhibits MONOAMINE OXIDASE type B (MAO-B), the enzyme that breaks down dopamine in the brain. This preserves endogenous dopamine and extends levodopa's effect. At recommended doses, selectivity for MAO-B avoids the dietary tyramine restrictions of non-selective MAOIs.",
        ind: "Parkinson's disease (adjunct to levodopa — extends effect, reduces wearing off). Early PD monotherapy (may delay need for levodopa). Emsam patch: Major depressive disorder.",
        con: "Concurrent meperidine, tramadol, methadone, SSRIs, SNRIs, TCAs, other MAOIs — serotonin syndrome. Caution at higher doses (loses MAO-B selectivity → tyramine reaction risk).",
        aec: "Nausea, dizziness, headache, insomnia. Dry mouth. Orthostatic hypotension. Dyskinesias (when combined with levodopa — may need to reduce levodopa dose).",
        aes: "⚠️ SEROTONIN SYNDROME (with serotonergic drugs): fever, agitation, tremor, rigidity, hyperreflexia, diaphoresis. Hypertensive crisis (high doses + tyramine foods — rare at standard doses). Hallucinations, confusion.",
        inter: [
            {d: "Meperidine, Tramadol, Methadone", m: "CONTRAINDICATED — serotonin syndrome, potentially fatal.", s: "high"},
            {d: "SSRIs, SNRIs, TCAs", m: "Serotonin syndrome risk — avoid or wait 2 weeks washout.", s: "high"},
            {d: "Sympathomimetics (decongestants)", m: "Hypertensive risk at higher doses.", s: "med"},
            {d: "Levodopa", m: "Potentiates effect — may need to reduce levodopa dose 10-30%.", s: "med"}
        ],
        dosage: "Oral: 5mg with breakfast and lunch (avoid evening — insomnia). Max 10mg/day. Zelapar ODT: 1.25-2.5mg daily (dissolves on tongue, bypasses first-pass). Emsam patch (depression): 6-12mg/24hr.",
        admin: "Oral tablets with meals. ODT: place on tongue, dissolves in seconds, no water needed. Emsam: apply patch to dry skin, rotate sites. Take morning doses — insomnia if given PM.",
        nurse: "⚠️ At standard doses (≤10mg/day oral), NO tyramine diet restrictions needed (MAO-B selective). Higher doses or Emsam 9-12mg patch: avoid tyramine-rich foods. Wait 2 weeks before starting SSRIs/SNRIs/TCAs. NEVER give with meperidine — serotonin syndrome can be fatal. May increase levodopa effect — watch for dyskinesias, may need dose reduction. Morning/noon dosing only — causes insomnia. Zelapar ODT has better bioavailability (bypasses gut MAO-A)."
    }
];
