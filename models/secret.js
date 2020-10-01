const mongoose = require('mongoose');

const secretSchema = mongoose.Schema({
  content: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  createdAt: {
    type: Date,
    default: new Date()
  }
  // theme: { type: String, required: true },
});

module.exports = mongoose.model('Secret', secretSchema);
