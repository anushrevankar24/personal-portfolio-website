#!/bin/bash

echo "Stopping all Next.js development servers..."

# Kill all next dev processes
pkill -f "next dev" 2>/dev/null
pkill -f "node.*next-server" 2>/dev/null

# Wait a moment for processes to terminate
sleep 1

# Check if any processes are still running and force kill
if pgrep -f "next dev" > /dev/null 2>&1; then
    echo "Forcing shutdown of remaining processes..."
    pkill -9 -f "next dev" 2>/dev/null
fi

if pgrep -f "node.*next-server" > /dev/null 2>&1; then
    pkill -9 -f "node.*next-server" 2>/dev/null
fi

# Kill any node processes on ports 3000-3010
for port in {3000..3010}; do
    lsof -ti:$port 2>/dev/null | xargs kill -9 2>/dev/null
done

sleep 1

# Final check
if pgrep -f "next dev" > /dev/null 2>&1 || pgrep -f "node.*next" > /dev/null 2>&1; then
    echo "Warning: Some processes may still be running"
    pgrep -f "next" 2>/dev/null
else
    echo "All servers stopped successfully."
fi
