const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
	surname: String,
	givenname: String,
	title: String,
	gender: String,
	dob: Date,
	country: String,
	residence: String,
	nationality: String,
});

module.exports = mongoose.model("Student", studentSchema);
