// DEPENDENCIES (Or Plugins--------***** section in Anatomy of an Express Server
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db');
const passport = require('passport');

// Express session
const expressSession = require('express-session')({
  secret: 'hermit#9',
  resave: false,                                        // don't save session if unmodified
  saveUninitialized: false,                             // don't create session until something is stored
})

// Import the User Model or Schema
const ClientRegister = require('./models/Customers');

// Importing Route files
const registerRoutes = require('./routes/registerRoutes');
const { exists } = require('./models/Customers');

// INSTANTIATIONS----------------****** section in Anatomy of an Express Server
const app = express();

// SetUp Database Connections
mongoose.connect(config.database, { useNewUrlParser: true});
const db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB now');
});

// Check for db errors
db.on('error', function(err){
  console.error(err);
});

// CONFIGURATIONS-------------------**** section in Anatomy of an Express Server
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(expressSession);

// Passport configuration middleware
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(ClientRegister.createStrategy());
// passport.serializeUser(ClientRegister.serializeUser());
// passport.deserializeUser(ClientRegister.deserializeUser);

// ROUTES---------------------------**** section in Anatomy of an Express Server
app.use('/', registerRoutes);

app.get('/', (req, res) => {
  res.send('Welcome home. This is Cohort 12, mbu!');
})

app.get('/index', (req, res) => {
  res.render('index');
})

app.get('*', (req, res) => {
  res.send("404! Sorry the page you're looking for does not exists.")
})

// BOOTSTRAPPING SERVER--------------***section in Anatomy of an Express Server

app.listen(3800, () => console['log']('Elders are listening on port 3800'));
