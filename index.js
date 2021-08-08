const express = require('express');
const path = require('path');
const usersRoutes = require('./routes/users');
const indexRoutes = require('./routes/index');
const mailingListRoutes = require('./routes/mailing-list');
const rootDir = require('./util/path');
const { get404 } = require('./controllers/error')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/users', usersRoutes);
app.use('/mailing-list', mailingListRoutes);
app.use(indexRoutes);

// handle 404 error page
app.use(get404);

app.listen(3000);
