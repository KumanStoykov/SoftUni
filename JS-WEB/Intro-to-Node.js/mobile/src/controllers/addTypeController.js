const { loadTemplate, renderLayout } = require('../utils/templateUtil');

const formidable = require('formidable');
const dataService = require('../services/dataServices');


exports.addTypeController = async (req, res) => {

    if (req.method == 'POST') {
        const form = formidable({ multiples: true });

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(err.httpCode || 400, { 'Content-type': 'text/plain' });
                res.end(String(err));
                return;
            }
            dataService.createType({type: fields.type });
            res.writeHead(302, {
                'Location': 'add-type'
            });
            res.end();

        });

    } else {

        let addType = await loadTemplate('addType');

        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write(await renderLayout(addType));

        res.end();
    }

};