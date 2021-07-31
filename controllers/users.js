const Users = require('../models/users');

exports.getUsers = (req, res, next) => {
    Users.getUsers((users) => {
        res.render('admin', {
            users,
            path: `/admin${req.url}`,
            activeAdminUsers: true,
            title: 'Users',
        });
    });
};

exports.postUsers = (req, res, _next) => {
    const users = new Users(req.body.name);
    users.saveUser();
    res.redirect('back');
    return res.end();
};
