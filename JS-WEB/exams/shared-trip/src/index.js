const express = require('express');

const initDatabase = require('./config/initMongodb');
const configJson = require('./config/config.json')[process.env.NODE_EVN];
const expressConfig = require('./config/expressConfig');


const app = express();

expressConfig(app);

initDatabase(configJson.CONNECTION_STRING)
    .then(() => {
        app.listen(configJson.PORT, console.log.bind(console, `App is listen in port:${configJson.PORT}...`))
    })
    .catch(error => console.log('Initial database field!', error));