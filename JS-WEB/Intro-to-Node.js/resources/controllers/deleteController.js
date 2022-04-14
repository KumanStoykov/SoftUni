const db = require('../db.json');
const fs = require('fs/promises');

async function deleteController(req, res) {
    const id = req.url.split('=');

    const allDb = await fs.readFile('./db.json');
 

    res.writeHead(302, {
        'Location': '/'
    });
    res.end();
} 

module.exports = deleteController;