const webSocket = require('ws')

const createSocket = opts => {
  let messageList = []
  const wss = new webSocket.Server(opts)
  wss.on('connection', ws => {
    console.log('连接成功！')
    ws.on('message', msg => {
      const reqMsg = JSON.parse(msg.toString())
      messageList.push(reqMsg)
      console.log(reqMsg, '消息队列')
      ws.send(JSON.stringify(messageList))
    })
  })
}

module.exports = {
  createSocket,
}
