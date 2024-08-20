const express = require('express');
const rotas = express.Router();

const ProdutoControllers = require('../controllers/Produto');

rotas.get('/', ProdutoControllers.listarProduto);

rotas.post('/', ProdutoControllers.inserirProduto);

rotas.put('/:id', ProdutoControllers.editarProduto);

rotas.delete('/:id', ProdutoControllers.excluirProduto);

module.exports = rotas;