const model = require('../database/model.js');

const controllers = {
  get: (req, res) => {
    const { id } = req.params;
    const keys = ['id', 'code', 'title', 'city', 'msrp', 'price', 'discounted', 'days', 'dates', 'rating', 'reviews'];
    model.Trip.findOne({ id })
      .then((trip) => {
        let copy = {};
        for (var key in trip) {
          if (keys.includes(key)) {
            copy[key] = trip[key];
          }
        }
        copy.city = copy.city.split('|').join(', ');
        copy.dates = copy.dates.split('|');
        const datesArrFormatted = [];
        copy.dates.forEach((date) => {
          const event = new Date(date);
          datesArrFormatted.push(event);
        });
        copy.dates = datesArrFormatted;
        res.status(200).send(copy);
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
