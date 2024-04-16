#!/bin/sh

set -e

echo "Testing valid samples..."
find sample/valid -type f | while IFS= read -r file; do
  echo "Testing: $file"
  npx tsx test "$file" > /dev/null || { echo "$file failed to pass as valid."; exit 255; }
done

echo ""

echo "Testing invalid samples..."
find sample/invalid -type f | while IFS= read -r file; do
  echo "Testing: $file"
  ! npx tsx test "$file" > /dev/null || { echo "$file unexpectedly passed as valid."; exit 255; }
done
