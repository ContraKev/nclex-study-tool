# Changelog

All notable changes to the NCLEX Study Tool are documented here.

## [5.0.4] — 2026-04-13

### Fixed
- **Study Guides UI**: `showStudyGuides()` and `viewStudyGuide()` now display manifest titles (e.g., "PEDS Ch15-19: Growth, Development & Nutrition — Comprehensive") instead of raw keys like `peds_ch15_19_comprehensive`
- **Duplicate peds study guides removed**: Deleted `peds-quiz1-ch15-19.md`, `peds-quiz2-ch20-24.md`, `peds-ch17-comprehensive.md` — now only ONE version per section (comprehensive)
- Updated `content/manifest.json` to remove duplicate study guide entries
- Cleaned inlined `studyGuideContent` in `dist/index.html` to remove old quiz keys

### Removed
- Duplicate peds study guide files (kept only comprehensive versions)

## [5.0.3] — 2026-04-13

### Added
- **PEDS Ch15-19 Comprehensive Study Guide**: 1,483 lines raw → `content/study-guides/peds-ch15-19-comprehensive.md` (milestones, vital signs, Erikson/Piaget tables)
- **PEDS Ch20-24+ Comprehensive Study Guide**: 4,163 lines raw → `content/study-guides/peds-ch20-24-comprehensive.md` (adolescent, disorders, respiratory/GI/Heme/CV/Neuro)
- **ATI CMS Peds Practice A Study Guide**: Web research (Quizlet/Studocu topics) + lectures → `content/study-guides/ati-cms-peds-practice-a.md` (burns, respiratory, GI, infection, MSK, Heme/Onc, endocrine, dev, meds)
- **Manifest**: 20 study guides (up from 17)

### Fixed
- OB Ch13/14 schema: added `questions` and `category` fields

## [5.0.2] — 2026-04-13

### Added
- **Pharm Study mode recovered**: Git commit 50cb30d contains full Pharm Study (Match Game, Suffix Quiz, Side Effect Drill, Prototype Focus). Documented in `PHARM_STUDY_RECOVERED.md`
- **Study guides harvested**: 17 `.md` files copied to `content/study-guides/` with human-readable filenames
- **Manifest studyGuides**: 17 guides with nice titles (e.g., "ATI CMS Maternal & Newborn — Cheat Sheet")

### Fixed
- Study guide UI now references manifest titles (not raw filenames) — rendered nicely when `tools/build.py --full` runs

## [5.0.1] — 2026-04-13

### Added
- **Harvest from scenarios.json**: 2 exams (Acute Respiratory 40Q, Chronic Respiratory 38Q) + 5 mission modules (55 scenarios total) into `content/exams/` and `content/missions/`
- **Recovered from git history**: OB Ch13 Preterm/Postterm exam (commit 7ab00f1) → `content/exams/ob-ch13-preterm-postterm.json`
- **Recovered from git history**: OB Ch14 Congenital Malformations exam → `content/exams/ob-ch14-congenital.json`
- **Manifest updated**: 19 exams, 13 mission groups (up from 14/8)
- **Version control**: VERSION file + CHANGELOG.md for semver tracking

### Fixed
- OB Ch13 JSON schema validation (added missing `category` field)
- `content/exams/` now has 4 real exam files; `content/missions/` has 5 mission files

### Known Issues
- Pharm study mode exists in git (commit 50cb30d) but not inlined in current `dist/index.html`. See `PHARM_STUDY_RECOVERED.md` for recovery steps.
- Many original manifest entries still point to missing files (expected during Phase 2a migration)
- `dist/index.html` on GitHub Pages may not load (local dev first)

## [5.0.0] — 2026-04-12

### Added
- v5.0 modular content architecture (`content/`, `schemas/`, `tools/build.py`)
- `content/manifest.json` as single source of truth
- `schemas/exam.schema.json`, `schemas/drug.schema.json`
- `content/drugs/osteoporosis.json` (example drug category)

### Changed
- `tools/build.py` validates manifest, exams, drugs (fails fast on schema violations)

## Prior versions

See `AGENTS.md` and `FRAMEWORK_ANALYSIS.md` for pre-v5.0 history.
