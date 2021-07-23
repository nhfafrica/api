const express = require('express')
const router = require('./index')
const mongoose = require('mongoose')

const app = express()
require('dotenv').config()

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  )
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  )
  next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const uri = process.env.DB_CONNECTION
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
  .then(() => {
    console.log('DB connection is successful')
  })
  .catch((err) => {
    console.log(`Couldn't connect DB => ${err}`)
  })

app.use("/", router)

module.exports = app
