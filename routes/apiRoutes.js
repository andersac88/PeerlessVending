
const router = require("express").Router();
const nodemailer = require('nodemailer');


let transport = nodemailer.createTransport( {
    service: "Gmail",
    auth: {
      user: "PeerlessVendingCoWeb@gmail.com",
      pass: "Fab983Cf527Db!"
    }
  });

router.post("/contact", (req, res) => {
//Nodemailer
let mailOptions = {
  from: req.body.email,
  to: 'peerlessvending@gmail.com',
  subject: req.body.name,
  text: "From: " + req.body.name + "E-mail: "+ req.body.email +"Content: " + req.body.message,
  html: "<h1>From: " + req.body.name + "</h1><br><h2>E-mail: " + req.body.email + "</h2><br><h3>Message: " + req.body.message + "</h3>" 
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  } else {
    res.json(info)
  }

});
});

module.exports = router;
