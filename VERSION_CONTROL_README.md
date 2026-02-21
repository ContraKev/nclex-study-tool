# Version Control for NCLEX Study Tool

This project now includes a simple version control system for `scenarios.json` to prevent data loss and allow easy rollback to previous versions.

## Features

- **Automatic snapshots** before each build
- **Manual snapshots** with custom descriptions  
- **Version listing** with metadata
- **Version restoration** with confirmation
- **Cleanup** of old versions

## Files

- `version_control.py` - Main version control script
- `auto_version_save.py` - Helper for automatic saves
- `versions/` - Directory containing all saved versions

## Usage

### Save Current Version
```bash
python3 version_control.py save "Description of changes"
```

### List All Versions
```bash
python3 version_control.py list
```

### Restore from Version
```bash
python3 version_control.py restore scenarios_20260219_162034.json
```

### Clean Up Old Versions (Keep 10 Most Recent)
```bash
python3 version_control.py cleanup
```

Or keep a different number:
```bash
python3 version_control.py cleanup 5
```

## Automatic Saves

The build script (`build_distribution.py`) automatically saves a version before each build with the description "Auto-save before build".

## Version Files

Each version consists of:
- `scenarios_YYYYMMDD_HHMMSS.json` - The actual scenarios data
- `scenarios_YYYYMMDD_HHMMSS.json.meta` - Metadata including:
  - Timestamp
  - Description
  - File hash
  - Module count
  - Total scenario count

## Best Practices

1. **Save before major changes**: Always save a version before making significant modifications to scenarios.json
2. **Use descriptive names**: When manually saving, provide clear descriptions of what changed
3. **Regular cleanup**: Periodically clean up old versions to save disk space
4. **Check before restore**: Always review what you're restoring to avoid losing current work

## Emergency Restore

If scenarios.json gets corrupted:

1. List available versions: `python3 version_control.py list`
2. Choose a recent working version
3. Restore: `python3 version_control.py restore <filename>`

The system will automatically backup your current (potentially corrupted) file before restoring.
