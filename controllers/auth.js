const { getIsLoggedIn } = require('../util/auth')

exports.getLogin = (req, res, _next) => {
    const info = getIsLoggedIn(req)
    res.render('auth/login', {
        path: `/login`,
        title: 'Login',
        isAuthenticated: req.isLoggedIn
    });
};

exports.postLogin = (_req, res, _next) => {
    res.setHeader('Set-Cookie', 'isLoggedIn=true')
    res.redirect('/')
};

exports.postLogout = (_req, res, _next) => {
    res.setHeader('Set-Cookie', 'isLoggedIn=false')
    res.redirect('/')
};