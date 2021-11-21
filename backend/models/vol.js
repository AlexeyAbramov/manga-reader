const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const volSchema = new Schema({
  title: String,
  created: {
    type: Date,
    default: new Date(),
  },
  vol_number: {
    type: Number,
    required: true,
  },
  manga: {
    type: Schema.Types.ObjectId,
    ref: 'manga',
    required: true,
  },
});

module.exports = mongoose.model('vol', volSchema);
