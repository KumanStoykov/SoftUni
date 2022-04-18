const express = require('express');
const catService = require('../services/catServices');

const router = express.Router();

const home = (req, res) => {
    const cats = catService.getAll();
    res.render('index', {
        search: true,
        cats
    });

    console.log(cats);
}

router.get('/', home);

module.exports = router;