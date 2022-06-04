const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home'});
});

router.get('/aprt-for-recent', (req, res) => {
    res.render('aprt-for-recent', { title: 'Apartments for recents'});
});

module.exports = router;