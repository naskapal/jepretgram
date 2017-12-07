const {DB_PATH} = require('../secrets.config');
const mongoose = require('mongoose').connect(DB_PATH)
const Schema = mongoose.Schema

const photoSchema = mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  path: String,
  caption: String,
  // comment: String
})

const photoModel = mongoose.model('Photo', photoSchema)

module.exports = photoModel;
