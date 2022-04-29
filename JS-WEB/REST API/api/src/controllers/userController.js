const router = require('express').Router();
const userService = require('../services/userService');

router.post('/register', async (req, res, next) => {
    let { email, password } = req.body;

    try {
        let user = await userService.register({ email, password });
        
        let { accessToken, refreshToken } = await userService.login({ email, password });        

        res.json({
            _id: user._id,
            email: user.email, 
            accessToken,
            refreshToken
        });

    } catch (err) {
        
        next(err);
    }

});

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    let { user, accessToken, refreshToken } = await userService.login({ email, password });

    res.json({
        _id: user._id,
        email: user.email,
        accessToken,
        refreshToken
    });
});
router.get('/logout', (req, res) => {
    res.json({ok: true});
});

router.post('/refresh', async (req, res) => {
    let refreshToken = req.body.refreshToken;

   let { accessToken, refreshToken: newRefreshToken } =  await userService.refresh(refreshToken);

   res.json({
       accessToken,
       refreshToken: newRefreshToken
   });

});


module.exports = router;