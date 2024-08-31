const express = require('express');
const rotas = express.Router();

const UsersControllers = require('../controllers/Users');
const validationCreateLogin = require('../middewares/Users/validationCreateLogin')
const validationLogin = require('../middewares/Users/validationLogin')

rotas.get('/', UsersControllers.listarUsers);

rotas.post('/', validationCreateLogin, UsersControllers.inserirUsers);
rotas.post('/auth/login', validationLogin);

rotas.put('/:id', UsersControllers.editarUsers);

rotas.delete('/:id', UsersControllers.excluirUsers);

module.exports = rotas;