const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../util/path')
const { users } = require('./admin')

router.get('/', (_req, res, _next) => {
    console.log('index.js', users)
    res.render('index')
    // res.sendFile(path.join(rootDir, 'views', 'index.html'))
})

module.exports = router
