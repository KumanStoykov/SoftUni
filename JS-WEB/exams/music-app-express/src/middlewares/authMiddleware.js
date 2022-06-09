const albumServices = require('../services/albumServices');

exports.isAuth = () => {
    return (req, res, next) => {

        if (req.user) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    };
};

exports.isGuest = () => {
    return (req, res, next) => {
        if (req.user) {
            res.redirect('/');
        } else {
            next();
        }
    };
};

exports.isOwner = () => {
    return async (req, res, next) => {
        const album = await albumServices.getOne(req.params.id);
        const isCreator = req.user?._id == album.creator._id;

        if(!isCreator){
            return res.redirect('/');
        }
        next();
    };
};