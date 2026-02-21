from data_manager import DataManager
from study_ingestor import Scenario

def generate_missions():
    dm = DataManager()
    
    # Module: comorbid_missions_gen
    # We will add these to the 'comorbid_missions_gen' module or create a 'critical_care_gen' module.
    # Let's add to 'comorbid_missions_gen' as it fits "Complex Care".
    module_id = "comorbid_missions_gen"

    missions = [
        # Mission 36: Sepsis Resuscitation
        {
            "id": "M-036",
            "numerical_id": 36,
            "type": "mission",
            "title": "The Golden Hour: Sepsis",
            "category": "Critical Care / Sepsis",
            "difficulty": "Critical",
            "patient_profile": {
                "demographics": {
                    "name": "Florence Nightinghost",
                    "age": 88,
                    "gender": "Female",
                    "mrn": "3636-FN",
                    "dob": "05/12/1938",
                    "weight": "50 kg",
                    "height": "160 cm",
                    "allergies": "Penicillin"
                },
                "chief_complaint": "Confusion and shaking chills.",
                "hpi": "Ms. Nightinghost comes from a SNF with a Foley catheter. She is obtunded and febrile. Staff report decreased urine output for 24 hours.",
                "pmh": "Dementia, Bedbound, History of UTIs.",
                "ros": {
                    "gen": "Temp 103.5 F (39.7 C). BP 80/40. HR 125.",
                    "resp": "RR 28. O2 Sat 92% RA.",
                    "skin": "Mottled extremities."
                }
            },
            "exhibits": [
                {
                    "title": "Lactate",
                    "type": "text",
                    "content": "5.5 mmol/L (Critical High)"
                },
                {
                    "title": "Urinalysis",
                    "type": "text",
                    "content": "Positive for Nitrites, Leukocyte Esterase, and WBCs (TNTC)."
                }
            ],
            "steps": [
                {
                    "type": "matrix",
                    "prompt": "Prioritize the Sepsis Core Measure (1-Hour Bundle).",
                    "rows": [
                        "Measure Lactate Level",
                        "Obtain Blood Cultures",
                        "Administer Broad Spectrum Antibiotics",
                        "Administer 30ml/kg Crystalloid Bolus",
                        "Start Vasopressors"
                    ],
                    "columns": ["First 15 Mins", "Within 1 Hour", "Only if Fluid Resuscitation Fails"],
                    "answer": {
                        "Measure Lactate Level": "First 15 Mins",
                        "Obtain Blood Cultures": "First 15 Mins",
                        "Administer Broad Spectrum Antibiotics": "Within 1 Hour",
                        "Administer 30ml/kg Crystalloid Bolus": "Within 1 Hour",
                        "Start Vasopressors": "Only if Fluid Resuscitation Fails"
                    },
                    "rationale": "Lactate and Cultures MUST come first. Antibiotics cannot be given until cultures are drawn (unless delay > 45 mins). Fluids are given concurrently. Pressors are only for refractory hypotension."
                },
                {
                    "type": "extended_sata",
                    "prompt": "The patient weighs 50kg. The provider orders 30ml/kg Normal Saline. Calculate and implement.",
                    "options": [
                        "Total Volume = 1500 mL",
                        "Total Volume = 3000 mL",
                        "Set pump rate to 999 ml/hr (Wide Open)",
                        "Run over 24 hours",
                        "Monitor for crackles (Pulmonary Edema)",
                        "Warm the fluids if possible"
                    ],
                    "answer": ["Total Volume = 1500 mL", "Set pump rate to 999 ml/hr (Wide Open)", "Monitor for crackles (Pulmonary Edema)", "Warm the fluids if possible"],
                    "rationale": "50kg * 30ml = 1500ml. This is a BOLUS, meaning give it FAST (999 rate). Warming prevents hypothermia. Lung checks are vital in elderly patients to prevent overload."
                },
                {
                    "type": "bowtie",
                    "prompt": "After 1500ml fluid, BP is still 85/50. Lactate is 6.0. Prioritize.",
                    "center_condition": {
                        "options": ["Septic Shock", "Cardiogenic Shock", "Anaphylaxis", "Fluid Overload"],
                        "answer": "Septic Shock"
                    },
                    "left_actions": {
                        "options": ["Start Norepinephrine (Levophed)", "Give Albumin", "Give Lasix", "Start Dopamine"],
                        "answer": ["Start Norepinephrine (Levophed)"]
                    },
                    "right_monitor": {
                        "options": ["MAP > 65", "CVP", "Urine Output", "Pupils"],
                        "answer": ["MAP > 65", "Urine Output"]
                    },
                    "rationale": "Fluid refractory hypotension = Septic Shock. The drug of choice is Norepinephrine (Levophed). The goal is Mean Arterial Pressure (MAP) > 65 to perfuse organs (Kidneys/Brain)."
                }
            ]
        },
        # Mission 37: ARDS
        {
            "id": "M-037",
            "numerical_id": 37,
            "type": "mission",
            "title": "White Out: ARDS",
            "category": "Critical Care / Respiratory",
            "difficulty": "Critical",
            "patient_profile": {
                "demographics": {
                    "name": "Bane (Mask guy)",
                    "age": 45,
                    "gender": "Male",
                    "mrn": "3737-BB",
                    "dob": "07/19/1981",
                    "weight": "120 kg",
                    "height": "190 cm",
                    "allergies": "NKDA"
                },
                "chief_complaint": "Can't breathe.",
                "hpi": "Admitted for severe Pancreatitis. Now developing worsening hypoxia despite 100% BiPAP.",
                "pmh": "Alcohol Use Disorder, Pancreatitis.",
                "ros": {
                    "resp": "RR 40. SpO2 82% on 100% FiO2.",
                    "cv": "Tachycardic."
                }
            },
            "exhibits": [
                {
                    "title": "Chest X-Ray",
                    "type": "text",
                    "content": "Bilateral diffuse fluffy infiltrates ('White Out'). No cardiomegaly."
                },
                {
                    "title": "ABG",
                    "type": "text",
                    "content": "ph 7.20, pO2 55, pCO2 60, HCO3 22. (Combined Acidosis with Hypoxia)."
                }
            ],
            "steps": [
                {
                    "type": "matrix",
                    "prompt": "Diagnose ARDS based on the Berlin Criteria.",
                    "rows": [
                        "Timing: Within 1 week of insult",
                        "Chest Imaging: Bilateral Opacities",
                        "Edema Origin: Not fully explained by Heart Failure",
                        "Oxygenation: PaO2/FiO2 ratio < 300"
                    ],
                    "columns": ["Met", "Not Met"],
                    "answer": {
                        "Timing: Within 1 week of insult": "Met",
                        "Chest Imaging: Bilateral Opacities": "Met",
                        "Edema Origin: Not fully explained by Heart Failure": "Met",
                        "Oxygenation: PaO2/FiO2 ratio < 300": "Met"
                    },
                    "rationale": "Pancreatitis triggers systemic inflammation -> Leaky lung capillaries -> Non-cardiogenic pulmonary edema (ARDS). P/F ratio = 55 / 1.0 = 55 (Severe ARDS < 100)."
                },
                {
                    "type": "extended_sata",
                    "prompt": "The patient is intubated. Which ventilator strategies protect the lung? Select all that apply.",
                    "options": [
                        "Low Tidal Volume (6ml/kg PBW)",
                        "High Tidal Volume (10-12ml/kg)",
                        "High PEEP (Positive End Expiratory Pressure)",
                        "Zero PEEP",
                        "Permissive Hypercapnia (Allowing high CO2)",
                        "Maintain Plateau Pressure < 30 cmH2O"
                    ],
                    "answer": ["Low Tidal Volume (6ml/kg PBW)", "High PEEP (Positive End Expiratory Pressure)", "Permissive Hypercapnia (Allowing high CO2)", "Maintain Plateau Pressure < 30 cmH2O"],
                    "rationale": "Baby Lungs concept: Use Low Volumes to prevent volutrauma. Use High PEEP to recruit alveoli. Allow CO2 to rise (as long as pH > 7.2) to spare the lungs. Keep pressure low."
                },
                {
                    "type": "bowtie",
                    "prompt": "O2 Sat remains 85% despite optimal vent settings. Prioritize the rescue therapy.",
                    "center_condition": {
                        "options": ["Refractory Hypoxemia", "Pneumothorax", "Ventilator Disconnect", "Sedation Failure"],
                        "answer": "Refractory Hypoxemia"
                    },
                    "left_actions": {
                        "options": ["Prone Positioning (Face Down)", "Administer Neuromuscular Blockade (Paralysis)", "Start Nitric Oxide", "ECMO Consult", "Suction"],
                        "answer": ["Prone Positioning (Face Down)", "Administer Neuromuscular Blockade (Paralysis)"]
                    },
                    "right_monitor": {
                        "options": ["P/F Ratio", "Train of Four (Twitch monitor)", "Facial Pressure Ulcers", "Bowel Sounds"],
                        "answer": ["P/F Ratio", "Train of Four (Twitch monitor)"]
                    },
                    "rationale": "Proning recruits the posterior lung fields (where most alveoli are). Paralysis (Nimbex) reduces oxygen consumption by muscles. Train of Four ensures they are paralyzed enough but not overdosed."
                }
            ]
        },
        # Mission 38: Pediatric DKA / Cerebral Edema
        {
            "id": "M-038",
            "numerical_id": 38,
            "type": "mission",
            "title": "The Headache: Pediatric DKA",
            "category": "Critical Care / Peds",
            "difficulty": "Critical",
            "patient_profile": {
                "demographics": {
                    "name": "Eleven (Stranger Things)",
                    "age": 12,
                    "gender": "Female",
                    "mrn": "3838-EL",
                    "dob": "11/11/2014",
                    "weight": "40 kg",
                    "height": "150 cm",
                    "allergies": "Waffles"
                },
                "chief_complaint": "Vomiting and breathing funny.",
                "hpi": "Newly diagnosed T1DM. Parents report she has been drinking water from the toilet bowl (polydipsia). Now drowsy.",
                "pmh": "None.",
                "ros": {
                    "resp": "Kussmaul respirations (Deep/Fast). Fruity odor.",
                    "neuro": "GCS 10 (Confused)."
                }
            },
            "exhibits": [
                {
                    "title": "Labs",
                    "type": "text",
                    "content": "Glucose: 700. pH: 7.05. HCO3: 8. Anion Gap: 24."
                }
            ],
            "steps": [
                {
                    "type": "matrix",
                    "prompt": "Fluid management in Pediatric DKA is controversial. Weigh the risks.",
                    "rows": [
                        "Rapid bolus of 40ml/kg",
                        "Slow correction over 48 hours",
                        "Risk of Cerebral Edema",
                        "Risk of Shock"
                    ],
                    "columns": ["Too Fast (Dangerous)", "Standard Care (Safe)"],
                    "answer": {
                        "Rapid bolus of 40ml/kg": "Too Fast (Dangerous)",
                        "Slow correction over 48 hours": "Standard Care (Safe)",
                        "Risk of Cerebral Edema": "Too Fast (Dangerous)",
                        "Risk of Shock": "Standard Care (Safe)"
                    },
                    "rationale": "In kids, dropping osmolarity too fast creates a gradient where fluid rushes into the brain -> Cerebral Edema (Fatal). We give moderate fluids (10-20ml/kg) and correct slowly."
                },
                {
                    "type": "extended_sata",
                    "prompt": "Which signs indicate developing Cerebral Edema? Select all that apply.",
                    "options": [
                        "Sudden severe headache",
                        "Bradypnea (respiratory slowing)",
                        "Hypertension with Bradycardia (Cushing's Triad)",
                        "Improved mental status",
                        "Incontinence",
                        "Fixed dilated pupils"
                    ],
                    "answer": ["Sudden severe headache", "Bradypnea (respiratory slowing)", "Hypertension with Bradycardia (Cushing's Triad)", "Incontinence", "Fixed dilated pupils"],
                    "rationale": "Any neurological deterioration in a DKA kid is Cerebral Edema until proven otherwise. Cushing's Triad is a late sign of herniation."
                },
                {
                    "type": "bowtie",
                    "prompt": "Eleven grabs her head, screams, and becomes unresponsive. HR 50. BP 160/90. Prioritize.",
                    "center_condition": {
                        "options": ["Cerebral Herniation", "Hypoglycemia", "Stroke", "Seizure"],
                        "answer": "Cerebral Herniation"
                    },
                    "left_actions": {
                        "options": ["Mannitol IV Push", "Hypertonic Saline (3%)", "Lay flat", "Elevate Head of Bed", "Decrease IV Rate"],
                        "answer": ["Mannitol IV Push", "Elevate Head of Bed"]
                    },
                    "right_monitor": {
                        "options": ["Pupillary Response", "GCS", "Urine Output", "Serum Na"],
                        "answer": ["Pupillary Response", "GCS"]
                    },
                    "rationale": "Cushing's Triad confirmed. The brain is herniating. We must shrink the brain NOW. Mannitol or 3% Saline draws water out. Elevate head to drain venous blood. Reduce maintenance fluids."
                }
            ]
        },
        # Mission 39: Hypertensive Crisis
        {
            "id": "M-039",
            "numerical_id": 39,
            "type": "mission",
            "title": "The Pressure Cooker: HTN Crisis",
            "category": "Critical Care / CV",
            "difficulty": "Advanced",
            "patient_profile": {
                "demographics": {
                    "name": "Pressure Pete",
                    "age": 50,
                    "gender": "Male",
                    "mrn": "3939-PP",
                    "dob": "10/10/1976",
                    "weight": "90 kg",
                    "height": "175 cm",
                    "allergies": "NKDA"
                },
                "chief_complaint": "Worst headache of my life and blurred vision.",
                "hpi": "Ran out of BP meds 3 days ago. Now presents with confusion and chest pain.",
                "pmh": "Resistant Hypertension, CKD.",
                "ros": {
                    "cv": "BP 240/140.",
                    "neuro": "Papilledema (swollen optic disc) on exam.",
                    "mi": "ST depression in V5."
                }
            },
            "exhibits": [
                {
                    "title": "Meds Available",
                    "type": "text",
                    "content": "Nitroprusside, Labetalol, Nicardipine, Hydralazine."
                }
            ],
            "steps": [
                {
                    "type": "matrix",
                    "prompt": "Distinguish Hypertensive Urgency vs Emergency.",
                    "rows": [
                        "BP > 180/120",
                        "Evidence of End Organ Damage (Heart, Brain, Kidney)",
                        "Requires IV Drip Admission",
                        "Treat with Oral agents slowly",
                        "Headache alone"
                    ],
                    "columns": ["Urgency", "Emergency", "Both"],
                    "answer": {
                        "BP > 180/120": "Both",
                        "Evidence of End Organ Damage (Heart, Brain, Kidney)": "Emergency",
                        "Requires IV Drip Admission": "Emergency",
                        "Treat with Oral agents slowly": "Urgency",
                        "Headache alone": "Urgency"
                    },
                    "rationale": "The number (180/120) is the same. The difference is Organ Damage. Pete has chest pain (Heart) and confusion (Brain), so it is EMERGENCY."
                },
                {
                    "type": "extended_sata",
                    "prompt": "We start a Nitroprusside drip. What are the rules? Select all that apply.",
                    "options": [
                        "Protect the IV bag from light (Opaque cover)",
                        "Monitor Thiocyanate/Cyanide levels if used > 24hrs",
                        "Lower BP to 120/80 within 1 hour",
                        "Lower BP by max 25% in first hour",
                        "Monitor continuous arterial line BP"
                    ],
                    "answer": ["Protect the IV bag from light (Opaque cover)", "Monitor Thiocyanate/Cyanide levels if used > 24hrs", "Lower BP by max 25% in first hour", "Monitor continuous arterial line BP"],
                    "rationale": "Nitroprusside turns into CYANIDE in the light/body. Never drop BP too fast (stroke risk from hypoperfusion) - max 25% drop initially. Art line is mandatory for potent vasodilators."
                },
                {
                    "type": "bowtie",
                    "prompt": "After 24 hours, Pete becomes confused again and smells like 'bitter almonds'. Lactic acid is rising. Prioritize.",
                    "center_condition": {
                        "options": ["Cyanide Toxicity", "Stroke", "Hypotension", "Renal Failure"],
                        "answer": "Cyanide Toxicity"
                    },
                    "left_actions": {
                        "options": ["Stop Nitroprusside", "Administer Sodium Thiosulfate", "Start dialysis", "Increase oxygen"],
                        "answer": ["Stop Nitroprusside", "Administer Sodium Thiosulfate"]
                    },
                    "right_monitor": {
                        "options": ["Thiocyanate Level", "Lactate", "Pupils", "BP"],
                        "answer": ["Thiocyanate Level", "Lactate"]
                    },
                    "rationale": "Bitter almonds + Acidosis on Nitroprusside = Cyanide Poisoning. Stop the drug. Give Thiosulfate (antidote)."
                }
            ]
        },
        # Mission 40: Code Blue
        {
            "id": "M-040",
            "numerical_id": 40,
            "type": "mission",
            "title": "Flatline: Code Blue",
            "category": "Critical Care / ACLS",
            "difficulty": "Critical",
            "patient_profile": {
                "demographics": {
                    "name": "John Doe",
                    "age": 60,
                    "gender": "Male",
                    "mrn": "4040-JD",
                    "dob": "01/01/1966",
                    "weight": "80 kg",
                    "height": "180 cm",
                    "allergies": "Unknown"
                },
                "chief_complaint": "Unresponsive.",
                "hpi": "Found down in bathroom.",
                "pmh": "Unknown.",
                "ros": {
                    "gen": "Pulseless. Apneic."
                }
            },
            "exhibits": [
                {
                    "title": "Monitor",
                    "type": "text",
                    "content": "Shows Ventricular Fibrillation (V-Fib)."
                }
            ],
            "steps": [
                {
                    "type": "matrix",
                    "prompt": "Review the ACLS Algorithms. Match the treatment to the rhythm.",
                    "rows": [
                        "Ventricular Fibrillation (V-Fib)",
                        "Ventricular Tachycardia (Pulseless)",
                        "Asystole (Flatline)",
                        "PEA (Rhythm but no pulse)"
                    ],
                    "columns": ["Shockable", "Not Shockable"],
                    "answer": {
                        "Ventricular Fibrillation (V-Fib)": "Shockable",
                        "Ventricular Tachycardia (Pulseless)": "Shockable",
                        "Asystole (Flatline)": "Not Shockable",
                        "PEA (Rhythm but no pulse)": "Not Shockable"
                    },
                    "rationale": "If they are dead (pulseless), check if the heart is shaking (Fib/Tach). If yes, SHOCK IT. If it's silent (Asystole/PEA), shocking does nothing. Just CPR + Epi."
                },
                {
                    "type": "extended_sata",
                    "prompt": "You are running the code. Which actions are High Quality CPR? Select all that apply.",
                    "options": [
                        "Rate 100-120 compressions/min",
                        "Depth at least 2 inches (5cm)",
                        "Allow full chest recoil",
                        "Minimize interruptions (< 10 seconds)",
                        "Give breaths every 6 seconds (if advanced airway)",
                        "Switch compressor every 5 cycles (2 mins)",
                        "Hyperventilate to blow off CO2"
                    ],
                    "answer": ["Rate 100-120 compressions/min", "Depth at least 2 inches (5cm)", "Allow full chest recoil", "Minimize interruptions (< 10 seconds)", "Give breaths every 6 seconds (if advanced airway)", "Switch compressor every 5 cycles (2 mins)"],
                    "rationale": "Hyperventilation kills (increases intrathoracic pressure, decreases venous return). Everything else is standard ACLS."
                },
                {
                    "type": "bowtie",
                    "prompt": "We get ROSC (Return of Spontaneous Circulation). Patient follows commands? NO. Prioritize post-arrest care.",
                    "center_condition": {
                        "options": ["Targeted Temperature Management (TTM)", "Dialysis", "Immediate Extubation", "Family meeting"],
                        "answer": "Targeted Temperature Management (TTM)"
                    },
                    "left_actions": {
                        "options": ["Cool to 32-36 C", "Maintain Normothermia", "Sedate and Paralyze (if shivering)", "Obtain 12-Lead ECG"],
                        "answer": ["Cool to 32-36 C", "Sedate and Paralyze (if shivering)"]
                    },
                    "right_monitor": {
                        "options": ["Core Temperature (Esophageal)", "EEG", "Blood Glucose", "Urine Output"],
                        "answer": ["Core Temperature (Esophageal)", "EEG"]
                    },
                    "rationale": "If the patient doesn't wake up after ROSC, we cool them (Therapeutic Hypothermia) to preserve brain function. Shivering fights the cooling and must be stopped. 12-Lead is also crucial to look for STEMI."
                }
            ]
        }
    ]

    for m in missions:
        try:
            sc = Scenario(**m)
            dm.add_scenario_to_module(module_id, sc, overwrite=True)
        except Exception as e:
            print(f"Failed to add mission {m['id']}: {e}")

if __name__ == "__main__":
    generate_missions()
