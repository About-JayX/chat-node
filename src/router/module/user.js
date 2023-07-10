const { selectUserService } = require('@/service/userService')
console.log(selectUserService, 'user')
const selectUser = {
  url: '/selectUser',
  methods: 'get',
  actions: selectUserService,
}
const addUser = {
  url: '/addUser',
  methods: 'get',
  actions: (ctx, body) => {
    ctx.body = 'addUser'
  },
}
module.exports = {
  selectUser,
  addUser,
}
