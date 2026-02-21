# Acute Respiratory Scenarios - Mission 1 Gold Standard Format

acute_resp_scenarios = [
    # MISSION 41: ACUTE PNEUMONIA
    {
        'id': 'M-041',
        'numerical_id': 41,
        'type': 'mission',
        'title': 'The Fever: Community-Acquired Pneumonia',
        'category': 'Acute Respiratory / Pneumonia',
        'difficulty': 'Advanced',
        'patient_profile': {
            'demographics': {
                'name': 'Margaret Chen',
                'age': 72,
                'gender': 'Female',
                'mrn': '4141-MC',
                'dob': '03/15/1952',
                'weight': '145 lbs',
                'height': '5\'2"',
                'allergies': 'Penicillin (rash)'
            },
            'chief_complaint': 'Fever and productive cough for 3 days.',
            'hpi': '72-year-old female presents with 3-day history of fever, chills, and productive cough with yellow sputum. Reports pleuritic chest pain on right side. No recent travel or sick contacts. History of COPD on home oxygen.',
            'pmh': 'COPD (on 2L home O2), Hypertension, Osteoarthritis.',
            'ros': {
                'gen': 'Temp 101.8°F, HR 102, RR 24, BP 148/88, O2 Sat 91% on RA',
                'resp': 'Productive cough with yellow sputum, pleuritic chest pain right side',
                'cv': 'No chest pain at rest',
                'neuro': 'Alert and oriented, no confusion'
            }
        },
        'exhibits': [
            {
                'title': 'Chest X-Ray',
                'type': 'text',
                'content': 'Right lower lobe infiltrate with air bronchograms. No pleural effusion.'
            },
            {
                'title': 'Sputum Culture',
                'type': 'text',
                'content': 'Pending - Gram stain shows gram-positive cocci in pairs.'
            },
            {
                'title': 'Labs',
                'type': 'text',
                'content': 'WBC 18.2 (neutrophilic predominance), CRP 156 mg/L, Procalcitonin 0.8 ng/mL'
            }
        ],
        'steps': [
            # SATA Question
            {
                'type': 'extended_sata',
                'prompt': 'Mrs. Chen is diagnosed with community-acquired pneumonia. Which nursing interventions are priority? (Select all that apply)',
                'options': [
                    'Administer prescribed antibiotics within 1 hour',
                    'Monitor respiratory status every 2 hours',
                    'Encourage deep breathing and coughing',
                    'Maintain semi-Fowler\'s position',
                    'Provide adequate hydration',
                    'Assess for antibiotic side effects',
                    'Monitor oxygen saturation continuously'
                ],
                'answer': [0, 1, 2, 3, 4, 5, 6],
                'rationale': 'All interventions are essential for pneumonia management including timely antibiotics, respiratory monitoring, mobilization of secretions, positioning, hydration, side effect monitoring, and oxygenation assessment.'
            },
            # Matrix Question
            {
                'type': 'matrix',
                'prompt': 'Match the pneumonia classification with appropriate treatment duration:',
                'rows': [
                    {'text': 'Mild CAP (CURB-65 score 0-1)'},
                    {'text': 'Moderate CAP (CURB-65 score 2)'},
                    {'text': 'Severe CAP (CURB-65 score 3-5)'},
                    {'text': 'Healthcare-associated pneumonia'}
                ],
                'columns': ['5-7 days', '7-10 days', '10-14 days', '14-21 days'],
                'answer': {
                    'Mild CAP (CURB-65 score 0-1)': '5-7 days',
                    'Moderate CAP (CURB-65 score 2)': '7-10 days',
                    'Severe CAP (CURB-65 score 3-5)': '10-14 days',
                    'Healthcare-associated pneumonia': '14-21 days'
                },
                'rationale': 'Treatment duration varies by pneumonia severity and risk factors. Mild cases need shorter courses, severe or healthcare-associated cases require longer treatment.'
            },
            # Bowtie Question
            {
                'type': 'bowtie',
                'prompt': 'Mrs. Chen develops increased shortness of breath and O2 sat drops to 85%. Prioritize the acute respiratory distress intervention.',
                'center_condition': {
                    'options': ['Respiratory Failure', 'Pneumothorax', 'Pulmonary Edema', 'Bronchospasm'],
                    'answer': 'Respiratory Failure'
                },
                'left_actions': {
                    'options': ['Apply oxygen via non-rebreather mask', 'Prepare for intubation', 'Administer bronchodilators', 'Start IV fluids', 'Call rapid response'],
                    'answer': ['Apply oxygen via non-rebreather mask', 'Prepare for intubation', 'Call rapid response']
                },
                'right_monitor': {
                    'options': ['ABG analysis', 'Chest X-ray', 'Cardiac enzymes', 'Respiratory rate and pattern', 'Level of consciousness'],
                    'answer': ['ABG analysis', 'Respiratory rate and pattern', 'Level of consciousness']
                },
                'rationale': 'Acute respiratory failure requires immediate oxygenation, preparation for advanced airway management, and continuous monitoring of respiratory status and mental status changes.'
            }
        ]
    },

    # MISSION 42: ACUTE BRONCHITIS
    {
        'id': 'M-042',
        'numerical_id': 42,
        'type': 'mission',
        'title': 'The Persistent Cough: Acute Bronchitis',
        'category': 'Acute Respiratory / Bronchitis',
        'difficulty': 'Intermediate',
        'patient_profile': {
            'demographics': {
                'name': 'Robert Martinez',
                'age': 45,
                'gender': 'Male',
                'mrn': '4284-RM',
                'dob': '07/22/1979',
                'weight': '180 lbs',
                'height': '5\'10"',
                'allergies': 'None'
            },
            'chief_complaint': 'Persistent cough and chest congestion for 5 days.',
            'hpi': '45-year-old male presents with 5-day history of productive cough with clear-to-white sputum, mild chest tightness, and low-grade fever. Symptoms began after upper respiratory infection. Smokes 1 pack/day for 25 years. No shortness of breath at rest.',
            'pmh': 'Smoking history, Seasonal allergies.',
            'ros': {
                'gen': 'Temp 99.2°F, HR 78, RR 18, BP 132/84, O2 Sat 97% on RA',
                'resp': 'Productive cough with clear sputum, mild wheezing, no hemoptysis',
                'cardio': 'Regular rate and rhythm, no murmurs',
                'neuro': 'Alert and oriented, no confusion',
                'gi': 'No nausea or abdominal pain',
                'gu': 'No urinary symptoms'
            }
        },
        'exhibits': [
            {
                'title': 'Chest X-Ray',
                'type': 'text',
                'content': 'Clear lung fields. No infiltrates or effusions. Normal cardiac silhouette.'
            },
            {
                'title': 'Spirometry',
                'type': 'text',
                'content': 'FEV1 85% predicted, FVC normal. Mild obstructive pattern noted.'
            },
            {
                'title': 'Labs',
                'type': 'text',
                'content': 'WBC 9.8, CRP 12 mg/L (mild elevation)'
            }
        ],
        'steps': [
            {
                'type': 'extended_sata',
                'prompt': 'Mr. Martinez is diagnosed with acute bronchitis. Which interventions are appropriate? (Select all that apply)',
                'options': [
                    'Prescribe antibiotics immediately',
                    'Recommend smoking cessation counseling',
                    'Encourage hydration and humidified air',
                    'Teach effective coughing techniques',
                    'Schedule follow-up in 2 weeks if symptoms persist',
                    'Administer bronchodilators as prescribed',
                    'Monitor for signs of pneumonia development',
                    'Prescribe codeine cough syrup',
                    'Advise complete bed rest for 1 week'
                ],
                'answer': [1, 2, 3, 4, 5, 6],
                'rationale': 'Acute bronchitis is typically viral and self-limiting. Key interventions include smoking cessation, hydration, coughing techniques, and monitoring for complications. Antibiotics are not routinely prescribed, and complete bed rest/codeine are not recommended.'
            },
            {
                'type': 'matrix',
                'prompt': 'Match the bronchitis symptom with appropriate nursing intervention:',
                'rows': [
                    {'text': 'Productive cough with thick sputum'},
                    {'text': 'Chest tightness and wheezing'},
                    {'text': 'Fever and malaise'},
                    {'text': 'Smoking history'}
                ],
                'columns': [
                    'Antibiotic therapy',
                    'Hydration and humidification',
                    'Bronchodilator administration',
                    'Smoking cessation counseling',
                    'Antipyretic medication',
                    'Chest physiotherapy'
                ],
                'answer': {
                    'Productive cough with thick sputum': 'Hydration and humidification',
                    'Chest tightness and wheezing': 'Bronchodilator administration',
                    'Fever and malaise': 'Antipyretic medication',
                    'Smoking history': 'Smoking cessation counseling'
                },
                'rationale': 'Each bronchitis symptom requires specific nursing interventions: hydration for sputum clearance, bronchodilators for wheezing, antipyretics for fever, and smoking cessation counseling.'
            },
            {
                'type': 'bowtie',
                'prompt': 'Mr. Martinez develops worsening shortness of breath and chest pain. Identify the priority intervention.',
                'center_condition': {
                    'options': [
                        'Pneumonia',
                        'Bronchospasm',
                        'Pulmonary Embolism',
                        'Myocardial Infarction'
                    ],
                    'answer': 'Bronchospasm'
                },
                'left_actions': {
                    'options': [
                        'Administer albuterol nebulizer',
                        'Position upright with arms supported',
                        'Apply oxygen via nasal cannula',
                        'Prepare for intubation',
                        'Give aspirin 325mg',
                        'Start IV fluids'
                    ],
                    'answer': ['Administer albuterol nebulizer', 'Position upright with arms supported']
                },
                'right_monitor': {
                    'options': [
                        'Oxygen saturation',
                        'Respiratory rate and pattern',
                        'Peak flow measurements',
                        'Cardiac rhythm',
                        'Blood pressure',
                        'Temperature'
                    ],
                    'answer': ['Oxygen saturation', 'Respiratory rate and pattern']
                }
            }
        ]
    },

    # MISSION 43: ASTHMA EXACERBATION
    {
        'id': 'M-043',
        'numerical_id': 43,
        'type': 'mission',
        'title': 'The Wheezing Patient: Asthma Exacerbation',
        'category': 'Acute Respiratory / Asthma',
        'difficulty': 'Advanced',
        'patient_profile': {
            'demographics': {
                'name': 'Sarah Johnson',
                'age': 28,
                'gender': 'Female',
                'mrn': '4392-SJ',
                'dob': '11/08/1996',
                'weight': '135 lbs',
                'height': '5\'6"',
                'allergies': 'Environmental allergens, Aspirin'
            },
            'chief_complaint': 'Severe shortness of breath and wheezing.',
            'hpi': '28-year-old female with known asthma presents with acute exacerbation. Reports increased wheezing, chest tightness, and SOB over past 2 hours. Used rescue inhaler 6 times in last hour with minimal relief. Peak flow 250 L/min (personal best 450 L/min).',
            'pmh': 'Moderate persistent asthma, Allergic rhinitis.',
            'ros': {
                'gen': 'Temp 98.6°F, HR 110, RR 28, BP 142/88, O2 Sat 93% on RA',
                'resp': 'Severe wheezing, prolonged expiratory phase, intercostal retractions',
                'cardio': 'Tachycardia, no murmurs',
                'neuro': 'Anxious but alert',
                'gi': 'No nausea',
                'gu': 'No urinary symptoms'
            }
        },
        'exhibits': [
            {
                'title': 'Arterial Blood Gas',
                'type': 'text',
                'content': 'pH 7.38, PaCO2 38 mmHg, PaO2 68 mmHg, HCO3 22 mEq/L, O2 Sat 93%'
            },
            {
                'title': 'Peak Flow Measurement',
                'type': 'text',
                'content': '250 L/min (55% of personal best). Severe obstruction.'
            },
            {
                'title': 'Chest X-Ray',
                'type': 'text',
                'content': 'Hyperinflated lungs with no infiltrates. Normal cardiac silhouette.'
            }
        ],
        'steps': [
            {
                'type': 'extended_sata',
                'prompt': 'Ms. Johnson is experiencing a severe asthma exacerbation. Which interventions are priority? (Select all that apply)',
                'options': [
                    'Administer high-dose albuterol/ipratropium nebulizer',
                    'Apply oxygen to maintain SpO2 >94%',
                    'Start systemic corticosteroids',
                    'Assess peak flow every 30 minutes',
                    'Position in high Fowler\'s position',
                    'Monitor for signs of respiratory fatigue',
                    'Prepare magnesium sulfate infusion',
                    'Administer oral antibiotics',
                    'Encourage oral intake of fluids'
                ],
                'answer': [0, 1, 2, 3, 4, 5],
                'rationale': 'Severe asthma exacerbation requires aggressive bronchodilation, oxygen, steroids, frequent monitoring, positioning, and fatigue assessment. Antibiotics and oral fluids are not indicated for acute asthma.'
            },
            {
                'type': 'matrix',
                'prompt': 'Match the asthma severity indicator with appropriate action:',
                'rows': [
                    {'text': 'Peak flow 40-50% of personal best'},
                    {'text': 'PaO2 <60 mmHg on room air'},
                    {'text': 'Silent chest on auscultation'},
                    {'text': 'PaCO2 >42 mmHg (respiratory acidosis)'}
                ],
                'columns': [
                    'Home management',
                    'Office/clinic visit',
                    'Emergency department',
                    'Intensive care admission',
                    'Immediate intubation',
                    'Oral corticosteroids'
                ],
                'answer': {
                    'Peak flow 40-50% of personal best': 'Emergency department',
                    'PaO2 <60 mmHg on room air': 'Intensive care admission',
                    'Silent chest on auscultation': 'Immediate intubation',
                    'PaCO2 >42 mmHg (respiratory acidosis)': 'Immediate intubation'
                },
                'rationale': 'Asthma severity indicators guide escalation of care: moderate obstruction requires ED visit, hypoxemia needs ICU, silent chest indicates impending respiratory failure requiring intubation.'
            },
            {
                'type': 'bowtie',
                'prompt': 'Despite aggressive treatment, Ms. Johnson becomes unresponsive with agonal respirations. Identify the emergency condition.',
                'center_condition': {
                    'options': [
                        'Respiratory Arrest',
                        'Status Epilepticus',
                        'Cardiac Arrest',
                        'Hypoglycemic Coma'
                    ],
                    'answer': 'Respiratory Arrest'
                },
                'left_actions': {
                    'options': [
                        'Begin CPR',
                        'Administer epinephrine IM',
                        'Intubate and mechanically ventilate',
                        'Administer dextrose IV',
                        'Defibrillate',
                        'Give benzodiazepines'
                    ],
                    'answer': ['Begin CPR', 'Intubate and mechanically ventilate']
                },
                'right_monitor': {
                    'options': [
                        'End-tidal CO2',
                        'Cardiac rhythm',
                        'Oxygen saturation',
                        'Blood glucose',
                        'Seizure activity',
                        'Temperature'
                    ],
                    'answer': ['End-tidal CO2', 'Cardiac rhythm']
                }
            }
        ]
    },

    # MISSION 44: COPD EXACERBATION
    {
        'id': 'M-044',
        'numerical_id': 44,
        'type': 'mission',
        'title': 'The Breathless Chronic: COPD Exacerbation',
        'category': 'Acute Respiratory / COPD',
        'difficulty': 'Advanced',
        'patient_profile': {
            'demographics': {
                'name': 'William Thompson',
                'age': 68,
                'gender': 'Male',
                'mrn': '4498-WT',
                'dob': '02/14/1956',
                'weight': '160 lbs',
                'height': '5\'8"',
                'allergies': 'Morphine (nausea)'
            },
            'chief_complaint': 'Increased shortness of breath and productive cough.',
            'hpi': '68-year-old male with severe COPD presents with exacerbation. Reports increased SOB, cough with green sputum, and fatigue over 3 days. Currently on 3L home O2. Last exacerbation 2 months ago required hospitalization.',
            'pmh': 'Severe COPD (FEV1 35% predicted), Coronary artery disease, HTN.',
            'ros': {
                'gen': 'Temp 99.8°F, HR 92, RR 26, BP 158/92, O2 Sat 88% on 3L NC',
                'resp': 'Increased work of breathing, expiratory wheezes, rhonchi, productive cough',
                'cardio': 'Irregular rhythm, no murmurs',
                'neuro': 'Alert but anxious',
                'gi': 'No nausea or vomiting',
                'gu': 'No urinary symptoms'
            }
        },
        'exhibits': [
            {
                'title': 'Arterial Blood Gas',
                'type': 'text',
                'content': 'pH 7.32, PaCO2 55 mmHg, PaO2 52 mmHg, HCO3 28 mEq/L, O2 Sat 88%'
            },
            {
                'title': 'Chest X-Ray',
                'type': 'text',
                'content': 'Hyperinflated lungs with flattened diaphragms. No acute infiltrates.'
            },
            {
                'title': 'Sputum Culture',
                'type': 'text',
                'content': 'Pending - Gram stain shows many neutrophils with mixed flora.'
            }
        ],
        'steps': [
            {
                'type': 'extended_sata',
                'prompt': 'Mr. Thompson is admitted with COPD exacerbation. Which interventions are essential? (Select all that apply)',
                'options': [
                    'Increase oxygen to maintain SpO2 88-92%',
                    'Administer bronchodilators and corticosteroids',
                    'Obtain sputum culture',
                    'Monitor for respiratory acidosis',
                    'Provide pulmonary hygiene therapy',
                    'Assess for cor pulmonale',
                    'Administer prophylactic antibiotics',
                    'Encourage 3L/min continuous oxygen',
                    'Schedule incentive spirometry q2h'
                ],
                'answer': [0, 1, 2, 3, 4, 5],
                'rationale': 'COPD exacerbation management focuses on controlled oxygenation, bronchodilation, steroids, cultures, monitoring acidosis, pulmonary hygiene, and cardiac assessment. High-flow oxygen and prophylactic antibiotics are not indicated.'
            },
            {
                'type': 'matrix',
                'prompt': 'Match the COPD assessment finding with appropriate intervention:',
                'rows': [
                    {'text': 'PaCO2 55 mmHg, pH 7.32'},
                    {'text': 'O2 saturation 88% on 3L NC'},
                    {'text': 'Green productive sputum'},
                    {'text': 'Increased work of breathing'}
                ],
                'columns': [
                    'Increase oxygen flow rate',
                    'Prepare for non-invasive ventilation',
                    'Obtain sputum culture',
                    'Administer antibiotics',
                    'Administer sedatives',
                    'Provide chest physiotherapy'
                ],
                'answer': {
                    'PaCO2 55 mmHg, pH 7.32': 'Prepare for non-invasive ventilation',
                    'O2 saturation 88% on 3L NC': 'Administer antibiotics',
                    'Green productive sputum': 'Obtain sputum culture',
                    'Increased work of breathing': 'Provide chest physiotherapy'
                },
                'rationale': 'COPD exacerbation findings require specific interventions: respiratory acidosis needs NIV, hypoxemia suggests infection requiring antibiotics, purulent sputum needs culture, and increased WOB benefits from pulmonary hygiene.'
            },
            {
                'type': 'bowtie',
                'prompt': 'Mr. Thompson develops altered mental status and respiratory fatigue. Identify the critical complication.',
                'center_condition': {
                    'options': [
                        'Respiratory Acidosis',
                        'Acute Coronary Syndrome',
                        'Pneumonia',
                        'Pulmonary Embolism'
                    ],
                    'answer': 'Respiratory Acidosis'
                },
                'left_actions': {
                    'options': [
                        'Apply BiPAP ventilation',
                        'Administer naloxone',
                        'Give nitroglycerin',
                        'Start heparin infusion',
                        'Administer bronchodilators',
                        'Prepare for intubation'
                    ],
                    'answer': ['Apply BiPAP ventilation', 'Administer bronchodilators']
                },
                'right_monitor': {
                    'options': [
                        'Arterial blood gases',
                        'Mental status',
                        'Respiratory rate and pattern',
                        'Cardiac enzymes',
                        'D-dimer levels',
                        'White blood cell count'
                    ],
                    'answer': ['Arterial blood gases', 'Mental status']
                }
            }
        ]
    },

    # MISSION 45: PULMONARY EMBOLISM
    {
        'id': 'M-045',
        'numerical_id': 45,
        'type': 'mission',
        'title': 'The Sudden Shortness: Pulmonary Embolism',
        'category': 'Acute Respiratory / Pulmonary Embolism',
        'difficulty': 'Advanced',
        'patient_profile': {
            'demographics': {
                'name': 'Jennifer Davis',
                'age': 52,
                'gender': 'Female',
                'mrn': '4567-JD',
                'dob': '09/30/1972',
                'weight': '165 lbs',
                'height': '5\'4"',
                'allergies': 'Contrast dye (rash)'
            },
            'chief_complaint': 'Sudden onset shortness of breath and chest pain.',
            'hpi': '52-year-old female presents with acute onset SOB and pleuritic chest pain 2 hours ago. Pain worse with inspiration. Recent 8-hour car trip. No cough, hemoptysis, or leg swelling. History of oral contraceptives.',
            'pmh': 'Oral contraceptive use, Migraine headaches.',
            'ros': {
                'gen': 'Temp 98.4°F, HR 105, RR 24, BP 138/82, O2 Sat 94% on RA',
                'resp': 'Dyspnea, pleuritic chest pain, clear breath sounds',
                'cardio': 'Tachycardia, no murmurs or gallops',
                'neuro': 'Alert and oriented',
                'gi': 'No nausea',
                'gu': 'No urinary symptoms'
            }
        },
        'exhibits': [
            {
                'title': 'EKG',
                'type': 'text',
                'content': 'Sinus tachycardia. S1Q3T3 pattern. No ST changes.'
            },
            {
                'title': 'D-Dimer',
                'type': 'text',
                'content': '2.8 mcg/mL (elevated >0.5)'
            },
            {
                'title': 'CT Pulmonary Angiogram',
                'type': 'text',
                'content': 'Filling defect in right main pulmonary artery consistent with pulmonary embolism.'
            }
        ],
        'steps': [
            {
                'type': 'extended_sata',
                'prompt': 'Ms. Davis is diagnosed with pulmonary embolism. Which interventions are priority? (Select all that apply)',
                'options': [
                    'Administer heparin infusion',
                    'Apply oxygen to maintain SpO2 >95%',
                    'Monitor vital signs every 15 minutes',
                    'Assess for signs of bleeding',
                    'Provide pain management',
                    'Encourage ambulation',
                    'Prepare for catheter-directed thrombolysis',
                    'Administer prophylactic antibiotics',
                    'Apply sequential compression devices'
                ],
                'answer': [0, 1, 2, 3, 4],
                'rationale': 'PE management requires anticoagulation, oxygenation, frequent monitoring, bleeding assessment, and pain control. Early ambulation and prophylactic antibiotics are contraindicated. Compression devices are for DVT prevention, not acute PE treatment.'
            },
            {
                'type': 'matrix',
                'prompt': 'Match the pulmonary embolism risk factor with appropriate prophylactic measure:',
                'rows': [
                    {'text': 'Post-surgical patient'},
                    {'text': 'Immobilized patient'},
                    {'text': 'Oral contraceptive use'},
                    {'text': 'Cancer patient'}
                ],
                'columns': [
                    'Low molecular weight heparin',
                    'Warfarin therapy',
                    'Compression stockings',
                    'Inferior vena cava filter',
                    'Aspirin therapy',
                    'Early mobilization'
                ],
                'answer': {
                    'Post-surgical patient': 'Low molecular weight heparin',
                    'Immobilized patient': 'Compression stockings',
                    'Oral contraceptive use': 'Early mobilization',
                    'Cancer patient': 'Low molecular weight heparin'
                },
                'rationale': 'Different risk factors require different prophylaxis: surgery needs LMWH, immobilization needs mechanical prophylaxis, hormonal contraception needs mobilization, cancer needs anticoagulation.'
            },
            {
                'type': 'bowtie',
                'prompt': 'Ms. Davis develops hemodynamic instability with BP 85/50. Identify the complication requiring immediate intervention.',
                'center_condition': {
                    'options': [
                        'Massive Pulmonary Embolism',
                        'Tension Pneumothorax',
                        'Cardiac Tamponade',
                        'Aortic Dissection'
                    ],
                    'answer': 'Massive Pulmonary Embolism'
                },
                'left_actions': {
                    'options': [
                        'Administer thrombolytics',
                        'Perform needle decompression',
                        'Prepare pericardiocentesis',
                        'Administer vasopressors',
                        'Perform pericardiocentesis',
                        'Prepare for surgical embolectomy'
                    ],
                    'answer': ['Administer thrombolytics', 'Administer vasopressors']
                },
                'right_monitor': {
                    'options': [
                        'Cardiac output',
                        'Blood pressure',
                        'Oxygen saturation',
                        'ECG changes',
                        'Chest pain',
                        'Mental status'
                    ],
                    'answer': ['Blood pressure', 'Mental status']
                }
            }
        ]
    },

    # MISSION 46: PLEURAL EFFUSION
    {
        'id': 'M-046',
        'numerical_id': 46,
        'type': 'mission',
        'title': 'The Fluid in the Chest: Pleural Effusion',
        'category': 'Acute Respiratory / Pleural Effusion',
        'difficulty': 'Intermediate',
        'patient_profile': {
            'demographics': {
                'name': 'Michael Rodriguez',
                'age': 61,
                'gender': 'Male',
                'mrn': '4623-MR',
                'dob': '05/14/1963',
                'weight': '175 lbs',
                'height': '5\'9"',
                'allergies': 'Lidocaine'
            },
            'chief_complaint': 'Shortness of breath and chest pain.',
            'hpi': '61-year-old male presents with progressive SOB over 2 weeks and right-sided chest pain. Pain worse with deep inspiration. History of congestive heart failure. No fever or cough.',
            'pmh': 'Congestive heart failure (EF 35%), Hypertension, Diabetes mellitus.',
            'ros': {
                'gen': 'Temp 98.1°F, HR 88, RR 22, BP 152/94, O2 Sat 92% on RA',
                'resp': 'Decreased breath sounds right lower lobe, dullness to percussion',
                'cardio': 'S3 gallop, bilateral lower extremity edema 2+',
                'neuro': 'Alert and oriented',
                'gi': 'Mild abdominal distension',
                'gu': 'No urinary symptoms'
            }
        },
        'exhibits': [
            {
                'title': 'Chest X-Ray',
                'type': 'text',
                'content': 'Right-sided pleural effusion with blunting of costophrenic angle. Cardiomegaly noted.'
            },
            {
                'title': 'Echocardiogram',
                'type': 'text',
                'content': 'Ejection fraction 35%. Global hypokinesis. Moderate mitral regurgitation.'
            },
            {
                'title': 'Thoracentesis Results',
                'type': 'text',
                'content': 'Transudative effusion. Protein 2.8 g/dL, LDH 180 IU/L. Negative for infection.'
            }
        ],
        'steps': [
            {
                'type': 'extended_sata',
                'prompt': 'Mr. Rodriguez has a large pleural effusion secondary to heart failure. Which nursing interventions are essential? (Select all that apply)',
                'options': [
                    'Monitor respiratory status every 4 hours',
                    'Measure and record chest tube drainage',
                    'Assess for signs of respiratory distress',
                    'Administer diuretics as prescribed',
                    'Position on affected side to improve drainage',
                    'Monitor for subcutaneous emphysema',
                    'Encourage deep breathing exercises',
                    'Prepare for thoracentesis procedure',
                    'Apply petroleum jelly to chest tube site'
                ],
                'answer': [0, 2, 3, 4, 6, 7],
                'rationale': 'Pleural effusion management includes monitoring, positioning, diuretics for underlying cause, deep breathing, and preparation for procedures. Chest tubes and air leaks are not present. Petroleum jelly is not used for site care.'
            },
            {
                'type': 'matrix',
                'prompt': 'Match the pleural effusion characteristic with appropriate nursing consideration:',
                'rows': [
                    {'text': 'Transudative effusion'},
                    {'text': 'Exudative effusion'},
                    {'text': 'Large volume effusion'},
                    {'text': 'Post-thoracentesis'}
                ],
                'columns': [
                    'Treat underlying heart failure',
                    'Obtain sputum culture',
                    'Monitor for re-expansion pulmonary edema',
                    'Administer broad-spectrum antibiotics',
                    'Encourage mobility',
                    'Assess puncture site for air leaks'
                ],
                'answer': {
                    'Transudative effusion': 'Treat underlying heart failure',
                    'Exudative effusion': 'Obtain sputum culture',
                    'Large volume effusion': 'Monitor for re-expansion pulmonary edema',
                    'Post-thoracentesis': 'Assess puncture site for air leaks'
                },
                'rationale': 'Different effusion types require different approaches: transudative needs cardiac treatment, exudative suggests infection requiring cultures, large effusions risk re-expansion edema, and post-procedure needs leak assessment.'
            },
            {
                'type': 'bowtie',
                'prompt': 'During thoracentesis, Mr. Rodriguez develops acute shortness of breath and tachycardia. Identify the complication.',
                'center_condition': {
                    'options': [
                        'Re-expansion Pulmonary Edema',
                        'Pneumothorax',
                        'Hemothorax',
                        'Air Embolism'
                    ],
                    'answer': 'Re-expansion Pulmonary Edema'
                },
                'left_actions': {
                    'options': [
                        'Apply high-flow oxygen',
                        'Insert chest tube',
                        'Administer diuretics',
                        'Stop the procedure immediately',
                        'Give blood products',
                        'Hyperventilate the patient'
                    ],
                    'answer': ['Apply high-flow oxygen', 'Stop the procedure immediately']
                },
                'right_monitor': {
                    'options': [
                        'Respiratory rate and oxygen saturation',
                        'Blood pressure and heart rate',
                        'Chest tube drainage',
                        'Breath sounds',
                        'Level of consciousness',
                        'Urine output'
                    ],
                    'answer': ['Respiratory rate and oxygen saturation', 'Blood pressure and heart rate']
                }
            }
        ]
    },

    # MISSION 47: ACUTE RESPIRATORY DISTRESS SYNDROME
    {
        'id': 'M-047',
        'numerical_id': 47,
        'type': 'mission',
        'title': 'The Failing Lungs: Acute Respiratory Distress Syndrome',
        'category': 'Acute Respiratory / ARDS',
        'difficulty': 'Advanced',
        'patient_profile': {
            'demographics': {
                'name': 'David Chen',
                'age': 34,
                'gender': 'Male',
                'mrn': '4789-DC',
                'dob': '03/22/1990',
                'weight': '190 lbs',
                'height': '6\'0"',
                'allergies': 'None'
            },
            'chief_complaint': 'Severe shortness of breath requiring intubation.',
            'hpi': '34-year-old male intubated for ARDS secondary to septic shock from perforated appendix. Surgery 48 hours ago. Currently sedated and mechanically ventilated. PaO2/FiO2 ratio 180. On norepinephrine and broad-spectrum antibiotics.',
            'pmh': 'No significant history.',
            'ros': {
                'gen': 'Temp 101.4°F, HR 110, RR 16 (vent), BP 118/72 on NE 8 mcg/min, O2 Sat 92%',
                'resp': 'Bilateral crackles, decreased breath sounds, chest X-ray shows bilateral infiltrates',
                'cardio': 'Regular rhythm on telemetry',
                'neuro': 'Sedated, following commands when aroused',
                'gi': 'Abdomen soft, surgical dressing clean/dry',
                'gu': 'Foley catheter draining clear urine'
            }
        },
        'exhibits': [
            {
                'title': 'Arterial Blood Gas',
                'type': 'text',
                'content': 'pH 7.42, PaCO2 45 mmHg, PaO2 144 mmHg, HCO3 28 mEq/L on FiO2 80%'
            },
            {
                'title': 'Chest X-Ray',
                'type': 'text',
                'content': 'Bilateral diffuse alveolar infiltrates consistent with ARDS. ET tube in good position.'
            },
            {
                'title': 'Ventilator Settings',
                'type': 'text',
                'content': 'AC mode, VT 480 mL, RR 16, PEEP 12 cmH2O, FiO2 80%, Pplat 28 cmH2O'
            }
        ],
        'steps': [
            {
                'type': 'extended_sata',
                'prompt': 'Mr. Chen is mechanically ventilated with ARDS. Which nursing interventions are critical? (Select all that apply)',
                'options': [
                    'Maintain PEEP ≥10 cmH2O to prevent derecruitment',
                    'Monitor plateau pressure <30 cmH2O',
                    'Perform daily sedation vacations',
                    'Elevate head of bed to 45 degrees',
                    'Provide lung-protective ventilation',
                    'Administer neuromuscular blockers if needed',
                    'Encourage incentive spirometry',
                    'Maintain fluid balance',
                    'Monitor for ventilator-associated pneumonia'
                ],
                'answer': [0, 1, 2, 3, 4, 7, 8],
                'rationale': 'ARDS management focuses on lung protection, PEEP maintenance, pressure monitoring, sedation management, positioning, fluid balance, and VAP prevention. Incentive spirometry and neuromuscular blockers are not routinely used in ARDS.'
            },
            {
                'type': 'matrix',
                'prompt': 'Match the ARDS ventilator parameter with appropriate nursing response:',
                'rows': [
                    {'text': 'Plateau pressure >30 cmH2O'},
                    {'text': 'PaO2/FiO2 ratio <200'},
                    {'text': 'Auto-PEEP present'},
                    {'text': 'Patient-ventilator dyssynchrony'}
                ],
                'columns': [
                    'Decrease tidal volume',
                    'Increase sedation',
                    'Increase PEEP',
                    'Decrease respiratory rate',
                    'Prone positioning',
                    'Neuromuscular blockade'
                ],
                'answer': {
                    'Plateau pressure >30 cmH2O': 'Decrease tidal volume',
                    'PaO2/FiO2 ratio <200': 'Prone positioning',
                    'Auto-PEEP present': 'Increase sedation',
                    'Patient-ventilator dyssynchrony': 'Neuromuscular blockade'
                },
                'rationale': 'ARDS ventilator management requires specific responses: high pressure needs volume reduction, severe hypoxemia needs proning, auto-PEEP needs sedation, dyssynchrony may need paralysis.'
            },
            {
                'type': 'bowtie',
                'prompt': 'Mr. Chen develops hypotension and tachycardia while on high PEEP. Identify the complication.',
                'center_condition': {
                    'options': [
                        'Tension Pneumothorax',
                        'Cardiac Tamponade',
                        'Decreased Cardiac Output',
                        'Pulmonary Embolism'
                    ],
                    'answer': 'Decreased Cardiac Output'
                },
                'left_actions': {
                    'options': [
                        'Decrease PEEP',
                        'Insert chest tube',
                        'Administer vasopressors',
                        'Perform pericardiocentesis',
                        'Anticoagulation',
                        'Fluid bolus'
                    ],
                    'answer': ['Decrease PEEP', 'Fluid bolus']
                },
                'right_monitor': {
                    'options': [
                        'Blood pressure',
                        'Heart rate',
                        'Cardiac output',
                        'Urine output',
                        'Chest tube drainage',
                        'CVP'
                    ],
                    'answer': ['Blood pressure', 'Urine output']
                }
            }
        ]
    },

    # MISSION 48: PNEUMOTHORAX
    {
        'id': 'M-048',
        'numerical_id': 48,
        'type': 'mission',
        'title': 'The Collapsed Lung: Pneumothorax',
        'category': 'Acute Respiratory / Pneumothorax',
        'difficulty': 'Advanced',
        'patient_profile': {
            'demographics': {
                'name': 'Amanda Foster',
                'age': 26,
                'gender': 'Female',
                'mrn': '4856-AF',
                'dob': '12/05/1998',
                'weight': '125 lbs',
                'height': '5\'4"',
                'allergies': 'Penicillin'
            },
            'chief_complaint': 'Sudden chest pain and shortness of breath.',
            'hpi': '26-year-old female presents with acute onset right-sided chest pain and SOB after coughing episode. Pain sharp, worse with inspiration. No trauma history. Tall, thin build. Smokes occasionally.',
            'pmh': 'None.',
            'ros': {
                'gen': 'Temp 98.8°F, HR 105, RR 28, BP 128/78, O2 Sat 91% on RA',
                'resp': 'Decreased breath sounds right upper lobe, hyperresonant percussion',
                'cardio': 'Tachycardia, no murmurs',
                'neuro': 'Anxious but alert',
                'gi': 'No nausea',
                'gu': 'No urinary symptoms'
            }
        },
        'exhibits': [
            {
                'title': 'Chest X-Ray',
                'type': 'text',
                'content': 'Right-sided pneumothorax with 35% lung collapse. Trachea deviated to left. No mediastinal shift.'
            },
            {
                'title': 'CT Chest',
                'type': 'text',
                'content': 'Spontaneous pneumothorax. No blebs/bullae identified. Lung re-expanded after chest tube placement.'
            },
            {
                'title': 'Chest Tube',
                'type': 'text',
                'content': 'Right chest tube to water seal. Tidaling present. Air leak noted in water seal chamber.'
            }
        ],
        'steps': [
            {
                'type': 'extended_sata',
                'prompt': 'Ms. Foster has a spontaneous pneumothorax with chest tube. Which nursing interventions are essential? (Select all that apply)',
                'options': [
                    'Monitor air leak in water seal chamber',
                    'Keep chest tube system below patient level',
                    'Assess respiratory status every 15-30 minutes',
                    'Encourage coughing and deep breathing',
                    'Monitor for subcutaneous emphysema',
                    'Clamp chest tube during transport',
                    'Maintain upright position',
                    'Assess chest tube insertion site',
                    'Prepare for pleurodesis if recurrent'
                ],
                'answer': [0, 1, 2, 4, 6, 7],
                'rationale': 'Pneumothorax management requires air leak monitoring, proper drainage system positioning, frequent assessments, subcutaneous air checks, positioning, and site care. Coughing/deep breathing and clamping are contraindicated. Pleurodesis is for recurrent cases.'
            },
            {
                'type': 'matrix',
                'prompt': 'Match the chest tube assessment finding with appropriate nursing action:',
                'rows': [
                    {'text': 'Continuous air bubbling in water seal'},
                    {'text': 'Chest tube becomes dislodged'},
                    {'text': 'Tidaling absent in water seal'},
                    {'text': 'Bright red blood in drainage'}
                ],
                'columns': [
                    'Notify physician immediately',
                    'Apply occlusive dressing with petroleum jelly',
                    'Increase wall suction',
                    'Milk the chest tube',
                    'Assess for tube kinking',
                    'Prepare for needle decompression'
                ],
                'answer': {
                    'Continuous air bubbling in water seal': 'Assess for tube kinking',
                    'Chest tube becomes dislodged': 'Apply occlusive dressing with petroleum jelly',
                    'Tidaling absent in water seal': 'Notify physician immediately',
                    'Bright red blood in drainage': 'Notify physician immediately'
                },
                'rationale': 'Chest tube complications require specific responses: continuous bubbling suggests leak, dislodgement needs occlusive dressing, absent tidaling indicates obstruction or resolution, bright blood suggests hemorrhage requiring immediate attention.'
            },
            {
                'type': 'bowtie',
                'prompt': 'Ms. Foster develops acute respiratory distress with tracheal deviation. Identify the tension pneumothorax.',
                'center_condition': {
                    'options': [
                        'Tension Pneumothorax',
                        'Hemothorax',
                        'Pulmonary Embolism',
                        'Cardiac Tamponade'
                    ],
                    'answer': 'Tension Pneumothorax'
                },
                'left_actions': {
                    'options': [
                        'Needle decompression 2nd intercostal space',
                        'Chest tube insertion',
                        'Administer oxygen',
                        'Pericardiocentesis',
                        'Anticoagulation',
                        'Fluid resuscitation'
                    ],
                    'answer': ['Needle decompression 2nd intercostal space', 'Administer oxygen']
                },
                'right_monitor': {
                    'options': [
                        'Respiratory rate and oxygen saturation',
                        'Blood pressure and heart rate',
                        'Breath sounds',
                        'Tracheal position',
                        'Chest tube drainage',
                        'Level of consciousness'
                    ],
                    'answer': ['Blood pressure and heart rate', 'Tracheal position']
                }
            }
        ]
    },

    # MISSION 49: ASPIRATION PNEUMONIA
    {
        'id': 'M-049',
        'numerical_id': 49,
        'type': 'mission',
        'title': 'The Silent Aspiration: Aspiration Pneumonia',
        'category': 'Acute Respiratory / Aspiration',
        'difficulty': 'Intermediate',
        'patient_profile': {
            'demographics': {
                'name': 'Patricia Nguyen',
                'age': 78,
                'gender': 'Female',
                'mrn': '4921-PN',
                'dob': '08/17/1946',
                'weight': '140 lbs',
                'height': '5\'3"',
                'allergies': 'Codeine'
            },
            'chief_complaint': 'Fever and productive cough.',
            'hpi': '78-year-old female with dementia presents with fever and productive cough. Witnessed choking on food yesterday. Increasing confusion over past 24 hours. Lives alone, difficulty with ADLs.',
            'pmh': 'Alzheimer\'s dementia, Hypertension, Osteoarthritis.',
            'ros': {
                'gen': 'Temp 102.1°F, HR 96, RR 24, BP 148/86, O2 Sat 93% on 2L NC',
                'resp': 'Crackles right lower lobe, productive cough with foul-smelling sputum',
                'cardio': 'Regular rhythm, no murmurs',
                'neuro': 'Confused, oriented to person only',
                'gi': 'No bowel sounds in all quadrants',
                'gu': 'No urinary symptoms'
            }
        },
        'exhibits': [
            {
                'title': 'Chest X-Ray',
                'type': 'text',
                'content': 'Right lower lobe infiltrate with air bronchograms. Possible aspiration pattern.'
            },
            {
                'title': 'Sputum Culture',
                'type': 'text',
                'content': 'Mixed oral flora. No predominant pathogen isolated.'
            },
            {
                'title': 'Swallow Evaluation',
                'type': 'text',
                'content': 'Severe dysphagia with silent aspiration. Recommend thickened liquids and pureed diet.'
            }
        ],
        'steps': [
            {
                'type': 'extended_sata',
                'prompt': 'Ms. Nguyen has aspiration pneumonia. Which nursing interventions are priority? (Select all that apply)',
                'options': [
                    'Elevate head of bed to 45 degrees during meals',
                    'Provide speech therapy consultation',
                    'Administer antibiotics as prescribed',
                    'Monitor oxygen saturation continuously',
                    'Assist with oral care every 2 hours',
                    'Encourage oral intake of thin liquids',
                    'Assess swallowing ability before meals',
                    'Monitor for signs of sepsis',
                    'Implement aspiration precautions'
                ],
                'answer': [0, 1, 2, 4, 6, 7, 8],
                'rationale': 'Aspiration pneumonia management focuses on positioning, speech therapy, antibiotics, oral care, swallowing assessment, sepsis monitoring, and aspiration precautions. Thin liquids increase aspiration risk.'
            },
            {
                'type': 'matrix',
                'prompt': 'Match the aspiration risk factor with appropriate preventive measure:',
                'rows': [
                    {'text': 'Impaired swallowing'},
                    {'text': 'Altered level of consciousness'},
                    {'text': 'Poor oral hygiene'},
                    {'text': 'Supine positioning'}
                ],
                'columns': [
                    'Speech therapy evaluation',
                    'Frequent oral care',
                    'Elevate head of bed',
                    'Thickened liquids',
                    'Nasogastric tube feeding',
                    'Sedation vacation'
                ],
                'answer': {
                    'Impaired swallowing': 'Speech therapy evaluation',
                    'Altered level of consciousness': 'Sedation vacation',
                    'Poor oral hygiene': 'Frequent oral care',
                    'Supine positioning': 'Elevate head of bed'
                },
                'rationale': 'Aspiration prevention targets specific risk factors: swallowing problems need therapy evaluation, altered consciousness needs sedation assessment, poor hygiene needs oral care, positioning needs elevation.'
            },
            {
                'type': 'bowtie',
                'prompt': 'Ms. Nguyen develops respiratory distress with O2 sat dropping to 85%. Identify the acute complication.',
                'center_condition': {
                    'options': [
                        'Acute Respiratory Failure',
                        'Pulmonary Edema',
                        'Bronchospasm',
                        'Pleural Effusion'
                    ],
                    'answer': 'Acute Respiratory Failure'
                },
                'left_actions': {
                    'options': [
                        'Apply high-flow oxygen',
                        'Administer bronchodilators',
                        'Position upright',
                        'Prepare for intubation',
                        'Administer diuretics',
                        'Perform thoracentesis'
                    ],
                    'answer': ['Apply high-flow oxygen', 'Position upright']
                },
                'right_monitor': {
                    'options': [
                        'Respiratory rate and oxygen saturation',
                        'Mental status',
                        'Arterial blood gases',
                        'Chest X-ray changes',
                        'White blood cell count',
                        'Sputum characteristics'
                    ],
                    'answer': ['Respiratory rate and oxygen saturation', 'Mental status']
                }
            }
        ]
    },

    # MISSION 50: VENTILATOR-ASSOCIATED PNEUMONIA
    {
        'id': 'M-050',
        'numerical_id': 50,
        'type': 'mission',
        'title': 'The Ventilated Infection: VAP',
        'category': 'Acute Respiratory / VAP',
        'difficulty': 'Advanced',
        'patient_profile': {
            'demographics': {
                'name': 'James Wilson',
                'age': 55,
                'gender': 'Male',
                'mrn': '5098-JW',
                'dob': '01/30/1969',
                'weight': '200 lbs',
                'height': '6\'1"',
                'allergies': 'Sulfa drugs'
            },
            'chief_complaint': 'Fever and increased secretions while mechanically ventilated.',
            'hpi': '55-year-old male mechanically ventilated for 7 days post-trauma. Developed fever and increased respiratory secretions yesterday. On sedation and analgesia. Tracheostomy placed 3 days ago. Last ventilator circuit change was 2 days ago.',
            'pmh': 'Traumatic brain injury, Rib fractures, Pneumothorax.',
            'ros': {
                'gen': 'Temp 101.8°F, HR 98, RR 18 (vent), BP 132/78, O2 Sat 94% on FiO2 50%',
                'resp': 'Coarse breath sounds, increased secretions, ventilator alarms sounding',
                'cardio': 'Regular rhythm',
                'neuro': 'Sedated, following simple commands',
                'gi': 'Soft abdomen, tube feeds running',
                'gu': 'Foley catheter draining adequate urine'
            }
        },
        'exhibits': [
            {
                'title': 'Chest X-Ray',
                'type': 'text',
                'content': 'New right lower lobe infiltrate. ET tube in good position. No pneumothorax.'
            },
            {
                'title': 'Endotracheal Aspirate Culture',
                'type': 'text',
                'content': 'Pseudomonas aeruginosa isolated. Sensitive to piperacillin-tazobactam.'
            },
            {
                'title': 'White Blood Cell Count',
                'type': 'text',
                'content': '18.5 K/uL with 85% neutrophils. Bandemia present.'
            }
        ],
        'steps': [
            {
                'type': 'extended_sata',
                'prompt': 'Mr. Wilson has developed ventilator-associated pneumonia. Which interventions are essential? (Select all that apply)',
                'options': [
                    'Obtain cultures before starting antibiotics',
                    'Change ventilator circuit immediately',
                    'Elevate head of bed to 30-45 degrees',
                    'Perform oral care with chlorhexidine',
                    'Administer empiric broad-spectrum antibiotics',
                    'Maintain sedation vacation protocols',
                    'Change central lines prophylactically',
                    'Monitor for multidrug-resistant organisms',
                    'Implement strict hand hygiene'
                ],
                'answer': [0, 2, 3, 4, 5, 7, 8],
                'rationale': 'VAP prevention and treatment require cultures before antibiotics, positioning, oral care, empiric antibiotics, sedation management, MDR monitoring, and hand hygiene. Circuit changes and line changes are not routinely indicated.'
            },
            {
                'type': 'matrix',
                'prompt': 'Match the VAP risk factor with appropriate preventive strategy:',
                'rows': [
                    {'text': 'Prolonged mechanical ventilation'},
                    {'text': 'Supine positioning'},
                    {'text': 'Poor oral hygiene'},
                    {'text': 'Gastric colonization'}
                ],
                'columns': [
                    'Daily sedation interruption',
                    'Head of bed elevation',
                    'Chlorhexidine oral care',
                    'Subglottic secretion drainage',
                    'Prophylactic antibiotics',
                    'Early mobilization'
                ],
                'answer': {
                    'Prolonged mechanical ventilation': 'Daily sedation interruption',
                    'Supine positioning': 'Head of bed elevation',
                    'Poor oral hygiene': 'Chlorhexidine oral care',
                    'Gastric colonization': 'Subglottic secretion drainage'
                },
                'rationale': 'VAP prevention targets specific risk factors: prolonged ventilation needs sedation breaks, supine position needs elevation, poor hygiene needs chlorhexidine, gastric contents need subglottic drainage.'
            },
            {
                'type': 'bowtie',
                'prompt': 'Mr. Wilson develops septic shock with BP 78/45. Identify the critical condition requiring immediate intervention.',
                'center_condition': {
                    'options': [
                        'Septic Shock',
                        'Cardiogenic Shock',
                        'Hypovolemic Shock',
                        'Distributive Shock'
                    ],
                    'answer': 'Septic Shock'
                },
                'left_actions': {
                    'options': [
                        'Administer broad-spectrum antibiotics',
                        'Start norepinephrine infusion',
                        'Give 30 mL/kg fluid bolus',
                        'Transfuse packed red blood cells',
                        'Administer dobutamine',
                        'Prepare for CRRT'
                    ],
                    'answer': ['Administer broad-spectrum antibiotics', 'Give 30 mL/kg fluid bolus']
                },
                'right_monitor': {
                    'options': [
                        'Mean arterial pressure',
                        'Urine output',
                        'Lactate levels',
                        'Central venous pressure',
                        'Mixed venous oxygen saturation',
                        'Arterial blood gases'
                    ],
                    'answer': ['Mean arterial pressure', 'Urine output']
                }
            }
        ]
    }
]

