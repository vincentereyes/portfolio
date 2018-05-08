var express = require('express');
// Create an Express App
var app = express();

var nodemailer = require('nodemailer');

// Integrate body-parser with our App
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));

app.use(express.static(path.join(__dirname, '/portfolioApp/dist')));

app.get('*', function(req, res) {
  res.redirect('/')
});
app.listen(8000, function() {
    console.log("listening on port 8000");
})