const express = require('express');

const initDatabase = require('./config/initMongodb');
const configJson = require('./config/config.json')[process.env.NODE_EVN];


const app = express();

initDatabase(configJson.CONNECTION_STRING)
    .then(() => {
        app.listen(configJson.PORT, console.log.bind(console, `App is listen in port:${configJson.PORT}`))
    })
    .catch(error => console.log('Initial database is field!', error));