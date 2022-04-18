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
    const image = req.files.upload;

    await image.mv(path.resolve(__dirname, '../content/images/' + image.name));
    const imagePath = '/images/' + image.name;
    console.log(name, description, imagePath, breed)

    catService.createCat(name, description, imagePath, breed);

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