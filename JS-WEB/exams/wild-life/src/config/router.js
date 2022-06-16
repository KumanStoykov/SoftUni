const router = require('express').Router();

const homeController = require('../controllers/homeController');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');

router.use(homeController);
router.use('/post', postController);
router.use('/user', userController);

router.use('*', (req, res) => {
   res.render('404', { title: 'Not found'}); 
});

module.exports = router;