const express = require('express');

const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

const initHandlebars = require('./config/handlebars');


const app = express();

initHandlebars(app);


app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));