const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('offers/create', { title: 'Create Offer'}); 
});

router.get('/details/:id', (req, res) => {
    res.render('offers/details', { title: 'Details Offer'}); 
});

router.get('/edit/:id', (req, res) => {
    res.render('offers/edit', { title: 'Edit Offer'}); 
});

module.exports =  router;