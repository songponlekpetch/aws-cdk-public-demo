import { App } from 'aws-cdk-lib';

import { VpcWithNatInstanceStack } from './lib/vpc-stack';

const app = new App();

new VpcWithNatInstanceStack(app, 'VpcDevStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  name: 'vpc-dev',
  cidr: '10.0.0.0/16',
});
