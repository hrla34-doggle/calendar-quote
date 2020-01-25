const router = require('express').Router();

router
  .route('/calendar/:_id')
  .get((req, res) => {
    res.status(200).send('hello from router');
  });

router
  .route('/quote')
  .post((req, res) => {
    res.status(201).send('hello from router');
  });

module.exports = router;

