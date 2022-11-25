const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    surname: {
        type: String,
        trim: true
    },
    divenname: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    male: {
        type: String,
        
    },
    female: {
        type: String,
        
    },
    dateofbirth: {
        type: Date,
        
    },
    country: {
        type: String,
    },
    residence: {
        type: String,
        trim: true
    },
    nationality: {
        type: String,
        trim: true
    },

});

// my collect name in the databas is Certification
module.exports = mongoose.model('Electronic', userSchema)
