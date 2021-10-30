const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const usersRoutes = require('./routes/users');
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const mailingListRoutes = require('./routes/mailing-list');
const rootDir = require('./util/path');
const { get404 } = require('./controllers/error')
const app = express();
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/users', usersRoutes);
app.use('/mailing-list', mailingListRoutes);
app.use(indexRoutes);
app.use(authRoutes);

// handle 404 error page
app.use(get404);

mongoose.connect(`mongodb+srv://sam:${process.env.PASS}@cluster0.zuvwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(res => {
        app.listen(3000)
    }).catch(err => console.log(err))