# NCLEX Study Tool — Framework Analysis

This document describes how the tool is built and maintained so you can scale content (exams, missions, drug compendium) over time.

---

## 1. High-Level Architecture

| Layer | Technology | Notes |
|-------|------------|--------|
| **Frontend** | Single self-contained HTML file | `dist/index.html` — all CSS, JS, and data inlined |
| **Backend** | Supabase | Auth, `profiles`, `exam_results`, `mission_results`, `active_sessions` |
| **Deployment** | GitHub Pages | `.github/workflows/deploy-pages.yml` deploys `dist/` on push to `main` |
| **Build** | No npm/Node | One Python script exists but targets a different artifact (see below) |

The **canonical live app** is `dist/index.html` (~2MB+). It has no `<script src="...">` for app code — everything is inline. The repo also contains many standalone data files (exam JS/JSON, mission JS, drug `data_*.js`) that are **sources of truth** for content; the current deployment artifact appears to have been produced by inlining those (or a prior bundle), but there is **no single automated build that produces `dist/index.html`** from those sources today.

---

## 2. Build and Deployment

### What exists today

- **GitHub Actions** (`.github/workflows/deploy-pages.yml`): On push to `main`, uploads the `dist/` folder as the GitHub Pages artifact. No build step — it deploys whatever is in `dist/`.
- **`build_distribution.py`**: Builds a **different** artifact:
  - **Input:** `NGN_Mastery_Hub_v3.2.html` + `scenarios.json`
  - **Output:** `dist/SNF_Simulator_Bundled.html` (not `dist/index.html`)
  - **Actions:** Inlines `<script src="...">` into the HTML and injects exam/mission data from `scenarios.json` (modules with `type: "exam"` or `type: "mission"`).

So:

- **Live site** = `dist/index.html` (source/origin of this file is not fully automated in the repo).
- **Alternative bundle** = `dist/SNF_Simulator_Bundled.html` (built by `build_distribution.py` from `NGN_Mastery_Hub_v3.2.html` + `scenarios.json`).

### Implications for adding content

- Adding content today effectively means either:
  - Editing `dist/index.html` directly (large, error-prone), or
  - Introducing (or restoring) a **single build pipeline** that:
    - Uses one “shell” HTML (template) and a defined list of script/data sources
    - Inlines all scripts and injects exams/missions/drug data
    - Outputs `dist/index.html`

Recommendation: **Define one build that produces `dist/index.html`** from a template + all exam, mission, and drug sources (see sections 3–5). That will make adding new subjects and scaling the compendium predictable and repeatable.

---

## 3. Exams — How They Work and How to Add More

### Runtime model

- **Global:** `window.availableExams` — array of `{ id, name, data }`.
- **`data`** = array of question objects used by the exam UI (e.g. `id`, `question`, `options`, `answer`, `rationale`; types like `matrix`, `sata` supported).
- Each exam’s question array is also attached to a global such as:
  - `window.lectureExamData`
  - `window.acuterespiratoryExamData`
  - `window.chronicrespiratoryexamExamData`
  - `window.femReproExamData`, `window.maleReproExamData`
  - `window.obCh3ExamData`, … `obCh12ExamData`
  - `window.finalReviewExamData`, `window.finalReview2ExamData`
  - etc.
- Registration is done by **pushing** onto `availableExams`:
  - `window.availableExams.push({ id: '...', name: '...', data: window.someExamData });`

There is **no single “exam registry” file**. The list of exams is the order and set of these `push` calls in the bundled file.

### Source of truth (current content)

- **JS:** e.g. `lectureexam.js` (`lectureExamData`), `exam_mens_womens_health.js` (`mensWomensHealthExamData`), `exam_sti.js`.
- **JSON:** e.g. `acute_respiratory_exam.json`, `chronic_respiratory_answer_key.json` (and possibly other JSONs that get converted to exam arrays).
- In **dist/index.html**, the same data appears **inlined** (full question arrays + `availableExams.push(...)`), so the deployed app does not load exam JS/JSON at runtime.

### Question object shape (for compatibility)

- **Common:** `id`, `question`, `options` (array of strings), `answer` (single value or array for SATA), `rationale`.
- **Optional:** `slide`, `type` (e.g. `"sata"`, `"matrix"`). Matrix questions use `columns`, `rows` (with `text`, `correct_col_idx`), and `answer` as object mapping row text → column.

### Adding a new exam (current state)

1. **Create the question set** in a new file:
   - Either **JS:** `window.<moduleId>ExamData = [ ... ];` (same shape as above), or
   - **JSON:** array of questions (if you later add a build step that converts JSON → JS and registers the exam).
