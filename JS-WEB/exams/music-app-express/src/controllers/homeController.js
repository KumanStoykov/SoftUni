const router = require('express').Router();

router.get('/', (req, res) => {
   res.render('home', { title: 'Home Page'}) 
});


module.exports = router;