const router = require('express').Router();

const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const albumController = require('../controllers/albumsController')
const catalogController = require('../controllers/catalogController')
const searchController = require('../controllers/searchController')

router.use(homeController);
router.use('/auth', authController);
router.use('/album', albumController);
router.use('/albums', catalogController);
router.use('/search', searchController);

router.use('*', (req, res) => {
    res.render('404', { title: 'Not Found' });
});

module.exports = router;