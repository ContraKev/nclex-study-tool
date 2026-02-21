#!/usr/bin/env python3
"""
Automatically save version before build
"""

import subprocess
import sys

def save_before_build():
    """Save a version before building"""
    try:
        # Run the version control save command
        result = subprocess.run([
            sys.executable, 'version_control.py', 'save', 'Auto-save before build'
        ], capture_output=True, text=True, cwd='.')
        
        if result.returncode == 0:
            print("✅ Auto-saved version before build")
            # Print the output (should show the saved version info)
            print(result.stdout.strip())
        else:
            print("⚠️  Auto-save failed:")
            print(result.stderr.strip())
            
    except Exception as e:
        print(f"⚠️  Auto-save error: {e}")

if __name__ == "__main__":
    save_before_build()
