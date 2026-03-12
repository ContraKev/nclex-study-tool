/* Block 9 — Alzheimer's & Cognitive Enhancement Medications (4 drugs)
   Source: pharmacology_A_drjames.txt, pharmacology_B_drjames.txt */

const data_alzheimers = [
    {
        g: "Donepezil", b: "Aricept", c: "Cholinesterase Inhibitor", cat: "neuro",
        m: "Reversibly inhibits ACETYLCHOLINESTERASE (AChE), the enzyme that breaks down acetylcholine. This increases acetylcholine concentration in synaptic clefts, enhancing cholinergic neurotransmission. Alzheimer's involves loss of cholinergic neurons — boosting remaining ACh provides symptomatic improvement (does NOT modify disease progression).",
        ind: "ALZHEIMER'S DISEASE — all stages (mild, moderate, severe). Most commonly prescribed cholinesterase inhibitor. May slow cognitive decline and improve daily functioning for months to years.",
        con: "Hypersensitivity to donepezil or piperidine derivatives. Caution: Sick sinus syndrome, bradycardia, heart block (without pacemaker). Active GI bleeding, peptic ulcer. COPD, asthma. Seizure disorders. Urinary obstruction.",
        aec: "CHOLINERGIC effects (dose-related): Nausea, vomiting, diarrhea, anorexia. Muscle cramps. Insomnia, vivid dreams, nightmares (if taken at bedtime — some switch to morning dosing). Headache, dizziness. Weight loss.",
        aes: "⚠️ BRADYCARDIA, heart block, syncope (especially with other cardiac drugs). GI bleeding (increases gastric acid). Seizures. Urinary obstruction (bladder outlet obstruction). QT prolongation (rare). Neuroleptic malignant-like syndrome (rare).",
        inter: [
            {d: "Anticholinergics", m: "ANTAGONIZE donepezil effect — avoid benztropine, oxybutynin, diphenhydramine, etc.", s: "high"},
            {d: "Beta-blockers, Digoxin, CCBs (diltiazem, verapamil)", m: "Additive bradycardia risk.", s: "med"},
            {d: "NSAIDs", m: "Both increase GI bleeding risk.", s: "med"},
            {d: "Succinylcholine, other neuromuscular blockers", m: "Prolonged paralysis — affects anesthesia.", s: "high"},
            {d: "CYP3A4/CYP2D6 inhibitors", m: "May increase donepezil levels (ketoconazole, fluoxetine, paroxetine).", s: "low"}
        ],
        dosage: "Start 5mg once daily. Increase to 10mg daily after 4-6 weeks if tolerated. Severe AD: 23mg daily (after stable on 10mg). Take in evening (or morning if nightmares).",
        admin: "Oral tablets, ODT (dissolves on tongue). Take once daily. Can be given with or without food. The 23mg tablet must be swallowed whole.",
        nurse: "⚠️ CHOLINERGIC SIDE EFFECTS: Nausea, vomiting, diarrhea are common — usually transient, improve over weeks. GI upset → try taking with food. Nightmares/insomnia → switch from evening to morning dosing. Monitor HR — watch for bradycardia, especially with cardiac drugs. Avoid anticholinergics — they COUNTERACT the effect (review med list!). Realistic expectations: improves symptoms modestly, does not cure or stop progression. May take 2-3 months to see benefit. Caregivers are key partners in monitoring response."
    },
    {
        g: "Rivastigmine", b: "Exelon, Exelon Patch", c: "Cholinesterase Inhibitor", cat: "neuro",
        m: "Inhibits both ACETYLCHOLINESTERASE (AChE) and BUTYRYLCHOLINESTERASE (BuChE), enzymes that break down acetylcholine. Pseudo-irreversible inhibition — dissociates slowly. The dual enzyme inhibition may provide additional benefit. Transdermal patch provides steady drug delivery with fewer GI side effects.",
        ind: "Alzheimer's disease (mild to moderate). PARKINSON'S DISEASE DEMENTIA — only cholinesterase inhibitor FDA-approved for this indication.",
        con: "Same as donepezil: Hypersensitivity. Sick sinus syndrome, bradycardia. GI bleeding/ulcers. COPD/asthma. Seizures. Urinary obstruction.",
        aec: "Similar to donepezil: Nausea, vomiting, diarrhea, anorexia, weight loss. Patch: application site reactions. Dizziness, headache.",
        aes: "⚠️ SEVERE VOMITING with rapid dose escalation — can cause dehydration, especially in elderly. Bradycardia, heart block. GI bleeding. Seizures. Severe skin reactions with patch (rare — can progress to disseminated allergic dermatitis).",
        inter: [
            {d: "Same as Donepezil", m: "Anticholinergics antagonize. Additive bradycardia with cardiac drugs. NSAIDs increase GI risk.", s: "high"},
            {d: "Metoclopramide", m: "Additive GI effects.", s: "low"},
            {d: "Cholinergic agonists (bethanechol)", m: "Additive cholinergic effects.", s: "med"}
        ],
        dosage: "Oral: Start 1.5mg BID with meals. Increase by 1.5mg BID every 2 weeks. Target: 6mg BID (max 12mg/day). Patch: Start 4.6mg/24hr, increase to 9.5mg/24hr after 4 weeks, max 13.3mg/24hr.",
        admin: "Oral capsules/solution: take with food (reduces nausea). Patch: apply to clean, dry, hairless skin (back, chest, upper arm). Rotate sites. Remove old patch before applying new one. Do not cut patch.",
        nurse: "⚠️ TITRATE SLOWLY — rapid increases cause severe vomiting/dehydration. Always increase at recommended intervals (every 2+ weeks). If doses missed for several days, RESTART at lowest dose. PATCH advantages: fewer GI side effects, once-daily, good for patients with swallowing issues. Patch sites: rotate to prevent skin irritation; avoid same site within 14 days. Only cholinesterase inhibitor approved for Parkinson's disease dementia."
    },
    {
        g: "Galantamine", b: "Razadyne, Razadyne ER", c: "Cholinesterase Inhibitor", cat: "neuro",
        m: "Reversibly inhibits acetylcholinesterase AND is an ALLOSTERIC MODULATOR of nicotinic acetylcholine receptors (potentiates their response to ACh). This dual mechanism theoretically provides enhanced cholinergic neurotransmission compared to AChE inhibition alone.",
        ind: "Alzheimer's disease (mild to moderate).",
        con: "Same cautions as other cholinesterase inhibitors. Additionally: Severe hepatic impairment (Child-Pugh 10-15). Severe renal impairment (CrCl <9 mL/min).",
        aec: "Nausea, vomiting, diarrhea, anorexia, weight loss. Dizziness, headache, fatigue. Syncope.",
        aes: "⚠️ CARDIAC: Bradycardia, AV block, syncope (may be higher risk than other ChE inhibitors). GI bleeding. Seizures.",
        inter: [
            {d: "Same as other ChE inhibitors", m: "Anticholinergics antagonize. Bradycardia with cardiac drugs.", s: "high"},
            {d: "Ketoconazole, Paroxetine, Erythromycin", m: "CYP3A4/2D6 inhibitors increase galantamine levels.", s: "med"}
        ],
        dosage: "Immediate-release: Start 4mg BID with meals. Increase to 8mg BID after 4 weeks, then to 12mg BID after 4 more weeks. ER: Start 8mg daily, titrate monthly to 16-24mg daily. Reduce in renal/hepatic impairment.",
        admin: "Oral with food (breakfast and dinner for IR, breakfast for ER). ER capsules: swallow whole. Oral solution available.",
        nurse: "Same monitoring as other cholinesterase inhibitors. May have slightly higher syncope/bradycardia risk — monitor cardiac patients closely. MUST take with food to reduce GI upset. Dose reduce in moderate hepatic (Child-Pugh 7-9) or moderate renal impairment. Avoid in severe hepatic or renal failure. If interrupted >3 days, restart at lowest dose."
    },
    {
        g: "Memantine", b: "Namenda, Namenda XR", c: "NMDA Receptor Antagonist", cat: "neuro",
        m: "UNCOMPETITIVE antagonist of the NMDA glutamate receptor. In Alzheimer's, excessive glutamate causes chronic NMDA receptor activation → excitotoxicity and neuronal damage. Memantine blocks pathological overstimulation while allowing physiological glutamate signaling (low-affinity, fast off-rate).",
        ind: "Alzheimer's disease — MODERATE TO SEVERE (not FDA-approved for mild AD). Often used in combination with a cholinesterase inhibitor. Namzaric = memantine + donepezil fixed combination.",
        con: "Hypersensitivity. Caution: Severe renal impairment (reduce dose). Conditions that raise urine pH (may reduce excretion). Seizure disorders.",
        aec: "Generally well-tolerated. Dizziness, headache, confusion. Constipation. Hypertension.",
        aes: "Hallucinations, psychosis (uncommon). Seizures (rare). Severe allergic reactions (rare). Stevens-Johnson syndrome (rare reports).",
        inter: [
            {d: "Other NMDA antagonists (amantadine, ketamine, dextromethorphan)", m: "Avoid combination — additive CNS effects, potential toxicity.", s: "high"},
            {d: "Drugs that alkalinize urine (carbonic anhydrase inhibitors, sodium bicarbonate)", m: "Decreased renal excretion → higher memantine levels.", s: "med"},
            {d: "Hydrochlorothiazide, triamterene", m: "May increase memantine levels.", s: "low"}
        ],
        dosage: "IR: Start 5mg daily. Increase by 5mg weekly: 5mg BID → 5mg + 10mg → 10mg BID (target). XR: Start 7mg daily, increase weekly by 7mg to target 28mg daily. Severe renal impairment (CrCl 5-29): max 5mg BID or 14mg XR daily.",
        admin: "Oral with or without food. IR: twice daily. XR: once daily. XR capsules can be opened and sprinkled on applesauce.",
        nurse: "⚠️ Different mechanism than cholinesterase inhibitors — often ADDED to donepezil/rivastigmine in moderate-severe AD (complementary). Well-tolerated, fewer GI effects than ChE inhibitors. Reduce dose in severe renal impairment. Titrate weekly as directed — don't increase faster. Avoid with amantadine (same mechanism). Monitor for confusion, dizziness — may worsen initially but usually resolves. Namzaric (memantine XR + donepezil) available for once-daily combination therapy."
    }
];
