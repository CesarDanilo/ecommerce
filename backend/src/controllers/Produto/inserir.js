const { Produto } = require('../../database/models/');
const path = require('path');

const inserirProduto = async (req, res, next) => {
    try {
        const { nome, preco, descricao, estoque } = req.body;
        const imagem_name = req.file.path.replace(/\\/g, "/"); // Corrigido para armazenar o caminho da imagem corretamente
        const imagem = path.basename(imagem_name)
        console.log("nome da img",imagem)

        // Salve as informações no banco de dados, incluindo o caminho da imagem
        const produto = {
            nome,
            preco,
            descricao,
            estoque,
            imagem,
        };

        // Supondo que você esteja usando Sequelize ou qualquer outro ORM
        const savedProduct = await Produto.create(produto); // ajuste de acordo com o seu ORM

        res.json(savedProduct);
        
        console.log("Sucesso ao salvar produto:");
    } catch (error) {
        console.error("Erro ao salvar produto:", error);
        res.status(500).json({ message: "Erro ao salvar produto" });
    }
}

module.exports = inserirProduto;
