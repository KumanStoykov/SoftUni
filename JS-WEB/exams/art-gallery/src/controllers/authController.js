const router = require('express').Router();


const login = (req, res) => {
    res.render('auth/login');
};

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