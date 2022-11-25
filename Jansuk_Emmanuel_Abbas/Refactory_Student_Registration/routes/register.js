const router = require('express').Router()

const multer = require('multer')

const regModel = require('../model/upload_details')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads")
    }, 
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

var upload = multer({storage: storage})


router.get('/', (req, res) => {
    res.render('registration')
})


router.post('/register_students', (req, res) => {
    const registerStudents = new regModel(req.body)
    console.log(registerStudents)
})

module.exports = router