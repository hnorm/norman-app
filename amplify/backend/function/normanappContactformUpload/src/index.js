/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk')

const ses = new AWS.SES()

exports.handler = async function (event) {
  console.log('event', event);
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      // pull off items from stream
      const name = streamedItem.dynamodb.NewImage.name.S
      const email = streamedItem.dynamodb.NewImage.email.S
      const message = streamedItem.dynamodb.NewImage.message.S

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_DESTINATION_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: `normanapp contact from ${name}` },
            Body: {
              Text: {
                Data: `
name: ${name}
email: ${email}

${message}
                ` },
            },
          },
        })
        .promise()
    }
  }
  return { status: 'done' }
}
