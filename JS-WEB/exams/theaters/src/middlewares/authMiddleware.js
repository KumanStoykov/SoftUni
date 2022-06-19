const theaterService = require('../services/theaterService');

const { COOKIE_TOKEN_NAME } = require('../constants');

exports.isAuth = (req, res, next) => {
    const user = req.user;
    if (!user) {
        res.clearCookie(COOKIE_TOKEN_NAME);
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

        const theater = await theaterService.getOne(req.params.id);

        const isOwn = userId == theater.owner._id;

        if (isOwn) {
            next();
        } else {
            res.redirect('/');
        }

    } catch (error) {
        res.render('404', { title: 'Error' })
    }

}