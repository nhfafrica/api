const textTemplate = (applicantName) => {
 return `
    Dear ${applicantName}, are you there!
    `
}

const htmlTemplate = (applicantName) => {
  return `
    <body><h3>Dear ${applicantName}</h3> are you there!</body>
    `
}

module.exports = { textTemplate, htmlTemplate }