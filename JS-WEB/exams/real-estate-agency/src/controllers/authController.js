const router = require('express').Router();
const { body, validationResult } = require('express-validator');


const authService = require('../service/authService');
const { TOKEN_COOKIE_NAME } = require('../constants');

const { isGuest, isAuth } = require('../middlewares/authMiddleware');

router.get('/login', isGuest(), (req, res) => {
    res.render('auth/login', { title: 'Login' });
});

router.post('/login',
    isGuest(),
    body('username').trim().isLength({ min: 5 }).withMessage('The username should be at least 5 characters long!'),
    body('password').trim().isLength({ min: 4 }).withMessage('The password should be at least 4 characters long!'),
    async (req, res) => {
        const { username, password } = req.body;

        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join(' \n'));
            }

            const token = await authService.login(username, password);

            if (!token) {
                throw new Error('Incorrect username or password!');
            }
            res.cookie(TOKEN_COOKIE_NAME, token, {
                httpOnly: true
            });
            res.redirect('/'); 

        } catch (err) {
            res.render('auth/login', { title: 'Login', errors: err.message.split(' \n'), data: req.body });
        }

    });

router.get('/register', isGuest(), (req, res) => {
    res.render('auth/register', { title: 'Register' });
});

router.post('/register',
    isGuest(),
    body('name').trim().matches(/^[a-zA-Z]+ [a-zA-Z]+$/).withMessage('The name should be in the following format firstname and lastname!'),
    body('username').trim().isLength({ min: 5 }).withMessage('The username should be at least 5 characters long!'),
    body('password').trim().isLength({ min: 4 }).withMessage('The password should be at least 4 characters long!'),
    body('password').custom((value, { req }) => {
        if (value && value !== req.body.repeatPassword) {
            throw new Error('The repeat password should be equal to the password!');
        }
        return true;
    }),
async (req, res) => {

    try {
        const errors = validationResult(req).array().map(x => x.msg);

        if(errors.length > 0) {
            throw new Error(errors.join(','));
        }

        const { name, username, password, repeatPassword } = req.body;
        await authService.register(name, username, password);


        const token = await authService.login(username, password);

        res.cookie(TOKEN_COOKIE_NAME, token, {
            httpOnly: true
        });
        res.redirect('/');


    } catch (err) {
        res.render('auth/register', { title: 'Register', errors: err.message.split(' \n'), data: req.body });
    }

});

router.get('/logout', isAuth(), (req, res) => {
    res.clearCookie(TOKEN_COOKIE_NAME);
    res.redirect('/');
});

module.exports = router; 