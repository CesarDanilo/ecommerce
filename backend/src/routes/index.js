const express = require('express')
const rotas = express.Router()

const rotasFavoritos = require('../api/Favoritos_api');
const rotasPedidoProduto = require('../api/PedidoProduto_api');
const rotasPedido = require('../api/Pedido_api');
const rotasProduto = require('../api/Produto_api');
const rotasUsers = require('../api/Users_api');

rotas.use('/favoritos', rotasFavoritos)

rotas.use('/pedidoProduto', rotasPedidoProduto);

rotas.use('/pedido', rotasPedido);

rotas.use('/produto', rotasProduto);

rotas.use('/users', rotasUsers);

