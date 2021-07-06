const express = require('express')
const path = require('path')
const app = express()
const adminRoutes = require('./routes/admin')
const indexRoutes = require('./routes/index')
const rootDir = require('./util/path')

app.use(express.urlencoded({ extended: false }))

app.use('/admin', adminRoutes)
app.use(indexRoutes)

// handle 404 error page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(3000)
