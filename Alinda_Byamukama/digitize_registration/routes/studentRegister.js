const express = require("express");
const router = express.Router();
const multer = require("multer");
const Register = require("../models/Register");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

router.get("/registration", (req, res) => {
  res.render("registration");
});

router.post("/registration", upload.single("studentimg"), async (req, res) => {
  try {
    const registerStudent = new Register(req.body);
    registerStudent.studentimg = req.file.path;
    await registerStudent.save();
    await Register.register(registerStudent, req.body.password, (error) => {
      if (error) {
        throw error;
      }
      res.redirect("/registration");
    });
  } catch (error) {
    res.status(400).send("Unable to register, please try again.");
  }
});

module.exports = router;
