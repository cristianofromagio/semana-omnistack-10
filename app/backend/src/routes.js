const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

// routes.get('/users', (request, response) => {
//     console.log(request.query);
//     return response.json({message: 'Hello World'});
// });

// routes.put('/users/:id', (request, response) => {
//     console.log(request.params);
//     return response.json({message: 'Hello World'});
// });

module.exports = routes;