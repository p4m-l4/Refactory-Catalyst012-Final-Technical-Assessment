const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const registerSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  givenName: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
  },
  residence: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
    trim: true,
  },
  studentimg: {
    type: String,
    required: true,
  },
});

// collection is called Student in mongodb
module.exports = mongoose.model("Student", registerSchema);