def randomize_question_answers(question):
    """
    Randomize the order of options in a question and update correct_indices accordingly.
    This ensures correct answers appear in varied positions, not always at the beginning.
    """
    if 'options' not in question or 'correct_indices' not in question:
        return question

    import random
    options = question['options']
    correct_indices = question['correct_indices']

    # Create shuffled indices
    all_indices = list(range(len(options)))
    random.shuffle(all_indices)

    # Reorder options
    new_options = [options[idx] for idx in all_indices]

    # Update correct indices to match new positions
    old_to_new = {old_idx: new_idx for new_idx, old_idx in enumerate(all_indices)}
    new_correct_indices = sorted([old_to_new[old_idx] for old_idx in correct_indices])

    question['options'] = new_options
    question['correct_indices'] = new_correct_indices

    return question

def generate_improved_quiz_questions():
    """
    Generate quiz questions with more varied answer patterns and better distractors.
    This function can be used to improve future quiz generation.
    """
    improved_patterns = {
        'single_best': {'correct': 1, 'total': 4, 'description': 'One clearly best answer'},
        'two_strong': {'correct': 2, 'total': 5, 'description': 'Two strong answers, others weak'},
        'three_related': {'correct': 3, 'total': 6, 'description': 'Three related concepts'},
        'mixed_validity': {'correct': 2, 'total': 6, 'description': 'Some valid, some invalid options'},
        'clinical_judgment': {'correct': 1, 'total': 5, 'description': 'Requires clinical reasoning'}
    }

    print("Recommended quiz generation patterns:")
    for pattern_name, config in improved_patterns.items():
        print(f"  {pattern_name}: {config['correct']}/{config['total']} - {config['description']}")

    print("\nUse randomize_question_answers(question) to randomize answer positions!")
    print("This prevents pattern recognition and forces critical thinking.")

    return improved_patterns

if __name__ == "__main__":
    print(f"Defined {len(acute_resp_scenarios)} acute respiratory scenarios")
    generate_improved_quiz_questions()