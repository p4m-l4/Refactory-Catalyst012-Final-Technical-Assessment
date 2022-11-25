// dependencie
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')
const connectdb = require('./config/db')

const Electronic = require('./Models/userSchema')
// importing routes
const Register = require('./Routes/Register_user')
// instantiation
const app = express()

// connecting to database
mongoose.connect(connectdb.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){

    console.log('MongoDB connected');
  });
  // Check for db errors
  db.on('error', function(err){
    console.error(err);
  });
  
// setting up a template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// for uoloaded images
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))

// using routes
app.use('/', Register)

// for invalid url
app.get('*', (req, res)=>{
    res.send('404! this page doesnot exist')
});

app.listen(5000, () => console.log('listening to port 5000'))