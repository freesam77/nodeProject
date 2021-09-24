const Users = require('../models/users');

exports.getUsers = async (req, res, next) => {
    const users = await Users.getUsers();
    res.render('users', {
        users,
        path: `/users`,
        activeUser: true,
        title: 'Users',
        edit: false,
        user: {},
    });
};

exports.getUser = async (req, res, next) => {
    const user = await Users.getUserById(req.params.userid);
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
};

exports.postUsers = (req, res, _next) => {
    //   const { userid } = req.params;
    const users = new Users(req.body);
    users.saveUser();
    res.redirect('back');
    return res.end();
};

exports.deleteUserById = (req, res, _next) => {
    const { userid } = req.params;
    Users.deleteUserById(userid);
    res.redirect('/users');
    return res.end();
};
