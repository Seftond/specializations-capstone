//setup variables
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer')
const Vonage = require('@vonage/server-sdk');
const cors = require('cors');
const app = express();
const { getEvents, updateUsers, addSubscriber } = require('./controller.js');
const {SERVER_PORT} = process.env


//Middleware
app.use(express.json());
app.use(cors());

//RESTful requests
app.get('/events', getEvents);
app.post('/users', updateUsers);
app.post('/email', addSubscriber);


//Mailing service
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.WORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
    tls: {
        rejectUnauthorized: false
    }
   });

   //Verifies mail is set up
   transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });

   //Endpoint for nodemailer
   app.post("/send", function (req, res) {
    let {username, email, message} = req.body;
    let mailOptions = {
    from: `${email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${username}, ${email}`,
    text: `${message}`,
   };

   transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
   });
    })

    // Vonage API

    const vonage = new Vonage({
      apiKey: process.env.VONAGE_API_KEY,
      apiSecret: process.env.VONAGE_API_SECRET
    })

app.listen(SERVER_PORT, () => {
    console.log(`Docked at server ${SERVER_PORT}`)
});