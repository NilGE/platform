import express from 'express';
import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';

const router = express.Router();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'gxysqyx',
            clientId: '356511090202-de66av889i9r7gsjkacs11u3eobi868k.apps.googleusercontent.com',
            clientSecret: 'E20UCgQGPA6TrlI3gwlgBiO7',
            refreshToken: '1/xxPXSVtMaMT0l96xVx_Zx_S_1z7yOYPfkuNyXXag1r4'
        })
    }
});

/*
in the req.body, the data format should be

var mailOptions={
    from : "gxysqyx@gmail.com",
    to : "gexiangy@usc.com",
    subject : "Hello!",
    text : "New World",
    html : "<p>New World</p>"
}

*/

/*
{
  "accepted": [
    "gxysqgz@gmail.com"
  ],
  "rejected": [],
  "response": "250 2.0.0 OK 1483548046 u23sm148071080pfg.86 - gsmtp",
  "envelope": {
    "from": "gxysqyx@gmail.com",
    "to": [
      "gxysqgz@gmail.com"
    ]
  },
  "messageId": "c73bdf2a-6c15-6e44-ebf3-146ee32148ba@gmail.com"
}

*/



router.post('/send', (req, res) => {
  transporter.sendMail(req.body, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
    transporter.close();
  });
});

export default router;
