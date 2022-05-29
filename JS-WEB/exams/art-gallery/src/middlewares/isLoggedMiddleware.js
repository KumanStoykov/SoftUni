const { TOKEN_COOKIE_NAME, SECRET } = require('../constants');
const jwt = require('jsonwebtoken');

exports.isLogged = (req, res, next) => {
    let token = req.cookies[TOKEN_COOKIE_NAME];
    
    if(!token) {
        return next();
    }

    jwt.verify(token, SECRET, function(err, decodedToken) {
        if(err) {
            return res.redirect('/login');
        }
        req.user = decodedToken;

        res.locals.user = decodedToken;

        return next();
    });
}

