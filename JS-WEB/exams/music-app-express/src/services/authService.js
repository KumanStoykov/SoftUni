const User = require('../models/User');
const bcrypt = require('bcrypt');

const createToken = require('../utils/createToken');


exports.register = async (email, password) => {
    const hash = await bcrypt.hash(password, 9);

   return User.create({ email, password: hash}); 
}

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if(!user) {
        throw new Error('Cannot found email or password!');
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if(!comparePassword) {
        throw new Error('Email or password don\'t match!');
    }

    let token = createToken(user);
    return token;
}

