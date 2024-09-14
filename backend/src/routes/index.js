const express = require('express');
const rotas = express.Router();

const favoritosRoutes = require('../api/Favoritos_api');
const pedidoProdutoRoutes = require('../api/PedidoProduto');
const pedidoRoutes = require('../api/Pedido');
const produtoRoutes = require('../api/Produto');
const usersRoutes = require('../api/Users');
const carrinhoRoutes = require('../api/Carrinho');

// Definindo as rotas
rotas.use('/favoritos', favoritosRoutes);
rotas.use('/pedidoProduto', pedidoProdutoRoutes);
rotas.use('/pedido', pedidoRoutes);
rotas.use('/produto', produtoRoutes);
rotas.use('/users', usersRoutes);
rotas.use('/carrinho', carrinhoRoutes);

module.exports = rotas;
