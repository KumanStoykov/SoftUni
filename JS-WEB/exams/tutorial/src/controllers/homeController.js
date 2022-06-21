const router = require('express').Router();


const courseService = require('../services/courseService');


router.get('/', async (req, res) => {

    try {
        if (req.user) {
            const loadCurses = await courseService.getAllDes(req.query).lean();
            const courses = loadCurses.map(x => ({ ...x, time: x.createdAt.toLocaleString() }));

           

            res.render('home/user-home', { title: 'Home page', courses });
        } else {

            const loadCurses = await courseService.topThree().lean();

            const courses = loadCurses.map(x => ({ ...x, enrolled: x.usersEnrolled.length }));

            res.render('home/guest-home', { title: 'Home page', courses });
        }

    } catch (error) {
        console.log(error.message)
        res.redirect('/');
    }

});

module.exports = router;