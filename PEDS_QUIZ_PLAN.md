# PEDS Multi-Chapter Quiz Plan

**Status:** Draft for Review | **Date:** 2026-04-13 | **Owner:** AI Assistant

---

## Executive Summary

Replace 19 single-chapter PEDS quizzes (ch15–ch33, ~25 Q each) with **2 comprehensive multi-chapter exams**:

| Exam | Chapters | Scope | Estimated Q | Rationale Types | Status |
|------|----------|-------|-------------|-----------------|--------|
| **PEDS Exam 1** | 15–19 | Growth/Dev, Nutrition, Family, Hospitalization, Milestones | 50–60 | Full (why correct + why incorrect) | Draft |
| **PEDS Exam 2** | 20–24 | Adolescence, Neuro/Sensory, Musculoskeletal, Procedures | 50–60 | Full (why correct + why incorrect) | Draft |

**Key Principles:**
- **No placeholders** — every question grounded in Quizlet/Studocu topics and raw lecture content
- **ATI/NCLEX style** — MCQ, SATA, priority, teaching, delegation, NGN types (matrix, bowtie, etc.)
- **Thorough rationales** — explain WHY correct answer is right AND WHY each distractor is wrong
- **Compact scope** — ~50-60 Q per exam (not 200+). Covers all tested topics via representative sampling.

---

## Current State

| Item | Count | Notes |
|------|-------|-------|
| Single-chapter quiz JSONs | 19 | ch15–ch33 in `content/exams/peds-*-quiz.json` |
| Manifest entries | 19 | All registered; single-chapter format |
| Raw lecture files | 10 | CH_15 through Chapter_024 (ch20–24+) |
| Study guides | 2 | peds-ch15-19 (21.6k), peds-ch20-24 (16.1k) — synthesized |

**Decision:** Keep single-chapter JSONs for reference; create new multi-chapter exams. Manifest can be updated to point to new exams (or keep both).

---

## Quizlet/Studocu Research Summary

### PEDS Exam 1 (Ch15-19) — Core Topics

From Quizlet sets: `ch-15-19-peds-peds-1-test`, `peds-quiz-1-ch-15-19-the-family-infancy-childhood...`

**Growth & Development:**
- Cephalocaudal / Proximodistal patterns
- Growth: doubles by 6mo, triples by 12mo; teeth (~6 by 1yr)
- Higher metabolic rate per kg

**Developmental Theories (heavy emphasis):**
- Erikson: Trust→Identity (all 5 stages)
- Piaget: Sensorimotor→Concrete Operational
- Kohlberg: Preconventional
- Denver DDST (not IQ test)

**Family Structures:**
- Nuclear, extended, blended (step-families), single-parent, latchkey

**Play Types:**
- Parallel (toddlers), Associative/Cooperative (preschool), Competitive (school-age)

**Age-Specific:**
- Milestones: head control 2-3mo, pincer 9-12mo, fontanelle closure
- Nutrition: solids 4-6mo, iron cereal, no honey <1yr
- Colic, time-out (1 min/yr), centering (preoperational)
- Oral health: 20 teeth, brush, fluoride, tetracycline warning

**Hospitalized Child:**
- Separation anxiety (3 stages)
- Therapeutic play (modeling clay, push-pull toy)
- Pain: FLACC, FACES, numeric scales
- Age-appropriate preparation

**Safety:**
- Leading cause: unintentional injury
- Car seat (rear-facing 1yr + 20-22lb)
- Obesity prevention

---

### PEDS Exam 2 (Ch20-24) — Core Topics

From Quizlet sets: `peds-20-24`, `Peds Exam 2 Chapters 20-24`, `VN302 pediatric nursing study guide`

**Adolescence (Ch20):**
- Erikson: Identity vs Role Confusion
- Piaget: Formal Operational (abstract, risk-taking)
- Tanner stages, growth spurt, menarche
- HEADSS assessment
- Leading causes: MVA, suicide, homicide
- Eating disorders, depression screening
- Confidentiality, peer relationships

**Hospitalization (Ch21):**
- Separation anxiety by age
- Age-specific fears
- Therapeutic play
- Pain assessment

**Health Adaptations (Ch22):**
- Medication: mg/kg dosing, IM sites (vastus lateralis), 7 rights
- NG/gavage feeding, specimen collection
- Consent/assent

**Neuro/Sensory (Ch23):**
- Meningitis (Kernig/Brudzinski, CSF, droplet precautions)
- Seizures (safety, side-lying, no mouth objects)
- Hydrocephalus (VP shunt, sunset eyes)
- Cerebral palsy (spastic, scissoring)
- Strabismus, amblyopia, otitis media
- Reye syndrome (no aspirin)
- Increased ICP

