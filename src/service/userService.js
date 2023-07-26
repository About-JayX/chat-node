const { mailVerify } = require('@/db/module/mailVerifySchema')
const { User } = require('@/db/module/userSchema')
const { getToken } = require('@/middlewares/auth')
const { sendCtxResponse, getCtxRequest, jsonClone } = require('@/utils')
const { error, success } = require('@/utils/resData')

const registerService = async (ctx, next) => {
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

const loginService = async (ctx, next) => {
  let data = getCtxRequest(ctx)

  if (!(data.userName && data.passWord)) {
    sendCtxResponse(ctx, error(500, null, '用户名或密码不能为空！'))
    return false
  }

  const queryRes = await User.find({ userName: data.userName }).exec()
  if (!queryRes.length) {
    sendCtxResponse(ctx, error(500, null, '该用户不存在'))
    return false
  }

  const userData = jsonClone(queryRes[0])
  if (!(userData.passWord && userData.passWord == data.passWord)) {
    sendCtxResponse(ctx, error(500, null, '用户名或密码输入错误'))
    return false
  }

  userData && userData.passWord && delete userData.passWord

  sendCtxResponse(ctx, success(userData))
}

const getTokenService = async (ctx, next) => {
  const data = getCtxRequest(ctx)
  const token = getToken(data, {
    expiresIn: 60 * 60 * 24 * 7,
  })
  sendCtxResponse(ctx, success({ token }))
}
module.exports = {
  registerService,
  loginService,
  getTokenService,
}
