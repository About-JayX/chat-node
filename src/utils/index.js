const routerModule = (url, methods, actions) => {
  return {
    url,
    methods,
    actions,
  }
}

const verCodeGenerate = async () => {
  let res = ''
  // 生成6位随机数即可 由于仅为练习，不必用太高深的生成
  for (let i = 0; i < 6; i++) {
    res += Math.floor(Math.random() * 9 + 1)
  }
  return res
}

const sendCtxResponse = (ctx, data) => {
  if (!(ctx && ctx.response)) throw new Error('ctx error')
  ctx.response.body = data
}

const getCtxRequest = ctx => {
  if (!(ctx && ctx.request)) throw new Error('ctx error')

  return ctx.request.body
}

const jsonClone = data => {
  return JSON.parse(JSON.stringify(data))
}
module.exports = {
  routerModule,
  verCodeGenerate,
  sendCtxResponse,
  getCtxRequest,
  jsonClone,
}
