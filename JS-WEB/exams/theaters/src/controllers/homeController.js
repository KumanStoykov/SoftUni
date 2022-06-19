const router = require('express').Router();


const theaterService = require('../services/theaterService');
const { isAuth } = require('../middlewares/authMiddleware');


router.get('/', async (req, res) => {

    try {
        if (req.user) {
            const theaters = await theaterService.getAllDes().lean();

            const plays = theaters.map(x => ({ ...x, likedCount: x.usersLiked.length }));
            
            res.render('home/user-home', { title: 'Home page', plays });
        } else {

            const theaters = await theaterService.topThree().lean();

            res.render('home/guest-home', { title: 'Home page', theaters });
        }

    } catch (error) {
        res.render('/', { title: 'Error' });
    }

});

router.get('/sortedByDate', isAuth, async (req, res) => {
    try {
        const theaters = await theaterService.getAllByDate().lean();
        const plays = theaters.map(x => ({ ...x, likedCount: x.usersLiked.length }));

        res.render('home/user-home', { title: 'Home page', plays });

    } catch (error) {
        res.render('home/user-home', { title: 'Error' });
    }
});

router.get('/sortedByLikes', isAuth, async (req, res) => {
    try {
        const theaters = await theaterService.getAllByLikes().lean();
        const plays = theaters.map(x => ({ ...x, likedCount: x.usersLiked.length }));

        res.render('home/user-home', { title: 'Home page', plays });

    } catch (error) {
        res.render('home/user-home', { title: 'Error' });
    }
});


module.exports = router;