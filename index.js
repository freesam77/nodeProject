const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const indexRoutes = require('./routes/index')

app.use(express.urlencoded({ extended: false }))

app.use('/admin', adminRoutes)
app.use(indexRoutes)

// handle 404 error page
app.use((req, res, next) => {
    const errorPage = `
    <h1>Go home kid, the page <pre>${req.url}</pre> doesn't exist</h1>
    <a href="/">Go Home</a>
    `
    res.status(404).send(errorPage)
})

app.listen(3000)
