const Course = require('../models/Course');
const User = require('../models/User');


exports.topThree = () => Course.find().sort({ usersEnrolled: 'desc'}).limit(3);

exports.getAllDes = (query) => {

    if(query) {
        const regEx = new RegExp(query.search, 'i');
       return Course.find({ title: regEx });

    } else {
       return Course.find().sort({ createdAt: 'asc'})
    }
};

exports.getAllByDate = () => Course.find().sort({ createdAt: 'asc'});

exports.getAllByLikes = () => Course.find().sort({ usersLiked: -1});

exports.getOne = (id) => Course.findById(id);

exports.create = async (courseData) => Course.create(courseData);

exports.enroll = async (courseId, userId) => {    
    
    const user = await User.findById(userId)
    const course = await Course.findById(courseId)
  
    user.enrolledCurses.push(course);
    course.usersEnrolled.push(user);

    return Promise.all([user.save(), course.save()]);
    
};

exports.edit = (id, data) =>  Course.findByIdAndUpdate(id, data);

exports.delete = (id) =>  Course.findByIdAndDelete(id);
