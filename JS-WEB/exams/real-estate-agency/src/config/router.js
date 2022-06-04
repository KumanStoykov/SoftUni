const router = require('express').Router();

const homeController = require('../controllers/homeController');

router.use(homeController);
router.use('*', (req, res) => {
    res.render('404');
})

module.exports = router;