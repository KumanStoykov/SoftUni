const jwt = require('jsonwebtoken');

const { SECRET } = require('../config');


const jwtSing = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, { expiresIn: '2d' }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
};

exports.jwtVerify = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET, (err, decodedToken) => {
            if (err) {
                reject(err);
            } else {
                resolve(decodedToken);
            }
        });
    });
};

exports.createToken = (user) => {
    const payload = {
        _id: user._id,
        name: user.name,
        username: user.username
    };

    return jwtSing(payload);
}