const express = require('express');

const config = require('./config/config.json')[process.env.NODE_EVN];
const initDatabase = require('./config/initDatabase');

const app = express();


initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `App listen in port ${config.PORT}...`));

    })
    .catch(err => console.log('Application init failed', err));
