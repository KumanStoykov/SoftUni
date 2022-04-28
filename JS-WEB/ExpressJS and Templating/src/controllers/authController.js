const router = require('express').Router();
const { TOKEN_COOKIE_NAME } = require('../constants');
const authServices = require('../services/authService');


router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    try {
        if (password != repeatPassword) {
            throw new Error('Password don\'t match!');
        }

        await authServices.register(username, password);

        res.redirect('/login');

    } catch (err) {
        const errors = Object.keys(err.errors).map(x => err.errors[x].message);
        
        res.locals.errors = errors;
        
        res.render('user/register');
    }
    
});

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    
    try {
        let user = await authServices.login(username, password);

        if (!username || !password) {
            throw new Error('Username and password is required!');
        }
        
        if(!user) {
            res.locals.isNotRegistered = true;
            
            throw new Error('User is not registered!');
        }
        
        let token = await authServices.createToken(user);
        
        res.cookie(TOKEN_COOKIE_NAME, token, {
            httpOnly: true
        });
        res.redirect('/');
    }catch(err) {
        res.render('user/login', { errors: [err]});
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(TOKEN_COOKIE_NAME);

    res.redirect('/');
});

module.exports = router;