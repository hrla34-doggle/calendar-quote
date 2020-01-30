const mongoose = require('mongoose');

<<<<<<< HEAD
const tripSchema = new mongoose.Schema({
=======
const schema = new mongoose.Schema({
  id: Number,
  code: String,
>>>>>>> front-end
  title: String,
  city: String,
  price: Number,
  msrp: Number,
  dates: [Date],
  days: Number,
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  comment: String,
  hasAgent: Boolean,
  isAgent: Boolean,
  loyalty: Boolean,
  subscribe: Boolean,
});

module.exports.tripSchema = tripSchema;
module.exports.userSchema = userSchema;
