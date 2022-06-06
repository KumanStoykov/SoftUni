const router = require('express').Router();

const homeController = require('../controllers/homeController');
const housingController = require('../controllers/housingController');
const authController = require('../controllers/authController');

router.use(homeController);
router.use('/offer', housingController);
router.use('/auth', authController);
router.use('*', (req, res) => {
    res.status(404).render('404', { title: 'Not Found' });
})

module.exports = router;