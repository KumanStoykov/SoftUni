const router = require('express').Router();

const { TOKEN_COOKIE_NAME } = require('../constants');
const authService = require('../services/authService');


router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    try {
        let token = await authService.login(username, password);

        if (!token) {
            return res.redirect('/404');
        }

        res.cookie(TOKEN_COOKIE_NAME, token, {
            httpOnly: true
        });

        res.redirect('/');

    } catch (err) {
        res.redirect('404')
    }

});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {

    try {
        let { username, password, repeatPassword, address } = req.body;

        if (password != repeatPassword) {
            throw new Error('Password don\,t match');
        }

        await authService.register(username, password, address);
        let token = await authService.login(username, password);

        res.cookie(TOKEN_COOKIE_NAME, token, {
            httpOnly: true
        });

        res.redirect('/');

    } catch (err) {
        console.log(err);
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

    res.render('auth/profile', { user, publications, shared });
});

module.exports = router; 