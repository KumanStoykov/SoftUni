const mongoose = require('mongoose');

const housingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: {
           values: ['Apartment', 'Villa', 'House'],
           message: 'Required Apartment, Villa, House'
        },
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    availablePieces: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    rentedHome: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ]
});

const Housing = mongoose.model('Housing', housingSchema);

module.exports = Housing;