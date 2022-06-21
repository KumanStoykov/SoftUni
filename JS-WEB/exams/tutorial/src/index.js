const express = require('express');

const config = require('./config');

const initDatabase = require('./config/mongodb');
const expressConfig = require('./config/express');

const app = express();

expressConfig(app);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `App listen in port: ${config.PORT}...`));
    })
    .catch(error => console.log('Init database failed', error));