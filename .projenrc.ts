import { awscdk } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.162.1',
  defaultReleaseBranch: 'main',
  name: 'aws-cdk-public-demo',
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.addDeps('@aws-quickstart/eks-blueprints@1.16.2');
project.gitignore.exclude('.env', 'cdk.context.json');

project.synth();