const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

const storageService = require('./services/storageServices.js');
const db = require('./db.json');

const port = 3000;

const app = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            fs.readFile('./views/index.html', (err, result) => {
                if (err) {
                    err.statusCode = 404;
                    return res.end();
                }

                res.write(result);
                res.end();
            });
            break;
        case '/content/styles/site.css':
            res.writeHead(200, {
                'Content-Type': 'text/css'
            });
            fs.readFile('./content/styles/site.css', (err, result) => {
                if (err) {
                    err.statusCode = 404;
                    return res.end();
                }

                res.write(result);
                res.end();
            });
            break;
        case '/cats/add-cat':

            if (req.method == 'GET') {

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                fs.readFile('./views/addCat.html', 'utf-8', (err, result) => {
                    if (err) {
                        err.statusCode = 404;
                        return res.end();
                    }
                    let mappedBreeds = db.breeds.map(b => {
                       return `<option value="${b.breed}">${b.breed}</option>`
                    });
                    console.log(mappedBreeds);
                    
                    result = result.replace('{{breeds}}', mappedBreeds);

                    res.write(result);
                    res.end();
                });
            } else if (req.method == 'POST') {

                const form = new formidable.IncomingForm();

                form.parse(req, (err, fields, files) => {

                    storageService.saveCat(fields)
                        .then(() => {

                            res.end();
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    res.writeHead(302, {
                        'Location': '/'
                    });
                    res.end();
                });

            }
            break;

        case '/cats/add-breed':

            if (req.method == 'GET') {

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                fs.readFile('./views/addBreed.html', (err, result) => {
                    if (err) {
                        err.statusCode = 404;
                        return res.end();
                    }
                    res.write(result);
                    res.end();
                });
            } else if (req.method == 'POST') {

                const form = new formidable.IncomingForm();

                form.parse(req, (err, fields, files) => {

                    storageService.saveBreed(fields)
                        .then(() => {

                            res.end();
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    res.writeHead(302, {
                        'Location': '/cats/add-breed'
                    });
                    res.end();
                });
            }
            break;
        default:
            res.statusCode = 404;
            res.end();
            break;
    }
});

app.listen(port);

