const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwtSing = require('../utils/jwtSing');
const bcryptUtility = require('../utils/bcryptUtility');
const { SECRET } = require('../constants');

exports.register = async (username, password, address) => {

    const hashedPass = await bcryptUtility(password);
    return User.create({ username, password: hashedPass, address });
};

exports.login = async (username, password) => {
    let user = await User.findOne({ username });
    let comparePassword = await bcrypt.compare(password, user?.password);
    
    try {
        if (comparePassword) {
            return user;
        } else {
            throw new Error({ message: 'Cannot find username or password' });
        }

    } catch (err) {
        console.log(err);
    }
};

exports.crateToken = (user) => {
    let payload = {
        _id: user._id,
        username: user.username
    };
    return jwtSing(payload, SECRET);
};


