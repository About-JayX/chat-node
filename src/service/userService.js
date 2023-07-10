const { User } = require('@/db/module/userSchema')

const selectUserService = async (ctx, body) => {
  const status = await User.findOne({ nickName: '常乐' })
  ctx.response.body = status // 直接把响应写进页面
}

module.exports = {
  selectUserService,
}
