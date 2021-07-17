const express = require('express');

const router = express.Router();

router.get('/', (_req, res, _next) => {
  global.prompt('hello');
  const user = '';
  res.render('index', { user: 'Max' });
});

module.exports = router;
