const jwtUtils = require('../utils/jwtUtils');
const { TOKEN_NAME } = require('../config');


module.exports = async (req, res, next) => {

    try {
        const token = req.cookies[TOKEN_NAME];
        
        if (!token) {
            return next();
        }
        
        const decodedToken = await jwtUtils.jwtVerify(token);
               
        req.user = decodedToken;
        res.locals.user = decodedToken;

        return next();

    } catch (error) {        
        res.clearCookie(COOKIE_TOKEN_NAME);
        res.redirect('/auth/login');
    }

};