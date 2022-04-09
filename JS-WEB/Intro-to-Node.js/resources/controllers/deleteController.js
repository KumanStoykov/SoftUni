

function deleteController(req, res) {

    res.writeHead(302, {
        'Location': '/'
    });
    res.end();
} 

module.exports = deleteController;