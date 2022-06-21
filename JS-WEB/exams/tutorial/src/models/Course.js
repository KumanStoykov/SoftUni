const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    image: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    usersEnrolled: [
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

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;