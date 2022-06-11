const User = require('../models/User');
const bcrypt = require('bcrypt');


const { SALT_ROUND } = require('../constants');
const { createToken } = require('../utility/jwtUtility');

exports.register = async (email, password, gender) => {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

    const userReg = {
        email,
        password: hashedPassword,
        gender,
        trips: []
    };

    return User.create(userReg);
}

exports.login = async (email, password) => {

    const user = await User.findOne({ email }).populate('trips');

    if (!user) {
        throw new Error('Cannot find email or password!');
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
        throw new Error("Email or password don\'t match!")
    }


    const token = await createToken(user);

    return token;
}

exports.getUser = (id) => User.findById(id).populate('trips').lean();