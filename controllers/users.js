const Users = require('../models/users');

exports.getUsers = (req, res, next) => {
  res.render('admin', {
    users: Users.getUsers(),
    path: `/admin${req.url}`,
    activeAdminUsers: true,
    title: 'Users',
  });
};

exports.postUsers = (req, res, next) => {
  const users = new Users(req.body.name);
  users.saveUsers();
  res.redirect('back');
  return res.end();
};
