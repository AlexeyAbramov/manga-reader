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
});

module.exports = mongoose.model('chapter', chapterSchema);
