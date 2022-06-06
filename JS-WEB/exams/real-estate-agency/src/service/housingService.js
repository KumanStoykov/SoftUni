const Housing = require('../models/Housing');

exports.getLastThree = async () => await Housing.find({}).sort({ _id: -1 }).limit(3).lean();

exports.getAll = async () => await Housing.find({}).lean();

exports.getOne = async (id) => await Housing.findById(id).populate('rentedHome').populate('owner').lean();

exports.getAllRented = async (id) => {
    const allRented = await Housing.findById(id).populate('rentedHome').select('rentedHome').lean();

    return allRented.rentedHome;

};

exports.create = async (offer) => {
    
    const created = await Housing.create(offer);
    return created;
};

exports.update = (id, data) => {
    const hosing = Housing.findByIdAndUpdate(id, data);
    return hosing;
}

exports.rentedHome = async (userId, housingId) => {

    const currentHousing = await Housing.findById(housingId);

    currentHousing.rentedHome.push(userId);
    currentHousing.availablePieces -= 1;

    return await currentHousing.save();      
    
};

exports.deleteHosing = (id) => Housing.findByIdAndDelete(id);

exports.search = async (input) => {
    const regEx = new RegExp(input, 'i')
    const result = await Housing.find({ type: regEx }).lean();

    return result;
}
