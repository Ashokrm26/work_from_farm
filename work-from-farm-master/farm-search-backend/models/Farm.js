const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
  name: String,
  location: String,
  amenities: String,
  price: Number,
});

module.exports = mongoose.model('Farm', farmSchema);
