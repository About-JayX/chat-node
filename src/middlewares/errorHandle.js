// 错误处理中间件
const errorHandlerMiddleware = async (ctx, next) => {
    try {
      // 继续执行下一个中间件或路由处理函数
      await next()
    } catch (error) {
      // 发生错误时的处理逻辑
      console.error(error) // 可选：将错误信息打印到控制台
  
      // 设置适当的错误响应
      ctx.status = error.status || 500
      ctx.body = {
        error: {
          message: error.message || 'Internal Server Error'
        }
      }
    }
  }
  
  // 导出中间件
  module.exports = errorHandlerMiddleware