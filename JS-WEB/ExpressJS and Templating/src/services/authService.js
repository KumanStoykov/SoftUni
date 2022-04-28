const User = require('../models/User');
const jwtUtils = require('../utility/jwtUtils');
const { SECRET } = require('../constants');


const register = (username, password) => {
    return User.create({ username, password });
};

const login = async (username, password) => {

    try {
        let user = await User.findByUsername(username);
        let isValid = await user.validatePassword(password);

        if (isValid) {
            return user;
        } else {
            throw new Error('Cannot find username or password!');
        }

    } catch (err) {
        console.log(err.message);
    }
};

function createToken(user) {
    let payload = {
        _id: user._id,
        username: user.username
    };
    return jwtUtils(payload, SECRET);
}

const authServices = {
    register,
    login,
    createToken
};

module.exports = authServices;