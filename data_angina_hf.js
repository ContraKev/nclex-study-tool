const data_angina_hf = [
    {
        g: "Digoxin", b: "Lanoxin", c: "Cardiac Glycoside / Antiarrhythmic", cat: "cv",
        m: "Inhibits the sodium-potassium ATPase pump in myocardial cells. This leads to an increase in intracellular sodium, which in turn facilitates an increase in intracellular calcium via the sodium-calcium exchanger. The results are three-fold: 1. Positive Inotropy (increased force of contraction) by making more calcium available for contractile proteins. 2. Negative Chronotropy (decreased heart rate) by increasing vagal tone and decreasing sympathetic activity. 3. Negative Dromotropy (slowed AV conduction). This enhances cardiac output while reducing the heart's workload and oxygen consumption.",
        ind: "Second-line treatment for chronic Heart Failure with reduced ejection fraction (HFrEF); rate control in chronic Atrial Fibrillation or Atrial Flutter.",
        con: "Ventricular fibrillation, ventricular tachycardia (unless caused by HF), 2nd or 3rd degree heart block (without pacemaker), and sick sinus syndrome. High risk in patients with significant renal impairment or electrolyte imbalances.",
        aec: "Anorexia, nausea, vomiting, fatigue, headache, and weakness. These are often the earliest signs of toxicity.",
        aes: "DIGOXIN TOXICITY: Characterized by life-threatening arrhythmias (PVCs, AV block), visual disturbances (blurred vision, yellow/green halos, 'sparkling' lights), and severe bradycardia.",
        inter: [
            {d: "Furosemide / Loop Diuretics", m: "Hypokalemia induced by the diuretic significantly increases the risk of fatal digoxin toxicity.", s: "critical"},
            {d: "Verapamil / Amiodarone", m: "Increases digoxin plasma levels by 50% to 70%; requires 50% dose reduction of digoxin.", s: "high"},
            {d: "Antacids", m: "Decreased digoxin absorption; separate administration by at least 2 hours.", s: "med"}
        ],
        dosage: "Maintenance Oral: 0.125 mg to 0.25 mg once daily. Digitalizing (Loading) dose: 0.75 mg to 1.5 mg divided over 24 hours. IV: 0.1 mg to 0.4 mg.",
        admin: "Check APICAL PULSE for a full 60 seconds prior to every dose. HOLD and notify provider if HR < 60 bpm. Administer IV doses slowly over at least 5 minutes. Therapeutic range: 0.5 - 2.0 ng/mL.",
        nurse: "Monitor serum Potassium, Magnesium, and Calcium levels strictly (Low K+ or Low Mg+ or High Ca+ all increase toxicity risk). Monitor renal function (Creatinine/eGFR). Assess for early signs of toxicity (nausea/anorexia). Antidote: Digibind (Digoxin immune fab)."
    },
    {
        g: "Nitroglycerin", b: "Nitrostat (SL), Nitro-Dur (Patch), Nitrolingual", c: "Nitrate / Potent Vasodilator", cat: "cv",
        m: "Converted to nitric oxide in the vascular smooth muscle, which activates guanylate cyclase, increasing cyclic GMP. This results in potent relaxation of vascular smooth muscle. The primary effect is venous dilation, which significantly reduces venous return to the heart (preload), thereby decreasing left ventricular end-diastolic pressure and myocardial oxygen demand. At higher doses, it also causes arterial dilation, reducing systemic vascular resistance (afterload) and improving collateral coronary blood flow.",
        ind: "Acute relief of Angina Pectoris (sublingual/spray); prophylaxis of Angina (topical/transdermal/SR); and acute management of Hypertensive Crisis or Heart Failure post-MI (IV).",
        con: "Known hypersensitivity to nitrates, severe anemia, increased intracranial pressure (head injury/hemorrhage), and use of PDE-5 inhibitors (Viagra).",
        aec: "THROBBING HEADACHE (very common due to meningeal vasodilation), postural hypotension, facial flushing, and dizziness.",
        aes: "Severe orthostatic hypotension, reflex tachycardia (compensatory), syncope, and methemoglobinemia (rare with high-dose IV).",
        inter: [
            {d: "Sildenafil (Viagra)", m: "FATAL hypotension due to extreme synergistic vasodilation. Absolute contraindication within 24-48 hours.", s: "critical"},
            {d: "Alcohol", m: "Severe hypotension and increased risk of cardiovascular collapse.", s: "high"}
        ],
        dosage: "SL: 0.4 mg tablet or spray. Patch: 0.1 mg/hr to 0.8 mg/hr. IV: 5 mcg/min to 200 mcg/min titration.",
        admin: "Sublingual (SL): Take 1 tab q5min up to 3 doses. If pain persists after the 1st dose, call 911 then take 2nd. Transdermal: Apply to hairless area; must have a 12-hour 'Nitrate-Free' period daily to prevent tolerance.",
        nurse: "Monitor BP and HR before and after administration. Teach patient to store SL tablets in the original dark glass bottle, tightly capped (light/heat sensitive). Assess for 'stinging' sensation under tongue (indicates potency)."
    },
    {
        g: "Isosorbide Dinitrate", b: "Isordil, Dilatrate-SR", c: "Nitrate / Vasodilator", cat: "cv",
        m: "Stimulates cyclic GMP production to cause relaxation of vascular smooth muscle. Similar to nitroglycerin but with a slower onset and longer duration. Predominantly reduces preload through venous dilation and improves coronary oxygen delivery by dilating large epicardial arteries.",
        ind: "Treatment and prevention of Angina Pectoris; management of chronic Heart Failure (when used in combination with hydralazine, specifically in African American patients).",
        con: "Concurrent use of PDE-5 inhibitors, severe hypotension, and closed-angle glaucoma.",
        aec: "Headache (may be severe initially), dizziness, flushing, and GI upset.",
        aes: "Profound hypotension, paradoxical bradycardia, and increased intraocular pressure.",
        inter: [{d: "Antihypertensives", m: "Additive hypotensive effects; risk of syncope.", s: "med"}],
        dosage: "Oral: 5 mg to 40 mg two to three times daily. SR (Sustained Release): 40 mg to 160 mg daily.",
        admin: "Administer orally. Immediate-release should be taken on an empty stomach for faster absorption. Ensure a nitrate-free interval of 10-14 hours per day to avoid pharmacological tolerance.",
        nurse: "Monitor blood pressure frequently during initiation and titration. Teach patient that headaches often decrease with continued use. Advise not to abruptly discontinue."
    },
    {
        g: "Isosorbide Mononitrate", b: "Imdur, ISMO, Monoket", c: "Nitrate / Vasodilator", cat: "cv",
        m: "The active 5-mononitrate metabolite of isosorbide dinitrate. It is 100% bioavailable when taken orally. It acts directly on vascular smooth muscle to cause vasodilation, primarily reducing preload and decreasing myocardial work.",
        ind: "Prophylactic treatment of Angina Pectoris. Note: This drug is NOT used for the relief of an acute anginal attack due to its slow onset.",
        con: "Hypersensitivity to nitrates, shock, and PDE-5 inhibitor use.",
        aec: "Headache (most common), dizziness, nausea, and vomiting.",
        aes: "Severe hypotension, tachycardia, and syncope.",
        inter: [],
        dosage: "Oral: 30 mg to 120 mg once daily (Extended Release) or 20 mg BID (Immediate Release).",
        admin: "Take once daily in the morning upon awakening. Swallow extended-release tablets whole; do not crush or chew. Maintain consistent hydration.",
        nurse: "Check BP before administration. Advise patient to rise slowly from bed. Educate that this medication is for prevention only, not for active chest pain."
    },
    {
        g: "Ranolazine", b: "Ranexa", c: "Antianginal / Sodium Channel Blocker", cat: "cv",
        m: "Inhibits the late inward sodium current (late INa) in myocardial cells. This reduces sodium-dependent calcium overload during ischemia, which improves myocardial relaxation and reduces ventricular wall tension. Unlike nitrates or beta-blockers, it does not significantly reduce heart rate or blood pressure, making it a unique metabolic antianginal agent.",
        ind: "Chronic stable Angina Pectoris. Often used in combination with beta-blockers, CCBs, or nitrates when monotherapy is insufficient.",
        con: "Hepatic cirrhosis (risk of increased drug levels), concurrent use of strong CYP3A inhibitors or inducers.",
        aec: "Dizziness, headache, nausea, and constipation.",
        aes: "QT INTERVAL PROLONGATION (risk of Torsades de Pointes), renal failure in patients with preexisting impairment.",
        inter: [
            {d: "Grapefruit Juice", m: "Inhibits CYP3A4; increases ranolazine levels and QT risk.", s: "high"},
            {d: "Simvastatin", m: "Increases simvastatin levels; limit simvastatin dose.", s: "med"}
        ],
        dosage: "Oral: 500 mg to 1000 mg twice daily. Maximum dose 1000 mg BID.",
        admin: "Take orally twice daily with or without food. Swallow extended-release tablets whole. Do not use for acute anginal attacks.",
        nurse: "Monitor EKG at baseline and periodically to assess the QTc interval. Monitor renal function (BUN/Cr). Advise patient to report any palpitations or fainting."
    }
];
