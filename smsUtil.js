const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

const sendSms = ({ body, onSuccess = () => {}, onError = () => {} }) => {
  client.messages.create({
    to: process.env.TWILIO_TO_NUMBER,
    from: process.env.TWILIO_FROM_NUMBER,
    body,
  })
  .then((message) => onSuccess(message))
  .catch((err) => onError(err))
}


exports.sendSms = sendSms
