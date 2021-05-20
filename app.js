const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const albumRouter = require('./routers/album')

const app = express()


app.use(express.json())
app.use(userRouter)
app.use(albumRouter)


module.exports = app