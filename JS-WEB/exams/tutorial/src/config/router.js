const router = require('express').Router();

const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const courseController = require('../controllers/courseController');

router.use(homeController);
router.use('/auth', authController);
router.use('/course', courseController);


router.use('*', (req, res) => {
   res.redirect('/');  
});


module.exports = router;