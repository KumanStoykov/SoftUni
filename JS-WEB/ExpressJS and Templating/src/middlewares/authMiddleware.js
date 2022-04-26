const { TOKEN_COOKIE_NAME, SECRET } = require('../constants');
const jwtVerify = require('../utility/jwtVerifyUtils');

async function auth(req, res, next) {
    let token = req.cookies[TOKEN_COOKIE_NAME];

    if (!token) {
        return next();
    }

    const decodeToken = await jwtVerify(token, SECRET);
    
    req.user = decodeToken;
    res.locals.user = decodeToken;
    
    next();
}

function isAuth(req, res, next) {
    

    if (!req.user) {
        return res.redirect('/login');
    }
    next();
}


const authMiddleware = {
    auth,
    isAuth
}
module.exports = authMiddleware;