const express = require('express');
const cookieParser = require('cookie-parser');

const initHandlebars = require('./initHandlebars');
const isLoggedMiddleware = require('../middlewares/isLoggedMiddleware');
const router = require('./router');




module.exports = (app) =>  {

    initHandlebars(app);

    app.use(express.static('./src/static'));

    app.use(express.urlencoded({ extended: true }));

    app.use(cookieParser());

    app.use(isLoggedMiddleware);

    app.use(router);
};