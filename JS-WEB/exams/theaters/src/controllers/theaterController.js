const router = require('express').Router();


const theaterService = require('../services/theaterService');
const { isAuth, isOwner } = require('../middlewares/authMiddleware');
const validator = require('validator').default;



router.get('/create', isAuth, (req, res) => {
    res.render('theater/create', { title: 'Create page' });
});

router.post('/create', isAuth, async (req, res) => {
    try {
        const theaterData = {
            title: req.body.title.trim(),
            description: req.body.description.trim(),
            image: req.body.image.trim(),
            isPublic: req.body.isPublic ? true : false,
            createdAt: Date.now(),
            usersLiked: [],
            owner: req.user._id
        };

        if (theaterData.title.length < 0) {
            throw new Error('The title should not be empty');
        }
        if (theaterData.description < 0) {
            throw new Error('The description should not be empty');
        }
        if (theaterData.image < 0) {
            throw new Error('The image should not be empty');
        }
      

        await theaterService.create(theaterData);

        res.redirect('/');

    } catch (error) {
        console.log(error.message)
        res.render('theater/create', { title: 'Create theater', error: error.message, data: req.body });
    }

});

router.get('/:id/details', isAuth, async (req, res) => {
    try {
        const user = req.user;
        const theater = await theaterService.getOne(req.params.id).lean();

        if (user) {
            theater.isOwner = req.user._id == theater.owner;
            theater.hasLike = theater.usersLiked.some(x => x._id == req.user._id);
        }


        res.render('theater/details', { title: 'Details theater', ...theater });

    } catch (error) {
        console.log(error.message);
        res.render('home/user-home', { title: 'Error' });
    }
});

router.get('/:id/like', isAuth, async (req, res) => {
    try { 
        const playId = req.params.id;

        await theaterService.like(playId, req.user._id);
        res.redirect(`/theater/${playId}/details`);

    } catch (error) {
        console.log(error.message);
    }
});

router.get('/:id/edit', isAuth, isOwner, async (req, res) => {
    try {

        const theater = await theaterService.getOne(req.params.id).lean();

        res.render('theater/edit', { title: 'Edit theater', data: theater });

    } catch (error) {
        res.render('home', { title: 'Error' });
    }
});

router.post('/:id/edit', isAuth, isOwner, async (req, res) => {
    try {
        const theaterData = {
            title: req.body.title.trim(),
            description: req.body.description.trim(),
            image: req.body.image.trim(),
            isPublic: req.body.isPublic ? true : false

        };
      

        if (theaterData.title.length < 0) {
            throw new Error('The title should not be empty');
        }
        if (theaterData.description < 0) {
            throw new Error('The description should not be empty');
        }
        if (theaterData.image < 0) {
            throw new Error('The image should not be empty');
        }

        await theaterService.edit(req.params.id, theaterData);

        res.redirect('/');

    } catch (error) {
        console.log(error.message)
        res.render('theater/edit', { title: 'Edit theater', error: error.message, data: req.body });
    }
});





router.get('/:id/delete', isAuth, isOwner, async (req, res) => {
    try {
      await theaterService.delete(req.params.id);

        res.redirect('/');

    } catch (error) {
        res.render('home/user-home', { title: 'Error' });
    }
});



module.exports = router;