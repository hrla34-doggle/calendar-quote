/* eslint-disable no-console */
const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/calendar-quote';
const schema = require('./schema.js');

const Trip = mongoose.model('Trip', schema.tripSchema);

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = Trip;
