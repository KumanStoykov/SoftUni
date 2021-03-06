const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 120
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\//i, 'Invalid image url']
    },
    breed: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;