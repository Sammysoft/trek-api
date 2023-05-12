import nodemailer from "nodemailer";"use strict";

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xwiftapp@gmail.com',
        pass: 'txgorxevpwweltje'
    }
  });

  export const sendMail = (
    senderMail,
    recieverMail,
    subject,
    text,
    body,
    cb
  ) => {
    const mailOptions = {
      from: senderMail,
      to: recieverMail,
      subject: subject,
      text: text,
      html: `
            <style>
            @import url(//db.onlinewebfonts.com/c/7bd7f049ab12f7efc10d48e5fa57a618?family=MijaW03-Bold);
            div{
              font-family: MijaW03-Bold;
            }
            </style>
            <div style="background-color: #020202; color: white;width: 100%; margin: auto; padding: 10px;">
                            <div style="font-weight: 700; margin: auto;  width: 100%; font-size: 1.8rem; display:flex; flex-direction: column; align-items: space-between; justify-content: center">
                                 <span style="color: #dbb921;"><b>TekNotes</b></span>
                            </div>
                            <br/><br/>
                            <hr/>
                            <p style="font-size: 1.2rem; font-weight: 700">${text} </p><br/><br/>
                            <p>
                               ${body}
                            </p><br/><br/>
                            <p>TekNotes! </p><br/>
                            <p><small><i>🤓🤓🤓</i></small></p>
                        </div>
                            `,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  };