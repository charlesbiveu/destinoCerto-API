const { Router } = require('express');
const CollectionPointController = require('../controllers/CollectionPointController');
const validateToken = require('../middlewares/validateToken');

const collectionPointsRoutes = new Router();

collectionPointsRoutes.post('/criar', validateToken, CollectionPointController.createCollectionPoint /*
    #swagger.tags = ['Pontos de Coleta'],
    #swagger.description = 'Endpoint para criar um ponto de coleta',
    #swagger.parameters['criarPontoDeColeta'] = {
        in: 'body',
        description: 'Dados do ponto de coleta. Importante para teste recycle_type deve ser um array com valores de 1 a 20',
        required: true,
        schema: {
            $name: "Ponto Dakir Polidoro",
            $description: "Este é um ponto de coleta da comcap para recolhimento de vidros",
            $postalcode: "88063-565",
            $street: "Rua Radialista Dakir Polidoro",
            $neighborhood: "Campeche",
            $city: "Florianópolis",
            $state: "SC",
            $number: "123",
            recycle_types: [1, 2, 3]
        }
    }
*/);

module.exports = collectionPointsRoutes;
