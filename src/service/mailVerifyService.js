const { success, error } = require('@/utils/resData.js')
const { mailVerify } = require('@/db/module/mailVerifySchema')
const { verifyCode } = require('@/utils/emailVerify.js')
const { verCodeGenerate, sendCtxResponse } = require('@/utils/index.js')
console.log(verifyCode, 'mailVerify')
const getVerifyCodeService = async (ctx, next) => {
  let data = ctx.request.body
  if (!(data && data.email)) {
    ctx.response.body = error(500, null, '请检查邮箱后重试')
    console.log(ctx.response, 'ctx.response.body')
    return false
  }
  let { email } = data
  const code = await verCodeGenerate()

  try {
    await verifyCode(email, code)
    const saveModel = new mailVerify({
      email,
      code,
      name: 1,
    })
    await saveModel.save()
    sendCtxResponse(ctx, success(true))
  } catch (err) {
    sendCtxResponse(ctx, error(500, null, err.message))
  }
}
module.exports = {
  getVerifyCodeService,
}
