/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const router = require('express').Router();
const model = require('../database/model.js');
const db = require('../database/index.js');

router
  .route('/calendar/:_id')
  .get((req, res) => {
    const { _id } = req.params;

    model.Trip.findOne({ _id })
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
    const {
      firstName, lastName, email, phone, comment, hasAgent, isAgent, loyalty, subscribe,
    } = req.body;

    model.User.create({
      firstName, lastName, email, phone, comment, hasAgent, isAgent, loyalty, subscribe,
    })
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });

module.exports = router;
