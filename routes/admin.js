const express = require('express');

const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
  res.render('admin', {
    users,
    path: `/admin${req.url}`,
    activeAdminUsers: true,
    title: 'Users',
  });
});

router.post('/users', (req, res, next) => {
  users.push(req.body);
  res.redirect('back');
  return res.end();
});

exports.routes = router;
exports.users = users;
