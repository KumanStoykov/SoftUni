const router = require('express').Router();

const renderGallery = (req, res) => {
    res.render('gallery');  
};

const renderCreate = (req, res) => {
    res.render('create');
};

router.get('/view', renderGallery);
router.get('/create', renderCreate);

module.exports = router;