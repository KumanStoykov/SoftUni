const { loadTemplate, renderLayout } = require('../utils/templateUtil');


exports.homeController = async (req, res) => {

    let home = await loadTemplate('home');
    let search = true;
    

    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.write(await renderLayout(home, search));

    res.end();
};