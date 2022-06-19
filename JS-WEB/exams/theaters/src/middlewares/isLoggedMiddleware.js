const jwt = require('../utils/jwtUtils');
const { COOKIE_TOKEN_NAME } = require('../constants');

module.exports = async (req, res, next) => {

    try {
        const token = req.cookies[COOKIE_TOKEN_NAME];
        
        if (!token) {
            return next();
        }
        
        const decodedToken = await jwt.jwtVerify(token);
               
        req.user = decodedToken;
        res.locals.user = decodedToken;

        return next();

    } catch (error) {
        console.log('Middleware', error.message);
        res.clearCookie(COOKIE_TOKEN_NAME);
        res.redirect('/auth/login');
    }

};