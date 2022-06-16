const { jwtVerify } = require('../utility/jwtUtility');
const { TOKEN_NAME, SECRET } = require('../constants');


module.exports = async (req, res, next) => {

    try {
        const token = req.cookies[TOKEN_NAME];

        if(!token) {
            return next();
        }

        const decodedToken = await jwtVerify(token, SECRET);

        if(!decodedToken) {
            throw new Error('Invalid token!');
        }

        req.user = decodedToken;
        res.locals.user = decodedToken

       return next();

    } catch (error) {
        res.redirect('user/login');
    }
}
