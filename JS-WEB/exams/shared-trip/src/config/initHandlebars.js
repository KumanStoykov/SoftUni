const handlebars = require('express-handlebars');

module.exports = (app) => {
    app.set('views', './src/views');

    const hbs = handlebars.create({
        extname: 'hbs'
    });
    
    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
}