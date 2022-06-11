const router = require('express').Router();
const validator = require('validator').default;


const tripServices = require('../services/tripServices');
const { isAuth, isCreator } = require('../middlewares/authGuardsMiddleware');


router.get('/shared', async (req, res) => {
    try {
        const trips = await tripServices.getAll();

        res.render('trip/shared', { title: 'Trip Shared', trips })

    } catch (error) {
        res.redirect('404', { title: 'Error' });
    }
});

router.get('/offer', isAuth, (req, res) => {
    try {
        res.render('trip/create', { title: 'Trip Offer' })

    } catch (error) {
        res.redirect('404', { title: 'Error' });
    }
});

router.post('/offer', isAuth, async (req, res) => {
    try {
        const trip = {
            startPoint: req.body.startPoint.trim(),
            endPoint: req.body.endPoint.trim(),
            date: req.body.date.trim(),
            time: req.body.time.trim(),
            image: req.body.image.trim(),
            carBrand: req.body.carBrand.trim(),
            seats: req.body.seats.trim(),
            price: req.body.price.trim(),
            description: req.body.description.trim(),
            creator: req.user._id,
            buddies: []
        };

        const errors = [];

        if (!validator.isLength(trip.startPoint, { min: 4 }) && !validator.isLength(trip.endPoint, { min: 4 })) {
            errors.push('The Starting Point and End Point should be at least 4 characters long!');
        }

        if (!validator.isInt(trip.seats, { min: 0, max: 4 })) {
            errors.push('The Seats should be positive number (from 0 to 4 inclusive).');
        }
        if (!validator.isLength(trip.description, { min: 10 })) {
            errors.push('The Description should be minimum 10 characters long.');
        }
        if (!validator.isURL(trip.image)) {
            errors.push('The Car Image should be starts with http:// or https://.');
        }
        if (!validator.isLength(trip.carBrand, { min: 4 })) {
            errors.push('The Car Brand should be minimum 4 characters long.');
        }
        if (!validator.isInt(trip.price, { min: 1, max: 50 })) {
            errors.push('The Price should be positive number (from 1 to 50 inclusive).');
        }

        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }

        await tripServices.create(trip);

        res.redirect('/trip/shared');

    } catch (error) {
      res.render('trip/create', { title: 'Trip offer', errors: error.message.split(', '), data: req.body });
        
    }
});

router.get('/:id/details', async (req, res) => {
    try {
        const user = req.user;
        const trip = await tripServices.getOne(req.params.id);

        if (user) {
            trip.isCreator = trip.creator._id == req.user._id;

            trip.hasJoin = trip.buddies.some(x => x._id == req.user._id);

            trip.noPlace = trip.seats == 0;
        }

        if (trip.buddies.length > 0) {

            trip.buddies = (trip.buddies.map(x => x.email)).join(', ');

        }

        res.render('trip/details', { title: 'Trip details', ...trip });

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});

router.get('/:id/join', isAuth, async (req, res) => {
    try {
        const tripId = req.params.id;

        const userId = req.user._id;

        await tripServices.join(tripId, userId);

        res.redirect(`/trip/${tripId}/details`);

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});

router.get('/:id/edit', isAuth, isCreator, async (req, res) => {
    try {
        const trip = await tripServices.getOne(req.params.id);

        res.render('trip/edit', { title: 'Trip details', data: trip })

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});
router.post('/:id/edit', isAuth, isCreator, async (req, res) => {
    try {
        const tripId = req.params.id;

        const trip = {
            startPoint: req.body.startPoint.trim(),
            endPoint: req.body.endPoint.trim(),
            date: req.body.date.trim(),
            time: req.body.time.trim(),
            image: req.body.image.trim(),
            carBrand: req.body.carBrand.trim(),
            seats: req.body.seats.trim(),
            price: req.body.price.trim(),
            description: req.body.description.trim(),
        };

        const errors = [];

        if (!validator.isLength(trip.startPoint, { min: 4 }) && !validator.isLength(trip.endPoint, { min: 4 })) {
            errors.push('The Starting Point and End Point should be at least 4 characters long!');
        }

        if (!validator.isInt(trip.seats, { min: 0, max: 4 })) {
            errors.push('The Seats should be positive number (from 0 to 4 inclusive).');
        }
        if (!validator.isLength(trip.description, { min: 10 })) {
            errors.push('The Description should be minimum 10 characters long.');
        }
        if (!validator.isURL(trip.image)) {
            errors.push('The Car Image should be starts with http:// or https://.');
        }
        if (!validator.isLength(trip.carBrand, { min: 4 })) {
            errors.push('The Car Brand should be minimum 4 characters long.');
        }
        if (!validator.isInt(trip.price, { min: 1, max: 50 })) {
            errors.push('The Price should be positive number (from 1 to 50 inclusive).');
        }

        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }

        await tripServices.edit(tripId, trip);

        res.redirect(`/trip/${tripId}/details`)

    } catch (error) {
        res.render('trip/create', { title: 'Trip offer', errors: error.message.split(', '), data: req.body });

    }
});

router.get('/:id/delete', isAuth, isCreator, async (req, res) => {
    try {
        await tripServices.delete(req.params.id);

        res.redirect('/trip/shared');

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});

module.exports = router;