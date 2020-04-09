
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
console.log(req.body.name)
//Nodemailer
let mailOptions = {
  from: req.body.email,
  to: 'peerlessvendingco@gmail.com',
  subject: req.body.name,
  text: req.body.message
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});

});

module.exports = router;
