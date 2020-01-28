const mongoose = require('mongoose');
const schema = require('./schema.js');

const Trip = mongoose.model('Trip', schema);

module.exports = Trip;
