const jwt = require('jsonwebtoken');

module.exports = (token, secret) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err) {
                reject(err);
            } else {
                resolve(decodedToken);
            }
        });
    });
};