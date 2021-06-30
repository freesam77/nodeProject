const express = require('express')
const app = express()

app.use('/', (req, res, next) => {
    console.log("I am groot!")
    next()
})
app.use(['/hallo', '/hello'], (req, res, next) => {
    res.send('<h1>hallo</h1>')
    next()
})

app.listen(3000)
