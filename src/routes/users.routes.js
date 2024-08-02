const { Router } = require('express');
const UserController = require('../controllers/UserController');

const usersRoutes = new Router();

usersRoutes.post('/criar', UserController.createUser
    /*
        #swagger.tags = ['Usuários']
        #swagger.description = 'Endpoint para criar um usuário. Senha deve conter no minimo 8 caracteres, maiuscula, minuscula e caractere especial.  O cpf deve ser válido'
        #swagger.parameters['criarUsuario'] = {
            in: 'body',
            description: 'Dados do usuário',
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
