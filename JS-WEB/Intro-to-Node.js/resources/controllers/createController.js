const storageService = require('../services/storageServices.js');
const formidable = require('formidable');
const fs = require('fs/promises');



function createController(req, res) {

    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
        let fieldsLength = Object.keys(fields).length;

        // Add image
        const filePath = files.upload.filepath;
        const name = files.upload.originalFilename;
        const targetPath = './content/images/' + name;


        await fs.rename(filePath, targetPath);

        let locationRedirect;
        let catDb;

        if (fieldsLength > 1) {
            locationRedirect = '/';
            catDb = storageService.saveCat;

        } else {
            locationRedirect = '/cats/add-breed';
            catDb = storageService.saveBreed;
        }

        // Add to JSON data
        fields.image = targetPath;

        catDb(fields)
            .then(() => {

                res.end();
            })
            .catch(err => {
                res.statusCode = 404;
                res.write(err);
            });

        res.writeHead(302, {
            'Location': locationRedirect
        });
        res.end();

    });
}
module.exports = createController;