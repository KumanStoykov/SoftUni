const router = require('express').Router();

const homeController = require('../controllers/homeController');
const housingController = require('../controllers/housingController');

router.use(homeController);
router.use('/offer', housingController);
router.use('*', (req, res) => {
    res.render('404');
})

module.exports = router;