const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    myPublications: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Publication'
        }
    ],
    myShared: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Publication'
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;