const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const publicationService = require('../services/publicationService');

const { isAuth, isOwner } = require('../middlewares/guardMiddleware');


router.get('/create', isAuth, (req, res) => {
    res.render('create', { title: 'Create page' });
});

router.post('/create', isAuth,
    body('title').isLength({ min: 6 }).withMessage('The Title should be a minimum of 6 characters long.'),
    body('paintingTechnique').isLength({ max: 15 }).withMessage('The Painting technique should be a maximum of 15 characters long.'),
    body('picture').isURL().withMessage('The Art picture should start with http:// or https://.'),
    body('certificate').isIn(['Yes', 'No']).withMessage('The Certificate of authenticity there must be value "Yes" or "No".'),
    async (req, res) => {

        try {

            let { title, paintingTechnique, picture, certificate } = req.body;

            let errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            const author = req.user?._id;

            if (author) {
                await publicationService.create(title, paintingTechnique, picture, certificate, author);

                res.redirect('/gallery/view');
            }

        } catch (err) {
            res.render('create', { title: 'Create page', errors: err.message.split(' \n'), data: req.body });

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

        res.render('details', { ...publication, title: 'Details page' });
    } catch (err) {
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

        res.render('edit', { ...publication, title: 'Edit page' });

    } catch (err) {
        res.redirect('404');
    }
});

router.post('/edit/:id', isAuth, isOwner,
    body('title').isLength({ min: 6 }).withMessage('The Title should be a minimum of 6 characters long.'),
    body('paintingTechnique').isLength({ max: 15 }).withMessage('The Painting technique should be a maximum of 15 characters long.'),
    body('picture').isURL().withMessage('The Art picture should start with http:// or https://.'),
    body('certificate').isIn(['Yes', 'No']).withMessage('The Certificate of authenticity there must be value "Yes" or "No".'),
    async (req, res) => {

        try {
            const id = req.params.id;

            let { title, paintingTechnique, picture, certificate } = req.body;

            let errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }


            await publicationService.edit(id, { title, paintingTechnique, picture, certificate });

            res.redirect(`/publication/details/${id}`);

        } catch (err) {
            res.render('edit', { title: 'Edit page', errors: err.message.split(' \n'), data: req.body });
        }
    });

router.get('/delete/:id', isAuth, isOwner, async (req, res) => {
    try {
        await publicationService.deletePublication(req.params.id);

        res.redirect('/gallery/view');
    } catch (err) {
        res.redirect('404');
    }
});

module.exports = router;