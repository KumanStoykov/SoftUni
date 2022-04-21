const express = require('express');

const catService = require('../services/catServices');


const router = express.Router();

const renderEdit = async (req, res) => {
    const cat = await catService.getById(req.params.catId);
    

    res.render('editCat', { cat });
};

const editCat = async (req, res) => {
    const catId = req.params.catId;

    const { name, description, image, breed } = req.body;
   
    catService.editCat(catId, { name, description, image, breed });

    res.redirect('/');
}

router.get('/cats/edit/:catId', renderEdit);
router.post('/cats/edit/:catId', editCat);

module.exports = router;