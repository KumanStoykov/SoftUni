const router = require('express').Router();

const userServices = require('../services/userServices');
const { COOKIE_TOKEN_NAME } = require('../constants');

router.get('/login', (req, res) => {
   res.render('user/login', { title: 'Login page' });
});

router.post('/login', async (req, res) => {

   try {
      const { email, password } = req.body;

      const token = await userServices.login(email, password);

      if (!token) {
         throw new Error('Incorrect email or password!');
      }

      res.cookie(COOKIE_TOKEN_NAME, token, {
         httpOnly: true
      });

      res.redirect('/');

   } catch (error) {

      res.render('404', { title: 'Error' });

   }
});

router.get('/register', (req, res) => {
   res.render('user/register', { title: 'Register page' });
});

router.post('/register', async (req, res) => {

   try {
      const { email, password, repeatPassword, gender } = req.body;

      await userServices.register(email, password, gender);

      const token = await userServices.login(email, password);


      if (!token) {
         throw new Error('Incorrect email or password!');
      }

      res.cookie(COOKIE_TOKEN_NAME, token, {
         httpOnly: true
      });

      res.redirect('/');

   } catch (error) {
      res.render('404', { title: 'Error' });
   }
});

router.get('/logout', (req, res) => {
   
   res.clearCookie(COOKIE_TOKEN_NAME);
   res.redirect('/');
});

router.get('/profile', (req, res) => {
   res.render('user/profile', { title: 'Profile page' });
});


module.exports = router;