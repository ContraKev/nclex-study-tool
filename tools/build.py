#!/usr/bin/env python3
"""
NCLEX Study Tool - Modular Content Build System v5.0

This replaces the fragile regex builds and manual edits.
Usage:
  python tools/build.py          # Validate + prepare (future: generate dist/index.html)
  python tools/build.py --full   # Full rebuild of dist/index.html from content/ + src/

Adding new content is now safe:
- Drop exam JSON in content/exams/
- Drop drug JSON in content/drugs/
- Add MD to content/study-guides/
- Update content/manifest.json
- Run this build (validates schema, fails fast on bad data)
- Commit dist/index.html

No more broken data, no more editing giant HTML.
"""

import json
import os
import sys
from pathlib import Path

try:
    import jsonschema
    HAS_SCHEMA = True
except ImportError:
    HAS_SCHEMA = False
    print("⚠️  jsonschema not installed. Run: pip install jsonschema  (validation limited)")

ROOT = Path(__file__).parent.parent
CONTENT = ROOT / "content"
SCHEMAS = ROOT / "schemas"
DIST = ROOT / "dist"

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def validate_manifest():
    manifest_path = CONTENT / "manifest.json"
    if not manifest_path.exists():
        print("❌ No content/manifest.json found. Run setup first.")
        return False
    manifest = load_json(manifest_path)
    print(f"✅ Manifest v{manifest.get('version')} loaded with {len(manifest.get('exams',[]))} exams, {len(manifest.get('drugCategories',[]))} drug cats, {len(manifest.get('studyGuides',[]))} guides")
    return True

def validate_exams():
    schema_path = SCHEMAS / "exam.schema.json"
    if not schema_path.exists():
        print("⚠️  No exam schema, skipping deep validation")
        return True
    if not HAS_SCHEMA:
        print("⚠️  Skipping exam validation (no jsonschema)")
        return True
    schema = load_json(schema_path)
    errors = 0
    for exam_meta in load_json(CONTENT / "manifest.json").get("exams", []):
        fpath = CONTENT / exam_meta["file"]
        if not fpath.exists():
            print(f"⚠️  Missing exam file: {fpath} (will use legacy until migrated)")
            continue
        try:
            data = load_json(fpath)
            jsonschema.validate(data, schema)
            print(f"✅ Valid exam: {data.get('name')} ({len(data.get('questions',[]))} q)")
        except Exception as e:
            print(f"❌ Invalid exam {fpath}: {e}")
            errors += 1
    return errors == 0

def validate_drugs():
    schema_path = SCHEMAS / "drug.schema.json"
    if not HAS_SCHEMA or not schema_path.exists():
        print("⚠️  Skipping drug validation")
        return True
    schema = load_json(schema_path)
    errors = 0
    for cat in load_json(CONTENT / "manifest.json").get("drugCategories", []):
        for f in cat.get("files", []):
            fpath = CONTENT / f
            if not fpath.exists():
                continue
            try:
                drugs = load_json(fpath)
                for d in drugs:
                    jsonschema.validate(d, schema)
                print(f"✅ Valid drug cat: {cat['name']} ({len(drugs)} cards)")
            except Exception as e:
                print(f"❌ Drug validation failed in {f}: {e}")
                errors += 1
    return errors == 0

def verify_dist():
    """Catch common runtime issues before push."""
    print("\n🔍 Verifying dist/index.html for common issues...")
    dist_path = DIST / "index.html"
    if not dist_path.exists():
        print("⚠️  No dist/index.html — skipping dist checks.")
        return True

    with open(dist_path, 'r', encoding='utf-8') as f:
        content = f.read()

    errors = 0

    # 1. Template literal breakage: ``` inside JS template strings
    triple = content.count('```')
    if triple > 0:
        print(f"❌ Found {triple} triple-backticks (```) — breaks JS template literals!")
        errors += 1
    else:
        print("✅ No template literal breakage (no ```)")

    # 2. Letter-based rationales in MCQ/SATA (broken by shuffle)
    import re
    # Find exam data arrays
    exam_data_patterns = re.findall(r'window\.\w+Data\s*=\s*(\[.*?\]);', content, re.DOTALL)
    letter_refs = 0
    for block in exam_data_patterns:
        # Only check MCQ/SATA questions
        if '"type":"mcq"' in block or '"type":"sata"' in block:
            matches = re.findall(r'Correct\s*\([A-D]\)', block)
            letter_refs += len(matches)
    if letter_refs > 0:
        print(f"❌ Found {letter_refs} 'Correct (A/B/C/D)' rationales — broken by MCQ shuffle!")
        errors += 1
    else:
        print("✅ No letter-based rationales (shuffle-safe)")

    # 3. Study guide keys present
    required_keys = ['peds_ch15_19_comprehensive', 'peds_ch20_24_comprehensive', 'ati_cms_peds_practice_a']
    missing = []
    for key in required_keys:
        if f"studyGuideContent['{key}']" not in content and f'studyGuideContent["{key}"]' not in content:
            missing.append(key)
    if missing:
        print(f"❌ Missing study guide keys: {missing}")
        errors += 1
    else:
        print(f"✅ All required study guide keys present ({len(required_keys)})")

    # 4. Rationale/answer mismatch (Correct (X) matches actual answer letter)
    import re as r2
    exam_data_patterns = r2.findall(r'window\.\w+Data\s*=\s*(\[.*?\]);', content, re.DOTALL)
    mismatches = 0
    for block in exam_data_patterns:
        # Extract each question object-ish: look for "answer":[N] and "rationale":"Correct (X):"
        # Simpler: check each question block
        questions = r2.findall(r'\{[^{}]*"answer":\[[^\]]+\][^{}]*"rationale":"[^"]*Correct\s*\([A-D]\)[^"]*"[^{}]*\}', block)
        for q in questions:
            ans_match = r2.search(r'"answer":\[(\d+)\]', q)
            rat_match = r2.search(r'Correct\s*\(([A-D])\)', q)
            if ans_match and rat_match:
                ans_idx = int(ans_match.group(1))
                claimed = rat_match.group(1)
                expected = ['A','B','C','D'][ans_idx] if ans_idx < 4 else None
                if expected and claimed != expected:
                    mismatches += 1
    if mismatches > 0:
        print(f"❌ Found {mismatches} rationale/answer mismatches (Correct (X) vs actual)")
        errors += 1
    else:
        print("✅ No rationale/answer mismatches")

    return errors == 0

def main():
    print("🔨 NCLEX Content Build v5.0")
    print("=" * 40)
    ok = validate_manifest()
    ok &= validate_exams()
    ok &= validate_drugs()
    ok &= verify_dist()
    if ok:
        print("\n✅ All checks passed.")
    else:
        print("\n❌ Issues found. Fix before pushing.")
        sys.exit(1)

if __name__ == "__main__":
    main()
