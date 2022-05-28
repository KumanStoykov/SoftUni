const router = require('express').Router();

const { TOKEN_COOKIE_NAME } = require('../constants');
const authService = require('../services/authService');


router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;


    let user = await authService.login(username, password);

    if(!user) {
        return res.redirect('/404');
    }

    let token = await authService.crateToken(user);

    res.cookie(TOKEN_COOKIE_NAME, token, {
        httpOnly: true
    });

    res.redirect('/');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    
    try{
        let { username, password, repeatPassword, address } = req.body;

        if(password != repeatPassword) {
            throw new Error('Password don\,t match');
        }

        await authService.register(username, password, address);
        res.render('auth/login');

    } catch(err) {
        console.log(err);
    }
});

router.get('/profile', (req, res) => {
    res.render('auth/profile');
});

module.exports = router; 