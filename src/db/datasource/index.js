const MONGODB_USER = 'jay'
const MONGODB_PWD = 'Jay07130812.'
const MONGODB_PROJECT = '@cluster0'
const MONGODB_TABLE = 'chat-room'

module.exports = {
  MONGODB_URL: `mongodb+srv://${MONGODB_USER}:${MONGODB_PWD}${MONGODB_PROJECT}.jltewrk.mongodb.net/${MONGODB_TABLE}?retryWrites=true&w=majority`,
}
