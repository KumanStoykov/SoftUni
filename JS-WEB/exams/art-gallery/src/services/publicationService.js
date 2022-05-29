const Publication = require('../models/Publication');
const User = require('../models/User');

const getAll = async () => await Publication.find({}).lean();

const getOne = async (id) => await Publication.findById(id).populate('author').populate('userShared').lean();

const create = async (title, paintingTechnique, picture, certificate, author) => {
    let publication = new Publication({
        title,
        paintingTechnique,
        picture,
        certificate,
        count: 0,
        author
    });

    let currentUser = await User.findById(author);
    currentUser.myPublications.push(publication);
    
    return Promise.all([currentUser.save(), publication.save()]);
};

const sharedPublication = async (pubId, userId) => {
    const currentPublication = await Publication.findById(pubId); 
    const currentUser = await User.findById(userId);

    currentUser.myShared.push(pubId);

    currentPublication.count += 1;

    currentPublication.userShared.push(userId);

    return Promise.all([currentUser.save(), currentPublication.save()]);
};

const edit = async (id, data) => {

  let put =  await Publication.findByIdAndUpdate(id, { ...data });

  return put;
};

const deletePublication = async (id) => {
    return await Publication.findByIdAndDelete(id);
}

const publicationService = {
    getAll,
    getOne,
    create,
    sharedPublication,
    edit,
    deletePublication,
};

module.exports = publicationService;