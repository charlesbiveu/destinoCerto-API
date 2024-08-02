const { Router } = require('express');
const CollectionPoint = require('../controllers/CollectionPointController');

const usersRoutes = new Router();

usersRoutes.post('/criar', CollectionPoint.createCollectionPoint
    /*
        #swagger.tags = ['Pontos de Coleta']
        #swagger.description = 'Endpoint para criar ponto de coleta'
        #swagger.parameters['criarPontoDeColeta'] = {
            in: 'body',
            description: 'Dados do ponto de coleta',
            required: true,
            schema: {
                $name: "Nelson Marcos Vinicius Oliveira",
                $cpf: "862.885.759-17",
                $gender: "M",
                $email: "nelsonmarcosoliveira@kimmay.com.br",
                $password: "Teste123!",
                $birthdate: "1975-08-02",
                $postalcode: "88067-108",
                $street: "Servidão Manoel Barbosa",
                $neighborhood: "Pântano do Sul",
                $city: "Florianópolis",
                $state: "SC",
                $number: "634"
            }
        }
    */
);

module.exports = usersRoutes;
