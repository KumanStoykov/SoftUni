const fs = require('fs')

function static(req, res) {

    const filename = req.url.slice(8);
    const file = fs.createReadStream(`./s`)
   
}

module.exports = static;