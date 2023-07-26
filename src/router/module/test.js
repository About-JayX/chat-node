const { routerModule } = require('@/utils/index.js')
const { testTokenService } = require('@/service/testService')
const { verify } = require('@/middlewares/auth')

const testToken = routerModule('/testToken', 'post', testTokenService, verify)

module.exports = {
  testToken,
  name: 'test',
}
