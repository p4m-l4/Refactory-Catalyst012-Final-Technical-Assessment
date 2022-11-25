//Importing modules - dependencies
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/db');
const path = require('path');


//Setting up express session
const expressSession = require('express-session')({
    secret: config.secret,
    reave: false,
    saveUninitialized:false,
});


//Importing routes
const regRoutes = require('./routes/registrationRoutes')

//Instantiating the app
const app = express();

//Setting up database connections
mongoose.connect(config.database, {
    useNewUrlParser: true
});

const db = mongoose.connection;

//Check connection
db.once('open', function () {
    console.log('Connected to Mongodb')
});

//Check for db errors
db.on('error', function (err) {
    console.error(err);
});

//Configurations - for pug
app.set('view engine', 'pug');
app.set('views', './views');

//Middleware functions
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(expressSession);

//Using routes
app.use('/', regRoutes);

//Handling invalid routes
app.get('*', (req, res) => {
    res.send('404. This page does not exist!');
});

//Final line - setting up the app port
app.listen(2001, console.log('Listening on port 2000'));