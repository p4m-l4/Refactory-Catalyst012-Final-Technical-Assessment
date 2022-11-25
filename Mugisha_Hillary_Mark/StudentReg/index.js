
//DEPENDENCIES    
const express = require("express"); 
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db');
const passport = require('passport');

//Express session
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,  
});

//Import the user model--------------/
const Registration = require('./models/Register');


//Importing route files----------------/
const regRoute = require('./routes/regRoute');
 


//INSNTANTIATIONS---------------------/
const app = express();

//Setting up database connections
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Checking for db errors
db.on('error', function(err){
  console.error(err);
});

//Configurations 
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

//Middleware  
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(expressSession);
app.use(express.static('/public/images/'))

//Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser())


//routes
app.use('/', regRoute);


//Invalid routes. 
app.get("*", (req, res) => {
	res.send("404! This is an invalid URL.");
});

// Bootstrapping Server
app.listen(6000, () => console.log("We are listening on port 6000"));