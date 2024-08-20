const express = require('express');
const rotas = express.Router();

const FavoritosControllers = require('../controllers/Favoritos');

rotas.get('/', FavoritosControllers.listarFavoritos);

rotas.post('/', FavoritosControllers.inserirFavoritos);

rotas.put('/:id', FavoritosControllers.editarFavoritos);

rotas.delete('/:id', FavoritosControllers.excluirFavoritos);

module.exports = rotas;