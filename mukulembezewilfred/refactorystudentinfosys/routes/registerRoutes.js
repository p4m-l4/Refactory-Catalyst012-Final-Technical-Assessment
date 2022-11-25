const express  = require('express');
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

// Importing the Model(s) or schema(s)
const ClientRegister = require('../models/Customers');
const { render } = require('pug');

const { get } = require('mongoose');
// see comments.txt



// image upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
  cb(null, file.originalname);
  }
  });
  
  // instantiate variable upload to store multer functionality to upload image
  var upload = multer({ storage: storage }) 

// home page route
router.get('/index', (req, res) => {
  res.render('index');
})

// home page if you have to await info from the Customers Model collection(s)
// router.get('/index', async (req,res) => {
//   try {
//     let saleDairy = await ClientRegister.find({productcategory: 'Diary'}).sort({$natural:-1});
//     let saleHorticulture = await ClientRegister.find({productcategory: 'Horticulture'}).sort({$natural:-1});
//     let salePoultry = await ClientRegister.find({productcategory: 'Poultry'}).sort({$natural:-1});

//     res.render('index', {
//       dairyGoods:saleDairy,
//       horticultureGoods:saleHorticulture,
//       poultryGoods:salePoultry
//       });

//     // console.log()
//   } catch (error) {
//     res.status(400).send("Sorry we are fresh out of dairy products right now.");
//     console.log(error);
//   }
// });

router.get('/signupclient', (req, res) => {
  res.render('client-signup');
})

router.post("/signupclient", upload.single('avatar'), async (req, res) => {
  console.log(req.body);
  try {
    const newClient = new ClientRegister(req.body);
    newClient.avatar = req.file.path;
    await newClient.save();
      res.redirect('/signupclient');
    }
    catch (error) {
      res.status(400).send("Sorry we were unable to create your account.");
      console.log(error);
  }
});


module.exports = router; 
