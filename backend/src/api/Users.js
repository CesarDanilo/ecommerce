const express = require('express');
const rotas = express.Router();

const UsersControllers = require('../controllers/Users');

rotas.get('/', UsersControllers.listarUsers);

rotas.post('/', UsersControllers.inserirUsers);

rotas.put('/:id', UsersControllers.editarUsers);

rotas.delete('/:id', UsersControllers.excluirUsers);

module.exports = rotas;