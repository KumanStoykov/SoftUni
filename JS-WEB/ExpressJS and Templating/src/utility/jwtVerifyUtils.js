const jwt = require('jsonwebtoken');


function jwtVerify(token, secret) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, function(err, decodeToken) {

            if(err) {
                return reject(err);
            } else {
                resolve(decodeToken);
            }
        });
    });
}

module.exports = jwtVerify;