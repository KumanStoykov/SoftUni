const express = require('express');

const configEvn = require('./config/config.json')[process.env.NODE_ENV];

const initDatabase = require('./config/mongodb');
const expressConfig = require('./config/express');

const app = express();

expressConfig(app);

initDatabase(configEvn.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(configEvn.PORT, console.log.bind(console, `App listen in port: ${configEvn.PORT}...`));
    })
    .catch(error => console.log('Init database failed', error));