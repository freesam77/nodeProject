const express = require('express');

const router = express.Router();

router.get('/', (req, res, _next) => {
  res.render('index', {
    user: 'Max',
    path: req.url,
    activeHome: true,
    title: 'Home',
  });
});

module.exports = router;
