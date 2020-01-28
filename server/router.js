/* eslint-disable no-unused-vars */
const router = require('express').Router();
const Trip = require('../database/model.js');
const db = require('../database/index.js');

router
  .route('/calendar/:_id')
  .get((req, res) => {
    const { _id } = req.params;

    Trip.findOne({ _id })
      .then((trip) => {
        res.status(200).json(trip);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  });

router
  .route('/quote')
  .post((req, res) => {
    res.status(201).send('hello from router');
  });

module.exports = router;
