const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = ({ email, password }) => User.create({ email, password });

exports.login = async ({ email, password }) => {
    let user = await User.findOne({ email, password });

    if (user) {
        let accessToken = jwt.sign({ _id: user._id, email: user.email }, 'MYSECRET', { expiresIn: '1m' });
        let refreshToken = jwt.sign({_id: user._id}, 'MYSECRET2', { expiresIn: '7d'});

        user.refreshToken = refreshToken;

        await user.save();

        return { user, accessToken, refreshToken };
    } else {
        throw new Error('No such user');
    }
}

exports.refresh = async (refreshToken) => {
    let { _id } = jwt.verify(refreshToken, 'MYSECRET2');

    let user = await User.find({ _id, refreshToken });

    if(user) {
        let accessToken = jwt.sign({ _id: user._id, email: user.email }, 'MYSECRET', { expiresIn: '1m' });
        let refreshToken = jwt.sign({_id: user._id}, 'MYSECRET2', { expiresIn: '7d'});

        return { accessToken, refreshToken };
    } else {
        return null;
    }

}