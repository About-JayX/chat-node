const { mailVerify } = require('@/db/module/mailVerifySchema')
const { User } = require('@/db/module/userSchema')
const { sendCtxResponse } = require('@/utils')
const { error, success } = require('@/utils/resData')

console.log(User, 'User__')
const register = async (ctx, next) => {
  let data = ctx.request.body
  if (!(data.email && data.userName && data.passWord && data.code)) {
    sendCtxResponse(ctx, error(500, null, '必要数据丢失！'))
    return false
  }

  try {
    const queryCode = await mailVerify
      .find({
        code: data.code,
      })
      .exec()
    if (!queryCode.length) {
      sendCtxResponse(ctx, error(500, null, '验证码错误，请重新输入！'))
      return false
    }
    try {
      const queryUser = await User.find({
        userName: data.email,
      }).exec()
      if (queryUser.length > 0) {
        sendCtxResponse(ctx, error(500, null, '该用户已存在！'))
        return false
      }
      const saveModel = new User({
        userName: data.email,
        passWord: data.passWord,
        userInfo: {
          email: data.email,
        },
      })
      saveModel.save()
      sendCtxResponse(ctx, success(true))
    } catch (err) {
      sendCtxResponse(ctx, error(500, null, err.message))
    }
  } catch (err) {
    sendCtxResponse(ctx, error(500, null, err.message))
  }
}

module.exports = {
  register,
}
