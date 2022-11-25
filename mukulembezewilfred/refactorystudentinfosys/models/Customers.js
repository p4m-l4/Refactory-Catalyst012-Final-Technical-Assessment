const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  avatar: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  title: {
    type: String
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  },
  country: {
    type: String
  },
  residence: {
    type: String
  },
  nationality: {
    type: String
  }
})

// userSchema.plugin(passportLocalMongoose, {
//   usernameField: 'email'
// })

module.exports = mongoose.model('ClientRegister', userSchema);