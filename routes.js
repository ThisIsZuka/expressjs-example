// routes.js
const express = require('express');
const router = express.Router();

const qt = require('./qt');

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.get('/test', qt.sayHello);

module.exports = router;
