const express = require('express')
const router = express.Router()

router.get('/users', (req, res, next) => {
    const form = `
    <h1>Please type your user name and click submit</h1>
        <form method="POST" action="/admin/users">
            <input type="text" name="title"/>
            <button type="submit">Submit</button>
        </form>
    `
    res.send(form)
    next()
})

router.post('/users', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
    return res.end()
})


module.exports = router