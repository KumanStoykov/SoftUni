const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    description: String,
    price: Number,
    img: String,
    material: String,
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;