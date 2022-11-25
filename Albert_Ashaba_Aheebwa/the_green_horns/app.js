require("dotenv").config();
const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const flash = require("connect-flash");

const app = express();
// Import Routes
const formRoutes = require("./routes/form_routes");
const tableRoutes = require("./routes/table_routes");

// evironment variables
PORT = process.env.PORT;
DB_URI = process.env.DB_URI;
SECRET_KEY = process.env.SECRET_KEY;

// MONGODB
main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect(DB_URI);
	console.log("Connected to Student DB");
}

// View engine
app.set("view engine", "pug");
// app.set("views")

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(
	session({
		secret: process.env.SECRET_KEY,
		resave: false,
		saveUninitialized: false,
	})
);

app.use(flash());

// Set ROUTEs
app.use("/", formRoutes);
app.use("/table", tableRoutes);

app.get("*", (req, res) => {
	res.send("<h1 style='text-align:center ; margin-top:20%;'>Page not found 😒<h1>");
});

app.listen(PORT, console.log(`Listening  on port ${PORT}`));
