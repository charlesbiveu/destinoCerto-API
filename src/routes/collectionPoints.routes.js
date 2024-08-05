const { Router } = require('express');
const CollectionPointController = require('../controllers/CollectionPointController');
const validateToken = require('../middlewares/validateToken');

const collectionPointsRoutes = new Router();

collectionPointsRoutes.post(
  '/',
  validateToken,
  CollectionPointController.createCollectionPoint /*
      #swagger.tags = ['Pontos de Coleta'],
      #swagger.description = description: 'Endpoint para criar um ponto de coleta.<br><ul><li>Somente usuários autenticados podem criar um ponto de coleta e o ponto de coleta será veiculado ao usuário autenticado <small>Roteiro da aplicação 7.b</small></li><li>Todos os campos são obrigatórios logo se o usuário não preencher os campos, o endpoint irá retornar status 400 com a mensagem sobre o campo que não foi preenchido <small>Roteiro da aplicação 7.c</small></li><li>Caso o cep não for encontrado no <b>nominatim.openstreetmap</b> as colunas latitude, longitude e map_link serão preenchidas com null.</li><li>Se tudo der certo o sistema ira devolver o status 201 com as informações do novo ponto de coleta.</li><li>Se houver erro o sistema ira devolver o status 500 com a mensagem: <b>Erro interno do servidor // Internal Server Error</b> e no console log irá exibir o erro capturado no catch</li></ul>',
     #swagger.parameters['criarPontoDeColeta'] = {
          in: 'body',
          description: 'Dados do ponto de coleta.',
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
  /* #swagger.tags = ['Pontos de Coleta']
     #swagger.description = 'Endpoint para listar todos os pontos de coleta cadastrados pelo usuário autenticado <small>Roteiro da aplicação 8.a</small><br>No momento do login, o id do usuário é armazenado no token, logo o endpoint ira usar esse id para garantir que<br>apenas o usuário veja apenas os pontos de coleta que ele criou. <small>Roteiro da aplicação 8.b</small>'
  */
  CollectionPointController.listUserCollectionPoints
);

collectionPointsRoutes.get(
  '/:local_id',
  validateToken,
  /* #swagger.tags = ['Pontos de Coleta']
     #swagger.description = 'Endpoint para obter detalhes de um ponto de coleta específico cadastrado pelo usuário autenticado <small>Roteiro da aplicação 9.a</small><br>No momento do login, o id do usuário é armazenado no token, logo o endpoint ira usar esse id para garantir que<br>apenas o usuário autenticado tenha acesso a essas informações. <small>Roteiro da aplicação 9.b</small>'
     #swagger.parameters['local_id'] = {
          in: 'path',
          description: 'ID do ponto de coleta',
          required: true,
          type: 'integer'
      }
  */
  CollectionPointController.getCollectionPointById
);

collectionPointsRoutes.delete(
  '/:local_id',
  validateToken,
  /* #swagger.tags = ['Pontos de Coleta']
     #swagger.description = 'Endpoint para excluir um ponto de coleta específico cadastrado pelo usuário autenticado <small>Roteiro da aplicação 10.a</small><br>No momento do login, o id do usuário é armazenado no token, logo o endpoint ira usar esse id para garantir que<br>apenas o usuário autenticado e que criou o ponto de coleta tenha acesso a essas informações. <small>Roteiro da aplicação 10.b</small><ul><li>status 201 - Ponto de coleta excluído com sucesso</li><li>status 404 - Ponto de coleta não encontrado</li><li>status 500 - Erro interno</li></ul>'
     #swagger.parameters['local_id'] = {
          in: 'path',
          description: 'ID do ponto de coleta',
          required: true,
          type: 'integer'
      }
  */
  CollectionPointController.deleteCollectionPoint
);

collectionPointsRoutes.put(
  '/:local_id',
  validateToken,
  /* #swagger.tags = ['Pontos de Coleta']
     #swagger.description = 'Endpoint para atualizar informações de um ponto de coleta específico cadastrado pelo usuário autenticado <small>Roteiro da aplicação 10.a</small><br>No momento do login, o id do usuário é armazenado no token, logo o endpoint ira usar esse id para garantir que<br>apenas o usuário autenticado e que criou o ponto de coleta possa alterar ele <small>Roteiro da aplicação 10.b</small>.<ul><li>Somente o usuário que criou o ponto de coleta pode atualizar</li><li>Todos os campos são obrigatórios, logo se o usuário que criou o ponto de coleta não preencher os campos, o endpoint irá retornar status 400 com a mensagem sobre o campo que não foi preenchido</li><li>Caso o cep não for encontrado no <b>nominatim.openstreetmap</b> as colunas latitude, longitude e map_link serão preenchidas com null.</li><li>Se tudo der certo o sistema ira devolver o status 201 com as informações do ponto de coleta atualizado.</li><li>Se houver erro o sistema ira devolver o status 500 com a mensagem: <b>Erro interno do servidor // Internal Server Error</b> e no console log irá exibir o erro capturado no catch</li><li>status 404 - Ponto de coleta não encontrado</li></ul>'
     #swagger.parameters['local_id'] = {
          in: 'path',
          description: 'ID do ponto de coleta',
          required: true,
          type: 'integer'
      }
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
  CollectionPointController.updateCollectionPoint
);

collectionPointsRoutes.get(
  '/:local_id/maps',
  validateToken,
  /* #swagger.tags = ['Pontos de Coleta']
     #swagger.description = 'Endpoint para obter o link do Google Maps de um ponto de coleta específico cadastrado pelo usuário autenticado. <small>Roteiro da aplicação 11.a</small><br><ul><li>Caso não encontre o ponto de coleta, o sistema tentará novamente gerar o link pelo cep</li><li>Caso não encontre o cep, irá devolver o status 404 com a mensagem que o CEP não foi encontrado, então o link para o Google Maps é nulo // The postal code was not found, so the Google Maps link is null <small>Roteiro da aplicação 11.b</small></li><li>Somente o usuário que criou o ponto de coleta pode acessar o link <small>Roteiro da aplicação 11.c</small></li></ul>'
     #swagger.parameters['local_id'] = {
          in: 'path',
          description: 'ID do ponto de coleta',
          required: true,
          type: 'integer'
      }
  */
  CollectionPointController.getCollectionPointMapLink
);

module.exports = collectionPointsRoutes;
