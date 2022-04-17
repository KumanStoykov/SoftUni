const express = require('express');

const router = express.Router();

const home = (req, res) => {
    res.render('index', {search: true})
}

router.get('/', home);

module.exports = router;