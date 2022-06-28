const cryptoService = require('../services/cryptoService');

const { TOKEN_NAME } = require('../config');

exports.isAuth = (req, res, next) => {
    const user = req.user;
    if (!user) {
        res.clearCookie(TOKEN_NAME);
        return res.redirect('/auth/login');
    }

    next();
};

exports.isUser = (req, res, next) => {

    if (req.user) {
        return res.redirect('/');;
    }
    next();
};

exports.isOwner = async (req, res, next) => {
    try {
        const userId = req.user._id;

        const crypto = await cryptoService.getOne(req.params.id);

        const isOwn = userId == crypto.owner._id;

        if (isOwn) {
            next();
        } else {
            res.redirect('/');
        }

    } catch (error) {
        res.redirect('/');
    }

}