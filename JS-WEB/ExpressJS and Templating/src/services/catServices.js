const Cat = require('../models/Cat');


const getAllCats = async () => Cat.find({}).lean();

const getById = async (id) => await Cat.findById(id).lean();

const createCat = async (name, description, imageUrl, breed) => {

    const cat = new Cat({ name, description, imageUrl, breed });

    return await cat.save();
};

const editCat = async (catId, cat) => await Cat.findByIdAndUpdate(catId, cat).lean();

const catDelete = async (catId) => Cat.deleteOne({_id: catId});

const search = (searchInput) => {
    const result = getAllCats().filter(c => c.name.toLowerCase().includes(searchInput.toLowerCase()));

    return result;
}

const catServices = {
    getAllCats,
    createCat,
    getById,
    editCat,
    catDelete,
    search
};


module.exports = catServices;