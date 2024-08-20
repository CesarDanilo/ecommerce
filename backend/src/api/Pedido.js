const express = require('express');
const rotas = express.Router();

const PedidoControllers = require('../controllers/Pedido');

rotas.get('/', PedidoControllers.listarPedido);

rotas.post('/', PedidoControllers.inserirPedido);

rotas.put('/:id', PedidoControllers.editarPedido);

rotas.delete('/:id', PedidoControllers.excluirPedido);

module.exports = rotas;