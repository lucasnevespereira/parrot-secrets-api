const mongoose = require('mongoose');

const secretSchema = mongoose.Schema({
  content: { type: String, required: true },
  // theme: { type: String, required: true },
  // userId: { type: String, required: true },
});

module.exports = mongoose.model('Secret', secretSchema);
