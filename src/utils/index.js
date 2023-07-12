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
  if (ctx && ctx.response) {
    ctx.response.body = data
  } else {
    throw new Error('ctx error')
  }
}
module.exports = {
  routerModule,
  verCodeGenerate,
  sendCtxResponse,
}
