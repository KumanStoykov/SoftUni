const express = require('express');
const path = require('path');

const catService = require('../services/catServices');



const router = express.Router();

const renderAddCat = (req, res) => {
    const allBreeds = catService.getAllBreeds();

    res.render('addCat', { allBreeds });
};

const createCat = async (req, res) => {
    const { name, description, breed } = req.body;
    const currentImage = req.files.upload;

    await currentImage.mv(path.resolve(__dirname, '../content/images/' + currentImage.name));
    const image = '/images/' + currentImage.name;


    catService.createCat(name, description, image, breed);

    res.redirect('/');
}

const renderAddBread = (req, res) => {
    res.render('addBreed');
};

const createBreed = (req, res) => {

    catService.createBreed(req.body.breed);

    res.redirect('/cats/add-breed');
}


router.get('/cats/add-cat', renderAddCat);
router.post('/cats/add-cat', createCat);
router.get('/cats/add-breed', renderAddBread);
router.post('/cats/add-breed', createBreed);

module.exports = router;