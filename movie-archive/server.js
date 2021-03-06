const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const config = require('config')

const app = express()

app.use(express.json())

//DB Config
const db = config.get('mongoURI')

mongoose.connect(db, { 
    useNewUrlParser: true, 
    useCreateIndex: true 
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.use('/auth', require('./routes/auth'))
app.use('/users', require('./routes/users'))
app.use('/movies', require('./routes/movies'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
