const { register } = require('@/service/userService')
const { routerModule } = require('@/utils/index.js')

const addUser = routerModule('/register', 'post', register)
module.exports = {
  addUser,
  name: 'user',
}
