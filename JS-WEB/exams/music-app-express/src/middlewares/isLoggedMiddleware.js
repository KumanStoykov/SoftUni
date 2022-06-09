const jwtVerify = require('../utils/jwtVerify');
const { TOKEN_NAME, SECRET } = require('../constants');

module.exports = async (req, res, next) => {
    const token = req.cookies[TOKEN_NAME];
    try{    
        const decodedToken = await jwtVerify(token, SECRET);       
         
    
        req.user = decodedToken;
        res.locals.user = decodedToken;
    
        return next();
    } catch(err) {
        res.clearCookie(TOKEN_NAME);
       return next();
    }
};