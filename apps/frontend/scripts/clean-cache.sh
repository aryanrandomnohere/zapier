#!/bin/bash

# Clean Next.js Cache Script
# Use this when you encounter 404 errors for chunk files or other cache-related issues

echo "🧹 Cleaning Next.js cache and rebuilding..."

# Remove Next.js build cache
rm -rf .next
echo "✅ Removed .next directory"

# Remove Node modules cache
rm -rf node_modules/.cache
echo "✅ Removed node_modules/.cache"

# Remove Turbopack cache (if using Turbopack)
rm -rf .turbo
echo "✅ Removed .turbo directory (if exists)"

# Reinstall dependencies to ensure clean state (optional)
# Uncomment the next two lines if you want to also reinstall node_modules
# rm -rf node_modules package-lock.json
# npm install

echo "🚀 Starting clean development server..."
npm run dev
