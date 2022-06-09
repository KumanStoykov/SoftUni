const router = require('express').Router();
const validator = require('validator');


const authServices = require('../services/authService');
const { TOKEN_NAME } = require('../constants');
const { isGuest, isAuth } = require('../middlewares/authMiddleware');


router.get('/register', isGuest(), (req, res) => {
    res.render('auth/register', { title: 'Register Page' });
});

router.post('/register', isGuest(), async (req, res) => {
    try {
        const { email, password, repeatPassword } = req.body;

        let errors = [];

        if (!validator.default.isEmail(email)) {
            errors.push('Email is not correct!');
        }
        if (!validator.default.isLength(password, { min: 4 })) {
            errors.push('Password must be lass then 4 character!');
        }
        if (!validator.default.equals(password, repeatPassword)) {
            errors.push('Password and repeat password must be equal!');
        }

        if(errors.length > 0) {
            throw new Error(errors);
        }

        await authServices.register(email, password);
        const token = await authServices.login(email, password);

        res.cookie(TOKEN_NAME, token, {
            httpOnly: true
        });

        res.redirect('/');

    } catch (err) {
        res.render('auth/register', { title: 'Register Page', errors: err.message.split(','), data: req.body });

    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('auth/login', { title: 'Login Page' });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        const { email, password } = req.body;
        let errors = [];

        if (!validator.default.isEmail(email)) {
            errors.push('Email is not correct!');
        }
        if (!validator.default.isLength(password, { min: 4 })) {
            errors.push('Password must be lass then 4 character!');
        }

        if(errors.length > 0) {
            throw new Error(errors);
        }

        const token = await authServices.login(email, password);

        res.cookie(TOKEN_NAME, token, {
            httpOnly: true
        });

        res.redirect('/');

    } catch (err) {
        
        res.render('auth/login', { title: 'Login Page', errors: err.message.split(','), data: req.body });
    }
});

router.get('/logout', isAuth(), (req, res) => {
    res.clearCookie(TOKEN_NAME);
    res.redirect('/');
});

module.exports = router;