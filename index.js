const express = require('express')
const app = express()

app.use('/users', (req, res, next) => {
    console.log("hello")
    res.send('<h1>User list</h1>')
    next()
})
app.use('/', (req, res, next) => {
    console.log("hello")
    res.send('<h1>Hello there!</h1>')
    next()
})

app.listen(3000)