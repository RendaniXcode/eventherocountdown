import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';

export class EventHeroCountdownEcsStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Create a VPC
        const vpc = new ec2.Vpc(this, 'EventHeroVpc', {
            maxAzs: 2,
        });

        // Create an ECS cluster
        const cluster = new ecs.Cluster(this, 'EventHeroCluster', {
            vpc: vpc
        });

        // Create a Fargate task definition
        const taskDefinition = new ecs.FargateTaskDefinition(this, 'EventHeroTask', {
            memoryLimitMiB: 512,
            cpu: 256,
        });

        // Create a container definition
        const containerName = 'eventhero-container';
        const container = taskDefinition.addContainer('EventHeroContainer', {
            image: ecs.ContainerImage.fromEcrRepository(
                ecr.Repository.fromRepositoryName(this, 'EventHeroRepo', 'eventhero-countdown')
            ),
            memoryLimitMiB: 512,
            logging: ecs.LogDrivers.awsLogs({ streamPrefix: 'eventhero-countdown' }),
            portMappings: [{ containerPort: 80 }],
        });

        // Create a Fargate service
        const service = new ecs.FargateService(this, 'EventHeroService', {
            cluster,
            taskDefinition,
            desiredCount: 2,
        });

        // Create an Application Load Balancer
        const lb = new elbv2.ApplicationLoadBalancer(this, 'EventHeroLB', {
            vpc,
            internetFacing: true
        });

        // Add a listener
        const listener = lb.addListener('EventHeroListener', {
            port: 80,
        });

        // Add targets to the listener
        listener.addTargets('EventHeroTargets', {
            port: 80,
            targets: [service],
            healthCheck: {
                path: '/',
                interval: cdk.Duration.seconds(60),
                timeout: cdk.Duration.seconds(5),
            }
        });

        // Output the load balancer URL
        new cdk.CfnOutput(this, 'LoadBalancerDNS', {
            value: lb.loadBalancerDnsName,
        });
    }
}