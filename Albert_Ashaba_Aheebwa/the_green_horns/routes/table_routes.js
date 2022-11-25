const express = require("express");
const router = express.Router();
// const Patient = require("../models/Patient");

router.get("/", async (req, res) => {
	try {
		// let patients = await Patient.find();
		// console.log(patients);
		res.render("table");
	} catch (err) {
		console.log(err);
		res.status(404).send(err);
	}
});

module.exports = router;
