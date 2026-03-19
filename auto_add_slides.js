#!/usr/bin/env node
/**
 * auto_add_slides.js — Automatically add slide numbers to rationales in exam JS files
 * Usage: node auto_add_slides.js <exam_file.js>
 * Or: node auto_add_slides.js all  (processes all exam files in the directory)
 */

const fs = require("fs");
const path = require("path");

// Function to process a single exam file
function processExamFile(filePath) {
    console.log(`Processing ${filePath}...`);
    let content = fs.readFileSync(filePath, "utf8");

    let changed = false;

    // Use regex to find question blocks and update rationales
    // Pattern: slide: (\d+).*?rationale: "(.*?)"  (multiline)
    const questionRegex = /slide:\s*(\d+).*?rationale:\s*"([^"]*(?:\n[^"]*)*?)"/gs;

    content = content.replace(questionRegex, (match, slideNum, rationale) => {
        const slideText = ` (Slide ${slideNum})`;
        if (!rationale.endsWith(slideText)) {
            changed = true;
            return match.replace(rationale, rationale + slideText);
        }
        return match;
    });

    // Handle matrix questions (rationale in rows)
    const matrixRegex = /slide:\s*(\d+).*?"rationale":\s*"([^"]*(?:\n[^"]*)*?)"/gs;
    content = content.replace(matrixRegex, (match, slideNum, rationale) => {
        const slideText = ` (Slide ${slideNum})`;
        if (!rationale.endsWith(slideText)) {
            changed = true;
            return match.replace(rationale, rationale + slideText);
        }
        return match;
    });

    if (changed) {
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`  Updated rationales in ${filePath}`);
        return true;
    } else {
        console.log(`  No changes needed in ${filePath}`);
        return false;
    }
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Usage: node auto_add_slides.js <exam_file.js> | node auto_add_slides.js all");
    process.exit(1);
}

if (args[0] === "all") {
    // Process all exam files
    const files = [
        "exam_mens_womens_health.js",
        "exam_sti.js",
        // Add other exam files as they are created
        "lectureexam.js",
        "exam_cardio.js", // if exists
        // etc.
    ];

    let totalChanged = 0;
    for (const file of files) {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            if (processExamFile(filePath)) totalChanged++;
        } else {
            console.log(`File not found: ${file}`);
        }
    }
    console.log(`\nProcessed all exam files. ${totalChanged} files were updated.`);

} else {
    const filePath = path.resolve(args[0]);
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }
    processExamFile(filePath);
}