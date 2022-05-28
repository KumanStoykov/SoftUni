const jwt = require('jsonwebtoken');

function jwtSing(payload, secret) {
    return new Promise((resole, reject) => {
        jwt.sign(payload, secret, function (err, token) {
            if(err) {
                reject(err);
            } else {
                resole(token);
            }
        });
    });
}

module.exports = jwtSing;