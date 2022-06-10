const express = require('express');

const initHandlebars = require('./initHandlebars');
const cookieParser = require('cookie-parser');
const router = require('./router');

module.exports = (app) => {

    app.use(express.urlencoded({ extended: true }));

    app.use(cookieParser());

    app.use(initHandlebars(app));

    app.use(router);
}

