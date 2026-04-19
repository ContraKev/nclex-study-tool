# NCLEX Study Tool Version Control Guide

This guide outlines a robust version control workflow for the NCLEX Study Tool. Because this application is heavily dependent on content files and relies on manual synchronization with `dist/index.html`, taking the right precautions before making changes will ensure you can easily revert if anything breaks.

## 1. Creating Checkpoints Before Major Changes

Before running the build script, adding new exams, or making sweeping refactors, create a designated branch. This acts as a sandbox.

```bash
# Ensure you are up to date on main
git checkout main
git pull

# Create a new feature branch for your changes
git checkout -b feature/add-new-exam
```

## 2. Using Git Tags for Stable Releases

Once you have a fully working version of the app (e.g., after successful deployments to GitHub Pages), tag that commit. This creates a hard reference you can always roll back to.

```bash
# Tag the current working state
git tag -a v5.1.0 -m "Added Peds Exam 3 and fixed pharm module"

# Push the tag to GitHub
git push origin v5.1.0
```

## 3. How to Revert if the App Breaks

If a change breaks the application or the build pipeline, here is how you safely step back:

### Scenario A: Uncommitted Changes
If you've edited files but haven't committed them yet:
```bash
# Discard all unstaged changes
git restore .

# Discard changes to a specific file
git restore dist/index.html
```

### Scenario B: Committed but Not Pushed
If you committed a breaking change locally but haven't pushed it to GitHub:
```bash
# Undo the last commit but keep your file changes
git reset HEAD~1

# OR: Completely wipe the last commit and all its changes (DANGEROUS)
git reset --hard HEAD~1
```

### Scenario C: Pushed to GitHub (GitHub Pages is Broken)
If the broken code is already live on `main`:
```bash
# Find the commit hash of the last working version using git log
git log --oneline

# Revert the broken commit (this creates a new commit that undoes the changes)
git revert <broken_commit_hash>

# Push the fix
git push origin main
```

## 4. Content Recovery Strategy

Because the application utilizes a `tools/build.py` script that validates JSON schemas:
- Never edit `dist/index.html` JSON arrays manually if you can avoid it. Rely on `content/exams/` as your source of truth.
- If the build script fails, do not force-push `index.html`. Read the build output (e.g., `Missing exam file` or schema violations) and fix the underlying JSON.
- If an exam JSON gets corrupted, you can retrieve its last working state directly from Git:
  ```bash
  git checkout HEAD~1 -- content/exams/corrupted-exam.json
  ```
