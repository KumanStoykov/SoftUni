const router = require('express').Router();
const { TOKEN_COOKIE_NAME } = require('../constants');
const authServices = require('../services/authService');


router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', (req, res) => {

    try {
        const { username, password, repeatPassword } = req.body;

        authServices.register(username, password, repeatPassword)
            .then(() => {
                res.redirect('/login');
            });

    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res) => {
   const { username, password } = req.body;

   let user = await authServices.login(username, password);

   if(!user) {
       return res.redirect('404');
   }
   let token = await authServices.createToken(user);

   res.cookie(TOKEN_COOKIE_NAME, token, {
        httpOnly: true
   });
    res.redirect('/');
});

module.exports = router;