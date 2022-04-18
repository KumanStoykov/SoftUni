const Cat = require('../models/Cat');
const Breed = require('../models/Breed');

const getAllCats = () => Cat.cats;

const createCat = (name, description, upload, breed) => {

    const cat = new Cat(name, description, upload, breed);
    console.log(cat)
    Cat.add(cat);
}

const getAllBreeds = () => Breed.breeds;

const createBreed = (breed) => {
    const addBreed = new Breed(breed);

    Breed.add(addBreed);
}

const catServices = {
    getAll: getAllCats,
    createCat,
    getAllBreeds,
    createBreed
};


module.exports = catServices;