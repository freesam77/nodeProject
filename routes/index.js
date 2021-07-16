const express = require('express');

const router = express.Router();

router.get('/', (_req, res, _next) => {
    res.render('index', { user: 'Max', activeHome: true, title: 'Home' });
});

module.exports = router;
