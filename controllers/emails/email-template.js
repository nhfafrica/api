const textTemplate = (applicantName) => {
 return `
    Dear ${applicantName},
    
    Thank you for applying to join our family as a volunteer.  
    NHF is powered by people just like you - People from all corners of the world who believe that they are courageous enough, smart enough, talented enough and blessed with enough to help change the world - one child at a time.  
    
    Please be patient with us as we review your application. We promise to get back to you as soon as we can match your interests/skills with an opportunity to build better, respond better, and lead better.  
    
    We look forward to having you, 
    Nyuma & the team.
    `
}

const htmlTemplate = (applicantName) => {
  return `
  <table style="width: 100%; background-color: #cfcfcf;">
        <tr>
            <td>
                <table style="margin: 0 auto;">
                    <tr>
                        <td style="width: 600px; margin-top: 4rem;">
                            <p style="text-align:center;"><img src="https://nhfafrica.org/wp-content/uploads/2021/03/TNHF-blue-resized.png"
                                style="margin-bottom: 2rem; width: 150px"></p>
                            <div class="header"
                                style="color: #fff; text-transform: uppercase; background-color: #4a90e2; width: 100%; text-align: center; padding-top: 1rem; padding-bottom: 1rem; border-top-left-radius: 10px; border-top-right-radius: 10px; font-family:'Open Sans', sans-serif; font-size: 1.3rem;">
                                <strong>Application received</strong>
                            </div>
                            <div class="body"
                                style="background-color: #fff; font-family:'Open Sans', sans-serif; width: 100%; padding-top: 3rem;padding-bottom: 3rem; padding-left: 2rem; padding-right: 2rem; box-sizing: border-box; line-height: 1.5; font-size: 1rem;">
                                <p>Dear ${applicantName},</p>
                                <p>Thank you for applying to join our family as a volunteer.</p>
                                <p>NHF is powered by people just like you - People from all corners of the world who
                                    believe that they
                                    are courageous
                                    enough, smart enough, talented enough and blessed with enough to help change the
                                    world - one child
                                    at a time.</p>
                                <p>Please be patient with us as we review your application. We promise to get back to
                                    you as soon as we
                                    can match your
                                    interests/skills with an opportunity to build better, respond better, and lead
                                    better.</p>
                                <p>We look forward to having you,</p>
                                <p><strong>Nyuma & the team.</strong></p>
                            </div>
                            <div class="footer">
                                <p
                                    style="font-size: 0.7rem; background-color: #4a90e2; margin-top: 0; padding: 1rem 2rem; text-align: center; color: #fff; font-family:'Open Sans', sans-serif; border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                                    Disclaimer: This message and any files transmitted with it are confidential and
                                    privileged. If you
                                    have received it in
                                    error, please notify the sender by return e-mail and delete this message from your
                                    system. If you
                                    are not the intended
                                    recipient you are hereby notified that any dissemination, copy or disclosure of this
                                    e-mail is
                                    strictly prohibited. This
                                    email is for negotiation purposes only and does not create a binding contract.</p>
                            </div>
                            <p style="font-size: 0.8rem; font-family:'Open Sans', sans-serif; text-align: center;">Copyright &copy; 2021
                                Nyuma Harrison
                                Foundation</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    `
}

module.exports = { textTemplate, htmlTemplate }
