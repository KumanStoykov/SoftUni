const express = require('express');

const catService = require('../services/catServices');



const router = express.Router();

const renderAddCat = (req, res) => {
    const allBreeds = catService.getAllBreeds();
    console.log(allBreeds)
    res.render('addCat', { allBreeds });
};

const createCat = (req, res) => {
    //  const { name, description, upload, breed } = req.body;
    console.log(req.body);

    // catService.createCat(name, description, upload, breed);
    
    //  res.redirect('/');
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