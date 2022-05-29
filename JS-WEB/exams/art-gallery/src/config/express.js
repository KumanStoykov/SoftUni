const express = require('express');
const cookiesParser = require('cookie-parser'); 


const router = require('./router');
const initHandlebars = require('./handlebars');
const isLoggedMiddleware = require('../middlewares/isLoggedMiddleware');


module.exports = (app) => {

    initHandlebars(app);
    
    app.use('/static', express.static('./src/static'));

    app.use(express.urlencoded({ extended: true }));
    
    app.use(cookiesParser());

    app.use(isLoggedMiddleware.isLogged);
        
    app.use(router);    
}