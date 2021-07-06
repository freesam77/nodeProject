const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../util/path')

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'))
})

router.post('/users', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
    return res.end()
})


module.exports = router