const express = require('express');
const rotas = express.Router();

const CarrinhoControllers = require('../controllers/Carrinho');

rotas.get('/', CarrinhoControllers.listarCarrinho);

rotas.get('/:id', CarrinhoControllers.listarCarrinho);

rotas.post('/', CarrinhoControllers.inserirCarrinho);

rotas.put('/:id', CarrinhoControllers.editarCarrinho);

rotas.delete('/:id', CarrinhoControllers.excluirCarrinho);

module.exports = rotas;