// 暴露jwt方法
const { sendCtxResponse } = require('@/utils')
const { error } = require('@/utils/resData')
const jwt = require('jsonwebtoken')

const serceKey = 'chatRoom-getToken-serce-key'

const getToken = (payload, options) => {
  return jwt.sign(payload, serceKey, options)
}

// 验证token
const verify = async (ctx, next) => {
  const { request: req } = ctx
  let authorization =
    req.headers.authorization || req.body.token || req.query.token || ''
  let token = ''
  if (authorization.includes('Bearer')) {
    token = authorization.replace('Bearer ', '')
  } else {
    token = authorization
  }

  jwt.verify(token, serceKey, async (err, data) => {
    if (err) {
      sendCtxResponse(ctx, error(500, null, '身份校验失败！'))
    } else {
      console.log(data, 'data')
      await next()
    }
  })
}

// 导出中间件
module.exports = {
  getToken,
  verify,
}
