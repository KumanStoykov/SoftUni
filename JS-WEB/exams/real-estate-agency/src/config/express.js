const express = require('express');
const cookieParser = require('cookie-parser');

const initHandlebars = require('./handlebars');

module.exports = (app) => {
    initHandlebars(app);

    app.use('/public', express.static('./src/public'));

    app.use(express.urlencoded({ extended: true }));

    app.use(cookieParser());

}