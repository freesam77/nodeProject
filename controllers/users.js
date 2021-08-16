const Users = require('../models/users');

exports.getUsers = (req, res, next) => {
  Users.getUsers((users) => {
    users.map((user) => {
      if (user.id === undefined) {
        user.id = uuidv4();
      }
    });
    res.render('users', {
      users,
      path: `/users`,
      activeUser: true,
      title: 'Users',
      edit: false,
      user: {},
    });
  });
};

exports.getUser = (req, res, next) => {
  Users.getUserById(req.params.userid, (user) => {
    const edit = (query) => {
      const { edit } = query;
      return edit === 'true' ? true : false;
    };

    res.render('user-detail', {
      user,
      path: `/users${req.url}`,
      activeUser: true,
      title: 'Users',
      edit: edit(req.query),
    });
  });
};

exports.postUsers = (req, res, _next) => {
  const { userid } = req.params;
  const users = new Users(req.body);
  users.saveUser(userid || null);
  res.redirect('back');
  return res.end();
};
