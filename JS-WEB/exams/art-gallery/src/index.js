const express = require('express');

const config = require('./config/config.json')[process.env.NODE_ENV];
const initDatabase = require('./config/database');
const expressConfig = require('./config/express');

const app = express();

expressConfig(app);


initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {

        app.listen(config.PORT, console.log.bind(console, `App listen an port:${config.PORT}`));
    })
    .catch(err => {
        console.log('Application init failed:', err);
    });
