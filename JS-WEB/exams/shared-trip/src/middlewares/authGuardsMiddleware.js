const tripServices = require('../services/tripServices');

exports.isAuth = (req, res, next) => {
    if(!req.user) {
       return res.redirect('/user/login');
    }
    next();
};

exports.isGuest = (req, res, next) => {

    if(req.user) {
       return res.redirect('/');
    }
    next();
};

exports.isCreator = async (req, res, next) => {
    const trip = await tripServices.getOne(req.params.id);
    const isOwn = trip.creator._id == req.user._id;

    if(!isOwn) {
        return res.redirect('/');
    }
    next();    
}