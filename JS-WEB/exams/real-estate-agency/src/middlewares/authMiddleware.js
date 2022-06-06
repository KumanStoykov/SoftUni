const housingService = require('../service/housingService');

exports.isAuth = () => {
    return (req, res, next) => {
        if(req.user){
            next();
        } else {
            res.redirect('/auth/login');
        }
    };
};

exports.isGuest = () => {
    return (req, res, next) => {
        if(!req.user) {
            next();
        } else {
            res.redirect('/')
        }
    };
};

exports.isOwner = () => {
    return async (req, res, next) => {
        const housing = await housingService.getOne(req.params.id);
        const isCreator = req.user && housing.owner._id == req.user._id;

        if(!isCreator) {
            res.redirect('/');
            return;
        }
        next();
    };
};

