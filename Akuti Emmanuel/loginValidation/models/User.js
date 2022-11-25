const express = require('express');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    surName:{
        type: String,
        required: true,
    },
    givenName:{
        type: String,
        required: true,
        trim: true
    },
    title:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        unique: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    country:{
        type: String,
        required: false
    },
    placeOfResidence:{
        type: Date,
        required: true
    },
    status: {
        type: String,
        default:"Pending",
        enum:["Pending", "Approved"]
    }

});

userSchema.plugin(passportLocalMongoose, {
    usernameField: ''
})

module.exports = mongoose.model("Registration", userSchema);
