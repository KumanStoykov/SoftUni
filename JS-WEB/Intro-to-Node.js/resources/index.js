const http = require('http');


const router = require('./router.js');

const homeController = require('./controllers/homeController.js');
const addCatController = require('./controllers/addCatController.js'); 
const addBreedController = require('./controllers/addBreedController.js'); 

const createController = require('./controllers/createController.js'); 
const deleteController = require('./controllers/deleteController.js');
const shelterController = require('./controllers/shelterController.js');


router.get('/', homeController);
router.get('/cats/add-cat', addCatController);
router.get('/cats/add-breed', addBreedController);
router.get('/cats/catShelter', shelterController);

router.post('/create', createController);

router.get('/delete', deleteController);



const port = 3000;
const app = http.createServer(requestHandler);

function requestHandler(req, res) {
    const url = new URL(req.url, 'http://localhost');

    const handler = router.match(req.method, url.pathname);

    handler(req, res);
}

app.listen(port);

