const express = require('express');
const catService = require('../services/catServices');

const router = express.Router();

const home = (req, res) => {
    const cats = catService.getAllCats();
    res.render('index', {
        searchView: true,
        cats
    });
}

const search = (req, res) => {

    const searchInput =  req.query.search;

    const cats = catService.search(searchInput);
    
    res.render('index', {
        searchView: true,
        cats
    });
};

router.get('/', home);
router.get('/search', search);

module.exports = router;