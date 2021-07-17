const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin');
const indexRoutes = require('./routes/index');
const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(indexRoutes);

// handle 404 error page
app.use((_req, res, _next) => {
    //   res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).render('404');
});

app.listen(3000);
