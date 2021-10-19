const Users = require('../models/users');

exports.getUsers = (_req, res, _next) => {
    Users.find({}, (err, users) => {
        if (err) {
            console.log(err)
        }
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

exports.getUser = (req, res, _next) => {
    Users.findById(req.params.userid, (err, user) => {
        if (err) {
            console.log(err)
        }

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
    if (userid) {
        Users.findByIdAndUpdate(userid, { ...req.body }, (err, docs) => {
            console.log(err ? err : `Updated User: ${docs}`)
        })
    } else {
        const users = new Users({ ...req.body });
        users.save()
    }
    res.redirect('back');
    return res.end();
};

exports.deleteUserById = (req, res, _next) => {
    const { userid } = req.params;
    Users.findByIdAndDelete(userid, (err, docs) => {
        console.log(err ? err : `Deleted User: ${docs}`)
    })
    res.redirect('/users');
    return res.end();
};
