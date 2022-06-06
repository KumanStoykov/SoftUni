const router = require('express').Router();


const housingService = require('../service/housingService');

router.get('/', async (req, res) => {

    try{
        const lastThree = await housingService.getLastThree();

        res.render('home', { title: 'Home', lastThree: lastThree.reverse()});
    } catch(err) {
        console.log(err);
    }

});

router.get('/aprt-for-recent', async (req, res) => {
    try{
        const allHousing = await housingService.getAll();

        res.render('aprt-for-recent', { title: 'Apartments for recents', allHousing});

    } catch(err) {
        console.log(err);
    }

});

module.exports = router;