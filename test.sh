#!/bin/sh

set -e

echo "Testing valid samples..."
find sample/data/valid -type f | sort | while IFS= read -r file; do
  echo "Testing: $file"
  npx tsx sample/test.ts "$file" > /dev/null || { echo "$file failed to pass as valid."; exit 255; }
done

echo ""

echo "Testing invalid samples..."
find sample/data/invalid -type f | sort | while IFS= read -r file; do
  echo "Testing: $file"
  ! npx tsx sample/test.ts "$file" > /dev/null || { echo "$file unexpectedly passed as valid."; exit 255; }
done
