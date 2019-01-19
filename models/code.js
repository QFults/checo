const Schema = require('mongoose').Schema

module.exports = require('mongoose').model('Code', new Schema({
  id: Schema.Types.ObjectId,
  text: String,
  description: String
}))
