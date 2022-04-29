const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');
const { auth } = require('./middlewares/authMiddleware');
const app = express();

mongoose.connect('mongodb://localhost:27017/furniture')
    .then(() => {
        console.log('DB connection');

    });

mongoose.connection.on('error', (error) => {
    console.log('DB Error: ', error);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Manual set CORS
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');

//     next();
// });

//Set with library 
app.use(cors());
app.use(auth);

app.use(routes);

//Global Error handler
app.use((err, req, res, next) => {
    res.status(err.statusCode || 400).json({ message: err.message })

});

app.listen(3030, console.log.bind(console, 'App is running on port 3030'));