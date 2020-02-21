const Trip = require('./index.js');

const models = {
  get: (id) => {
    return Trip.findOne({ id });
  },
  post: (trip) => {
    return Trip.create(trip);
  },
  put: (id, content) => {
    return Trip.updateOne(id, content);
  },
  delete: (id) => {
    return Trip.deleteMany({ id });
  }
};

module.exports = models;