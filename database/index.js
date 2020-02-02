/* eslint-disable no-console */
const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/calendar-quote';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
