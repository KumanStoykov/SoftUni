const router = require('express').Router();

const albumService = require('../services/albumServices');

router.get('/', async (req, res) => {

   try {
      const searchInput = req.query.search;

      if(searchInput !== undefined) {
         const albums = await albumService.search(searchInput);

         res.render('search', { title: 'Search', isStart: true, albums }); 
         
      } else {
         res.render('search', { title: 'Search', isStart: false}); 
      }      
      
   }catch(err) {
      res.redirect('404', { title: 'Error'});
   }
});


module.exports = router;