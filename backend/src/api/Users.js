const express = require('express');
const rotas = express.Router();

const UsersControllers = require('../controllers/Users');
const validationLogin = require('../middewares/Users/validationLogin')

rotas.get('/', UsersControllers.listarUsers);

rotas.post('/', validationLogin, UsersControllers.inserirUsers);

rotas.put('/:id', UsersControllers.editarUsers);

rotas.delete('/:id', UsersControllers.excluirUsers);

module.exports = rotas;