const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const router = require('./router');


const app = express();

app.use(express.urlencoded({ extended: true }));
// Enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//Handlebars config 
require('./config/handlebars')(app);

app.use(express.static(path.resolve(__dirname, './content')));


app.use(router);


app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));