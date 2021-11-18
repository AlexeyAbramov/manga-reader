const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mangaSchema = Schema({
  name: String,
  alias: {
    type: String,
    required: true,
  },
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
