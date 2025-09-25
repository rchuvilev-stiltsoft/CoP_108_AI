#!/bin/bash

echo "=== Claude Background Bash Demo ==="
echo ""
echo "This script demonstrates Claude's background bash capabilities:"
echo ""

# Create a simple long-running script
cat > /tmp/demo_server.sh << 'EOF'
#!/bin/bash
echo "Demo server starting..."
for i in {1..60}; do
    echo "Server running... tick $i"
    sleep 1
done
echo "Demo server finished"
EOF

chmod +x /tmp/demo_server.sh

echo "1. Starting a long-running process in background:"
echo "   Command: bash .claude/demo_process.sh --run_in_background=true"
echo ""
echo "   In Claude, this would run in background and return immediately"
echo "   Try it: bash .claude/demo_process.sh"
echo ""

echo "2. List running background processes:"
echo "   Command: /bashes"
echo "   Shows: bash_id, status, command"
echo ""

echo "3. Monitor output from background process:"
echo "   Command: /bash-output <bash_id>"
echo "   Shows: Real-time output from the process"
echo ""

echo "4. Kill a background process:"
echo "   Command: /kill-bash <bash_id>"
echo "   Terminates: The background process"
echo ""

echo "=== Live Example (foreground) ==="
echo "Starting demo server for 5 seconds..."

# Start the script and kill it after 5 seconds
bash /tmp/demo_server.sh &
DEMO_PID=$!
sleep 5
kill $DEMO_PID 2>/dev/null
wait $DEMO_PID 2>/dev/null

echo ""
echo "Demo complete! In Claude, this would run in background."