/* Block 5 — CNS & Psychiatric Medications (13 drugs)
   Source: pharmacology_A_drjames.txt */

const data_cns_psych = [
    {
        g: "Lorazepam", b: "Ativan", c: "Benzodiazepine (Anxiolytic/Sedative)", cat: "cns",
        m: "Enhances the effect of the inhibitory neurotransmitter GABA at GABA-A receptors, increasing chloride influx and neuronal hyperpolarization. Produces anxiolytic, sedative, muscle relaxant, and anticonvulsant effects. INTERMEDIATE-acting benzodiazepine with NO active metabolites (safer in elderly/liver disease).",
        ind: "Anxiety disorders. Insomnia (short-term). Status epilepticus (IV). Pre-procedural sedation. Acute alcohol withdrawal. Chemotherapy-induced nausea/vomiting (anticipatory). Acute agitation.",
        con: "Acute narrow-angle glaucoma. Severe respiratory depression. Sleep apnea (untreated). Pregnancy (especially 1st trimester — risk of cleft palate). Concurrent use with opioids requires extreme caution.",
        aec: "SEDATION, drowsiness, dizziness, weakness, unsteadiness. Anterograde amnesia (cannot form new memories). Cognitive impairment. Headache.",
        aes: "RESPIRATORY DEPRESSION (especially with opioids — BLACK BOX WARNING). Paradoxical reactions (agitation, aggression — more common in elderly/children). DEPENDENCE and WITHDRAWAL (seizures, psychosis). Falls in elderly. Oversedation.",
        inter: [
            {d: "Opioids", m: "⚠️ BLACK BOX: Profound sedation, respiratory depression, coma, DEATH. Avoid combination when possible.", s: "high"},
            {d: "CNS Depressants (Alcohol, Antihistamines, Barbiturates)", m: "Additive CNS/respiratory depression.", s: "high"},
            {d: "Valproic Acid", m: "Increased lorazepam levels.", s: "med"}
        ],
        dosage: "Anxiety: 0.5-2mg PO 2-3 times daily. Insomnia: 2-4mg PO at bedtime. Status epilepticus: 4mg IV (may repeat once). Pre-procedure: 0.5-2mg IV. Alcohol withdrawal: 1-4mg IV/PO every 6 hours PRN.",
        admin: "Oral, IV, IM. IV push slowly (max 2mg/min). No active metabolites — preferred benzodiazepine for elderly and hepatic impairment. Refrigerate injection.",
        nurse: "Monitor RESPIRATORY STATUS — especially with opioids (Black Box Warning). Falls precautions (sedation, ataxia). ⚠️ Do NOT stop abruptly after prolonged use — can cause SEIZURES, psychosis. Taper gradually. Preferred benzodiazepine for elderly (no active metabolites). Causes anterograde amnesia — patient may not remember procedure/teaching. Assess for paradoxical reactions. Schedule IV controlled substance — assess for misuse."
    },
    {
        g: "Diazepam", b: "Valium", c: "Benzodiazepine (Anxiolytic/Muscle Relaxant)", cat: "cns",
        m: "Enhances GABA activity at GABA-A receptors. LONG-ACTING benzodiazepine with ACTIVE METABOLITES (desmethyldiazepam) that prolong effects. Provides anxiolytic, sedative, muscle relaxant, and anticonvulsant effects.",
        ind: "Anxiety disorders. Muscle spasms. Alcohol withdrawal (historically common). Seizures (status epilepticus, acute repetitive seizures). Pre-procedural sedation. Spasticity (cerebral palsy, paraplegia).",
        con: "Acute narrow-angle glaucoma. Severe respiratory insufficiency. Sleep apnea. Myasthenia gravis (can worsen weakness). Pregnancy (teratogenic — cleft lip/palate).",
        aec: "Sedation, drowsiness, fatigue, ataxia. Confusion (especially elderly). Muscle weakness. Anterograde amnesia.",
        aes: "Respiratory depression. Paradoxical reactions. DEPENDENCE and severe WITHDRAWAL. Prolonged sedation due to active metabolites (especially elderly, hepatic impairment). Falls.",
        inter: [
            {d: "Opioids", m: "BLACK BOX: Profound respiratory depression, coma, death.", s: "high"},
            {d: "CNS Depressants", m: "Additive sedation and respiratory depression.", s: "high"},
            {d: "CYP3A4 Inhibitors", m: "Increased diazepam levels and prolonged effect.", s: "med"},
            {d: "Cimetidine", m: "Inhibits diazepam metabolism.", s: "med"}
        ],
        dosage: "Anxiety: 2-10mg PO 2-4 times daily. Muscle spasm: 2-10mg PO 3-4 times daily. Alcohol withdrawal: 10mg IV/PO initially, then 5-10mg every 3-4 hours PRN. Status epilepticus: 5-10mg IV (may repeat).",
        admin: "Oral, IV, IM, rectal (Diastat for home seizure management). IV: give slowly (5mg/min) — rapid push can cause respiratory arrest. Do NOT mix with other drugs — precipitates.",
        nurse: "LONG HALF-LIFE (20-100 hours including metabolites) — drug accumulates, especially in elderly. ⚠️ Avoid in elderly (Beers Criteria) — active metabolites cause prolonged sedation, falls, confusion. ⚠️ PREGNANCY RISK — associated with cleft lip/palate. Rectal gel (Diastat) for home management of acute repetitive seizures. Monitor respiratory status. Taper gradually — do not stop abruptly."
    },
    {
        g: "Midazolam", b: "Versed", c: "Benzodiazepine (Sedative/Anesthetic Adjunct)", cat: "cns",
        m: "Short-acting benzodiazepine that enhances GABA activity. RAPID ONSET and SHORT DURATION make it ideal for procedural sedation. Produces profound ANTEROGRADE AMNESIA — patient will not remember the procedure.",
        ind: "Procedural/conscious sedation (endoscopy, dental, minor surgery). Preoperative sedation. ICU sedation. Status epilepticus (IM, intranasal). Induction of general anesthesia.",
        con: "Acute narrow-angle glaucoma. Shock, coma. Acute alcohol intoxication with depressed vital signs. Severe respiratory depression.",
        aec: "Sedation, respiratory depression, hypotension. Anterograde amnesia (desired for procedures). Hiccups, nausea, vomiting. Injection site pain (IV).",
        aes: "RESPIRATORY ARREST — especially with opioids or rapid IV push. Paradoxical reactions (more common in children, elderly). Prolonged sedation in obese/elderly patients.",
        inter: [
            {d: "Opioids (Fentanyl, Morphine)", m: "BLACK BOX: Severe respiratory depression — use lowest effective doses of both.", s: "high"},
            {d: "CNS Depressants", m: "Profound additive sedation.", s: "high"},
            {d: "CYP3A4 Inhibitors (Ketoconazole, Erythromycin)", m: "Increased and prolonged midazolam effect.", s: "high"},
            {d: "Grapefruit Juice", m: "Increases oral midazolam levels.", s: "med"}
        ],
        dosage: "Procedural sedation: 0.5-2mg IV titrated slowly. Preop: 0.07-0.08mg/kg IM. Status epilepticus (IM/IN): 10mg IM or 5mg per nostril. ICU sedation: 0.02-0.1mg/kg/hr IV infusion.",
        admin: "IV, IM, intranasal, oral (peds). IV: titrate slowly in small increments. ⚠️ Resuscitation equipment MUST be immediately available. Intranasal (Nayzilam) for seizures at home.",
        nurse: "⚠️ RESPIRATORY MONITORING is mandatory — have FLUMAZENIL (reversal agent), oxygen, and resuscitation equipment at bedside. Never administer without monitoring capability. Profound amnesia — patient will not remember teaching or consent discussion given after administration. Titrate slowly to effect. Elderly and obese require reduced doses. Document level of sedation frequently using sedation scale."
    },
    {
        g: "Fluoxetine", b: "Prozac", c: "SSRI (Selective Serotonin Reuptake Inhibitor)", cat: "cns",
        m: "Selectively inhibits the reuptake of SEROTONIN into presynaptic neurons, increasing serotonin availability in the synaptic cleft. Has the LONGEST half-life of all SSRIs (1-3 days; active metabolite 4-16 days) — provides 'built-in taper' if doses missed.",
        ind: "Major depressive disorder. Obsessive-compulsive disorder (OCD). Panic disorder. Bulimia nervosa. Premenstrual dysphoric disorder (PMDD). Generalized anxiety disorder.",
        con: "Concurrent MAOIs (within 14 days — serotonin syndrome). Concurrent pimozide, thioridazine (QT prolongation).",
        aec: "GI: Nausea, diarrhea, dyspepsia (common initially). CNS: Headache, insomnia, nervousness, anxiety, drowsiness. SEXUAL DYSFUNCTION (decreased libido, anorgasmia — common reason for discontinuation). Weight changes. Sweating.",
        aes: "⚠️ BLACK BOX: Increased SUICIDAL THINKING in children, adolescents, and young adults (under 25) — monitor closely. SEROTONIN SYNDROME (with serotonergic drugs). QT prolongation. Hyponatremia (SIADH — especially elderly). Bleeding risk (inhibits platelet aggregation). Activation (may trigger mania in bipolar).",
        inter: [
            {d: "MAOIs", m: "CONTRAINDICATED — fatal SEROTONIN SYNDROME. Wait 14 days after stopping MAOI, 5 weeks after stopping fluoxetine.", s: "high"},
            {d: "Other Serotonergic Drugs (Tramadol, Triptans, TCAs)", m: "Risk of serotonin syndrome.", s: "high"},
            {d: "Warfarin, NSAIDs, Aspirin", m: "Increased bleeding risk.", s: "med"},
            {d: "CYP2D6 Substrates (TCAs, Antipsychotics)", m: "Fluoxetine inhibits CYP2D6 — increases levels of these drugs.", s: "med"}
        ],
        dosage: "Depression: Start 20mg PO every morning, may increase to 80mg/day. OCD: 20-80mg/day. Bulimia: 60mg/day. PMDD: 20mg daily or 20mg during luteal phase.",
        admin: "Oral (capsules, tablets, liquid). Usually given in MORNING due to activating effect (may cause insomnia). Long half-life — once daily dosing. Takes 2-4 WEEKS for therapeutic effect.",
        nurse: "⚠️ BLACK BOX: Monitor for SUICIDAL IDEATION especially in young patients during first weeks of treatment or dose changes. Takes 2-4 weeks for antidepressant effect — counsel patient to continue. Watch for SEROTONIN SYNDROME signs: hyperthermia, agitation, tremor, myoclonus, hyperreflexia, diaphoresis. Give in AM (activating). Long half-life is advantage if doses missed. Sexual dysfunction is common — discuss openly. Do not stop MAOIs within 14 days of starting."
    },
    {
        g: "Sertraline", b: "Zoloft", c: "SSRI (Selective Serotonin Reuptake Inhibitor)", cat: "cns",
        m: "Selectively inhibits serotonin reuptake. Has FEWER drug interactions than fluoxetine (less CYP inhibition). Intermediate half-life (~26 hours). First-line antidepressant for many indications.",
        ind: "Major depressive disorder. OCD. Panic disorder. PTSD (FDA approved). Social anxiety disorder. Premenstrual dysphoric disorder.",
        con: "Concurrent MAOIs. Concurrent pimozide. Disulfiram use with oral concentrate (contains alcohol).",
        aec: "Nausea, diarrhea (more GI effects than other SSRIs initially), dry mouth, insomnia, somnolence, dizziness, tremor, sexual dysfunction, sweating.",
        aes: "BLACK BOX: Suicidality in young patients. Serotonin syndrome. QT prolongation (less than some SSRIs). Hyponatremia. Bleeding. Activation/mania in bipolar.",
        inter: [
            {d: "MAOIs", m: "CONTRAINDICATED — serotonin syndrome risk. 14-day washout required.", s: "high"},
            {d: "Pimozide", m: "QT prolongation — contraindicated.", s: "high"},
            {d: "Serotonergic Drugs", m: "Risk of serotonin syndrome.", s: "high"},
            {d: "Warfarin", m: "Increased INR/bleeding risk — monitor.", s: "med"}
        ],
        dosage: "Depression/OCD: Start 50mg PO daily, may increase to 200mg/day. PTSD/Panic/Social anxiety: Start 25mg, increase to 50-200mg/day. PMDD: 50-150mg daily or luteal phase only.",
        admin: "Oral (tablets, oral concentrate). May take with or without food. Oral concentrate must be diluted before administration. Can give AM or PM based on patient response (sedating vs. activating varies).",
        nurse: "BLACK BOX: Suicide risk monitoring in young patients. First-line SSRI for PTSD (FDA approved). GI side effects (especially diarrhea) often improve after 1-2 weeks. Fewer drug interactions than fluoxetine — better choice when polypharmacy is concern. Oral concentrate contains alcohol — avoid in patients on disulfiram. Therapeutic effect takes 2-4 weeks. Gradual taper recommended when discontinuing (although less severe discontinuation syndrome than paroxetine)."
    },
    {
        g: "Amitriptyline", b: "Elavil", c: "Tricyclic Antidepressant (TCA)", cat: "cns",
        m: "Inhibits reuptake of NOREPINEPHRINE and SEROTONIN. Also has significant ANTICHOLINERGIC, antihistaminic (sedating), and alpha-blocking effects. These additional receptor effects cause many side effects but also make it useful for pain and insomnia.",
        ind: "Depression (though SSRIs now preferred). Chronic pain syndromes (neuropathic pain, fibromyalgia, migraine prophylaxis). Insomnia. Irritable bowel syndrome.",
        con: "Recent MI (arrhythmia risk). Concurrent MAOIs. Narrow-angle glaucoma. Urinary retention. Severe cardiac conduction abnormalities.",
        aec: "ANTICHOLINERGIC: Dry mouth, constipation, urinary retention, blurred vision, tachycardia. SEDATION (strong — often given at bedtime). Orthostatic hypotension. Weight gain.",
        aes: "⚠️ CARDIAC TOXICITY — arrhythmias, heart block, QT prolongation (major overdose concern). Seizures. BLACK BOX: Suicidality in young patients. Severe anticholinergic toxicity. Orthostatic hypotension → falls.",
        inter: [
            {d: "MAOIs", m: "CONTRAINDICATED — hypertensive crisis, serotonin syndrome, death.", s: "high"},
            {d: "Other Anticholinergics", m: "Additive anticholinergic toxicity.", s: "high"},
            {d: "CNS Depressants", m: "Additive sedation.", s: "high"},
            {d: "CYP2D6 Inhibitors (Fluoxetine, Paroxetine)", m: "Increased TCA levels → toxicity.", s: "high"},
            {d: "Class I Antiarrhythmics", m: "Additive cardiac conduction effects.", s: "high"}
        ],
        dosage: "Depression: Start 25-50mg PO at bedtime, increase to 100-300mg/day. Chronic pain: 10-75mg at bedtime (lower doses effective for pain). Migraine prophylaxis: 10-150mg at bedtime.",
        admin: "Oral. Usually given at BEDTIME due to sedation. Start low, increase gradually. Takes 2-4 weeks for antidepressant effect; pain relief may occur sooner at lower doses.",
        nurse: "Give at BEDTIME (very sedating). ⚠️ DANGEROUS IN OVERDOSE — cardiac arrhythmias are life-threatening. Keep out of reach if patient has suicidal ideation. Beers Criteria drug — avoid in elderly (anticholinergic burden, falls, confusion). Monitor for anticholinergic effects: 'blind as a bat, dry as a bone, red as a beet, mad as a hatter, hot as a hare.' Lower doses effective for pain than for depression. ECG recommended before starting in patients with cardiac history."
    },
    {
        g: "Phenelzine", b: "Nardil", c: "MAOI (Monoamine Oxidase Inhibitor)", cat: "cns",
        m: "IRREVERSIBLY inhibits monoamine oxidase (MAO), the enzyme that breaks down norepinephrine, serotonin, and dopamine. Increases levels of all three neurotransmitters. Also inhibits MAO in the gut, which normally breaks down dietary tyramine — leads to food-drug interactions.",
        ind: "Depression (especially atypical depression with hypersomnia, hyperphagia). Treatment-resistant depression. Social phobia. Panic disorder. Reserved for patients who fail other antidepressants due to dietary restrictions and interactions.",
        con: "Pheochromocytoma. Congestive heart failure. Liver disease. Concurrent or recent (14 days) use of SSRIs, SNRIs, TCAs, meperidine, tramadol, dextromethorphan. Tyramine-rich foods.",
        aec: "Orthostatic hypotension (common). Insomnia, drowsiness. Weight gain. Sexual dysfunction. Dry mouth, constipation. Edema.",
        aes: "⚠️ HYPERTENSIVE CRISIS with tyramine-containing foods or sympathomimetic drugs (severe headache, neck stiffness, nausea, vomiting, sweating, markedly elevated BP → stroke). SEROTONIN SYNDROME with serotonergic drugs. Hepatotoxicity.",
        inter: [
            {d: "Tyramine-Rich Foods", m: "⚠️ HYPERTENSIVE CRISIS: aged cheese, cured meats, sauerkraut, soy sauce, tap beer, red wine, fermented foods.", s: "high"},
            {d: "SSRIs, SNRIs, TCAs", m: "Fatal SEROTONIN SYNDROME — 14-day washout required (5 weeks for fluoxetine).", s: "high"},
            {d: "Meperidine (Demerol)", m: "CONTRAINDICATED — fatal serotonin syndrome and hyperpyrexia.", s: "high"},
            {d: "Sympathomimetics (Pseudoephedrine, Amphetamines)", m: "Severe hypertensive crisis.", s: "high"},
            {d: "Dextromethorphan", m: "Serotonin syndrome risk.", s: "high"}
        ],
        dosage: "Start 15mg PO three times daily. Increase gradually to 60-90mg/day in divided doses. Maximum 90mg/day.",
        admin: "Oral. Divided doses. Dietary restrictions MUST be followed. Requires 14-day washout before/after other antidepressants.",
        nurse: "⚠️ DIETARY COUNSELING is critical — provide comprehensive list of tyramine-containing foods to AVOID: aged cheeses, cured/smoked meats, fermented foods, soy sauce, tap/draft beer, red wine. Teach signs of hypertensive crisis: sudden severe headache, neck stiffness, nausea, palpitations — EMERGENCY. Treatment: phentolamine IV. Orthostatic hypotension common — rise slowly. Carry medication card listing drug interactions. 14-day washout between MAOIs and other antidepressants (5 weeks for fluoxetine due to long half-life)."
    },
    {
        g: "Lithium", b: "Lithobid, Eskalith", c: "Mood Stabilizer", cat: "cns",
        m: "Exact mechanism unknown. May modulate neurotransmitter release (serotonin, norepinephrine), affect second messenger systems (inositol phosphate, protein kinase C), and influence neuroplasticity. The GOLD STANDARD for bipolar disorder — only mood stabilizer proven to reduce suicide risk.",
        ind: "BIPOLAR DISORDER — acute mania and maintenance/prophylaxis (prevents both manic and depressive episodes). Augmentation of antidepressants in treatment-resistant depression. Cluster headache prophylaxis.",
        con: "Severe renal impairment. Severe cardiovascular disease. Dehydration, sodium depletion. Sick sinus syndrome. Pregnancy (1st trimester — Ebstein's anomaly cardiac defect).",
        aec: "GI: Nausea, vomiting, diarrhea (especially early). Fine hand TREMOR. POLYURIA and POLYDIPSIA (nephrogenic diabetes insipidus). Weight gain. Cognitive dulling. Acne, hair loss.",
        aes: "⚠️ NARROW THERAPEUTIC INDEX (0.6-1.2 mEq/L). LITHIUM TOXICITY: GI symptoms → ataxia, slurred speech → seizures, coma, death. NEPHROGENIC DIABETES INSIPIDUS. Hypothyroidism (monitor TSH). Cardiac conduction abnormalities. Teratogenic (Ebstein's anomaly).",
        inter: [
            {d: "Thiazide Diuretics", m: "DECREASE lithium excretion → TOXICITY. Avoid or monitor very closely.", s: "high"},
            {d: "ACE Inhibitors, ARBs", m: "Decrease lithium excretion → toxicity.", s: "high"},
            {d: "NSAIDs", m: "Decrease lithium excretion → toxicity. Avoid or use with caution.", s: "high"},
            {d: "Sodium Depletion (Low-salt diet, Dehydration)", m: "Lithium retention → toxicity.", s: "high"},
            {d: "Loop Diuretics", m: "Variable effect on lithium levels — monitor.", s: "med"}
        ],
        dosage: "Acute mania: 600-900mg PO 2-3 times daily (target level 0.8-1.2 mEq/L). Maintenance: 300-600mg 2-3 times daily (target level 0.6-1.0 mEq/L). Adjust based on serum levels.",
        admin: "Oral (tablets, capsules, liquid). Take with food to reduce GI upset. MAINTAIN CONSISTENT sodium and fluid intake — changes affect lithium levels.",
        nurse: "⚠️ THERAPEUTIC DRUG MONITORING required — check levels 12 hours after last dose. Therapeutic range: 0.6-1.2 mEq/L. Toxicity at >1.5 mEq/L. Signs of TOXICITY: severe nausea/vomiting/diarrhea, coarse tremor, ataxia, slurred speech, confusion, seizures — HOLD drug and CALL provider. Maintain adequate SALT and FLUID intake — dehydration causes toxicity. Monitor: TSH (hypothyroidism), creatinine (nephrotoxicity), lithium levels. Avoid NSAIDs, diuretics. Only mood stabilizer proven to reduce suicide."
    },
    {
        g: "Haloperidol", b: "Haldol", c: "Typical Antipsychotic (First Generation)", cat: "cns",
        m: "Blocks DOPAMINE D2 receptors in the mesolimbic pathway (reduces positive symptoms) and other brain regions. HIGH POTENCY typical antipsychotic — very effective but high risk of EXTRAPYRAMIDAL SYMPTOMS (EPS). Also blocks alpha-adrenergic receptors (hypotension).",
        ind: "Schizophrenia (positive symptoms: hallucinations, delusions). Acute psychosis. Severe agitation. Tourette syndrome. Nausea/vomiting (off-label, ICU). Delirium (low-dose, though controversial).",
        con: "Parkinson's disease (worsens symptoms). Severe CNS depression. QT prolongation. Dementia-related psychosis in elderly (BLACK BOX — increased mortality).",
        aec: "EXTRAPYRAMIDAL SYMPTOMS (EPS): Acute dystonia (muscle spasms), akathisia (restlessness), parkinsonism (tremor, rigidity, bradykinesia). Sedation (less than low-potency). Orthostatic hypotension.",
        aes: "⚠️ TARDIVE DYSKINESIA (TD) — irreversible involuntary movements (lip smacking, tongue protrusion, choreiform movements) with prolonged use. ⚠️ NEUROLEPTIC MALIGNANT SYNDROME (NMS) — fever, muscle rigidity, altered consciousness, autonomic instability — MEDICAL EMERGENCY. QT prolongation → torsades de pointes. BLACK BOX: Increased mortality in elderly with dementia-related psychosis.",
        inter: [
            {d: "QT-Prolonging Drugs", m: "Additive QT prolongation → torsades de pointes.", s: "high"},
            {d: "CNS Depressants", m: "Additive sedation.", s: "med"},
            {d: "Anticholinergics", m: "Often given together (benztropine) to treat EPS.", s: "low"},
            {d: "Dopamine Agonists (Levodopa)", m: "Antagonistic effects — avoid in Parkinson's.", s: "high"}
        ],
        dosage: "Psychosis: 0.5-5mg PO 2-3 times daily. Acute agitation: 2-5mg IM, may repeat every 4-8 hours (max 20mg/day). Decanoate (long-acting): 50-200mg IM every 4 weeks.",
        admin: "Oral, IM (acute), IM decanoate (long-acting depot for maintenance). IV use controversial (QT prolongation) — requires cardiac monitoring. Decanoate for patients with adherence issues.",
        nurse: "⚠️ Monitor for EPS: Acute dystonia (treat with diphenhydramine or benztropine), akathisia, parkinsonism. Monitor for TARDIVE DYSKINESIA (irreversible) — assess using AIMS scale regularly. ⚠️ NEUROLEPTIC MALIGNANT SYNDROME (NMS): fever >104°F, severe muscle rigidity ('lead pipe'), altered mental status, autonomic instability — STOP drug immediately, it's a medical emergency. Monitor ECG (QT). BLACK BOX in elderly with dementia. Decanoate injection is oil-based — use large needle, deep IM, Z-track."
    },
    {
        g: "Olanzapine", b: "Zyprexa", c: "Atypical Antipsychotic (Second Generation)", cat: "cns",
        m: "Blocks multiple receptors: dopamine D2 (less tightly than typical antipsychotics), serotonin 5-HT2A (reduces negative symptoms, less EPS), histamine H1 (sedation, weight gain), muscarinic (anticholinergic effects). The serotonin-dopamine antagonism reduces EPS risk compared to typicals.",
        ind: "Schizophrenia. Bipolar disorder (acute mania, maintenance, bipolar depression with fluoxetine as Symbyax). Acute agitation (IM). Treatment-resistant depression (with fluoxetine).",
        con: "Dementia-related psychosis in elderly (BLACK BOX). Uncontrolled diabetes (metabolic effects). Known hypersensitivity.",
        aec: "⚠️ METABOLIC EFFECTS: Significant WEIGHT GAIN (most of any atypical), increased appetite, hyperglycemia, dyslipidemia. SEDATION (significant). Orthostatic hypotension. Dry mouth, constipation.",
        aes: "⚠️ METABOLIC SYNDROME — diabetes, obesity, cardiovascular risk. NEW-ONSET DIABETES. Tardive dyskinesia (less than typicals but still possible). NMS (rare). QT prolongation. BLACK BOX: Increased mortality in elderly with dementia.",
        inter: [
            {d: "CNS Depressants", m: "Additive sedation — especially concerning with IM olanzapine and benzodiazepines.", s: "high"},
            {d: "Anticholinergics", m: "Additive anticholinergic effects.", s: "med"},
            {d: "CYP1A2 Inducers (Smoking, Carbamazepine)", m: "Decreased olanzapine levels — smokers need higher doses.", s: "med"},
            {d: "Fluvoxamine", m: "CYP1A2 inhibition — increased olanzapine levels.", s: "med"}
        ],
        dosage: "Schizophrenia: Start 5-10mg PO daily, usual range 10-20mg/day. Bipolar mania: 10-15mg daily. Acute agitation: 10mg IM (max 30mg/day IM). Symbyax (with fluoxetine): 6/25 to 12/50mg daily.",
        admin: "Oral (tablets, orally disintegrating), IM (short-acting for acute agitation), IM depot (Zyprexa Relprevv — requires REMS program due to post-injection delirium/sedation syndrome).",
        nurse: "⚠️ METABOLIC MONITORING required: Weight/BMI, fasting glucose, lipid panel at baseline, 12 weeks, then annually. WEIGHT GAIN is substantial — counsel patient, encourage diet/exercise. Monitor for new-onset diabetes symptoms (polyuria, polydipsia). Very sedating — usually given at bedtime. ⚠️ IM olanzapine + IM benzodiazepine = risk of severe respiratory depression/death — avoid combination. Smokers metabolize faster — may need higher doses; if patient quits smoking, reduce dose."
    },
    {
        g: "Phenytoin", b: "Dilantin", c: "Anticonvulsant (Hydantoin)", cat: "cns",
        m: "Blocks voltage-gated SODIUM CHANNELS, stabilizing neuronal membranes and preventing repetitive firing of action potentials. Reduces seizure spread without affecting the seizure focus. Also has antiarrhythmic properties (Class IB).",
        ind: "Seizures: Tonic-clonic (grand mal), partial/focal seizures. Status epilepticus (IV fosphenytoin preferred). NOT effective for absence seizures. Digitalis-induced arrhythmias (historical).",
        con: "Sinus bradycardia, SA block, second/third-degree AV block. Known hypersensitivity. Adams-Stokes syndrome. Pregnancy (teratogenic — fetal hydantoin syndrome).",
        aec: "CNS: Nystagmus (early sign of toxicity), ataxia, sedation, cognitive impairment, dizziness. GINGIVAL HYPERPLASIA (gum overgrowth). Hirsutism. Acne. Coarsening of facial features.",
        aes: "⚠️ NARROW THERAPEUTIC INDEX (10-20 mcg/mL). PHENYTOIN TOXICITY: Nystagmus → ataxia → lethargy → coma. SEVERE SKIN REACTIONS (SJS, TEN, DRESS) — especially in HLA-B*1502 positive patients (Asian ancestry). Hepatotoxicity. Bone marrow suppression. Osteoporosis. Hyperglycemia. Purple glove syndrome (IV extravasation).",
        inter: [
            {d: "Many CYP Interactions", m: "Phenytoin is a potent CYP INDUCER — decreases levels of warfarin, oral contraceptives, corticosteroids, many others.", s: "high"},
            {d: "CYP2C9 Inhibitors (Fluconazole, Amiodarone)", m: "Increased phenytoin levels → toxicity.", s: "high"},
            {d: "Valproic Acid", m: "Complex interaction — can increase free phenytoin while decreasing total levels.", s: "high"},
            {d: "Enteral Feedings", m: "Decreased phenytoin absorption — hold tube feeds 1-2 hours before and after.", s: "med"}
        ],
        dosage: "Oral loading: 1g divided into 3 doses over 24 hours. Maintenance: 300-400mg/day (usually 100mg TID or 300mg daily extended-release). IV loading (fosphenytoin preferred): 15-20mg PE/kg.",
        admin: "Oral, IV. IV phenytoin: give slowly (max 50mg/min) with cardiac monitoring — rapid infusion causes hypotension, arrhythmias. NEVER give IM (crystallizes, causes necrosis). Fosphenytoin is water-soluble prodrug — safer for IV/IM use.",
        nurse: "⚠️ THERAPEUTIC DRUG MONITORING required — therapeutic range 10-20 mcg/mL (total) or 1-2 mcg/mL (free). NYSTAGMUS is first sign of toxicity. Monitor for ataxia, sedation. Oral hygiene critical — GINGIVAL HYPERPLASIA is common and disfiguring. ⚠️ IV phenytoin: never give IM, give slowly with cardiac monitor, flush with saline only (precipitates with dextrose). Watch for purple glove syndrome with IV. MANY drug interactions — review all medications. Screen HLA-B*1502 in Asian patients before starting (SJS risk)."
    },
    {
        g: "Valproic Acid", b: "Depakene (valproic acid); Depakote (divalproex)", c: "Anticonvulsant / Mood Stabilizer", cat: "cns",
        m: "Multiple mechanisms: Blocks voltage-gated sodium channels, enhances GABA activity (increases synthesis, decreases degradation), blocks T-type calcium channels. BROAD-SPECTRUM anticonvulsant effective for many seizure types including absence seizures.",
        ind: "Seizures: Absence seizures, complex partial seizures, tonic-clonic seizures, myoclonic seizures. BIPOLAR DISORDER (acute mania, maintenance). Migraine prophylaxis.",
        con: "⚠️ PREGNANCY (Category X for migraines; Category D for epilepsy/bipolar) — neural tube defects, cognitive impairment in offspring. Hepatic disease. Urea cycle disorders. Mitochondrial disorders (POLG mutations).",
        aec: "GI: Nausea, vomiting, diarrhea, dyspepsia. CNS: Tremor, sedation, dizziness. Weight gain. Hair loss (reversible). Thrombocytopenia.",
        aes: "⚠️ BLACK BOX: HEPATOTOXICITY (especially children under 2 on multiple anticonvulsants — can be fatal). BLACK BOX: PANCREATITIS. BLACK BOX: TERATOGENICITY (neural tube defects, craniofacial abnormalities, decreased IQ). Hyperammonemia (encephalopathy without elevated LFTs). Thrombocytopenia, bleeding.",
        inter: [
            {d: "Lamotrigine", m: "Valproate DOUBLES lamotrigine levels — reduce lamotrigine dose by 50%.", s: "high"},
            {d: "Carbapenems (Meropenem, Imipenem)", m: "Dramatically DECREASE valproate levels — avoid combination.", s: "high"},
            {d: "Phenytoin, Phenobarbital", m: "Complex interactions — may need dose adjustments.", s: "med"},
            {d: "Aspirin", m: "Displaces valproate from protein binding — increased free drug and toxicity risk.", s: "med"}
        ],
        dosage: "Seizures: Start 10-15mg/kg/day, increase to therapeutic level (50-100 mcg/mL). Usual 1000-3000mg/day in divided doses. Mania: 750-2500mg/day. Migraine prophylaxis: 500-1000mg/day.",
        admin: "Oral (capsules, tablets, sprinkles, syrup), IV. Depakote (divalproex) is enteric-coated — less GI upset than valproic acid. Extended-release available for once-daily dosing. Take with food to reduce GI effects.",
        nurse: "⚠️ BLACK BOX WARNINGS: Hepatotoxicity (monitor LFTs), pancreatitis (stop if abdominal pain), teratogenicity. AVOID in women of childbearing potential when possible — highly teratogenic. If must use, ensure effective contraception and folic acid supplementation. Monitor: LFTs, CBC (thrombocytopenia), ammonia if altered mental status (hyperammonemic encephalopathy can occur without elevated LFTs). Depakote ER is not equivalent to Depakote — different dosing. Watch for drug interactions, especially lamotrigine."
    }
];
