const express = require('express');
const { env } = require('process');

const config = require('./config/config.json')[process.env.NODE_EVN];


const app = express();

app.listen(5000, console.log.bind(console, 'Hallo'));