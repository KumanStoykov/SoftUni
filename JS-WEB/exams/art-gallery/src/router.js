const router = require('express').Router();
const homeController = require('./controllers/homeController');
const galleryController = require('./controllers/galleryController');
const publicationsController = require('./controllers/publicationsController');
const authController = require('./controllers/authController');


router.use(homeController);
router.use('/gallery', galleryController);
router.use('/publication', publicationsController);
router.use('/auth', authController);
router.use('*', (req, res) => {
    res.status(404).render('404');
});



module.exports = router;