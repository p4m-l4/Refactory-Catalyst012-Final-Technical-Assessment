// const { Router } = require('express');
const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

// Importing model
const Registration = require('../models/User')

router.get('/register', (req,res) =>{
     res.render("studentRegistrationForm");
});
router.post('/register', async (req,res) =>{
    console.log("req.body");
    try { 
        const user = new Registration(req.body);
        let UniqueUser = await Registration.findOne({surName:req.body.surName});
        if(UniqueUser) {
            return res.status(400).send("Sorry this uniqueId is already taken")
        }
        else {
            await Registration.register(user, req.body.password, (error) => {
                if (error){
                    throw error
                } res.redirect ('/login')
            });
           
        }
        
    } catch (error) {
        res.status('400').send('Sorry, an error occurred.');
        console.log(error);
    }
    //res.send ('User registered successfully');
    // // res.redirect('/');
});


module.exports = router;

