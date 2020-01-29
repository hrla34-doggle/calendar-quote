const mongoose = require('mongoose');
const schema = require('./schema.js');

const Trip = mongoose.model('Trip', schema.tripSchema);
const User = mongoose.model('User', schema.userSchema);

module.exports.Trip = Trip;
module.exports.User = User;
