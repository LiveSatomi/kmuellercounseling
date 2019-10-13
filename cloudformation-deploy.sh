npm run convertTemplate || exit 1
aws cloudformation deploy --template-file template.json --stack-name jackomueller-stack  --capabilities CAPABILITY_IAM --parameter-overrides GithubRepo=jackomueller ProjectSource=https://github.com/LiveSatomi/jackomueller.git GithubOwner=LiveSatomi GithubOAuthToken=TokenHere ProjectName=jackomueller
