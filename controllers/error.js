exports.get404 = (req, res, _next) => {
    res.status(404).render('404', { title: '404 Page not found', path: req.url });
}