#!/usr/bin/env bash

# die on error
set -e

echo 'Retrieving latest deploy...'
url=`curl -H "Authorization: Bearer $NETLIFY_PUBLISH_KEY" https://api.netlify.com/api/v1/sites/agathis-australis.netlify.com/deploys`
temp=`echo $url | sed 's/\\\\\//\//g' | sed 's/[{}]//g' | awk -v k="text" '{n=split($0,a,","); for (i=1; i<=n; i++) print a[i]}' | sed 's/\"\:\"/\|/g' | sed 's/[\,]/ /g' | sed 's/\"//g' | grep -w -m 1 'id'`

echo "Publishing build ${temp##*|}..."
curl -X POST -H "Authorization: Bearer $NETLIFY_PUBLISH_KEY" -d "{}" "https://api.netlify.com/api/v1/sites/agathis-australis.netlify.com/deploys/${temp##*|}/restore"