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



router.post('/register_students', upload.single("image_upload"), async (req, res) => {
    const registerStudents = new regModel(req.body)
    registerStudents.image_upload = req.file.path

    await registerStudents.save()
    res.redirect('back')
})

router.post('/upload_image', (req, res) => {
    console.log(req.body)
})

module.exports = router