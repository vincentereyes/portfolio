var express = require('express');
// Create an Express App
var app = express();

var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());

var nodemailer = require('nodemailer');

// Integrate body-parser with our App
// Require path
var path = require('path');
// Setting our Static Folder Directory

let transporter = nodemailer.createTransport({
	service: "gmail",
	secure: false,
	port: 25,
	auth: {
		user: "vnc128@gmail.com",
		pass: "ihateoreo"
	},
	tls: {
		rejectUnauthorized: false
	}
});




app.use(express.static(path.join(__dirname, './static')));

app.use(express.static(path.join(__dirname, '/portfolioApp/dist')));

app.get('*', function(req, res) {
  res.redirect('/')
});

app.post('/send', function (req, res) {
	let helperOptions = {
		from: "Website portfolio",
		to: "vincentejosereyes@gmail.com",
		subject: req.body.name + " " + req.body.email,
		text: req.body.message
	}
	transporter.sendMail(helperOptions, (error, info) => {
	if (error){
		return console.log(error)
	} else {
		res.json({message: "Success"})
	}
});

})
app.listen(8000, function() {
    console.log("listening on port 8000");
})