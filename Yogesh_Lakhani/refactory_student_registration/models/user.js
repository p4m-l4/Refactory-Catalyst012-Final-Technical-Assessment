const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    surname:{
        type: String
    },
    given_name:{
        type: String
    },
    title:{
        type: String
    },
    photo:{
        type:String
    },
    gender:{
        type: String
    },
    date:{
        type: Date
    },
    country:{
        type: String
    },
    residence:{
        type: String
    },
    nationality:{
        type: String
    }
   
})



module.exports = mongoose.model("form_data", userSchema);