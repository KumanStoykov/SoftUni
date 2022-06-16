const router = require('express').Router();

const postService = require('../services/postServices');

router.get('/', (req, res) => {
    res.render('home', { title: 'Home page'});
    
});

router.get('/all-posts', async (req, res) => {

    try{
        const posts = await postService.getAll();

        res.render('all-posts', { title: 'Home page', posts});
    } catch(error) {
        res.redirect('404', { title: 'Error'});
    }
    
});

module.exports = router;