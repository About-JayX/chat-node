const { resolve } = require('path')
const glob = require('glob')
const Router = require('koa-router')

const router = new Router({
  prefix: '/api',
})

glob
  .sync(resolve(__dirname, './', '**/*.js'))
  .filter(fileName => !fileName.includes('index.js'))
  .map(item => require(item))
  .map(item => {
    Object.keys(item).map(api => {
      if (!item.hasOwnProperty(api)) return
      const route = item[api]
      router[route.methods](route.url, route.actions)
    })
  })

module.exports.router = router
