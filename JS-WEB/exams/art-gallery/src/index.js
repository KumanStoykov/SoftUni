const express = require('express');
const { initHandlebars } = require('./config/handlebars');

const app = express();

initHandlebars(app);

app.get('/', (req, res) => {
    res.send('Hallo')
})
const PORT = 3000;

app.listen(PORT, console.log.bind(console, `App listen an ${PORT}`));