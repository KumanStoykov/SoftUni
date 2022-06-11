const router = require('express').Router();
const validator = require('validator').default;

const userServices = require('../services/userServices');
const { COOKIE_TOKEN_NAME } = require('../constants');
const { isGuest, isAuth } = require('../middlewares/authGuardsMiddleware');


router.get('/login', isGuest, (req, res) => {
   res.render('user/login', { title: 'Login page' });
});

router.post('/login', isGuest, async (req, res) => {

   try {
      const { email, password } = req.body;
      const errors = [];

      if(!validator.isEmail(email)){
         errors.push('The email should be in the following format "username@domain.bg');
      }

      if(!validator.isLength(password, { min: 4 })) {
         errors.push('The password should be at least 4 characters long');
      }

      if(errors.length > 0) {
         throw new Error(errors.join(', '));
      }

      const token = await userServices.login(email, password);

      if (!token) {
         throw new Error('Incorrect email or password!');
      }

      res.cookie(COOKIE_TOKEN_NAME, token, {
         httpOnly: true
      });

      res.redirect('/');

   } catch (error) {
      res.render('user/login', { title: 'Login page', errors: error.message.split(', '), data: req.body });
   }
});

router.get('/register', isGuest, (req, res) => {
   res.render('user/register', { title: 'Register page' });
});

router.post('/register', async (req, res) => {

   try {
      const { email, password, repeatPassword, gender } = req.body;

      const errors = [];

      if(!validator.isEmail(email)){
         errors.push('The email should be in the following format "username@domain.bg');
      }

      if(!validator.isLength(password, { min: 4 })) {
         errors.push('The password should be at least 4 characters long');
      }

      if(!validator.equals(password, repeatPassword)) {
         errors.push('The repeat password should be equal to the password');
      }

      if(errors.length > 0) {
         throw new Error(errors.join(', '));
      }

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
      res.render('user/register', { title: 'Register page', errors: error.message.split(', '), data: req.body });

   }
});

router.get('/logout', isAuth, (req, res) => {
   
   res.clearCookie(COOKIE_TOKEN_NAME);
   res.redirect('/');
});

router.get('/profile', isAuth, async (req, res) => {

   try{
      const user = await userServices.getUser(req.user._id);

      user.tripsCount = user.trips.length;
      console.log(user.trips.length)

      res.render('user/profile', { title: 'Profile page', ...user})

   } catch(error) {
      res.render('404', { title: 'Error'});
   }
});


module.exports = router;