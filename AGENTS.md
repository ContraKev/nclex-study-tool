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
- **86 Clinical Missions** organized in category → subcategory hierarchy:
  - Cardiovascular (20): Electrolytes, Emergency, Beta Blockers, Diuretics, Coagulation, Adrenergics, Antiplatelets, Nitrates, Thrombolytic, Lipids, Arrhythmia
  - Endocrine (10): Diabetes
  - Respiratory (10): Acute/Pneumonia
  - Reproductive Health (10): Female Reproductive (2), Male Reproductive (8)
  - Complex Care (10): Multi-System/Comorbidities
  - OB / Maternity (16): Fetal Development, Prenatal Care, Pregnancy Complications, Labor & Birth, Labor Complications, Postpartum, Postpartum Complications, Newborn
  - Advanced NGN Practice (10): NGN Scenarios
- **121 Drug Reference Cards** (Cardio + Diabetes pharmacology)
- **NGN Question Types**: Multiple choice, SATA, matrix, drag-drop cloze, highlight/select, bow-tie

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