require('dotenv').config()

module.exports = {
  development: {
    url: process.env."postgres://postgres:@localhost:5432/calendarpg",
    dialect: 'postgres',
  },
  test: {
    
  }
}