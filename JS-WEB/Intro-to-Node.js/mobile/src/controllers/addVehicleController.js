const fs = require('fs/promises');
const { loadTemplate, renderLayout } = require('../utils/templateUtil');
const dataServices = require('../services/dataServices');

const formidable = require('formidable');
const dataService = require('../services/dataServices');


exports.addVehicleController = async (req, res) => {
    try {
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
    
                dataService.createVehicle({ ...fields });
    
                res.writeHead(302, {
                    'Location': '/'
                });
                res.end();
            });
    
        } else {
            let addVehicle = await loadTemplate('addVehicle');
            let typeData = await dataServices.getTypes();
            let addTypes = typeData.map(x => `<option value="${x.type}">${x.type}</option>`).join('');
    
            addVehicle = addVehicle.replace('{{type}}', addTypes);
    
    
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            res.write(await renderLayout(addVehicle)); 
    
            res.end();
        }

    } catch(err) {
        res.writeHead(302, {
            location: '/error'
        });
        res.end();
    }




};