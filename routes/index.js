const express = require('express');
const { getIsLoggedIn } = require('../util/auth')

const router = express.Router();

router.get('/', (req, res, _next) => {
  res.render('index', {
    user: 'Max',
    path: req.url,
    activeHome: true,
    title: 'Home',
    isAuthenticated: getIsLoggedIn(req)
  });
});

module.exports = router;
