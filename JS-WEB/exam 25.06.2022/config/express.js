const express = require('express');
const cookieParser = require('cookie-parser');

const handlebars = require('./handlebars');
const isLoggedMiddleware = require('../middlewares/isLoggedMiddleware');
const router = require('./router');

module.exports = (app) => {

    handlebars(app);

    app.use(express.urlencoded({ extended: true }));

    app.use(express.static('./static'));

    app.use(cookieParser());

    app.use(isLoggedMiddleware);

    app.use(router);
}