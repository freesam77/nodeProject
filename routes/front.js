const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
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

module.exports = router
