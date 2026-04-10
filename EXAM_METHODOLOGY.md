
# NCLEX Study Tool — Exam Creation Methodology

## Gold Standard Reference
- **OB Chapter 3** (Fetal Development): 37 questions, 5 NGN types
- **OB Chapter 4** (Prenatal Care): 36 questions, 5 NGN types  
- **OB Chapter 5** (Pregnancy Complications): 36 questions, 5 NGN types
- **Peds Chapter 15** (Growth/Development): 25 questions, 5 NGN types

## Exam Structure Requirements

### Question Count
- **Target**: 25-40 questions per exam
- **Minimum**: 20 questions
- **NGN Types**: Exactly 5 (never more, never fewer)

### Question Type Distribution

| Type | Count | Required Fields |
|------|-------|-----------------|
| Multiple Choice | ~20 (80%) | id, slide, question, options, answer, rationale |
| SATA | Optional (0-2) | + "type": "sata", answer is array |
| Matrix | 1 | + "type": "matrix", columns, rows |
| Ordering | 1 | + "type": "ordering", options, answer (array of indices) |
| Drag-Drop Cloze | 1 | + "type": "drag_drop_cloze", cloze_text, drag_options, answer (object) |
| Highlight | 1 | + "type": "highlight", highlight_text, highlight_options, answer (array) |
| Bowtie | 1 | + "type": "bowtie", left_actions, center_condition, right_monitor |

### Multiple Choice Format

```javascript
{
  "id": "unique_id",
  "slide": 24,  // Reference to source slide number
  "question": "Clear, clinical question stem?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "answer": 1,  // Index of correct answer (0-based)
  "rationale": "Detailed explanation grounded in lecture content. Include clinical reasoning."
}
```

### NGN Type Formats

**Matrix (Match concepts to categories)**
```javascript
{
  "id": "unique_id",
  "type": "matrix",
  "slide": 999,
  "question": "Match each concept with its correct description.",
  "columns": ["Category A", "Category B", "Category C"],
  "rows": [
    {"text": "Concept 1", "correct_col_idx": 0},
    {"text": "Concept 2", "correct_col_idx": 1},
    {"text": "Concept 3", "correct_col_idx": 2}
  ],
  "rationale": "Explanation of correct matches."
}
```

**Ordering (Sequence steps)**
```javascript
{
  "id": "unique_id",
  "type": "ordering",
  "slide": 999,
  "question": "Order the interventions from first to last priority.",
  "options": ["First action", "Second action", "Third action", "Fourth action"],
  "answer": [0, 1, 2, 3],  // Correct order of indices
  "rationale": "Rationale for the correct sequence."
}
```

**Drag-Drop Cloze (Fill blanks)**
```javascript
{
  "id": "unique_id",
  "type": "drag_drop_cloze",
  "slide": 999,
  "question": "Complete the statement about patient care.",
  "cloze_text": "The nurse should [[BLANK1]] the patient and [[BLANK2]] the family.",
  "drag_options": ["assess", "educate", "monitor", "document"],
  "answer": {"BLANK1": "assess", "BLANK2": "educate"},
  "rationale": "Explanation of correct fills."
}
```

**Highlight (Select findings)**
```javascript
{
  "id": "unique_id",
  "type": "highlight",
  "slide": 999,
  "question": "Click on findings indicating normal development.",
  "highlight_text": "The child demonstrates age-appropriate growth. Vital signs are stable. The child is engaged with caregivers.",
  "highlight_options": ["age-appropriate growth", "Vital signs are stable", "engaged with caregivers"],
  "answer": ["age-appropriate growth", "Vital signs are stable", "engaged with caregivers"],
  "rationale": "Explanation of correct selections."
}
```

**Bowtie (Actions → Condition → Monitoring)**
```javascript
{
  "id": "unique_id",
  "type": "bowtie",
  "slide": 999,
  "question": "A client presents with symptoms. Select appropriate actions, condition, and monitoring.",
  "left_actions": {
    "options": ["Action 1", "Action 2", "Action 3", "Action 4"],
    "answer": ["Action 1", "Action 2"]
  },
  "center_condition": {
    "options": ["Condition A", "Condition B", "Condition C", "Condition D"],
    "answer": "Condition A"
  },
  "right_monitor": {
    "options": ["Monitor 1", "Monitor 2", "Monitor 3", "Monitor 4"],
    "answer": ["Monitor 1", "Monitor 2"]
  },
  "rationale": "Explanation of correct selections."
}
```

### Content Quality Standards

1. **Questions must come from lecture slides** - Reference `raw_data/` source files
2. **Rationales must be detailed** - Include clinical reasoning, not just "Correct answer is X"
3. **Use clinical language** - "The nurse should...", "Priority intervention...", "Expected finding..."
4. **Slide references** - Include "slide": N in each question (use 999 if not exact)
5. **Balanced distractors** - Wrong answers should be plausible, not obviously wrong

### Exam Push Format

```javascript
window.availableExams.push({
  id: 'ob_ch3_fetal_dev',
  name: 'OB Chapter 3: Fetal Development',
  type: 'exam',
  category: 'OB',  // or 'Peds', 'Cardio', etc.
  questions: window.obCh3ExamData
});
console.log('Created exam module: OB Chapter 3: Fetal Development with ' + window.obCh3ExamData.length + ' questions');
```

### Common Mistakes to Avoid

❌ **Don't skip NGN types** - All 5 required (matrix, ordering, drag-drop-cloze, highlight, bowtie)

❌ **Don't use placeholder questions** - "Based on content" or "Option A based on content" is NOT acceptable

❌ **Don't skip rationales** - Every question needs a detailed rationale

❌ **Don't exceed 6 NGN types** - More than 6 is overkill; stick to 5-6

❌ **Don't forget SATA** - Can include 0-2 SATA questions (optional but good practice)

### Checklist Before Adding Exam

- [ ] 25+ questions total
- [ ] Exactly 5 NGN types (matrix, ordering, drag-drop-cloze, highlight, bowtie)
- [ ] All questions have: id, question, options, answer, rationale
- [ ] Rationales are detailed (not "Based on content")
- [ ] Content sourced from lecture slides in raw_data/
- [ ] Exam pushed to availableExams with proper category
- [ ] JS syntax valid (node -e "require('fs').readFileSync('dist/index.html')" exits 0)

### Quick Validation Command

```bash
node -e "
const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');
const dataIdx = html.indexOf('EXAM_DATA_NAME = [');
const endIdx = html.indexOf('];', dataIdx) + 2;
const data = html.substring(dataIdx, endIdx);

const qCount = (data.match(/\"question\":/g) || []).length;
const ngn = (data.match(/\"type\":\s*\"(matrix|bowtie|drag_drop_cloze|highlight|ordering)\"/g) || []).length;

console.log('Questions:', qCount, '| NGN types:', ngn, '| Valid:', qCount >= 20 && ngn === 5);
"
```

---

*Last updated: 2026-04-03*
*Reference exams: OB Ch 3, OB Ch 4, OB Ch 5, Peds Ch 15*

