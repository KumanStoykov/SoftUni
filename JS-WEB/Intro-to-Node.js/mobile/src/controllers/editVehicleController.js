const fs = require('fs/promises');
const { loadTemplate, renderLayout } = require('../utils/templateUtil');
const { formFilling } = require('../utils/formFilling');
const formidable = require('formidable');


const dataServices = require('../services/dataServices');

exports.editVehicleController = async (req, res) => {
    try {
        const id = req.url.split('=')[1];

        if (req.method == 'POST') {
            const form = formidable({ multiples: true });

            form.parse(req, async (err, fields, files) => {
                if (err) {
                    res.writeHead(err.httpCode || 400, { 'Content-type': 'text/plain' });
                    res.end(String(err));
                    return;
                }
                
                const filepath = files.upload.filepath;

                const originalFilename = files.upload.originalFilename;
                const targetPath = './src/content/images/' + originalFilename;

                await fs.rename(filepath, targetPath);

                fields.imageUrl = targetPath.slice(5);

                await dataServices.editVehicle(id, { ...fields });
                
                res.writeHead(302, {
                    location: '/'
                });
                res.end();
            });
            


        } else {
            const editView = await loadTemplate('editVehicle');

            const currentVehicles = await dataServices.getOne(id);
            const typeData = await dataServices.getTypes();

            const isEdit = true;

            let result = formFilling(editView, currentVehicles, isEdit);
            let addTypes = typeData.map(x => `<option value="${x.type}">${x.type}</option>`).join('')

            result = result.replace('{{type}}', addTypes)

            res.write(await renderLayout(result));
            res.end()

        }

    } catch (err) {
        res.writeHead(302, {
            location: '/error'
        });
        res.end();
    }
};
