import { v4 as uuidv4 } from "uuid";

export const realExam = {
  EXAM_SESSION_ID: "",
  examNumber: "1",
  examType: "CloudPractitioner",
  correct: 0,
  time: "5400000",
  currentQuestion: 1,
  isPaused: false,
  isFinished: false,
  questions: [
    {
      // Q1
      questionId: uuidv4(),
      question:
        "What does AWS provide to deploy popular technologies - such as IBM MQ - on AWS with the least amount of effort and time?",
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS OpsWorks",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Aurora",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon CloudWatch",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Quick Start reference deployments",
          isSelected: false,
        },
      ],
      explanation: `AWS Quick Start Reference Deployments outline the architectures for popular enterprise solutions on AWS and provide AWS CloudFormation templates to automate their deployment. Each Quick Start launches, configures, and runs the AWS compute, network, storage, and other services required to deploy a specific workload on AWS, using AWS best practices for security and availability.
Quick Starts are built by AWS solutions architects and partners to help you deploy popular technologies on AWS, based on AWS best practices. These accelerators reduce hundreds of manual installation and configuration procedures into just a few steps, so you can build your production environment quickly and start using it immediately.`,
    },
    {
      // Q2
      questionId: uuidv4(),
      question:
        "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS SDK",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS API",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS CLI",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Management Console",
          isSelected: false,
        },
      ],
      explanation: `The AWS Management Console allows you to access and manage Amazon Web Services through a simple and intuitive web-based user interface. You can also use the AWS Console mobile app to quickly view resources on the go.`,
    },
    {
      // Q3
      questionId: uuidv4(),
      question: `A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Personal Health Dashboard",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Support Concierge Service",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Support API",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Infrastructure Event Management",
          isSelected: false,
        },
      ],
      explanation: `AWS Infrastructure Event Management is a short-term engagement with AWS Support, included in the Enterprise-level Support product offering, and available for additional purchase for Business-level Support subscribers. AWS Infrastructure Event Management partners with your technical and project resources to gain a deep understanding of your use case and provide architectural and scaling guidance for an event. Common use-case examples for AWS Event Management include advertising launches, new product launches, and infrastructure migrations to AWS.`,
    },

    {
      // Q4
      questionId: uuidv4(),
      question: `A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Configure the Amazon Simple Email Service to send an SNS billing notification to their email address",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Setup a CloudTrail billing alarm that triggers an SNS notification to their email address",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Configure the Amazon Connect Service to send an SNS billing notification to their email address",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Setup a CloudWatch billing alarm that triggers an SNS notification to their email address",
          isSelected: false,
        },
      ],
      explanation: `In CloudWatch, you can set up a billing alarm that triggers if your costs exceed a threshold that you set. This CloudWatch alarm can also be configured to trigger an SNS notification to your email address.`,
    },
    {
      // Q5
      questionId: uuidv4(),
      question: `What do you gain from setting up consolidated billing for five different AWS accounts under another master account?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Each AWS account gets six times the free-tier services capacity",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "The consolidated billing feature is just for organizational purposes",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "AWS services' costs will be reduced to half the original price",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Each AWS account gets volume discounts",
          isSelected: false,
        },
      ],
      explanation: `AWS consolidated billing enables an organization to consolidate payments for multiple Amazon Web Services (AWS) accounts within a single organization by making a single paying account. For billing purposes, AWS treats all the accounts on the consolidated bill as one account. Some services, such as Amazon EC2 and Amazon S3 have volume pricing tiers across certain usage dimensions that give the user lower prices when they use the service more. For example if you use 50 TB in each account you would normally be charged $23 *50*3 (because they are 3 different accounts), But with consolidated billing you would be charged $23*50+$22*50*2 (because they are treated as one account) which means that you would save $100.`,
    },
    {
      // Q6
      questionId: uuidv4(),
      question: `Which service is used to ensure that messages between software components are not lost if one or more components fail?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Direct Connect",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon SES",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Connect",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon SQS",
          isSelected: false,
        },
      ],
      explanation: `Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available. SQS lets you decouple application components so that they run independently, increasing the overall fault tolerance of the system. Multiple copies of every message are stored redundantly across multiple availability zones so that they are available whenever needed.`,
    },
    {
      // Q7
      questionId: uuidv4(),
      question: `Which of the following is NOT correct regarding Amazon EC2 On-demand instances?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "When using on-demand Linux instances, you are charged per second based on an hourly rate",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "With on-demand instances, no longer-term commitments or upfront payments are needed",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "The on-demand instances follow the AWS pay-as-you-go pricing model",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "You have to pay a start-up fee when launching a new instance for the first time",
          isSelected: false,
        },
      ],
      explanation: `There are no startup or termination fees associated with Amazon EC2.`,
    },
    {
      // Q8
      questionId: uuidv4(),
      question: `What should you do in order to keep the data on EBS volumes safe? (Choose two)`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Regularly update firmware on EBS devices",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Prevent any unauthorized access to AWS data centers",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Store a backup daily in an external drive",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Ensure that EBS data is encrypted at rest",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Create EBS snapshots",
          isSelected: false,
        },
      ],
      explanation: `Creating snapshots of EBS Volumes can help ensure that you have a backup of your EBS volumes just in case any issues arise. Amazon EBS encryption offers a straight-forward encryption solution for your EBS resources that doesn't require you to build, maintain, and secure your own key management infrastructure. Encryption operations occur on the servers that host EC2 instances, ensuring the security of both data-at-rest and data-in-transit between an instance and its attached EBS storage.`,
    },
    {
      // Q9
      questionId: uuidv4(),
      question: `One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "By automatically scaling your AWS resources using an Elastic Load Balancer",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "By reducing interdependencies between application components wherever possible",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "By automatically scaling your on-premises resources based on changes in demand",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "By automatically provisioning the required AWS resources based on changes in demand",
          isSelected: false,
        },
      ],
      explanation: `Before cloud computing, you had to overprovision infrastructure to ensure you had enough capacity to handle your business operations at the peak level of activity. Now, you can provision the amount of resources that you actually need, knowing you can instantly scale up or down with the needs of your business. This reduces costs and improves your ability to meet your users’ demands.

        The concept of Elasticity involves the ability of a service to scale its resources out or in (up or down) based on changes in demand. For example, Amazon EC2 Autoscaling can help automate the process of adding or removing Amazon EC2 instances as demand increases or decreases.`,
    },
    {
      // Q10
      questionId: uuidv4(),
      question: `In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon Athena",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon EC2",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "ECR",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Auto Scaling",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "ELB",
          isSelected: false,
        },
      ],
      explanation: ` You should attempt to build as much automation as possible in both detecting and reacting to failure. You can use services like ELB and Amazon Route53 to configure health checks and mask failure by only routing traffic to healthy endpoints. In addition, Auto Scaling can be configured to automatically replace unhealthy nodes. You can also replace unhealthy nodes using the Amazon EC2 auto-recovery feature or services such as AWS OpsWorks and AWS Elastic Beanstalk. It won’t be possible to predict every possible failure scenario on day one. Make sure you collect enough logs and metrics to understand normal system behavior. After you understand that, you will be able to set up alarms that trigger automated response or manual intervention.`,
    },
    {
      // Q11
      questionId: uuidv4(),
      question: `A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon Kinesis Video Streams",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon SNS",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS CloudFormation",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon CloudFront",
          isSelected: false,
        },
      ],
      explanation: `             Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.



        The use cases of Amazon CloudFront include:
        
        1- Accelerate static website content delivery.
        
        CloudFront can speed up the delivery of your static content (for example, images, style sheets, JavaScript, and so on) to viewers across the globe. By using CloudFront, you can take advantage of the AWS backbone network and CloudFront edge servers to give your viewers a fast, safe, and reliable experience when they visit your website.
        
        2- Live & on-demand video streaming.
        The Amazon CloudFront CDN offers multiple options for streaming your media – both pre-recorded files and live events – at sustained, high throughput required for 4K delivery to global viewers.
        
         3- Security.
        
        CloudFront integrates seamlessly with AWS Shield for Layer 3/4 DDoS mitigation and AWS WAF for Layer 7 protection.
        
        4- Customizable content delivery with Lambda@Edge.
        
        Lambda@Edge is a feature of Amazon CloudFront that lets you run code closer to users of your application, which improves performance and reduces latency.`,
    },
    {
      // Q12
      questionId: uuidv4(),
      question: `You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon DynamoDB",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon CloudWatch",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Redshift",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon RDS",
          isSelected: false,
        },
      ],
      explanation: `Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizable capacity while automating time-consuming administration tasks such as hardware provisioning, operating system maintenance, database setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need.`,
    },
    {
      // Q13
      questionId: uuidv4(),
      question: `What does the "Principle of Least Privilege" refer to?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "All IAM users should have at least the necessary permissions to access the core AWS services",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "IAM users should not be granted any permissions; to keep your account safe",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "All trusted IAM users should have access to any AWS service in the respective AWS account",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "You should grant your users only the permissions they need when they need them and nothing more",
          isSelected: false,
        },
      ],
      explanation: `The principle of least privilege is one of the most important security practices and it means granting users the required permissions to perform the tasks entrusted to them and nothing more. The security administrator determines what tasks users need to perform and then attaches the policies that allow them to perform only those tasks. You should start with a minimum set of permissions and grant additional permissions when necessary. Doing so is more secure than starting with permissions that are too lenient and then trying to tighten them down.`,
    },
    {
      // Q14
      questionId: uuidv4(),
      question: `You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Contact the AWS Concierge team",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Contact the AWS Security team",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Contact the AWS Customer Service team",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Contact the AWS Abuse team",
          isSelected: false,
        },
      ],
      explanation: `       The AWS Abuse team can assist you when AWS resources are being used to engage in the following types of abusive behavior:     

        I. Spam: You are receiving unwanted emails from an AWS-owned IP address, or AWS resources are being used to spam websites or forums.
        
        II. Port scanning: Your logs show that one or more AWS-owned IP addresses are sending packets to multiple ports on your server, and you believe this is an attempt to discover unsecured ports.
        
        III. Denial of service attacks (DOS): Your logs show that one or more AWS-owned IP addresses are being used to flood ports on your resources with packets, and you believe this is an attempt to overwhelm or crash your server or software running on your server.    
        
        IV. Intrusion attempts: Your logs show that one or more AWS-owned IP addresses are being used to attempt to log in to your resources.
        
        V. Hosting objectionable or copyrighted content: You have evidence that AWS resources are being used to host or distribute illegal content or distribute copyrighted content without the consent of the copyright holder.
        
        VI. Distributing malware: You have evidence that AWS resources are being used to distribute software that was knowingly created to compromise or cause harm to computers or machines on which it is installed.
        
        
        
        Note: Anyone can report abuse of AWS resources, not just AWS customers.`,
    },
    {
      // Q15
      questionId: uuidv4(),
      question: `According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "The AWS customers are only allowed to perform penetration testing on service managed by AWS",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Penetration testing is not allowed in AWS",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS",
          isSelected: false,
        },
      ],
      explanation: `          AWS customers are welcome to carry out security assessments and penetration tests against their AWS infrastructure without prior approval for 8 services:

        1- Amazon EC2 instances, NAT Gateways, and Elastic Load Balancers.
        
        2- Amazon RDS.
        
        3- Amazon CloudFront.
        
        4- Amazon Aurora.
        
        5- Amazon API Gateways.
        
        6- AWS Lambda and Lambda Edge functions.
        
        7- Amazon Lightsail resources.
        
        8- Amazon Elastic Beanstalk environments.`,
    },
    {
      // Q16
      questionId: uuidv4(),
      question: `What is the advantage of the AWS-recommended practice of "decoupling" applications?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Allows updates of any monolithic application quickly and easily",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Allows tracking of any API call made to any AWS service",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Allows treating an application as a single, cohesive unit",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Reduces inter-dependencies so that failures do not impact other components of the application",
          isSelected: false,
        },
      ],
      explanation: `            As application complexity increases, a desirable attribute of an IT system is that it can be broken into smaller, loosely coupled components. This means that IT systems should be designed in a way that reduces interdependencies—a change or a failure in one component should not cascade to other components. On the other hand if the components of an application are tightly coupled and one component fails, the entire application will also fail. Therefore when designing your application, you should always decouple its components.`,
    },
    {
      // Q17
      questionId: uuidv4(),
      question: `What is the AWS service that provides a virtual network dedicated to your AWS account?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Subnets",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Dedicated Hosts",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS VPN",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon VPC",
          isSelected: false,
        },
      ],
      explanation: `             Amazon Virtual Private Cloud (Amazon VPC) allows you to carve out a portion of the AWS Cloud that is dedicated to your AWS account. Amazon VPC enables you to launch AWS resources into a virtual network that you've defined. This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.`,
    },
    {
      // Q18
      questionId: uuidv4(),
      question: `Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Automate the process of provisioning new compute resources",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Achieve global high availability",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Create private connection to your data center",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Make synchronous replication of your data possible",
          isSelected: false,
        },
      ],
      explanation: `          Each AWS Region contains multiple distinct locations, or Availability Zones. Each Availability Zone is engineered to be independent from failures in other Availability Zones. An Availability Zone is a data center, and in some cases, an Availability Zone consists of multiple data centers. Availability Zones within a Region provide inexpensive, low-latency network connectivity to other zones in the same Region. This allows you to replicate data across data centers in a synchronous manner so that failover can be automated and appear transparent to your users.`,
    },
    {
      // Q19
      questionId: uuidv4(),
      question: `The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose two)`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS KMS",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Elastic File System",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Elastic MapReduce",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Elastic Load Balancer",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Availability Zones",
          isSelected: false,
        },
      ],
      explanation: `               Each AWS Region is a separate geographic area. Each AWS Region has multiple, isolated locations known as Availability Zones. When designing your AWS Cloud architecture, you should make sure that your system will continue to run even if failures happen. You can achieve this by deploying your AWS resources in multiple Availability zones. Availability zones are isolated from each other, therefore if one availability zone goes down, the other AZ’s will still be up and running and hence your application will be more fault tolerant. In addition to availability zones you can build a disaster recovery solution by deploying your AWS resources in other regions. If an entire region goes down you will still have resources in another region able to continue to provide a solution. Finally, you can use the Elastic Load Balancer to regularly perform health checks and distribute traffic only to the healthy instances.`,
    },
    {
      // Q20
      questionId: uuidv4(),
      question: `What is the AWS database service that allows you to upload data structured in key-value format?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon Redshift",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon RDS",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Aurora",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon DynamoDB",
          isSelected: false,
        },
      ],
      explanation: `        Amazon DynamoDB is a NoSQL database service. NoSQL databases are used for non-structured data that are typically stored in JSON-like, key-value documents.`,
    },
    {
      // Q21
      questionId: uuidv4(),
      question: `Which of the following helps a customer view the Amazon EC2 billing activity for the past month?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS System Manager",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Budgets",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS TCO",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Cost & Usage Reports",
          isSelected: false,
        },
      ],
      explanation: `           The AWS Cost & Usage Report is your one-stop shop for accessing the most detailed information available about your AWS costs and usage.The AWS Cost & Usage Report lists AWS usage for each service category used by an account and its IAM users in hourly or daily line items, as well as any tags that you have activated for cost allocation purposes.`,
    },
    {
      // Q22
      questionId: uuidv4(),
      question: `A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while reducing costs?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Building a new data center in the US and implementing a hybrid model",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Registering a new US domain name to serve the users in the US",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Applying the Amazon Connect latency-based routing policy",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Deploying new Amazon EC2 instances in a Region located in the US",
          isSelected: false,
        },
      ],
      explanation: `The only way to reduce latency for the US users is to provision new Amazon EC2 instances in a Region closer to or in the US, OR by using Amazon CloudFront to cache copies of the content in edge locations close to the US users. In both cases, user requests will travel a shorter distance over the network, and the performance will improve.`,
    },
    {
      // Q23
      questionId: uuidv4(),
      question: `Which of the below is a best-practice when designing solutions on AWS?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Invest heavily in architecting your environment, as it is not easy to change your design later",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Use AWS reservations to reduce costs when testing your production environment",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Provision a large compute capacity to handle any spikes in load",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Automate wherever possible to make architectural experimentation easier",
          isSelected: false,
        },
      ],
      explanation: `The Well-Architected Framework identifies a set of general design principles to facilitate good design in the cloud:

        1- Stop guessing your capacity needs: Eliminate guessing about your infrastructure capacity needs. When you make a capacity decision before you deploy a system, you might end up sitting on expensive idle resources or dealing with the performance implications of limited capacity. With cloud computing, these problems can go away. You can use as much or as little capacity as you need, and scale up and down automatically.
        
        2- Test systems at production scale: In the cloud, you can create a production-scale test environment on demand, complete your testing, and then decommission the resources. Because you only pay for the test environment when it's running, you can simulate your live environment for a fraction of the cost of testing on premises.
        
        3- Automate to make architectural experimentation easier: Automation allows you to create and replicate your systems at low cost and avoid the expense of manual effort. You can track changes to your automation, audit the impact, and revert to previous parameters when necessary.
        
        4- Allow for evolutionary architectures: Allow for evolutionary architectures. In a traditional environment, architectural decisions are often implemented as static, one-time events, with a few major versions of a system during its lifetime. As a business and its context continue to change, these initial decisions might hinder the system's ability to deliver changing business requirements. In the cloud, the capability to automate and test on demand lowers the risk of impact from design changes. This allows systems to evolve over time so that businesses can take advantage of innovations as a standard practice.
        
        5- Drive architectures using data: In the cloud you can collect data on how your architectural choices affect the behavior of your workload. This lets you make fact-based decisions on how to improve your workload. Your cloud infrastructure is code, so you can use that data to inform your architecture choices and improvements over time.
        
        6- Improve through game days: Test how your architecture and processes perform by regularly scheduling game days to simulate events in production. This will help you understand where improvements can be made and can help develop organizational experience in dealing with events.`,
    },
    {
      // Q24
      questionId: uuidv4(),
      question: `You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon Inspector",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "EC2 Instance Usage Report",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Trusted Advisor",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS CloudTrail",
          isSelected: false,
        },
      ],
      explanation: `        AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services. This event history simplifies security analysis, resource change tracking, and troubleshooting.`,
    },
    {
      // Q25
      questionId: uuidv4(),
      question: `What is the AWS service that enables AWS architects to manage infrastructure as code?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Config",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon EMR",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon SES",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS CloudFormation",
          isSelected: false,
        },
      ],
      explanation: `            AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. You create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances), and AWS CloudFormation takes care of provisioning and configuring those resources for you. You don't need to individually create and configure AWS resources and figure out what's dependent on what; AWS CloudFormation handles all that for you.`,
    },
    {
      // Q26
      questionId: uuidv4(),
      question: `A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Cost Explorer",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Budgets",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Elastic Load Balancer",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Auto Scaling",
          isSelected: false,
        },
      ],
      explanation: `                AWS Auto Scaling is the feature that automates the process of adding/removing server capacity (based on demand). Autoscaling allows you to reduce your costs by automatically turning off resources that aren’t in use. On the other hand, Autoscaling ensures that your application runs effectively by provisioning more server capacity if required.`,
    },
    {
      // Q27
      questionId: uuidv4(),
      question: `An organization has decided to reserve EC2 compute capacity for three years in order to reduce costs. It is possible that the application workloads could change during the reservation time period. What is the EC2 Reserved Instance (RI) type that will allow the company to modify the reservation if they need to?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Scheduled RIs",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Elastic RIs",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Standard RIs",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Convertible RIs",
          isSelected: false,
        },
      ],
      explanation: `             Convertible RIs provide a discount (up to 54% off On-Demand) and the capability to change the attributes of the RI as long as the exchange results in the creation of Reserved Instances of equal or greater value. These attributes include instance family, instance type, platform, scope, and tenancy.`,
    },
    {
      // Q28
      questionId: uuidv4(),
      question: `You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Spot instances",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Reserved instances",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Dedicated instances",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "On-demand instances",
          isSelected: false,
        },
      ],
      explanation: `           With On-Demand instances, you pay for compute capacity by the hour or second (minimum of 60 seconds) with no long-term commitments. You can increase or decrease your compute capacity depending on the demands of your application and only pay for what you use.

        The use of On-Demand instances frees you from the costs and complexities of planning, purchasing, and maintaining hardware and transforms what are commonly large fixed costs into much smaller variable costs. On-Demand instances also remove the need to buy “safety net” capacity to handle periodic traffic spikes.`,
    },
    {
      // Q29
      questionId: uuidv4(),
      question: `As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "IEM",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "IAM",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "EFS",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "TAM",
          isSelected: false,
        },
      ],
      explanation: `          For Enterprise-level customers, a TAM (Technical Account Manager) provides technical expertise for the full range of AWS services and obtains a detailed understanding of your use case and technology architecture. TAMs work with AWS Solution Architects to help you launch new projects and give best practices recommendations throughout the implementation life cycle. Your TAM is the primary point of contact for ongoing support needs, and you have a direct telephone line to your TAM.`,
    },
    {
      // Q30
      questionId: uuidv4(),
      question: `Which statement is true regarding the AWS Shared Responsibility Model?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Patching the guest OS is always the responsibility of AWS",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Security of the managed services is the responsibility of the customer",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Security of the IaaS services is the responsibility of AWS",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Responsibilities vary depending on the services used",
          isSelected: false,
        },
      ],
      explanation: `          Customers should be aware that their responsibilities may vary depending on the AWS services chosen.  For example, when using Amazon EC2, you are responsible for applying operating system and application security patches regularly. However, such patches are applied automatically when using Amazon RDS.`,
    },
    {
      // Q31
      questionId: uuidv4(),
      question: `Which service provides object-level storage in AWS?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon EBS",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon EFS",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Instance Store",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon S3",
          isSelected: false,
        },
      ],
      explanation: `        Amazon S3 is an object level storage built to store and retrieve any amount of data from anywhere – web sites and mobile apps, corporate applications, and data from IoT sensors or devices. It is designed to deliver 99.999999999% durability, and stores data for millions of applications used by market leaders in every industry.`,
    },
    {
      // Q32
      questionId: uuidv4(),
      question: `Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Shield",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Management Console",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Aurora",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Trusted Advisor",
          isSelected: false,
        },
      ],
      explanation: `           AWS Trusted Advisor is an online tool that provides you real time guidance to help you provision your resources following AWS best practices. AWS Trusted Advisor offers a rich set of best practice checks and recommendations across five categories: cost optimization; security; fault tolerance; performance; and service limits.

        AWS Trusted Advisor improves the security of your application by closing gaps, enabling various AWS security features, and examining your permissions.



The core security checks include: (Important)

1- Security Groups - Specific Ports Unrestricted.

Checks security groups for rules that allow unrestricted access to specific ports. Unrestricted access increases opportunities for malicious activity (hacking, denial-of-service attacks, loss of data).

2- Amazon S3 Bucket Permissions.

Checks buckets in Amazon Simple Storage Service (Amazon S3) that have open access permissions. Bucket permissions that grant List access to everyone can result in higher than expected charges if objects in the bucket are listed by unintended users at a high frequency. Bucket permissions that grant Upload/Delete access to everyone create potential security vulnerabilities by allowing anyone to add, modify, or remove items in a bucket. This check examines explicit bucket permissions and associated bucket policies that might override the bucket permissions.

3- MFA on Root Account.

Checks the root account and warns if multi-factor authentication (MFA) is not enabled. For increased security, AWS recommends that you protect your account by using MFA, which requires a user to enter a unique authentication code from their MFA hardware or virtual device when interacting with the AWS console and associated websites.

`,
    },
    {
      // Q33
      questionId: uuidv4(),
      question: `Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Build security in every layer",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Adopt monolithic architecture",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Parallelize tasks",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Implement elasticity",
          isSelected: false,
        },
      ],
      explanation: `           In the traditional data center-based model of IT, once infrastructure is deployed, it typically runs whether it is needed or not, and all the capacity is paid for, regardless of how much it gets used. In the cloud, resources are elastic, meaning they can instantly grow ( to maintain performance) or shrink ( to reduce costs).`,
    },
    {
      // Q34
      questionId: uuidv4(),
      question: `Which of the below options are related to the reliability of AWS? (Choose two)`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Providing compensation to customers if issues occur",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Applying the principle of least privilege to all of its resources",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "All AWS services are considered Global Services, and this design helps customers serve their international users",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Ability to recover quickly from failures",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Automatically provisioning new resources to meet demand",
          isSelected: false,
        },
      ],
      explanation: `          The reliability term encompasses the ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues. The automatic provisioning of resources and the ability to recover from failures meet these criteria.`,
    },
    {
      // Q35
      questionId: uuidv4(),
      question: `Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon Elastic Block Store",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Aurora",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Redshift",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon DynamoDB",
          isSelected: false,
        },
      ],
      explanation: `            Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models. Its flexible data model, reliable performance, and automatic scaling of throughput capacity, makes it a great fit for mobile, web, gaming, ad tech, IoT, and many other applications.`,
    },
    {
      // Q36
      questionId: uuidv4(),
      question: `What does Amazon CloudFront use to distribute content to global users with low latency?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Global Accelerator",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Regions",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Data Centers",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Edge Locations",
          isSelected: false,
        },
      ],
      explanation: `          To deliver content to global end users with lower latency, Amazon CloudFront uses a global network of Edge Locations and Regional Edge Caches in multiple cities around the world. Amazon CloudFront uses this network to cache copies of your content close to your end-users. Amazon CloudFront ensures that end-user requests are served by the closest edge location. As a result, end-user requests travel a short distance, improving performance for your end-users, while reducing the load on the origin servers.`,
    },
    {
      // Q37
      questionId: uuidv4(),
      question: `How can you view the distribution of AWS spending in one of your AWS accounts?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "By using Amazon VPC console",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "By contacting the AWS Support team",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "By contacting the AWS Finance team",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "By using AWS Cost Explorer",
          isSelected: false,
        },
      ],
      explanation: `               AWS Cost Explorer is a free tool that you can use to view your costs and usage. You can view data up to the last 13 months, forecast how much you are likely to spend for the next three months, and get recommendations for what Reserved Instances to purchase. You can use AWS Cost Explorer to see patterns in how much you spend on AWS resources over time, identify areas that need further inquiry, and see trends that you can use to understand your costs. You can also specify time ranges for the data, and view time data by day or by month.`,
    },
    {
      // Q38
      questionId: uuidv4(),
      question: `What does the AWS Personal Health Dashboard provide? (Choose two)`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Recommendations for Cost Optimization",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Published information about the current status and availability of all AWS services",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "A dashboard detailing vulnerabilities in your applications",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Personalized view of AWS service health",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Detailed troubleshooting guidance to address AWS events impacting your resources",
          isSelected: false,
        },
      ],
      explanation: `               AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you. While the Service Health Dashboard displays the general status of AWS services, Personal Health Dashboard gives you a personalized view into the performance and availability of the AWS services underlying your AWS resources.

        The benefits of the AWS personal health dashboard include:
        
        **A personalized View of Service Health: Personal Health Dashboard gives you a personalized view of the status of the AWS services that power your applications, enabling you to quickly see when AWS is experiencing issues that may impact you. For example, in the event of a lost EBS volume associated with one of your EC2 instances, you would gain quick visibility into the status of the specific service you are using, helping save precious time troubleshooting to determine root cause.
        
        **Proactive Notifications: The dashboard also provides forward looking notifications, and you can set up alerts across multiple channels, including email and mobile notifications, so you receive timely and relevant information to help plan for scheduled changes that may affect you. In the event of AWS hardware maintenance activities that may impact one of your EC2 instances, for example, you would receive an alert with information to help you plan for, and proactively address any issues associated with the upcoming change.
        
        **Detailed Troubleshooting Guidance: When you get an alert, it includes remediation details and specific guidance to enable you to take immediate action to address AWS events impacting your resources. For example, in the event of an AWS hardware failure impacting one of your EBS volumes, your alert would include a list of your affected resources, a recommendation to restore your volume, and links to the steps to help you restore it from a snapshot. This targeted and actionable information reduces the time needed to resolve issues.`,
    },
    {
      // Q39
      questionId: uuidv4(),
      question: `What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS KMS",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Email verification",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Encrypted keys",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS MFA",
          isSelected: false,
        },
      ],
      explanation: `AWS Multi-Factor Authentication (MFA) is a simple best practice that adds an extra layer of protection on top of using just your user name and password to authenticate.`,
    },
    {
      // Q40
      questionId: uuidv4(),
      question: `Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS KMS",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Config",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Cognito",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS WAF",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Shield",
          isSelected: false,
        },
      ],
      explanation: `         AWS provides flexible infrastructure and services that help customers implement strong DDoS mitigations and create highly available application architectures that follow AWS Best Practices for DDoS Resiliency. These include services such as Amazon Route 53, Amazon CloudFront, Elastic Load Balancing, and AWS WAF to control and absorb traffic, and deflect unwanted requests. These services integrate with AWS Shield, a managed DDoS protection service that provides always-on detection and automatic inline mitigations to safeguard web applications running on AWS.`,
    },
    {
      // Q41
      questionId: uuidv4(),
      question: `Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon VPC",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Elastic Compute Cloud",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS IAM",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon DynamoDB",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Elastic MapReduce",
          isSelected: false,
        },
      ],
      explanation: `            For managed services such as Amazon Elastic MapReduce (Amazon EMR) and DynamoDB, AWS is responsible for performing all the operations needed to keep the service running.

        Amazon EMR launches clusters in minutes. You don’t need to worry about node provisioning, infrastructure setup, Hadoop configuration, or cluster tuning. Amazon EMR takes care of these tasks so you can focus on analysis.

       DynamoDB is serverless with no servers to provision, patch, or manage and no software to install, maintain, or operate. DynamoDB automatically scales tables up and down to adjust for capacity and maintain performance. Availability and fault tolerance are built in, eliminating the need to architect your applications for these capabilities.

       Other managed services include: AWS Lambda, Amazon RDS, Amazon Redshift, Amazon CloudFront, and several other services.

        For these managed services, AWS is responsible for most of the configuration and management tasks, but customers are still responsible for managing their data (including encryption options), classifying their assets, and using IAM tools to apply the appropriate permissions.`,
    },
    {
      // Q42
      questionId: uuidv4(),
      question: `You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "The Reserved Instance discounts can only be shared with the master account",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "There are no cost benefits from using consolidated billing; It is for information purposes only",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "The purchased instances will have better performance than On-demand instances",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "All accounts can receive the hourly cost benefit of the Reserved Instances",
          isSelected: false,
        },
      ],
      explanation: `                 For billing purposes, the consolidated billing feature of AWS Organizations treats all the accounts in the organization as one account. This means that all accounts in the organization can receive the hourly cost benefit of Reserved Instances that are purchased by any other account. For example, Suppose that Fiona and John each have an account in an organization. Fiona has five Reserved Instances of the same type, and John has none. During one particular hour, Fiona uses three instances and John uses six, for a total of nine instances on the organization's consolidated bill. AWS bills five instances as Reserved Instances, and the remaining four instances as On-demand instances.`,
    },
    {
      // Q43
      questionId: uuidv4(),
      question: `You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS CloudTrail",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Config",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Lambda",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon CloudWatch",
          isSelected: false,
        },
      ],
      explanation: `            Amazon CloudWatch is a service that monitors AWS cloud resources and the applications you run on AWS. You can use Amazon CloudWatch to collect and track metrics, collect and monitor log files, set alarms, and automatically react to changes in your AWS resources. Amazon CloudWatch can monitor AWS resources such as Amazon EC2 instances, Amazon DynamoDB tables, and Amazon RDS DB instances, as well as custom metrics generated by your applications and services, and any log files your applications generate. You can use CloudWatch to detect anomalous behavior in your environments, take automated actions, troubleshoot issues, and discover insights to keep your applications running smoothly.`,
    },
    {
      // Q44
      questionId: uuidv4(),
      question: `A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon SNS",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Concierge Support Team",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon CloudWatch",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Trusted Advisor",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon Inspector",
          isSelected: false,
        },
      ],
      explanation: `           Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector automatically assesses applications for vulnerabilities or deviations from best practices. After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity. These findings can be reviewed directly or as part of a detailed assessment report which is available via the Amazon Inspector console or API. To help get started quickly, Amazon Inspector includes a knowledge base of hundreds of rules mapped to common security best practices and vulnerability definitions. Examples of built-in rules include checking for remote root login being enabled, or vulnerable software versions installed. These rules are regularly updated by AWS security researchers.



        AWS Trusted Advisor offers a rich set of best practice checks and recommendations across five categories: cost optimization; security; fault tolerance; performance; and service limits. Like your customized cloud security expert, AWS Trusted Advisor analyzes your AWS environment and provides security recommendations to protect your AWS environment. The service improves the security of your applications by closing gaps, examining permissions, and enabling various AWS security features.`,
    },
    {
      // Q45
      questionId: uuidv4(),
      question: `Which service provides DNS in the AWS cloud?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon CloudFront",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Config",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon EMR",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Route 53",
          isSelected: false,
        },
      ],
      explanation: `                Amazon Route 53 is a global service that provides highly available and scalable Domain Name System (DNS) services, domain name registration, and health-checking web services. It is designed to give developers and businesses an extremely reliable and cost effective way to route end users to Internet applications by translating names like example.com into the numeric IP addresses, such as 192.0.2.1, that computers use to connect to each other.

        Route 53 also simplifies the hybrid cloud by providing recursive DNS for your Amazon VPC and on-premises networks over AWS Direct Connect or AWS VPN.`,
    },
    {
      // Q46
      questionId: uuidv4(),
      question: `Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "User name and password",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Secret token",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "User ID",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Access keys",
          isSelected: false,
        },
      ],
      explanation: `           Access keys consist of an access key ID and secret access key, which are used to sign programmatic requests to AWS using the CLI or the SDK.`,
    },
    {
      // Q47
      questionId: uuidv4(),
      question: `Which S3 storage class is best for data with unpredictable access patterns?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon S3 Standard-Infrequent Access",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon S3 Glacier",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon S3 Standard",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon S3 Intelligent-Tiering",
          isSelected: false,
        },
      ],
      explanation: `       The S3 Intelligent-Tiering storage class is designed to optimize costs by automatically moving data to the most cost-effective access tier, without performance impact or operational overhead. It works by storing objects in two access tiers: one tier that is optimized for frequent access and another lower-cost tier that is optimized for infrequent access. For a small monthly monitoring and automation fee per object, Amazon S3 monitors access patterns of the objects in S3 Intelligent-Tiering, and moves the ones that have not been accessed for 30 consecutive days to the infrequent access tier. If an object in the infrequent access tier is accessed, it is automatically moved back to the frequent access tier. There are no retrieval fees when using the S3 Intelligent-Tiering storage class, and no additional tiering fees when objects are moved between access tiers. It is the ideal storage class for long-lived data with access patterns that are unknown or unpredictable.`,
    },
    {
      // Q48
      questionId: uuidv4(),
      question: `What are the benefits of having infrastructure hosted in AWS? (Choose two)`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Gaining complete control over the physical infrastructure",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Competitive upfront costs",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "There is no need to worry about security",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Increase speed and agility",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "All of the physical security and most of the data/network security are taken care of for you",
          isSelected: false,
        },
      ],
      explanation: `               All of the physical security are taken care of for you. Amazon data centers are surrounded by three physical layers of security. “Nothing can go in or out without setting off an alarm”. It’s important to keep bad guys out, but equally important to keep the data in which is why Amazon monitors incoming gear, tracking every disk that enters the facility. And “if it breaks we don’t return the disk for warranty. The only way a disk leaves our data center is when it’s confetti.”

        Most (not all) data and network security are taken care of for you. When we talk about the data/network security, AWS has a “shared responsibility model” where AWS and the customer share the responsibility of securing them. For example the customer is responsible for creating rules to secure his network traffic using the security groups and is also responsible for protecting data with encryption.



      "Increase speed and agility" is also a correct answer because in a cloud computing environment, new IT resources are only a click away, which means it requires less time to make those resources available to developers - from weeks to just minutes. This results in a dramatic increase in agility for the organization, since the cost and time it takes to experiment and develop is significantly lower.`,
    },
    {
      // Q49
      questionId: uuidv4(),
      question: `A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Support API",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Personal Health Dashboard",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Operations Support",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Support Concierge",
          isSelected: false,
        },
      ],
      explanation: `           Included as part of the Enterprise Support plan, the Support Concierge Team are AWS billing and account experts that specialize in working with enterprise accounts. The Concierge team will quickly and efficiently assist you with your billing and account inquiries, and work with you to help implement billing and account best practices so that you can focus on running your business.

        Support Concierge service includes:
        
        ** 24 x7 access to AWS billing and account inquires.
        
        ** Guidance and best practices for billing allocation, reporting, consolidation of accounts, and root-level account security.
        
        ** Access to Enterprise account specialists for payment inquiries, training on specific cost reporting, assistance with service limits, and facilitating bulk purchases.`,
    },
    {
      // Q50
      questionId: uuidv4(),
      question: `In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Patching the Network infrastructure",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Controlling physical access to compute resources",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Disk disposal",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Setting password complexity rules",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Configuring network access rules",
          isSelected: false,
        },
      ],
      explanation: `              The customer is responsible for securing their network by configuring Security Groups, Network Access control Lists (NACLs), and Routing Tables. The customer is also responsible for setting a password policy on their AWS account that specifies the complexity and mandatory rotation periods for their IAM users' passwords.`,
    },
    {
      // Q51
      questionId: uuidv4(),
      question: `What does AWS Snowball provide?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "A catalog of third-party software solutions that customers need to build solutions and run their businesses",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "A hybrid cloud storage between on-premises environments and the AWS Cloud",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Secure transfer of large amounts of data into and out of the AWS Cloud",
          isSelected: false,
        },
      ],
      explanation: `               Snowball is a petabyte-scale data transport solution that uses devices designed to be secure to transfer large amounts of data into and out of the AWS Cloud. Using Snowball addresses common challenges with large-scale data transfers including high network costs, long transfer times, and security concerns. Customers today use Snowball to migrate analytics data, genomics data, video libraries, image repositories, backups, and to archive part of data center shutdowns, tape replacement or application migration projects. Transferring data with Snowball is simple, fast, more secure, and can be as little as one-fifth the cost of transferring data via high-speed Internet. `,
    },
    {
      // Q52
      questionId: uuidv4(),
      question: `Which of the following does NOT belong to the AWS Cloud Computing models?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Platform as a Service (PaaS)",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Software as a Service (SaaS)",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Infrastructure as a Service (IaaS)",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Networking as a Service (NaaS)",
          isSelected: false,
        },
      ],
      explanation: `There are three Cloud Computing Models: 

        1) Infrastructure as a Service (IaaS) - Infrastructure as a Service (IaaS) contains the basic building blocks for cloud IT and typically provide access to networking features, computers (virtual or on dedicated hardware), and data storage space. IaaS provides you with the highest level of flexibility and management control over your IT resources and is most similar to existing IT resources that many IT departments and developers are familiar with today.   
        
        2) Platform as a Service (PaaS) - Platform as a Service (PaaS) removes the need for your organization to manage the underlying infrastructure (usually hardware and operating systems) and allows you to focus on the deployment and management of your applications. This helps you be more efficient as you don’t need to worry about resource procurement, capacity planning, software maintenance, patching, or any of the other undifferentiated heavy lifting involved in running your application.   
        
        3) Software as a Service (SaaS) - Software as a Service (SaaS) provides you with a completed product that is run and managed by the service provider. In most cases, people referring to Software as a Service are referring to end-user applications. With a SaaS offering you do not have to think about how the service is maintained or how the underlying infrastructure is managed; you only need to think about how you will use that particular piece of software. A common example of a SaaS application is web-based email which you can use to send and receive email without having to manage feature additions to the email product or maintain the servers and operating systems that the email program is running on. `,
    },
    {
      // Q53
      questionId: uuidv4(),
      question: `Under the shared responsibility model, Which of the following is the AWS’ responsibility?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Filtering traffic with Security Groups",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Client-side encryption",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Server-side encryption",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Configuring infrastructure devices",
          isSelected: false,
        },
      ],
      explanation: `         Under the shared responsibility model, AWS is responsible for the hardware and software that run AWS services. This includes patching the infrastructure software and configuring infrastructure devices. As a customer, you are responsible for implementing best practices for data encryption, patching guest operating system and applications, identity and access management, and network & firewall configurations.`,
    },
    {
      // Q54
      questionId: uuidv4(),
      question: `A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon DynamoDB",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon DocumentDB",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "A MySQL database installed on an EC2 instance",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazonn Aurora",
          isSelected: false,
        },
      ],
      explanation: `            Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud. Amazon Aurora combines the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases. It delivers up to five times the throughput of standard MySQL and up to three times the throughput of standard PostgreSQL. Amazon Aurora is designed to be compatible with MySQL and with PostgreSQL, so that existing applications and tools can run without requiring modification. It is available through Amazon Relational Database Service (RDS), freeing you from time-consuming administrative tasks such as provisioning, patching, backup, recovery, failure detection, and repair.`,
    },
    {
      // Q55
      questionId: uuidv4(),
      question: `An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "IAM roles",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "IAM users",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Organizations",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "IAM Groups",
          isSelected: false,
        },
      ],
      explanation: `               An IAM group is a collection of IAM users that are managed as a unit. Groups let you specify permissions for multiple users, which can make it easier to manage the permissions for those users. For example, you could have a group called Admins and give that group the types of permissions that administrators typically need. Any user in that group automatically has the permissions that are assigned to the group. If a new user joins your organization and needs administrator privileges, you can assign the appropriate permissions by adding the user to that group. Similarly, if a person changes jobs in your organization, instead of editing that user's permissions, you can remove him or her from the old groups and add him or her to the appropriate new groups.`,
    },
    {
      // Q56
      questionId: uuidv4(),
      question: `Which of the following services allows customers to manage their agreements with AWS?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Organizations",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Certificate Manager",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Systems Manager",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Artifact",
          isSelected: false,
        },
      ],
      explanation: `          AWS Artifact is a self-service audit artifact retrieval portal that provides customers with on-demand access to AWS’ compliance documentation and AWS agreements. You can use AWS Artifact Agreements to review, accept, and track the status of AWS agreements such as the Business Associate Addendum (BAA).

        Additional information:
        
                  You can also use AWS Artifact Reports to download AWS security and compliance documents, such as AWS ISO certifications, Payment Card Industry (PCI), and System and Organization Control (SOC) reports.`,
    },
    {
      // Q57
      questionId: uuidv4(),
      question: `Select TWO examples of the AWS shared controls.`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "VPC Management",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "IAM Management",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Data Center operations",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Patch Management",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Configuration Management",
          isSelected: false,
        },
      ],
      explanation: `    Shared Controls are controls which apply to both the infrastructure layer and customer layers, but in completely separate contexts or perspectives. In a shared control, AWS provides the requirements for the infrastructure and the customer must provide their own control implementation within their use of AWS services.

        Examples include:
        
        ** Patch Management – AWS is responsible for patching the underlying hosts and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications.
        
        ** Configuration Management – AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications.
        
        ** Awareness & Training - AWS trains AWS employees, but a customer must train their own employees.`,
    },
    {
      // Q58
      questionId: uuidv4(),
      question: `The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon EBS",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "S3 Intelligent-Tiering",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Marketplace",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon Glacier",
          isSelected: false,
        },
      ],
      explanation: `             Amazon Glacier is an extremely low-cost storage service that provides secure, durable, and flexible storage for long-term data backup and archival. With Amazon Glacier, customers can reliably store their data for as little as $0.004 per gigabyte per month. Amazon Glacier enables customers to offload the administrative burdens of operating and scaling storage to AWS, so that they don’t have to worry about capacity planning, hardware provisioning, data replication, hardware failure detection and repair, or time-consuming hardware migrations.`,
    },
    {
      // Q59
      questionId: uuidv4(),
      question: `A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS OpsWorks",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Storage Gateway",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon EBS Volume",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon ElastiCache",
          isSelected: false,
        },
      ],
      explanation: `        Amazon ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory data store or cache in the cloud. The service improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory data stores, instead of relying entirely on slower disk-based databases.

        The primary purpose of an in-memory data store is to provide ultrafast (submillisecond latency) and inexpensive access to copies of data. Querying a database is always slower and more expensive than locating a copy of that data in a cache. Some database queries are especially expensive to perform. An example is queries that involve joins across multiple tables or queries with intensive calculations. By caching (storing) such query results, you pay the price of the query only once. Then you can quickly retrieve the data multiple times without having to re-execute the query.`,
    },
    {
      // Q60
      questionId: uuidv4(),
      question: `A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Server Migration Service",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Application Discovery Service",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS OpsWorks",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS Database Migration Service",
          isSelected: false,
        },
      ],
      explanation: `              AWS Database Migration Service (DMS) helps you migrate databases to AWS easily and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. The AWS Database Migration Service can migrate your data to and from most widely used commercial and open-source databases. The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to Amazon Aurora or Microsoft SQL Server to MySQL. It also allows you to stream data to Amazon Redshift from any of the supported sources including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, SAP ASE, and SQL Server, enabling consolidation and easy analysis of data in the petabyte-scale data warehouse. AWS Database Migration Service can also be used for continuous data replication with high availability. `,
    },
    {
      // Q61
      questionId: uuidv4(),
      question: `Which of the following is an example of horizontal scaling in the AWS Cloud?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Replacing an existing EC2 instance with a larger, more powerful one",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Adding more RAM capacity to an EC2 instance",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Adding more EC2 instances of the same size to handle an increase in traffic",
          isSelected: false,
        },
      ],
      explanation: `Horizontal Scaling:

      Scaling horizontally takes place through an increase in the number of resources (e.g., adding more hard drives to a storage array or adding more servers to support an application). This is a great way to build Internet-scale applications that leverage the elasticity of cloud computing.



Vertical Scaling:

       Scaling vertically takes place through an increase in the specifications of an individual resource (e.g., upgrading a server with a larger hard drive, adding more memory, or provisioning a faster CPU). On Amazon EC2, this can easily be achieved by stopping an instance and resizing it to an instance type that has more RAM, CPU, I/O,or networking capabilities. This way of scaling can eventually hit a limit and it is not always a cost efficient or highly available approach. However, it is very easy to implement and can be sufficient for many use cases especially as a short term solution.`,
    },
    {
      // Q62
      questionId: uuidv4(),
      question: `A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Deploy the application across multiple VPC's and subnets",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Deploy the application across multiple Availability Zones and Edge locations",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Deploy the application across multiple Availability Zones and subnets",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Deploy the application across multiple Regions and Availability Zones",
          isSelected: false,
        },
      ],
      explanation: `          The AWS Global infrastructure is built around Regions and Availability Zones (AZs). Each AWS Region is a separate geographic area. Each AWS Region has multiple, isolated locations known as Availability Zones. Availability Zones in a region are connected with low latency, high throughput, and highly redundant networking. These Availability Zones offer AWS customers an easier and more effective way to design and operate applications and databases, making them more highly available, fault tolerant, and scalable than traditional single datacenter infrastructures or multi-datacenter infrastructures.

        In addition to replicating applications and data across multiple data centers in the same Region using Availability Zones, you can also choose to increase redundancy and fault tolerance further by replicating data between geographic Regions (especially if you are serving customers from all over the world). You can do so using both private, high speed networking and public internet connections to provide an additional layer of business continuity, or to provide low latency access across the globe.`,
    },
    {
      // Q63
      questionId: uuidv4(),
      question: `Which of the following can be described as a global content delivery network (CDN) service?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "AWS VPN",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Regions",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "AWS Direct Connect",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon CloudFront",
          isSelected: false,
        },
      ],
      explanation: `                Amazon CloudFront is a global content delivery network (CDN) service that gives businesses and web application developers an easy and cost effective way to distribute content (such as videos, data, applications, and APIs) with low latency and high data transfer speeds. Like other AWS services, Amazon CloudFront is a self-service, pay-per-use offering, requiring no long term commitments or minimum fees. With CloudFront, your files are delivered to end-users using a global network of edge locations. CloudFront is integrated with other AWS services such as AWS Shield for DDoS mitigation, Amazon S3, Elastic Load Balancing or Amazon EC2 as origins for your applications, and Lambda@Edge to run custom code close to your viewers. `,
    },
    {
      // Q64
      questionId: uuidv4(),
      question: `You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?`,
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Reserved Instances",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Dedicated Instances",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "On-demand Instances",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice: "Spot Instances",
          isSelected: false,
        },
      ],
      explanation: `         Spot instances provide a discount (up to 90%) off the On-Demand price. The Spot price is determined by long-term trends in supply and demand for EC2 spare capacity. If the Spot price exceeds the maximum price you specify for a given instance or if capacity is no longer available, your instance will automatically be interrupted.

        Spot Instances are a cost-effective choice if you can be flexible about when your applications run and if you don't mind if your applications get interrupted. For example, Spot Instances are well-suited for data analysis, batch jobs, background processing, and optional tasks.`,
    },
    {
      // Q65
      questionId: uuidv4(),
      question: `Which of the following is not a benefit of Amazon S3? (Choose TWO)`,
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrectAnswer: [
        {
          answerId: uuidv4(),
          choice: "Amazon S3 provides unlimited storage for any type of data",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Amazon S3 provides 99.999999999% (11 9's) of data durability",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice:
            "Amazon S3 stores any number of objects, but with object size limits",
          isSelected: false,
        },
      ],
      correctAnswer: [
        {
          answerId: uuidv4(),
          choice:
            "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere",
          isSelected: false,
        },
        {
          answerId: uuidv4(),
          choice: "Amazon S3 can run any type of application or backend system",
          isSelected: false,
        },
      ],
      explanation: `"Amazon S3 can run any type of application or backend system" is not a benefit of S3 and thus is a correct answer. Amazon S3 is a storage service not a compute service.

        "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere" is not a benefit of S3 and thus is a correct answer. Amazon S3 scales automatically to store and retrieve any amount of data from anywhere.
        
        
        
                 Companies today need the ability to simply and securely collect, store, and analyze their data at a massive scale. Amazon S3 is object storage built to store and retrieve any amount of data from anywhere – web sites and mobile apps, corporate applications, and data from IoT sensors or devices.  It’s a simple storage service that offers highly available, and infinitely scalable data storage infrastructure at very low costs. It is designed to deliver 99.999999999% durability, and stores data for millions of applications used by market leaders in every industry. S3 provides comprehensive security and compliance capabilities that meet even the most stringent regulatory requirements. It gives customers flexibility in the way they manage data for cost optimization, access control, and compliance. S3 provides query-in-place functionality, allowing you to run powerful analytics directly on your data at rest in S3. And Amazon S3 is the most supported cloud storage service available, with integration from the largest community of third-party solutions, systems integrator partners, and other AWS services.
        
        
        
               Amazon S3 stores any number of objects, but each object does have a size limitation. Individual Amazon S3 objects can range in size from a minimum of 0 bytes to a maximum of 5 terabytes.`,
    },
  ],
};
