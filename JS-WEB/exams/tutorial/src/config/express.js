const express = require('express');

const initHandlebars = require('./handlebars')
const cookieParser = require('cookie-parser');
const isLoggedMiddleware = require('../middlewares/isLoggedMiddleware');
const router = require('./router');


module.exports = (app) => {

    initHandlebars(app);

    app.use(express.urlencoded({ extended: true }));

    app.use(express.static('./src/static'));

    app.use(cookieParser());

    app.use(isLoggedMiddleware); 

    app.use(router);
}