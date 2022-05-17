const { loadTemplate, renderLayout } = require('../utils/templateUtil');


exports.addTypeController = async (req, res) => {

    let addType = await loadTemplate('addType');

    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.write(await renderLayout(addType));

    res.end();
};