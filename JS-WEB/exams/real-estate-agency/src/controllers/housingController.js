const router = require('express').Router();
const housingService = require('../service/housingService');

router.get('/create', (req, res) => {
    res.render('offers/create', { title: 'Create Offer'}); 
});

router.post('/create', async (req, res) => {
   
    try{
        const owner = req.user._id;
        const { name, type, year, city, image, description, availablePieces } = req.body;
        

        await housingService.crate(name, type, year, city, image, description, availablePieces, owner);

        res.redirect('/');

    } catch(err) {
        console.log(err);
    }
});

router.get('/details/:id', (req, res) => {
    res.render('offers/details', { title: 'Details Offer'}); 
});

router.get('/edit/:id', (req, res) => {
    res.render('offers/edit', { title: 'Edit Offer'}); 
});

router.get('/search', (req, res) => {
    res.render('offers/search', { title: 'Search'});
});


module.exports =  router;