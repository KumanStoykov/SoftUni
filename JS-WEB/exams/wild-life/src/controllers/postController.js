const router = require('express').Router();
const validator = require('validator').default;


const postService = require('../services/postServices');
const userService = require('../services/userService');

const { isAuth, isOwner } = require('../middlewares/authMiddleware');


router.get('/create', isAuth, (req, res) => {
    try {
        res.render('post/create', { title: 'Create post' });

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});

router.post('/create', isAuth, async (req, res) => {
    try {
        const post = {
            title: req.body.title,
            keyword: req.body.keyword,
            location: req.body.location,
            dateOfCreation: req.body.dateOfCreation,
            image: req.body.image,
            description: req.body.description,
            author: req.user,
            votesOnPost: []
        };

        let errors = [];        
       
        if (!validator.isLength(post.title, { min: 6 })) {
            errors.push('The Title should be at least 6 characters.');

        }
        if (!validator.isLength(post.keyword, { min: 6 })) {
            errors.push('The Keyword should be at least 6 characters.');

        }
        if (!validator.isLength(post.location, { max: 15 })) {
            errors.push('The Location should be a maximum of 15 characters long.');

        }
        if (!validator.isLength(post.dateOfCreation, {min: 10, max: 10 })) {
            errors.push('The Date should be exactly 10 characters - "02.02.2021"');
        }
        if (!validator.isURL(post.image)) {
            errors.push('The Wildlife Image should start with http:// or https://.');
        }
        if (!validator.isLength(post.description, {min: 8})) {
            errors.push('The Description should be a minimum of 8 characters long.');
        }
        

        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }

       const createdPost = await postService.create(post);
       console.log(createdPost._id)

       await userService.addPost(req.user._id, createdPost._id);

        res.redirect('/all-posts');

    } catch (error) {
        res.render('post/create', { title: 'Register page', errors: error.message.split(', '), data: req.body });
    }
});

router.get('/:id/details', async (req, res) => {
    try {
        const post = await postService.getOne(req.params.id);

        post.fullName = `${post.author.firstName} ${post.author.lastName}`;

        post.userEmails = post.votesOnPost.map(x => x.email).join(', ');
        post.isVoted = post.votesOnPost.length > 0;

        const user = req.user;

        if (user) {
            post.isAuthor = user._id == post.author._id;
        }

        if (user && !post.isAuthor) {
            post.hasVoted = post.votesOnPost.find(x => x._id == user._id);
        }


        res.render('post/details', { title: 'Details post', ...post });

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});

router.get('/:id/voteUp', isAuth, async (req, res) => {

    const userId = req.user._id;


    await postService.voteUp(req.params.id, userId);

    res.redirect(`/post/${req.params.id}/details`);
});

router.get('/:id/voteDown', isAuth, async (req, res) => {

    const userId = req.user._id;

    await postService.voteDown(req.params.id, userId);

    res.redirect(`/post/${req.params.id}/details`);
});

router.get('/:id/edit', isAuth, isOwner, async (req, res) => {
    try {
        const post = await postService.getOne(req.params.id);

        res.render('post/edit', { title: 'Edit post', data: post });

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});

router.post('/:id/edit', isAuth, isOwner, async (req, res) => {
    try {

        const post = {
            title: req.body.title.trim(),
            keyword: req.body.keyword.trim(),
            location: req.body.location.trim(),
            dateOfCreation: req.body.dateOfCreation.trim(),
            image: req.body.image.trim(),
            description: req.body.description.trim(),

        };

        let errors = [];        
       
        if (!validator.isLength(post.title, { min: 6 })) {
            errors.push('The Title should be at least 6 characters.');

        }
        if (!validator.isLength(post.keyword, { min: 6 })) {
            errors.push('The Keyword should be at least 6 characters.');

        }
        if (!validator.isLength(post.location, { max: 15 })) {
            errors.push('The Location should be a maximum of 15 characters long.');

        }
        if (!validator.isLength(post.dateOfCreation, {min: 10, max: 10 })) {
            errors.push('The Date should be exactly 10 characters - "02.02.2021"');
        }
        if (!validator.isURL(post.image)) {
            errors.push('The Wildlife Image should start with http:// or https://.');
        }
        if (!validator.isLength(post.description, {min: 10})) {
            errors.push('The Description should be a minimum of 8 characters long.');
        }
        

        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }

        await postService.update(req.params.id, post);

        res.redirect(`/post/${req.params.id}/details`);

    } catch (error) {
        res.render('post/edit', { title: 'Edit page', errors: error.message.split(', '), data: req.body });

    }
});

router.get('/:id/delete', isAuth, isOwner, async (req, res) => {
    try {
        await postService.delete(req.params.id);

        res.redirect('/all-posts');

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});


module.exports = router;