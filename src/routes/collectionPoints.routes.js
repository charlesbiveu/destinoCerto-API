const { Router } = require('express');
const CollectionPointController = require('../controllers/CollectionPointController');
const validateToken = require('../middlewares/validateToken');

const collectionPointsRoutes = new Router();

collectionPointsRoutes.post(
  '/',
  validateToken,
  CollectionPointController.createCollectionPoint /*
    #swagger.tags = ['Pontos de Coleta'],
    #swagger.description = 'Endpoint para criar um ponto de coleta',
   #swagger.parameters['criarPontoDeColeta'] = {
        in: 'body',
        description: 'Dados do ponto de coleta. Importante para teste recycle_type deve ser um array com valores de 1 a 20',
        required: true,
        schema: {
            $name: "Ponto Dakir Polidoro",
            $description: "Este é um ponto de coleta da comcap para recolhimento de vidros",
            $recycle_types: "Vidro, Papel, Plástico",
            $postalcode: "88063-565",
            $street: "Rua Radialista Dakir Polidoro",
            $neighborhood: "Campeche",
            $city: "Florianópolis",
            $state: "SC",
            $number: "123"
        }
    }
*/
);

collectionPointsRoutes.get(
  '/',
  validateToken,
  CollectionPointController.listUserCollectionPoints /*
    #swagger.tags = ['Pontos de Coleta'],
    #swagger.description = 'Endpoint para listar todos os pontos de coleta cadastrados pelo usuário autenticado'
*/
);

collectionPointsRoutes.get(
  '/:local_id',
  validateToken,
  CollectionPointController.getCollectionPointById /*
    #swagger.tags = ['Pontos de Coleta'],
    #swagger.description = 'Endpoint para obter detalhes de um ponto de coleta específico cadastrado pelo usuário autenticado',
    #swagger.parameters['local_id'] = {
        in: 'path',
        description: 1,
        required: true,
        type: 'integer'
    }
*/
);

collectionPointsRoutes.delete(
  '/:local_id',
  validateToken,
  CollectionPointController.deleteCollectionPoint /*
    #swagger.tags = ['Pontos de Coleta'],
    #swagger.description = 'Endpoint para excluir um ponto de coleta específico cadastrado pelo usuário autenticado',
    #swagger.parameters['local_id'] = {
        in: 'path',
        description: 'ID do ponto de coleta',
        required: true,
        type: 'integer'
    }
*/
);

collectionPointsRoutes.put(
  '/:local_id',
  validateToken,
  CollectionPointController.updateCollectionPoint /*
    #swagger.tags = ['Pontos de Coleta'],
    #swagger.description = 'Endpoint para atualizar informações de um ponto de coleta específico cadastrado pelo usuário autenticado',
    #swagger.parameters['local_id'] = {
        in: 'path',
        description: 'ID do ponto de coleta',
        required: true,
        type: 'integer'
    },
    #swagger.parameters['atualizarPontoDeColeta'] = {
        in: 'body',
        description: 'Dados atualizados do ponto de coleta',
        required: true,
        schema: {
            $name: "Ponto Dakir Polidoro Atualizado",
            $description: "Descrição atualizada do ponto de coleta",
            $recycle_types: "Vidro, Papel, Plástico",
            $postalcode: "88063-565",
            $street: "Rua Radialista Dakir Polidoro",
            $neighborhood: "Campeche",
            $city: "Florianópolis",
            $state: "SC",
            $number: "123"
        }
    }
*/
);

collectionPointsRoutes.get(
  '/:local_id/maps',
  validateToken,
  CollectionPointController.getCollectionPointMapLink /*
    #swagger.tags = ['Pontos de Coleta'],
    #swagger.description = 'Endpoint para obter o link do Google Maps de um ponto de coleta específico cadastrado pelo usuário autenticado',
    #swagger.parameters['local_id'] = {
        in: 'path',
        description: 'ID do ponto de coleta',
        required: true,
        type: 'integer'
    }
*/
);

module.exports = collectionPointsRoutes;
