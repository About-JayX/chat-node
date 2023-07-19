const Koa = require('koa')
const app = new Koa()
const moduleAlias = require('module-alias')
const bodyParser = require('koa-bodyparser')

moduleAlias.addAlias('@', __dirname)
const { router } = require('./router/index')
require('./db')

app.use(bodyParser())
app.use(router.routes())

app.listen(6060, () => {
  console.log('6060start')
})
