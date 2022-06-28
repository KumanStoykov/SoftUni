const express = require('express');

const initDatabase = require('./config/database');
const config = require('./config');
const expressConfig = require('./config/express');

const app = express();

expressConfig(app);


initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, 'App listen in port ', config.PORT));
    })
    .catch(err => console.log('Init database is failed', err));
