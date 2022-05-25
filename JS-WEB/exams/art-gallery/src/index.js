const express = require('express');
const { initHandlebars } = require('./config/handlebars');

const router = require('./router'); 

const app = express();

app.use('/static', express.static(__dirname + '/static'));

initHandlebars(app);

app.use(router);

const PORT = 3000;

app.listen(PORT, console.log.bind(console, `App listen an ${PORT}`));