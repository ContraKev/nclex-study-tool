import sys
from engine import main as run_engine

if __name__ == "__main__":
    try:
        run_engine()
    except KeyboardInterrupt:
        print("\nShift ended early. See you next time!")