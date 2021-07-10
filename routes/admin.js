const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../util/path')

const users = []

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'))
})

router.post('/users', (req, res, next) => {
    users.push(req.body)
    res.redirect('/')
    return res.end()
})


exports.routes = router;
exports.users = users;