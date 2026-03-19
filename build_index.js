#!/usr/bin/env node
/**
 * build_index.js — Build dist/index.html by inlining exam JS files
 * Ensures slide numbers are included in rationales
 */

const fs = require("fs");
const path = require("path");

function buildIndex() {
    console.log("Building dist/index.html...");

    // Read the base HTML (assuming NGN_Mastery_Hub_v3.2.html or similar)
    // For now, read dist/index.html and update the exam arrays

    let html = fs.readFileSync("dist/index.html", "utf8");

    // List of exam files to inline
    const examFiles = [
        "exam_mens_womens_health.js",
        "exam_sti.js",
        "lectureexam.js"
    ];

    for (const examFile of examFiles) {
        if (fs.existsSync(examFile)) {
            console.log(`Inlining ${examFile}...`);

            // Read the exam JS content
            const examContent = fs.readFileSync(examFile, "utf8");

            // Find the variable name, e.g., window.mensWomensHealthExamData
            const varMatch = examContent.match(/window\.(\w+)ExamData/);
            if (varMatch) {
                const varName = varMatch[1];
                const fullVar = `window.${varName}ExamData`;

                // Find the existing array in HTML and replace
                const arrayRegex = new RegExp(`${fullVar}\\s*=\\s*\\[([\\s\\S]*?)\\];`, 'm');
                const newArray = examContent.match(/=\s*\[([\s\S]*)\];/)[1];

                html = html.replace(arrayRegex, `${fullVar} = [${newArray}];`);
                console.log(`  Replaced ${fullVar}`);
            }
        }
    }

    fs.writeFileSync("dist/index.html", html, "utf8");
    console.log("Built dist/index.html successfully");
}

if (require.main === module) {
    buildIndex();
}