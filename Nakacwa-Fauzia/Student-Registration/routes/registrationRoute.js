const express = require("express");
const router = express();

// importing Model
const Registration = require('../models/Registration');

router.get("/", (req, res) =>{
    res.render("registration-form");
})

router.post('/', async(req, res) => {
    console.log(req.body)
    const student = new Registration(req.body);
    await student.save();

})
module.exports = router