2. **Register the exam** where the bundle is built:
   - If you keep editing `dist/index.html` by hand: inline the array and add one `window.availableExams.push({ id, name, data });`.
   - If you introduce a build: add this exam source to the build (and a registry or manifest so the build knows to emit the push).

### Scaling recommendation

- **Exam manifest:** Maintain a single list (e.g. JSON or JS array) of `{ id, name, sourceFile }` (or `sourceVariable`). The build should:
  - Inline or load each source file
  - Emit `availableExams.push(...)` for each entry.
- **One format:** Prefer one question schema (and one conversion path from JSON if you use JSON) so new subjects can be added by adding a file + one manifest entry.

---

## 4. Missions (Clinical Scenarios) — How They Work and How to Add More

### Runtime model

- **Globals:** `window.allMissions` (optional), `window.customMissions` (array).
- **Effective list:** `allMissions = [ ...(window.allMissions || []), ...(window.customMissions || []) ]` (see `dist/index.html`).
- Each mission is an object with:
  - **Ids:** `id` (e.g. `"M-004"`), `numerical_id` (e.g. `4`).
  - **Display:** `title`, `category` (e.g. `"Cardiovascular / Arrhythmia"`), `difficulty`.
  - **Content:** `patient_profile` (demographics, chief_complaint, hpi, pmh, sh, ros), `exhibits` (tables, labs, orders), `steps` (array of step objects).
- **Step types:** e.g. `matrix`, `multiple_choice`, `sata`, `patient_info`, etc. Each step has `prompt`, and type-specific fields (`options`, `rows`, `columns`, `answer`, etc.).

### Category and selector UI

- **`MISSION_CATEGORY_CONFIG`** (in `dist/index.html`): Maps **parent category name** → `{ color, icon, order }` for the mission selector.
- **`classifyMission(mission)`:** Derives `{ parent, sub }` from `mission.category` (e.g. `"Cardiovascular / Arrhythmia"` → parent `"Cardiovascular"`, sub `"Arrhythmia"`). Special handling for Diabetes → Endocrine, Combined → Complex Care, OB, Female/Male Reproductive, Respiratory keywords, etc.
- To have a new **parent category** in the selector, add an entry to `MISSION_CATEGORY_CONFIG` and, if needed, extend `classifyMission()` so that your `mission.category` string maps to that parent (and optional sub).

### Source of truth (current content)

- **JS:** e.g. `missions_cardio_1.js` through `missions_cardio_4.js` define arrays like `window.missions_cardio_1`. In the **dist** bundle, mission objects are **inlined** via `window.customMissions = window.customMissions.concat([ ... ])` — so the live app does not load mission JS at runtime.
- **JSON:** `scenarios.json` has a `modules` array; each module can have `"type": "mission"` and `scenarios` as an array of full mission objects. `build_distribution.py` injects these into `SNF_Simulator_Bundled.html` only.

### Adding a new mission (current state)

1. **Create the mission object(s)** with the same shape (id, numerical_id, title, category, patient_profile, exhibits, steps).
2. **Include in the bundle:** Either edit `dist/index.html` and add another `customMissions.concat([ ... ])` (or concat your new array), or add a build step that pulls from mission JS/JSON and emits the same.
3. **Categories:** If the new mission uses a new category string, add or adjust `MISSION_CATEGORY_CONFIG` and `classifyMission()` so it appears in the right place in the selector.

### Scaling recommendation

- **Single missions source:** Prefer one format (e.g. one big JSON with `modules[].type === "mission"` and `scenarios` = list of missions, or one JS file per category that exports an array). Have the build that produces `dist/index.html` read that source and inject `customMissions.concat(...)`.
- **Category config:** Keep `MISSION_CATEGORY_CONFIG` (and any `classifyMission` rules) in one place (e.g. a small config file or a single block in the template) so new subjects only require adding a category and missions, not hunting through a huge HTML file.

---

## 5. Drug Compendium — How It Works and How to Add More

### Runtime model

- **Global:** `window.drugDB` — one flat array of all drug cards.
- **Population:** `mergeData(groupData)` appends `groupData` to `window.drugDB`. Each `data_*.js` file defines a global array (e.g. `const data_ccb = [ ... ]`); after all such scripts run, a **loader** calls `mergeData(data_ccb)`, `mergeData(data_anticoagulants)`, etc.

### Drug card schema (AGENTS.md)

