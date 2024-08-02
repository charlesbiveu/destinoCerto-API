const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc.swagger.json');
const LoginController = require('../controllers/LoginController')
const usersRoutes = require('./users.routes');
const recycleTypesRoutes = require('./recycleTypes.routes');
const collectionPointsRoutes = require('./collectionPoints.routes');


const validateToken = require('../middlewares/validateToken')

const routes = Router();

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.get('/', (req, res) => {
  res.send('Hello World! Destino Certo dando um "salve" no planeta.');
});

routes.post('/login', LoginController.login /*
  /*
      #swagger.tags = ['Login'],
      #swagger.description = 'Endpoint para logar um usuário e criar um token para acesso',
      #swagger.parameters['loginUsuario'] = {
          in: 'body',
          description: 'Login do usuário',
          required: true,
          schema: { 
              $email: "nelsonmarcosoliveira@kimmay.com.br",
              $password: "Teste123!"
          }
      }
  */
)


routes.use('/usuarios',  usersRoutes);
routes.use('/tipos-reciclagem', validateToken, recycleTypesRoutes);
routes.use('/pontos-coleta', validateToken,  collectionPointsRoutes);

module.exports = routes;