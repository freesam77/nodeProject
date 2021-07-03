const express = require('express')
const router = express.Router()

router.post('/users', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

router.use(['/hallo', '/hello'], (req, res, next) => {
    res.send('<h1>hallo</h1>')
    next()
})

module.exports = router