const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const adminRoutes = require('./routes/admin');
const indexRoutes = require('./routes/index');
const rootDir = require('./util/path');

const app = express();

// app.engine('hbs', expressHbs({ extname: 'hbs', layoutsDir: 'views/layouts/', defaultLayout: 'main-layout' }))
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(indexRoutes);

// handle 404 error page
app.use((req, res, _next) => {
  res.status(404).render('404', { title: '404 Page not found', path: req.url });
});

app.listen(3000);
