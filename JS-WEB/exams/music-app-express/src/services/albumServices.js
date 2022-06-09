const Album = require('../models/Album');

exports.getAllDesc = () => Album.find().sort({_id: -1}).lean();

exports.getOne = (id) => Album.findById(id).populate('creator').lean();

exports.createAlbum = async (albumData) => {
    const album = await Album.create(albumData);

    return album;
};

exports.editAlbum = (id, album) => Album.findByIdAndUpdate(id, album);

exports.deleteAlbum = (id) => Album.findByIdAndDelete(id);

exports.search = (search) => {
    const regEx = new RegExp(search, 'i');

    return Album.find({name: regEx}).lean();
};