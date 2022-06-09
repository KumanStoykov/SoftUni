const { SECRET } = require('../constants');
const jwt = require('jsonwebtoken');



module.exports = (user) => {
    const payload = {
        _id: user._id,
        email: user.email
    };   

    return jwt.sign(payload, SECRET, { expiresIn: '1h'});
}