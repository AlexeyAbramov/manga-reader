const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  title: String,
  vol: {
    type: Schema.Types.ObjectId,
    ref: 'vol',
  },
  image: String,
});

module.exports = mongoose.model('chapter', chapterSchema);
