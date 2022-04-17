const express = require('express');



const router = express.Router();

const renderAddCat = (req, res) => {
    res.render('addCat');
};

const renderAddBread = (req, res) => {
    res.render('addBreed');
};

router.get('/cats/add-cat', renderAddCat);
router.get('/cats/add-breed', renderAddBread);

module.exports = router;