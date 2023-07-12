const { User } = require('@/db/module/userSchema')

const addUserService = async (ctx, next) => {
  let data = ctx.request.body
  ctx.response.body = data
}

module.exports = {
  addUserService,
}
