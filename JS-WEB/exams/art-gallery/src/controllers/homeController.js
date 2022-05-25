const router = require('express').Router();

const home = (req, res) => {
    res.render('home');
};

router.get('/', home);

module.exports = router;