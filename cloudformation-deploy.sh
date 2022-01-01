#!/bin/bash
npm run convertTemplate || exit 1
aws cloudformation deploy --template-file template.json --stack-name kmuellercounseling-stack  --capabilities CAPABILITY_IAM --parameter-overrides GithubRepo=LiveSatomi/kmuellercounseling GithubBranch=master ProjectName=kmuellercounseling
