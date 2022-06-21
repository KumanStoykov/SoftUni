const courseService = require('../services/courseService');

const { COOKIE_TOKEN_NAME } = require('../config');

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

        const course = await courseService.getOne(req.params.id);

        const isOwn = userId == course.owner._id;

        if (isOwn) {
            next();
        } else {
            res.redirect('/');
        }

    } catch (error) {
        res.render('404', { title: 'Error' })
    }

}