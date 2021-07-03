const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const frontRoutes = require('./routes/front')

app.use(express.urlencoded({ extended: false }))

app.use(adminRoutes)
app.use(frontRoutes)

app.listen(3000)
