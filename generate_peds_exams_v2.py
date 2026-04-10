#!/usr/bin/env python3
"""
Generate high-quality pediatrics exams from lecture content.
Matches OB exam quality: content-based questions, plausible distractors, detailed rationales.
"""

import re, json, random
from pathlib import Path

def extract_slides(text):
    """Extract all slides as {num: content} dict"""
    slides = {}
    current_num = None
    current_content = []
    
    for line in text.split('\n'):
        slide_match = re.match(r'=== SLIDE (\d+) ===', line)
        if slide_match:
            if current_num is not None:
                slides[current_num] = ' '.join(current_content).strip()
            current_num = int(slide_match.group(1))
            current_content = []
        elif current_num is not None and line.strip():
            # Keep content, strip copyright suffix but keep the rest
            clean = re.sub(r'\s*Copyright ©.*?reserved\.?\s*', '', line).strip()
            if clean:
                current_content.append(clean)
    
    if current_num is not None:
        slides[current_num] = ' '.join(current_content).strip()
    
    return slides

def find_concepts(slides):
    """Extract key concepts from slides"""
    concepts = []
    
    # Find developmental stages (Erikson/Erickson, Piaget, Kohlberg)
    for num, content in slides.items():
        content_lower = content.lower()
        
        # Erikson/Erickson stages - add known stages if mentioned
        if re.search(r"ericks?on", content_lower):
            # Known Erikson stages (standard NCLEX content)
            erikson_stages = ['Trust', 'Autonomy', 'Initiative', 'Industry', 'Identity', 'Intimacy', 'Generativity', 'Integrity']
            for s in erikson_stages:
                concepts.append(('erikson_stage', s, num, f"Erikson's {s} vs opposite stage"))
        
        # Piaget stages
        piaget = re.findall(r'(Sensorimotor|Preoperational|Concrete|Formal)', content, re.I)
        for stage in set(piaget):
            concepts.append(('piaget_stage', stage, num, content[:200]))
        
        # Kohlberg stages
        kohlberg = re.findall(r'(Preconventional|Conventional|Postconventional)', content, re.I)
        for stage in set(kohlberg):
            concepts.append(('kohlberg_stage', stage, num, content[:200]))
    
    # Find definitions (term: definition patterns)
    for num, content in slides.items():
        defs = re.findall(r'([A-Z][a-z]+(?:\s+[a-z]+){0,3})\s*[:–-]\s*([^.]{40,150})', content)
        for term, definition in defs:
            if len(term) > 3 and len(definition) > 30:
                concepts.append(('definition', term.strip(), num, definition.strip()))
    
    # Find nursing interventions/actions
    for num, content in slides.items():
        actions = re.findall(r'(?:nurse|should|must|teach|assess|monitor|provide|avoid|encourage)\s+([^.]{50,150})', content, re.I)
        for action in actions[:3]:
            concepts.append(('nursing_action', action.strip()[:100], num, content[:200]))
    
    # Find signs/symptoms
    for num, content in slides.items():
        signs = re.findall(r'(?:signs?|symptoms?|manifestations?|findings?|include)\s*[:–-]?\s*([^.]{40,120})', content, re.I)
        for sign in signs[:2]:
            if len(sign) > 30:
                concepts.append(('clinical_finding', sign.strip()[:100], num, content[:200]))
    
    # Find treatments/interventions
    for num, content in slides.items():
        treatments = re.findall(r'(?:treat(?:ment|ed)|management|therapy|administer|give)\s*[:–-]?\s*([^.]{40,120})', content, re.I)
        for tx in treatments[:2]:
            if len(tx) > 30:
                concepts.append(('treatment', tx.strip()[:100], num, content[:200]))
    
    # Find risk factors
    for num, content in slides.items():
        risks = re.findall(r'(?:risk|risks|predispose)\s*(?:factors?|include|are)?\s*[:–-]?\s*([^.]{30,100})', content, re.I)
        for risk in risks[:2]:
            if len(risk) > 25:
                concepts.append(('risk_factor', risk.strip()[:100], num, content[:200]))
    
    return concepts

def generate_question(concept_type, key, slide_num, context, chapter_title):
    """Generate a high-quality question from a concept"""
    
    # Clean up key
    key = key.replace('Copyright', '').strip()
    if len(key) < 5:
        return None
    
    question = None
    options = []
    rationale = ""
    qtype = "mcq"
    
    if concept_type == 'erikson_stage':
        question = f"According to Erikson's psychosocial theory, which stage involves the task of {key.lower()}?"
        options = [
            f"{key} vs {random.choice(['Mistrust', 'Shame', 'Guilt', 'Inferiority', 'Role Confusion', 'Isolation', 'Stagnation', 'Despair'])}",
            "This is a Piaget cognitive stage",
            "This is a Kohlberg moral stage",
            "This is not a recognized developmental stage"
        ]
        rationale = f"Erikson's {key} stage focuses on the psychosocial crisis of developing {key.lower()} vs the opposing quality. Success leads to ego strength; failure leads to difficulty in future stages. (Slide {slide_num})"
    
    elif concept_type == 'piaget_stage':
        question = f"During Piaget's {key} stage, children primarily learn through:"
        if 'sensorimotor' in key.lower():
            options = [
                "Sensory experiences and motor actions",
                "Abstract reasoning and hypothesis testing",
                "Logical operations on concrete objects",
                "Symbolic play and egocentric thinking"
            ]
            rationale = f"The sensorimotor stage (birth-2 years) is characterized by learning through sensory experiences and motor actions. Infants develop object permanence and begin intentional actions. (Slide {slide_num})"
        elif 'preoperational' in key.lower():
            options = [
                "Symbolic thinking, egocentrism, and magical reasoning",
                "Abstract hypothetical reasoning",
                "Conservation and reversibility",
                "Sensory and motor exploration only"
            ]
            rationale = f"The preoperational stage (2-7 years) features symbolic thinking, egocentrism (difficulty seeing others' perspectives), and magical/animistic reasoning. Conservation is not yet mastered. (Slide {slide_num})"
        elif 'concrete' in key.lower():
            options = [
                "Logical thinking about concrete, tangible objects and events",
                "Abstract concepts and hypothetical situations",
                "Sensory and motor actions only",
                "Egocentric and magical thinking"
            ]
            rationale = f"The concrete operational stage (7-11 years) enables logical operations on concrete objects. Children master conservation, classification, and seriation but struggle with abstract/hypothetical thinking. (Slide {slide_num})"
        else:
            options = [
                "Abstract reasoning, hypothesis testing, and metacognition",
                "Egocentric symbolic play",
                "Concrete logical operations",
                "Sensory-motor exploration"
            ]
            rationale = f"The formal operational stage (11+ years) allows abstract reasoning, hypothetical-deductive thinking, and metacognition. Adolescents can think about possibilities and moral dilemmas. (Slide {slide_num})"
    
    elif concept_type == 'kohlberg_stage':
        question = f"Kohlberg's {key} level of moral development is characterized by:"
        if 'preconventional' in key.lower():
            options = [
                "Obedience to avoid punishment and gain rewards (self-interest)",
                "Maintaining social order and meeting expectations",
                "Abstract principles of justice and human rights",
                "No moral reasoning ability"
            ]
            rationale = f"Preconventional morality (typical in young children) focuses on self-interest: avoiding punishment (Stage 1) or seeking rewards (Stage 2). Moral decisions are based on personal consequences. (Slide {slide_num})"
        elif 'conventional' in key.lower():
            options = [
                "Maintaining social order, meeting expectations, and following rules",
                "Personal gain and avoiding punishment",
                "Universal ethical principles",
                "No concern for others' feelings"
            ]
            rationale = f"Conventional morality (typical in school-age/adolescents) focuses on social approval (Stage 3: good boy/girl) and maintaining social order (Stage 4: law and order). Rules are followed to fit in or uphold society. (Slide {slide_num})"
        else:
            options = [
                "Universal ethical principles, justice, and human dignity",
                "Obedience to avoid punishment",
                "Social approval and fitting in",
                "Following laws without question"
            ]
            rationale = f"Postconventional morality (rare, reached by some adults) involves abstract ethical principles. Stage 5: social contract; Stage 6: universal principles. Moral decisions transcend laws if they conflict with justice. (Slide {slide_num})"
    
    elif concept_type == 'definition':
        # Create a definition question
        question = f"Which statement best describes {key}?"
        options = [
            context[:80] + ("..." if len(context) > 80 else ""),
            f"This is not a recognized term in pediatric nursing",
            f"This only applies to adult patients, not children",
            f"This is an outdated concept no longer taught"
        ]
        rationale = f"{key}: {context} (Slide {slide_num})"
    
    elif concept_type == 'nursing_action':
        question = f"When caring for pediatric patients, the nurse should:"
        action = key[:70]
        options = [
            action,
            "Focus only on the child's physical symptoms",
            "Exclude family members from care decisions",
            "Use the same approach as with adult patients"
        ]
        rationale = f"{action}. Family-centered, age-appropriate care is essential in pediatrics. (Slide {slide_num})"
    
    elif concept_type == 'clinical_finding':
        question = f"Which of the following are expected findings in {chapter_title.split(':')[-1].strip() if ':' in chapter_title else 'this condition'}? (Select all that apply.)"
        qtype = "sata"
        finding = key[:60]
        options = [
            finding,
            "Findings opposite to what was described",
            "Signs only seen in adults",
            "Symptoms that indicate immediate emergency",
            "Normal findings unrelated to this condition"
        ]
        answer = [0]  # Just the real finding
        rationale = f"{finding} is a characteristic finding. {context[:80]}... (Slide {slide_num})"
        return {'id': f'q_{concept_type}_{slide_num}', 'type': qtype, 'slide': slide_num, 'question': question, 'options': options[:4], 'answer': answer, 'rationale': rationale}
    
    elif concept_type == 'treatment':
        question = f"What is the primary treatment approach for this pediatric condition?"
        tx = key[:70]
        options = [
            tx,
            "Observation only without intervention",
            "Treatment used only in adults",
            "No treatment is available"
        ]
        rationale = f"{tx}. {context[:80]}... (Slide {slide_num})"
    
    elif concept_type == 'risk_factor':
        question = f"Which factor increases risk in pediatric patients?"
        risk = key[:70]
        options = [
            risk,
            "Protective factors that reduce risk",
            "Factors only relevant in adults",
            "Unrelated demographic information"
        ]
        rationale = f"{risk} is a known risk factor. {context[:80]}... (Slide {slide_num})"
    
    else:
        return None
    
    # Shuffle options, but keep first as correct answer for now (we'll shuffle after)
    if qtype == "mcq":
        random.shuffle(options)
        answer = [options.index(options[0])] if options else [0]
        # Actually, we want the first option (the real one) to NOT always be first
        # Let's track it differently
        correct_text = options[0]
        random.shuffle(options)
        answer = [options.index(correct_text)]
    
    return {
        'id': f'q_{concept_type}_{slide_num}',
        'slide': slide_num,
        'question': question,
        'options': options,
        'answer': answer,
        'rationale': rationale
    }

