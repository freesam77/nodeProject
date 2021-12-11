const express = require('express');
const session = require('express-session');
const path = require('path');
const mongoose = require('mongoose')
const MongoDBStore = require('connect-mongodb-session')(session)
const usersRoutes = require('./routes/users');
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const mailingListRoutes = require('./routes/mailing-list');
const rootDir = require('./util/path');
const { get404 } = require('./controllers/error')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const MONGODB_URI = `mongodb+srv://sam:${process.env.PASS}@cluster0.zuvwc.mongodb.net/myFirstDatabase?w=majority`

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
})

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));
const sesh = {
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store
}
app.use(session(sesh))

app.use('/users', usersRoutes);
app.use('/mailing-list', mailingListRoutes);
app.use(indexRoutes);
app.use(authRoutes);

// handle 404 error page
app.use(get404);

mongoose.connect(MONGODB_URI)
    .then((_res) => {
        app.listen(3000)
    }).catch(err => console.log(err))