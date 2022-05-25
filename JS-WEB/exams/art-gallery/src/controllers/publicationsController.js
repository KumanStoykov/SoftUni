const router = require('express').Router();
const publicationService = require('../services/publicationService');


const renderCreate = (req, res) => {
    res.render('create');
};

const createPublication = async (req, res) => {
    let { title, paintingTechnique, picture, certificate } = req.body;
    
    try {
        publicationService.create(title, paintingTechnique, picture, certificate);
        res.redirect('/');

    } catch(err) {
        console.log(err);
    }
};

const renderDetails = (req, res) => {
    res.render('details');
};

router.get('/create', renderCreate);
router.post('/create', createPublication);
router.get('/details', renderDetails);

module.exports = router;
