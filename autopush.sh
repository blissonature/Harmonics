#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

# Ask for a commit message if not provided
if [ -z "$1" ]; then
  read -p "Enter commit message: " msg
else
  msg=$1
fi

# Git operations
git add .
git commit -m "${msg:-Auto-update}"
git push origin main
