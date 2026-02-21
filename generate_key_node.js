const fs = require('fs');
const path = require('path');

// Mock window
global.window = {};

// Load helper to process files
function loadFile(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    eval(content);
}

// Load all legacy JS files
try {
    loadFile('mission_prototype.js');
    loadFile('missions_cardio_1.js');
    loadFile('missions_cardio_2.js');
} catch (e) {
    console.error("Error loading JS files:", e);
}

// Load JSON data
const jsonContent = fs.readFileSync('scenarios.json', 'utf8');
const jsonData = JSON.parse(jsonContent);

// Aggregate all missions
let allMissions = [];

// 1. Legacy JS Missions
if (window.mission_prototype) allMissions.push(window.mission_prototype);
if (window.missions_cardio_1) allMissions = allMissions.concat(window.missions_cardio_1);
if (window.missions_cardio_2) allMissions = allMissions.concat(window.missions_cardio_2);

// 2. JSON Missions
if (jsonData.modules) {
    jsonData.modules.forEach(mod => {
        if (mod.scenarios) {
            mod.scenarios.forEach(sc => {
                if (sc.type === 'mission') {
                    allMissions.push(sc);
                }
            });
        }
    });
}

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
                // Handle answer object
                if (typeof step.answer === 'object') {
                    for (const [row, col] of Object.entries(step.answer)) {
                        md += `| ${row} | **${col}** |\n`;
                    }
                }
            } else if (step.type === "extended_sata") {
                if (Array.isArray(step.answer)) {
                    step.answer.forEach(a => {
                        md += `- [x] ${a}\n`;
                    });
                }
            } else if (step.type === "bowtie") {
                // Bowtie structure might vary between JS and JSON slightly?
                // JS: center_condition.answer
                // JSON: same

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
            }

            md += "\n";
            md += `**Rationale**:\n> ${step.rationale || "No rationale provided."}\n\n`;
        });
    }
});

// Output
fs.writeFileSync('Mission_Answer_Key.md', md);
console.log(`Generated Answer Key for ${allMissions.length} missions.`);
