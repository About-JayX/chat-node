const { addUserService } = require('@/service/userService')
const { routerModule } = require('@/utils/index.js')

const addUser = routerModule('/addUser', 'post', addUserService)
module.exports = {
  addUser,
  name: 'user',
}
