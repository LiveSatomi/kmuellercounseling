# Jack O. Mueller - Personal Site

This site houses an About Me section and resume.

## Development
### Dependencies
Local Dependencies
* The awscli as `aws` on the PATH
* nodejs version 8

AWS Hosted Dependencies
* Store a secret in AWS Secret manager of the form `prod/$GithubRepo/github` ($GithubRepo is the CloudFormation Parameter) with a key of `oauth` whose value is the OAuth key granting access to the GithubRepo. If the secret name or key name should be something different, change them in template.yaml.

### Deployment
Push the project to GitHub, generate an OAuth token and save it as a secret as described in the Dependencies section.

Run cloudformation-deploy.sh to deploy the project to AWS. The first run will create the necessary AWS resources. Running the script again is only required if `template.yaml` is updated.

To make updates to the app, simply push code to the master branch of the repository. The branch to watch can be changed in `template.yaml`.
