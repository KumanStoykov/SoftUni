const handlebars = require('express-handlebars');
const path = require('path');

module.exports = (app) => {
    app.set('views', path.resolve(__dirname, '../views'));

    const hbs = handlebars.create({
        extname: 'hbs'
    });

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
}; 