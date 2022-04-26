const router = require('express').Router();
const catService = require('../services/catServices');
const isOwner = require('../middlewares/catAuthMiddleware');

const renderShelter = async (req, res) => {
    const cat = await catService.getById(req.params.catId);

    res.render('catShelter', { cat });
};

const deleteCat = (req, res) => {
    const catId = req.params.catId;

    catService.catDelete(catId);
    res.redirect('/');
}

router.get('/cats/shelter/:catId', isOwner, renderShelter);
router.get('/cats/delete/:catId', isOwner, deleteCat);

module.exports = router;