require('dotenv').config();
const express = require("express");
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// route
const mainR = require('./routes/main');

// db connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error',(error) => console.log(error));
db.once('open',() => console.log("connected to db"));


// setting temp engine 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// css
app.use(express.static(path.join(__dirname, 'public')));
// for images uploaded
app.use('public/uploads', express.static(__dirname + '/public/uploads'));


// middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get('/', mainR);

app.listen(8080,console.log(`running on port 8080`));
