const {Router} = require('express');

const routes = Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc.swagger.json');

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = routes;