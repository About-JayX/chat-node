const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: String,
  passWord: String,
  nickName: String,
  status: Boolean,
  sex: Number,
})

const User = mongoose.model('usersModel', userSchema, 'users')

module.exports.User = User
