const express = require('express')
const mongoose = require('mongoose')
const designRoutes = require('./routes/designRoutes')
require('dotenv').config({path: "./config.env"})

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

const app = express()

app.use(express.json())
app.use('/api', designRoutes)


port = 5000

app.listen(port, (err) => {

    console.log(`server started on port ${port}`)
})

