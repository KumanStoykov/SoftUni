const express = require('express');
const path = require('path');
const cookiesParser = require('cookie-parser');

const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const router = require('./router');
const initDatabase = require('./config/database');
const authMiddleware = require('./middlewares/authMiddleware');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware'); 


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use((cookiesParser()));
app.use(authMiddleware.auth);

//Handlebars config init
require('./config/handlebars')(app);

app.use(express.static(path.resolve(__dirname, './content')));

app.use(router);
app.use(errorHandlerMiddleware);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));
    })
    .catch(err =>  {
        console.log('Application init failed: ', err);
    })
