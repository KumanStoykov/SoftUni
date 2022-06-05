const router = require('express').Router();
const housingService = require('../service/housingService');

router.get('/create', (req, res) => {
    res.render('offers/create', { title: 'Create Offer' });
});

router.post('/create', async (req, res) => {

    try {
        const owner = req.user._id;
        const { name, type, year, city, image, description, availablePieces } = req.body;

        const offer = {
            name,
            type,
            year,
            city,
            image,
            description,
            availablePieces,
            owner
        };


        await housingService.create(offer);

        res.redirect('/');

    } catch (err) {
        console.log(err);
    }
});

router.get('/details/:id', async (req, res) => {

    try {
        const user = req.user;

        const housingId = req.params.id;

        const [hosing, allRented] = await Promise.all([
            housingService.getOne(housingId),
            housingService.getAllRented(housingId)
        ]);

        if (user) {
            hosing.allRented = allRented.map(x => x.name).join(', ');
            hosing.isOwner = user._id == hosing.owner._id;
            hosing.hasRented = allRented.find(x => x._id == user._id);
            hosing.noHousing = hosing.availablePieces == 0 || allRented.find(x => x._id == user._id);
            console.log(hosing.noHousing)
        }

        res.render('offers/details', { title: 'Details Offer', ...hosing });

    } catch (err) {
        console.log(err);
    }
});

router.get('/rentHome/:id', async (req, res) => {

    try {
        const userId = req.user._id;
        const housingId = req.params.id;

        await housingService.rentedHome(userId, housingId);

        res.redirect(`/offer/details/${housingId}`);

    } catch (err) {
        console.log(err);
    }

});

router.get('/edit/:id', async (req, res) => {
    const currentHousing = await housingService.getOne(req.params.id);

    res.render('offers/edit', { title: 'Edit Offer', ...currentHousing });
});

router.post('/edit/:id', async (req, res) => {

    try {
        const hosingId = req.params.id;
        const owner = req.user._id;

        const { name, type, year, city, image, description, availablePieces } = req.body;

        const hosing = {
            name,
            type,
            year,
            city,
            image,
            description,
            availablePieces,
            owner
        }

        await housingService.update(hosingId, hosing);

        res.redirect(`/offer/details/${hosingId}`);

    } catch (err) {
        console.log(err);
    }

});

router.get('/delete/:id', async (req, res) => {
    try{
        await housingService.deleteHosing(req.params.id);
        res.redirect('/aprt-for-recent');

    } catch(err) {
        console.log(err);
    }
});

router.get('/search', (req, res) => {
    res.render('offers/search', { title: 'Search' });
});


module.exports = router;