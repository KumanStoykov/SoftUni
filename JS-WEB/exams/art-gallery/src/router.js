const router = require('express').Router();
const homeController = require('./controllers/homeController');
const galleryController = require('./controllers/galleryController');


router.use(homeController);
router.use('/gallery', galleryController);
router.use('*', (req, res) => {
    res.status(404).render('404');
});



module.exports = router;