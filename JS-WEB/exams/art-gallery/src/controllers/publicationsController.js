const router = require('express').Router();
const publicationService = require('../services/publicationService');

const { isAuth, isOwner } = require('../middlewares/guardMiddleware');


router.get('/create', isAuth, (req, res) => {
    res.render('create');
});

router.post('/create', isAuth, async (req, res) => {

    try {

        let { title, paintingTechnique, picture, certificate } = req.body;

        const author = req.user?._id;

        if (author) {

            await publicationService.create(title, paintingTechnique, picture, certificate, author);

            res.redirect('/gallery/view');
        }

    } catch (err) {
        console.log(err);
        res.redirect('404');

    }
});

router.get('/details/:id', async (req, res) => {

    try {
        const user = req.user;
        let publication = await publicationService.getOne(req.params.id);

        if (user) {
            publication.isOwner = user._id == publication.author._id;
            publication.isShared = publication.userShared.some(x => x._id == user._id);
        }

        res.render('details', { ...publication });
    } catch (err) {
        console.log(err);
        res.redirect('404');
    }
});


router.get('/share/:id', isAuth, async (req, res) => {
    try {
        let publicationId = req.params.id;
        let userId = req.user?._id;

        await publicationService.sharedPublication(publicationId, userId);

        res.redirect('/')

    } catch (err) {
        console.log(err);
    }
});

router.get('/edit/:id', isAuth, isOwner, async (req, res) => {
    try {
        let publication = await publicationService.getOne(req.params.id);

        res.render('edit', { ...publication });

    } catch (err) {
        res.redirect('404');
    }
});

router.post('/edit/:id', isAuth, isOwner, async (req, res) => {
    try {
        const id = req.params.id;

        let { title, paintingTechnique, picture, certificate } = req.body;


        await publicationService.edit(id, { title, paintingTechnique, picture, certificate });

        res.redirect(`/publication/details/${id}`);

    } catch (err) {
        res.redirect('404');
    }
});

router.get('/delete/:id', isAuth, isOwner, async (req, res) => {
    try{
        await publicationService.deletePublication(req.params.id);

        res.redirect('/gallery/view');
    } catch(err) {
        res.redirect('404');
    }
});

module.exports = router;