const Schema = require('mongoose').Schema

module.exports = require('mongoose').model('Game', new Schema({
  id: Schema.Types.ObjectId,
  title: String,
  codes: [{ type: Schema.Types.ObjectId, ref: 'Code' }]
}))
