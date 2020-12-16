const config = require('./config.json')
const client = require('twilio')(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN)

const sendSms = ({ body, onSuccess = () => {}, onError = () => {} }) => {
  client.messages.create({
    to: config.TO_NUMBER,
    from: config.FROM_NUMBER,
    body,
  })
  .then((message) => onSuccess(message))
  .catch((err) => onError(err))
}


exports.sendSms = sendSms
