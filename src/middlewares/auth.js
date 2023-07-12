// auth.js

// 导入需要的依赖和工具类
// const jwt = require('jsonwebtoken')
// const config = require('../config/config')
// const User = require('../models/user')

// 身份验证中间件
const authMiddleware = async (ctx, next) => {
  try {
    // 从请求头中获取 Token
    const token = ctx.headers.authorization?.split(' ')[1]

    if (!token) {
      // 如果没有 Token，拒绝访问
      ctx.status = 401
      ctx.body = 'Unauthorized'
      return
    }

    // 验证 Token
    const decoded = jwt.verify(token, config.secretKey)

    // 根据 Token 中的用户 ID 查找用户
    const user = await User.findById(decoded.userId)

    if (!user) {
      // 如果用户不存在，拒绝访问
      ctx.status = 401
      ctx.body = 'Unauthorized'
      return
    }

    // 将用户对象挂载到请求对象中，在后续的路由处理函数中可以方便地获取用户信息
    ctx.user = user

    // 调用下一个中间件或路由处理函数
    await next()
  } catch (error) {
    ctx.status = 401
    ctx.body = 'Unauthorized'
  }
}

// 导出中间件
module.exports = authMiddleware