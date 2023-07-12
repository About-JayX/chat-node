const nodeMailer = require('nodemailer')
const { EMAIL_INFO } = require('../db/datasource/index')
const { sendCtxResponse } = require('.')
const { error } = require('./resData')

const mailConfig = {
  service: 'qq',
  host: 'smtp.qq.com',
  secureConnection: true,
  port: 465,
  auth: {
    user: EMAIL_INFO.USER,
    pass: EMAIL_INFO.PWD,
  },
  tls: {
    rejectUnauthorized: false,
  },
}

const transporter = nodeMailer.createTransport(mailConfig)

exports.verifyCode = async function (overEmail, verifyCode) {
  let ops = {
    from: EMAIL_INFO.USER,
    subject: 'chatRoom verify',
    to: overEmail,
    html: `您的验证码为${verifyCode}`,
  }

  return await new Promise((resolve, reject) => {
    transporter.sendMail(ops, async (err, info) => {
      if (err) {
        reject(err)
      } else {
        resolve(info)
      }
    })
  })
}
