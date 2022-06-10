const router = require('express').Router();


router.get('/shared', (req, res) => {
    try{
        res.render('trip/shared', { title: 'Trip Shared'})

    } catch(error) {
        res.redirect('404', { title: 'Error' });
    }
});

router.get('/offer', (req, res) => {
    try{
        res.render('trip/create', { title: 'Trip Offer'})

    } catch(error) {
        res.redirect('404', { title: 'Error' });
    }
});



module.exports = router;