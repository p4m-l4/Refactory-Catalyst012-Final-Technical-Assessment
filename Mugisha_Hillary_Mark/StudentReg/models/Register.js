const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const registrationSchema = new mongoose.Schema({
    surname:{
        type: String,
        required: true,
        trim: true
    },
    givenname:{
        type: String,
        trim: true
    },
    title:{
        type: String,
        trim: true
    },
    gender:{
        type: String,
        trim: true
    },
    
    dob:{
        type: String,
        trim: true
    },
    country:{
        type: Date,
        trim: true
    },  
    por:{
        type: Date,
        trim: true
    },
    

    nationality:{
        type: String,
        trim: true
    },
    
})

registrationSchema.plugin(passportLocalMongoose,{
    usernameField: 'surname'
});
module.exports = mongoose.model('Registration', registrationSchema);


