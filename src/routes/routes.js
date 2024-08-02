const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc.swagger.json');
const usersRoutes = require('./users.routes');

const routes = Router();

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.use('/usuarios', usersRoutes);

routes.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = routes;