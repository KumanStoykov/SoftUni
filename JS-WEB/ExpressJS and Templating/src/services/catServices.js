const Cat = require('../models/Cat');

const getAll = () => Cat.cats;

const catServices = {
    getAll,
};

module.exports = catServices;