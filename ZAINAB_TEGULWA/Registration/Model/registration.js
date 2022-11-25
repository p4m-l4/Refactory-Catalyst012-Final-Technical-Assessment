const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    surname: {
        type: String
    },
    gname: {
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

module.exports = mongoose.model('registerStudent', registerSchema);