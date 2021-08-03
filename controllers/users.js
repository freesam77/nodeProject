const Users = require('../models/users');

exports.getUsers = (req, res, next) => {
    Users.getUsers((users) => {
        res.render('users', {
            users,
            path: `/users`,
            activeUser: true,
            title: 'Users',
        });
    });
};

exports.getUser = (req, res, next) => {
    Users.getUsers((users) => {
        res.render('users', {
            users,
            path: `/users${req.url}`,
            activeUser: true,
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
