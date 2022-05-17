const http = require('http');

const { router } = require('./router');

const PORT = 5000;

const app = http.createServer(requestHandler);

async function requestHandler(req, res) {
    const url = new URL(req.url, 'http://localhost');

   await router(req, res, url.pathname);   

}

app.listen(PORT, console.log.bind(console, 'App listen an port 5000....'));
