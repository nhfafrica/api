const app = require('../routes/app')
const mongoose = require('mongoose')
const supertest = require('supertest')

require('dotenv').config()

const uri = process.env.DB_CONNECTION
const mockUser = {
  "firstName": "me",
  "lastName": "nothing",
  "email": "me@gmail.com",
  "phoneNumber": "08123944502",
  "additionalData": {
    "physicalAddress": "No 1 off road",
    "pronoun": "You/Me",
    "birthDay": "20-09-2021",
    "occupation": "building this"
  },
  "socialBackground": {
    "socialMediaHandles": {
        "twitterHandle": "",
        "instagramHandle": "",
        "facebookHandle": "",
        "linkedinHandle": ""
    },
    "publicFigures": "myself",
    "mostAdmiredNGO": "mine"
  },
  "interests": {
      "preferedSocialMedia": "twitter",
      "volunteerType": "what do you want",
      "interestedVolunteerUnits": ["let's negotiate"]
  },
    "reasonForVolunteering": "Help humanity"
  }

beforeAll(() => jest.setTimeout(8000 * 8000))

beforeEach((done) => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true}, () => done())
})

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  })
})

describe('API POST endpoint test', () => {
  it('POST endpoint should pass', async () => {
    const response = await supertest(app)
      .post('/api/v1/volunteer-applicants')
      .send(mockUser)
      .expect(201)
    expect(response.statusCode).toEqual(201)
    expect(response.body.message).toBe('Registration Successful')
  })

  it('POST endpoint should fail', async () => {
    const response = await supertest(app)
      .post('/api/v1/volunteer-applicants')
      .send({'firstName': 'chiamaka'})
      .expect(400)
    expect(response.statusCode).toEqual(400)
    expect(response.text.includes('error')).toBeTruthy()
  })

})

describe('API GET endpoint test', () => {
  it('GET endpoint should fail', async () => {
    const response = await supertest(app)
      .get('/api/v1/volunteer-applicants')
      .set('Accept', 'application/doc')
      .expect('Content-Type', '/json/')
      .expect(400)
      console.log(response)
  })

  it('GET endpoint should pass', async () => {
    const response = await supertest(app)
      .get('/api/v1/volunteer-applicants')
      .set('Accept', 'application/json')
      .expect('Content-Type', '/json/')
      .expect(200)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(console.log(err)))
  })
})