def get_supplemental_questions(chapter_title, count):
    """Generate supplemental standard pediatric questions based on chapter topic"""
    questions = []
    topic = chapter_title.lower()
    
    # Standard pediatric content by topic - expanded with Quizlet/ATI content (25-30 questions each)
    supplemental_bank = {
        'growth': [
            ("Growth in children is best assessed by:", ["Plotting on standardized growth charts over time", "Single measurement compared to peers", "Parent's estimation", "Only weight without height"], "Growth charts (CDC/WHO) track weight, height, head circumference over time. Trends matter more than single points. (Standard NCLEX)"),
            ("Which factor most influences a child's growth pattern?", ["Genetics and nutrition", "Birth order only", "Gender alone", "Geographic location"], "Growth is influenced by genetics, nutrition, hormones, and environment. Adequate nutrition is essential for reaching genetic potential. (Standard NCLEX)"),
            ("A child's head circumference is measured until what age?", ["36 months (3 years)", "6 months", "12 months", "18 years"], "Head circumference reflects brain growth. Measure until 36 months using a flexible tape over the occipital and frontal prominences. (Standard NCLEX)"),
            ("The Denver Developmental Screening Test assesses:", ["Personal-social, fine motor, language, gross motor", "Intelligence only", "Physical growth only", "Vision and hearing only"], "Denver II screens four domains at ages 0-6 years to identify developmental delays. It is NOT an IQ test. (Standard NCLEX)"),
            ("What is the most reliable indicator of nutritional status in a child?", ["Weight", "Height", "Head circumference", "BMI"], "Weight is the most sensitive indicator of acute nutritional status. Serial weights track growth patterns. (Standard NCLEX)"),
            ("Which growth pattern is abnormal?", ["A child crossing two percentile lines downward", "A child staying at the 10th percentile consistently", "A child at the 90th percentile consistently", "Growth spurts followed by plateaus"], "Crossing two or more percentile lines (especially downward) warrants investigation for growth failure. (Standard NCLEX)"),
            ("When is the first well-child visit recommended?", ["2 weeks of age", "6 months of age", "1 year of age", "At birth only"], "First well-child visit is 2 weeks post-discharge. Subsequent visits at 2, 4, 6, 9, 12, 15, 18, 24, 30, 36 months, then annually. (Standard NCLEX)"),
            ("What does BMI-for-age assess in children?", ["Weight relative to height for age and sex", "Height only", "Head circumference", "Developmental milestones"], "BMI-for-age (2-20 years) identifies underweight, healthy weight, overweight, and obesity. Plot on CDC growth charts. (Standard NCLEX)"),
            ("Which is a sign of failure to thrive?", ["Weight below the 5th percentile or crossing downward", "Height above the 95th percentile", "Head circumference at the 50th percentile", "Consistent growth along the 75th percentile"], "FTT: weight <5th percentile OR weight-for-age crossing two major percentiles downward. May be organic or non-organic. (Standard NCLEX)"),
            ("The nurse should measure length in infants using:", ["Recumbent position on measuring board", "Standing height", "Parent's estimate", "Visual estimation"], "Infants (0-24 months): measure supine (recumbent) length. After 24 months: standing height. (Standard NCLEX)"),
            ("Growth velocity is fastest during which period?", ["Infancy (first year of life)", "School age", "Adolescence", "Preschool"], "Infancy has the fastest growth velocity. Birth weight doubles by 4-6 months, triples by 1 year. (Standard NCLEX)"),
            ("Which is NOT a normal variant in growth?", ["Sudden drop from 50th to 10th percentile", "Consistent 25th percentile tracking", "Crossing from 50th to 75th percentile gradually", "Growth spurts followed by plateaus"], "Sudden crossing of two or more major percentiles downward suggests pathology. Gradual crossing may be normal. (Standard NCLEX)"),
            ("Bone age is assessed by:", ["X-ray of the left hand and wrist", "Height measurement", "Weight measurement", "Blood tests"], "Bone age (skeletal maturity) is determined by X-ray of left hand/wrist comparing to Greulich-Pyle atlas. (Standard NCLEX)"),
            ("The nurse teaches parents that a 1-year-old should:", ["Triple birth weight and double birth length", "Double birth weight and triple birth length", "Quadruple birth weight", "Gain 2 pounds per month"], "1 year: weight triples (~21 lb), length doubles (~30 in), head circumference increases 10 cm. (Standard NCLEX)"),
            ("Which factor has the greatest influence on linear growth in childhood?", ["Growth hormone and thyroid hormone", "Diet alone", "Exercise alone", "Sleep alone"], "GH and thyroid hormone are essential for linear growth. Nutrition provides building blocks; hormones regulate growth. (Standard NCLEX)"),
            ("Cephalocaudal development means:", ["Growth proceeds from head to toe", "Growth proceeds from center outward", "Growth proceeds at the same rate everywhere", "Growth is random"], "Cephalocaudal: head-to-toe progression. Infants lift head before sitting. Proximodistal: center-to-extremity. (Quizlet Ch15)"),
            ("Proximodistal development means:", ["Growth proceeds from center of body outward", "Growth proceeds from head to toe", "Growth is random", "Growth stops at age 2"], "Proximodistal: trunk control before fingers. Infants grasp before precise finger movements. (Quizlet Ch15)"),
            ("A child who drops two or more percentile lines on a growth chart should:", ["Be evaluated for growth failure", "Be ignored as this is normal", "Have no further assessment", "Be started on growth hormone"], "Dropping 2+ percentiles warrants investigation for nutrition, endocrine, or systemic issues. (Quizlet Ch15)"),
            ("At what age does birth weight typically double?", ["4-6 months", "12 months", "18 months", "2 years"], "Birth weight doubles by 4-6 months, triples by 12 months. (Quizlet Ch15)"),
            ("At what age does birth weight typically triple?", ["12 months", "6 months", "18 months", "24 months"], "Birth weight triples by age 1 year. Length increases 50% (mostly trunk). (Quizlet Ch15)"),
            ("Which is a sign of well-nourished status in a child?", ["Alert, shiny hair, firm gums, steady height/weight gains", "Dull hair, dry skin", "Pale mucous membranes", "Delayed milestones"], "Well-nourished: alert, shiny hair, firm gums/membranes, regular elimination, steady gains. (Quizlet Ch15)"),
            ("Serving size for toddlers is approximately:", ["1 tablespoon per food group per year of age", "1 cup per year of age", "Unlimited amounts", "Adult portions"], "1 tbsp per year of age (e.g., 2 tbsp at age 2). Prevents overfeeding and food waste. (Quizlet Ch15)"),
            ("The posterior fontanelle closes by:", ["2-3 months", "12-18 months", "6 months", "24 months"], "Posterior fontanelle (triangle) closes 2-3 months. Anterior (diamond) closes 12-18 months. (Quizlet Ch15)"),
            ("Permanent teeth begin erupting at approximately:", ["6 years", "3 years", "1 year", "12 years"], "Permanent teeth erupt ~6 years. Primary (deciduous) teeth: 20 total, full by 2.5 years. (Quizlet Ch15)"),
            ("First dental visit is recommended by:", ["12 months of age", "3 years of age", "6 years of age", "Only if problems"], "AAPD: first dental visit by 1 year. Establishes dental home, assesses for caries. (Quizlet Ch15)"),
            ("Rice cereal is typically introduced at:", ["6 months", "Birth", "12 months", "3 months"], "Rice cereal (least allergenic) at 4-6 months. Introduce one new food every 3-5 days. (Quizlet Ch15)")
        ],
        'infant': [
            ("The anterior fontanelle typically closes by:", ["12-18 months", "3-6 months", "2-3 years", "Birth"], "The anterior fontanelle (diamond-shaped) closes between 12-18 months. Posterior (triangle) closes by 2-3 months. (Standard NCLEX)"),
            ("Which reflex persists longest in infancy?", ["Babinski reflex (until 12 months)", "Moro reflex", "Rooting reflex", "Stepping reflex"], "Babinski (toes fan out on sole stimulation) persists until ~12 months. Moro, rooting, stepping disappear by 4-6 months. (Standard NCLEX)"),
            ("An infant can sit unsupported by what age?", ["6-8 months", "2-3 months", "10-12 months", "Birth"], "Sitting unsupported: 6-8 months. Milestone delays may indicate motor delay. (Standard NCLEX)"),
            ("The Moro reflex is characterized by:", ["Extension and abduction of arms with crying, then adduction", "Turning head toward a touch on the cheek", "Sucking when the palate is touched", "Fanning of toes on sole stroke"], "Moro (startle): sudden head extension causes arms to extend/abduct then adduct with crying. Present at birth, disappears 4-6 months. (Standard NCLEX)"),
            ("What is the normal heart rate range for an infant?", ["100-160 bpm", "60-100 bpm", "160-200 bpm", "40-80 bpm"], "Infant HR: 100-160 bpm resting. Tachycardia >160; bradycardia <100 (concerning). (Standard NCLEX)"),
            ("When introducing solid foods, the nurse teaches parents to:", ["Introduce one food at a time and wait 3-5 days", "Start with multiple foods immediately", "Give only pureed meat first", "Avoid all solids until 12 months"], "Introduce one new food every 3-5 days to identify allergies. Start with iron-fortified rice cereal at 4-6 months. (Standard NCLEX)"),
            ("An infant who can transfer objects hand-to-hand demonstrates which skill?", ["Fine motor development", "Gross motor development", "Cognitive delay", "Visual impairment"], "Transferring objects (6-7 months) shows developing pincer grasp and bilateral coordination. (Standard NCLEX)"),
            ("What is the recommended sleep position for infants?", ["Supine (back)", "Prone (stomach)", "Side-lying", "Any position"], "Back to Sleep: supine only to reduce SIDS risk. Avoid soft bedding, pillows, bumpers. (Standard NCLEX)"),
            ("Which finding in an infant requires immediate attention?", ["Cyanosis of lips and mucous membranes", "Acrocyanosis of hands and feet", "Milia on the nose", "Mongolian spot on the buttocks"], "Central cyanosis (lips, tongue, trunk) indicates hypoxemia — emergency. Acrocyanosis (extremities) is normal in first 24-48h. (Standard NCLEX)"),
            ("An infant's first tooth typically erupts at:", ["6-8 months", "Birth", "12-14 months", "18-24 months"], "Lower central incisors erupt first at 6-8 months. Full primary dentition (20 teeth) by 2.5 years. (Standard NCLEX)"),
            ("The rooting reflex helps infants:", ["Find the nipple and begin feeding", "Grasp objects", "Startle at loud noises", "Roll over"], "Rooting: stroke cheek → head turns toward stimulus, mouth opens. Present at birth, disappears 3-4 months. (Standard NCLEX)"),
            ("An infant's normal respiratory rate is:", ["30-60 breaths per minute", "12-20 breaths per minute", "20-30 breaths per minute", "60-80 breaths per minute"], "Infant RR: 30-60/min. Tachypnea >60 concerning. Count for full minute. (Standard NCLEX)"),
            ("What is the expected weight gain for a breastfed infant in the first month?", ["5-7 oz per week", "1-2 oz per week", "10-14 oz per week", "No weight gain expected"], "Breastfed infants gain 5-7 oz/week (15-30 g/day) in first 3 months. Formula-fed similar. (Standard NCLEX)"),
            ("Which is a sign of dehydration in an infant?", ["Sunken fontanelle and decreased tears", "Increased urination", "Moist mucous membranes", "Decreased heart rate"], "Dehydration: sunken fontanelle, dry mucous membranes, decreased tears, decreased urine output, poor skin turgor. (Standard NCLEX)"),
            ("An infant who can roll from back to stomach by what age?", ["4-6 months", "2-3 months", "8-10 months", "10-12 months"], "Rolling back→stomach: 4-6 months. Rolling stomach→back: 3-4 months. (Standard NCLEX)"),
            ("Cooing typically begins at:", ["Birth to 2 months", "6 months", "9 months", "12 months"], "Cooing (vowel sounds) begins at birth-2 months. Babbling (consonant+vowel) at 3-6 months. (Quizlet Ch15)"),
            ("A 5-month-old can drink from a cup. This is:", ["Age-appropriate fine motor skill", "Advanced development", "Delayed development", "Abnormal"], "Drinking from cup: ~5 months. Shows developing hand-eye coordination. (Quizlet Ch15)"),
            ("At 8 months, an infant can sit alone steadily. This is:", ["Age-appropriate gross motor milestone", "Advanced development", "Delayed development", "Abnormal"], "Sits alone steadily: 8 months. Pulls to stand: 9 months. (Quizlet Ch15)"),
            ("'Mama' and 'Dada' as specific words typically occur at:", ["9-12 months", "6 months", "15 months", "18 months"], "Specific 'mama/dada' at 9-12 months. First words: 10-12 months. (Quizlet Ch15)"),
            ("A 12-month-old should be able to:", ["Walk alone", "Run", "Skip", "Hop"], "Walk alone: 12-15 months. Run: 18 months. Skip: 5 years. (Quizlet Ch15)"),
            ("Newborn length is approximately:", ["50 cm (20 inches)", "40 cm", "60 cm", "70 cm"], "Newborn length: ~50 cm (20 in). Weight: 6-9 lbs average. 40% body weight is extracellular fluid. (Quizlet Ch15)"),
            ("Physiological anemia occurs at approximately:", ["3-4 months", "Birth", "12 months", "6 months"], "Physiological anemia at 3-4 months due to fetal Hb loss. High metabolic rate/O2 use in infants. (Quizlet Ch15)"),
            ("Erikson's stage for infants (0-1 year) is:", ["Trust vs Mistrust", "Autonomy vs Shame", "Initiative vs Guilt", "Industry vs Inferiority"], "Trust vs Mistrust: infants learn to trust caregivers who meet needs. Builds foundation for future relationships. (Quizlet Ch15)"),
            ("A 2-year-old with temper tantrums demonstrates:", ["Normal autonomy development", "Behavioral disorder", "Abuse indicator", "Delayed development"], "Erikson's Autonomy: 'no' and tantrums are normal. Set limits calmly. (Quizlet Ch15)"),
            ("By 6 months, an infant should:", ["Double birth weight", "Triple birth weight", "Quadruple birth weight", "No weight gain"], "Birth weight doubles by 4-6 months. Triples by 12 months. (Quizlet Ch15)")
        ],
        'toddler': [
            ("A toddler's favorite word is often 'no' because of which developmental task?", ["Autonomy vs Shame and Doubt", "Trust vs Mistrust", "Initiative vs Guilt", "Industry vs Inferiority"], "Erikson's Autonomy vs Shame/Doubt (1-3 years) explains negativism. Toddlers assert independence through 'no'. (Standard NCLEX)"),
            ("Toilet training readiness includes:", ["Ability to sit, stay dry 2 hours, communicate need, follow simple directions", "Age exactly 18 months", "Walking independently", "Speaking in full sentences"], "Readiness signs: sphincter control, dry periods, communication, interest in toileting, ability to follow directions. (Standard NCLEX)"),
            ("Which is an appropriate discipline strategy for a toddler?", ["Time-out for 1 minute per year of age", "Spanking", "Yelling", "Withholding meals"], "Time-out: 1 minute per year of age (max 3 min). Effective when used consistently and calmly. (Standard NCLEX)"),
            ("A 2-year-old should have vocabulary of approximately:", ["50-300 words", "10-20 words", "500-1000 words", "2000 words"], "2-year-olds: ~50-300 words, 2-word phrases. 3-year-olds: ~1000 words, 3-word sentences. (Standard NCLEX)"),
            ("Parallel play is characteristic of which age group?", ["Toddlers (1-3 years)", "Infants", "Preschoolers", "School-age"], "Parallel play: toddlers play alongside but not with each other. Cooperative play develops in preschool. (Standard NCLEX)"),
            ("Temper tantrums in toddlers are:", ["Normal expression of frustration", "Sign of autism", "Behavioral disorder requiring medication", "Abuse indicator"], "Tantrums are normal in toddlers as they learn emotional regulation. Respond calmly, ensure safety, ignore attention-seeking. (Standard NCLEX)"),
            ("Which safety measure is MOST important for toddlers?", ["Childproofing the home and close supervision", "Teaching stranger danger", "Bicycle helmet use", "Teaching to dial 911"], "Toddlers explore actively. Childproofing (locks, gates, outlet covers) + constant supervision prevents injuries. (Standard NCLEX)"),
            ("A toddler who can stack 6-7 blocks demonstrates:", ["Fine motor and cognitive development", "Delayed development", "Advanced development", "Speech delay"], "Stacking blocks: 6 blocks by 24 months. Shows hand-eye coordination and spatial awareness. (Standard NCLEX)"),
            ("What is the primary nutrition concern for toddlers?", ["Iron deficiency anemia from excessive milk intake", "Protein deficiency", "Vitamin C deficiency", "Obesity"], "Too much milk (>24 oz/day) displaces iron-rich foods → milk anemia. Limit to 16-24 oz/day. (Standard NCLEX)"),
            ("A 2.5-year-old who wets the bed at night:", ["Is within normal limits", "Has a bladder disorder", "Needs punishment", "Requires immediate intervention"], "Nighttime dryness may not occur until age 5-7. Enuresis before age 5 is normal. (Standard NCLEX)"),
            ("A toddler's normal pulse rate is:", ["80-130 bpm", "60-100 bpm", "100-160 bpm", "40-80 bpm"], "Toddler HR: 80-130 bpm. Lower than infants. Count apical for 1 full minute. (Standard NCLEX)"),
            ("What is the expected weight gain for toddlers per year?", ["4-6 pounds", "1-2 pounds", "10-15 pounds", "No weight gain"], "Toddlers gain 4-6 pounds and 2-3 inches per year. Growth velocity slows compared to infancy. (Standard NCLEX)"),
            ("A 3-year-old can jump in place. This is:", ["Age-appropriate gross motor development", "Advanced development", "Delayed development", "Abnormal"], "Jumping in place: 24-30 months. Hopping on one foot: 4 years. Skipping: 5 years. (Standard NCLEX)"),
            ("Which is appropriate discipline for a 2-year-old?", ["Redirection and distraction", "Grounding", "Taking away privileges for a week", "Logical consequences"], "Toddlers: short attention span. Redirection/distraction works best. Time-out also effective. (Standard NCLEX)"),
            ("A toddler who says 'me do it' is demonstrating:", ["Autonomy and independence", "Rebellion", "Speech delay", "Attention-seeking"], "Erikson's Autonomy: toddlers want to do things themselves. Encourage safe independence. (Standard NCLEX)")
        ],
        'preschool': [
            ("Preschoolers engage in magical thinking and believe their thoughts can cause events. This is:", ["Preoperational stage characteristic", "Sign of mental illness", "Concrete operational thinking", "Formal operational thinking"], "Piaget's preoperational stage (2-7 years) features magical thinking, egocentrism, animism. Concrete operations come at 7-11 years. (Standard NCLEX)"),
            ("A 4-year-old asks many 'why' questions. This is:", ["Normal cognitive development", "Sign of ADHD", "Abnormal behavior", "Delayed development"], "Preschoolers are curious and ask 'why' constantly — this is normal. It reflects their preoperational thinking and need to understand. (Standard NCLEX)"),
            ("Preschoolers often engage in which type of play?", ["Associative and cooperative play", "Parallel play only", "Solitary play only", "No play"], "Preschoolers (3-5): associative play (interacting, sharing), cooperative play (organized with rules). (Standard NCLEX)"),
            ("A preschooler who can draw a person with 6 body parts demonstrates:", ["Age-appropriate fine motor development", "Gifted ability", "Delayed development", "Visual impairment"], "Drawing a person with 6+ parts: 5 years. 3 parts: 3-4 years. (Standard NCLEX)"),
            ("Which fear is common in preschoolers?", ["Fear of the dark, monsters, animals", "Fear of strangers only", "Fear of school", "No fears"], "Preschoolers have vivid imaginations → fears of dark, monsters, animals, separation. Address with reassurance. (Standard NCLEX)"),
            ("A 4-year-old tells elaborate stories that are not true. This is:", ["Normal imaginative play", "Pathological lying", "Sign of abuse", "Developmental delay"], "Preschoolers blend reality and fantasy. This is normal imaginative development, not lying. (Standard NCLEX)"),
            ("Preschoolers should brush teeth:", ["With adult supervision and assistance", "Independently without help", "Only once a day", "Not until age 6"], "Parents supervise/assist brushing until age 6-8. Use pea-sized fluoride toothpaste. (Standard NCLEX)"),
            ("Which is an appropriate expectation for a 5-year-old?", ["Tying shoelaces", "Reading chapter books", "Playing a musical instrument", "Writing cursive"], "Tying shoelaces: 5-6 years. Reading simple words: 5-6 years. (Standard NCLEX)"),
            ("Preschoolers often have imaginary friends. This indicates:", ["Normal development", "Social isolation", "Psychosis", "Autism"], "Imaginary friends are normal in 3-5 year olds. They help children practice social skills. (Standard NCLEX)"),
            ("What is the recommended daily screen time for preschoolers?", ["<1 hour per day", "2-3 hours", "4 hours", "Unlimited with supervision"], "AAP: <1 hour/day quality programming for ages 2-5. No screens under 18 months except video calls. (Standard NCLEX)"),
            ("A 4-year-old's normal pulse rate is:", ["70-120 bpm", "60-100 bpm", "100-160 bpm", "40-80 bpm"], "Preschool HR: 70-120 bpm. Lower than toddlers. (Standard NCLEX)"),
            ("What is the expected weight gain for preschoolers per year?", ["4-5 pounds", "1-2 pounds", "8-10 pounds", "No weight gain"], "Preschoolers gain 4-5 pounds and 2.5-3 inches per year. (Standard NCLEX)"),
            ("A 5-year-old can hop on one foot. This is:", ["Age-appropriate gross motor development", "Advanced development", "Delayed development", "Abnormal"], "Hopping on one foot: 4 years. Skipping: 5 years. (Standard NCLEX)"),
            ("Which is a characteristic of preoperational thinking?", ["Egocentrism and animism", "Conservation and reversibility", "Abstract reasoning", "Object permanence"], "Preoperational: egocentric (can't see others' views), animistic (objects have feelings), magical thinking. (Standard NCLEX)"),
            ("A 3-year-old has a vocabulary of approximately:", ["900-1000 words", "200-300 words", "2000-3000 words", "50-100 words"], "3-year-olds: ~1000 words, 3-4 word sentences. 4-year-olds: ~1500 words, complex sentences. (Standard NCLEX)")
        ],
        'school': [
            ("School-age children develop a sense of competence through:", ["Mastering new skills and receiving recognition", "Fantasy play only", "Dependent attachment to parents", "Rebellion against rules"], "Erikson's Industry vs Inferiority (6-12 years): children gain confidence by mastering skills, schoolwork, and peer relations. (Standard NCLEX)"),
            ("A school-age child can think logically about concrete objects. This is Piaget's:", ["Concrete operational stage", "Preoperational stage", "Formal operational stage", "Sensorimotor stage"], "Concrete operational (7-11 years): logical thinking about tangible objects, conservation, classification, reversibility. (Standard NCLEX)"),
            ("School-age children typically prefer to play with:", ["Same-sex peers", "Younger children", "Adults only", "No one"], "School-age: prefer same-sex peers, same-age friends. Peer relationships are crucial for development. (Standard NCLEX)"),
            ("A 10-year-old can classify objects by multiple attributes. This demonstrates:", ["Concrete operational thinking", "Preoperational thinking", "Formal operational thinking", "Sensorimotor thinking"], "Classification (multiple criteria), seriation, conservation mastered in concrete operational stage. (Standard NCLEX)"),
            ("School-age children are in which Freudian stage?", ["Latency", "Oedipal", "Oral", "Genital"], "Latency (6-puberty): sexual impulses are repressed; focus on school, friends, skills. (Standard NCLEX)"),
            ("A school-age child who loses a tooth should:", ["Place under pillow for Tooth Fairy", "Discard immediately", "Save in a jar", "Swallow it"], "Cultural practices vary. Tooth Fairy is common in US. Loss of primary teeth is normal at 6-12 years. (Standard NCLEX)"),
            ("Which is a normal vital sign for a 7-year-old?", ["HR 70-120 bpm, RR 16-22", "HR 60-100 bpm, RR 12-20", "HR 100-160 bpm, RR 30-60", "HR 40-60 bpm, RR 8-12"], "School-age HR: 70-120 bpm; RR: 16-22/min. Lower than infants. (Standard NCLEX)"),
            ("School-age children should receive which immunizations?", ["DTaP, MMR, Varicella, IPV boosters", "None until age 11", "Only flu vaccine", "Hepatitis B only"], "School-age: catch-up and boosters. Tdap, MMR, Varicella, IPV, flu annually. (Standard NCLEX)"),
            ("What is the leading cause of death in school-age children?", ["Unintentional injuries (accidents)", "Cancer", "Heart disease", "Infection"], "Unintentional injuries (MVAs, drowning, burns) are the #1 cause of death in children 5-14 years. (Standard NCLEX)"),
            ("A 9-year-old can use a dictionary to find words. This shows:", ["Concrete operational thinking", "Preoperational thinking", "Formal operational thinking", "Delayed development"], "Dictionary use requires alphabetizing and logical searching — concrete operational skill. (Standard NCLEX)")
        ],
        'adolescent': [
            ("Adolescents develop abstract thinking in which Piaget stage?", ["Formal operational", "Concrete operational", "Preoperational", "Sensorimotor"], "Formal operational (11+ years): abstract reasoning, hypothetical thinking, metacognition, moral dilemmas. (Standard NCLEX)"),
            ("According to Erikson, adolescents face which crisis?", ["Identity vs Role Confusion", "Intimacy vs Isolation", "Generativity vs Stagnation", "Autonomy vs Shame"], "Identity vs Role Confusion (12-18 years): adolescents explore who they are, values, beliefs, future roles. (Standard NCLEX)"),
            ("What is the leading cause of death in adolescents?", ["Unintentional injuries", "Cancer", "Suicide", "Heart disease"], "Unintentional injuries (MVAs, especially with alcohol) are #1. Followed by homicide, suicide. (Standard NCLEX)"),
            ("Adolescents are in which Freudian psychosexual stage?", ["Genital", "Latency", "Phallic", "Anal"], "Genital stage (puberty+): sexual impulses re-emerge; focus on mature relationships. (Standard NCLEX)"),
            ("Which is a normal developmental concern for adolescents?", ["Body image and peer acceptance", "Fear of monsters", "Separation anxiety", "Parallel play"], "Adolescents focus on appearance, peer relationships, identity. Body image concerns are normal. (Standard NCLEX)"),
            ("An adolescent who experiments with different hairstyles, friends, and interests is:", ["Engaging in normal identity exploration", "Confused", "Rebellious", "Mentally unstable"], "Experimentation with identity (clothing, music, friends) is normal identity formation. (Standard NCLEX)"),
            ("Confidentiality in adolescent care:", ["Should be maintained except for safety concerns", "Does not apply to minors", "Only for 18+ year olds", "Is never required"], "Adolescents have right to confidentiality. Exceptions: imminent harm, abuse, certain STIs. (Standard NCLEX)"),
            ("Which vaccine is recommended at age 11-12?", ["HPV, Tdap, Meningococcal", "Only flu vaccine", "MMR booster", "Hepatitis B only"], "Adolescent vaccines: Tdap, Meningococcal, HPV (series). Flu annually. (Standard NCLEX)"),
            ("What is a key developmental task of adolescence?", ["Achieving independence from parents", "Learning to read", "Potty training", "Learning object permanence"], "Adolescents seek autonomy, identity, and peer relationships while maintaining family connection. (Standard NCLEX)"),
            ("Risk-taking behavior in adolescents is:", ["Common due to prefrontal cortex development lagging", "Always a sign of mental illness", "Unusual and concerning", "Only in boys"], "The prefrontal cortex (impulse control) matures later than limbic system (emotion/reward). Risk-taking is developmentally normal. (Standard NCLEX)")
        ],
        'hospitalization': [
            ("What is the primary fear of hospitalized preschoolers?", ["Separation from parents and bodily injury", "Death", "Strangers", "Missing school"], "Preschoolers: separation anxiety and fear of pain/injury are primary stressors. Encourage parental presence. (Standard NCLEX)"),
            ("A child's understanding of death depends on:", ["Developmental age and cognitive level", "Religion only", "Parental explanation", "Previous experience with death"], "Death concept: preschool — reversible; school-age — permanent but distant; adolescent — abstract, universal. (Standard NCLEX)"),
            ("Which is an effective way to prepare a child for hospitalization?", ["Therapeutic play with medical equipment", "Not telling them anything", "Showing graphic photos", "Using medical jargon"], "Medical play (dolls, equipment) helps children express fears, gain mastery. Age-appropriate preparation reduces anxiety. (Standard NCLEX)"),
            ("What is the best way to explain a procedure to a 4-year-old?", ["Use simple terms, dolls, and short explanations", "Give detailed medical explanation", "Show graphic videos", "Have parents explain"], "Preschoolers: short, concrete explanations; dolls or drawings; demonstrate on a teddy bear. (Standard NCLEX)"),
            ("A hospitalized child regresses to bedwetting. The nurse should:", ["Reassure parents this is normal regression", "Punish the child", "Ignore it", "Call child protective services"], "Regression (bedwetting, thumb sucking) is a normal coping mechanism during stress. Reassure parents it's temporary. (Standard NCLEX)"),
            ("Which intervention best supports family-centered care?", ["Including family in care decisions and teaching", "Limiting family visiting hours", "Having family leave during procedures", "Treating only the child"], "Family-centered care: families are partners in care; include in decisions, teaching, and presence. (Standard NCLEX)"),
            ("A 7-year-old undergoing surgery is worried about waking up. What should the nurse say?", ["'The doctor will make sure you wake up after surgery'", "'Don't worry about it'", "'You might not wake up'", "'Ask your parents'"], "Concrete, honest reassurance. Address fears directly and simply. (Standard NCLEX)"),
            ("What is the best approach when a child is uncooperative during a procedure?", ["Explain what will happen and allow choices when possible", "Hold the child down", "Threaten punishment", "Give up and try later"], "Allow choices (which arm for shot), use distraction, explain simply. Avoid restraint unless necessary. (Standard NCLEX)"),
            ("Which age group benefits most from a tour of the hospital before admission?", ["Preschoolers and school-age children", "Infants", "Adolescents", "All ages equally"], "Preparation tours with dolls/equipment help 3-12 year olds. Adolescents may prefer verbal info. (Standard NCLEX)"),
            ("A child's favorite toy from home should be:", ["Encouraged and kept with the child", "Taken away to prevent loss", "Disinfected hourly", "Placed in a locker"], "Transitional objects (blanket, teddy) provide comfort and security. Keep with child. (Standard NCLEX)")
        ],
        'respiratory': [
            ("The most common chronic illness in children is:", ["Asthma", "Diabetes", "Cancer", "Heart disease"], "Asthma affects ~7% of children. Triggers: allergens, exercise, URI, cold air. (Standard NCLEX)"),
            ("Signs of respiratory distress in a child include:", ["Nasal flaring, grunting, retractions, cyanosis", "Clear lung sounds", "Regular respiratory rate", "Pink skin color"], "Respiratory distress: tachypnea, nasal flaring, grunting, intercostal/sternal retractions, cyanosis, use of accessory muscles. (Standard NCLEX)"),
            ("A child with croup presents with:", ["Barking cough, stridor, hoarseness", "Wheezing and prolonged expiration", "Productive cough with fever", "Sudden onset of choking"], "Croup (laryngotracheobronchitis): viral, causes barking seal-like cough, inspiratory stridor. Cool mist, steroids. (Standard NCLEX)"),
            ("Epiglottitis is a medical emergency because:", ["It can cause complete airway obstruction", "It is highly contagious", "It causes chronic lung damage", "It responds poorly to antibiotics"], "Epiglottitis (H. influenzae): rapid swelling of epiglottis → airway obstruction. Keep child calm, don't examine throat. (Standard NCLEX)"),
            ("What is the priority intervention for a child with severe asthma exacerbation?", ["Administer oxygen and nebulized bronchodilator", "Give oral antibiotics", "Perform chest physiotherapy", "Start IV fluids"], "Acute severe asthma: oxygen, nebulized albuterol, steroids. Monitor O2 sat and work of breathing. (Standard NCLEX)"),
            ("A child with bronchiolitis is most likely infected with:", ["Respiratory syncytial virus (RSV)", "Streptococcus pneumoniae", "Haemophilus influenzae", "Mycoplasma"], "RSV is the most common cause of bronchiolitis in infants <2 years. Supportive care: hydration, suction, oxygen. (Standard NCLEX)"),
            ("Which position is best for a child with respiratory distress?", ["High Fowler's or semi-Fowler's", "Supine", "Prone", "Trendelenburg"], "Upright position facilitates lung expansion and decreases work of breathing. (Standard NCLEX)"),
            ("What finding indicates worsening respiratory status in a child?", ["Grunting and nasal flaring", "Clear breath sounds", "Pink nail beds", "Respiratory rate of 24"], "Grunting, nasal flaring, retractions, cyanosis indicate worsening distress and possible respiratory failure. (Standard NCLEX)"),
            ("Cystic fibrosis primarily affects which systems?", ["Respiratory and gastrointestinal", "Cardiovascular and renal", "Neurological and musculoskeletal", "Endocrine and integumentary"], "CF: thick mucus affects lungs (chronic infection) and pancreas (malabsorption). Autosomal recessive. (Standard NCLEX)"),
            ("What is the purpose of chest physiotherapy in cystic fibrosis?", ["Mobilize and remove thick secretions", "Strengthen respiratory muscles", "Prevent infection", "Reduce lung size"], "CPT (percussion, vibration, postural drainage): loosen and move thick mucus for expectoration. (Standard NCLEX)"),
            ("Early respiratory symptoms in cystic fibrosis include:", ["Wheezing respirations and dry, nonproductive cough", "Barrel-shaped chest", "Chronic productive cough", "Bronchiectasis"], "Early CF: wheezing, dry nonproductive cough. Later: barrel chest, bronchiectasis, clubbing. (Quizlet Peds Respiratory)"),
            ("A 2-year-old with barky cough, stridor, and hoarseness has croup. First intervention:", ["Respiratory treatment with racemic epinephrine", "Immediate IV placement", "Tracheostomy set at bedside", "Inform parents about tonsillectomy"], "Croup: racemic epinephrine reduces airway edema and stridor. Also cool mist, steroids. (Quizlet Peds Respiratory)"),
            ("An infant with influenza is NPO because:", ["Shorter/narrower airway increases aspiration risk", "IV fluids provide enough nutrition", "Eating burns too many calories", "Nasal congestion causes distress"], "Infants have shorter/narrower airways → aspiration risk. NPO during acute respiratory illness. (Quizlet Peds Respiratory)"),
            ("For a 7-month-old with low fever, congestion, mild cough:", ["Instill saline nose drops and bulb suction", "Maintain strict bedrest", "Avoid contact with family", "Keep head of bed flat"], "Infants are obligate nose breathers. Saline drops + suction relieve congestion. (Quizlet Peds Respiratory)"),
            ("Epiglottitis progresses:", ["Rapidly over hours", "Slowly over days", "Over weeks", "Never progresses"], "Epiglottitis: rapidly progressive (hours) → airway emergency. Reassure parent without blame. (Quizlet Peds Respiratory)"),
            ("A 6-week-old with influenza cannot have oral feeds because:", ["Aspiration risk from secretions in shorter airway", "Calories are conserved", "IV provides all nutrition", "Parents are anxious"], "Shorter/narrower infant airway → aspiration with secretions. NPO during acute illness. (Quizlet Peds Respiratory)"),
            ("Which finding is NOT a sign of respiratory distress in children?", ["Clear lung sounds", "Nasal flaring", "Grunting", "Retractions"], "Clear lung sounds indicate normal breathing. Distress: nasal flaring, grunting, retractions, cyanosis. (Standard NCLEX)"),
            ("Asthma triggers include:", ["Allergens, exercise, cold air, URI", "Only allergens", "Only exercise", "Only infections"], "Asthma triggers: allergens, exercise, cold air, URI, stress, irritants. (Standard NCLEX)"),
            ("The best position for a child with asthma exacerbation is:", ["High Fowler's", "Supine", "Prone", "Side-lying"], "Upright position facilitates lung expansion, decreases work of breathing. (Standard NCLEX)"),
            ("Bronchiolitis primarily affects which age group?", ["Infants under 2 years", "School-age children", "Adolescents", "All ages equally"], "Bronchiolitis (RSV): infants <2 years. Supportive care: hydration, suctioning, oxygen. (Standard NCLEX)"),
            ("RSV (respiratory syncytial virus) is:", ["Most common cause of bronchiolitis in infants", "Bacterial infection", "Fungal infection", "Only affects adults"], "RSV: most common cause of bronchiolitis (infants <2 years). Highly contagious. (Standard NCLEX)"),
            ("Cystic fibrosis is inherited as:", ["Autosomal recessive", "Autosomal dominant", "X-linked", "Mitochondrial"], "CF: autosomal recessive. Both parents are carriers. Affects CFTR gene → thick mucus. (Standard NCLEX)"),
            ("A child with cystic fibrosis needs:", ["High-calorie, high-protein diet with pancreatic enzymes", "Low-fat diet", "No dietary restrictions", "Only liquid diet"], "CF: high-calorie/protein diet, pancreatic enzyme replacement with meals, fat-soluble vitamin supplements. (Standard NCLEX)")
        ],
        'cardiovascular': [
            ("What is the most common congenital heart defect?", ["Ventricular septal defect (VSD)", "Atrial septal defect", "Patent ductus arteriosus", "Tetralogy of Fallot"], "VSD is most common (25-30% of CHDs). Many close spontaneously. (Standard NCLEX)"),
            ("A child with a cyanotic heart defect presents with:", ["Bluish skin, lips, nail beds", "Pink, well-perfused skin", "Pallor", "Yellowish skin"], "Cyanotic defects (Tetralogy, Transposition): right-to-left shunt → deoxygenated blood to systemic circulation. (Standard NCLEX)"),
            ("What is 'tet spells' in Tetralogy of Fallot?", ["Sudden cyanotic episodes with crying or feeding", "Seizures", "Fainting spells", "Chest pain"], "Tet spells: acute cyanosis from increased R→L shunting during stress. Knee-chest position, oxygen, morphine. (Standard NCLEX)"),
            ("The nurse should place a child in knee-chest position for:", ["Tet spells in Tetralogy of Fallot", "Kawasaki disease", "Rheumatic fever", "Heart failure"], "Knee-chest position increases systemic vascular resistance, decreasing R→L shunt during cyanotic spells. (Standard NCLEX)"),
            ("What is the priority assessment in a child with suspected Kawasaki disease?", ["Mucocutaneuos inflammation (strawberry tongue, rash, conjunctivitis)", "Heart murmur", "Blood pressure", "Respiratory rate"], "Kawasaki: fever ≥5 days + 4/5 criteria (rash, conjunctivitis, strawberry tongue, lymphadenopathy, extremity changes). Risk of coronary aneurysms. (Standard NCLEX)"),
            ("Rheumatic fever is caused by:", ["Group A Streptococcus infection", "Rheumatoid arthritis", "Viral infection", "Autoimmune disorder"], "Rheumatic fever: autoimmune response to untreated strep throat. Affects heart, joints, brain, skin. (Standard NCLEX)"),
            ("What is the major complication of untreated strep throat?", ["Rheumatic fever and glomerulonephritis", "Pneumonia", "Meningitis", "Sinusitis"], "Untreated GAS → rheumatic fever (heart damage) or post-streptococcal glomerulonephritis. Treat with penicillin. (Standard NCLEX)"),
            ("A child with heart failure presents with:", ["Tachypnea, tachycardia, hepatomegaly, poor feeding", "Hypertension and bradycardia", "Fever and rash", "Seizures"], "HF in children: tachypnea, tachycardia, diaphoresis with feeding, hepatomegaly, weight gain (fluid). (Standard NCLEX)"),
            ("What is the purpose of prostaglandin E1 in a newborn with duct-dependent lesion?", ["Keep ductus arteriosus open until surgery", "Close the ductus", "Lower pulmonary pressure", "Reduce heart rate"], "PGE1 maintains PDA patency in duct-dependent lesions (HLHS, critical PS) until surgical intervention. (Standard NCLEX)"),
            ("Digoxin is used in pediatric heart failure to:", ["Increase cardiac contractility and slow heart rate", "Reduce blood pressure", "Prevent infection", "Dilate coronary arteries"], "Digoxin: positive inotrope, negative chronotrope. Monitor for toxicity (nausea, bradycardia, vision changes). (Standard NCLEX)"),
            ("A VSD causes blood to shunt:", ["Left to right, increased pulmonary flow, no cyanosis", "Right to left, decreased pulmonary flow, cyanosis", "No shunting due to high LV pressure", "Increased left atrial pressure"], "VSD: L→R shunt (higher LV pressure) → increased pulmonary flow, no cyanosis. Acyanotic defect. (Quizlet Cardio)"),
            ("Classic VSD finding on auscultation:", ["Loud, harsh murmur with systolic thrill at left sternal border", "Machinery-like murmur", "BP higher in arms than legs", "Cyanosis when crying"], "VSD: loud harsh systolic murmur + thrill at left sternal border. (Quizlet Cardio)"),
            ("Coarctation of the aorta causes BP:", ["Lower in legs than arms", "Higher in legs than arms", "Equal in all extremities", "Only elevated in right arm"], "Coarctation: BP lower in legs (distal to narrowing) than arms (proximal). Classic sign. (Quizlet Cardio)"),
            ("Which defects cause increased pulmonary blood flow?", ["PDA and ASD (left-to-right shunts)", "TOF and tricuspid atresia", "Coarctation of aorta", "Pulmonary stenosis"], "PDA, ASD: L→R shunts → increased pulmonary flow. TOF, tricuspid atresia: decreased flow. (Quizlet Cardio)"),
            ("Manifestations of Tetralogy of Fallot include:", ["Polycythemia, clubbing, FTT, murmur", "Hypertension, pallor", "Only murmur", "Normal growth"], "TOF (decreased pulmonary flow): polycythemia, clubbing, FTT, systolic murmur. (Quizlet Cardio)"),
            ("Kawasaki disease affects the:", ["Coronary arteries (risk of aneurysms)", "Kidneys", "Lungs", "Brain only"], "Kawasaki: vasculitis → coronary aneurysms if untreated. IVIG + aspirin. (Standard NCLEX)"),
            ("Rheumatic heart disease results from:", ["Untreated Group A strep infection", "Viral infection", "Genetic defect", "Autoimmune disease"], "Rheumatic fever → heart valve damage (especially mitral). Prevent with penicillin for strep. (Standard NCLEX)"),
            ("Signs of heart failure in infants include:", ["Tachypnea, poor feeding, diaphoresis with feeding, hepatomegaly", "Hypertension, bradycardia", "Cyanosis, clubbing", "Fever, rash"], "HF in infants: tachypnea, poor feeding, diaphoresis, hepatomegaly, weight gain. (Standard NCLEX)"),
            ("Digoxin toxicity signs include:", ["Nausea, bradycardia, vision changes (yellow halos)", "Tachycardia, hypertension", "Fever, rash", "Diarrhea only"], "Digoxin toxicity: GI (nausea, vomiting), cardiac (bradycardia), visual (halos). (Standard NCLEX)"),
            ("Acyanotic heart defects include:", ["VSD, ASD, PDA, coarctation", "TOF, transposition", "Tricuspid atresia", "Pulmonary atresia"], "Acyanotic (L→R): VSD, ASD, PDA, coarctation. Cyanotic (R→L): TOF, transposition, tricuspid atresia. (Standard NCLEX)")
        ],
        'gi': [
            ("What is the most common cause of acute abdominal pain in children?", ["Constipation", "Appendicitis", "Gastroenteritis", "Intussusception"], "Functional constipation is most common. However, appendicitis is most common surgical emergency. (Standard NCLEX)"),
            ("A child with appendicitis typically presents with:", ["Periumbilical pain migrating to RLQ, vomiting, fever", "Diffuse abdominal pain and diarrhea", "Epigastric pain radiating to back", "Left lower quadrant pain"], "Appendicitis: periumbilical → RLQ pain, nausea, vomiting, fever, anorexia, rebound tenderness. (Standard NCLEX)"),
            ("What is intussusception?", ["Telescoping of bowel into itself", "Inflammation of the appendix", "Twisting of the bowel", "Prolapse of the rectum"], "Intussusception: segment telescopes into adjacent segment → obstruction. Classic: currant jelly stool, sausage-shaped mass, colicky pain. (Standard NCLEX)"),
            ("The classic sign of intussusception is:", ["Currant jelly stool (bloody mucus)", "Projectile vomiting", "Constipation", "Bright red blood per rectum"], "Currant jelly stool = blood + mucus from bowel ischemia. Air or barium enema can reduce; surgery if unsuccessful. (Standard NCLEX)"),
            ("What is pyloric stenosis?", ["Hypertrophy of pyloric muscle causing obstruction", "Inflammation of the stomach", "Malrotation of the intestines", "Duodenal atresia"], "Pyloric stenosis: thickened pyloric sphincter blocks gastric emptying. Projectile vomiting, olive mass, dehydration. (Standard NCLEX)"),
            ("A newborn with projectile vomiting and an olive-shaped mass has:", ["Pyloric stenosis", "GERD", "Malrotation", "Necrotizing enterocolitis"], "Pyloric stenosis: 2-8 weeks, projectile vomiting, dehydration, visible peristalsis, olive mass. Surgery (pyloromyotomy). (Standard NCLEX)"),
            ("What is the primary treatment for GERD in infants?", ["Small frequent feeds, upright positioning after feeds", "Antibiotics", "Surgery", "Nothing by mouth"], "GERD in infants: thickening feeds, upright 30 min after feeding, smaller volumes. Most resolve by 12 months. (Standard NCLEX)"),
            ("Celiac disease is caused by:", ["Immune response to gluten", "Lactose intolerance", "Food allergy", "Bacterial infection"], "Celiac: autoimmune response to gluten → villous atrophy, malabsorption. Requires lifelong gluten-free diet. (Standard NCLEX)"),
            ("What should be avoided in a child with celiac disease?", ["Wheat, barley, rye", "Rice and potatoes", "Milk products", "All meats"], "Gluten-free: avoid wheat, barley, rye. Safe: rice, corn, potatoes, certified GF oats. (Standard NCLEX)"),
            ("What is Hirschsprung disease?", ["Absence of ganglion cells in bowel causing functional obstruction", "Inflammation of the colon", "Twisting of the bowel", "Prolapse of the rectum"], "Hirschsprung: aganglionic megacolon → functional obstruction, chronic constipation, failure to pass meconium. Surgery. (Standard NCLEX)"),
            ("Signs of dehydration in children include:", ["Decreased urine output, dry mucous membranes, sunken eyes, tachycardia", "Increased urination", "Moist skin", "Slow capillary refill only"], "Dehydration: ↓ urine output, dry mucous membranes, sunken fontanelle, tachycardia, poor skin turgor. (Standard NCLEX)"),
            ("Oral rehydration for mild-moderate dehydration:", ["ORS (oral rehydration solution) in small frequent amounts", "Water only", "Juice only", "Sports drinks"], "ORS: small frequent sips (5-10 mL every 1-2 min). Avoid juice/sports drinks (high sugar). (Standard NCLEX)"),
            ("Severe dehydration in children requires:", ["IV fluid bolus (20 mL/kg normal saline)", "Oral fluids only", "Nothing by mouth", "Antibiotics"], "Severe dehydration: IV bolus 20 mL/kg NS, repeat as needed. Assess response. (Standard NCLEX)"),
            ("Acute gastroenteritis is most commonly caused by:", ["Viral (rotavirus, norovirus)", "Bacterial", "Parasitic", "Fungal"], "Viral gastroenteritis: rotavirus (infants), norovirus (all ages). Supportive care: hydration. (Standard NCLEX)"),
            ("A child with diarrhea should avoid:", ["High-sugar drinks and caffeine", "Rice and bananas", "Toast", "Crackers"], "Avoid: sugary drinks, caffeine, fatty foods. Offer: BRAT diet (bananas, rice, applesauce, toast). (Standard NCLEX)"),
            ("Rotavirus vaccine is given at:", ["2, 4, and 6 months", "Birth and 2 months", "12 months only", "Not recommended"], "Rotavirus: oral vaccine at 2, 4, 6 months. Prevents severe gastroenteritis. (Standard NCLEX)"),
            ("A child with vomiting and diarrhea should:", ["Continue to offer fluids; avoid solids initially", "Stop all fluids", "Only give milk", "Give solid foods"], "Continue small frequent ORS; avoid solids until vomiting resolves. (Standard NCLEX)"),
            ("Signs of severe dehydration requiring IV fluids:", ["Lethargy, sunken eyes, dry mucous membranes, poor perfusion", "Mild thirst only", "Slightly decreased urine", "Active and alert"], "Severe dehydration: altered mental status, sunken eyes, dry mucous membranes, delayed capillary refill. (Standard NCLEX)"),
            ("Constipation in children is often caused by:", ["Low fiber intake, inadequate fluids, holding stool", "Too much fiber", "Too much water", "Too much exercise"], "Constipation: low fiber, inadequate fluids, stool withholding (pain, fear). Increase fiber, fluids, fiber. (Standard NCLEX)")
        ],
        'gu': [
            ("What is the most common cause of UTI in children?", ["E. coli ascending from urethra", "Hematogenous spread", "Viral infection", "Fungal infection"], "E. coli (80-90%): gram-negative, ascending from perineum. Risk factors: uncircumcised males, vesicoureteral reflux, poor hygiene. (Standard NCLEX)"),
            ("A child with a UTI presents with:", ["Fever, dysuria, frequency, abdominal pain", "Hematuria only", "Constipation", "Respiratory symptoms"], "UTI in children: fever (especially <2 years), dysuria, frequency, urgency, abdominal/flank pain, enuresis. (Standard NCLEX)"),
            ("What is vesicoureteral reflux (VUR)?", ["Backward flow of urine from bladder to ureter", "Narrowing of the urethra", "Bladder muscle weakness", "Kidney stone"], "VUR: urine refluxes to ureter/kidney during voiding → recurrent UTI, scarring, hypertension. Grades I-V. (Standard NCLEX)"),
            ("Hypospadias is:", ["Urethral opening on the ventral surface of the penis", "Urethral opening on the dorsal surface", "Absence of the urethra", "Narrowing of the urethral meatus"], "Hypospadias: ventral placement of meatus. Often with chordee (ventral curvature). Surgical repair. (Standard NCLEX)"),
            ("Cryptorchidism refers to:", ["Undescended testicle(s)", "Enlarged testicle", "Twisted testicle", "Infection of the testicle"], "Cryptorchidism: testicle fails to descend into scrotum. Risk of torsion, malignancy if untreated. Orchiopexy by 12-18 months. (Standard NCLEX)"),
            ("What is phimosis?", ["Inability to retract the foreskin", "Inflammation of the foreskin", "Tightening of the scrotum", "Painful erection"], "Phimosis: foreskin cannot be retracted over glans. Normal in infants; pathological if causes problems after age 3. (Standard NCLEX)"),
            ("Enuresis is defined as:", ["Involuntary urination after expected age of control", "Painful urination", "Blood in urine", "Frequent urination"], "Enuresis: bedwetting after age 5 (nocturnal) or daytime wetting after age 4. Primary vs secondary. (Standard NCLEX)"),
            ("The first-line treatment for primary nocturnal enuresis is:", ["Behavioral interventions (bed alarm, fluid restriction)", "Surgery", "Antibiotics", "Catheterization"], "Bed alarm + positive reinforcement first-line. Medications (desmopressin) for short-term (camp, sleepovers). (Standard NCLEX)"),
            ("What is the most common renal disorder in children?", ["Nephrotic syndrome", "Glomerulonephritis", "Renal failure", "Polycystic kidney disease"], "Nephrotic syndrome: massive proteinuria, hypoalbuminemia, edema, hyperlipidemia. Minimal change disease most common. (Standard NCLEX)"),
            ("A child with nephrotic syndrome presents with:", ["Periorbital edema, generalized edema, foamy urine", "Flank pain and hematuria", "Dysuria and fever", "Hypertension and seizures"], "Nephrotic: edema (periorbital, abdominal, genital), weight gain, frothy urine (protein), fatigue. (Standard NCLEX)"),
            ("Wilms tumor (nephroblastoma) is:", ["Most common renal malignancy in children", "Benign tumor", "Adult kidney cancer", "Infectious"], "Wilms tumor: most common renal tumor in children. Don't palpate flank (risk of rupture). Surgery + chemo. (Quizlet Peds GU)"),
            ("A child with Wilms tumor should NOT have:", ["Abdominal palpation or percussion", "Blood pressure monitoring", "IV fluids", "Chest X-ray"], "Wilms tumor: avoid flank palpation (can rupture/disseminate). Abdominal mass found incidentally. (Quizlet Peds GU)"),
            ("Glomerulonephritis in children is often preceded by:", ["Strep throat or skin infection", "UTI", "Gastroenteritis", "Respiratory infection"], "Post-streptococcal glomerulonephritis: 1-3 weeks after strep infection. Hematuria, edema, hypertension. (Standard NCLEX)"),
            ("Acute glomerulonephritis presents with:", ["Hematuria, edema, hypertension, oliguria", "Dysuria, frequency", "Abdominal pain only", "Fever only"], "AGN: hematuria (cola-colored urine), periorbital edema, hypertension, decreased urine output. (Standard NCLEX)"),
            ("Hypospadias repair is typically done at:", ["6-18 months", "Birth", "5 years", "Adolescence"], "Hypospadias repair: 6-18 months before child is aware. Also corrects chordee if present. (Standard NCLEX)"),
            ("Undescended testes (cryptorchidism) should be surgically corrected by:", ["12-18 months", "5 years", "Adolescence", "Never"], "Orchiopexy by 12-18 months to prevent torsion, malignancy, infertility. (Standard NCLEX)"),
            ("Circumcision is contraindicated if:", ["Hypospadias or chordee is present", "Parents request it", "Baby is premature", "Baby is full term"], "Circumcision contraindicated with hypospadias, chordee, epispadias — foreskin needed for repair. (Standard NCLEX)"),
            ("Nephrotic syndrome is characterized by:", ["Massive proteinuria, hypoalbuminemia, edema, hyperlipidemia", "Hematuria, hypertension", "Dysuria, frequency", "Oliguria only"], "Nephrotic: 4 features — proteinuria (>3.5g/day), low albumin, edema, high lipids. (Standard NCLEX)"),
            ("Prednisone is used in nephrotic syndrome to:", ["Induce remission and reduce proteinuria", "Lower blood pressure", "Treat infection", "Remove fluid"], "Nephrotic: steroids (prednisone) induce remission in minimal change disease. (Standard NCLEX)"),
            ("Acute kidney injury in children can result from:", ["Dehydration, sepsis, nephrotoxic drugs", "Only congenital anomalies", "Only infection", "Only trauma"], "AKI in children: prerenal (dehydration), intrinsic (nephrotoxins, glomerulonephritis), postrenal (obstruction). (Standard NCLEX)"),
            ("A child with UTI and fever needs:", ["Prompt antibiotic treatment to prevent scarring", "Observation only", "Only hydration", "Surgery"], "Febrile UTI: treat promptly with antibiotics. Risk of renal scarring, especially with VUR. (Standard NCLEX)")
        ],
        'skin': [
            ("Atopic dermatitis (eczema) is characterized by:", ["Pruritic, dry, scaly patches in flexural areas", "Pustules and honey-colored crusts", "Linear lesions in a dermatomal pattern", "Raised wheals that are transient"], "Atopic dermatitis: chronic, relapsing, itchy; flexural in older children; cheeks/scalp in infants. (Standard NCLEX)"),
            ("What is the primary treatment for eczema?", ["Emollients and topical corticosteroids", "Oral antibiotics", "Antifungals", "Antihistamines only"], "Emollients (moisturizers) are cornerstone. Topical steroids for flares. Avoid triggers (soap, wool). (Standard NCLEX)"),
            ("Impetigo is caused by:", ["Staphylococcus aureus or Streptococcus", "Herpes simplex virus", "Candida", "Fungi"], "Impetigo: bacterial (staph/strep); honey-colored crusts around nose/mouth. Highly contagious. Topical/oral antibiotics. (Standard NCLEX)"),
            ("Contact with poison ivy causes:", ["Allergic contact dermatitis with linear vesicles", "Atopic dermatitis", "Bacterial infection", "Fungal infection"], "Poison ivy/oak/sumac: urushiol oil causes allergic reaction. Linear vesicles from plant contact. Wash skin immediately. (Standard NCLEX)"),
            ("What is the first-line treatment for head lice?", ["Permethrin 1% cream rinse", "Oral antibiotics", "Shaving the head", "Vinegar rinse only"], "Permethrin 1% (Nix): apply to damp hair, leave 10 min, rinse. Repeat in 7-10 days. Comb out nits. (Standard NCLEX)"),
            ("Scabies is caused by:", ["Mite Sarcoptes scabiei", "Lice", "Fungus", "Bacteria"], "Scabies: mite burrows into skin → intensely itchy, especially at night. Linear burrows, papules. Permethrin cream. (Standard NCLEX)"),
            ("A child with a burn covering 15% of body surface area:", ["Requires hospitalization", "Can be treated at home", "Is minor", "Needs skin graft"], "Burns >10% BSA in children require hospitalization. Assess depth (partial vs full thickness). (Standard NCLEX)"),
            ("What is the Rule of Nines in children?", ["Modified to account for larger head and smaller legs", "Same as adults", "Not applicable to children", "Uses palm method only"], "Pediatric Rule of Nines: head=18%, each leg=14%, trunk=36%. Palm method for small burns. (Standard NCLEX)"),
            ("What is the most important intervention for a child with a burn?", ["Stop the burning process and ensure airway", "Apply ice", "Pop blisters", "Apply butter"], "Stop burning (remove clothing, cool water), ABCs, assess extent/depth. Do NOT apply ice or butter. (Standard NCLEX)"),
            ("A child with a wound that has honey-colored crusts most likely has:", ["Impetigo", "Eczema", "Chickenpox", "Measles"], "Honey-colored crusts = impetigo (staph/strep). Highly contagious. Treat with antibiotics. (Standard NCLEX)"),
            ("Diaper rash (candidal) presents with:", ["Bright red rash with satellite lesions in skin folds", "Honey-colored crusts", "Dry scaly patches", "Vesicles in crops"], "Candida diaper rash: bright red, satellite lesions. Treat with antifungal (nystatin). (Standard NCLEX)"),
            ("Atopic dermatitis (eczema) is associated with:", ["Asthma, allergic rhinitis (atopic triad)", "Diabetes", "Heart disease", "Cancer"], "Atopic triad: eczema, asthma, allergic rhinitis. Family history common. (Standard NCLEX)"),
            ("For eczema, emollients should be applied:", ["Immediately after bathing while skin is damp", "Only when skin is dry", "Once per week", "Never"], "Emollients: apply within 3 minutes of bathing on damp skin. Prevents water loss. (Standard NCLEX)"),
            ("Impetigo is highly contagious. Children should:", ["Stay home until 24h after antibiotics started", "Go to school immediately", "Never go to school", "Stay home for 2 weeks"], "Impetigo: exclude from school until 24h after antibiotics. Cover lesions. (Standard NCLEX)"),
            ("Burn depth: partial thickness (2nd degree) involves:", ["Epidermis and part of dermis", "Epidermis only", "All skin layers including subcutaneous", "Only the top layer of dermis"], "Partial thickness: epidermis + dermis. Blisters, pink/red, painful. (Standard NCLEX)"),
            ("Full thickness burns (3rd degree) appear:", ["White, leathery, painless", "Red and blistered", "Pink and painful", "Only superficial"], "Full thickness: white/charred, leathery, painless (nerve destruction). (Standard NCLEX)"),
            ("For a burn, cool the area with:", ["Cool water for 10-20 minutes", "Ice", "Butter", "Oil"], "Cool water (not ice) for 10-20 min. Ice causes more tissue damage. (Standard NCLEX)"),
            ("Sunburn prevention for children includes:", ["Sunscreen SPF 30+, hats, protective clothing", "No sunscreen needed", "Only sunscreen on face", "Sunscreen only at beach"], "Sun protection: SPF 30+ sunscreen, reapply every 2h, hats, shade. (Standard NCLEX)"),
            ("Seborrheic dermatitis (cradle cap) in infants:", ["Scaly, greasy patches on scalp", "Pustules", "Vesicles", "Linear rash"], "Cradle cap: greasy yellow scales on scalp. Treat with mineral oil, brush gently. (Standard NCLEX)")
        ],
        'communicable': [
            ("What is the incubation period for measles?", ["7-21 days", "1-3 days", "14-21 days", "3-7 days"], "Measles (rubeola): incubation 7-21 days (average 10-14). Prodrome: fever, cough, coryza, conjunctivitis. (Standard NCLEX)"),
            ("The characteristic rash of measles starts:", ["On the face and spreads downward", "On the trunk and spreads outward", "On the palms and soles", "Only on the extremities"], "Measles: maculopapular rash starts on face/hairline → downward over 3 days. Koplik spots in mouth. (Standard NCLEX)"),
            ("Chickenpox is caused by:", ["Varicella-zoster virus", "Measles virus", "Rubella virus", "Streptococcus"], "Varicella: highly contagious; crops of vesicles → crusts. Infectious 1-2 days before rash until all lesions crusted. (Standard NCLEX)"),
            ("A child with chickenpox should be isolated until:", ["All lesions have crusted over", "Fever resolves", "Rash appears", "7 days from onset"], "Varicella isolation: until all lesions are crusted (usually 5-7 days after rash onset). (Standard NCLEX)"),
            ("What is the classic sign of roseola?", ["High fever for 3-5 days followed by rash", "Koplik spots", "Strawberry tongue", "Bark-like cough"], "Roseola (HHV-6): high fever 3-5 days, then defervescense → maculopapular rash on trunk. Common in infants. (Standard NCLEX)"),
            ("Fifth disease (erythema infectiosum) is caused by:", ["Parvovirus B19", "Coxsackievirus", "Rubella virus", "Varicella-zoster"], "Fifth disease: slapped-cheek rash, lacy body rash. Parvovirus B19. Contagious before rash; no isolation needed once rash appears. (Standard NCLEX)"),
            ("A child with mumps presents with:", ["Parotid gland swelling and fever", "Rash and cough", "Sore throat and rash", "Joint pain and fever"], "Mumps: parotitis (unilateral or bilateral), fever, malaise. Orchitis in postpubertal males. (Standard NCLEX)"),
            ("What is the MMR vaccine schedule?", ["12-15 months and 4-6 years", "Birth and 6 months", "6 months and 12 months", "Only at 12 months"], "MMR: first dose 12-15 months, second 4-6 years. Measles, Mumps, Rubella. (Standard NCLEX)"),
            ("What is the most concerning complication of mumps in adolescent males?", ["Orchitis leading to sterility", "Pneumonia", "Meningitis", "Arthritis"], "Mumps orchitis: testicular inflammation; may cause atrophy. Sterility is rare but concerning. (Standard NCLEX)"),
            ("Hand-foot-and-mouth disease is caused by:", ["Coxsackievirus A16 or Enterovirus 71", "Herpes simplex virus", "Varicella-zoster", "Measles virus"], "HFMD: vesicles on hands, feet, mouth (herpangina). Coxsackievirus. Supportive care. (Standard NCLEX)"),
            ("Measles (rubeola) is prevented by:", ["MMR vaccine at 12-15 months and 4-6 years", "Varicella vaccine", "Only good hygiene", "Antibiotics"], "Measles: MMR vaccine. Highly contagious. Koplik spots (white spots in mouth) are pathognomonic. (Standard NCLEX)"),
            ("Rubella (German measles) is concerning in:", ["Pregnant women (congenital rubella syndrome)", "School-age children", "Adolescents", "Elderly"], "Rubella in pregnancy: teratogenic → deafness, cataracts, heart defects. (Standard NCLEX)"),
            ("Pertussis (whooping cough) presents with:", ["Paroxysmal cough with whoop, post-tussive vomiting", "Barky cough", "Productive cough", "Dry cough only"], "Pertussis: paroxysmal cough, inspiratory whoop, post-tussive emesis. Macrolide antibiotics. (Standard NCLEX)"),
            ("Scarlet fever is caused by:", ["Group A Streptococcus (erythrogenic toxin)", "Staphylococcus", "Virus", "Fungus"], "Scarlet fever: strep + erythrogenic toxin → sandpaper rash, strawberry tongue, Pastia's lines. (Standard NCLEX)"),
            ("Scarlet fever rash is described as:", ["Sandpaper-like, starts on trunk", "Vesicular", "Pustular", "Maculopapular only"], "Scarlet fever: sandpaper rash, starts on trunk/neck, spares face, Pastia's lines (accentuated in creases). (Standard NCLEX)"),
            ("Varicella vaccine is given at:", ["12-15 months and 4-6 years", "Birth and 6 months", "Only at 12 months", "Not recommended"], "Varicella (chickenpox): 2 doses — 12-15 months and 4-6 years. (Standard NCLEX)"),
            ("A child with pertussis should be isolated for:", ["5 days after starting antibiotics", "Until cough resolves", "7 days from onset", "14 days"], "Pertussis: isolate 5 days after antibiotics started (erythromycin/azithromycin). (Standard NCLEX)"),
            ("Rubeola (measles) prodrome includes:", ["Cough, coryza, conjunctivitis, Koplik spots", "Rash only", "Fever only", "Sore throat"], "Measles prodrome: 3 C's (cough, coryza, conjunctivitis) + Koplik spots. (Standard NCLEX)"),
            ("Mumps complications include:", ["Orchitis, meningitis, pancreatitis", "Only rash", "Only fever", "No complications"], "Mumps: parotitis, orchitis (postpubertal males), aseptic meningitis, pancreatitis. (Standard NCLEX)")
        ],
        'default': [
            ("When caring for pediatric patients, the nurse should:", ["Include family in care decisions and use age-appropriate communication", "Treat all children the same as adults", "Exclude parents during procedures", "Focus only on the child's medical diagnosis"], "Family-centered care is essential. Include caregivers, use age-appropriate language, consider developmental needs. (Standard NCLEX)"),
            ("Pain assessment in non-verbal children uses:", ["FLACC scale (Face, Legs, Activity, Cry, Consolability)", "Numeric rating scale (0-10)", "Wong-Baker FACES (if verbal)", "Asking the child to describe pain"], "FLACC is validated for infants/young children. FACES for 3+ years. Numeric for 8+ years. (Standard NCLEX)"),
            ("The most reliable indicator of pain in infants is:", ["Behavioral changes (crying, facial expression)", "Vital signs", "Self-report", "Parental report"], "Infants: observe behavioral cues (facial expression, body posture, cry quality). FLACC scale. (Standard NCLEX)"),
            ("Which vital sign changes first in a deteriorating pediatric patient?", ["Respiratory rate", "Blood pressure", "Heart rate", "Temperature"], "Respiratory rate changes first in children (compensatory mechanism). BP is a late sign of decompensation. (Standard NCLEX)"),
            ("What is the correct pediatric CPR ratio?", ["30:2 for single rescuer, 15:2 for two rescuers", "15:1", "30:1", "Same as adults"], "Infant/child CPR: 30:2 single, 15:2 two rescuers. Compression depth: 1/3 chest depth. (Standard NCLEX)"),
            ("The leading cause of death in children over 1 year is:", ["Unintentional injuries", "Cancer", "Congenital anomalies", "Infection"], "Unintentional injuries (drowning, MVAs, burns) are #1 cause of death in children >1 year. (Standard NCLEX)"),
            ("When should car seats face rearward?", ["Until age 2 or until child exceeds weight/height limits", "Until age 1", "Until age 4", "Until age 8"], "AAP: rear-facing until age 2 or until exceeding car seat limits. Then forward-facing with harness. (Standard NCLEX)"),
            ("What is the recommended daily water intake for a 5-year-old?", ["Approximately 5 cups (40 oz)", "1 cup", "10 cups", "Unlimited"], "Children 4-8 years: ~5 cups/day fluids. More with activity/heat. (Standard NCLEX)"),
            ("Which is the best way to prevent childhood obesity?", ["Healthy diet and regular physical activity", "Weighing child weekly", "Restricting all fats", "Skipping meals"], "Prevention: balanced diet, 60 min/day physical activity, limit screen time, family meals. (Standard NCLEX)"),
            ("A child who is choking and cannot cough or speak needs:", ["Abdominal thrusts (Heimlich)", "Back blows only", "CPR", "Nothing — wait"], "Choking: abdominal thrusts for conscious child >1 year. For infant: 5 back blows + 5 chest thrusts. (Standard NCLEX)"),
            ("The safest car seat position for infants is:", ["Rear-facing in the back seat", "Front-facing in the back seat", "Rear-facing in the front seat", "Any position"], "Infants: rear-facing until age 2 or until exceeding car seat limits. Back seat only. (Standard NCLEX)"),
            ("When should children transition to a booster seat?", ["When they outgrow forward-facing harness (typically 4-8 years)", "At age 2", "At age 12", "Never"], "Booster: when child exceeds forward-facing harness limits (~40-65 lbs). Until seat belt fits properly (usually 8-12 years). (Standard NCLEX)"),
            ("Drowning prevention includes:", ["Fencing pools, close supervision, CPR training", "Only supervision", "Only fencing", "Swim lessons only"], "Drowning prevention: 4-sided fencing, constant supervision, CPR training, water safety education. (Standard NCLEX)"),
            ("Lead poisoning prevention includes:", ["Hand washing, removing paint chips, iron-rich diet", "Only screening", "Only supplements", "Nothing"], "Lead: hand washing, wet mopping, removing peeling paint, iron/calcium-rich diet. (Standard NCLEX)"),
            ("Poison prevention: keep medications:", ["Locked up and in original containers", "On kitchen counter", "In purse", "In easy reach"], "Poison prevention: locked cabinets, original containers, childproof caps, poison control number posted. (Standard NCLEX)"),
            ("The leading cause of death in children 1-14 years is:", ["Unintentional injuries", "Cancer", "Congenital anomalies", "Infection"], "Unintentional injuries (MVAs, drowning, burns, poisoning) are #1 cause of death in children. (Standard NCLEX)"),
            ("Bike helmet use should begin:", ["When child starts riding a bike", "At age 5", "At age 10", "Never needed"], "Bike helmet: required for all ages. Proper fit: level on head, snug straps. (Standard NCLEX)"),
            ("Stranger danger education should be:", ["Age-appropriate, focus on trusted adults", "Scary and detailed", "Not discussed", "Only for girls"], "Stranger safety: teach trusted adults, 'no, go, tell', never go with strangers. (Standard NCLEX)"),
            ("Sun exposure prevention for infants:", ["Avoid direct sun, hats, light clothing", "Sunscreen only", "Nothing needed", "Sunglasses only"], "Infants <6 months: avoid direct sun. Use hats, lightweight clothing, shade. (Standard NCLEX)")
        ],
        'adaptation': [
            ("What is the primary goal of family-centered care?", ["Include families as partners in care decisions", "Minimize family involvement", "Focus only on the child", "Limit visiting hours"], "Family-centered care: families are experts on their child; include in care planning, teaching, decisions. (Standard NCLEX)"),
            ("A child undergoing a painful procedure should:", ["Receive age-appropriate preparation and pain management", "Not be told anything to avoid fear", "Be restrained without explanation", "Be told it won't hurt"], "Preparation reduces anxiety. Use age-appropriate terms, demonstrate, allow choices. Provide pain relief. (Standard NCLEX)"),
            ("Which is a therapeutic play activity for hospitalized children?", ["Medical play with dolls and equipment", "Watching TV", "Reading chapter books", "Playing video games"], "Medical play helps children express feelings, understand procedures, gain mastery. (Standard NCLEX)"),
            ("The best way to explain hospitalization to a 6-year-old is:", ["Use simple terms, pictures, and allow questions", "Give detailed medical explanation", "Not explain anything", "Have parents explain"], "School-age: concrete explanations, pictures, tours, medical play. Address concerns directly. (Standard NCLEX)"),
            ("A hospitalized child's favorite blanket or toy should be:", ["Kept with the child for security", "Taken away to prevent loss", "Placed in storage", "Given to another child"], "Transitional objects provide comfort and security during hospitalization. (Standard NCLEX)"),
            ("Which intervention helps reduce a child's anxiety before surgery?", ["Preoperative tour and preparation", "Sedation before arrival", "Not telling the child", "Having parents leave"], "Preparation: tour, dolls, age-appropriate explanation, parental presence. Reduces postoperative anxiety. (Standard NCLEX)"),
            ("What is regression in hospitalized children?", ["Returning to earlier developmental behaviors", "Progressing faster than expected", "Learning new skills", "Behaving perfectly"], "Regression (bedwetting, thumbsucking) is normal coping. Reassure parents it's temporary. (Standard NCLEX)"),
            ("Which age group is most concerned about body image during hospitalization?", ["Adolescents", "Infants", "Toddlers", "Preschoolers"], "Adolescents: very concerned about appearance, privacy, peer relationships. Respect modesty. (Standard NCLEX)"),
            ("What is the best approach to administering medications to a toddler?", ["Use honest, simple explanations and allow choices", "Sneak medications in food", "Force the child to swallow", "Threaten punishment"], "Honesty builds trust. Offer choices (cup vs spoon). Use praise. (Standard NCLEX)"),
            ("A 4-year-old scheduled for surgery asks 'Will it hurt?' The nurse should:", ["Answer honestly and explain pain relief", "Say 'No, it won't hurt'", "Ignore the question", "Say 'Maybe'"], "Honest, age-appropriate answers reduce anxiety. Explain pain management. (Standard NCLEX)"),
            ("Child life specialists help hospitalized children by:", ["Providing age-appropriate preparation, play, and emotional support", "Administering medications", "Performing procedures", "Making discharge plans"], "Child life: therapeutic play, preparation, coping strategies, emotional support. (Standard NCLEX)"),
            ("Parental presence during procedures:", ["Should be encouraged when possible", "Is never allowed", "Only for infants", "Only for adolescents"], "Parental presence: reduces child anxiety, provides comfort. Exceptions: sterile procedures, parental preference. (Standard NCLEX)"),
            ("A 3-year-old undergoing venipuncture should be:", ["Held by parent, distraction, reward afterward", "Restrained by multiple staff", "Told it won't hurt", "Left alone"], "Toddlers: parental holding, distraction (bubbles, songs), praise. Never lie about pain. (Standard NCLEX)"),
            ("For a school-age child, the best preparation for surgery includes:", ["Tour of OR, seeing equipment, honest answers", "No preparation", "Detailed medical lecture", "Only telling parents"], "School-age: concrete info, tours, medical play, honest answers. (Standard NCLEX)"),
            ("Adolescents in the hospital need:", ["Privacy, control, peer interaction, involvement in decisions", "To be treated like children", "No privacy", "Parental control"], "Adolescents: privacy, autonomy, peer contact, decision-making involvement. (Standard NCLEX)"),
            ("A child expresses fear of needles. The nurse should:", ["Validate feelings and provide coping strategies", "Tell them not to be afraid", "Ignore the fear", "Punish for crying"], "Acknowledge fear, offer coping (deep breathing, counting), distraction. (Standard NCLEX)"),
            ("Separation anxiety is most intense in:", ["Toddlers and preschoolers", "Infants", "School-age", "Adolescents"], "Separation anxiety peaks: 10-18 months, remains significant in toddlers/preschoolers. (Standard NCLEX)"),
            ("Therapeutic play allows children to:", ["Express feelings, gain mastery, reduce anxiety", "Only have fun", "Avoid procedures", "Distract from learning"], "Therapeutic play: express emotions, understand experiences, coping. (Standard NCLEX)"),
            ("When a child asks 'Am I going to die?', the nurse should:", ["Answer honestly and assess understanding", "Say 'No, of course not'", "Ignore the question", "Say 'Maybe'"], "Answer honestly, assess fears, provide reassurance. (Standard NCLEX)"),
            ("Family-centered care recognizes that:", ["Families are the constant in a child's life", "Nurses know best", "Doctors make all decisions", "Only medical staff matter"], "Family-centered: families are partners; respect their expertise on their child. (Standard NCLEX)")
        ],
        'emotional': [
            ("What is the most common psychiatric disorder in children?", ["ADHD (Attention-Deficit/Hyperactivity Disorder)", "Schizophrenia", "Bipolar disorder", "Eating disorders"], "ADHD is the most common psychiatric disorder in children (5-10%). Characterized by inattention, hyperactivity, impulsivity. (Standard NCLEX)"),
            ("A child with autism spectrum disorder typically has difficulty with:", ["Social communication and interaction", "Physical growth", "Vision", "Hearing"], "ASD: deficits in social communication, restricted interests, repetitive behaviors. Spectrum varies widely. (Standard NCLEX)"),
            ("What is a key feature of ADHD?", ["Inattention, hyperactivity, and impulsivity", "Social withdrawal", "Hallucinations", "Seizures"], "ADHD: inattention, hyperactivity, impulsivity interfering with function. Diagnosed by age 12. (Standard NCLEX)"),
            ("Separation anxiety disorder is characterized by:", ["Excessive fear of separation from attachment figures", "Fear of specific objects", "Panic attacks", "Social withdrawal"], "Separation anxiety: excessive fear/anxiety about separation causing distress. Common in school refusal. (Standard NCLEX)"),
            ("What is the first-line treatment for ADHD?", ["Behavioral therapy and/or stimulant medication", "Antidepressants only", "Antipsychotics", "No treatment needed"], "ADHD: behavioral interventions first; stimulants (methylphenidate) often used. Multimodal approach. (Standard NCLEX)"),
            ("A child with conduct disorder exhibits:", ["Aggressive behavior violating others' rights", "Excessive worry", "Social isolation", "Inattention"], "Conduct disorder: aggression, property destruction, deception, rule violation. Risk for antisocial personality. (Standard NCLEX)"),
            ("What is the primary treatment for depression in children?", ["Cognitive-behavioral therapy and/or antidepressants", "Hospitalization only", "Punishment", "No treatment"], "Pediatric depression: CBT, interpersonal therapy, SSRIs (fluoxetine FDA-approved for children). (Standard NCLEX)"),
            ("What should the nurse assess for in a child who has experienced trauma?", ["PTSD symptoms (flashbacks, avoidance, hypervigilance)", "Growth delay only", "Fever", "Rash"], "Trauma: assess for PTSD, depression, anxiety. Provide supportive environment, referral. (Standard NCLEX)"),
            ("A child who self-harms should be:", ["Assessed for suicide risk and referred to mental health", "Punished", "Ignored", "Told to stop"], "Self-harm: assess intent, frequency, lethality. Always assess suicide risk. Mental health referral. (Standard NCLEX)"),
            ("Which is a sign of childhood depression?", ["Loss of interest in activities and changes in sleep/appetite", "Increased energy", "Improved grades", "Social engagement"], "Depression in children: irritability, loss of interest, sleep/appetite changes, guilt, thoughts of death. (Standard NCLEX)"),
            ("Children with ADHD often have difficulty with:", ["Sustaining attention, following instructions, organizing tasks", "Reading only", "Math only", "Physical activities"], "ADHD: inattention, hyperactivity, impulsivity. Affects academic, social, family functioning. (Standard NCLEX)"),
            ("Stimulant medications for ADHD work by:", ["Increasing dopamine and norepinephrine in the brain", "Sedating the child", "Treating anxiety", "Improving appetite"], "Stimulants (methylphenidate, amphetamine): increase dopamine/NE in prefrontal cortex. (Standard NCLEX)"),
            ("A child with autism spectrum disorder benefits from:", ["Structured routines, visual supports, early intervention", "Unpredictable environments", "No intervention", "Punishment"], "ASD: structured routines, visual schedules, early intensive intervention (ABA). (Standard NCLEX)"),
            ("Oppositional defiant disorder (ODD) is characterized by:", ["Angry/irritable mood, argumentative, defiant", "Aggression toward animals", "Lying and stealing", "Fire setting"], "ODD: negative, defiant, hostile toward authority. Often comorbid with ADHD. (Standard NCLEX)"),
            ("School refusal in children is often due to:", ["Anxiety, separation issues, bullying", "Laziness", "Lack of intelligence", "Bad parenting"], "School refusal: anxiety-based. Assess for anxiety disorders, separation anxiety, bullying. (Standard NCLEX)"),
            ("Bullying in school-age children can lead to:", ["Depression, anxiety, school avoidance, suicide risk", "Improved self-esteem", "Better grades", "No effects"], "Bullying: psychological effects — depression, anxiety, school refusal, suicidal ideation. (Standard NCLEX)"),
            ("A child who has experienced sexual abuse may:", ["Show sexualized behaviors, nightmares, regression", "Only have physical signs", "Show no symptoms", "Only act out"], "Child sexual abuse: behavioral (sexualized play, nightmares, regression), physical (STIs, genital injury). (Standard NCLEX)"),
            ("The first priority when a child discloses abuse is:", ["Ensure safety and report to CPS", "Confront the suspected abuser", "Keep it secret", "Blame the child"], "Child abuse: ensure safety, mandatory reporting to CPS. Support the child. (Standard NCLEX)"),
            ("Anorexia nervosa in adolescents is characterized by:", ["Restriction of food intake, intense fear of weight gain, distorted body image", "Binge eating only", "Purging only", "Normal eating"], "Anorexia: restriction, fear of gaining weight, distorted body image, low BMI. (Standard NCLEX)")
        ]
    }
    
    # Select based on topic keywords - improved matching
    bank = supplemental_bank.get('default', [])
    
    # Map chapter keywords to supplemental bank keys
    keyword_map = {
        'growth': ['growth', 'development', 'nutrition', 'overview'],
        'infant': ['infant', 'newborn', 'neonatal'],
        'toddler': ['toddler'],
        'preschool': ['preschool'],
        'school': ['school age', 'school-age'],
        'adolescent': ['adolescent', 'teen'],
        'hospitalization': ['hospital', 'experience'],
        'adaptation': ['adaptation', 'adaptations'],
        'respiratory': ['respiratory', 'croup', 'asthma', 'bronchiolitis', 'breathing'],
        'cardiovascular': ['cardiovascular', 'cv', 'heart', 'cardiac'],
        'gi': ['gastrointestinal', 'gi', 'abdomen', 'stomach', 'bowel', 'digestive'],
        'gu': ['genitourinary', 'gu', 'urinary', 'kidney', 'bladder', 'genital'],
        'skin': ['skin', 'dermatologic', 'rash', 'eczema', 'condition'],
        'communicable': ['communicable', 'infection', 'disease', 'measles', 'chicken', 'bioterror'],
        'musculoskeletal': ['musculoskeletal', 'bone', 'fracture', 'joint', 'orthopedic'],
        'neuro': ['neuro', 'sensory', 'seizure', 'neurological', 'sensory'],
        'lymph': ['lymph', 'blood', 'anemia', 'leukemia', 'hematologic'],
        'emotional': ['emotional', 'behavioral', 'behavior', 'psychiatric', 'mental'],
        'default': []
    }
    
    for key, keywords in keyword_map.items():
        if any(kw in topic for kw in keywords):
            if key in supplemental_bank:
                bank = supplemental_bank[key]
                break
    
    # Generate questions
    for i in range(min(count, len(bank))):
        q_text, options, rationale = bank[i]
        random.shuffle(options)
        correct = options[0]
        random.shuffle(options)
        answer = [options.index(correct)]
        
        questions.append({
            'id': f'supp_{i}',
            'slide': 99,
            'question': q_text,
            'options': options,
            'answer': answer,
            'rationale': rationale
        })
    
    return questions

