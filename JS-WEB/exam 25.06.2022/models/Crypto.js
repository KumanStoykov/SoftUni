const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        require: true
    },    
    paymentMethod: {
        type: String,
        enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
        require: true
    },    
    buyCrypto: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;