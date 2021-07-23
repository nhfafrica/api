const mongoose = require('mongoose')
const { Schema } = mongoose

const registrationSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    phoneNumber: {type: String, required: true},
    additionalData: {
        physicalAddress: {type: String, required: true},
        pronoun: {type: String, required: true},
        birthDay: {type: String, required: true},
        occupation: {type: String, required: true}
    },
    socialBackground: {
        socialMediaHandles: {
        },
        publicFigures: {type: String, required: true},
        mostAdmiredNGO: {type: String, required: true}
    },
    interests: {
        preferedSocialMedia: {type: String, required: true},
        volunteerType: {type: String, required: true},
        interestedVolunteerUnits: []
    },
    reasonForVolunteering: {type: String, required: true},
}, {timestamps: true, minimize: false})

const Register = mongoose.model('Register', registrationSchema)

module.exports = Register
