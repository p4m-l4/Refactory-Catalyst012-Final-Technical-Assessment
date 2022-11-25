const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  surName: {
    type: String,
    trim: true,
    required: true,
  },
  givenName: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    enum: ["Mr.", "Mrs.", "Miss.", "Dr.", "Prof.", "Eng."],
  },
  imageUrl: {
    type: String,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    trim: true,
    required: true,
    enum: ["Male", "Female"]
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  country: {
    type: String,
    trim: true,
    required: true,
    enum: ["Uganda", "Kenya", "Tanzania", "Rwanda", "Burundi"],
  },
  placeOfResidence: {
    type: String,
    trim: true,
    required: true,
  },
  nationality: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
