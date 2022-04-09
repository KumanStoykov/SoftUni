const staticFile = require('./controllers/static.js');
const handlers = {};

function match(method, url) { 

    if(method == 'GET' && url.startsWith('/content/')) {
        return staticFile;
    }

    const methods = handlers[url] || {};
    
    const handler = methods[method];

    if(handler == undefined) {
        return defaultHandler;
    } else {
        return handler;
    }    
}

function registerHandler(method, url, handler) {
    let methods = handler[url];

    if(methods == undefined) {
        methods = {};
        handlers[url] = methods;
    }

    handlers[url][method] = handler;
}

function defaultHandler(req, res) {
    res.statusCode = 404;
    res.write('Not Found');
    res.end();
}

module.exports = {
    registerHandler,
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params),
    delete: (...params) => registerHandler('DELETE', ...params),
    match
}