const express = require('express');

const catService = require('../services/catServices');
const router = express.Router();

const renderShelter = async (req, res) => {
    const cat = await catService.getById(req.params.catId);

    res.render('catShelter', { cat });
};

const deleteCat = async (req, res) => {
    const catId = req.params.catId;

   await catService.catDelete(catId);
    res.redirect('/');
}

router.get('/cats/shelter/:catId', renderShelter);
router.get('/cats/delete/:catId', deleteCat);

module.exports = router;