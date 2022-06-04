const jwt = require('jsonwebtoken');
const { TOKEN_COOKIE_NAME, SECRET } = require('../constants');

exports.isLogged = (req, res, next) => {
    let token = req.cookies[TOKEN_COOKIE_NAME];

    if(!token) {
       return next();
    }

    jwt.verify(token, SECRET, (err, decodedToken) => { 
        if(err) {
            return res.redirect('auth/login');
        }

        req.user = decodedToken;

        res.locals.user = decodedToken;

        return next();
    });
};