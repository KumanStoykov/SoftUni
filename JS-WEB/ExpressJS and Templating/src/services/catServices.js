const Cat = require('../models/Cat');

const getAll = () => Cat.cats;

const create = (name, description, upload, breed) => {
    
     const cat = new Cat(name, description, upload, breed);
     Cat.add(cat);
}
const catServices = {
    getAll,
    create,
};


module.exports = catServices;