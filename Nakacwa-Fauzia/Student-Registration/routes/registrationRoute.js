const express = require("express");
const router = express();

// importing Model
const Registration = require('../models/Registration');

router.get("/", (req, res) =>{
    res.render("registration-form");
})

router.post('/', async(req, res) => {
    console.log(req.body);
    try {
		const student = new Registration(req.body);
		await student.save();
    } catch (error) {
        res.status(400).send("Can't Save This Application");
    }
    

})
module.exports = router