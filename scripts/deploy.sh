#!/usr/bin/env bash

set -e

zip -r site.zip packages/kauri-wallet/dist

curl -H "Content-Type: application/zip" \
     -H "Authorization: Bearer $NETLIFY_PUBLISH_KEY" \
     --data-binary "@site.zip" \
     https://api.netlify.com/api/v1/sites/$NETLIFY_SITE_ID/deploys