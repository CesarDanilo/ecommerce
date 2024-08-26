const express = require('express');
const rotas = express.Router();
const upload = require('../middewares/produtos/multerConfig')

const ProdutoControllers = require('../controllers/Produto');


rotas.get('/', ProdutoControllers.listarProduto);

rotas.post('/', upload.single('img'), ProdutoControllers.inserirProduto);

rotas.put('/:id', ProdutoControllers.editarProduto);

rotas.delete('/:id', ProdutoControllers.excluirProduto);

module.exports = rotas;