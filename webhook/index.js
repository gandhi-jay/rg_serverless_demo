const IncomingWebhook = require('@slack/client').IncomingWebhook;

// TODO Add key.
const url = process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/YourKey'; //see section above on sensitive data

const webhook = new IncomingWebhook(url);

const sendToSlack = (feedback, rating) => {
  webhook.send(`Feedback: ${feedback}, Rating: ${rating}`, function(err, header, statusCode, body) {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Received', statusCode, 'from Slack');
    }
  });
}

module.exports = sendToSlack;
