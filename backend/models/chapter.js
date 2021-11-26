const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  vol: {
    type: Schema.Types.ObjectId,
    ref: 'vol',
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  chapter_number: {
    type: Number,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('chapter', chapterSchema);
