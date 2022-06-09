const router = require('express').Router();

const albumService = require('../services/albumServices');

router.get('/catalog', async (req, res) => {
   try{
      const albums = await albumService.getAllDesc();
      res.render('catalog', { title: 'Catalog', albums}); 

   } catch(err) {
      res.redirect('404', { title: 'Error'});
   }
});

module.exports = router;