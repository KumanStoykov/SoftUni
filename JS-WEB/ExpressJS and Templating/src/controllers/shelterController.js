const express = require('express');

const catService = require('../services/catServices');
const router = express.Router();

const renderSalter = (req, res) => {
    const cat = catService.getById(req.params.catId);

    res.render('catShelter', { cat });
};

const deleteCat = (req, res) => {
    const catId = req.params.catId;

    catService.catDelete(catId);
    res.redirect('/');
}

router.get('/cats/shelter/:catId', renderSalter);
router.get('/cats/delete/:catId', deleteCat);

module.exports = router;