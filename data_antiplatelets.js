const data_antiplatelets = [
    {
        g: "Aspirin", b: "Ecotrin, Bayer, St. Joseph", c: "Salicylate / Antiplatelet (COX Inhibitor)", cat: "cv",
        m: "Irreversibly inhibits the cyclooxygenase (COX-1) enzyme within platelets. This blocks the conversion of arachidonic acid to thromboxane A2 (TXA2), a potent inducer of platelet aggregation and a powerful vasoconstrictor. Because platelets lack the ability to synthesize new proteins, the inhibitory effect lasts for the entire lifespan of the platelet (approx. 7 to 10 days). In higher doses, it also inhibits COX-2, providing anti-inflammatory and analgesic effects.",
        ind: "Primary and secondary prophylaxis of Myocardial Infarction (MI), maintenance of coronary artery stent patency, management of Acute MI (emergency setting), and secondary prevention of Ischemic Stroke or TIA. Also used for Peripheral Arterial Disease (PAD).",
        con: "Active pathological bleeding (e.g., peptic ulcer, intracranial hemorrhage), children or adolescents with viral infections (risk of Reye's Syndrome), hypersensitivity to NSAIDs, and severe renal or hepatic insufficiency.",
        aec: "Gastrointestinal distress (nausea, dyspepsia), occult blood loss, and increased bruising.",
        aes: "GI BLEEDING and perforation, Tinnitus (early sign of salicylism/toxicity), Anaphylaxis, and Hemorrhagic stroke.",
        inter: [
            {d: "Warfarin/Heparin", m: "Extreme risk of severe hemorrhage due to combined anticoagulant/antiplatelet effects.", s: "critical"},
            {d: "NSAIDs (Ibuprofen)", m: "May interfere with aspirin's cardioprotective effect; take aspirin 2h before NSAID.", s: "high"},
            {d: "Alcohol", m: "Increases risk of gastric mucosal irritation and GI bleeding.", s: "high"}
        ],
        dosage: "Maintenance: 81 mg to 325 mg orally once daily. Acute MI: 325 mg (non-enteric coated) chewed immediately.",
        admin: "Take orally once daily. Administer with food or a full glass of water to minimize gastric irritation. Use enteric-coated (EC) versions for long-term prophylaxis to protect the stomach lining.",
        nurse: "Monitor for signs of GI bleeding (black/tarry stools, coffee-ground emesis). Assess for ringing in the ears (tinnitus). Advise patient to notify surgeons/dentists of aspirin use before procedures."
    },
    {
        g: "Clopidogrel", b: "Plavix", c: "Antiplatelet (ADP Receptor Antagonist)", cat: "cv",
        m: "An oral prodrug that must be metabolized by the liver (specifically CYP2C19) into its active form. It irreversibly blocks the P2Y12 component of adenosine diphosphate (ADP) receptors on the platelet surface. This prevents the activation of the GPIIb/IIIa receptor complex, thereby inhibiting platelet aggregation for the life of the platelet.",
        ind: "Reduction of atherosclerotic events (MI, stroke, vascular death) in patients with recent MI, recent stroke, or established Peripheral Arterial Disease (PAD). Used in Acute Coronary Syndrome (ACS) and post-stent placement.",
        con: "Active pathological bleeding (peptic ulcer or intracranial hemorrhage). Use with caution in patients with impaired hepatic function.",
        aec: "Upper respiratory tract infection, headache, flu-like symptoms, and dyspepsia.",
        aes: "Major bleeding, Thrombotic Thrombocytopenic Purpura (TTP - medical emergency), and severe neutropenia (rare).",
        inter: [
            {d: "Omeprazole (Prilosec)", m: "Inhibits CYP2C19; significantly reduces the activation and efficacy of clopidogrel.", s: "high"},
            {d: "NSAIDs/Warfarin", m: "Additive risk of severe bleeding and hemorrhage.", s: "high"}
        ],
        dosage: "Oral: 75 mg once daily. A 300 mg to 600 mg loading dose is often used in ACS or before PCI.",
        admin: "Take once daily without regard to food. Adherence is critical post-stent to prevent stent thrombosis.",
        nurse: "Monitor platelet counts and hemoglobin/hematocrit. Assess for unusual bruising or bleeding. Instruct patient to discontinue 5 to 7 days before elective surgery."
    },
    {
        g: "Ticagrelor", b: "Brilinta", c: "Antiplatelet (ADP Receptor Antagonist)", cat: "cv",
        m: "Selectively and reversibly interacts with the platelet P2Y12 ADP receptor to prevent signal transduction and platelet aggregation. Unlike clopidogrel, it is NOT a prodrug and does not require hepatic activation, leading to a faster onset and more consistent platelet inhibition.",
        ind: "Reduction of the rate of CV death, MI, and stroke in patients with ACS or a history of MI.",
        con: "History of intracranial hemorrhage, active pathological bleeding, and severe hepatic impairment.",
        aec: "Dyspnea (shortness of breath - unique side effect), headache, and cough.",
        aes: "Major hemorrhage, bradyarrhythmias, and elevated serum uric acid.",
        inter: [{d: "Aspirin", m: "Doses > 100mg/day decrease ticagrelor efficacy; use 81mg maintenance.", s: "high"}],
        dosage: "Oral: 90 mg twice daily. Loading dose of 180 mg often used.",
        admin: "Must be taken TWICE DAILY. Administer with low-dose aspirin (81mg). Can be taken with or without food.",
        nurse: "Monitor for dyspnea (usually transient). Monitor for signs of bleeding. Check uric acid levels in patients with a history of gout."
    },
    {
        g: "Abciximab", b: "ReoPro", c: "Antiplatelet (GPIIb/IIIa Receptor Antagonist)", cat: "cv",
        m: "The Fab fragment of a chimeric human-murine monoclonal antibody. It binds to the glycoprotein IIb/IIIa receptors on the surface of activated platelets, providing a steric hindrance that prevents the binding of fibrinogen and von Willebrand factor. This is the 'final common pathway' of platelet aggregation, making this class the most potent antiplatelet agents available.",
        ind: "Adjunct to percutaneous coronary intervention (PCI) for the prevention of cardiac ischemic complications; used in patients with unstable angina not responding to conventional therapy.",
        con: "Active internal bleeding, recent GI/GU bleeding (6 weeks), history of stroke (2 years), recent major surgery/trauma (6 weeks), severe uncontrolled HTN, and thrombocytopenia (< 100,000 cells/mm3).",
        aec: "Nausea, vomiting, hypotension, and back pain.",
        aes: "MAJOR HEMORRHAGE (especially at the arterial access site), severe thrombocytopenia, and anaphylaxis.",
        inter: [{d: "Heparin/Anticoagulants", m: "Significant increase in bleeding risk; requires careful titration.", s: "high"}],
        dosage: "IV: 0.25 mg/kg bolus, followed by 0.125 mcg/kg/min (Max 10 mcg/min) continuous infusion for 12-24 hours.",
        admin: "IV ONLY. Administer via a dedicated line with an in-line low protein-binding filter. Do not shake the vial.",
        nurse: "Monitor the catheter insertion site (groin) for hematoma or bleeding. Perform frequent neuro checks. Monitor platelets and PT/aPTT. Maintain bedrest."
    },
    {
        g: "Eptifibatide", b: "Integrilin", c: "Antiplatelet (GPIIb/IIIa Receptor Antagonist)", cat: "cv",
        m: "A cyclic peptide that reversibly inhibits platelet aggregation by preventing the binding of fibrinogen to the GP IIb/IIIa receptor. It has a shorter duration of action and faster recovery of platelet function (4-6 hours) compared to abciximab.",
        ind: "Treatment of ACS (unstable angina/NSTEMI) and patients undergoing PCI.",
        con: "Active bleed, dialysis-dependent renal failure, severe HTN.",
        aec: "Bleeding (especially at access site), hypotension.",
        aes: "Major hemorrhage, severe thrombocytopenia (immune-mediated).",
        inter: [],
        dosage: "IV: 180 mcg/kg bolus, followed by 2 mcg/kg/min infusion. Adjust dose in renal impairment.",
        admin: "IV ONLY. Requires continuous infusion pump. Protect from light until used.",
        nurse: "Monitor renal function (CrCl) baseline and during therapy as clearance is primarily renal. Monitor for signs of bleeding at the femoral access site, gums, and urine. Perform serial platelet counts and hemoglobin levels to detect occult hemorrhage or immune-mediated thrombocytopenia. Ensure strict bedrest while the arterial sheath is in place. Verify that the patient is NOT receiving other potent antiplatelets concurrently unless specified."
    },
    {
        g: "Dipyridamole", b: "Persantine", c: "Antiplatelet / Vasodilator", cat: "cv",
        m: "Inhibits the activity of adenosine deaminase and phosphodiesterase, which causes an accumulation of adenosine and cyclic AMP. This inhibits platelet aggregation and causes coronary vasodilation. Usually combined with aspirin or warfarin.",
        ind: "Prophylaxis of thromboembolism after cardiac valve replacement (with warfarin); secondary prevention of stroke (with aspirin).",
        con: "Hypersensitivity.",
        aec: "Dizziness, abdominal distress, headache, and skin rash.",
        aes: "Profound hypotension, paradoxical worsening of angina, and hepatic failure (rare).",
        inter: [{d: "Adenosine", m: "Potentiates the effects of adenosine; use with extreme caution.", s: "high"}],
        dosage: "Oral: 75 mg to 100 mg four times daily.",
        admin: "Administer orally. For optimal absorption, take on an empty stomach 1 hour before or 2 hours after meals with a full glass of water.",
        nurse: "Monitor blood pressure and pulse baseline and during initiation, as the drug has vasodilatory properties. Assess for signs of GI bleeding when used concurrently with anticoagulants (e.g., black/tarry stools). Educate the patient to rise slowly from a sitting or lying position to prevent orthostatic dizziness. Instruct patient to take the medication with a full glass of water 1 hour before meals for maximum efficacy."
    },
    {
        g: "Cilostazol", b: "Pletal", c: "Antiplatelet / Phosphodiesterase-3 Inhibitor", cat: "cv",
        m: "Selectively inhibits phosphodiesterase type 3 (PDE3), increasing cyclic AMP in platelets and blood vessels. This results in reversible inhibition of platelet aggregation, vasodilation, and inhibition of vascular smooth muscle cell proliferation.",
        ind: "Reduction of symptoms of Intermittent Claudication in patients with Peripheral Arterial Disease (PAD) to increase walking distance.",
        con: "HEART FAILURE of any severity (Black Box: PDE3 inhibitors decrease survival in HF patients).",
        aec: "Headache (most common), diarrhea, palpitations, and dizziness.",
        aes: "Tachyarrhythmias, severe hypotension, and blood dyscrasias.",
        inter: [{d: "Grapefruit Juice", m: "Increases drug levels and risk of side effects.", s: "high"}],
        dosage: "Oral: 100 mg twice daily.",
        admin: "Take on an EMPTY STOMACH at least 30 minutes before or 2 hours after breakfast and dinner.",
        nurse: "Assess for signs of Heart Failure (edema, SOB) - drug is contraindicated. Evaluate walking distance and leg pain improvements (may take 2-12 weeks)."
    }
];
