#!/usr/bin/env node
/**
 * Expand PEDS exam rationales to explicitly state the correct answer(s).
 * Usage: node expand_peds_rationales.js
 */
const fs = require('fs');
const path = require('path');

const PEDS_FILES = [
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

function expandRationale(scenario) {
  // Handle answer as array or single index
  let indices = scenario.answer;
  if (typeof indices === 'number') indices = [indices];
  if (!Array.isArray(indices)) indices = [0];

  const options = scenario.options || [];
  const originalRationale = scenario.rationale || '';

  // Get correct answer text(s)
  const correctTexts = indices.map(i => {
    const opt = options[i];
    return typeof opt === 'string' ? opt : `Option ${i + 1}`;
  });

  // Build the correct answer prefix
  let prefix;
  if (correctTexts.length === 1) {
    prefix = `The correct answer is ${correctTexts[0]}. `;
  } else {
    prefix = `The correct answers are ${correctTexts.join(', ')}. `;
  }

  // Avoid duplicating if already present
  if (originalRationale.startsWith('The correct answer')) {
    return originalRationale;
  }

  return prefix + originalRationale;
}

function processFile(filename) {
  if (!fs.existsSync(filename)) {
    console.log(`⚠️  Skip missing: ${filename}`);
    return 0;
  }

  const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
  let changed = 0;

  if (Array.isArray(data.scenarios)) {
    data.scenarios.forEach(scenario => {
      const oldRationale = scenario.rationale || '';
      const newRationale = expandRationale(scenario);
      if (newRationale !== oldRationale) {
        scenario.rationale = newRationale;
        changed++;
      }
    });
  }

  if (changed > 0) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`✅ ${filename}: expanded ${changed} rationales`);
  } else {
    console.log(`✓ ${filename}: already expanded`);
  }

  return changed;
}

console.log('Expanding PEDS rationales...\n');
let total = 0;
PEDS_FILES.forEach(f => { total += processFile(f); });
console.log(`\nDone. Total expanded: ${total} rationales across ${PEDS_FILES.length} files.`);
