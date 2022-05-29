const express = require('express');
const cookiesParser = require('cookie-parser'); 


const router = require('./router');
const initHandlebars = require('./handlebars');
const authMiddleware = require('../middlewares/authMiddleware');


module.exports = (app) => {

    initHandlebars(app);
    
    app.use('/static', express.static('./src/static'));

    app.use(express.urlencoded({ extended: true }));
    
    app.use(cookiesParser());

    app.use(authMiddleware.auth);
        
    app.use(router);    
}