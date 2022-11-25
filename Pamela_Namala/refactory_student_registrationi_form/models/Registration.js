const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
	surname: {
		type: String,
		trim: true,
	},
	givenName: {
		type: String,
		trim: true,
	},
	title: {
		type: String,
		trim: true,
	},
	photo: {
		type: String,
		trim: true,
	},
	gender: {
		type: String,
		trim: true,
	},
	dob: {
		type: Date,
		trim: true,
	},
	country: {
		type: String,
		trim: true,
	},
	residence: {
		type: String,
		trim: true,
	},
	nationality: {
		type: String,
		trim: true,
	}
});

module.exports = mongoose.model('Registration', registrationSchema);