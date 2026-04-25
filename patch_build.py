import re
with open('tools/build.py', 'r') as f:
    content = f.read()

import_statement = "import shutil\n"

shutil_copy = """
def prepare_dist():
    print("\\n📦 Preparing dist/ directory...")
    dist_content = DIST / "content"
    if dist_content.exists():
        shutil.rmtree(dist_content)
    shutil.copytree(CONTENT, dist_content)
    print("✅ Copied content/ to dist/content/")
    return True
"""

# Insert imports
if 'import shutil' not in content:
    content = content.replace('import sys', 'import sys\nimport shutil')

# Insert prepare_dist function
if 'def prepare_dist():' not in content:
    content = content.replace('def verify_dist():', shutil_copy + '\ndef verify_dist():')

# Call prepare_dist in main
if 'ok &= prepare_dist()' not in content:
    content = content.replace('ok &= verify_dist()', 'ok &= prepare_dist()\n    ok &= verify_dist()')

with open('tools/build.py', 'w') as f:
    f.write(content)
