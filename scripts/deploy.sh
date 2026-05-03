#!/bin/bash
set -e

SITE_ID="081618cf-8073-42ad-9696-a32ff6083310"

echo "Triggering Netlify build from latest remote commit..."
netlify api createSiteBuild --data "{\"site_id\": \"$SITE_ID\"}"
echo "Build triggered. Monitor at: https://app.netlify.com/sites/amazing-gingersnap-27ea5f/deploys"
