const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'))
})

router.post('/users', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
    return res.end()
})


module.exports = router