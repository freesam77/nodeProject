exports.getLogin = (_req, res, _next) => {
    res.render('auth/login', {
        path: `/login`,
        title: 'Login',
    });
};

exports.postLogin = (_req, res, _next) => {
    res.redirect('/')
};