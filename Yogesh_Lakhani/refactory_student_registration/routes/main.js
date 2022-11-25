const express = require("express");
const router = express.Router();
const userReg = require("../models/user")
const multer = require("multer")


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });


var upload = multer({ storage: storage });



router.get('/', function(req,res){
    res.render("registration")
})


router.post('/', upload.single("photo"), async function(req,res){
    const user = new userReg(req.body);
    user.photo = req.file.path;
    await user.save();
    user.save((err) => {
        if(err){
            console.log("err")
        }else{
            res.redirect('/')
        }
    })

})


module.exports = router;