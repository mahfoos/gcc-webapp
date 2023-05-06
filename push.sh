#!/bin/bash

BUCKETNAME=newgccargo

cd build

aws s3 sync . s3://$BUCKETNAME/ --acl public-read --delete --profile fayas --region me-central-1 

aws s3 cp s3://$BUCKETNAME/static/js/ s3://$BUCKETNAME/static/js/ --recursive --exclude "*" --include "*.js" --metadata-directive REPLACE --cache-control "max-age=30758400" --content-type "text/javascript" --profile fayas --region me-central-1 --acl public-read

aws s3 cp s3://$BUCKETNAME/static/css/ s3://$BUCKETNAME/static/css/ --recursive --exclude "*" --include "*.css" --metadata-directive REPLACE --cache-control "max-age=30758400" --content-type "text/css" --profile fayas --region me-central-1 --acl public-read

aws s3 cp s3://$BUCKETNAME/static/media/ s3://$BUCKETNAME/static/media/ --recursive --exclude "*" --include "*.jpg" --metadata-directive REPLACE --cache-control "max-age=30758400" --content-type "image/png" --profile fayas --region me-central-1 --acl public-read

aws s3 cp s3://$BUCKETNAME/static/media/ s3://$BUCKETNAME/static/media/ --recursive --exclude "*" --include "*.webp" --metadata-directive REPLACE --cache-control "max-age=30758400" --content-type "image/webp" --profile fayas --region me-central-1 --acl public-read

aws s3 cp s3://$BUCKETNAME/static/media/ s3://$BUCKETNAME/static/media/ --recursive --exclude "*" --include "*.jpeg" --metadata-directive REPLACE --cache-control "max-age=30758400" --content-type "image/jpeg" --profile fayas --region me-central-1 --acl public-read

aws s3 cp s3://$BUCKETNAME/static/media/ s3://$BUCKETNAME/static/media/ --recursive --exclude "*" --include "*.png" --metadata-directive REPLACE --cache-control "max-age=30758400" --content-type "image/png" --profile fayas --region me-central-1 --acl public-read

aws s3 cp s3://$BUCKETNAME/static/media/ s3://$BUCKETNAME/static/media/ --recursive --exclude "*" --include "*.svg" --metadata-directive REPLACE --cache-control "max-age=30758400" --content-type "image/svg+xml" --profile fayas --region me-central-1 --acl public-read


aws s3 cp s3://$BUCKETNAME/manifest.json s3://$BUCKETNAME/manifest.json --recursive --exclude "*" --include "*.json" --metadata-directive REPLACE --cache-control "max-age=30758400, no-cache" --content-type "image/svg+xml" --profile fayas --region me-central-1 --acl public-read

aws s3 cp s3://$BUCKETNAME/asset-manifest.json s3://$BUCKETNAME/asset-manifest.json --recursive --exclude "*" --include "*.json" --metadata-directive REPLACE --cache-control "max-age=30758400, no-cache" --content-type "image/svg+xml" --profile fayas --region me-central-1 --acl public-read

aws s3 cp s3://$BUCKETNAME/favicon.ico s3://$BUCKETNAME/favicon.ico --recursive --metadata-directive REPLACE --cache-control "max-age=30758400" --content-type "image/x-icon" --profile fayas --region me-central-1 --acl public-read

aws s3 cp s3://$BUCKETNAME/logo192.png s3://$BUCKETNAME/logo192.png --recursive --metadata-directive REPLACE --cache-control "max-age=30758400" --content-type "image/png" --profile fayas --region me-central-1 --acl public-read

aws s3 cp s3://$BUCKETNAME/logo512.png s3://$BUCKETNAME/logo512.png --recursive --metadata-directive REPLACE --cache-control "max-age=30758400" --content-type "image/png" --profile fayas --region me-central-1 --acl public-read

aws cloudfront create-invalidation \
    --distribution-id E2APRNMPPKBLFS \
    --paths "/*"  --profile fayas