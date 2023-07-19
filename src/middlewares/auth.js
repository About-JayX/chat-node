// 暴露jwt方法
const jwt = require('jsonwebtoken')

const serceKey = 'chatRoom-getToken-serce-key'

const getToken = async (payload, options) => {
  return jwt.sign(payload, serceKey, options)
}

// 导出中间件
module.exports = {
  getToken,
}
