const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwtSing = require('../utils/jwtSing');
const bcryptUtility = require('../utils/bcryptUtility');
const { SECRET } = require('../constants');

exports.register = async (username, password, address) => {

    const hashedPass = await bcryptUtility(password);
    return User.create({ username, password: hashedPass, address, myPublications: [] });
};

exports.login = async (username, password) => {

    let user = await User.findOne({ username }).populate('myPublications');
    console.log(user)
    
    if (!user) {
        throw new Error('Cannot find username or password!');
    } 

    let comparePassword = await bcrypt.compare(password, user?.password);
    
    if (!comparePassword){
        throw new Error('Username or password don\'t match!');
    }
    let token = await this.crateToken(user);      
    
    return token;
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


