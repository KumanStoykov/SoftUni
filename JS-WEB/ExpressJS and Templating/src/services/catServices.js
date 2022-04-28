const Cat = require('../models/Cat');


const getAllCats = () => Cat.find({}).lean();

const getById = (id) => Cat.findById(id).lean();

const createCat = (name, description, imageUrl, breed, userId) => {

    const cat = new Cat({ name, description, imageUrl, breed, owner: userId });

    return cat.save();
};

const editCat = (catId, cat) => Cat.findByIdAndUpdate(catId, cat);

const catDelete = (catId) => Cat.deleteOne({ _id: catId });

const search = async (searchInput) => {
    const searchCats = await getAllCats();

    const result = searchCats.filter(c => c.name.toLowerCase().includes(searchInput.toLowerCase()));

    return result;
};

const catServices = {
    getAllCats,
    createCat,
    getById,
    editCat,
    catDelete,
    search
};


module.exports = catServices;