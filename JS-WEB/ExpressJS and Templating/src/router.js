const express = require('express');

const homeController = require('./controllers/homeController');
const createController = require('./controllers/createController');
const editCat = require('./controllers/editController');
const catShelter = require('./controllers/shelterController');

const router = express.Router();

router.use(homeController);
router.use(createController);
router.use(catShelter);
router.use(editCat);

module.exports  = router;