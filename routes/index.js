const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const form = `
    <h1>Welcome</h1>
    <a href="/admin/users">Go to Users Page</a>
    `
    res.send(form)
    next()
})

module.exports = router
