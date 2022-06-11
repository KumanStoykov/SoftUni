const jwt = require('jsonwebtoken');


const { SECRET } = require('../constants');

const jwtSing = (payload, secret) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, { expiresIn: '5h'}, (err, token) => {
            if (err) {
                reject(err);
            } else {                
                resolve(token);
            }
        });
    });
};

exports.jwtVerify = (token, secret) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                reject(err);
            } else {
                resolve(decodedToken);
            }
        });
    });
}

exports.createToken = (user) => {
    const payload = {
        _id: user._id,
        email: user.email,
        gender: user.gender
    }

    return jwtSing(payload, SECRET);
}