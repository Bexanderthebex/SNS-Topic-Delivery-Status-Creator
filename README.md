# SNS-Topic-Delivery-Status-Creator
Organized way of creating SNS topic delivery status logging through aws sdk

## Problem
You wanna make sure that messages are delivered properly to a message medium, say SQS, by having a logs that will tell you that the message delivery process was a success.
Currently, AWS provides this but don't offer a way this can be added through Cloudformation so one will have to do this manually either through console or using the aws-sdk.

## Solution
Create a lambda that can be triggered and passed parameters to for create delivery status logging for AWS SNS
