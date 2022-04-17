const express = require('express');
const path = require('path');

const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];


const homeController = require('./controllers/homeController');



const app = express();
//Handlebars config 
require('./config/handlebars')(app);

app.use(express.static(path.resolve(__dirname, './content')));


app.use(homeController);


app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));