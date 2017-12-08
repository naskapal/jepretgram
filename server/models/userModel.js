const {DB_PATH} = require('../secrets.config');
const mongoose = require('mongoose').connect(DB_PATH)

const userSchema = mongoose.Schema({
  username: String,
  password: String
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel
