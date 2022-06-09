const express = require('express');

const config = require('./config/config.json')[process.env.NODE_EVN];
const initDatabase = require('./config/initDatabase');
const expressConfig = require('./config/expressConfig');


const app = express();

expressConfig(app);

initDatabase(config.CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `App listen in port: ${config.PORT}...`));
        
    })
    .catch(err => console.log('Connection with Database is felid!', err));
