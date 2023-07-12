const { routerModule } = require('@/utils/index.js')
const { getVerifyCodeService } = require('@/service/mailVerifyService')

const getVerifyCode = routerModule('/getVerifyCode', 'post', getVerifyCodeService)

module.exports = {
  getVerifyCode,
  name: 'mailVerify',
}
