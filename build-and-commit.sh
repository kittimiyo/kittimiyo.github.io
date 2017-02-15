#!/usr/bin/env bash
# build, commit with message, and push to master

echo -e "Commit message: "
read message

npm run build

git add .

git commit -m "$message"
