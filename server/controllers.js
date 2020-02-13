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
    model.Trip.create(req.body)
      .then(() => {
        res.status(201).send('posted');
      })
      .catch((err) => {
        res.status(401).send(err);
      });
  },
  put: (req, res) => {
    const { id } = req.params;
    model.Trip.updateOne({ id }, req.body)
      .then(() => {
        res.status(202).send('updated');
      })
      .catch((err) => {
        res.status(402).send(err);
      });
  },
  delete: (req, res) => {
    const { id } = req.params;
    model.Trip.deleteMany({ id })
      .then(() => {
        res.status(203).send('deleted');
      })
      .catch((err) => {
        res.status(403).send(err);
      });
  },
};

module.exports = controllers;
