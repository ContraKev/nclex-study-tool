#!/usr/bin/env python3
"""
Simple Version Control for scenarios.json
"""

import os
import json
import shutil
from datetime import datetime
import hashlib

VERSIONS_DIR = "versions"
SCENARIOS_FILE = "scenarios.json"

def get_file_hash(filepath):
    """Get SHA256 hash of file"""
    if not os.path.exists(filepath):
        return None
    with open(filepath, 'rb') as f:
        return hashlib.sha256(f.read()).hexdigest()

def save_version(description="Auto-save"):
    """Save current scenarios.json as a new version"""
    if not os.path.exists(SCENARIOS_FILE):
        print(f"❌ {SCENARIOS_FILE} not found")
        return False
    
    # Create versions directory if it doesn't exist
    os.makedirs(VERSIONS_DIR, exist_ok=True)
    
    # Generate version filename with timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    version_file = f"{VERSIONS_DIR}/scenarios_{timestamp}.json"
    
    # Copy current file
    shutil.copy2(SCENARIOS_FILE, version_file)
    
    # Create metadata
    metadata = {
        "timestamp": timestamp,
        "description": description,
        "hash": get_file_hash(version_file),
        "modules_count": 0,
        "total_scenarios": 0
    }
    
    # Try to get some stats
    try:
        with open(SCENARIOS_FILE, 'r') as f:
            data = json.load(f)
            metadata["modules_count"] = len(data.get("modules", []))
            total_scenarios = 0
            for module in data.get("modules", []):
                total_scenarios += len(module.get("scenarios", []))
            metadata["total_scenarios"] = total_scenarios
    except:
        pass
    
    # Save metadata
    metadata_file = f"{version_file}.meta"
    with open(metadata_file, 'w') as f:
        json.dump(metadata, f, indent=2)
    
    print(f"✅ Saved version: {version_file}")
    print(f"   Description: {description}")
    print(f"   Modules: {metadata['modules_count']}, Scenarios: {metadata['total_scenarios']}")
    
    return True

def list_versions():
    """List all saved versions"""
    if not os.path.exists(VERSIONS_DIR):
        print("❌ No versions directory found")
        return
    
    versions = []
    for filename in os.listdir(VERSIONS_DIR):
        if filename.endswith('.json.meta'):
            meta_file = os.path.join(VERSIONS_DIR, filename)
            json_file = meta_file[:-5]  # Remove .meta
            
            if os.path.exists(json_file):
                try:
                    with open(meta_file, 'r') as f:
                        metadata = json.load(f)
                    versions.append((json_file, metadata))
                except:
                    pass
    
    if not versions:
        print("❌ No versions found")
        return
    
    # Sort by timestamp (newest first)
    versions.sort(key=lambda x: x[1]['timestamp'], reverse=True)
    
    print(f"📁 Found {len(versions)} versions:")
    print("-" * 80)
    
    for json_file, metadata in versions:
        timestamp = metadata['timestamp']
        description = metadata.get('description', 'No description')
        modules = metadata.get('modules_count', 0)
        scenarios = metadata.get('total_scenarios', 0)
        
        print(f"📄 {os.path.basename(json_file)}")
        print(f"   📅 {timestamp}")
        print(f"   📝 {description}")
        print(f"   📊 {modules} modules, {scenarios} scenarios")
        print()

def restore_version(version_filename, confirm=True):
    """Restore scenarios.json from a version file"""
    version_path = os.path.join(VERSIONS_DIR, version_filename)
    
    if not os.path.exists(version_path):
        print(f"❌ Version file not found: {version_path}")
        return False
    
    if confirm:
        print(f"⚠️  This will overwrite the current {SCENARIOS_FILE}")
        response = input("Are you sure? (y/N): ")
        if response.lower() != 'y':
            print("❌ Restore cancelled")
            return False
    
    # Backup current file first
    if os.path.exists(SCENARIOS_FILE):
        backup_name = f"{SCENARIOS_FILE}.backup_before_restore"
        shutil.copy2(SCENARIOS_FILE, backup_name)
        print(f"💾 Backed up current file to: {backup_name}")
    
    # Restore the version
    shutil.copy2(version_path, SCENARIOS_FILE)
    
    # Load and show stats
    try:
        with open(SCENARIOS_FILE, 'r') as f:
            data = json.load(f)
        
        modules_count = len(data.get("modules", []))
        total_scenarios = 0
        for module in data.get("modules", []):
            total_scenarios += len(module.get("scenarios", []))
        
        print(f"✅ Restored {version_filename}")
        print(f"   📊 {modules_count} modules, {total_scenarios} scenarios")
        
    except Exception as e:
        print(f"⚠️  Restored file, but JSON validation failed: {e}")
    
    return True

def cleanup_old_versions(keep_count=10):
    """Keep only the most recent versions"""
    if not os.path.exists(VERSIONS_DIR):
        return
    
    versions = []
    for filename in os.listdir(VERSIONS_DIR):
        if filename.endswith('.json'):
            filepath = os.path.join(VERSIONS_DIR, filename)
            mtime = os.path.getmtime(filepath)
            versions.append((filepath, mtime))
    
    # Sort by modification time (newest first)
    versions.sort(key=lambda x: x[1], reverse=True)
    
    # Remove old versions
    removed_count = 0
    for filepath, _ in versions[keep_count:]:
        try:
            os.remove(filepath)
            # Also remove metadata file if it exists
            meta_file = filepath + '.meta'
            if os.path.exists(meta_file):
                os.remove(meta_file)
            removed_count += 1
        except:
            pass
    
    if removed_count > 0:
        print(f"🧹 Cleaned up {removed_count} old versions, keeping {min(keep_count, len(versions))} most recent")

def main():
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python version_control.py <command> [args...]")
        print("Commands:")
        print("  save [description]    - Save current scenarios.json")
        print("  list                  - List all versions")
        print("  restore <filename>    - Restore from version")
        print("  cleanup [keep_count]  - Clean up old versions")
        return
    
    command = sys.argv[1]
    
    if command == 'save':
        description = ' '.join(sys.argv[2:]) if len(sys.argv) > 2 else 'Manual save'
        save_version(description)
    
    elif command == 'list':
        list_versions()
    
    elif command == 'restore':
        if len(sys.argv) < 3:
            print("❌ Please specify version filename to restore")
            return
        version_filename = sys.argv[2]
        restore_version(version_filename)
    
    elif command == 'cleanup':
        keep_count = int(sys.argv[2]) if len(sys.argv) > 2 else 10
        cleanup_old_versions(keep_count)
    
    else:
        print(f"❌ Unknown command: {command}")

if __name__ == "__main__":
    main()
