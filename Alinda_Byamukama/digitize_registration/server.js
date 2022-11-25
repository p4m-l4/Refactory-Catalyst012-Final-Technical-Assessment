// DEPENDENCIES
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/db");
const passport = require("passport");
const expressSession = require("express-session")({
  secret: "secretStuff",
  resave: false,
  saveUninitialized: false,
});

// import our db schema
// const Register = require("./models/Register");

// ROUTE PATHS
const registerStudent = require("./routes/studentRegister");
const registerSuccess = require("./routes/registerSuccess");

// INSTANTIATIONS
const app = express();

// DB CONNECTION
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

// check for connection to db
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// check for errors
db.on("error", (err) => {
  console.error(err);
});

// CONFIGURATIONS
// setup pug, views dir
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARE
// image handling - public dir, uploads
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(expressSession);

// app.use(passport.initialize());
// app.use(passport.session());
// this authenticates
// passport.use(Register.createStrategy());
// gives a serial number that allows you to track users in your system after login
// passport.serializeUser(Register.serializeUser());
// when user logsout the  serial num is destroyed
// passport.deserializeUser(Register.deserializeUser());

// ROUTES
app.use("/", registerStudent);
app.use("/", registerSuccess);

app.get("*", (req, res) => {
  res.send("404 Page not found!");
});

// BOOTSTRAPPING SERVER

app.listen(4040, () => console.log("Listening on port 4040 🚀"));
