const router = require('express').Router();


const courseService = require('../services/courseService');
const { isAuth, isOwner } = require('../middlewares/authMiddleware');
const validator = require('validator').default;



router.get('/create', isAuth, (req, res) => {
    res.render('course/create', { title: 'Create page' });
});

router.post('/create', isAuth, async (req, res) => {
    try {
        const courseData = {
            title: req.body.title.trim(),
            description: req.body.description.trim(),
            image: req.body.image.trim(),
            duration: req.body.duration.trim(),
            createdAt: new Date(),
            usersEnrolled: [],
            owner: req.user._id
        };

        if (!validator.isLength(courseData.title, { min: 4})) {
            throw new Error('The title should be at least 4 characters');
        }
        if (!validator.isLength(courseData.description, { min: 20})) {
            throw new Error('The description should be at least 20 characters long');
        }
        if (!validator.isURL(courseData.image)) {
            throw new Error('The imageUrl should starts with http or https');
        }
      

        await courseService.create(courseData);

        res.redirect('/');

    } catch (error) {
        console.log(error.message)
        res.render('course/create', { title: 'Create course', error: error.message, data: req.body });
    }

});

router.get('/:id/details', isAuth, async (req, res) => {
    try {
        const user = req.user;
        const course = await courseService.getOne(req.params.id).lean();

        if (user) {
            course.isOwner = req.user._id == course.owner;
            course.hasEnrolled = course.usersEnrolled.some(x => x._id == req.user._id);
        }


        res.render('course/details', { title: 'Details course', ...course });

    } catch (error) {
        console.log(error.message);
        res.render('home/user-home', { title: 'Error' });
    }
});

router.get('/:id/enroll', isAuth, async (req, res) => {
    try { 
        const courseId = req.params.id;

        await courseService.enroll(courseId, req.user._id);
        res.redirect(`/course/${courseId}/details`);

    } catch (error) {
        console.log(error.message);
    }
});

router.get('/:id/edit', isAuth, isOwner, async (req, res) => {
    try {

        const course = await courseService.getOne(req.params.id).lean();

        res.render('course/edit', { title: 'Edit course', data: course });

    } catch (error) {
        res.render('home', { title: 'Error' });
    }
});

router.post('/:id/edit', isAuth, isOwner, async (req, res) => {
    try {
        const courseData = {
            title: req.body.title.trim(),
            description: req.body.description.trim(),
            image: req.body.image.trim(),
            duration: req.body.duration.trim(),           
        };
      

        if (!validator.isLength(courseData.title, { min: 4})) {
            throw new Error('The title should be at least 4 characters');
        }
        if (!validator.isLength(courseData.description, { min: 20})) {
            throw new Error('The description should be at least 20 characters long');
        }
        if (!validator.isURL(courseData.image)) {
            throw new Error('The imageUrl should starts with http or https');
        }      

        await courseService.edit(req.params.id, courseData);

        res.redirect('/');

    } catch (error) {
        console.log(error.message)
        res.render('course/edit', { title: 'Edit course', error: error.message, data: req.body });
    }
});





router.get('/:id/delete', isAuth, isOwner, async (req, res) => {
    try {
      await courseService.delete(req.params.id);

        res.redirect('/');

    } catch (error) {
        res.render('home/user-home', { title: 'Error' });
    }
});



module.exports = router;