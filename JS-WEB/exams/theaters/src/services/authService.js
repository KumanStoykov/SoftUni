const User = require('../models/User');

const bcrypt = require('bcrypt');
const { SALT_ROUND } = require('../constants');

exports.register = async (userData) => {

    const hash = await bcrypt.hash(userData.password, SALT_ROUND);

    const user = {
        username: userData.username.trim(),
        password: hash,
        likedPlays: []
    }

    return User.create(user);
};

exports.login = async (userData) => {
    
    const user = await User.findOne({ username: userData.username });
    if (!user) {
        throw new Error('Username or password don\'t match');
    }

    const comparePass = await bcrypt.compare(userData.password, user.password);

    if (!comparePass) {
        throw new Error('Username or password don\'t match');
    }

    return user;
};