**Musculoskeletal (Ch24):**
- Scoliosis (Adams test, bracing, fusion)
- DDH (Ortolani/Barlow, Pavlik harness)
- Clubfoot (Ponseti), fractures (5 Ps), cast care
- Traction (Bryant, Russell, trapeze)
- Duchenne MD (Gower's sign, X-linked)
- Legg-Calvé-Perthes, SCFE, Osgood-Schlatter
- JIA, Ewing sarcoma

---

## Proposed Quiz Structure

### Question Count & Types

| Category | Count | Notes |
|----------|-------|-------|
| **Total per exam** | 50–60 Q | Compact but comprehensive |
| MCQ (single answer) | 25–30 | Standard knowledge/priority |
| SATA (select all) | 8–10 | Interventions, teaching, signs |
| Matrix | 3–4 | Categorize by age/priority/type |
| Bowtie | 2–3 | Recognize→Act→Outcome (NGN) |
| Cloze drag-drop | 2–3 | Fill-in procedures |
| Highlight text | 2–3 | Identify key findings in stem |

**NGN types:** 6 types distributed (SATA, Matrix, Bowtie, Cloze, Highlight, plus MCQ)

### Topics Coverage (sampling, not exhaustive)

For **50 Q**, we sample ~80% of tested topics with 1–2 questions each. Example breakdown for Exam 1:

| Topic Area | # Questions | Types |
|------------|-------------|-------|
| Developmental theories (Erikson/Piaget/Kohlberg) | 6–8 | MCQ, SATA, Matrix |
| Growth patterns (cephalo/proximo, weight, teeth) | 3–4 | MCQ |
| Family structures | 2–3 | MCQ, SATA |
| Play types | 3–4 | MCQ, Matrix |
| Nutrition & oral health | 4–5 | MCQ, SATA |
| Milestones by age | 5–6 | MCQ, Matrix |
| Hospitalization (separation, play, preparation) | 4–5 | MCQ, SATA |
| Pain assessment | 2–3 | MCQ, SATA |
| Safety & anticipatory guidance | 4–5 | MCQ, SATA |

Similar for Exam 2 with adolescence, neuro, MSK, procedures emphasis.

### Rationale Requirements

Each rationale MUST include:

1. **Why the correct answer is correct** — cite underlying principle (e.g., "Erikson: Industry vs Inferiority — completing a puzzle builds competence")
2. **Why each distractor is incorrect** — one sentence each:
   - "A is incorrect because it describes Preoperational centration, not Industry"
   - "B is incorrect because it applies to toddlers, not school-age children"
   - "C is incorrect because it describes trust, not industry"

**Example:**

> **Correct:** B — Completing a puzzle or project builds a sense of industry.
> **Rationale:** According to Erikson, school-age children (6–12) are in Industry vs Inferiority. Successfully completing tasks (puzzles, schoolwork) builds competence and self-worth. A is incorrect because refusing green peas for color describes Preoperational centration. C is incorrect because parallel play is a toddler behavior. D is incorrect because imaginary friends are preschool, not school-age.

---

## Compact Scope Proposal

**Why 50–60 Q instead of 100+:**

| Factor | Full Coverage | Compact Approach |
|--------|---------------|------------------|
| Topics | All 50+ subtopics | Sample 25–30 core concepts (80% coverage) |
| Time to write | 8–10 hours | 3–4 hours |
| Quality | Risk of placeholders | Every Q grounded, no filler |
| User value | Overwhelming | Focused on high-yield |

**Rationale:** Quizlet flashcards show ~30–40 core concepts per exam. With 2 questions per concept (one MCQ, one SATA/Matrix), we get ~60 Q covering all tested areas.

---

## No-Placeholder Policy

**Enforcement:**

1. **Every question references source:** raw_data/peds/*.txt slide content OR Quizlet/Studocu concept
2. **Rationale cites principle:** "Erikson: Industry vs Inferiority" not "because the textbook says so"
3. **No "Slide 0" or generic stems:** Questions describe real scenarios (e.g., "A 7-year-old refuses to complete a puzzle...")
4. **Quality gate:** After generation, grep for "Slide" — zero matches = pass

---

## Implementation Approach

### Option A: Manual (Recommended for Quality)

1. For each topic from Quizlet research, write 1–2 questions
2. Pull scenario details from raw_data/peds/*.txt
3. Write full rationale with correct/incorrect reasoning
4. Validate against study guide content (peds-ch15-19, peds-ch20-24)

**Pros:** Highest quality, no placeholders, matches your style
**Cons:** Time-intensive (~3-4 hours for 50 Q)

### Option B: Assisted (Use tools but verify each Q)

1. Use `tools/generate_exams.py` as base (already exists)
2. Fix to read from study guides (not raw slides) for real content
3. Generate 50 Q per exam
4. Manually review each question, rewrite rationales

**Pros:** Faster initial pass
**Cons:** Risk of generic stems; requires heavy editing

---

## Recommendation

**Start with Option A (manual) for 50 Q per exam, but compact:**

1. **Exam 1 (Ch15-19):** 50 Q
   - 25 MCQ
   - 10 SATA
   - 4 Matrix
   - 3 Bowtie
   - 3 Cloze
   - 3 Highlight

2. **Exam 2 (Ch20-24):** 50 Q (same distribution)

3. **Push to manifest** as `peds-exam-1.json` and `peds-exam-2.json`

4. **Archive** single-chapter quizzes to `archive/` (keep for reference)

**Total time estimate:** 6–8 hours (4 for Exam 1, 4 for Exam 2)

---

## Questions for You

1. **Scope:** 50 Q each exam (compact) — acceptable? Or want 75+?
2. **NGN types:** All 6 types (matrix, bowtie, cloze, highlight, sata, mcq)? Or focus on MCQ/SATA?
3. **Single-chapter quizzes:** Keep in manifest (hidden) or remove entirely?
4. **Start now?** Or any plan changes?

---

*Plan ready for your review. No code written yet.*
