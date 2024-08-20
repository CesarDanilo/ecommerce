const express = require('express');
const rotas = express.Router();

const PedidoProdutoControllers = require('../controllers/PedidoProduto');

rotas.get('/', PedidoProdutoControllers.listarPedidoProduto);

rotas.post('/', PedidoProdutoControllers.inserirPedidoProduto);

rotas.put('/:id', PedidoProdutoControllers.editarPedidoProduto);

rotas.delete('/:id', PedidoProdutoControllers.excluirPedidoProduto);

module.exports = rotas;