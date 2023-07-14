const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  userName: {
    unique: true,
    type: String,
    required: true,
  },
  passWord: {
    type: String,
    required: true,
  },
  userInfo: {
    nickName: {
      type: String,
    },
    status: Boolean,
    sex: {
      type: Number,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: () => {
        console.log(this, '__this')
      },
    },
    avatar: {
      type: String,
    },
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
  updateDate: {
    type: Date,
  },
})

userSchema.pre('save', function (next) {
  // 在保存文档之前更新updateDate字段的值
  this.updateDate = new Date()
  next()
})

const User = mongoose.model('usersModel', userSchema, 'users')

module.exports.User = User
