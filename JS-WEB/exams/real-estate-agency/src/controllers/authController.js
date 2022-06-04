const router = require('express').Router();
const authService = require('../service/authService');
const { TOKEN_COOKIE_NAME } = require('../constants');

router.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login'});
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try{
        let token = await authService.login(username, password);

        if(!token) {
            throw new Error('Incorrect username or password!');
        }
        res.cookie(TOKEN_COOKIE_NAME, token, { 
            httpOnly: true
        });
        res.redirect('/');

    } catch(err) {
        console.log(err);
    }

});

router.get('/register', (req, res) => {
    res.render('auth/register', { title: 'Register'});
});

router.post('/register', async(req, res) => {

    try{
        let { name, username, password, repeatPassword } = req.body;
        await authService.register(name, username, password);


        let token = await authService.login(username, password); 

        res.cookie(TOKEN_COOKIE_NAME, token, { 
            httpOnly: true
        });
        res.redirect('/');
               

    } catch(err) {
        console.log(err)
    }

});

router.get('/logout', (req, res) => {
    res.clearCookie(TOKEN_COOKIE_NAME);
    res.redirect('/');
});

module.exports = router; 