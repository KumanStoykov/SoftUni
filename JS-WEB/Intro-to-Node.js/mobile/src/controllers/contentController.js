const fs = require('fs/promises');

exports.contentController = async (req, res) => {
    let file = await fs.readFile('./src/content/styles/site.css');

    res.writeHead(200, {
        'Content-type': 'text/css'
    });
    res.write(file.toString())
    res.end();
}