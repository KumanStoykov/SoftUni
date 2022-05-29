const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwtSing = require('../utils/jwtSing');
const bcryptUtility = require('../utils/bcryptUtility');
const { SECRET, TOKEN_COOKIE_NAME } = require('../constants');

exports.register = async (username, password, address) => {

    const hashedPass = await bcryptUtility(password);
    return User.create({ username, password: hashedPass, address, myPublications: [] });
};

exports.login = async (username, password) => {

    let user = await User.findOne({ username }).populate('myPublications');
    let comparePassword = await bcrypt.compare(password, user?.password);


    if (comparePassword) {

        let token = await this.crateToken(user);
            

        return token;
    } else {
        throw new Error({ message: 'Cannot find username or password' });
    }
};

exports.getUser = async (id) => {
    return User.findById(id).populate('myShared').populate('myPublications').lean();
}

exports.crateToken = (user) => {
    let payload = {
        _id: user._id,
        username: user.username
    };
    return jwtSing(payload, SECRET);
};


