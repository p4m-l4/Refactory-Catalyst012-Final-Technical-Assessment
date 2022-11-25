const express = require("express");
const router = express.Router();
const Register = require("../models/Register");

router.get("/registration/success", async (req, res) => {
  try {
    let student = await Register.find();
    res.render("registerSuccess", {
      student: student,
    });
  } catch (error) {
    res
      .status(400)
      .send("Unable to display registered student, please try again.");
  }
});

module.exports = router;
