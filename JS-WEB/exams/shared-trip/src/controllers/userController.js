const router = require('express').Router();

router.get('/login', (req, res) => {
   res.render('user/login', { title: 'Login page'}); 
});

router.get('/register', (req, res) => {
   res.render('user/register', { title: 'Register page'}); 
});

router.get('/profile', (req, res) => {
   res.render('user/profile', { title: 'Profile page'}); 
});


module.exports = router;