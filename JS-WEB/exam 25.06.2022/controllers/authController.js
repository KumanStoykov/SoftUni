const router = require('express').Router();

const { TOKEN_NAME } = require('../config');
const authService = require('../services/authService');
const jwt = require('../utils/jwtUtils');
const { isUser, isAuth } = require('../middlewares/authMiddleware');
const validator = require('validator').default;


router.get('/register', isUser, (req, res) => {
    try {
        res.render('auth/register', { title: 'Register page' });

    } catch (error) {
        res.render('404', { title: 'Error' });
    }
});

router.post('/register', isUser, async (req, res) => {
    try {
        const { username, email, password, repeatPassword } = req.body;

        const errors = [];

        if (!validator.isLength(username, { min: 5 })) {
            errors.push('The username should be at least five characters long');
        }
        if (!validator.isLength(email, { min: 10 })) {
            errors.push('The email should be at least ten character long');
        }
        if (!validator.isLength(password, { min: 4 })) {
            errors.push('The password should be at least four characters long');
        }
        if (!validator.equals(password, repeatPassword)) {
            errors.push('The repeat password should be equal to the password');
        }

        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }

        await authService.register(username, email, password);

        const user = await authService.login(email, password);

        const token = await jwt.createToken(user);

        res.cookie(TOKEN_NAME, token, { httpOnly: true });

        res.redirect('/');

    } catch (error) {
        res.render('auth/register', { title: 'Register page', errors: error.message.split(', '), data: req.body });
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
        const { email, password } = req.body;

        const errors = [];

        if (!validator.isLength(email, { min: 10 })) {
            errors.push('The email should be at least ten character long');
        }
        if (!validator.isLength(password, { min: 4 })) {
            errors.push('The password should be at least four characters long');
        }

        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }

        const user = await authService.login(email, password);

        const token = await jwt.createToken(user);

        res.cookie(TOKEN_NAME, token, { httpOnly: true });

        res.redirect('/');

    } catch (error) {
        res.render('auth/login', { title: 'Login page', errors: error.message.split(', '), data: req.body });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(TOKEN_NAME);
    res.redirect('/');
});

module.exports = router;