const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    surname: {
        type: String
    },
    given_name: {
        type: String
    },
    title: {
        type: String
    },
    image_upload: {
        type: String
    },
    gender: {
        type: String
    },
    date_of_birth: {
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