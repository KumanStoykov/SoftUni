const publicationService = require('../services/publicationService');

exports.isAuth = (req, res, next) => {

    if(!req.user) {
        return res.redirect('/auth/login');
    }

    next();
};

exports.isOwner = async (req, res, next) => {
    let publication = await publicationService.getOne(req.params.id);
    let isCreator = req.user?._id == publication.author._id;

    if(!isCreator) {
        res.redirect('/');
        return;
    }
    next();
    
};