const mongoose = require("mongoose");


const studentSchema = mongoose.Schema({
	surname: {
		type: String,
		trim: true,
	},
	givename: {
		type: String,
		trim: true,
	},
	title: {
		type: String,
		trim: true,
	},
	// imageupload: {
	// 	type: String,
	// 	trim: true,
	// },
	gender: {
		type: String,
		trim: true,
	},
	dateofbirth: {
		type: Date,
		trim: true,
	},
	country: {
		type: String,
		trim: true,
	},
	nationality: {
		type: String,
		trim: true,
	},
});

module.exports = mongoose.model("Registration", studentSchema);