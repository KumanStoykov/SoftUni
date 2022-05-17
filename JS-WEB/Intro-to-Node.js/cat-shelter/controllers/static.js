const fs = require('fs');


module.exports = (req, res) => {
    const filename = req.url;
    
    const file = fs.createReadStream(`.${filename}`);

    let type;

    if(filename.endsWith('css')){
        type = 'text/css';
    } else if(filename.endsWith('jpg') || filename.endsWith('jpeg')){
        type = 'image/jpeg';

    } else if(filename.endsWith('png')) {
        type = 'image/png';
    }

    file.on('error', () => {
        res.write('Not found');
        res.end();
    });

    file.once('data', data => {
        res.writeHead(200, {
            'Content-type': type
        });
        send(data);
        file.on('data', send);
    });
    file.on('end', () => res.end());

    const send = data => res.write(data);
}