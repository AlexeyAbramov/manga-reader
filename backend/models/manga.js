const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mangaSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  alias: String,
  author: [String],
  type: [String],
  genre: [String],
  raiting: Number,
  status: String,
  year: Number,
  description: String,
  cover: String,
});

module.exports = mongoose.model('manga', mangaSchema);
