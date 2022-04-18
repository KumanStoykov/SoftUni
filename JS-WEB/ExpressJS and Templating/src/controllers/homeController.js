const express = require('express');
const catService = require('../services/catServices');

const router = express.Router();

const home = (req, res) => {
    const cats = catService.getAllCats();
    res.render('index', {
        search: true,
        cats
    });
}

router.get('/', home);

module.exports = router;