const router = require('express').Router();
const { body, validationResult } = require('express-validator');


const housingService = require('../service/housingService');
const { isAuth, isOwner } = require('../middlewares/authMiddleware');


router.get('/create', isAuth(), (req, res) => {
    res.render('offers/create', { title: 'Create Offer' });
});

router.post('/create',
    isAuth(),
    body('name').trim().isLength({ min: 6 }).withMessage('The Name should be at least 6 characters!'),
    body('year').trim().isFloat({ min: 1850, max: 2021 }).withMessage('The Year should be between 1850 and 2021!'),
    body('city').trim().isLength({ min: 4 }).withMessage('The City should be at least 4 characters long!'),
    body('image').trim().matches(/^http:\/\/|https:\/\//).withMessage('The Home Image should starts with http:// or https://.'),
    body('description').trim().isLength({ max: 60 }).withMessage('The Property Description should be a maximum of 60 characters long!'),
    body('availablePieces').trim().isFloat({ min: 0, max: 10 }).withMessage('The Available Pieces should be positive number (from 0 to 10)!'),

    async (req, res) => {

        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join(' \n'));
            }

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
            
            res.render('offers/create', { title: 'Create Offer', errors: err.message.split(' \n'), data: req.body });

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
        }

        res.render('offers/details', { title: 'Details Offer', ...hosing });

    } catch (err) {
        console.log(err);
    }
});

router.get('/rentHome/:id', isAuth(), async (req, res) => {

    try {
        const userId = req.user._id;
        const housingId = req.params.id;

        await housingService.rentedHome(userId, housingId);

        res.redirect(`/offer/details/${housingId}`);

    } catch (err) {
        console.log(err);
    }

});

router.get('/edit/:id', isAuth(), isOwner(), async (req, res) => {
    const currentHousing = await housingService.getOne(req.params.id);

    res.render('offers/edit', { title: 'Edit Offer', data: currentHousing });
});

router.post('/edit/:id', 
    isAuth(), 
    isOwner(), 
    body('name').trim().isLength({ min: 6 }).withMessage('The Name should be at least 6 characters!'),
    body('year').trim().isFloat({ min: 1850, max: 2021 }).withMessage('The Year should be between 1850 and 2021!'),
    body('city').trim().isLength({ min: 4 }).withMessage('The City should be at least 4 characters long!'),
    body('image').trim().matches(/^http:\/\/|https:\/\//).withMessage('The Home Image should starts with http:// or https://.'),
    body('description').trim().isLength({ max: 60 }).withMessage('The Property Description should be a maximum of 60 characters long!'),
    body('availablePieces').trim().isFloat({ min: 0, max: 10 }).withMessage('The Available Pieces should be positive number (from 0 to 10)!'),
    async (req, res) => {

    try {
        const errors = validationResult(req).array().map(x => x.msg);

        if(errors.length > 0) {
            throw new Error(errors.join(' \n'))
        }

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
        res.render('offers/edit', { title: 'Edit Offer', errors: err.message.split(' \n'), data: req.body });
        
    }

});

router.get('/delete/:id', isAuth(), isOwner(), async (req, res) => {
    try {
        await housingService.deleteHosing(req.params.id);
        res.redirect('/aprt-for-recent');

    } catch (err) {
        console.log(err);
    }
});

router.get('/search', async (req, res) => {
    
    try{
        const input = req.query.search;
        if(input) {
            const result = await housingService.search(input.toLowerCase());
    
            res.render('offers/search', { title: 'Search', start: true, result });

        } else {
    
            res.render('offers/search', { title: 'Search', start: false });
        }

    } catch(err) {
        console.log(err);
    }
});


module.exports = router;