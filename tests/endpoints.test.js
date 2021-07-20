const app = require('../routes/app')
const mongoose = require('mongoose')
const supertest = require('supertest')
require('dotenv').config()

const uri = process.env.TEST_DB_CONNECTION
beforeEach((done) => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true}, () => done())
})

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  })
})
describe('API end point test', () => {
    it('testing the GET end point', () => {

    })
})

