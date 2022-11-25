const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();
const Student = require("../models/Student");

// image upload
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// instantiate variable upload to store multer functionality to upload image
const upload = multer({ storage: storage });

router.get("/", (req, res) => {
	res.render("form", { messages: req.flash("info") });
});

router.post("/", upload.single("avatar"), async (req, res) => {
	console.log(req.body);
	try {
		let student = new Student(req.body);
		student.avatar = req.file.path;
		await student.save();
		req.flash("info", "Student registered successfully");
		res.redirect("/");
	} catch (err) {
		console.log(err);
		res.status(404).send(err);
	}
});

module.exports = router;