- **Fields:** `g` (generic), `b` (brand), `c` (class), `cat` (category code), `m` (mechanism), `ind` (indications), `con` (contraindications), `aec` (common adverse effects), `aes` (serious adverse effects), `inter` (array of `{ d, m, s }` for drug, mechanism, severity), `dosage`, `admin`, `nurse`.
- **Category codes:** e.g. `cv`, `dm`, `pain`, `abx`, `resp`, `immun`, `cns`, `gi`, `endo`, `neuro`, `repro`, `uro`, `ophthal`, `msk` (and any new ones you add for new subjects).

### Source of truth (current content)

- **Loader:** `data_loader.js` — calls `mergeData(...)` for each known global (`data_lipids_statins`, `data_raas_ace`, `data_ccb`, … `data_osteoporosis`). The repo’s `data_loader.js` does **not** list `data_dermatology`, `data_hematology`, `data_emergency`, `data_electrolytes`; those appear only in `dist/index.html`, so the deployed app has a **superset** of what the repo loader lists.
- **Data files:** Many `data_<category>.js` files (e.g. `data_ccb.js`, `data_anticoagulants.js`, `data_pain_nonopioid.js`). Each exports one array. Raw/source content lives under `raw_data/pharm/` (and elsewhere) and is documented in AGENTS.md.

### Adding a new drug or category (current state)

1. **New drug in existing category:** Add an object to the appropriate `data_<category>.js` (same schema). No change to loader if that file is already merged.
2. **New category (new file):** Create `data_<newcat>.js` with `const data_<newcat> = [ ... ]`. Then:
   - In **repo** `data_loader.js`: add one line `if (typeof data_<newcat> !== 'undefined') mergeData(data_<newcat>);`
   - In **dist:** ensure that script is inlined and that the same `mergeData` call exists in the inlined loader block (today this is manual or part of whatever produced the bundle).

### Scaling recommendation

- **Exhaustive compendium:** The drug pipeline is already the most modular: one file per category (or per class), one line per file in the loader. To make it robust and exhaustive:
  - **Single loader source:** Use `data_loader.js` as the only place that lists every `data_*` module. The build should inline all `data_*.js` files and then the loader (so adding a file + one line in the loader is enough).
  - **Category codes:** Document `cat` values and map them to UI filters (and add new ones for new subjects).
  - **Optional:** Add a small script or CI check that verifies every `data_*.js` referenced in the loader exists and that each card has required fields (`g`, `b`, `cat`, etc.) so new content stays consistent.

---

## 6. Summary: Current vs Recommended

| Area | Current | Recommended for scaling |
|------|--------|-------------------------|
| **Build** | No single build for `dist/index.html`; second build for SNF bundle only | One build script that produces `dist/index.html` from a shell HTML + manifest of scripts and data (exams, missions, drugs). |
| **Exams** | List is implicit (sequence of `availableExams.push` in bundle) | Explicit exam manifest (id, name, source file); build inlines data and emits push calls. |
| **Missions** | Inlined in dist; sources in `missions_*.js` and `scenarios.json` | Single format (e.g. JSON modules with `type: "mission"`); build injects into `customMissions`; keep category config in one place. |
| **Drugs** | Well-modularized (`data_*.js` + loader); loader in repo missing some modules present in dist | Use `data_loader.js` as single source of merge list; build inlines all `data_*.js` + loader; add new categories by new file + one line. |
| **Deploy** | GitHub Actions deploys `dist/` as-is | Same; add a build step in CI that runs the new “index” build before upload so `dist/index.html` is always generated from source. |

---

## 7. Quick Reference: File Roles

- **`dist/index.html`** — Deployed app (all-in-one). Currently the “source of truth” for what’s live; goal is to make it a **build output**.
- **`build_distribution.py`** — Builds `dist/SNF_Simulator_Bundled.html` from `NGN_Mastery_Hub_v3.2.html` + `scenarios.json`. Not used for the main Pages site.
- **`data_loader.js`** — Merge list for drug DB. Add new `data_*.js` here when adding drug categories.
- **`scenarios.json`** — Mission (and some exam) content for the SNF build; can be reused as a source for a unified build.
- **`MISSION_CATEGORY_CONFIG`** + **`classifyMission()`** — Mission selector categories; in `dist/index.html` (and possibly in a template). Add new parent categories here when adding new subjects.
- **`AGENTS.md`** — Project overview, content inventory, drug schema, and roadmap; keep updated as you add subjects and drug categories.

Once a single build produces `dist/index.html` from the manifest + template + all exam/mission/drug sources, adding new subjects will be: add content files → update manifest/config → run build → deploy.
