const express = require('express');

const config = require('./src/config/config.json')[process.env.NODE_ENV || 'development'];


const app = express();


app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));