const catServices = require('../services/catServices');

const isOwner = async (req, res, next) => {
    const cat = await catServices.getById(req.params.catId);

    if(req.user && cat.owner == req.user._id) {
        req.cat = cat;

        next();
    } else {
        next('You are not authorized to edit this cat');
    }
};

module.exports = isOwner;