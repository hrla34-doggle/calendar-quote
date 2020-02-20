const Trips = require('./index-pg.js');

const models = {
  get: (id) => {
    return Trips.findOne({ where: { id } });
  },
  post: (trip) => {
    return Trips.create(trip);
  },
  put: (id, content) => {
    return Trips.update(content, { where: { id } });
  },
  delete: (id) => {
    return Trips.destroy({ where: { id } });
  }
}

module.exports = models;
