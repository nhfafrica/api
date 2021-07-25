const express = require("express")
const registration = require("../controllers/volunteers")

const router = express.Router()

router.get('/', (req, res) => {
  res.send({'name': 'you fit guess!', 'data': 'hahaha, kasala don burst'})
})

router.post('/v1/volunteer-applicants', registration.createVolunteer)
router.get('/v1/volunteer-applicants', registration.listVolunteerApplicants)

module.exports = router
