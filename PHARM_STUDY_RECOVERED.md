# Pharm Study Mode — Recovered from Git

**Commit:** `50cb30d` — "Add Pharm Study mode with 4 interactive study tools"  
**Date:** Mon Mar 16 09:19:07 2026  
**Files changed:** `dist/index.html` (+607 lines), `data_loader.js`

---

## What It Was

A full "Pharm Study" section from the home screen with 4 active-recall game modes:

| Mode | Description |
|------|-------------|
| **Match Game** | Generic ↔ Brand name matching (6 pairs/round) |
| **Suffix Quiz** | 25 drug suffixes mapped to drug classes (10 Qs/round) |
| **Side Effect Drill** | Identify adverse effects from drug descriptions (10 Qs/round) |
| **Prototype Focus** | Full drug monograph cards for each drug class |

---

## UI Entry Point

From home screen:
```
┌─────────────────────────────────────┐
│  💊 Pharm Study                     │
│  Active recall games:               │
│  Match Game, Suffix Quiz,           │
│  Side Effect Drills, and            │
│  Prototype Focus Mode.              │
└─────────────────────────────────────┘
```

---

## Extracted Code

### CSS (lines 1144–1200 from commit)
```css
/* ── PHARM STUDY MODES ── */
.pharm-study-modal {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: var(--primary); z-index: 2000; overflow-y: auto; padding: 40px;
}
.pharm-mode-card {
    background: var(--secondary); border: 2px solid var(--border);
    border-radius: 16px; padding: 24px; text-align: center;
    cursor: pointer; transition: all .3s;
}
.pharm-mode-card:hover {
    transform: translateY(-4px); border-color: var(--accent);
}
.match-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.match-card {
    background: var(--secondary); border: 2px solid var(--border);
    border-radius: 12px; padding: 20px; text-align: center;
    font-size: 1.1rem; cursor: pointer; transition: .2s;
}
.match-card:hover { border-color: #3b82f6; }
.match-card.flipped { background: #1e40af; border-color: #60a5fa; color: #fff; }
.match-card.matched { opacity: .4; pointer-events: none; }
.quiz-option {
    background: var(--secondary); border: 2px solid var(--border);
    border-radius: 12px; padding: 16px; margin-bottom: 12px;
    cursor: pointer; transition: .2s;
}
.quiz-option:hover { border-color: #f59e0b; }
.quiz-option.correct { background: #14532d; border-color: #4ade80; }
.quiz-option.incorrect { background: #7f1d1d; border-color: #f87171; }
```

### HTML + JS (lines 10594–11300 from commit)
See raw code in `git show 50cb30d:dist/index.html` or use:
```bash
git show 50cb30d:dist/index.html | sed -n '10594,11300p' > pharm_study_section.html
```

Key functions:
- `showPharmStudy()` — opens modal with 4 mode cards
- `startMatchGame()` / `startSuffixQuiz()` / `startSideEffectDrill()` / `startPrototypeFocus()`
- `pharmStudyState` — tracks round, score, current question

---

## How to Restore

**Option 1: Extract section only**
```bash
git show 50cb30d:dist/index.html | sed -n '1144,1200p;10594,11300p' > pharm_study_extracted.html
```

**Option 2: Full restore (careful!)**
```bash
git checkout 50cb30d -- dist/index.html
# then re-apply any newer fixes
```

**Option 3: Cherry-pick just the Pharm Study code**
- The modal HTML is around line 10594–10700
- The JS functions start at `function showPharmStudy() {` (line ~10737)
- CSS starts at `/* ── PHARM STUDY MODES ── */` (line ~1144)

---

## Why It Disappeared

Likely removed during one of the "nuclear fix" commits:
- `4f679b1` — "Nuclear fix: remove all peds arrays and inject 19 clean ones"
- `7e99631` — "Nuclear fix: single clean script block"
- Or a `git reset --hard` / manual overwrite of dist/index.html

No evidence of pharm study in any commit after 50cb30d.

---

## Status

**Recoverable from git.** All code is in commit 50cb30d. The 4 modes (Match, Suffix, Side Effect, Prototype) can be re-integrated into `dist/index.html` or a new `content/pharm-study/` module when v5.0 build pipeline is ready.

---

*Generated: 2026-04-13. Source: git commit 50cb30d*
