require('dotenv').config()
const {textTemplate, htmlTemplate} = require('./email-template')
const mailjet = require('node-mailjet')
    .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

exports.sendEmail = (applicantEmail, applicantName) => {
    const request = mailjet
        .post("send", {'version': 'v3.1'})
        .request({
            "Messages":[
            {
                "From": {
                "Email": "hello@nhfafrica.org",
                "Name": "Nyuma"
                },
                "To": [
                {
                    "Email": applicantEmail,
                    "Name": applicantName
                }
                ],
                "Subject": "Greetings from Nyuma Harrison Foundation",
                "TextPart": textTemplate(applicantName),
                "HTMLPart": htmlTemplate(applicantName)
            }]
        })

        request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err)
        })
}
