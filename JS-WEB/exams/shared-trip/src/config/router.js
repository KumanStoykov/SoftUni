const router = require('express').Router();

const homeController = require('../controllers/homeController');
const tripController = require('../controllers/tripController');
const userController = require('../controllers/userController');


router.use(homeController);
router.use('/trip', tripController);
router.use('/user', userController);

router.use('*', (req, res) => {
    res.render('404', { title: 'Not found'});
})

module.exports = router;