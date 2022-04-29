const router = require('express').Router();

const userController = require('./controllers/userController');
const catalogController = require('./controllers/catalogController');

router.use('/users', userController);
router.use('/data/catalog', catalogController);


module.exports = router;