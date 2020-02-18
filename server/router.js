/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const router = require('express').Router();
const model = require('../database/model.js');
const db = require('../database/index.js');
// const controllers = require('./controllers.js'); // for MongoDB
const controllers = require('./controllers-pg.js'); // for PostgreSQL

router
  .route('/calendar/:id')
  .get(controllers.get)
  .post(controllers.post)
  .put(controllers.put)
  .delete(controllers.delete);


// original code below: post request doesn't work since creating a new quote will direct user to a different site
// instead, created a post request in the above route
// router
//   .route('/quote')
//   .post((req, res) => {
//     const {
//       firstName, lastName, email, phone, comment, hasAgent, isAgent, loyalty, subscribe,
//     } = req.body;

//     model.User.create({
//       firstName, lastName, email, phone, comment, hasAgent, isAgent, loyalty, subscribe,
//     })
//       .then((user) => {
//         res.status(201).json(user);
//       })
//       .catch((err) => {
//         res.status(400).send(err);
//       });
//   });

module.exports = router;
