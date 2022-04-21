const express = require('express');
const path = require('path');
const initDatabase = require('./config/database');

const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const router = require('./router');


const app = express();

app.use(express.urlencoded({ extended: true }));


//Handlebars config init
require('./config/handlebars')(app);

app.use(express.static(path.resolve(__dirname, './content')));


app.use(router);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        console.log('Is connect')
        app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));
    })
    .catch(err =>  {
        console.log('Application init failed: ', err);
    })
