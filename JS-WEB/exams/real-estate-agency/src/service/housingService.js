const Housing = require('../models/Housing');

exports.getLastThree = async () => await Housing.find({}).sort({ _id: -1 }).limit(3).lean();

exports.getAll = async () => await Housing.find({}).lean();

exports.crate = async (name, type, year, city, image, description, availablePieces, owner) => {
    const offer = {
        name,
        type,
        year,
        city,
        image,
        description,
        availablePieces,
        owner
    }
    const created = await Housing.create(offer);
    return created;
};