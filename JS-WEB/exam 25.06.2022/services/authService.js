const bcrypt = require('bcrypt');

const User = require('../models/User');
const { SALT_ROUND } = require('../config');


exports.register = async (username, email, password) => {
    const user = await User.findOne({ email });

    if (user) {
        throw new Error('Username already exists!');
    }

    const hash = await bcrypt.hash(password, SALT_ROUND);

    return User.create({ username, email, password: hash });
}

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Email or password don\'t match');
    }
    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
        throw new Error('Email or password don\'t match');
    }

    return user;
}

exports.getUser = (id) => User.findById(id).populate('trips');