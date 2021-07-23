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
      if (String(err).includes('duplicate key error')) {
        return res.status(409).json({
          message: 'Email already exist',
          error: err
        })
      }
      res.status(400).json({
        message: 'Registration Failed',
        error: err
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
      message: 'Not found',
      error: err
    })
  })
}
