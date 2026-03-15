const fs = require('fs');
const path = require('path');

// ── Extract ALL missions from dist/index.html (single source of truth) ──

const html = fs.readFileSync('dist/index.html', 'utf8');
let allMissions = [];

// 1. Legacy JS missions (formatted script blocks)
const scriptBlocks = html.match(/<script>([\s\S]*?)<\/script>/g) || [];
for (const block of scriptBlocks) {
    const code = block.replace(/<\/?script>/g, '');

    // mission_prototype (single object)
    const protoMatch = code.match(/window\.mission_prototype\s*=\s*(\{[\s\S]*?\});\s*$/m);
    if (protoMatch) {
        try { allMissions.push(eval('(' + protoMatch[1] + ')')); } catch(e) {}
    }

    // missions_cardio_N arrays
    const cardioMatch = code.match(/window\.(missions_cardio_\d+)\s*=\s*(\[[\s\S]*?\]);\s*$/m);
    if (cardioMatch) {
        try {
            const arr = eval('(' + cardioMatch[2] + ')');
            if (Array.isArray(arr)) allMissions.push(...arr);
        } catch(e) {}
    }
}

// 2. Compact JSON missions (concat blocks)
const concatRegex = /\.concat\(\s*(\[[\s\S]*?\])\s*\)/g;
let match;
while ((match = concatRegex.exec(html)) !== null) {
    try {
        const arr = eval('(' + match[1] + ')');
        if (Array.isArray(arr)) allMissions.push(...arr);
    } catch(e) {}
}

// Deduplicate by mission id
const seen = new Set();
allMissions = allMissions.filter(m => {
    if (!m.id || !m.steps) return false;
    if (seen.has(m.id)) return false;
    seen.add(m.id);
    return true;
});

// Sort
allMissions.sort((a, b) => (a.numerical_id || 0) - (b.numerical_id || 0));

// Generate Markdown
let md = "# SNF: Charge Nurse Simulator - Master Answer Key\n\n";
md += "> **Note to User**: This document contains the solution key for all Clinical Missions. Use it to check your work or study the rationales.\n\n";

allMissions.forEach(m => {
    md += "---\n\n";
    md += `## Mission ${m.numerical_id}: ${m.title} (${m.id})\n\n`;

    if (m.steps) {
        m.steps.forEach((step, i) => {
            let type = step.type ? step.type.replace('_', ' ').toUpperCase() : 'UNKNOWN';
            md += `### Step ${i + 1}: ${type}\n`;
            md += `**Prompt**: ${step.prompt}\n\n`;

            md += "**Correct Answer**:\n";

            if (step.type === "matrix") {
                md += "| Row | Correct Column |\n|---|---|\n";
                // Handle both string rows and object rows with correct_col_idx
                const rows = step.rows || [];
                const columns = step.columns || [];
                const answers = step.answer || {};
                
                rows.forEach(row => {
                    const rowText = typeof row === 'string' ? row : (row.text || row.label || 'Unknown');
                    let answerText;
                    if (typeof row === 'object' && row.correct_col_idx !== undefined && columns.length > 0) {
                        // Object format with correct_col_idx
                        answerText = columns[row.correct_col_idx] || 'N/A';
                    } else {
                        // String format with answer object lookup
                        answerText = answers[rowText] || 'N/A';
                    }
                    md += `| ${rowText} | **${answerText}** |\n`;
                });
            } else if (step.type === "extended_sata") {
                if (Array.isArray(step.answer)) {
                    step.answer.forEach(a => {
                        md += `- [x] ${a}\n`;
                    });
                }
            } else if (step.type === "bowtie") {
                let centerA = step.center_condition ? step.center_condition.answer : "N/A";
                let leftA = step.left_actions ? step.left_actions.answer : [];
                let rightA = step.right_monitor ? step.right_monitor.answer : [];

                md += `- **Condition**: ${centerA}\n`;
                md += "- **Actions to Take**:\n";
                if (Array.isArray(leftA)) {
                    leftA.forEach(l => md += `  - ${l}\n`);
                }
                md += "- **Parameters to Monitor**:\n";
                if (Array.isArray(rightA)) {
                    rightA.forEach(r => md += `  - ${r}\n`);
                }
            } else if (step.type === "cloze_drag_drop") {
                // Cloze drag-drop: answer is object { BLANK1: "value1", BLANK2: "value2", ... }
                if (typeof step.answer === 'object' && !Array.isArray(step.answer)) {
                    for (const [blank, value] of Object.entries(step.answer)) {
                        md += `- **${blank}**: ${value}\n`;
                    }
                }
            } else if (step.type === "highlight") {
                // Highlight: answer is array of correct selections
                if (Array.isArray(step.answer)) {
                    step.answer.forEach(a => {
                        md += `- [x] ${a}\n`;
                    });
                }
            }

            md += "\n";
            md += `**Rationale**:\n> ${step.rationale || "No rationale provided."}\n\n`;
        });
    }
});

// Output
fs.writeFileSync('Mission_Answer_Key.md', md);
console.log(`Generated Answer Key for ${allMissions.length} missions.`);
