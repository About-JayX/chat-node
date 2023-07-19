const {
  registerService,
  loginService,
  getTokenService,
} = require('@/service/userService')
const { routerModule } = require('@/utils/index.js')

const register = routerModule('/register', 'post', registerService)

const login = routerModule('/login', 'post', loginService)

const getToken = routerModule('/getToken', 'post', getTokenService)
module.exports = {
  register,
  login,
  getToken,
  name: 'user',
}
