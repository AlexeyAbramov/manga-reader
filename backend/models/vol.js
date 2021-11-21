const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const volSchema = new Schema({
  created: {
    type: Date,
    default: new Date(),
  },
  vol_number: {
    type: Number,
    required: true,
    unique: true,
  },
  manga: {
    type: Schema.Types.ObjectId,
    ref: 'manga',
    required: true,
  },
  chapters: [{ type: Schema.Types.ObjectId, ref: 'chapter' }],
});

module.exports = mongoose.model('vol', volSchema);
