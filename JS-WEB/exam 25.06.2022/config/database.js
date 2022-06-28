const mongoose = require('mongoose');

module.exports = (connectionString) => {
    return mongoose.connect(connectionString);
}