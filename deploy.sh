#!/bin/bash

# =============================================================================
# GitHub Desktop Guide - Deployment Script
# =============================================================================
# Deploys the GitHub Desktop guide to Netlify
# =============================================================================

set -e

REPO_NAME="44-tool-github-desktop-guide"
NETLIFY_SITE_NAME="antigravity-github-guide"

echo "🚀 Deploying $REPO_NAME to Netlify..."

# Check if netlify-cli is installed
if ! command -v netlify &> /dev/null; then
    echo "📦 Installing netlify-cli..."
    npm install -g netlify-cli
fi

# Deploy to Netlify
echo "🔗 Deploying to Netlify..."

netlify deploy \
    --dir=dist \
    --prod \
    --site="$NETLIFY_SITE_NAME" \
    --auth="$NETLIFY_ACCESS_TOKEN" \
    || netlify deploy \
        --dir=dist \
        --prod \
        --create-site \
        --auth="$NETLIFY_ACCESS_TOKEN"

echo "✅ Deployment complete!"
echo "🌐 Live URL will be available in the Netlify dashboard"
