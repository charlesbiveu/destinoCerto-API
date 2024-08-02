const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc.swagger.json');
const usersRoutes = require('./users.routes');
const recycleTypesRoutes = require('./recycleTypes.routes');

const routes = Router();

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.get('/', (req, res) => {
  res.send('Hello World! Destino Certo dando um "salve" no planeta.');
});


routes.use('/usuarios', usersRoutes);
routes.use('/tipos-reciclagem', recycleTypesRoutes);


module.exports = routes;