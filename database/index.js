const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/calendar-quote';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to DB');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
