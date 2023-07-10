const test1 = {
  url: '/test1',
  methods: 'get',
  actions: (ctx, body) => {
    ctx.body = 'test1'
  },
}
const test2 = {
  url: '/test2',
  methods: 'get',
  actions: (ctx, body) => {
    ctx.body = 'test2'
  },
}
module.exports = {
  test1,
  test2,
}
