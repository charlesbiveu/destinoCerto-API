const { Router } = require('express');
const RecycleTypeController = require('../controllers/RecycleTypeController');

const recycleTypesRoutes = new Router();

recycleTypesRoutes.get('/listar', RecycleTypeController.listAll
  /*
    #swagger.tags = ['Tipos de Reciclagem'],
    #swagger.description = 'Endpoint para listar todos os tipos de materiais reciclagem que serão veiculados aos pontos de coleta'
  */
);

module.exports = recycleTypesRoutes;
