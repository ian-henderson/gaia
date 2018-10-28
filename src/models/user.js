const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  created: { type: Date, required: true },
  email: { type: String, required: true, lowercase: true },
});

module.exports = mongoose.model('User', userSchema);
