const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
    breed: {
        type: String, 
        required: true
    }
});

const Breed = mongoose.model('Breed', breedSchema);
module.exports = Breed;