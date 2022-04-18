const { request } = require('express');
const express = require('express');
const path = require('path');

const catService = require('../services/catServices');

const router = express.Router();

const renderEdit = (req, res) => {
    const cat = catService.getById(req.params.catId);
    const allBreeds = catService.getAllBreeds();

    res.render('editCat', {
        cat,
        allBreeds
    });
};

const editCat = async (req, res) => {
    const catId = req.params.catId;

    const { name, description, breed } = req.body;

    if(req.files == undefined) {
        return;
    }
    const currentImage = req.files.upload;
    
    await currentImage.mv(path.resolve(__dirname, '../content/images/' + currentImage.name));
    const image = '/images/' + currentImage.name;
    

    catService.updateOne(catId, { name, description, image, breed });

    res.redirect('/');
}

router.get('/cats/:catId', renderEdit);
router.post('/cats/:catId', editCat);

module.exports = router;