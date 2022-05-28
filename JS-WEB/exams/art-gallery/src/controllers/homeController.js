const router = require('express').Router();

const publicationService = require('../services/publicationService');


const home = async (req, res) => {

    let publications = await publicationService.getAll();

    res.render('home', { publications });
};

router.get('/', home);

module.exports = router;