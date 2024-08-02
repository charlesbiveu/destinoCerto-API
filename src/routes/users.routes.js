const { Router } = require('express');
const UserController = require('../controllers/UserController');

const usersRoutes = new Router();

usersRoutes.post('/criar', UserController.createUser
    /*
        #swagger.tags = ['Usuários']
        #swagger.description = 'Endpoint para criar um usuário'
        #swagger.parameters['criarUsuario'] = {
            in: 'body',
            description: 'Dados do usuário',
            required: true,
            schema: {
                $name: "Usuario Teste",
                $cpf: "12345678901",
                $gender: "M",
                $email: "teste@gmail.com",
                $password: "Teste123!",
                $birthdate: "2000-01-01",
                $postalcode: "12345678",
                $street: "Rua Exemplo",
                $neighborhood: "Bairro Exemplo",
                $city: "Cidade Exemplo",
                $state: "EX",
                $number: "123"
            }
        }
    */
);

module.exports = usersRoutes;
