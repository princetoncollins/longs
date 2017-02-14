//Dependencies.
var express = require('express');
var router = express.Router()
var app = express();
// var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var session = require('express-session');
var port = 9001;
var cors = require('cors');
var fs = require('fs');
var router = express.Router();
// var mongojs = require('mongojs');
var http = require('http');
var favicon = require('serve-favicon');
var dotenv = require('dotenv');
var sendgrid = require('sendgrid')(process.env.SENDGRID_USER, process.env.SENDGRID_PASSWORD);
// dotenv.load();

var LocalStrategy = require('passport-local').Strategy;

// var configDB = require('./db/database.js'); 

// mongoose.connect(configDB.url);
// mongoose.Promise = global.Promise;
// mongoose.connection.once('open', function() {
// 	console.log('Connected to the database at:', configDB.url);
// });

// var User = require('./public/database/models/user.js');
 
// require('./public/js/passport/passport.js')(passport);

//Set up Express application.
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

// Required for Passport.
// app.use(session({ secret: 'secret' }));
// app.use(passport.initialize()); 
// app.use(passport.session());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// require('./public/js/app/routes.js')(app, passport);

app.listen(port, function() {
  console.log('Magic! Listening on port:', port);
});