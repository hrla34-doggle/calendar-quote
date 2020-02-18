// const { Client } = require('pg');

// const connectionString = 'postgres://postgres:@localhost:5432/calendarpg';
// const client = new Client({
//   connectionString: connectionString
// });

// client.connect();

// module.exports = client;

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
// const sequelize = new Sequelize('calendarpg', 'postgres', '', {
//   host: 'localhost',
//   dialect: 'postgres'
// });

// Option 2: Passing a connection URI
const sequelize = new Sequelize('postgres://postgres:@localhost:5432/calendarpg');

// You can use the .authenticate() function to test if the connection is OK:

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Trips = sequelize.define('trips', {
  // attributes
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  msrp: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false
  },
  discounted: {
    type: Sequelize.STRING,
    allowNull: false
  },
  days: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dates: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reviews: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Trips;