const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mangaSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    required: true,
    unique: true,
  },
  author: [String],
  type: [String],
  genre: [String],
  raiting: Number,
  status: String,
  year: Number,
  description: String,
  cover: {
    type: String,
    default: '/cover.png',
  },
  vols: [{ type: Schema.Types.ObjectId, ref: 'vol' }],
});

module.exports = mongoose.model('manga', mangaSchema);
