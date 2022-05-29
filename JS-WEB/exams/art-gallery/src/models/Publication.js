const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    paintingTechnique: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    count: {
        type: Number,        
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    userShared: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'

        }
    ]
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;
