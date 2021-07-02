const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))


app.post('/users', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})
app.use(['/hallo', '/hello'], (req, res, next) => {
    res.send('<h1>hallo</h1>')
    next()
})

app.use('/', (req, res, next) => {
    const form = `
    <h1>Please type your name and click submit</h1>
        <form method="POST" action="/users">
            <input type="text" name="title"/>
            <button type="submit">Submit</button>
        </form>
    `
    res.send(form)
    next()
})

app.listen(3000)
