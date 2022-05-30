const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { TOKEN_COOKIE_NAME } = require('../constants');
const authService = require('../services/authService');


router.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login' });
});

router.post('/login',
    body('username').trim().isLength({ min: 4 }).withMessage('Username must be at least 4 characters long!'),
    body('password').trim().isLength({ min: 3 }).withMessage('Password must be at least 3 characters long!'),
    async (req, res) => {
        let { username, password } = req.body;

        try {
            let errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {

                throw new Error(errors.join('\n'));
            }

            let token = await authService.login(username, password);
            if (!token) {
                throw new Error('Incorrect username or password')
            }

            res.cookie(TOKEN_COOKIE_NAME, token, {
                httpOnly: true
            });

            res.redirect('/');

        } catch (err) {
            res.render('auth/login', { title: 'Login', errors: err.message.split(' \n'), data: req.body });
        }

    });

router.get('/register', (req, res) => {
    res.render('auth/register', { title: 'Register' });
});

router.post('/register',
    body('username').trim().isLength({ min: 4 }).withMessage('Username must be at least 4 characters long!'),
    body('password').trim().isLength({ min: 3 }).withMessage('Password must be at least 3 characters long!'),
    body('password').trim()
                    .custom((value, { req }) => {
                        if(value && value !== req.body.repeatPassword) {
                            throw new Error('Password and repeat password must be equals!');
                        }
                        return true;
                    }),
    body('address').trim().isLength({ max: 20 }).withMessage('Address must be max length 20!'),
    async (req, res) => {

        try {
            let { username, password, repeatPassword, address } = req.body;

            let errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            await authService.register(username, password, address);
            let token = await authService.login(username, password);

            res.cookie(TOKEN_COOKIE_NAME, token, {
                httpOnly: true
            });

            res.redirect('/');

        } catch (err) {
            res.render('auth/register', { title: 'Register', errors: err.message.split('\n'), data: req.body })
        }
    });

router.get('/logout', (req, res) => {
    res.clearCookie(TOKEN_COOKIE_NAME);

    res.redirect('/');
});

router.get('/profile', async (req, res) => {
    let user = await authService.getUser(req.user._id);

    let publications = user.myPublications.map(x => x.title).join(', ');
    let shared = user.myShared.map(x => x.title).join(', ');

    res.render('auth/profile', { title: 'Profile page', user, publications, shared });
});

module.exports = router; 