const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwtSing = require('../utils/jwtSing');
const { SECRET } = require('../constants');

exports.register = async (name, username, password) => {

    const hashedPass = await bcrypt.hash(password, 9);

    return User.create({ name, username, password: hashedPass });
},

    exports.login = async (username, password) => {

        const user = await User.findOne({ username });

        if (!user) {
            throw new Error('Cannot find username or password!');
        }

        const comparePassword = await bcrypt.compare(password, user?.password);

        if (!comparePassword) {
            throw new Error('Username or password don\'t match!');
        }

        let token = await createToken(user);

        return token;
    };

function createToken(user) {
    const payload = {
        _id: user._id,
        username: user.username
    };
    return jwtSing(payload, SECRET);
}