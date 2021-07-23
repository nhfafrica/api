const userModel = require('../models/userModel')

exports.createVolunteer = (req, res) => {
  const user = new userModel(req.body)
  user.save()
    .then(() => {
      res.status(201).json({
        message: 'Registration Successful'
      })
    })
    .catch((err) => {
    res.status(400).json({
      error: `Registration Failed - ${err}`
    })
  })
}

exports.listVolunteerApplicants = (req, res) => {
  userModel.find()
  .then((applicants) => {
    res.status(200).json({
      applicants
    })
  })
  .catch((err) => {
    res.status(404).json({
      error: `E don happen => ${err}`
    })
  })
}
