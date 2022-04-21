const Cat = require('../models/Cat');
const Breed = require('../models/Breed');


const getAllCats = () => Cat.cats;
const getAllCats = async () => Cat.find({}).lean();

const getById = (id) => {
    const cats = Cat.cats;
    return cats.find(c => id == c.id);
};

const createCat = (name, description, upload, breed) => {
const getById = async (id) => await Cat.findById(id).lean();

    const cat = new Cat(name, description, upload, breed);

    Cat.add(cat);
}
const createCat = async (name, description, imageUrl, breed) => {

const getAllBreeds = () => Breed.breeds;
    const cat = new Cat({ name, description, imageUrl, breed });

const createBreed = (breed) => {
    const addBreed = new Breed(breed);

    Breed.add(addBreed);
}
    return await cat.save();
};

const editCat = (catId, cat) => Cat.findByIdAndUpdate(catId, cat);
const editCat = async (catId, cat) => await Cat.findByIdAndUpdate(catId, cat).lean();

const catDelete = (catId) => Cat.deleteCat(catId);
const catDelete = async (catId) => Cat.deleteOne(catId);

const search = (searchInput) => {
    const result = Cat.cats.filter(c => c.name.toLowerCase().includes(searchInput.toLowerCase()));
    const result = getAllCats().filter(c => c.name.toLowerCase().includes(searchInput.toLowerCase()));

    return result;
}

const catServices = {
    getAllCats,
    createCat,
    getAllBreeds,
    createBreed,
    getById,
    editCat,
    catDelete,
    search
};


module.exports = catServices;