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
        });
    });
};

exports.getUser = (req, res, next) => {
    Users.getUserId(req.params.userid, (user) => {
        const { edit } = req.query
        const booleanEdit = edit === 'true' ? true : false
        res.render('user-detail', {
            user,
            path: `/users${req.url}`,
            activeUser: true,
            title: 'Users',
            edit: booleanEdit
        });
    });
};

exports.postUsers = (req, res, _next) => {
    const users = new Users(req.body);
    users.saveUser();
    res.redirect('back');
    return res.end();
};
