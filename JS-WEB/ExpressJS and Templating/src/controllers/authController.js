const router = require('express').Router();


router.get('/register', (req, res) => {
   res.render('user/register') 
});

module.exports = router;