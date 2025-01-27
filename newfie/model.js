const mongoose = require('mongoose');

// Define the schema
const LoginSchema = new mongoose.Schema({
    username: { 
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+/, 'is invalid'], 
        index: true 
    },
    email: { 
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true 
    },
    token: String,
    bio: String,
    image: String,
    hash: String,
    salt: String
}, { timestamps: true });

// Create the model
const LoginModel = mongoose.model('User', LoginSchema);

module.exports = LoginModel;
