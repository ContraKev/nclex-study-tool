from study_ingestor import StudyIngestor
import sys

ingestor = StudyIngestor()
files = [
    "/Users/kcsm/Downloads/_Cardio252 Dr. James.pptx",
    "/Users/kcsm/Downloads/1_Pharmacology-B Dr James SJ 12.pdf",
    "/Users/kcsm/Downloads/2_Pharmacology-A-Review Dr James SJ 12.pdf",
    "/Users/kcsm/Downloads/3_ANS receptors Dr James SJ 12.pdf"
]

for f in files:
    ingestor.extract_text(f)

with open("/Users/kcsm/.gemini/tmp/219604428743f8fd73670d18ce4de93c4cf3156039058c81e47b686aef0fcf96/extracted_notes.txt", "w") as out:
    out.write(ingestor.get_full_content())
