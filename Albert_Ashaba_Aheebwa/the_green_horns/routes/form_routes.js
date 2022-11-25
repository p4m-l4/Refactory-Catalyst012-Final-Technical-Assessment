const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.get("/", (req, res) => {
	res.render("form", { messages: req.flash("info") });
});

router.post("/", async (req, res) => {
	console.log(req.body);
	try {
		let patient = new Patient(req.body);
		await patient.save();
		req.flash("info", "Patient registered successfully");
		res.redirect("/");
	} catch (err) {
		console.log(err);
		res.status(404).send(err);
	}
});

module.exports = router;
