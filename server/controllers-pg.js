// const client = require('../database/index-pg.js');
const Trips = require('../database/index-pg.js');

const controllers = {
  get: (req, res) => {
    const { id } = req.params;
    Trips.findOne({ where: { id } })
      .then((trip) => {
        trip.city = trip.city.split('|').join(', ');
        trip.dates = trip.dates.split('|');
        const datesArrFormatted = [];
        trip.dates.forEach((date) => {
          const event = new Date(date);
          datesArrFormatted.push(event);
        });
        trip.dates = datesArrFormatted;
        res.status(200).send(trip);
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
