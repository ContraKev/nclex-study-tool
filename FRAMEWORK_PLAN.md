# NCLEX Study Tool — Framework & Migration Plan v5.0

**Status:** Planning Phase | **Date:** 2026-04-13 | **Owner:** Kevin McAndrews

---

## Executive Summary

Your v5.0 modular content architecture is **designed but not implemented**. The `content/` manifest and schemas exist, but only 1 drug file has been migrated. All actual content lives in 47+ legacy data files and is inlined into a 1.25MB `dist/index.html`. This causes:

- **Performance**: Slow initial load, everything bundled
- **Fragility**: Every content addition required editing giant HTML or regex patches
- **Lost work**: Peds exams deleted; extraction pipeline is ad-hoc scripts

**Goal**: Lock in a framework so adding drug cards, exams, missions, study guides is: drop file → update manifest → validate → build → done. No breakage. No manual HTML edits.

---

## Current State Audit

| Area | Status | Notes |
|------|--------|-------|
| `content/manifest.json` | ✅ Exists | Lists 14 exams, 8 mission groups, 17 drug categories, 6 study guides |
| `content/exams/` | ❌ Empty | 0 files (manifest expects 14) |
| `content/missions/` | ❌ Empty | 0 files (manifest expects 8 groups) |
| `content/drugs/` | ⚠️ 1 file | Only `osteoporosis.json` (5 cards). Manifest expects 47 files |
| `content/study-guides/` | ❌ Empty | Manifest expects 6 MD files |
| `schemas/` | ⚠️ Partial | `exam.schema.json`, `drug.schema.json` exist. No `mission.schema.json` |
| `tools/build.py` | ⚠️ Validation only | Validates manifest/exams/drugs. No full build of dist/index.html |
| `dist/index.html` | ⚠️ 1.25MB monolith | All content inlined; legacy mode still works |
| `raw_data/` | ✅ Rich | 60+ PPTX/PDF extracts (pharm, OB, peds, respiratory) |
| Legacy data files | ✅ Functional | 47 drug JS, 4 mission JS, exam JSONs — all inlined in dist |

**Extraction pipeline**: Raw `.txt` files exist in `raw_data/` (from PPTX via `pdftotext` or similar), but no automated pipeline converts them to structured `content/*.json`.

---

## Target Architecture

```
content/                    ← SINGLE SOURCE OF TRUTH
├── manifest.json           ← Registry: which exams, drugs, missions exist
├── exams/
│   ├── acute-respiratory.json
│   ├── ob-ch3-fetal.json
│   └── ...
├── missions/
│   ├── cardio.json
│   ├── ob.json
│   └── ...
├── drugs/
│   ├── cv-beta-blockers.json
│   ├── pain.json
│   └── ...
└── study-guides/
    ├── ob-comprehensive.md
    └── ...

schemas/
├── exam.schema.json        ← Validates question structure
├── drug.schema.json        ← Validates drug card structure
└── mission.schema.json     ← (TODO) Validates mission/step structure

tools/
└── build.py                ← Validate → (future) generate dist/index.html

dist/
└── index.html              ← BUILD OUTPUT (not edited by hand)
```

**How content flows:**
1. Add JSON/MD to `content/`
2. Update `manifest.json` if new category
3. Run `python tools/build.py` — validates schemas, fails fast on bad data
4. Build step (future) inlines content into clean `dist/index.html` template
5. Git commit → GitHub Actions deploys

---

## Performance Strategy

### Problem
- 1.25MB HTML loads everything at once
- No lazy loading; all 14 exams + 92 missions + 289 drugs in memory

### Solutions

| Optimization | Impact | Effort |
|--------------|--------|--------|
| **Lazy-load modules** | Load exam/mission data only when user opens that section | Medium |
| **Split bundles** | Separate drug compendium into its own lazy chunk (or IndexedDB cache) | Medium |
| **Defer non-critical JS** | Move mastery_logic, analytics to on-demand | Low |
| **Image/asset optimization** | Font Awesome + Bootstrap CDN already good; verify no embedded base64 | Low |
| **Service Worker cache** | Cache static content for offline/resume | Medium |

**Phase 1 (Quick wins):**
- Keep current dist/ functional
- Add `defer` to heavy inline scripts
- Profile with Lighthouse

**Phase 2 (Modular build):**
- Template `dist/index.html` loads minimal core + lazy `import()` or dynamic `<script>` for modules
- `content/` stays JSON; build inlines per-route or uses fetch()

---

## Aesthetics Strategy

### Current
- Bootstrap 5 + Font Awesome (good base)
- Multiple NGN_Mastery_Hub_*.html versions suggest UI iterations

### Recommended
1. **Single design system** — define in CSS custom properties (colors, spacing, typography)
2. **Consistent card design** — drug cards, mission cards, exam cards share patterns
3. **Mobile-first** — touch targets, safe areas already in place per AGENTS.md
4. **Dark mode toggle** — low effort, high perceived polish
5. **Loading states** — skeleton screens for lazy-loaded content

