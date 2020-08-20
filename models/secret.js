const mongoose = require('mongoose');

const secretSchema = mongoose.Schema({
  content: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  // theme: { type: String, required: true },
});

module.exports = mongoose.model('Secret', secretSchema);
