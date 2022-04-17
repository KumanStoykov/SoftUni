const express = require('express');

const catService = require('../services/catServices');


const router = express.Router();

const renderAddCat = (req, res) => {
    res.render('addCat');
};

const createCat = (req, res) => {
    //  const { name, description, upload, breed } = req.body;
    console.log(req.body);

    // catService.create(name, description, upload, breed);
    
    //  res.redirect('/');
}

const renderAddBread = (req, res) => {
    res.render('addBreed');
};


router.get('/cats/add-cat', renderAddCat);
router.post('/cats/add-cat', createCat);
router.get('/cats/add-breed', renderAddBread);

module.exports = router;