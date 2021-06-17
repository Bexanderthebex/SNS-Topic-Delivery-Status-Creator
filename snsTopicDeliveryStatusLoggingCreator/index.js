const AWS = require('aws-sdk');
const config = require('./config.json');

(async () => {
  const sns = new AWS.SNS({ region: 'us-west-2' });

  console.log(`Attaching a delivery status logging to Topic ${config.topic_arn} using the following values`);
  console.log(config.topic_attributes);
  for (const topicAttribute of config.topic_attributes) {
    const result = await sns.setTopicAttributes({
      TopicArn: config.topic_arn,
      AttributeName: topicAttribute.attribute_name,
      AttributeValue: topicAttribute.attribute_value
    }).promise();
    console.log(result);
  }
  console.log('Successfully attached delivery status logging');

  process.exit();
})();
