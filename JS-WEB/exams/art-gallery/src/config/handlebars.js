const handlebars = require('express-handlebars');
const path = require('path');

exports.initHandlebars = (app) => {
    //Change directory
    app.set('views', path.resolve('./src/views'));

    const hbs = handlebars.create({
        extname: 'hbs'
    });

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
};