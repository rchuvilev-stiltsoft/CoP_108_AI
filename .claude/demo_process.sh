#!/bin/bash
# Simple long-running process for Claude background bash demo

echo "🚀 Demo process started (PID: $$)"
echo "📝 This process will run for 30 seconds..."

for i in {1..30}; do
    echo "⏱️  Tick $i/30 - $(date '+%H:%M:%S')"
    sleep 1
done

echo "✅ Demo process completed!"