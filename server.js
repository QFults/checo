const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 3000 || process.env.PORT
const app = express()

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
mongoose.connect('mongodb://localhost:27017/checo_db', { useNewUrlParser: true })

app.set(require('./routes')(app, require('./models'), mongoose))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
