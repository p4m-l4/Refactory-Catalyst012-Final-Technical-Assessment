const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.get("/", async (req, res) => {
	try {
		let students = await Student.find();
		console.log(students);
		res.render("table", { students });
	} catch (err) {
		console.log(err);
		res.status(404).send(err);
	}
});

module.exports = router;
