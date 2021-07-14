const express = require('express');

const router = express.Router();

router.get('/', (_req, res, _next) => {
    res.render('index', { user: 'Max', path: '/', title: 'Home' });
});

module.exports = router;
