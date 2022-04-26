const router = require('express').Router();

const catService = require('../services/catServices');
const isOwner = require('../middlewares/catAuthMiddleware');

const renderEdit = async (req, res) => {
    const cat = await catService.getById(req.params.catId);


    res.render('editCat', { cat });
};

const editCat = (req, res) => {
    const catId = req.params.catId;

    const { name, description, imageUrl, breed } = req.body;    

    catService.editCat(catId, { name, description, imageUrl, breed });

    res.redirect('/');
};

router.get('/cats/edit/:catId', isOwner, renderEdit);
router.post('/cats/edit/:catId', isOwner, editCat);

module.exports = router;