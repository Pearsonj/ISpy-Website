const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Details</h3>
      <ul>
      <li>Name: ${req.body.name}</li>
      <li>Phone Number: ${req.body.phoneNumber}</li>
      <li>email: ${req.body.email}</li>
      <li>Address: ${req.body.address}
      <li>City: ${req.body.city}</li>
      <li>Square Ft: ${req.body.sqft}</li>
      <li>Realtor?: ${req.body.realtor}</li>
      </ul>
      <h3>Message:</h3>
      <p>${req.body.message}</p>
    `

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: 'ispyemails@gmail.com',
             pass: 'Joshua13!'
         }
     });

    let mailOptions = {
      from: `${req.body.email}`,
      to: 'ispyemails@gmail.com',
      replyTo: `${req.body.email}`,
      subject: 'A New Inspection From ' + `${req.body.name}`,
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) =>{
      if(err){
        return console.log(err)
      }

      console.log('Message Sent: %s', info.message)
      console.log('Message URL: %s', nodemailer.getTestMessageUrl)
    })

  })
})


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
