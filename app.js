const express = require('express')
const app = express()
const ejs = require('ejs')

app.use(express.static('public'))
app.set('view engine','ejs')

const index = require('./src/routes/index')

app.use('/',index)

app.listen(3000)