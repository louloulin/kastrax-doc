#!/bin/bash

# This script performs a comprehensive replacement of "mastra" with "kastrax" in the codebase
# It handles different cases and ensures all file types are covered

echo "Starting comprehensive replacement of 'mastra' with 'kastrax'..."

# Define file types to process
FILE_TYPES=("*.tsx" "*.ts" "*.js" "*.jsx" "*.json" "*.md" "*.mdx" "*.html" "*.css" "*.scss" "*.yaml" "*.yml" "*.sh" "*.config.*")

# Create a combined find command for all file types
FIND_CMD="find . -type f \( "
for i in "${!FILE_TYPES[@]}"; do
  if [ $i -eq 0 ]; then
    FIND_CMD+=" -name \"${FILE_TYPES[$i]}\" "
  else
    FIND_CMD+=" -o -name \"${FILE_TYPES[$i]}\" "
  fi
done
FIND_CMD+=" \) -not -path \"*/node_modules/*\" -not -path \"*/.git/*\" -not -path \"*/.next/*\""

# Execute the find command to get all files
echo "Finding files to process..."
FILES=$(eval $FIND_CMD)

# Count the number of files to process
FILE_COUNT=$(echo "$FILES" | wc -l)
echo "Found $FILE_COUNT files to process"

# Process each file
COUNTER=0
for FILE in $FILES; do
  COUNTER=$((COUNTER+1))
  
  # Skip this script itself
  if [[ "$FILE" == "./comprehensive-replace.sh" ]]; then
    continue
  fi
  
  echo "[$COUNTER/$FILE_COUNT] Processing $FILE"
  
  # Replace different case variations
  # 1. mastra -> kastrax (lowercase)
  # 2. Mastra -> Kastrax (capitalized)
  # 3. MASTRA -> KASTRAX (uppercase)
  
  # For macOS compatibility
  sed -i '' -e 's/mastra/kastrax/g' -e 's/Mastra/Kastrax/g' -e 's/MASTRA/KASTRAX/g' "$FILE" 2>/dev/null || \
  # For Linux compatibility
  sed -i -e 's/mastra/kastrax/g' -e 's/Mastra/Kastrax/g' -e 's/MASTRA/KASTRAX/g' "$FILE" 2>/dev/null
done

echo "Replacement complete! Processed $COUNTER files."
