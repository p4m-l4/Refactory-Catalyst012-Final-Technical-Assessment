require("dotenv").config();

const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const flash = require("connect-flash");

const Student = require("./models/Student");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const expressSession = require("express-session")({
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
});

app.use(expressSession);
app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "public", "uploads"))
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.render("register", {messages: req.flash("messages")});
});

app.post("/", upload.single("photo"), async (req, res) => {
  console.log(req.body)
  try {
    const student = new Student({
      ...req.body,
      imageUrl: `/${req.file.path.replaceAll("\\", "/")}`,
    });

    await student.save();

    const message = {
      message: `Registered successfully`,
      type: "Success",
    };

    req.flash("messages", message);

    res.redirect("/");
  } catch (err) {
    console.error(err);
    const message = {
      message: `Error: ${err.message}`,
      type: "Error",
    };

    req.flash("messages", message);

    res.redirect("/");
  }
});

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.once("open", function () {
  console.log("Connected to MongoDB");
  startApp();
});

db.on("error", function (err) {
  console.error(err);
});

function startApp() {
  app.listen(process.env.SERVER_PORT || 8000, () => {
    console.log("App server listening on port 8000");
  });
}
