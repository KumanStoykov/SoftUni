const http = require('http');
const fs = require('fs');
const formidable = require('formidable'); 

const port = 3000;

const app = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            fs.readFile('./views/home/index.html', (err, result) => {
                if(err) {
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
                if(err) {
                    err.statusCode = 404;
                   return res.end();
                }

                res.write(result);
                res.end();
            });
            break;        
        case '/cats/add-cat':

        if(req.method == 'GET') {

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            fs.readFile('./views/addCat.html', (err, result) => {
                if(err) {
                    err.statusCode = 404;
                   return res.end();
                }
                res.write(result);
                res.end();
            });
        } else if (req.method == 'POST') {

            const form = new formidable.IncomingForm();

            form.parse(req, (err, fields, files) => {
                // console.log(fields);
                console.log('/////////////////////////////////////////////');
                console.log(fields);

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

