exports.getLogin = (req, res, _next) => {
    res.render('auth/login', {
        path: `/login`,
        title: 'Login',
        isAuthenticated: req.isLoggedIn
    });
};

exports.postLogin = (req, res, _next) => {
    req.session.isLoggedIn = true
    res.redirect('/')
};

exports.postLogout = (req, res, _next) => {
    req.session.isLoggedIn = false
    res.redirect('/')
};