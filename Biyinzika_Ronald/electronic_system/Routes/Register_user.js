const express = require('express')
const router = express.Router()

const Electronic = require('../Models/userSchema')

router.get('/register', (req, res) => {
    res.render('Registration')
})

router.post('/register', async (req,res) => {
    console.log(req.body)
    try {
        const user = new Electronic(req.body)
        await user.save()
            res.redirect('/register')
        
    } catch (error) {
        res.status(400).send('can not register user now')
        console.log(error)
    }
})

module.exports = router