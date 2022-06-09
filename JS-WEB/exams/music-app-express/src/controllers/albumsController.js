const router = require('express').Router();

const albumService = require('../services/albumServices');
const { isAuth, isOwner } = require('../middlewares/authMiddleware');
const validator = require('validator');


router.get('/create', isAuth(), (req, res) => {
    res.render('album/create', { title: 'Create album' });
});
router.post('/create', isAuth(), async (req, res) => {

    try {        
        let album = {
            name: req.body.name.trim(),
            image: req.body.image.trim(),
            price: req.body.price.trim(),
            releaseDate: req.body.releaseDate.trim(),
            artist: req.body.artist.trim(),
            genre: req.body.genre.trim(),
            description: req.body.description.trim(),
            creator: req.user._id
        };

        let errors = [];

        if (!validator.default.isLength(album.name, { min: 5})) {
            errors.push('Name must be lass then 5 character!');
        }
        if (!validator.default.isURL(album.image)) {
            errors.push('Image URL is not correct!');
        }
        if (!validator.default.isInt(album.price, { min: 0, max: 100 })) {
            errors.push('Price must be between 0 and 100!');
        }
        if (!validator.default.isLength(album.artist, { min: 5})) {
            errors.push('Artist must be lass then 5 character!');
        }
        if (!validator.default.isLength(album.genre, { min: 1})) {
            errors.push('Genre must be lass then 1 character!');
        }
        if (!validator.default.isLength(album.description, { max: 100 })) {
            errors.push('Description max length is 100!');
        }

        if(errors.length > 0) {
            throw new Error(errors);
        }

        await albumService.createAlbum(album);
        res.redirect('/albums/catalog');

    } catch (err) {
        res.render('album/create', { title: 'Create album', errors: err.message.split(','), data: req.body });

    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const album = await albumService.getOne(req.params.id);

        album.isOwner = req.user?._id == album.creator._id;

        res.render('album/details', { title: 'Details album', ...album })

    } catch (err) {
        res.redirect('404', { title: 'Error'});
    }
});

router.get('/edit/:id', isAuth(), isOwner(), async (req, res) => {
    try {
        const album = await albumService.getOne(req.params.id);

        res.render('album/edit', { title: 'Edit album', data: album });

    } catch (err) {
        res.redirect('404', { title: 'Error'});
    }
});
router.post('/edit/:id', isAuth(), isOwner(), async (req, res) => {
    try {
        const albumId = req.params.id;

        let album = {
            name: req.body.name.trim(),
            image: req.body.image.trim(),
            price: req.body.price.trim(),
            releaseDate: req.body.releaseDate.trim(),
            artist: req.body.artist.trim(),
            genre: req.body.genre.trim(),
            description: req.body.description.trim(),
            creator: req.user._id
        };

        let errors = [];

        if (!validator.default.isLength(album.name, { min: 5})) {
            errors.push('Name must be lass then 5 character!');
        }
        if (!validator.default.isURL(album.image)) {
            errors.push('Image URL is not correct!');
        }
        if (!validator.default.isInt(album.price, { min: 0, max: 100 })) {
            errors.push('Price must be between 0 and 100!');
        }
        if (!validator.default.isLength(album.artist, { min: 5})) {
            errors.push('Artist must be lass then 5 character!');
        }
        if (!validator.default.isLength(album.genre, { min: 1})) {
            errors.push('Genre must be lass then 1 character!');
        }
        if (!validator.default.isLength(album.description, { max: 100 })) {
            errors.push('Description max length is 100!');
        }

        if(errors.length > 0) {
            throw new Error(errors);
        }

        await albumService.editAlbum(albumId, album);

        res.redirect(`/album/details/${albumId}`)

    } catch (err) {
        
        res.render('album/create', { title: 'Create album', errors: err.message.split(','), data: req.body });
    }
});

router.get('/delete/:id', isAuth(), isOwner(), async (req, res) => {
   try{
     await albumService.deleteAlbum(req.params.id);

     res.redirect('/albums/catalog');
   } catch(err) {
    res.redirect('404', { title: 'Error'});
   }
});

module.exports = router;