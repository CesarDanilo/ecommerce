const { Produto } = require('../../database/models/');

const inserirProduto = async (req, res, next) => {
    try {
        const { nome, preco, descricao, estoque } = req.body;
        const imagemPath = req.file ? req.file.path.replace(/\\/g, "/") : null; // Corrigido para armazenar o caminho da imagem corretamente
        console.log(imagemPath)
        // Salve as informações no banco de dados, incluindo o caminho da imagem
        const produto = {
            nome,
            preco,
            descricao,
            estoque,
            imagemPath,
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
