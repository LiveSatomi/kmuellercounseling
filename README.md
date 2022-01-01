# Site repository for kmuellercounseling.com

## Development
### Dependencies
Local Dependencies
* The awscli as `aws` on the PATH
* nodejs version 8

AWS Hosted Dependencies
When cloudformation-deploy.sh is first run, it will create a PENDING connection that can be viewed in the Developer Tools section of the AWS Console. See https://console.aws.amazon.com/codesuite/settings/connections.
Update the pending connection to complete the Oauth handshake between AWS and the Github organization or user that has permission to read from the repo defined in the CloudFormation paramter $GithubRepo.

### Deployment
Push the project to GitHub, note the repository name and organization. Use them to edit cloudformation-deploy.sh.

Run cloudformation-deploy.sh to deploy the project to AWS. The first run will create the necessary AWS resources. Running the script again is only required if `template.yaml` is updated.

To release updates to the deployed app, first make sure the generated connection is Available, then push commits to the branch defined in the CloudFormation parameter $GithubBranch.
