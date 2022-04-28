const router = require('express').Router();

const catService = require('../services/catServices');
const breedService = require('../services/breedService');



const renderAddCat = async (req, res) => {
    const allBreeds = await breedService.getAllBreeds();

    res.render('addCat', { allBreeds });
};

const createCat = async (req, res) => {
    const allBreeds = await breedService.getAllBreeds();
    const { name, description, imageUrl, breed } = req.body;

    try {

        await catService.createCat(name, description, imageUrl, breed, req.user._id);

        res.redirect('/');
    } catch (err) {
        const errors = Object.keys(err.errors).map(x => err.errors[x].message);
        res.render('addCat', { allBreeds, errors });
    }

};

const renderAddBread = (req, res) => {
    res.render('addBreed');
};

const createBreed = async (req, res) => {
    const { breed } = req.body;

    try{

        await breedService.createBreed(breed);
    
        res.redirect('/cats/add-breed');
    } catch(err) {
        res.render('addBreed', { errors: [err.message]})
    }

};


router.get('/cats/add-cat', renderAddCat);
router.post('/cats/add-cat', createCat);
router.get('/cats/add-breed', renderAddBread);
router.post('/cats/add-breed', createBreed);

module.exports = router;