const express = require('express');
const catService = require('../services/catServices');

const router = express.Router();

const home = async (req, res) => {
    const cats = await catService.getAllCats();

    cats.map(cat => {
        cat.isOwn = cat.owner == req.user?._id
    });

    res.render('index', {
        searchView: true,
        cats
    });
}

const search = async (req, res) => {

    const searchInput = req.query.search;

    const cats = await catService.search(searchInput);

    res.render('index', {
        searchView: true,
        cats
    });
};

router.get('/', home);
router.get('/search', search);

module.exports = router;