def generate_exam(content_file, min_questions=40):
    """Generate a complete exam from a content file"""
    text = content_file.read_text()
    
    # Extract title
    title_match = re.search(r'Chapter \d+[:\s]+([^\n]+?)(?:Copyright|$)', text)
    if title_match:
        raw_title = title_match.group(1).strip()
        title = f"Pediatrics: {raw_title}"
    else:
        title = f"Pediatrics: {content_file.stem.replace('_', ' ').replace('Copy', '').replace('-', ' ').strip()}"
    
    # Clean title
    title = re.sub(r'\s+', ' ', title).strip()
    
    # Extract slides and concepts
    slides = extract_slides(text)
    concepts = find_concepts(slides)
    
    # Generate questions from lecture content
    questions = []
    used_slides = set()
    
    for concept in concepts:
        if len(questions) >= min_questions:
            break
        ctype, key, slide_num, context = concept
        
        if slide_num in used_slides and len(questions) > min_questions // 2:
            continue
        
        q = generate_question(ctype, key, slide_num, context, title)
        if q and len(q['question']) > 20:
            questions.append(q)
            used_slides.add(slide_num)
    
    # Supplement with standard pediatric content if we need more questions
    if len(questions) < min_questions:
        supplemental = get_supplemental_questions(title, min_questions - len(questions))
        questions.extend(supplemental)
    
    # Add some NGN questions if we have enough MCQs
    if len(questions) >= 25:
        # Add a matrix question
        questions.append({
            'id': 'q_matrix_development',
            'type': 'matrix',
            'slide': 15,
            'question': 'Match each developmental theorist with their key concept.',
            'columns': ['Erikson', 'Piaget', 'Kohlberg'],
            'rows': [
                {'text': 'Psychosocial stages (Trust vs Mistrust, etc.)', 'correct_col_idx': 0},
                {'text': 'Cognitive stages (Sensorimotor, Preoperational, etc.)', 'correct_col_idx': 1},
                {'text': 'Moral development levels (Preconventional, etc.)', 'correct_col_idx': 2}
            ],
            'rationale': 'Erikson: psychosocial crises. Piaget: cognitive development. Kohlberg: moral reasoning. (Slide 15-20)'
        })
        
        # Add a drag-drop cloze
        questions.append({
            'id': 'q_cloze_peds',
            'type': 'drag_drop_cloze',
            'slide': 10,
            'question': 'Complete the statement about pediatric care.',
            'cloze_text': 'Pediatric nursing requires [[BLANK1]] care and consideration of [[BLANK2]] in all interactions.',
            'drag_options': ['age-appropriate', 'family', 'adult', 'isolation', 'medication'],
            'answer': {'BLANK1': 'age-appropriate', 'BLANK2': 'family'},
            'rationale': 'Family-centered, age-appropriate care is fundamental in pediatrics. (Slide 10)'
        })
        
        # Add a highlight question
        questions.append({
            'id': 'q_highlight_normal',
            'type': 'highlight',
            'slide': 25,
            'question': 'Click on the normal developmental findings.',
            'highlight_text': 'The child demonstrates age-appropriate milestones. Growth follows expected percentiles. The child engages with caregivers appropriately.',
            'highlight_options': ['age-appropriate milestones', 'Growth follows expected percentiles', 'engages with caregivers appropriately'],
            'answer': ['age-appropriate milestones', 'Growth follows expected percentiles', 'engages with caregivers appropriately'],
            'rationale': 'All are normal pediatric findings. (Slide 25)'
        })
        
        # Add a bow-tie
        questions.append({
            'id': 'q_bowtie',
            'type': 'bowtie',
            'slide': 30,
            'question': 'A child presents with concerning developmental findings.',
            'left_actions': {
                'options': ['Perform developmental screening', 'Obtain detailed history', 'Ignore parental concerns', 'Delay assessment'],
                'answer': ['Perform developmental screening', 'Obtain detailed history']
            },
            'center_condition': {
                'options': ['Possible developmental concern requiring evaluation', 'Normal variation, no action needed', 'Immediate emergency'],
                'answer': 'Possible developmental concern requiring evaluation'
            },
            'right_monitor': {
                'options': ['Follow-up assessments', 'Parent education', 'No follow-up needed'],
                'answer': ['Follow-up assessments', 'Parent education']
            },
            'rationale': 'Early identification and family support are key. (Slide 30)'
        })
    
    # Create exam ID from filename
    exam_id = f"peds_{content_file.stem.lower().replace(' ', '_').replace('-', '_').replace('.', '_').replace('(', '_').replace(')', '_')[:40]}"
    exam_id = re.sub(r'_+', '_', exam_id)
    
    return {
        'id': exam_id,
        'name': title,
        'type': 'exam',
        'scenarios': questions
    }

# Main execution
if __name__ == '__main__':
    peds_dir = Path("raw_data/peds")
    # Only process primary files (skip Copy variants)
    files = sorted([f for f in peds_dir.glob("*.txt") 
                   if 'copy' not in f.stem.lower() and 'copy' not in f.name.lower()])
    
    print(f"Generating exams from {len(files)} peds chapters (primary files only)...\n")
    
    for f in files:
        try:
            exam = generate_exam(f, min_questions=40)
            out_file = f"exam_{exam['id']}.json"
            
            with open(out_file, 'w') as fp:
                json.dump(exam, fp, indent=2)
            
            print(f"✓ {out_file}: {len(exam['scenarios'])} questions - {exam['name'][:50]}")
        except Exception as e:
            print(f"✗ {f.name}: {e}")
    
    print("\nDone!")
