# NurseMind Informatics — NCLEX Study Tool

## Project Overview
Single-page HTML app (`dist/index.html`) for NCLEX exam preparation. Deployed via GitHub Pages at `contrakev.github.io/nclex-study-tool`. Backend is Supabase at `yawiilrsovmyteifqabv.supabase.co`.

## Architecture
- **Frontend**: Single self-contained HTML file with inline CSS/JS, Bootstrap 5, Font Awesome
- **Backend**: Supabase (Postgres + Auth + RLS)
- **Deployment**: GitHub Pages via `.github/workflows/deploy-pages.yml` — auto-deploys `dist/` folder on push to `main`
- **Auth**: Email/password signup + anonymous auth with upgrade path. Supabase JS client loaded async via CDN.
- **Git remote**: `git@github.com:ContraKev/nclex-study-tool.git` (SSH)

## Current Version: v4.0

## Content Inventory
- **14 Exam Modules** (~545 total questions):
  1. Acute Respiratory Quiz (40 questions)
  2. Chronic Respiratory Exam (38 questions)
  3. Cardiovascular & Diabetes Pharmacology (38 questions)
  4. Final Review: Med-Surg Comprehensive (54 questions)
  5. Final Review Part 2: Class Notes & ABG (59 questions)
  6. Female Reproductive System & Disorders (55 questions)
  7. Male Reproductive System & Disorders (70 questions)
  8. OB Chapter 3: Fetal Development (30 questions)
  9. OB Chapter 4: Prenatal Care & Adaptations (30 questions)
  10. OB Chapter 5: Pregnancy Complications (30 questions)
  11. OB Chapters 6-7: Labor & Birth (25 questions)
  12. OB Chapter 8: Labor & Birth Complications (25 questions)
  13. OB Chapter 9: Postpartum & Newborn Care (30 questions)
  14. OB Chapter 10: Postpartum Complications (25 questions)
  15. OB Chapter 12: The Term Newborn (20 questions)
- **92 Clinical Missions** organized in category → subcategory hierarchy:
  - Cardiovascular (20): Electrolytes, Emergency, Beta Blockers, Diuretics, Coagulation, Adrenergics, Antiplatelets, Nitrates, Thrombolytic, Lipids, Arrhythmia
  - Endocrine (10): Diabetes
  - Respiratory (10): Acute/Pneumonia
  - Reproductive Health (16): Female Reproductive (8) — PID, Mastectomy, Vaginitis, Endometriosis, Prolapse, Cervical Screening, Menopause, Bartholin; Male Reproductive (8)
  - Complex Care (10): Multi-System/Comorbidities
  - OB / Maternity (16): Fetal Development, Prenatal Care, Pregnancy Complications, Labor & Birth, Labor Complications, Postpartum, Postpartum Complications, Newborn
  - Advanced NGN Practice (10): NGN Scenarios
- **126 Drug Reference Cards** across categories:
  - Cardiovascular: 21 classes, 121 drugs (beta blockers, ACE/ARBs, CCBs, diuretics, antiarrhythmics, anticoagulants, antiplatelets, lipids, vasodilators, adrenergics, angina/HF)
  - Pain Management: 1 class so far, 5 drugs (acetaminophen, ibuprofen, naproxen, ketorolac, celecoxib)
- **NGN Question Types**: Multiple choice, SATA, matrix, drag-drop cloze, highlight/select, bow-tie
- **Hidden Answer Key**: Cmd+Opt+Shift+K (Mac) or 5-tap version badge (mobile) — generates from live data at runtime
- **Master Answer Key file**: `Master_Answer_Key.md` in repo root (static reference)

## Features Built
- User accounts (email/password + anonymous with upgrade to full account)
- Progress tracking (every exam answer + mission step saved to Supabase)
- Weak area detection dashboard (avg score, strong/weak areas, recent activity)
- Auto-save & resume (saves after every answer, resume button on dashboard)
- Only completed exams count toward metrics (partial exits stay as resumable sessions)
- Mobile responsive (phone + tablet CSS, touch drag-and-drop support, iPhone safe areas)
- Mission selector with category → subcategory drill-down navigation (dynamic grouping via `classifyMission()` + `MISSION_CATEGORY_CONFIG`)

## Database Tables (Supabase)
- `profiles` — user display names, linked to auth.users
- `exam_results` — completed exam scores with per-question answer log
- `mission_results` — completed mission scores with per-step log
- `active_sessions` — in-progress exam/mission sessions for resume feature

## Drug Compendium Expansion Plan (IN PROGRESS)
Target: ~206 total drug cards (currently 126). Raw text extracted to `raw_data/pharm/`.

