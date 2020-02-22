/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api', router);

app.use(express.static(path.join(__dirname, '../public')));

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`listening on port ${port}`));
}

module.exports = app;
