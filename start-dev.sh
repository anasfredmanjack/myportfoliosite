#!/bin/bash

echo "🚀 Starting Portfolio Development Environment..."
echo ""

# Kill any existing processes on these ports
echo "🧹 Cleaning up existing processes..."
lsof -ti:3001 | xargs kill -9 2>/dev/null || true
lsof -ti:5173 | xargs kill -9 2>/dev/null || true

echo "📡 Starting API server on port 3001..."
node dev-server.js &
API_PID=$!

# Wait a moment for API server to start
sleep 2

echo "🎨 Starting Vite dev server on port 5173..."
npx vite &
VITE_PID=$!

echo ""
echo "✅ Both servers are starting up!"
echo "📡 API Server: http://localhost:3001"
echo "🎨 Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $API_PID 2>/dev/null || true
    kill $VITE_PID 2>/dev/null || true
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait