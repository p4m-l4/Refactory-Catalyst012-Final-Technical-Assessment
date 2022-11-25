const express = require('express');
const router = express.Router();

//Importing model
const Registration = require('../models/Registration');

router.get('/registrationForm', (req, res) =>{
    res.render('registration');
});

router.post('/registrationForm', async (req, res) => {
    try {
        let registration = new Registration(req.body);
        await registration.save();
        console.log(req.body);
        res.redirect('/registrationForm')
        // res.redirect('/registrationForm');
    }
    catch (error) {
        res.status(400).send("Failed to register")
        console.log(error);
    }
});

module.exports = router;