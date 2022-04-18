const Cat = require('../models/Cat');
const Breed = require('../models/Breed');

const getAllCats = () => Cat.cats;

const getById = (id) => {
    const cats = Cat.cats;
    return cats.find(c => id == c.id);
};

const createCat = (name, description, upload, breed) => {

    const cat = new Cat(name, description, upload, breed);

    Cat.add(cat);
}

const getAllBreeds = () => Breed.breeds;

const createBreed = (breed) => {
    const addBreed = new Breed(breed);

    Breed.add(addBreed);
}

const editCat = (catId, cat) => Cat.findByIdAndUpdate(catId, cat);

const catDelete = (catId) => Cat.deleteCat(catId);

const catServices = {
    getAllCats,
    createCat,
    getAllBreeds,
    createBreed,
    getById,
    editCat,
    catDelete
};


module.exports = catServices;