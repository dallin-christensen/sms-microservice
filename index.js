const smsUtil = require('./smsUtil.js')
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('sms microservice')
})

app.post('/', (req, res) => {
  const { body } = req.body

  const onSuccess = (message) => {
    const successMsg = `It worked, sent text "${body}" with sid: ${message.sid}`;
    console.log(successMsg)
    res.end(successMsg)
  }

  const onError = (error) => {
    console.error(error)
    res.end(error)
  }

  smsUtil.sendSms({ body, onSuccess, onError })
})

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})
