const { jwtVerify } = require('../utility/jwtUtility');
const { COOKIE_TOKEN_NAME, SECRET } = require('../constants');

module.exports = async (req, res, next) => {

    try{

        const token = req.cookies[COOKIE_TOKEN_NAME];
    
        if (!token) {
            return next();
        }
    
        const verifyToken = await jwtVerify(token, SECRET);
    
        if (!verifyToken) {
            throw new Error('Error');
        }
    
        req.user = verifyToken;
        res.locals.user = verifyToken;
    
    
        return next();

    } catch(error) {

        res.redirect('user/login');
    }
}