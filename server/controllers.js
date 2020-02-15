const model = require('../database/model.js');

const controllers = {
  get: (req, res) => {
    const { id } = req.params;
    const keyArr = ['id', 'code', 'title', 'city', 'msrp', 'price', 'discounted', 'days', 'dates', 'rating', 'reviews'];
    model.Trip.findOne({ id })
      .then((trip) => {
        const datesArr = trip.dates.split('|');
        const tripCopy = {};
        // ignore schema, we want value as an array in the 'dates' property
        for (var key in trip) {
          if (keyArr.includes(key)) {
            tripCopy[key] = trip[key];
          }
        }
        const cityArr = tripCopy.city.split('|').join(',');
        const datesArrFormatted = [];
        datesArr.forEach((date) => {
          const event = new Date(date);
          datesArrFormatted.push(event);
        });
        tripCopy.dates = datesArrFormatted;
        tripCopy.city = cityArr;
        res.status(200).send(tripCopy);
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
