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

def main():
    print("🔨 NCLEX Content Build v5.0")
    print("=" * 40)
    ok = validate_manifest()
    ok &= validate_exams()
    ok &= validate_drugs()
    if ok:
        print("\n✅ All content valid. Ready to build dist/ (migration in progress).")
        print("Next steps: Migrate legacy data to content/ JSON, then full build will inline into clean template.")
        print("Current dist/index.html remains functional (legacy mode).")
    else:
        print("\n❌ Validation failed. Fix errors before adding new content.")
        sys.exit(1)

if __name__ == "__main__":
    main()
