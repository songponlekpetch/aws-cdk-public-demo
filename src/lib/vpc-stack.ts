import { App, Stack, StackProps } from 'aws-cdk-lib';
import {
  Vpc,
  IpAddresses,
  NatProvider,
  InstanceType,
  InstanceClass,
  InstanceSize,
  NatTrafficDirection,
  SubnetType,
  GenericLinuxImage
} from 'aws-cdk-lib/aws-ec2';

export interface VpcWithNatInstanceStackProps extends StackProps {
  name: string;
  cidr: string;
}

export class VpcWithNatInstanceStack extends Stack {
  constructor(scope: App, id: string, props: VpcWithNatInstanceStackProps) {
    super(scope, id, props);

    new Vpc(this, 'vpc', {
      vpcName: props.name,
      ipAddresses: IpAddresses.cidr(props.cidr),
      enableDnsSupport: true,
      natGatewayProvider: NatProvider.instanceV2({
        instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.NANO),
        defaultAllowedTraffic: NatTrafficDirection.OUTBOUND_ONLY,
        machineImage: new GenericLinuxImage({
          'ap-southeast-1': 'ami-01f4b27101396da65',
        }),
      }),
      createInternetGateway: true,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public',
          subnetType: SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'private',
          subnetType: SubnetType.PRIVATE_WITH_EGRESS,
        },
      ],
      availabilityZones: [`${props.env?.region}a`, `${props.env?.region}b`],
    });
  }
}
