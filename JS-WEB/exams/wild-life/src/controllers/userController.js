const router = require('express').Router();
const validator = require('validator').default;

const userService = require('../services/userService');
const { TOKEN_NAME } = require('../constants');
const { isUser, isAuth } = require('../middlewares/authMiddleware');


router.get('/register', isUser, (req, res) => {
   try {
      res.render('users/register', { title: 'Register page' });

   } catch (error) {
      res.render('404', { title: 'Error' });
   }
});

router.post('/register', isUser, async (req, res) => {

   try {

      const userData = {
         firstName: req.body.firstName.trim(),
         lastName: req.body.lastName.trim(),
         email: req.body.email.trim(),
         password: req.body.password.trim(),
         myPosts: []
      };

      let errors = [];

      if (!validator.isLength(userData.firstName, { min: 3 })) {
         if (!validator.isAlpha(userData.firstName)) {

            errors.push('The first name should be at least 3 characters long and contains only English letters');
         }

      }
      if (!validator.isLength(userData.lastName, { min: 5 })) {

         if (!validator.isAlpha(userData.firstName)) {

            errors.push('The last name should be at least 5 characters long and contains only English letters');
         }
      }
      if (!validator.isEmail(userData.email)) {
         errors.push('The email should be in the following format: <name>@<domain>.<extension> ');

      }
      if (!validator.isLength(userData.password, { min: 4 })) {
         errors.push('The password should be at least 4 characters long');

      }
      if (!validator.equals(userData.password, req.body.repeatPassword)) {
         errors.push('The repeat password should be equal to the password');

      }

      if (errors.length > 0) {
         throw new Error(errors.join(', '));
      }

      await userService.register(userData);

      const token = await userService.login(req.body.email, req.body.password);

      res.cookie(TOKEN_NAME, token, {
         httpOnly: true
      });

      res.redirect('/');

   } catch (error) {
      res.render('users/register', { title: 'Register page', errors: error.message.split(', '), data: req.body });
   }
});

router.get('/login', isUser, (req, res) => {
   try {
      res.render('users/login', { title: 'Login page' });

   } catch (error) {
      res.render('404', { title: 'Error' });
   }
});

router.post('/login', isUser, async (req, res) => {
   try {
      const { email, password } = req.body;

      let errors = [];

      if (!validator.isEmail(email)) {
         errors.push('The email should be in the following format: <name>@<domain>.<extension> ');

      }
      if (!validator.isLength(password, { min: 4 })) {
         errors.push('The password should be at least 4 characters long');

      }

      if (errors.length > 0) {
         throw new Error(errors.join(', '));
      }

      const token = await userService.login(email, password);

      res.cookie(TOKEN_NAME, token, {
         httpOnly: true
      });

      res.redirect('/');

   } catch (error) {

      res.render('users/login', { title: 'Login page', errors: error.message.split(', '), data: req.body });

   }
});

router.get('/logout', isAuth, (req, res) => {
   try {
      res.clearCookie(TOKEN_NAME);
      res.redirect('/');

   } catch (error) {
      res.render('404', { title: 'Error' });
   }
});

router.get('/my-posts', isAuth, async (req, res) => {
   try {
      const user = await userService.getUser(req.user._id);

      user.myPosts.map(x => x.fullName = req.user.fullName);

      res.render('users/my-posts', { title: 'Profile page', posts: user.myPosts })

   } catch (error) {

      res.render('404', { title: 'Error' });
   }
});


module.exports = router;