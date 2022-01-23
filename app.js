const express = require('express')
const app = express()
const ejs = require('ejs')
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('view engine','ejs')

const index = require('./src/routes/index')

app.use('/',index)

app.listen(port)