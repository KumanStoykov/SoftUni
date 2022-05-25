const express = require('express');
const router = require('./router'); 


const config = require('./config/config.json')[process.env.NODE_ENV];
const initHandlebars = require('./config/handlebars');
const initDatabase = require('./config/database');


const app = express();

app.use(express.urlencoded({ extended: true }));

initHandlebars(app);

app.use('/static', express.static(__dirname + '/static'));

app.use(router);


initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {

        app.listen(config.PORT, console.log.bind(console, `App listen an port:${config.PORT}`));
    })
    .catch(err => {
        console.log('Application init failed:', err);
    })
