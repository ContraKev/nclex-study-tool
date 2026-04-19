import re
import os

with open('dist/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract styles
styles = re.findall(r'<style.*?>(.*?)</style>', content, re.DOTALL | re.IGNORECASE)
os.makedirs('dist/css', exist_ok=True)
with open('dist/css/style.css', 'w', encoding='utf-8') as f:
    for s in styles:
        f.write(s + '\n')

# Remove styles from HTML
content = re.sub(r'<style.*?>.*?</style>', '', content, flags=re.DOTALL | re.IGNORECASE)

# Extract scripts
scripts = []
def script_repl(match):
    script_content = match.group(1)
    tag_attrs = match.group(0).split('>')[0]
    if 'src=' not in tag_attrs:
        scripts.append(script_content)
        return '' # Remove the script tag
    return match.group(0) # Keep external scripts

content = re.sub(r'<script.*?>(.*?)</script>', script_repl, content, flags=re.DOTALL | re.IGNORECASE)

os.makedirs('dist/js', exist_ok=True)
legacy_data = []
app_logic = []

for s in scripts:
    if 'const data_' in s or ('window.' in s and 'Data =' in s) or 'window.mission_prototype' in s or '// Expanded Missions' in s or 'window.studyGuideContent =' in s or 'INJECTED SCENARIOS.JSON DATA' in s:
        legacy_data.append(s)
    else:
        app_logic.append(s)

with open('dist/js/legacy_data.js', 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(legacy_data))

with open('dist/js/app.js', 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(app_logic))

# Inject links before </head>
if '</head>' in content:
    content = content.replace('</head>', '    <link rel="stylesheet" href="css/style.css">\n</head>')
else:
    # Fallback
    content = '<link rel="stylesheet" href="css/style.css">\n' + content

# Inject scripts before </body>
script_tags = '    <script src="js/legacy_data.js"></script>\n    <script src="js/app.js"></script>\n</body>'
if '</body>' in content:
    content = content.replace('</body>', script_tags)
else:
    content += '\n' + script_tags

with open('dist/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Extracted {len(styles)} styles into css/style.css")
print(f"Extracted {len(legacy_data)} data scripts into js/legacy_data.js")
print(f"Extracted {len(app_logic)} logic scripts into js/app.js")
