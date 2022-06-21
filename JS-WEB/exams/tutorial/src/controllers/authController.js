const router = require('express').Router();

const { COOKIE_TOKEN_NAME } = require('../config');
const authService = require('../services/authService');
const jwt = require('../utils/jwtUtils');
const { isUser, isAuth } = require('../middlewares/authMiddleware');
const validator = require('validator').default;


router.get('/register', isUser, (req, res) => {
    try {
        res.render('auth/register', { title: 'Register page' });

    } catch (error) {
        res.render('home', { title: 'Error' });
    }
});

router.post('/register', isUser, async (req, res) => {
    try {
        const { username, password, repeatPassword } = req.body;


        if (!validator.isLength(username, { min: 5 })) {
            throw new Error('The username should be at least 5 characters long and should consist only english letters and digits');
        }
        if (!validator.isLength(password, { min: 5 })) {
            throw new Error('The password should be at least 5 characters long and should consist only english letters and digits');
        }
        if (!validator.equals(password, repeatPassword)) {
            throw new Error('The repeat password should be equal to the password');
        }

        await authService.register({ username, password });

        const user = await authService.login({ username, password });

        const token = await jwt.createToken(user);

        res.cookie(COOKIE_TOKEN_NAME, token, { httpOnly: true });

        res.redirect('/');

    } catch (error) {
        console.log(error.message)
        res.render('auth/register', { title: 'Register page', error: error.message, data: req.body });
    }
});

router.get('/login', isUser, (req, res) => {
    try {
        res.render('auth/login', { title: 'Login page' });

    } catch (error) {
        res.render('home', { title: 'Error' });
    }
});

router.post('/login', isUser, async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!validator.isLength(username, { min: 5 })) {
            throw new Error('The username should be at least 5 characters long and should consist only english letters and digits');
        }
        if (!validator.isLength(password, { min: 5 })) {
            throw new Error('The password should be at least 5 characters long and should consist only english letters and digits');
        }

        const user = await authService.login({ username, password });

        const token = await jwt.createToken(user);

        res.cookie(COOKIE_TOKEN_NAME, token, { httpOnly: true });

        res.redirect('/');

    } catch (error) {
        console.log(error.message)
        res.render('auth/login', { title: 'Login page', error: error.message, data: req.body });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_TOKEN_NAME);
    res.redirect('/');
});


module.exports = router;