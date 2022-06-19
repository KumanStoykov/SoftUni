const Theater = require('../models/Theater');
const User = require('../models/User');


exports.topThree = () => Theater.find().sort({ usersLiked: -1}).limit(3);

exports.getAllDes = () => Theater.find().sort({ createdAt: -1});

exports.getAllByDate = () => Theater.find().sort({ createdAt: 'asc'});

exports.getAllByLikes = () => Theater.find().sort({ usersLiked: -1});

exports.getOne = (id) => Theater.findById(id);

exports.create = async (theaterData) => Theater.create(theaterData);

exports.like = async (playId, userId) => {    
    
    const user = await User.findById(userId)
    const theater = await Theater.findById(playId)
  
    user.likedPlays.push(theater);
    theater.usersLiked.push(user);
    return Promise.all([user.save(), theater.save()]);
    
};

exports.edit = (id, data) =>  Theater.findByIdAndUpdate(id, data);

exports.delete = (id) =>  Theater.findByIdAndDelete(id);
