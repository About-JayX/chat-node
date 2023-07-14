const mongoose = require('mongoose')

const mailVerifySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    expires: 300,
  },
})
const mailVerify = mongoose.model(
  'mailVerifyModel',
  mailVerifySchema,
  'mailVerify'
)

module.exports.mailVerify = mailVerify
