const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db');
const passport = require('passport');
const expressSession = require('express-session')({
  secret: 'unbw0gable@2022',
  resave: 'false',
  saveUninitialized: false,
});

// import User model
const Registration = require('./models/User')

// Importing Route Files
const formRoutes = require('./routes/formRoutes');
const registerRoutes = require('./routes/registerRoutes');
const oauthRoutes = require('./routes/oauthRoutes');
// Instantiations
const app = express();

// Setup Database Connections
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){
 console.log('Connected to MongoDB');
});

// Check for db errors
db.on('error', function(err){
  console.error(err);
});


// Configurations
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

// MIDDLEWARE
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(expressSession);

 
// Passport Config & Middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

// Routes
app.use('/', formRoutes);
app.use('/',oauthRoutes);
app.use('/', registerRoutes);

// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });
  

app.listen(3000, ()=> console['log']('Listening live on port 3000'));