const { connect, connection } = require('mongoose')
const { MONGODB_URL } = require('./datasource')
connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

connection.on('connected', () => {
  console.log('连接数据库成功！')
})

module.exports = {
  connection,
}
