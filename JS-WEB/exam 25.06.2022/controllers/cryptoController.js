const router = require('express').Router();


const cryptoService = require('../services/cryptoService');
const { isAuth, isOwner } = require('../middlewares/authMiddleware');
const validator = require('validator').default;
const createOptions = require('../utils/createOptions');


router.get('/catalog', async (req, res) => {
    try {
        const allCryptos = await cryptoService.getAll().lean();

        res.render('crypto/catalog', { title: 'Crypto catalog', allCryptos });
    } catch (error) {

    }

});
router.get('/create', isAuth, (req, res) => {
    res.render('crypto/create', { title: 'Create crypto' });
});

router.post('/create', isAuth, async (req, res) => {
    try {
        const cryptoData = {
            name: req.body.name.trim(),
            image: req.body.image.trim(),
            price: req.body.price,
            description: req.body.description.trim(),
            paymentMethod: req.body.paymentMethod.trim(),
            buyCrypto: [],
            owner: req.user._id
        };

        const errors = [];

        if (!validator.isLength(cryptoData.name, { min: 2 })) {
            errors.push('The Name should be at least two characters');
        }
        if (cryptoData.price < 1) {
            errors.push('The Price should be a positive number');
        }
        if (!validator.isURL(cryptoData.image)) {
            errors.push('The Crypto Image should start with http:// or https://.');
        }
        if (!validator.isLength(cryptoData.description, { min: 10 })) {
            errors.push('The Description should be a minimum of 10 characters long.');
        }

        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }


        await cryptoService.create(cryptoData);

        res.redirect('/crypto/catalog');

    } catch (error) {        
        const crypto = req.body;
        crypto.options = createOptions(crypto.paymentMethod);
        crypto.auctionTitle = crypto.title;
        
        res.render('crypto/edit', { title: 'Edit crypto', errors: error.message.split(', '), ...crypto });
    }

});

router.get('/:id/details', async (req, res) => {
    try {
        const user = req.user;
        const crypto = await cryptoService.getOne(req.params.id).lean();

        if (user) {
            crypto.isOwner = req.user._id == crypto.owner._id;
            crypto.hasBuy = crypto.buyCrypto.some(x => x._id == req.user._id);
        }


        res.render('crypto/details', { title: 'Details crypto', ...crypto });

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});

router.get('/:id/buy', isAuth, async (req, res) => {
    try {
        const cryptoId = req.params.id;

        await cryptoService.buy(cryptoId, req.user._id);
        res.redirect(`/crypto/${cryptoId}/details`);

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});

router.get('/:id/edit', isAuth, isOwner, async (req, res) => {
    try {

        const crypto = await cryptoService.getOne(req.params.id).lean();

        crypto.options = createOptions(crypto.paymentMethod);
        crypto.auctionTitle = crypto.title;
        
        res.render('crypto/edit', { title: 'Edit crypto', ...crypto })

    } catch (error) {
        
        res.render('404', { title: 'Error' });
    }
});

router.post('/:id/edit', isAuth, isOwner, async (req, res) => {
    try {
        const cryptoData = {
            name: req.body.name.trim(),
            image: req.body.image.trim(),
            price: req.body.price,
            description: req.body.description.trim(),
            paymentMethod: req.body.paymentMethod.trim()

        };

        const errors = [];

        if (!validator.isLength(cryptoData.name, { min: 2 })) {
            errors.push('The Name should be at least two characters');
        }
        if (cryptoData.price < 1) {
            errors.push('The Price should be a positive number');
        }
        if (!validator.isURL(cryptoData.image)) {
            errors.push('The Crypto Image should start with http:// or https://.');
        }
        if (!validator.isLength(cryptoData.description, { min: 10 })) {
            errors.push('The Description should be a minimum of 10 characters long.');
        }

        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }


        await cryptoService.edit(req.params.id, cryptoData);

        res.redirect(`/crypto/${req.params.id}/details`);

    } catch (error) {
        const crypto = req.body;
        crypto.options = createOptions(crypto.paymentMethod);
        crypto.auctionTitle = crypto.title;
        
        res.render('crypto/edit', { title: 'Edit crypto', errors: error.message.split(', '), ...crypto });
    }
});

router.get('/:id/delete', isAuth, isOwner, async (req, res) => {
    try {
        await cryptoService.delete(req.params.id);

        res.redirect('/crypto/catalog');

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});

router.get('/search', isAuth, async (req, res) => {
    try{
        const allCryptos = await cryptoService.getAll().lean();
        
        res.render('crypto/search', { title: 'Search', allCryptos});

    }catch(error) {
        res.redirect('/');
    }

});

router.post('/search', isAuth, async (req, res) => {
    try {
        const cryptos = await cryptoService.search(req.body.search, req.body.paymentMethod).lean();        

        res.render('crypto/search', { title: 'Search', cryptos, start: true });

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});


module.exports = router;