// const { Client } = require('pg');

// const connectionString = 'postgres://postgres:@localhost:5432/calendarpg';
// const client = new Client({
//   connectionString: connectionString
// });

// client.connect();

// module.exports = client;

const { Sequelize, DataTypes } = require('sequelize');

// Option 1: Passing parameters separately
// const sequelize = new Sequelize('calendarpg', 'postgres', '', {
//   host: 'localhost',
//   dialect: 'postgres'
// });

// Option 2: Passing a connection URI
const sequelize = new Sequelize('postgres://postgres:@localhost:5432/calendarpg');

// if run with EC2 instance
// const sequelize = new Sequelize('calendarpg', 'postgres', '', {
//   host:'ec2.......amazonaws.com',
//   port: 5432,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: true
//   }
// });


// You can use the .authenticate() function to test if the connection is OK:

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Trips = sequelize.define('Trips', {
  // attributes
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  msrp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  discounted: {
    type: DataTypes.STRING,
    allowNull: false
  },
  days: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dates: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.STRING,
    allowNull: false
  },
  reviews: {
    type: DataTypes.STRING,
    allowNull: false
  }
  }, {
    tableName: 'trips',
    timestamps: false // opt out of timestamps

});

module.exports = Trips;