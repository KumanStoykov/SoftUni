const router = require('express').Router();


const login = (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;


    let user = await authService.login(username, password);

    if(!user) {
        return res.redirect('/404');
    }

    let token = await authService.crateToken(user);

const register = (req, res) => {
    res.render('auth/register');
};

const renderProfile = (req, res) => {
    res.render('profile');
}

router.get('/login', login);
router.get('/register', register);
router.get('/profile', renderProfile);

module.exports = router;