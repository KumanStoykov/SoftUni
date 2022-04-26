const router = require('express').Router();

const catService = require('../services/catServices');
const breedService = require('../services/breedService');
const authMiddleware = require('../middlewares/authMiddleware');


const renderAddCat = async (req, res) => {
    const allBreeds = await breedService.getAllBreeds();
    
    res.render('addCat', { allBreeds });
};

const createCat = async (req, res) => {
    const { name, description, imageUrl, breed } = req.body;

    try{

        await catService.createCat(name, description, imageUrl, breed);
    
        res.redirect('/');
    }catch(err) {
        res.status(400).send(err.message);
    }

};

const renderAddBread = (req, res) => {
    res.render('addBreed');
};

const createBreed = async (req, res) => {
    const { breed } = req.body;

    await breedService.createBreed(breed);

    res.redirect('/cats/add-breed');
};


router.get('/cats/add-cat', renderAddCat);
router.post('/cats/add-cat', createCat);
router.get('/cats/add-breed', renderAddBread);
router.post('/cats/add-breed', createBreed);

module.exports = router;