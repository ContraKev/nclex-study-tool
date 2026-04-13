#!/usr/bin/env node
/**
 * sync_peds.js — Sync expanded peds rationales from .json into dist/index.html
 * Run after updating exam_peds_*.json files to keep dist/index.html current.
 */
const fs = require('fs');

const PRIMARY_PEDS = [
  'exam_peds_ch15_growth_development.json',
  'exam_peds_ch16_infant.json',
  'exam_peds_ch17_toddler.json',
  'exam_peds_ch_18_the_preschool_child.json',
  'exam_peds_ch_19_the_school_age_child.json',
  'exam_peds_ch_20_the_adolescent.json',
  'exam_peds_ch21.json',
  'exam_peds_ch_22_health_care_adaptations_for_the_ch.json',
  'exam_peds_ch_23_peds_neuro_and_sensory_dos.json',
  'exam_peds_ch_25_peds_respiratorydisorders_nmigs.json',
  'exam_peds_chapter_024_musculoskeletal_dos_peds.json',
  'exam_peds_chapter_026_cv_dos_peds.json',
  'exam_peds_chapter_027_lymph_and_blood_dos_peds.json',
  'exam_peds_chapter_028_gi_peds.json',
  'exam_peds_chapter_029_gu_peds.json',
  'exam_peds_chapter_030.json',
  'exam_peds_chapter_031.json',
  'exam_peds_t3_peds_ch32_communicable_diseases.json',
  'exam_peds_chapter_033.json'
];

// Map filename stem to variable name (e.g., ch15_growth_development -> pedsChch15ExamData)
function filenameToVar(filename) {
  const stem = filename.replace('exam_peds_', '').replace('.json', '');
  // Extract chapter number: ch15, ch_18, chapter_024, t3_peds_ch32
  let num = null;
  const m1 = stem.match(/^ch_?(\d+)/);     // ch15 or ch_25
  const m2 = stem.match(/^chapter_(\d+)/); // chapter_024
  const m3 = stem.match(/t3_peds_ch(\d+)/); // t3_peds_ch32
  if (m1) num = m1[1];
  else if (m2) num = m2[1];
  else if (m3) num = m3[1];
  if (!num) return null;
  return 'pedsChch' + num + 'ExamData';
}

// Build display name from stem
function displayName(stem) {
  const map = {
    'ch15_growth_development': 'Pediatrics: Growth & Development (Ch 15)',
    'ch16_infant': 'Pediatrics: The Infant (Ch 16)',
    'ch17_toddler': 'Pediatrics: The Toddler (Ch 17)',
    'ch_18_the_preschool_child': 'Pediatrics: The Preschool Child (Ch 18)',
    'ch_19_the_school_age_child': 'Pediatrics: The School Age Child (Ch 19)',
    'ch_20_the_adolescent': 'Pediatrics: The Adolescent (Ch 20)',
    'ch21': "Pediatrics: The Child's Experience of Hospitalization (Ch 21)",
    'ch_22_health_care_adaptations_for_the_ch': 'Pediatrics: Health Care Adaptations (Ch 22)',
    'ch_23_peds_neuro_and_sensory_dos': 'Pediatrics: Neuro & Sensory Disorders (Ch 23)',
    'ch_25_peds_respiratorydisorders_nmigs': 'Pediatrics: Respiratory Disorders (Ch 25)',
    'chapter_024_musculoskeletal_dos_peds': 'Pediatrics: Musculoskeletal (Ch 24)',
    'chapter_026_cv_dos_peds': 'Pediatrics: Cardiovascular (Ch 26)',
    'chapter_027_lymph_and_blood_dos_peds': 'Pediatrics: Lymph & Blood (Ch 27)',
    'chapter_028_gi_peds': 'Pediatrics: GI (Ch 28)',
    'chapter_029_gu_peds': 'Pediatrics: GU (Ch 29)',
    'chapter_030': 'Pediatrics: Endocrine (Ch 30)',
    'chapter_031': 'Pediatrics: Integumentary (Ch 31)',
    't3_peds_ch32_communicable_diseases': 'Pediatrics: Communicable Diseases (Ch 32)',
    'chapter_033': 'Pediatrics: Emotional/Behavioral (Ch 33)'
  };
  return map[stem] || `Pediatrics: ${stem}`;
}

function sync() {
  if (!fs.existsSync('dist/index.html')) {
    console.error('dist/index.html not found');
    process.exit(1);
  }
  let html = fs.readFileSync('dist/index.html', 'utf8');
  let count = 0;

  PRIMARY_PEDS.forEach(file => {
    if (!fs.existsSync(file)) return;
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const scenarios = data.scenarios || [];
    if (!scenarios.length) return;

    const varName = filenameToVar(file);
    if (!varName) return;

    const stem = file.replace('exam_peds_', '').replace('.json', '');
    const name = displayName(stem);
    const id = 'peds_' + stem.replace(/[^a-z0-9]/gi, '_').replace(/^_+|_+$/g, '');

    // 1. Replace or insert the array assignment
    const arrayRe = new RegExp(`window\\.${varName}\\s*=\\s*\\[[\\s\\S]*?\\];`, 'm');
    const arrayBlock = `window.${varName} = ${JSON.stringify(scenarios)};`;
    if (arrayRe.test(html)) {
      html = html.replace(arrayRe, arrayBlock);
    } else {
      // Insert after last pedsChch block if any, else before </script>
      const lastPeds = html.lastIndexOf('window.pedsChch');
      if (lastPeds !== -1) {
        const after = html.indexOf(';', lastPeds);
        if (after !== -1) {
          html = html.slice(0, after + 1) + '\n' + arrayBlock + html.slice(after + 1);
        }
      } else {
        // Fallback: inject before closing body
        html = html.replace(/<\/body>/i, `<script>\n${arrayBlock}\n</script>\n</body>`);
      }
    }

    // 2. Replace or insert the push + log block
    const pushRe = new RegExp(`window\\.availableExams\\.push\\(\\{[^}]*id:\\s*['"]${id}['"][\\s\\S]*?\\}\\);`, 'm');
    const escapedName = name.replace(/'/g, "\\'");
    const pushBlock = `window.availableExams.push({id: '${id}', name: '${escapedName}', category: 'Pediatrics', data: window.${varName}});\nconsole.log('Created exam module: ${escapedName} with ' + window.${varName}.length + ' questions');`;
    if (pushRe.test(html)) {
      html = html.replace(pushRe, pushBlock);
    } else {
      // Insert after last availableExams.push for peds
      const lastPush = html.lastIndexOf("availableExams.push({id: 'peds_");
      if (lastPush !== -1) {
        const after = html.indexOf(');', lastPush);
        if (after !== -1) {
          html = html.slice(0, after + 2) + '\n' + pushBlock + html.slice(after + 2);
        }
      }
    }

    count++;
    console.log(`Synced ${file} -> ${varName} (${scenarios.length} Q)`);
  });

  fs.writeFileSync('dist/index.html', html, 'utf8');
  console.log(`\nDone. Synced ${count} peds modules into dist/index.html.`);
}

sync();
