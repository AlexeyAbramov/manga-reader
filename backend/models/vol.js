const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const volSchema = new Schema({
  title: String,
  created: {
    type: Date,
    default: new Date,
  },
  manga: {
    type: Schema.Types.ObjectId,
    ref: 'manga',
  },
});

module.exports = mongoose.model('vol', volSchema);
