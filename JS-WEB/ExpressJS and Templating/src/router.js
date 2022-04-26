const express = require('express');

const homeController = require('./controllers/homeController');
const createController = require('./controllers/createController');
const editCat = require('./controllers/editController');
const catShelter = require('./controllers/shelterController');
const authController = require('./controllers/authController');

const router = express.Router();

router.use(homeController);
router.use(createController);
router.use(catShelter);
router.use(editCat);
router.use(authController);
router.use('*', (req, res) => {
    res.status(404).render('404');
});

module.exports  = router;