### Drug data format (each card)
```
{ g: "Generic", b: "Brand", c: "Class", cat: "category_code",
  m: "Mechanism of action", ind: "Indications", con: "Contraindications",
  aec: "Common adverse effects", aes: "Serious adverse effects",
  inter: [{d: "Drug", m: "Interaction mechanism", s: "high|med|low"}],
  dosage: "Dosing", admin: "Administration", nurse: "Nursing considerations" }
```
Category codes: `cv` (cardio), `dm` (diabetes), `pain`, `abx` (antimicrobial), `resp` (respiratory), `immun` (immunity/corticosteroids), `cns` (psych/CNS), `gi` (GI)

### Remaining blocks to build
Each block = new `const data_xxx = [...]` array added before data_loader.js, then registered with `mergeData()`.

| Block | Category | Drugs | Status | Source files |
|---|---|---|---|---|
| 1a | Pain: Non-Opioid | 5 | ✅ Done | pain_lecture_drjames.txt |
| 1b | Pain: Opioid Agonists | 9 (morphine, codeine, oxycodone, hydrocodone, hydromorphone, fentanyl, methadone, meperidine, tramadol) | ✅ Done | pain_lecture_drjames.txt |
| 1c | Pain: Partial Agonists + Antagonists | 5 (buprenorphine, nalbuphine, butorphanol, naloxone, naltrexone) | ⏳ | pain_lecture_drjames.txt |
| 1d | Pain: Adjuvants + Migraine + Muscle Relaxants | 6 (gabapentin, pregabalin, duloxetine, sumatriptan, cyclobenzaprine, baclofen) | ⏳ | pain_lecture_drjames.txt |
| 2 | Antimicrobials | ~23 (penicillins, cephalosporins, vancomycin, macrolides, tetracyclines, aminoglycosides, fluoroquinolones, sulfonamides, metronidazole, anti-TB, antifungals, antivirals) | ⏳ | antimicrobial_drjames.txt, pharmacology_B_drjames.txt |
| 3 | Respiratory | ~15 (antihistamines, decongestants, antitussives, expectorants, mucolytics, bronchodilators, inhaled corticosteroids, leukotriene modifiers) | ⏳ | respiratory_pharm.txt, pharmacology_A_drjames.txt |
| 4 | Corticosteroids/Immunity/Gout | ~8 (prednisone, methylprednisolone, dexamethasone, hydrocortisone, colchicine, allopurinol, methotrexate, hydroxychloroquine) | ⏳ | immunity_corticosteroids_drjames.txt |
| 5 | Psych/CNS | ~8 (benzodiazepines, sedatives, anticonvulsants, antiparkinsonian, antipsychotics, SSRIs) | ⏳ | pharmacology_A_drjames.txt |
| 6 | GI | ~6 (PPIs, antiemetics, prokinetics, stool softeners) | ⏳ | pharmacology_B_drjames.txt |

### Source files (extracted to raw_data/pharm/)
- `pain_lecture_drjames.txt` — 78 slides, pain management drugs (Dr. James)
- `pain_mgmt_bperez.txt` — 51 slides, pain nursing theory (Bperez, supplementary)
- `antimicrobial_drjames.txt` — 120 slides, all antimicrobial classes (Dr. James)
- `respiratory_pharm.txt` — 62 slides, respiratory drug classes
- `immunity_corticosteroids_drjames.txt` — 18 slides, corticosteroids/gout/DMARD (Dr. James)
- `pharmacology_A_drjames.txt` — 17 pages PDF, comprehensive review A (CNS, ANS, CV, resp)
- `pharmacology_B_drjames.txt` — 19 pages PDF, comprehensive review B (antimicrobials, GI, endocrine)
- `ans_receptors_drjames.txt` — 4 pages PDF, ANS receptor reference chart

## Key Technical Notes
- Supabase client variable is `sb` (not `supabase` — avoids collision with CDN's `window.supabase`)
- CDN loads with `async` attribute so it never blocks page rendering
- App always renders immediately; Supabase auth layers on after CDN loads
- All close/exit functions are synchronous; database saves are fire-and-forget
- `showHomeScreen()` is synchronous; dashboard data loads async into a placeholder div
- Version badges are in TWO places: nav bar (line ~1112) and home screen template

## Supabase Credentials (public/anon — safe in frontend)
- URL: `https://yawiilrsovmyteifqabv.supabase.co`
- Anon Key: `sb_publishable_3T8uPePWOuuvmdcFISXv0w_FdB8iKSV`

## Roadmap
- [x] OB/Maternity content (8 exam modules, 16 clinical missions — Chapters 3-12)
- [ ] More content areas: Pediatrics, Psych/Mental Health, Leadership/Delegation, Neuro, GI, Renal, Musculoskeletal
- [x] Male reproductive system content (70 exam questions + 8 missions)
- [ ] Access codes for institutional licensing
- [ ] Instructor dashboard (class-wide performance view)
- [ ] Custom domain + landing page
- [ ] Stripe payment integration
- [ ] hCaptcha integration (currently disabled)

## Owner
Kevin McAndrews (ContraKev) — LVN student at Unitek College
Email: kevin.c.s.mcandrews@gmail.com