#!/usr/bin/env python3
"""
Generate peds chapter exam questions from raw slide content.
Usage: python generate_peds_exam.py <chapter_file> <exam_id> <exam_name>
"""
import sys, re, json, random

def extract_slides(content):
    slides = []
    current = ""
    for line in content.split('\n'):
        if line.startswith('=== SLIDE'):
            if current:
                slides.append(current.strip())
            current = ""
        else:
            current += line + " "
    if current:
        slides.append(current.strip())
    return slides

def generate_questions(slides, chapter_num, chapter_title, count=25):
    questions = []
    facts = []
    
    # Extract key facts from slides
    for s in slides:
        # Find sentences with key information
        sents = re.split(r'[.!?]+', s)
        for sent in sents:
            sent = sent.strip()
            if len(sent) > 40 and any(kw in sent.lower() for kw in ['is', 'are', 'should', 'must', 'can', 'causes', 'prevents', 'indicates', 'characterized', 'includes']):
                facts.append(sent)
    
    # Generate questions from facts (simplified - in real use would be more sophisticated)
    used = set()
    for i, fact in enumerate(facts[:count*3]):  # Try to get enough unique facts
        if len(questions) >= count:
            break
        if fact in used or len(fact) < 50:
            continue
        used.add(fact)
        
        # Create a simple question from the fact
        # This is a placeholder - real generation would be more nuanced
        qid = f"ch{chapter_num}_q{len(questions)+1}"
        
        # Generate plausible options (simplified)
        question = f"According to Chapter {chapter_num} content, {fact[:80].lower()}?"
        options = [
            fact[:100],  # Correct (simplified)
            "This is not typically associated with this concept",
            "This only applies to adult patients",
            "This is contraindicated in pediatric care"
        ]
        random.shuffle(options)
        correct_idx = options.index(fact[:100])
        
        questions.append({
            "id": qid,
            "slide": 999,
            "question": question,
            "options": options,
            "answer": options[correct_idx],
            "rationale": f"{fact}. (Chapter {chapter_num}: {chapter_title})"
        })
    
    return questions

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python generate_peds_exam.py <chapter_file> <exam_id> <exam_name>")
        sys.exit(1)
    
    with open(sys.argv[1], 'r') as f:
        content = f.read()
    
    slides = extract_slides(content)
    chapter_num = sys.argv[1].split('_')[1] if '_' in sys.argv[1] else "15"
    
    qs = generate_questions(slides, chapter_num, sys.argv[3], 25)
    print(f"// {sys.argv[3]}")
    print(f"window.{sys.argv[2]} = {json.dumps(qs, indent=2)};")
