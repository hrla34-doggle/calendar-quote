const model = require('../database/model.js');

const controllers = {
  get: (req, res) => {
    const { id } = req.params;
    model.Trip.findOne({ id })
      .then((trip) => {
        res.status(200).json(trip);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  post: (req, res) => {
    console.log(model.Trip)

    const { id } = req.params;
    model.Trip.create({ id }, req.body)
      .then(() => {
        res.status(201).send('posted');
      })
      .catch((err) => {
        res.status(401).send(err);
      });
  },
};

module.exports = controllers;
