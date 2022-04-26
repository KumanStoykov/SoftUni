const Breed = require('../models/Breed');

const getAllBreeds = () => Breed.find({}).lean();

const createBreed = (breed) =>  Breed.create({ breed });

const breedService = {
    getAllBreeds,
    createBreed
};

module.exports = breedService;