const { homeController } = require('./controllers/homeController');
const { addTypeController } = require('./controllers/addTypeController');
const { addVehicleController } = require('./controllers/addVehicleController');
const { contentController } = require('./controllers/contentController');
const { beyVehicleController } = require('./controllers/beyVehicleController');

const routes = {
    '/': homeController,
    '/add-type': addTypeController,
    '/add-vehicle': addVehicleController,
    '/bey-vehicle': beyVehicleController,
    '/edit': './src/views/edit.html',
    '/search': './src/views/search.html',
};

exports.router = async (req, res, pathname) => {
    
    if (pathname.includes('content')) {

        contentController(req, res);

    } else if (routes[pathname]) {
        let handler = await routes[pathname];
         await handler(req, res);

    } else {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        
        res.end('<h1>Not Found</h1>');
    }
}

