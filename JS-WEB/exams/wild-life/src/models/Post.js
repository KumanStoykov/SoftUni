const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    keyword:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    dateOfCreation:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    votesOnPost:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    ratingOnPost:{
        type: Number,
        default: 0
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;