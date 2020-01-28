const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  city: String,
  price: Number,
  msrp: Number,
  dates: [Date],
  days: Number
})

module.exports = schema;