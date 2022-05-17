const fs = require('fs/promises');

exports.contentController = async (req, res) => {
    let filename = req.url;
    console.log(filename)
    const file = await fs.readFile(`./src/${filename}`);
    
    let type;
    
    if(filename.includes('css')) {
        type = 'text/css';        
    } else if(filename.includes('jpg') || filename.includes('jpeg')){
        type = 'image/jpg'
    } else if(filename.includes('png')) {
        type = 'image/png';
    }


    res.writeHead(200, {
        'Content-type': type
    });
    res.write(file.toString())
    res.end();
}