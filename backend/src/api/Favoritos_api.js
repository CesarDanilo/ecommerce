const express = require('express');
const rotas = express.Router();

const FavoritosControllers = require('../controllers/Favorito');

// Rota para listar todos os favoritos
rotas.get('/', FavoritosControllers.listarFavoritos);

// Rota para inserir um novo favorito
rotas.post('/', FavoritosControllers.inserirFavoritos);

// Rota para editar um favorito existente
rotas.put('/:id', FavoritosControllers.editarFavoritos);

// Rota para excluir um favorito
rotas.delete('/:id', FavoritosControllers.excluirFavoritos);

module.exports = rotas;
