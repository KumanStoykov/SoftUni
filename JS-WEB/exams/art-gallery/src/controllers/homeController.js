const router = require('express').Router();

const publicationService = require('../services/publicationService');


const home = async (req, res) => {

    let publications = await publicationService.getAll();

    res.render('home', { publications, title: 'Home page' });
};

router.get('/', home);

module.exports = router;