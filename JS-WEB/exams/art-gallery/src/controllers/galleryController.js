const router = require('express').Router();

const publicationService = require('../services/publicationService');


const renderGallery = async (req, res) => {
    let publications = await publicationService.getAll();
    res.render('gallery', { publications, title: 'Gallery' });  
};


router.get('/view', renderGallery);

module.exports = router; 