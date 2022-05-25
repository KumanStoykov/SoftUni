const Publication = require('../models/Publication');

const getAll = async () => await Publication.find({}).lean();

const create = async (title, paintingTechnique, picture, certificate) => {
    let publication = new Publication({
        title,
        paintingTechnique,
        picture,
        certificate
    });
    return await publication.save();
};

const publicationService = {
    getAll,
    create,
};

module.exports = publicationService;