// Dependencies
const express = require("express");
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const config = require("./config/db");

// importing Routes

const registrationRoute = require('./routes/registrationRoute');


const app = express();
// Database connection
mongoose.connect(config.database, {useNewUrlParser: true});
const db = mongoose.connection;

db.once("open", function () {
	console.log("Connected to MongoDB");
});
// Check for db errors
db.on("error", function (err) {
	console.error(err);
});

app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));

// Setting BodyParser
app.use(express.urlencoded({extended: false}));


// Setting Static Assets
app.use(express.static(path.join(__dirname, 'public')));
app.use("/public/upload", express.static(__dirname, +"/public/upload"));


// Routes
app.use('/',registrationRoute);

// Testing Route
// app.get('/', (req, res) => {
//     res.render("registration-form");
// })


// Invalid Routes
app.get("*", (req, res) =>{
    res.send("The page your trying to access doesn't exists")
})


app.listen(3009, () => {console.log("Listening to port 3009")});