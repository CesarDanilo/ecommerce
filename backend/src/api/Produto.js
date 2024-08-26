const express = require('express');
const rotas = express.Router();

const ProdutoControllers = require('../controllers/Produto');
const storage = require('../middewares/produtos/multerConfig');

const multer = require('multer');
const upload = multer({ storage: storage });


rotas.get('/', ProdutoControllers.listarProduto);

rotas.post('/', upload.single('imagem'), ProdutoControllers.inserirProduto);

rotas.put('/:id', ProdutoControllers.editarProduto);

rotas.delete('/:id', ProdutoControllers.excluirProduto);

module.exports = rotas;