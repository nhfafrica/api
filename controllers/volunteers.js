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
