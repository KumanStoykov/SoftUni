const handlebars = require('express-handlebars');

module.exports = (app) => {

    const hbs = handlebars.create({
        extname: 'hbs'
    });

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
}