const Crypto = require('../models/Crypto');


exports.getAll = () => Crypto.find();

exports.getOne = (id) => Crypto.findById(id).populate('buyCrypto').populate('owner');

exports.create = (cryptoData) => Crypto.create(cryptoData);

exports.buy = async (cryptoId, userId) => {    
    
    const crypto = await Crypto.findById(cryptoId)
  
    crypto.buyCrypto.push(userId);

    return crypto.save();    
};

exports.edit = (id, data) =>  Crypto.findByIdAndUpdate(id, data);

exports.delete = (id) =>  Crypto.findByIdAndDelete(id);

exports.search = (search, method) => {
    const regEx = new RegExp(search, 'i');
    return Crypto.find({ name: regEx,  paymentMethod: method});
};
