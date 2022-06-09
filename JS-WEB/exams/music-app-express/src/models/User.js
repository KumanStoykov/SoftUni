const mongoose = require('mongoose');

const usrSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,             
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', usrSchema);

module.exports = User;