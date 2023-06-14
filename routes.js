// routes.js
const express = require('express');
const router = express.Router();

const qt = require('./app/Controller/qt');

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.get('/test', qt.sayHello);

router.get('/insert', qt.insert);

module.exports = router;
