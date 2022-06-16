const bcrypt = require('bcrypt');
const User = require('../models/User');

const { createToken } = require('../utility/jwtUtility');
const { SALT_ROUNDS } = require('../constants');

exports.register = async (userData) => {
    const hashPassword = await bcrypt.hash(userData.password, SALT_ROUNDS);


    userData.password = hashPassword;

    return User.create(userData);
};

exports.login = async (email, password) => {


    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password!');
    }

    const comparedPassword = await bcrypt.compare(password, user.password);

    if (!comparedPassword) {
        throw new Error('Invalid email or password!')
    }

    const token = await createToken(user);

    return token;

};

exports.getUser = (id) => User.findById(id).populate('myPosts').lean();

exports.addPost = async (userId, postId) => {
    const user = await User.findById(userId);

    user.myPosts.push(postId);   

    return user.save();
} 
