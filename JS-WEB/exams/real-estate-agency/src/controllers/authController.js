const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login'});
});

router.get('/register', (req, res) => {
    res.render('auth/register', { title: 'Register'});
});

module.exports = router; 