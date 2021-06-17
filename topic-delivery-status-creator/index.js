const AWS = require('aws-sdk');

const sns = new AWS.SNS({ region: 'us-west-2' });

exports.handler = async (event, context) => {
  console.log(event);
  console.log('event.topic_arn', event.topic_arn);
  console.log('event.attribute_name', event.attribute_name);
  console.log('event.attribute_value', event.attribute_value);

  const result = await sns.setTopicAttributes({
    TopicArn: event.topic_arn,
    AttributeName: event.attribute_name,
    AttributeValue: event.attribute_value
  }).promise();

  console.log(result);

  return {
    message: "successfully set attribute",
    data: event
  }
}