**No design overhaul now** — focus on framework first, aesthetics polish in Phase 2.

---

## Extraction Pipeline (PPTX → Structured Content)

### Current Process (Ad-Hoc)
- Manual: `pdftotext` or similar → `raw_data/*.txt`
- Then: Various scripts (`generate_missions.py`, `add_slide_to_rationales.js`, etc.)
- Result: Inconsistent quality, lost work (deleted peds exams)

### Proposed Pipeline

```
raw_data/
├── pharm/
│   └── pharmacology_A_drjames.txt  → tools/extract_drugs.py → content/drugs/cns-psych.json
├── ob/
│   └── OB_Chapter_3.txt            → tools/extract_exam.py  → content/exams/ob-ch3-fetal.json
└── peds/
    └── CH_15_*.txt                 → tools/extract_exam.py  → content/exams/peds-ch15.json
```

**Tools to build:**
1. `tools/extract_drugs.py` — Parse raw pharm text → drug schema JSON
2. `tools/extract_exam.py` — Parse lecture text → exam questions (with slide refs)
3. `tools/extract_missions.py` — (future) Generate case missions from clinical scenarios

**Quality gates:**
- Every question MUST have `slide: <number>` referencing source PPTX
- Run `node auto_add_slides.js` after extraction (already exists)
- Schema validation in build.py catches placeholders like "This is an outdated concept..."

---

## Migration Roadmap (Phased)

### Phase 0: Foundation (DONE ✅)
- [x] content/manifest.json created
- [x] schemas/exam.schema.json, drug.schema.json created
- [x] tools/build.py (validation only)
- [x] content/drugs/osteoporosis.json (example)

### Phase 1: Complete Schemas & Validation
- [ ] Create `schemas/mission.schema.json`
- [ ] Extend build.py to validate missions
- [ ] Add `--strict` mode: fail on any missing required field

### Phase 2: Migrate High-Value Content (Parallel with Phase 3)
Migrate in priority order:
1. **Drug cards** (289 total) — already well-structured in `data_*.js`
   - Map each `data_<cat>.js` → `content/drugs/<cat>.json`
   - Update manifest
2. **Exams** (14 modules) — current JSON/JS sources
   - Convert to content/exams/*.json with schema
   - Peds exams: regenerate properly (deleted ones had bad distractors)
3. **Missions** (92 scenarios) — `missions_*.js` + `scenarios.json`
   - Consolidate into content/missions/*.json
4. **Study guides** — existing MD files
   - Move to content/study-guides/

### Phase 3: Full Build Pipeline
- [ ] `tools/build.py --full` generates `dist/index.html` from:
  - Clean HTML template (core UI, no data)
  - All content/ JSON inlined (or lazy)
- [ ] GitHub Actions: run build before deploy
- [ ] Archive legacy files to `archive/` or delete after verified

### Phase 4: Performance & Aesthetics
- [ ] Lazy-load exam/mission modules
- [ ] Optimize bundle size
- [ ] UI polish pass (design-review skill)

### Phase 5: Extraction Automation
- [ ] Build `tools/extract_drugs.py`
- [ ] Build `tools/extract_exam.py`
- [ ] Document: "How to add new lecture content"

---

## How to Add Content (Post-Migration)

**Adding a new drug category:**
1. Create `content/drugs/new-cat.json` (array of drug cards, follow schema)
2. Add entry to `content/manifest.json` → `drugCategories[]`
3. Run `python tools/build.py` — fails if schema invalid
4. Commit → deploy

**Adding a new exam:**
1. Create `content/exams/new-exam.json` (exam object with questions[])
2. Add entry to `content/manifest.json` → `exams[]`
3. Run `python tools/build.py`
4. Commit → deploy

**No more:**
- ❌ Editing 1.25MB HTML
- ❌ Regex patches into giant strings
- ❌ 30 if-checks in data_loader
- ❌ Broken data slipping through

---

## Open Questions for You

1. **Peds content**: The deleted peds exams had low-quality generated data. Do you want to:
   - Regenerate them properly from raw_data/peds/?
   - Or skip peds for now and focus on pharm/OB first?

2. **Drug migration priority**: Should I migrate all 47 drug files to content/ now, or start with a subset (e.g., cardio + pain + antimicrobials)?

3. **Build vs. legacy**: Keep `dist/index.html` working in legacy mode during migration, or freeze it until build is complete?

4. **Extraction tools**: Do you want me to build the automated extractors (pharm → drug cards, lecture → exams) now, or migrate existing structured data first?

---

## Next Steps (No Code Yet)

1. ✅ Audit complete (this doc)
2. ⏳ **Review this plan with you** — confirm scope, priorities, open questions
3. Then: Phase 1 (schemas + validation) → Phase 2 (migrate content) → Phase 3 (build)

---

*Generated from audit of current repo state. Preserves all existing functionality; migration is additive until legacy is retired.*
