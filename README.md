# AWS CDK Public Demo
This IAC is run by AWS CDK Typescript for public demo to POC some experiment fast.

## ⛔️ Disclaimer
I prepared this code for demo. Don't use it on production. 

## Initial project
1. Create your .env and configure CDK_DEFAULT_ACCOUNT and CDK_DEFAULT_REGION that you want to deploy. You can see example in [.env.example](.env.example)
2. Install project dependencies by command `npx projen install`
3. Initial CDK resources on your AWS account by using command  `npx cdk bootstrap`. This command will provision CDK's S3, ECR and IAM roles.

## How to deploy
1. Run this command to deploy `npx cdk deploy VpcDevStack`
